// "Reklamsız Premium" uygulama içi satın alma (IAP) köprüsü.
// cordova-plugin-purchase, native (Capacitor/Android) ortamda çalışırken
// otomatik olarak window.CdvPurchase global objesini enjekte eder — ayrı
// bir bundler/import gerekmez (ads.js/native-ads-bundle.js'den farklı).
// Tarayıcıda (bu obje yokken) tüm çağrılar sessizce no-op'tur.
(function () {
  // Play Console'da oluşturulacak "Yönetilmeyen ürün" (non-consumable) ID'si.
  // Fiyatı (~49 TL) Play Console tarafında sen belirlersin; buradaki metin
  // sadece gerçek fiyat gelene kadar gösterilecek bir yer tutucudur.
  const PRODUCT_ID = 'remove_ads';
  const FALLBACK_PRICE_TEXT = '49 TL';

  const isAvailable = () => IAP.available();

  // Ürünü kaydeder + ortak mağaza dinleyicilerini bağlar. store.initialize()
  // burada ÇAĞRILMAZ: tüm ürünler kaydedildikten sonra main.js tek seferde yapar.
  function register(onOwned, onPriceReady) {
    if (!isAvailable()) return;
    const { store, ProductType } = window.CdvPurchase;
    store.register({ id: PRODUCT_ID, type: ProductType.NON_CONSUMABLE, platform: IAP.platform() });

    store.when().productUpdated((p) => {
      if (p.id !== PRODUCT_ID) return;
      if (p.owned) { onOwned && onOwned(); }
      else if (p.pricing && p.pricing.price) { onPriceReady && onPriceReady(p.pricing.price); }
    });
    IAP.bindStoreHandlers();
  }

  function purchase() { IAP.order(PRODUCT_ID); }

  function restore() { IAP.restore(); }

  window.Premium = { isNative: isAvailable, register, purchase, restore, FALLBACK_PRICE_TEXT };
})();
