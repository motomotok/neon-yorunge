// Elmas (premium para birimi) paketleri — gerçek para, IAP köprüsü.
// premium.js/season-pass.js ile AYNI desen (cordova-plugin-
// purchase; tarayıcıda/CdvPurchase yokken tüm çağrılar sessizce no-op'tur).
// TEK fark: paketler CONSUMABLE (tekrar tekrar satın alınabilir, "sahiplik"
// kalıcı değil) — register()'daki onPurchased callback'i main.js'te
// stats.gems'e PRODUCTS[id].amount kadar ekliyor, hiçbir şeyi
// stats.owned'a yazmıyor. Play Console + App Store Connect'te BU ID'LERLE
// (aşağıdaki PRODUCTS) birer "Tüketilebilir ürün" oluşturulması gerekir —
// oluşturulana kadar satın alma çağrıları sessizce hiçbir şey yapmaz.
(function () {
  const PRODUCTS = [
    { id: 'gems_100',  amount: 100,  fallbackPrice: '₺49.99' },
    { id: 'gems_250',  amount: 250,  fallbackPrice: '₺99.99' },
    { id: 'gems_600',  amount: 600,  fallbackPrice: '₺199.99' },
    { id: 'gems_1500', amount: 1500, fallbackPrice: '₺449.99' },
  ];
  const PRODUCT_IDS = PRODUCTS.map(p => p.id);
  const AMOUNTS = {}; PRODUCTS.forEach(p => { AMOUNTS[p.id] = p.amount; });
  const FALLBACK_PRICES = {}; PRODUCTS.forEach(p => { FALLBACK_PRICES[p.id] = p.fallbackPrice; });

  const isAvailable = () => IAP.available();

  // Ürünü kaydeder + ortak mağaza dinleyicilerini bağlar. store.initialize()
  // burada ÇAĞRILMAZ: tüm ürünler kaydedildikten sonra main.js tek seferde yapar.
  function register(onPurchased, onPriceReady) {
    if (!isAvailable()) return;
    const { store, ProductType } = window.CdvPurchase;
    PRODUCT_IDS.forEach(id => store.register({ id, type: ProductType.CONSUMABLE, platform: IAP.platform() }));

    store.when().productUpdated((p) => {
      if (PRODUCT_IDS.indexOf(p.id) === -1) return;
      if (p.owned) { onPurchased && onPurchased(p.id, AMOUNTS[p.id]); }
      else if (p.pricing && p.pricing.price) { onPriceReady && onPriceReady(p.id, p.pricing.price); }
    });
    IAP.bindStoreHandlers();
  }

  function purchase(productId) { IAP.order(productId); }

  function restore() { IAP.restore(); }

  function fallbackPrice(productId) { return FALLBACK_PRICES[productId] || '₺49.99'; }

  window.GemShop = { isNative: isAvailable, register, purchase, restore, fallbackPrice, PRODUCT_IDS, PRODUCTS, AMOUNTS };
})();
