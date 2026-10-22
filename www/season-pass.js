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
  const FALLBACK_PRICE_TEXT = '49 TL';

  const isAvailable = () => IAP.available();

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
    store.register({ id, type: ProductType.NON_CONSUMABLE, platform: IAP.platform() });

    store.when().productUpdated((p) => {
      if (p.id !== productId()) return;
      if (p.pricing && p.pricing.price) { onPriceReady && onPriceReady(p.pricing.price); }
    });
    // Sezon Bileti YALNIZ bu sezonun ürününü içeren bir doğrulamada açılır
    // (productId() her çağrıda TAZE okunur — geçen sezonun bileti bu sezonu
    // açmaz, bkz. dosya başındaki not).
    IAP.onVerified((receipt) => { if (receiptHasProduct(receipt, productId())) onOwned && onOwned(); });
    IAP.bindStoreHandlers();
  }

  function purchase() { IAP.order(productId()); }

  window.SeasonPass = { isNative: isAvailable, register, purchase, productId, FALLBACK_PRICE_TEXT };
})();
