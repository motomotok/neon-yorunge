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
  const verifiedHooks = [], approvedHooks = [];
  let bound = false;
  function bindStoreHandlers() {
    if (bound || !available()) return;
    bound = true;
    const { store } = window.CdvPurchase;
    // Teslimat ONAY anında yapılır: tüketilebilir ürün (elmas) finish() ile
    // hemen tüketildiği için "sahip" durumu hiç görünmeyebiliyor; eskiden elmas
    // bu yüzden gelmiyor, reklamsız da ancak yeniden açılışta devreye giriyordu.
    // Aynı işlem tekrar gelirse (ör. uygulama finish'ten önce kapandıysa)
    // modüller işlem numarasıyla tekrar teslimi engeller.
    store.when().approved((transaction) => {
      approvedHooks.forEach((h) => { try { h(transaction); } catch (e) {} });
      transaction.verify();
    });
    store.when().verified((receipt) => {
      verifiedHooks.forEach((h) => { try { h(receipt); } catch (e) {} });
      receipt.finish();
    });
  }
  function onVerified(hook) { verifiedHooks.push(hook); }
  function onApproved(hook) { approvedHooks.push(hook); }
  // Onaylanan işlemdeki ürün ID'leri ve işlemin kimliği.
  function txProducts(t) { return ((t && t.products) || []).map((p) => p && p.id).filter(Boolean); }
  function txId(t) { return (t && (t.transactionId || t.purchaseId)) || ''; }
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
  window.IAP = { available, platform, bindStoreHandlers, onVerified, onApproved, txProducts, txId, order, restore };
})();
