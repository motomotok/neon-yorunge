// Beat Orbit — 3D grafik asset manifest'i.
//
// 3D modda (Ayarlar > 3D Grafik) hangi görselin nerede kullanılacağını bu
// dosya belirler. Her slot İSTEĞE BAĞLIDIR: null bırakılan slot için oyun
// bugünkü (klasik) görseli ya da prosedürel bir sürümü kullanır. Yani asset'ler
// tek tek eklenebilir, eksik olan hiçbir şey oyunu bozmaz.
//
// Yollar www/ klasörüne göredir (örn. 'assets3d/items/star.png').
// Slot biçimleri ve teknik kurallar için kök dizindeki ASSETS_3D.md'ye bakın:
//   'yol.png'                                         sabit görsel (kısa yazım)
//   {image:'yol.png', size:1, glow:true, spin:true}   sabit görsel + seçenekler
//   {sheet:'yol.png', cols:8, rows:1, fps:12}         animasyonlu sprite sheet
//   {model:'yol.glb', size:1, rotation:[0,0,0], animation:'Idle'}  3D model
//
// Değişiklik sonrası yeniden derleme GEREKMEZ — sayfayı yenilemek yeterli.
window.ASSETS3D = {
  // Kamera: tilt = plağa bakış açısı (derece, 90 = tam tepeden),
  // fov = görüş açısı, zoom > 1 yakınlaştırır.
  camera: { tilt: 68, fov: 38, zoom: 1 },
  exposure: 1.05,

  // Ekranın tamamını kaplayan arka plan görseli (yoksa tema rengi + yıldızlar).
  background: { image: null },

  // Plak: texture = oluklu üst yüzey (kare, ortası plağın merkezi),
  // label = ortadaki etiket (kare, daire içine kırpılır),
  // model = tüm plağı değiştiren 3D model (verilirse texture/label kullanılmaz).
  record: { texture: null, label: null, model: null },

  // Pikap kolu modeli: pivot noktası orijinde, kol +Z yönünde uzanmalı.
  tonearm: { model: null },

  // Plağın altına konacak dekor modeli (pikap gövdesi vb.), isteğe bağlı.
  turntable: null,

  // Oyuncu (pena). default = tüm skinler için; skins.<id> = belirli bir skin.
  // Boş kalırsa www/img/penas/ altındaki mevcut pena PNG'leri kullanılır.
  // Skin id'leri: teal, magenta, green, gold, red, maroon, purple, blue,
  // silver, pena_fire, pena_ice, pena_toxic, pena_lightning, pena_galaxy,
  // pena_pinkswirl, pena_wood, pena_lion, pena_diamond, season1_orb,
  // season2_orb, loyalty_orb
  player: {
    default: null,
    skins: {
      // teal: { sheet: 'assets3d/player/teal_idle.png', cols: 8, rows: 1, fps: 12 },
    },
  },

  // Toplanabilirler ve tehlikeler. Boş kalan tip klasik çizimiyle görünür.
  items: {
    star: null,          // nota (temel puan)
    gold: null,          // altın nota
    diamond: null,       // sol anahtarı (nadir, değerli öğe; kodda 'diamond')
    coin: null,          // para (nota jetonu)
    heart: null,         // can
    shield: null,        // güç: kalkan
    slow: null,          // güç: yavaşlatma
    magnet: null,        // güç: mıknatıs
    freeze: null,        // güç: zaman dondurma
    mult: null,          // güç: x2 puan
    ghost: null,         // güç: hayalet
    hazard: null,        // canavar: temel (Çizik CD)
    hazardJump: null,    // canavar: halka atlayan (MiniDisc)
    hazardBomb: null,    // canavar: büyük/ağır (8-Track)
    hazardPull: null,    // canavar: çeken (Kaset Bandı)
    hazardTwin: null,    // canavar: ikiz — sahte kopyası da bunu kullanır
    hazardTwinDecoy: null, // (isteğe bağlı) ikizin sahte kopyası için ayrı görsel
    hazardPulse: null,   // canavar: nabız atan (Ekolayzer)
    hazardCreep: null,   // canavar: sinsi yaklaşan (P2P Virüsü)
  },

  // Parçacık ve iz noktaları için doku (beyaz/gri, saydam arka planlı).
  particles: { spark: null, trail: null },
};
