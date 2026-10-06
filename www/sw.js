const CACHE = 'beat-orbit-v55';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './manifest.webmanifest',
  './ads.js',
  './native-ads-bundle.js',
  './firebase-bundle.js',
  './premium.js',
  './season-pass.js',
  './playgames.js',
  './gem-shop.js',
  './render3d-bundle.js',
  './assets3d/manifest.js',
  './assets3d/themes/neon/label.jpg',
  './assets3d/themes/synthbeats/label.jpg',
  './assets3d/themes/urbansounds/label.jpg',
  './assets3d/themes/cosmicsoundwave/label.jpg',
  './privacy.html',
  './licenses.html',
  './fonts/orbitron.woff2',
  './fonts/rajdhani-500.woff2',
  './fonts/rajdhani-600.woff2',
  './fonts/rajdhani-700.woff2',
  './game/icons.js',
  './game/data.js',
  './game/i18n.js',
  './game/fx.js',
  './game/engine.js',
  './game/render.js',
  './game/gfx.js',
  './game/screens.js',
  './game/shop-ui.js',
  './game/battlepass-ui.js',
  './game/upgrades-ui.js',
  './game/narrator.js',
  './game/splash.js',
  './game/tutorial.js',
  './game/cloud-sync.js',
  './game/input.js',
  './game/main.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-180.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

// Ağ öncelikli: her zaman en güncel sürümü getirmeye çalışır, sadece
// çevrimdışıyken (veya ağ hatasında) önbelleğe düşer. Eski "önce önbellek"
// stratejisi güncellemelerin bir sürüm geriden gelmesine (kullanıcı hep
// bir önceki deploy'u görüyor) neden oluyordu.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Video parça parça (Range) istenir; önbelleğe/SW'ye karışmasın (Safari)
  if (e.request.headers.has('range') || /\.(mp4|webm)$/.test(e.request.url)) return;
  e.respondWith(
    fetch(e.request).then(res => {
      // Yalnız başarılı, kendi sitemizden gelen yanıtlar önbelleğe girer (hata
      // sayfaları / dış kaynaklar birikmesin).
      if (res.ok && res.type === 'basic') {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
