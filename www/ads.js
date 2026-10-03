// Beat Orbit — reklam katmanı.
// Oyun kodu (index.html) sadece bu dosyadaki `Ads` objesini çağırır.
// - Android uygulaması olarak (Capacitor) çalışıyorsa: native-ads-bundle.js
//   üzerinden gerçek AdMob interstitial/rewarded akışı kullanılır.
// - Düz tarayıcıda / GitHub Pages'teki PWA sürümünde: aşağıdaki simülasyon
//   overlay'i ile aynı akış (izle → ödül) test edilebilir, oyun bozulmaz.
(function () {
  const SIM_AD_SECONDS = 4;
  let rewardedBusy = false;

  function isNative() {
    return !!(window.NativeAds && window.NativeAds.isNative && window.NativeAds.isNative());
  }

  function simOverlay() {
    let el = document.getElementById('adSimOverlay');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'adSimOverlay';
    el.style.cssText = 'position:fixed;inset:0;z-index:50;display:none;align-items:center;justify-content:center;'
      + 'flex-direction:column;gap:14px;background:rgba(2,3,10,.94);color:#eaf2ff;text-align:center;padding:26px;';
    el.innerHTML = '<div style="font-size:15px;opacity:.65;letter-spacing:1px">REKLAM (TEST)</div>'
      + '<div style="font-size:44px">📺</div>'
      + '<div id="adSimText" style="font-size:16px;font-weight:700">Reklam oynatılıyor…</div>'
      + '<div style="font-size:12px;opacity:.55;max-width:280px">Bu bir simülasyondur — uygulama Google Play\'de yayınlandığında burada gerçek bir AdMob reklamı oynatılır.</div>';
    document.body.appendChild(el);
    return el;
  }

  function showSimAd(onReward, onSkip) {
    const el = simOverlay();
    const textEl = el.querySelector('#adSimText');
    let t = SIM_AD_SECONDS;
    el.style.display = 'flex';
    textEl.textContent = 'Reklam oynatılıyor… ' + t + 's';
    const timer = setInterval(() => {
      t -= 1;
      if (t <= 0) {
        clearInterval(timer);
        el.style.display = 'none';
        onReward && onReward();
      } else {
        textEl.textContent = 'Reklam oynatılıyor… ' + t + 's';
      }
    }, 1000);
  }

  const Ads = {
    async init() {
      if (isNative()) await window.NativeAds.init();
    },
    showInterstitial(onClose) {
      if (isNative()) { window.NativeAds.showInterstitial(onClose); return; }
      // Web/PWA sürümünde interstitial göstermek yerine sessizce geç —
      // GitHub Pages'teki oyunu rahatsız etmeyelim, gerçek reklamlar sadece
      // uygulama içinde çalışır.
      onClose && onClose();
    },
    // Aynı anda yalnız bir ödüllü reklam: hızlı çoklu tıklama N reklam/N ödül
    // açmasın. Her callback en fazla bir kez çalışır.
    showRewarded(onReward, onCancel) {
      if (rewardedBusy) return false;
      rewardedBusy = true;
      let done = false;
      const ok = () => { if (done) return; done = true; rewardedBusy = false; onReward && onReward(); };
      const no = () => { if (done) return; done = true; rewardedBusy = false; onCancel && onCancel(); };
      if (isNative()) window.NativeAds.showRewarded(ok, no);
      else showSimAd(ok, no);
      return true;
    },
    isRewardedBusy() { return rewardedBusy; },
    showPrivacyOptions() {
      if (isNative()) { window.NativeAds.showPrivacyOptions(); return; }
      // Web sürümünde AdMob/UMP yok — reklam onayı yalnızca uygulama içinde geçerli.
      if (window.queueToast) queueToast('Reklam onay ayarları yalnızca uygulama sürümünde kullanılabilir.');
    },
  };

  window.Ads = Ads;
})();
