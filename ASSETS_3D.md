# 🎨 3D Grafik Altyapısı ve Asset Rehberi

Beat Orbit'in iki çizim modu var:

| Mod | Teknoloji | Dosyalar |
|-----|-----------|----------|
| **Klasik** | Canvas 2D | `www/game/render.js` |
| **3D (2.5D)** | WebGL / Three.js: eğik kamera, ışık, bloom parlaması, gölgeler | `src/render3d/*` → `www/render3d-bundle.js` |

Oyun mantığı (`engine.js`, `data.js`) iki modda da **birebir aynıdır**; sadece çizim değişir.

## Nasıl açılır / test edilir?

- Oyunda: **Ayarlar → 3D Grafik** anahtarı. Yanındaki **Grafik Kalitesi** butonu
  Otomatik → Düşük → Orta → Yüksek arasında döner.
- Hızlı test: adresin sonuna `?gfx=3d` ekle (ör. `index.html?gfx=3d`). `?gfx=classic` geri alır.
- Varsayılan mod şimdilik **klasik**. Asset'ler tamamlanınca varsayılanı 3D yapmak için
  `www/game/data.js` içindeki `cfg` varsayılanında `gfx:'classic'` → `gfx:'3d'` yapmak yeterli.
- WebGL desteklemeyen ya da 3D paketini yükleyemeyen cihazlar **otomatik olarak klasiğe döner**.
- **Otomatik kalite**: FPS 45'in altına düşerse kalite bir kademe iner, uzun süre 57+ ise bir kademe çıkar.

## Asset'ler nasıl takılır?

Tek dosya: **`www/assets3d/manifest.js`**. Her slot isteğe bağlıdır. Boş (`null`) slotlar
bugünkü klasik görseli kullanır. Yani asset'ler **tek tek** eklenebilir, eksik olan
hiçbir şey oyunu bozmaz. Manifest değişince **yeniden derleme gerekmez**, sayfayı yenilemek yeterli.

Önerilen klasör düzeni:

```
www/assets3d/
  manifest.js
  background/   arka plan görseli
  record/       plak yüzeyi, etiket, plak/pikap modelleri
  player/       pena görselleri / animasyonları / modelleri
  items/        nota, elmas, jeton, can, güçlendirmeler
  hazards/      canavarlar
  fx/           parçacık / iz dokuları
```

### Slot biçimleri

```js
'assets3d/items/star.png'                                     // sabit görsel (kısa yazım)
{ image:'assets3d/items/star.png', size:1.2, glow:true }      // sabit görsel + seçenekler
{ sheet:'assets3d/hazards/creep.png', cols:8, rows:2, fps:14 } // animasyonlu sprite sheet
{ model:'assets3d/hazards/creep.glb', size:1, rotation:[0,180,0], animation:'Idle' } // 3D model
```

| Seçenek | Anlamı | Varsayılan |
|---------|--------|------------|
| `size` | Boyut çarpanı (1 = klasik sürümdeki boyut) | `1` |
| `glow` | Altına tip renginde yumuşak hâle ekle | `true` |
| `spin` | Tehlikelerdeki dönme animasyonu (`false` = sabit) | `true` |
| `cols`, `rows`, `frames`, `fps`, `loop` | Sprite sheet ayarları | `frames = cols×rows`, `fps 12`, `loop true` |
| `rotation` | Modelin başlangıç dönüşü, derece `[x,y,z]` | `[0,0,0]` |
| `animation` | GLB içindeki oynatılacak animasyonun adı | ilk animasyon |

### Slot listesi

| Slot | Ne | Önerilen format / boyut |
|------|----|-------------------------|
| `background.image` | Tam ekran arka plan (ekrana "cover" kırpılır) | JPG/WebP, 2048×1152 veya 2048×2048 |
| `record.texture` | Plağın oluklu üst yüzeyi. Kare, merkez = plak merkezi | PNG/WebP 2048×2048 |
| `record.label` | Ortadaki etiket (daireye kırpılır) | PNG/WebP 1024×1024 |
| `record.model` | Plağın tamamını değiştiren model | GLB |
| `tonearm.model` | Pikap kolu. **Pivot orijinde, kol +Z yönünde** | GLB |
| `turntable` | Plağın altına dekor (pikap gövdesi vb.) | GLB |
| `player.default` / `player.skins.<id>` | Pena (tüm skinler / belirli skin) | PNG 512×512 veya sheet / GLB |
| `items.star` … `items.ghost` | Nota, altın nota, elmas, jeton, can, 6 güçlendirme | PNG 256×256 veya sheet / GLB |
| `items.hazard` … `items.hazardCreep` | 7 canavar tipi (+ isteğe bağlı `hazardTwinDecoy`) | PNG 512×512 veya sheet / GLB |
| `particles.spark`, `particles.trail` | Parçacık ve iz noktası | PNG 64×64, beyaz, saydam |

Skin id'leri ve canavar tiplerinin açıklamaları `manifest.js` içinde yorum olarak yazılı.

## Teknik kurallar (tasarımcıya iletilecek kısım)

**2D görseller (PNG/WebP)**
- Saydam arka plan, **kare tuval**, obje ortalanmış, kenarlarda ~%10 boşluk.
- Mümkünse 2'nin katı boyutlar (256 / 512 / 1024 / 2048).
- Sprite'lar her zaman kameraya döner (billboard). Görseli **önden/hafif üstten** çizin.

**Sprite sheet (animasyon)**
- Tüm kareler **eşit boyutta**, ızgara halinde, **soldan sağa, yukarıdan aşağıya** sıralı.
- Örnek: 8 karelik animasyon = 8 sütun × 1 satır, 256×256 kareler → 2048×256 görsel.
- Döngülü animasyonlarda ilk ve son kare birbirine akmalı.

**3D modeller (GLB)**
- glTF 2.0 binary (`.glb`), dokular gömülü. Y ekseni yukarı, model **+Z'ye (kameraya) bakar**.
- Ölçek önemli değil: oyun modeli otomatik olarak slot boyutuna ölçekler ve merkezler.
- Animasyonlar GLB içinde, isimli (`Idle`, `Spin` vb.). Manifest'te `animation` ile seçilir.
- Mobil bütçe: öğe/canavar başına ≤ 3–5 bin üçgen, ≤ 1 MB. Plak/pikap ≤ 20 bin üçgen, ≤ 3 MB.
- Malzeme: PBR (Metallic-Roughness). Parlaması istenen kısımlar için **emissive** kullanın
  (bloom efekti emissive yüzeyleri parlatır).
- Draco / KTX2 sıkıştırması şimdilik **desteklenmiyor**, gerekirse eklenir.

**Toplam boyut**: Mobil indirme için tüm 3D asset'lerin toplamını ~15–20 MB altında tutun.

## Mimari (geliştirici notu)

```
src/render3d/
  index.js     window.Render3D API, renderer, kamera, bloom, kalite/FPS yönetimi
  world.js     plak, platter, oluklar (halkalar), etiket, pikap kolu, ışıklar, arka plan
  entities.js  oyuncu, öğeler/canavarlar (havuzlu), iz, parçacıklar
  assets.js    manifest çözümleme: görsel / sprite sheet / GLB yükleme
  textures.js  asset yokken kullanılan prosedürel dokular
www/game/gfx.js  mod geçişi, tembel yükleme, frame anlık görüntüsü, klasiğe dönüş
```

- `src/render3d/` değişince: `npm run build:3d` (çıktı `www/render3d-bundle.js` repoya commit edilir,
  GitHub Pages derleme yapmadan doğrudan `www/`'yi yayınlar). `npm run cap:sync` her şeyi derler.
- Klasik çizimin öğe görselleri 3D'de doku olarak yeniden kullanılır (`gfx.js` → `paintItem3D`).
  Bu yüzden asset verilmeyen tipler de 3D sahnede doğru görünür.
- Pena izi her iki modda da "plağı kazıyan çizik" olarak çizilir (3D: `entities.js` `_updateScratch`,
  klasik: `render.js` `drawScratch2D`). Mağazadaki İz Efektleri çiziğin rengini/şeklini belirler.
- Boss uyarısı her iki modda aynı zaman çizelgesini kullanır (`render.js` `bossTelegraphPhases`):
  iğne iner → kolun sabit ucunda yük toplanır → yük uca akar → uçtan plağa şimşekler yayılır.
- Henüz 3D karşılığı olmayan klasik seçenekler: `cfg.sun` güneş skinleri (3D'de hep plak etiketi)
  ve kayan yıldızlar. Halka stilleri ile iz stilleri 3D'de de çalışıyor.
