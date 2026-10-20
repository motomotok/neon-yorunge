// Uygulama içi satın almanın (cordova-plugin-purchase) ORTAK kısmı:
// premium.js, season-pass.js ve gem-shop.js bunu kullanır (eskiden üçünde
// de aynı mağaza seçimi / sipariş / "bir kez bağla" kodu kopyalanmıştı ve
// paylaşılan durum window.__iapHandlersBound gibi globallerdeydi).
// Tarayıcıda (CdvPurchase yokken) her şey sessizce no-op'tur.
(function () {
  function available() {
    return !!(window.CdvPurchase && window.CdvPurchase.store);
  }
  // Google Play ve Apple App Store ürünleri ayrı ID havuzlarında; hangi
  // mağazada çalıştığımızı Capacitor söyler.
  function platform() {
    const { Platform } = window.CdvPurchase;
    const p = window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform();
    return p === 'ios' ? Platform.APPLE_APPSTORE : Platform.GOOGLE_PLAY;
  }
  // approved→verify ve verified→finish dinleyicileri mağaza geneline aittir:
  // yalnız BİR kez bağlanır (her modül ayrı bağlasaydı her işlem birden çok
  // kez doğrulanırdı). Doğrulanan makbuzu görmek isteyen modül onVerified ile
  // kanca ekler; kancalar finish()'ten ÖNCE çalışır.
  const verifiedHooks = [];
  let bound = false;
  function bindStoreHandlers() {
    if (bound || !available()) return;
    bound = true;
    const { store } = window.CdvPurchase;
    store.when().approved((transaction) => transaction.verify());
    store.when().verified((receipt) => {
      verifiedHooks.forEach((h) => { try { h(receipt); } catch (e) {} });
      receipt.finish();
    });
  }
  function onVerified(hook) { verifiedHooks.push(hook); }
  function order(productId) {
    if (!available()) return;
    const { store } = window.CdvPurchase;
    const product = store.get(productId);
    const offer = product && product.getOffer && product.getOffer();
    if (offer) store.order(offer);
  }
  function restore() {
    if (!available()) return;
    window.CdvPurchase.store.restorePurchases();
  }
  window.IAP = { available, platform, bindStoreHandlers, onVerified, order, restore };
})();
