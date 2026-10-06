// Beat Orbit — bulut hesap/davet akışının oyun tarafı (düz <script>, esbuild
// ile paketlenmez). window.CloudAccount (firebase-bundle.js, src/cloud-account.js'ten
// derlenir) üzerinden Firebase ile konuşur. Ağ yoksa / Firebase henüz hazır
// değilse tüm fonksiyonlar sessizce no-op olur — oyun tamamen yerel veriyle
// çalışmaya devam eder, bu katman sadece bir bulut yedeği + ödül kanalıdır.
// Elmas KAZANDIRAN her şey (hesap bağlama bonusu, davet ödülü) sunucuda
// (functions/index.js) doğrulanır; burası sadece sonucu yerel stats'a yansıtır.
let _cloudReady = false;
let _cloudProfile = null;

function cloudLinked(providerId) {
  return !!(_cloudProfile && (_cloudProfile.linkedProviders || []).includes(providerId));
}

async function initCloudSync() {
  if (!window.CloudAccount) return;
  try {
    await CloudAccount.ensureSignedIn();
    const cloud = await CloudAccount.bootstrap();
    _cloudProfile = cloud;
    // Yerel ilerleme ile bulut yedeğini birleştir: her alanda "daha ileride
    // olan" kazanır, hiçbir alanda geriye gidilmez.
    stats.gems = Math.max(stats.gems || 0, cloud.gems || 0);
    stats.lifetimeGems = Math.max(stats.lifetimeGems || 0, cloud.lifetimeGems || 0);
    if (cloud.owned) {
      stats.owned.themes = Array.from(new Set([...(stats.owned.themes || []), ...(cloud.owned.themes || [])]));
      stats.owned.skins = Array.from(new Set([...(stats.owned.skins || []), ...(cloud.owned.skins || [])]));
    }
    if (cloud.seasonPassActive) stats.seasonPremium = true;
    if (cloud.referredBy) stats.cloudReferredBy = true;
    saveStats();
    refreshWallet();
    _cloudReady = true;
    syncReferralUI();
    syncLinkButtons();
    pushCloudState();
  } catch (e) { /* çevrimdışı / Firebase hazır değil — sessizce yerelde devam */ }
}

function pushCloudState() {
  if (!_cloudReady || !window.CloudAccount) return;
  CloudAccount.syncState({
    gems: stats.gems || 0,
    lifetimeGems: stats.lifetimeGems || 0,
    owned: { themes: stats.owned.themes || [], skins: stats.owned.skins || [] },
    seasonPassActive: !!stats.seasonPremium,
    games: stats.games || 0,
    tutorialDone: !!stats.tutorialDone,
  }).catch(() => {});
}

async function linkAccount(which) {
  if (!window.CloudAccount) return;
  const btnId = which === 'google' ? 'linkGoogleBtn' : 'linkAppleBtn';
  const btn = document.getElementById(btnId);
  if (btn) btn.disabled = true;
  const res = await (which === 'google' ? CloudAccount.linkGoogle() : CloudAccount.linkApple());
  if (btn) btn.disabled = false;
  if (!res.ok) { queueToast(t('account_link_err_toast')); return; }
  const providerId = which === 'google' ? 'google.com' : 'apple.com';
  if (!_cloudProfile) _cloudProfile = {};
  if (!_cloudProfile.linkedProviders) _cloudProfile.linkedProviders = [];
  if (!_cloudProfile.linkedProviders.includes(providerId)) _cloudProfile.linkedProviders.push(providerId);
  if (res.granted && res.amount) {
    stats.gems = (stats.gems || 0) + res.amount;
    stats.lifetimeGems = (stats.lifetimeGems || 0) + res.amount;
    saveStats(); refreshWallet();
    queueToast(t('account_link_bonus_toast', { n: res.amount }));
  }
  syncLinkButtons();
  pushCloudState();
}

function syncLinkButtons() {
  [['google', 'linkGoogleBtn', 'linkGoogleStatusText'], ['apple', 'linkAppleBtn', 'linkAppleStatusText']].forEach(([which, btnId, statusId]) => {
    const providerId = which === 'google' ? 'google.com' : 'apple.com';
    const linked = cloudLinked(providerId);
    const btn = document.getElementById(btnId);
    if (btn) btn.style.display = linked ? 'none' : '';
    const status = document.getElementById(statusId);
    if (status && linked) {
      status.innerHTML = '<i class="gicon" data-icon="gem"></i> ' + (which === 'google' ? 'Google' : 'Apple') +
        ' <span style="color:#6fe08a">' + t('account_linked_badge') + '</span>';
    }
  });
}

function syncReferralUI() {
  const codeEl = document.getElementById('referralCodeText');
  if (codeEl) codeEl.textContent = (_cloudProfile && _cloudProfile.referralCode) || '······';
  const redeemRow = document.querySelector('.referralRedeemRow');
  if (redeemRow) redeemRow.style.display = (_cloudProfile && _cloudProfile.referredBy) ? 'none' : '';
}

async function redeemReferral() {
  if (!window.CloudAccount) return;
  const input = document.getElementById('referralInput');
  const code = ((input && input.value) || '').trim().toUpperCase();
  if (!code) return;
  const res = await CloudAccount.redeemReferralCode(code);
  if (res.ok) {
    _cloudProfile = _cloudProfile || {};
    _cloudProfile.referredBy = true;
    stats.cloudReferredBy = true; saveStats();
    if (input) input.value = '';
    syncReferralUI();
    queueToast(t('referral_redeem_ok_toast'));
  } else {
    const key = res.reason === 'already_redeemed' ? 'referral_redeem_err_already'
      : res.reason === 'not_found' ? 'referral_redeem_err_notfound'
      : 'referral_redeem_err_self';
    queueToast(t(key));
  }
}

async function shareReferralCode() {
  const code = (_cloudProfile && _cloudProfile.referralCode) || '';
  if (!code) return;
  const text = t('referral_share_text', { code });
  if (navigator.share) {
    try { await navigator.share({ title: 'Beat Orbit', text }); } catch (e) {}
  } else if (navigator.clipboard) {
    try { await navigator.clipboard.writeText(text); queueToast(t('toast_share_copied')); } catch (e) { queueToast(t('toast_share_copy_failed')); }
  } else queueToast(t('toast_share_unsupported'));
}

window.CloudSync = {
  init: initCloudSync,
  onGameOver() {
    pushCloudState();
    if (_cloudReady && stats.cloudReferredBy && !stats.referralMilestoneClaimedLocal && window.CloudAccount) {
      CloudAccount.claimReferralMilestone().then(res => {
        if (!res) return;
        if (res.granted || res.reason === 'already_claimed' || res.reason === 'no_referrer') {
          stats.referralMilestoneClaimedLocal = true; saveStats();
        }
      }).catch(() => {});
    }
  },
  linkGoogle() { linkAccount('google'); },
  linkApple() { linkAccount('apple'); },
  redeemReferral,
  shareReferralCode,
};
