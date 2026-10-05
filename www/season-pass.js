// "Sezon Bileti" (Battle-Pass premium çizgisi) uygulama içi satın alma köprüsü.
// premium.js ile aynı desen, tek fark: ürün CONSUMABLE — her ay (sezon
// değiştiğinde) stats.seasonPremium sıfırlanır ve tekrar satın alınabilmesi
// gerekir, bu yüzden NON_CONSUMABLE değil CONSUMABLE kullanılıyor.
(function () {
  const PRODUCT_ID = 'season_pass';
  const FALLBACK_PRICE_TEXT = '29 TL';

  function isAvailable() {
    return !!(window.CdvPurchase && window.CdvPurchase.store);
  }

  // Sadece kaydeder + handler bağlar; store.initialize() main.js'de,
  // Premium.register() ile birlikte, tek seferlik çağrılır (bkz. premium.js).
  // bkz. premium.js storePlatform() — aynı Google Play / Apple App Store ayrımı.
  function storePlatform() {
    const { Platform } = window.CdvPurchase;
    const p = window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform();
    return p === 'ios' ? Platform.APPLE_APPSTORE : Platform.GOOGLE_PLAY;
  }

  // Doğrulanan makbuzda bu ürün var mı? (cordova-plugin-purchase v13:
  // receipt.collection = doğrulanmış satın alımlar; sourceReceipt.transactions
  // = işlemler, her birinde products[].id)
  function receiptHasProduct(receipt, id) {
    if (!receipt) return false;
    if ((receipt.collection || []).some((c) => c && c.id === id)) return true;
    const src = receipt.sourceReceipt;
    return !!(src && (src.transactions || []).some((t) => (t.products || []).some((p) => p && p.id === id)));
  }

  function register(onOwned, onPriceReady) {
    if (!isAvailable()) return;
    const { store, ProductType } = window.CdvPurchase;
    store.register({ id: PRODUCT_ID, type: ProductType.CONSUMABLE, platform: storePlatform() });

    store.when().productUpdated((p) => {
      if (p.id !== PRODUCT_ID) return;
      if (p.pricing && p.pricing.price) { onPriceReady && onPriceReady(p.pricing.price); }
    });
    // Sezon Bileti YALNIZ bu ürünü içeren bir doğrulamada açılır (eskiden
    // reklamsız paket ya da pena satın alınca da bedavaya açılıyordu).
    window.__iapVerifiedHooks = window.__iapVerifiedHooks || [];
    window.__iapVerifiedHooks.push((receipt) => { if (receiptHasProduct(receipt, PRODUCT_ID)) onOwned && onOwned(); });
    // approved→verify ve verified→finish dinleyicileri store genelindedir;
    // üç IAP dosyası (premium/gem-shop/season-pass) bunları yalnız BİR kez
    // bağlar (eskiden her dosya ayrı bağladığı için her işlem 3 kez doğrulanıyordu).
    if (!window.__iapHandlersBound) {
      window.__iapHandlersBound = true;
      window.__iapVerifiedHooks = window.__iapVerifiedHooks || [];
      store.when().approved((transaction) => transaction.verify());
      store.when().verified((receipt) => {
        window.__iapVerifiedHooks.forEach((h) => { try { h(receipt); } catch (e) {} });
        receipt.finish();
      });
    }
  }

  function purchase() {
    if (!isAvailable()) return;
    const { store } = window.CdvPurchase;
    const product = store.get(PRODUCT_ID);
    const offer = product && product.getOffer && product.getOffer();
    if (offer) store.order(offer);
  }

  window.SeasonPass = { isNative: isAvailable, register, purchase, FALLBACK_PRICE_TEXT };
})();
