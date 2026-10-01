// Premium pena'lar (gerçek para, IAP) köprüsü — premium.js/season-pass.js ile
// AYNI desen (cordova-plugin-purchase; tarayıcıda/CdvPurchase yokken tüm
// çağrılar sessizce no-op'tur). Tek fark: burada TEK değil 9 ürün var, bu
// yüzden register() tek bir onOwned/onPriceReady çiftini HANGİ ürünün
// onaylandığı/fiyatlandığı bilgisiyle (productId parametresi) çağırıyor —
// çağıran taraf (main.js) o id'yi stats.owned.skins'e eklemekten sorumlu.
// Her ürün NON_CONSUMABLE (bir kere alınır, kalıcıdır — ad-free premium ile
// aynı tür). Play Console + App Store Connect'te BU ID'LERLE (aşağıdaki
// PRODUCT_IDS) birer "Yönetilmeyen ürün" oluşturulması gerekir (bkz.
// MOBILE_APP.md'deki remove_ads kurulumu) — oluşturulana kadar satın alma
// çağrıları sessizce hiçbir şey yapmaz.
(function () {
  const PRODUCT_IDS = ['pena_fire','pena_ice','pena_toxic','pena_lightning','pena_galaxy','pena_pinkswirl','pena_wood','pena_lion','pena_diamond'];
  const FALLBACK_PRICES = {
    pena_fire:'₺14.99', pena_ice:'₺14.99', pena_toxic:'₺14.99',
    pena_lightning:'₺19.99', pena_galaxy:'₺19.99', pena_pinkswirl:'₺19.99',
    pena_wood:'₺24.99', pena_lion:'₺24.99', pena_diamond:'₺29.99',
  };

  function isAvailable() {
    return !!(window.CdvPurchase && window.CdvPurchase.store);
  }

  function storePlatform() {
    const { Platform } = window.CdvPurchase;
    const p = window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform();
    return p === 'ios' ? Platform.APPLE_APPSTORE : Platform.GOOGLE_PLAY;
  }

  function register(onOwned, onPriceReady) {
    if (!isAvailable()) return;
    const { store, ProductType } = window.CdvPurchase;
    PRODUCT_IDS.forEach(id => store.register({ id, type: ProductType.NON_CONSUMABLE, platform: storePlatform() }));

    store.when().productUpdated((p) => {
      if (PRODUCT_IDS.indexOf(p.id) === -1) return;
      if (p.owned) { onOwned && onOwned(p.id); }
      else if (p.pricing && p.pricing.price) { onPriceReady && onPriceReady(p.id, p.pricing.price); }
    });
    store.when().approved((transaction) => transaction.verify());
    store.when().verified((receipt) => receipt.finish());
  }

  function purchase(productId) {
    if (!isAvailable()) return;
    const { store } = window.CdvPurchase;
    const product = store.get(productId);
    const offer = product && product.getOffer && product.getOffer();
    if (offer) store.order(offer);
  }

  function restore() {
    if (!isAvailable()) return;
    window.CdvPurchase.store.restorePurchases();
  }

  function fallbackPrice(productId) { return FALLBACK_PRICES[productId] || '₺19.99'; }

  window.PenaShop = { isNative: isAvailable, register, purchase, restore, fallbackPrice, PRODUCT_IDS };
})();
