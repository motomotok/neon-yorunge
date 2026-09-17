// Oyun içi yaratık/boncuk/kazanım/güç-yükseltmesi görselleri: elle kesilip
// şeffaflaştırılmış PNG asset'ler. Her tip için bir Image() önceden yüklenir;
// render.js çizerken imgReady() ile "yüklendi mi" kontrolü yapar — henüz
// yüklenmemiş veya asset'i olmayan tipler (örn. 'star') eski vektör çizime
// otomatik düşer, hiçbir zaman kırık görsel gösterilmez.
const ITEM_IMAGE_FILES = {
  hazard: 'hazard.png',
  hazardJump: 'hazardJump.png',
  hazardBomb: 'hazardBomb.png',
  hazardPull: 'hazardPull.png',
  hazardTwin: 'hazardTwin.png',
  hazardPulseDanger: 'hazardPulseDanger.png',
  hazardPulseSafe: 'hazardPulseSafe.png',
  hazardCreep: 'hazardCreep.png',
  gold: 'gold.png',
  diamond: 'diamond.png',
  coin: 'coin.png',
  heart: 'heart.png',
  shield: 'shield.png',
  slow: 'slow.png',
  magnet: 'magnet.png',
  freeze: 'freeze.png',
  mult: 'mult.png',
  ghost: 'ghost.png',
  telegraph: 'telegraph.png',
};
const ITEM_IMAGES = {};
for (const key in ITEM_IMAGE_FILES) {
  const im = new Image();
  im.src = 'assets/icons/' + ITEM_IMAGE_FILES[key];
  ITEM_IMAGES[key] = im;
}
function imgReady(key) {
  const im = ITEM_IMAGES[key];
  return !!(im && im.complete && im.naturalWidth > 0);
}
