// "Sezon Bileti" (Battle-Pass premium çizgisi) uygulama içi satın alma köprüsü.
// premium.js ile aynı desen. ÖNEMLİ: ürün tipi NON_CONSUMABLE ve ID sezona
// özel (season_pass_s1, season_pass_s2, ...) — tek, tekrar-satın-alınabilir
// bir CONSUMABLE kullanmıyoruz çünkü Apple süreli erişim hakkı veren ürünler
// için bunu kabul etmiyor VE Apple'ın "Satın alımları geri yükle" mekanizması
// consumable ürünleri hiç döndürmüyor (reinstall'da kalıcı olarak kaybolurdu).
// Sezon değişince activeSeason().id değişir, yeni sezon otomatik olarak YENİ
// bir product ID ister — önceki sezonun bileti bu sezonu açmaz, bu da
// "her sezon tekrar satın alınır" davranışını NON_CONSUMABLE ile doğal olarak
// korur. Yeni bir sezon eklendiğinde Play Console + App Store Connect'te o
// sezonun product ID'siyle yeni bir ürün oluşturulması gerekir.
(function () {
  function productId() {
    return 'season_pass_s' + (window.activeSeason ? activeSeason().id : 1);
  }
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
    const id = productId();
    store.register({ id, type: ProductType.NON_CONSUMABLE, platform: storePlatform() });

    store.when().productUpdated((p) => {
      if (p.id !== productId()) return;
      if (p.pricing && p.pricing.price) { onPriceReady && onPriceReady(p.pricing.price); }
    });
    // Sezon Bileti YALNIZ bu sezonun ürününü içeren bir doğrulamada açılır
    // (productId() her çağrıda TAZE okunur — geçen sezonun bileti bu sezonu
    // açmaz, bkz. dosya başındaki not).
    window.__iapVerifiedHooks = window.__iapVerifiedHooks || [];
    window.__iapVerifiedHooks.push((receipt) => { if (receiptHasProduct(receipt, productId())) onOwned && onOwned(); });
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
    const product = store.get(productId());
    const offer = product && product.getOffer && product.getOffer();
    if (offer) store.order(offer);
  }

  window.SeasonPass = { isNative: isAvailable, register, purchase, productId, FALLBACK_PRICE_TEXT };
})();
