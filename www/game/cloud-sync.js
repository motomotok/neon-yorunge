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

// KAPALI: native giriş (@capacitor-firebase/authentication) oturumu Firebase
// JS SDK'ya aktarılmıyor, bu yüzden Firestore istekleri yetkisiz kalıyor; iOS'ta
// GoogleSignIn pod'u ve REVERSED_CLIENT_ID URL şeması da eksik. Düzeltilip
// cihazda test edilene kadar Ayarlar'daki hesap bölümü gizli.
const ACCOUNT_LINK_ENABLED = false;

async function initCloudSync() {
  if (!ACCOUNT_LINK_ENABLED) {
    ['linkRow', 'acctLinkDesc', 'acctDeleteRow'].forEach(id => {
      const el = document.getElementById(id); if (el) el.style.display = 'none';
    });
    return;
  }
  if (!window.CloudAccount) return;
  try {
    // Daha önce hiç hesap bağlamadıysan burada hiçbir Firebase çağrısı
    // yapılmaz — anonim oturum SADECE linkAccount() tetiklendiğinde açılır.
    const user = await CloudAccount.getExistingUser();
    if (!user) { syncLinkButtons(); return; }
    const cloud = await CloudAccount.bootstrap();
    _cloudProfile = cloud;
    // Yerel ilerleme ile bulut yedeğini birleştir: her alanda "daha ileride
    // olan" kazanır, hiçbir alanda geriye gidilmez.
    mergeCloudProfile(cloud);
    saveStats();
    refreshWallet();
    _cloudReady = true;
    syncLinkButtons();
    pushCloudState();
  } catch (e) { /* çevrimdışı / Firebase hazır değil — sessizce yerelde devam */ }
}

// Bulut belgesini oyuncu kendisi yazabildiği için (Firestore kuralı yalnız
// "kendi belgen" diyor) oradan gelen hiçbir şey para değerinde güvenilmez:
//  * Elmas buluttan ALINMAZ — satın alınan elmaslar mağaza makbuzlarından
//    (restorePurchases) yeniden kurulur; buluttaki sayı yalnız bilgi.
//  * Sezon Bileti yalnız AYNI sezonun anahtarıyla gelirse açılır (geçen
//    sezonun bileti yeni sezonu açmaz).
//  * Gerçek parayla alınan (gate 'iap') kozmetikler buluttan alınmaz; mağaza
//    geri yüklemesi verir. Nota/elmasla alınanlar birleştirilir.
// (Hesap bağlama şu an kapalı — ACCOUNT_LINK_ENABLED — açılmadan önce güvenli.)
function mergeCloudProfile(cloud) {
  const iapGate = (it) => !!(it && it.gate && it.gate.type === 'iap');
  if (cloud.owned) {
    const themes = (cloud.owned.themes || []).filter(k => THEMES[k] && !iapGate(THEMES[k]));
    const skins = (cloud.owned.skins || []).filter(id => { const sk = SKINS.find(x => x.id === id); return sk && !iapGate(sk); });
    stats.owned.themes = Array.from(new Set([...(stats.owned.themes || []), ...themes]));
    stats.owned.skins = Array.from(new Set([...(stats.owned.skins || []), ...skins]));
  }
  if (cloud.seasonPassKey && cloud.seasonPassKey === stats.seasonKey) stats.seasonPremium = true;
}

function pushCloudState() {
  if (!_cloudReady || !window.CloudAccount) return;
  CloudAccount.syncState({
    gems: stats.gems || 0,
    lifetimeGems: stats.lifetimeGems || 0,
    owned: { themes: stats.owned.themes || [], skins: stats.owned.skins || [] },
    seasonPassActive: !!stats.seasonPremium,
    seasonPassKey: stats.seasonPremium ? (stats.seasonKey || '') : '',
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
  if (res.restoredFromCloud) {
    // Bu hesap başka bir cihazda zaten bağlıydı — oradaki bulut profilini
    // (elmas/kozmetikler/sezon bileti) indirip yerelle birleştir.
    const cloud = await CloudAccount.bootstrap();
    mergeCloudProfile(cloud);
    saveStats();
    refreshWallet();
    _cloudProfile = cloud;
  } else {
    _cloudProfile = _cloudProfile || {};
  }
  _cloudReady = true;
  _cloudProfile.linkedProviders = res.linkedProviders || _cloudProfile.linkedProviders || [];
  syncLinkButtons();
  pushCloudState();
  queueToast(t('account_linked_toast'));
}

async function deleteCloudAccount() {
  if (!window.CloudAccount) return;
  const res = await CloudAccount.deleteAccount();
  if (!res.ok) { queueToast(t('account_link_err_toast')); return false; }
  _cloudProfile = null;
  _cloudReady = false;
  syncLinkButtons();
  return true;
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
  const anyLinked = cloudLinked('google.com') || cloudLinked('apple.com');
  const delRow = document.getElementById('acctDeleteRow');
  if (delRow) delRow.style.display = anyLinked ? '' : 'none';
}

window.CloudSync = {
  init: initCloudSync,
  onGameOver() { pushCloudState(); },
  linkGoogle() { linkAccount('google'); },
  linkApple() { linkAccount('apple'); },
  deleteAccount: deleteCloudAccount,
};
