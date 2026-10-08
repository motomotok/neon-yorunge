// Bu dosya native (Capacitor/Android) reklam köprüsünün KAYNAK dosyasıdır.
// Doğrudan index.html'e eklenmez — esbuild ile www/native-ads-bundle.js olarak
// paketlenir (npm run build:ads). Sebep: @capacitor-community/admob bir npm
// paketi olduğu için tarayıcıda <script> ile doğrudan çalışmaz, bundle gerekir.
import { Capacitor } from '@capacitor/core';
import { AdMob, InterstitialAdPluginEvents } from '@capacitor-community/admob';

// Gerçek reklam birimi tanımlı olmayan platform (ör. web) otomatik olarak
// Google'ın test birimleriyle çalışır.
const PROD_AD_IDS = {
  ios: {
    interstitial: 'ca-app-pub-6695608611504367/3726616221',
    rewarded: 'ca-app-pub-6695608611504367/8675690573',
  },
  android: {
    interstitial: 'ca-app-pub-6695608611504367/3231792209',
    rewarded: 'ca-app-pub-6695608611504367/6035330777',
  },
};
const TEST_AD_IDS = {
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
  rewarded: 'ca-app-pub-3940256099942544/5224354917',
};

const PLATFORM = Capacitor.getPlatform();
const PROD_IDS = PROD_AD_IDS[PLATFORM] || null;
const ADS_TEST_MODE = !PROD_IDS;
const INTERSTITIAL_AD_ID = ADS_TEST_MODE ? TEST_AD_IDS.interstitial : PROD_IDS.interstitial;
const REWARDED_AD_ID = ADS_TEST_MODE ? TEST_AD_IDS.rewarded : PROD_IDS.rewarded;

const isNative = () => Capacitor.isNativePlatform();

let initPromise = null;
let interstitialReady = false;
let rewardedReady = false;
let lastInterstitialAt = 0;
const MIN_INTERSTITIAL_GAP_MS = 20000; // AdMob politikası: art arda reklam göstermeyi önle

// ATT izin penceresi (requestTrackingAuthorization) hiçbir yerde çağrılmıyor
// (bilinçli karar, bkz. Info.plist yorumu) — bu yüzden her reklam isteğine
// npa:true (Non-Personalized Ads) ekliyoruz. Bu olmadan iOS'ta App Store
// Connect'in Gizlilik formundaki "Takip yok" beyanıyla fiili reklam isteği
// davranışı çelişiyordu.
// Android'de reklam WebView'ı oyunla AYNI iş parçacığını paylaşır; reklam
// yüklenirken çalışan betikler (yüzlerce ms) oyun sırasında takılma yapıyordu.
// Ön yükleme oyun oynanırken ertelenir, menüde/oyun sonunda yapılır.
function whenNotPlaying(fn) {
  // `state` engine.js'teki global (klasik script, aynı global kapsam).
  const playing = typeof state !== 'undefined' && (state === 'play' || state === 'story');
  if (playing) setTimeout(() => whenNotPlaying(fn), 2000); else fn();
}

function preloadInterstitial() { whenNotPlaying(doPreloadInterstitial); }
function preloadRewarded() { whenNotPlaying(doPreloadRewarded); }

function doPreloadInterstitial() {
  interstitialReady = false;
  AdMob.prepareInterstitial({ adId: INTERSTITIAL_AD_ID, isTesting: ADS_TEST_MODE, npa: true })
    .then(() => { interstitialReady = true; })
    .catch(() => { interstitialReady = false; });
}

function doPreloadRewarded() {
  rewardedReady = false;
  AdMob.prepareRewardVideoAd({ adId: REWARDED_AD_ID, isTesting: ADS_TEST_MODE, npa: true })
    .then(() => { rewardedReady = true; })
    .catch(() => { rewardedReady = false; });
}

async function requestAndShowConsentIfNeeded() {
  try {
    const info = await AdMob.requestConsentInfo({ debugGeography: undefined });
    if (info.status === 'REQUIRED' && info.isConsentFormAvailable) {
      await AdMob.showConsentForm();
    }
  } catch (e) {
    // UMP formu yüklenemezse (örn. bölge desteklenmiyor) sessizce geç —
    // reklamlar niş kişiselleştirilmemiş modda çalışmaya devam eder.
  }
}

// Google'ın "EU User Consent Policy" kuralı gereği kullanıcı, onayını
// istediği an değiştirebilmeli (Ayarlar → "Reklam Onayını Yönet").
async function showPrivacyOptions() {
  if (!isNative()) return;
  try {
    await AdMob.resetConsentInfo();
    const info = await AdMob.requestConsentInfo();
    if (info.isConsentFormAvailable) await AdMob.showConsentForm();
  } catch (e) {}
}

function init() {
  if (!isNative()) return Promise.resolve();
  if (initPromise) return initPromise;
  initPromise = requestAndShowConsentIfNeeded()
    .then(() => AdMob.initialize({ initializeForTesting: ADS_TEST_MODE }))
    .then(() => { preloadInterstitial(); preloadRewarded(); })
    .catch(() => {});
  return initPromise;
}

async function showInterstitial(onClose) {
  if (!isNative()) { onClose && onClose(); return; }
  const now = Date.now();
  if (now - lastInterstitialAt < MIN_INTERSTITIAL_GAP_MS) { onClose && onClose(); return; }
  const handles = [];
  try {
    if (!interstitialReady) await AdMob.prepareInterstitial({ adId: INTERSTITIAL_AD_ID, isTesting: ADS_TEST_MODE, npa: true });
    lastInterstitialAt = Date.now();
    // showInterstitial() reklam AÇILINCA döner; onClose reklam gerçekten
    // kapanınca çalışsın (müzik ancak o zaman geri gelir). Olay hiç gelmezse
    // 2 dk sonra yine de devam edilir.
    const closed = new Promise((resolve) => {
      handles.push(AdMob.addListener(InterstitialAdPluginEvents.Dismissed, resolve));
      handles.push(AdMob.addListener(InterstitialAdPluginEvents.FailedToShow, resolve));
      setTimeout(resolve, 120000);
    });
    await AdMob.showInterstitial();
    await closed;
  } catch (e) {
    // Reklam yüklenemediyse oyunu bloklamadan devam et
  } finally {
    handles.forEach((h) => Promise.resolve(h).then((x) => x.remove()).catch(() => {}));
    onClose && onClose();
    preloadInterstitial();
  }
}

let rewardedShowing = false;   // aynı anda tek ödüllü reklam
async function showRewarded(onReward, onCancel) {
  if (!isNative()) { onCancel && onCancel(); return; }
  if (rewardedShowing) return;
  rewardedShowing = true;
  let rewardListener = null, dismissListener = null, settled = false;
  // Dinleyiciler her durumda (hata dahil) temizlenir; sızan bir dinleyici
  // sonraki reklamda eski bir callback'i (ör. eski bir revive) tetiklemesin.
  const cleanup = () => {
    try { rewardListener && rewardListener.remove(); } catch (e) {}
    try { dismissListener && dismissListener.remove(); } catch (e) {}
    rewardListener = dismissListener = null;
  };
  const finish = (rewarded) => {
    if (settled) return; settled = true;
    cleanup(); rewardedShowing = false; preloadRewarded();
    if (rewarded) onReward && onReward(); else onCancel && onCancel();
  };
  try {
    if (!rewardedReady) await AdMob.prepareRewardVideoAd({ adId: REWARDED_AD_ID, isTesting: ADS_TEST_MODE, npa: true });
    let gotReward = false;
    rewardListener = await AdMob.addListener('onRewardedVideoAdReward', () => { gotReward = true; });
    dismissListener = await AdMob.addListener('onRewardedVideoAdDismissed', () => finish(gotReward));
    await AdMob.showRewardVideoAd();
  } catch (e) {
    finish(false);
  }
}

window.NativeAds = { isNative, init, showInterstitial, showRewarded, showPrivacyOptions };
