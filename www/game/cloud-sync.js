// Beat Orbit — bulut hesap akışının oyun tarafı (düz <script>, esbuild ile
// paketlenmez). window.CloudAccount (firebase-bundle.js, src/cloud-account.js'ten
// derlenir) üzerinden Firebase ile konuşur. Ağ yoksa / Firebase henüz hazır
// değilse tüm fonksiyonlar sessizce no-op olur — oyun tamamen yerel veriyle
// çalışmaya devam eder, bu katman sadece bir bulut yedeğidir (bkz.
// cloud-account.js başındaki not: burada elmas/ödül VERİLMEZ, sadece
// satın alımların/sezon biletin cihaz değiştirince kaybolmaması için
// yedekleme + geri yükleme yapılır).
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
    saveStats();
    refreshWallet();
    _cloudReady = true;
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
  _cloudProfile = _cloudProfile || {};
  _cloudProfile.linkedProviders = res.linkedProviders || _cloudProfile.linkedProviders || [];
  syncLinkButtons();
  pushCloudState();
  queueToast(t('account_linked_toast'));
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

window.CloudSync = {
  init: initCloudSync,
  onGameOver() { pushCloudState(); },
  linkGoogle() { linkAccount('google'); },
  linkApple() { linkAccount('apple'); },
};
