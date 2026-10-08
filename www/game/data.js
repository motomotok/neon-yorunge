// Oyun verisi: temalar, kozmetikler, mağaza kilitleri, ayarlar/istatistik
// kalıcılığı (localStorage), zorluk tabloları, seed'li RNG, günlük görevler,
// başarımlar ve Nota (coin) ekonomisi.

// Ana menüde küçük bir etiket olarak gösterilir (bkz. main.js) — bir
// güncelleme push edildiğinde cihaza gerçekten yansıyıp yansımadığını
// görsel olarak doğrulamak için. HER anlamlı değişiklikte artırılmalı:
// küçük düzeltme -> patch (x.x.+1), yeni özellik -> minor (x.+1.0).
const GAME_VERSION = '2.45.0';

// 4 tema, kullanıcının gönderdiği 4 konsept görseline birebir karşılık gelir
// (bkz. proje notu) — varsayılan/ücretsiz 'neon' id'si "Retro Beats" görseli,
// diğer 3'ü satın alınabilir. id'ler değişmedi diye 'neon' korunuyor
// (applyTheme()'ün THEMES.neon fallback'i buna bağlı).
const THEMES = {
  neon:           {nameKey:'theme_neon',           star:'#ffcf7a', gold:'#ffe9b0', peril:'#ff5a3c', player:'#2fe6c4', sun:'#f2c98a', bg0:'#170a08', bg1:'#2b120d', sf:'#ffb98a', gate:{type:'free'}},
  synthbeats:     {nameKey:'theme_synthbeats',      star:'#19e3ff', gold:'#baf7ff', peril:'#ff2f8a', player:'#19e3ff', sun:'#ff2f8a', bg0:'#030308', bg1:'#0c0718', sf:'#7fe9ff', gate:{type:'coin_or_gem', price:3200, gemPrice:35}},
  urbansounds:    {nameKey:'theme_urbansounds',     star:'#ffb454', gold:'#ffd24a', peril:'#ff2fa0', player:'#3de8d0', sun:'#ff8a3d', bg0:'#0a0604', bg1:'#1a0f08', sf:'#ffb27a', gate:{type:'coin_or_gem', price:4000, gemPrice:45}},
  // Kozmik Ses Dalgası BİLEREK sadece Elmas — en üst temalı dünya, notayla
  // asla açılmıyor (premium para biriminin "sadece elmasla" ucu burası).
  cosmicsoundwave:{nameKey:'theme_cosmicsoundwave', star:'#7fe8ff', gold:'#ffe9a8', peril:'#ff8a3d', player:'#2fe6c4', sun:'#6a8fff', bg0:'#03040f', bg1:'#0a0f2e', sf:'#8fb0ff', gate:{type:'gem', price:70}},
};
let T = THEMES.neon;
// Her temanın plak etiketi (konsept görsellerinden kesildi). 3D modda
// themes.js, klasik modda render.js drawSun(), mağazada tema kartı kullanır.
function themeLabelSrc(key){ return 'assets3d/themes/'+(THEMES[key] ? key : 'neon')+'/label.jpg'; }
const THEME_LABEL_IMG = {};
Object.keys(THEMES).forEach(k=>{ const im=new Image(); im.src=themeLabelSrc(k); THEME_LABEL_IMG[k]=im; });
// #overlay'deki (ana menü/mağaza arkaplanı) plak-rengi radial-gradient'i
// de tema değişince uyumlu kalsın diye hex'i "r,g,b" üçlüsüne çevirip ayrı
// bir CSS değişkenine yazıyoruz — rgba(var(--bgN-rgb), alpha) deseni,
// saydamlık gerektiren yerlerde doğrudan hex CSS değişkeniyle mümkün değil.
function hexToRgbTriplet(hex){
  const h=hex.replace('#','');
  const n=parseInt(h.length===3?h.split('').map(c=>c+c).join(''):h,16);
  return ((n>>16)&255)+','+((n>>8)&255)+','+(n&255);
}
function applyTheme(key){
  T = THEMES[key] || THEMES.neon; cfg.theme = key; saveCfg();
  const r = document.documentElement.style;
  r.setProperty('--star',T.star); r.setProperty('--gold',T.gold);
  r.setProperty('--peril',T.peril); r.setProperty('--player',T.player);
  r.setProperty('--bg0',T.bg0); r.setProperty('--bg1',T.bg1);
  r.setProperty('--bg0-rgb',hexToRgbTriplet(T.bg0)); r.setProperty('--bg1-rgb',hexToRgbTriplet(T.bg1));
  document.body.style.background = T.bg0;
  document.querySelectorAll('.theme').forEach(el=>el.classList.toggle('sel', el.dataset.key===key));
}

// Oyuncu artık vektörle çizilen bir "orb" değil, gerçek bir pena (mediator)
// görseli (bkz. render.js drawPlayer — PENA_IMG[cfg.skin] çizilir, `color`
// alanı sadece iz/hâlo rengi için kalır). İki katman:
//  - 9 "varsayılan" pena: ilki ücretsiz başlangıç, diğer 8'i Nota (oyun-içi
//    para) ile satılır — eski renkli orb'ların doğal devamı.
//  - 9 "premium" pena: Elmas (premium para birimi) ile satılır — Elmas'ın
//    kendisi gems_* IAP paketleriyle gerçek parayla alınır (bkz.
//    www/gem-shop.js). Play Console + App Store Connect'te sadece 4 Elmas
//    paketinin (gems_100/250/600/1500) oluşturulması yeterli — pena başına
//    ayrı ürün GEREKMEZ, oluşturulana kadar paket satın alma butonu
//    tarayıcıda/mağazada sessizce no-op kalır (premium.js'teki remove_ads
//    ile birebir aynı davranış).
// loyalty_orb/season1_orb/season2_orb'un gate'leri (giriş serisi/sezon
// bileti) BİLEREK dokunulmadı, sadece görselleri pena'ya çevrildi — silinirse
// o ödül sistemleri sessizce kırılır.
const SKINS = [
  {id:'teal',    nameKey:'skin_pena_teal',    img:'img/penas/default/teal.png',    color:'#2fe6c4', gate:{type:'free'}},
  {id:'magenta', nameKey:'skin_pena_magenta', img:'img/penas/default/magenta.png', color:'#ff4fd8', gate:{type:'coin', price:1800}},
  {id:'green',   nameKey:'skin_pena_green',   img:'img/penas/default/green.png',   color:'#6dff4a', gate:{type:'coin', price:2200}},
  {id:'gold',    nameKey:'skin_pena_gold',    img:'img/penas/default/gold.png',    color:'#ffcf3d', gate:{type:'coin', price:2600}},
  {id:'red',     nameKey:'skin_pena_red',     img:'img/penas/default/red.png',     color:'#ff3b3b', gate:{type:'coin', price:3000}},
  {id:'maroon',  nameKey:'skin_pena_maroon',  img:'img/penas/default/maroon.png',  color:'#b23a3a', gate:{type:'coin', price:3400}},
  {id:'purple',  nameKey:'skin_pena_purple',  img:'img/penas/default/purple.png',  color:'#a35bff', gate:{type:'coin', price:3800}},
  {id:'blue',    nameKey:'skin_pena_blue',    img:'img/penas/default/blue.png',    color:'#3b5bff', gate:{type:'coin', price:4200}},
  {id:'silver',  nameKey:'skin_pena_silver',  img:'img/penas/default/silver.png',  color:'#d8e4ea', gate:{type:'coin', price:4600}},
  // Premium pena'lar artık doğrudan gerçek-para IAP değil, Elmas (premium
  // para birimi) ile satılıyor — Elmas'ın kendisi gems_* paketleriyle
  // gerçek parayla alınıyor (bkz. gem-shop.js). Fiyat kademeleri eski
  // ₺14.99/19.99/24.99/29.99 TL karşılıklarına denk gelecek şekilde seçildi.
  {id:'pena_fire',      nameKey:'skin_pena_fire',      img:'img/penas/premium/fire.png',      color:'#ff6a1a', gate:{type:'gem', price:30}},
  {id:'pena_ice',       nameKey:'skin_pena_ice',       img:'img/penas/premium/ice.png',       color:'#6fd8ff', gate:{type:'gem', price:30}},
  {id:'pena_toxic',     nameKey:'skin_pena_toxic',     img:'img/penas/premium/toxic.png',     color:'#9aff3d', gate:{type:'gem', price:30}},
  {id:'pena_lightning', nameKey:'skin_pena_lightning', img:'img/penas/premium/lightning.png', color:'#ffd23d', gate:{type:'gem', price:40}},
  {id:'pena_galaxy',    nameKey:'skin_pena_galaxy',    img:'img/penas/premium/galaxy.png',    color:'#8a5bff', gate:{type:'gem', price:40}},
  {id:'pena_pinkswirl', nameKey:'skin_pena_pinkswirl', img:'img/penas/premium/pinkswirl.png', color:'#ff4fa0', gate:{type:'gem', price:40}},
  {id:'pena_wood',      nameKey:'skin_pena_wood',      img:'img/penas/premium/wood.png',      color:'#8a6a3d', gate:{type:'gem', price:50}},
  {id:'pena_lion',      nameKey:'skin_pena_lion',      img:'img/penas/premium/lion.png',      color:'#9a9aa0', gate:{type:'gem', price:50}},
  {id:'pena_diamond',   nameKey:'skin_pena_diamond',   img:'img/penas/premium/diamond.png',   color:'#eaf6ff', gate:{type:'gem', price:60}},
  {id:'season1_orb', nameKey:'skin_season1orb', img:'img/penas/default/gold.png',    color:'#ffcf3d', gate:{type:'seasonpass', season:1}},
  {id:'season2_orb', nameKey:'skin_season2orb', img:'img/penas/premium/fire.png',    color:'#ff6a1a', gate:{type:'seasonpass', season:2}},
  // 7 Günlük Giriş Serisi'nin tamamlanma ödülü — ne mağazadan ne sezon
  // biletinden alınabilir, YALNIZCA haftayı hiç kaçırmadan tamamlayınca
  // kazanılır (bkz. handleDailyReturn). Premium elmas pena'yla AYNI görseli
  // paylaşması bilinçli: "parayla alınacak kadar gösterişli ama bunu
  // kazandın" hissi için.
  {id:'loyalty_orb', nameKey:'skin_loyaltyorb', img:'img/penas/premium/diamond.png', color:'#eaf6ff', gate:{type:'streak'}},
];
// Pena/canavar görselleri: tüm id'ler için boot'ta bir kez Image() nesnesi
// oluşturulur. drawImage() henüz yüklenmemiş bir Image için sessizce no-op
// olduğundan (hata fırlatmaz) ayrıca bir "yüklendi mi" kontrolüne gerek yok.
const PENA_IMG = {};
SKINS.forEach(sk=>{ if(sk.img){ const im=new Image(); im.src=sk.img; PENA_IMG[sk.id]=im; } });
const MONSTER_IMG = {};
for(let i=1;i<=16;i++){ const im=new Image(); im.src='img/monsters/monster'+i+'.png'; MONSTER_IMG['monster'+i]=im; }
// "Cızırtı" yaratıkları: kullanıcının pembe şimşek + kırık ses dalgası
// görselinden üretilen 7 renk (img/monsters/glitch_*.png). Her tehlike tipi
// bir renk taşır (bkz. render.js HAZARD_IMG_KEY / HAZARD_COLOR).
['red','blue','green','yellow','purple','orange','pink'].forEach(c=>{ const im=new Image(); im.src='img/monsters/glitch_'+c+'.png'; MONSTER_IMG['glitch_'+c]=im; });
// Toplanabilir öğe görselleri (kullanıcının verdiği): nota ve nota jetonu.
const ITEM_IMG = {};
['note','coin','clef'].forEach(k=>{ const im=new Image(); im.src='img/items/'+k+'.png'; ITEM_IMG[k]=im; });
// Can ve takviyeler: nota/jeton stilinde parlak, plak/müzik konseptli görseller
// (kalp, plaklı kalkan, mıknatıs, metronom=yavaşlatma, buzdaki nota=dondurma,
// x2 madalyon, kulaklıklı hayalet). Anahtar = öğe tipi.
['heart','shield','magnet','slow','mult'].forEach(k=>{ const im=new Image(); im.src='img/items/pw_'+k+'.png'; ITEM_IMG[k]=im; });
function imgReady(im){ return !!(im && im.complete && im.naturalWidth>0); }
function playerColor(){
  const sk=SKINS.find(s=>s.id===cfg.skin)||SKINS[0];
  if(!isUnlockedItem('skins', sk)) return SKINS[0].color;
  if(sk.rainbow) return `hsl(${(performance.now()*0.06)%360},85%,68%)`;
  return sk.color;
}
// Oyuncunun gerçekte çizilecek pena görseli — kilitli bir skin eşitlenmiş
// olsa bile (ör. eski kayıt) playerColor() ile AYNI "kilitliyse varsayılana
// dön" mantığını izler.
function penaImg(){
  const sk=SKINS.find(s=>s.id===cfg.skin)||SKINS[0];
  const useId = isUnlockedItem('skins', sk) ? sk.id : SKINS[0].id;
  return PENA_IMG[useId];
}

const TRAILS = [
  {id:'classic', nameKey:'trail_classic', gate:{type:'free'}},
  {id:'sparkle', nameKey:'trail_sparkle', gate:{type:'coin', price:1600}},
  {id:'comet',   nameKey:'trail_comet',   gate:{type:'coin', price:2400}},
  {id:'rainbow', nameKey:'trail_rainbow', gate:{type:'coin', price:3600}},
  {id:'pixel',   nameKey:'trail_pixel',   gate:{type:'coin', price:2100}},
  {id:'ribbon',  nameKey:'trail_ribbon',  gate:{type:'coin', price:2600}},
  {id:'quantum', nameKey:'trail_quantum', gate:{type:'coin', price:4000}},
  {id:'phantom', nameKey:'trail_phantom', gate:{type:'coin', price:4400}},
  {id:'season1_trail', nameKey:'trail_season1', gate:{type:'seasonpass', season:1}},
  {id:'season2_trail', nameKey:'trail_season2', gate:{type:'seasonpass', season:2}},
];
const SUNS = [
  {id:'classic',   nameKey:'sun_classic',   gate:{type:'free'}},
  {id:'redgiant',  nameKey:'sun_redgiant',  gate:{type:'coin', price:2000}},
  {id:'blackhole', nameKey:'sun_blackhole', gate:{type:'coin', price:4400}},
  {id:'nebula',    nameKey:'sun_nebula',    gate:{type:'coin', price:2800}},
  {id:'crystal',   nameKey:'sun_crystal',   gate:{type:'coin', price:2800}},
  {id:'quasar',    nameKey:'sun_quasar',    gate:{type:'coin', price:4800}},
  {id:'supernova', nameKey:'sun_supernova', gate:{type:'coin', price:5200}},
];
const RINGSTYLES = [
  {id:'classic', nameKey:'ring_classic', gate:{type:'free'}},
  {id:'dotted',  nameKey:'ring_dotted',  gate:{type:'coin', price:1300}},
  {id:'glow',    nameKey:'ring_glow',    gate:{type:'coin', price:2400}},
  {id:'double',  nameKey:'ring_double',  gate:{type:'coin', price:2100}},
  {id:'pulse',   nameKey:'ring_pulse',   gate:{type:'coin', price:2800}},
  {id:'circuit', nameKey:'ring_circuit', gate:{type:'coin', price:3200}},
  {id:'season1_ring', nameKey:'ring_season1', gate:{type:'seasonpass', season:1}},
  {id:'season2_ring', nameKey:'ring_season2', gate:{type:'seasonpass', season:2}},
];
const BOOSTS = [
  {id:'shieldstart', nameKey:'boost_shieldstart_name', descKey:'boost_shieldstart_desc', icon:'shield', price:1000},
  {id:'slowstart',   nameKey:'boost_slowstart_name',   descKey:'boost_slowstart_desc',   icon:'hourglass', price:800},
  {id:'luckystart',  nameKey:'boost_luckystart_name',  descKey:'boost_luckystart_desc',  icon:'clover', price:900},
  {id:'coinrush',    nameKey:'boost_coinrush_name',    descKey:'boost_coinrush_desc',    icon:'sparkle', price:1300},
];

// Kalıcı yükseltmeler (roguelike meta-progression): BOOSTS'un aksine
// tek oyunluk değil, satın alındığı andan itibaren TÜM gelecek oyunlarda
// geçerli. Ölünce (ya da ana menüden istediğin an) Yükseltmeler ekranından
// aynı notayla satın alınır — böylece her yeni deneme bir öncekinden
// biraz daha güçlü başlar.
//
// TEK bir formül, tüm hatlarda aynı: 8 kademe, maliyet GEOMETRİK dizi
// (her kademe bir öncekinden ×1.5 pahalı), etki her kademede SABİT bir
// miktar (E0) ekler — incremental-oyun tasarımında standart bir kalıp:
// sabit güç artışı + büyüyen maliyet = doğal azalan getiri eğrisi. Her
// hattı sadece 2 parametre tanımlar: C0 (1. kademe maliyeti) ve E0
// (kademe başına etki). Geometrik dizi toplamı C0×(1.5^8-1)/0.5 ≈
// C0×49.26 olduğundan, hedeflenen toplam maliyetten C0=hedef/49.26 ile
// geri çözüldü — 6 hattın toplamı ~50.000 nota olacak şekilde.
function buildTiers(C0, E0, count){
  const tiers=[];
  for(let i=1;i<=(count||8);i++) tiers.push({cost:Math.round(C0*Math.pow(1.5,i-1)/10)*10, add:E0});
  return tiers;
}
// Yüzde: Türkçede "%5", diğer dillerde "5%" (fr/de boşluklu).
function pctText(n){
  const v=Math.round(n*1000)/10;
  return cfg.lang==='tr' ? '%'+v : (cfg.lang==='fr'||cfg.lang==='de') ? v+' %' : v+'%';
}
const META_UPGRADES = {
  hp: {
    nameKey:'up_hp_name', icon:'heart', format:n=>'+'+n+' '+t('unit_hp'),
    tiers: buildTiers(240, 2), // hedef ~12.000, taban 3 -> tavan 19 can
  },
  coinPct: {
    nameKey:'up_coinpct_name', icon:'sparkle', format:n=>'+'+pctText(n),
    tiers: buildTiers(200, 0.02), // hedef ~10.000, tavan %16 kazanç çarpanı
  },
  itemCoin: {
    nameKey:'up_itemcoin_name', icon:'coin', format:n=>'+'+n+' '+icon('coin'),
    tiers: buildTiers(180, 5), // hedef ~9.000, tavan +40 parçacık başına
  },
  boostDur: {
    nameKey:'up_boostdur_name', icon:'hourglass', format:n=>'+'+pctText(n),
    tiers: buildTiers(140, 0.025), // hedef ~7.000, tavan %20 (yavaşlatma/mıknatıs/çarpan)
  },
  shieldPower: {
    // Kalkanın emdiği TOPLAM vuruş (taban 1). Eskiden 8 kademe × 0.5 "yarım
    // vuruş"tu: tek kademeler hiçbir şey vermiyor, kart "0 vuruş" yazıyordu.
    // Artık 4 kademe, her biri +1 vuruş (tavan yine 5).
    nameKey:'up_shieldpower_name', icon:'shield', format:n=>(1+Math.floor(n))+' '+t('unit_hits'),
    tiers: buildTiers(740, 1, 4), // hedef ~6.000, taban 1 -> tavan 5 vuruş emer
  },
  multPower: {
    nameKey:'up_multpower_name', icon:'lightning', format:n=>'×'+(Math.round((2+n)*100)/100),
    tiers: buildTiers(120, 0.15), // hedef ~6.000, taban ×2 -> tavan ×3.2 puan çarpanı
  },
};
function upgradeLevel(key){ return Math.min(META_UPGRADES[key].tiers.length, (stats.upgrades && stats.upgrades[key]) || 0); }
// Kademe (nota, sıfırlanabilir) + Çekirdek Ağacı (prestij, KALICI) aynı
// anahtar setini paylaşır — böylece maxHpFor()/shieldHitsFor() ve
// engine.js'teki her upgradeBonus() çağrısı otomatik olarak ikisinin
// toplamını görür, ayrı bir entegrasyon noktası gerekmez.
function upgradeBonus(key){
  const lvl=upgradeLevel(key), tiers=META_UPGRADES[key].tiers;
  let s=0; for(let i=0;i<lvl;i++) s+=tiers[i].add;
  return s + coreBonus(key);
}
function nextUpgradeTier(key){ return META_UPGRADES[key].tiers[upgradeLevel(key)] || null; }
function buyUpgrade(key){
  const tier=nextUpgradeTier(key);
  if(!tier || (stats.notes||0)<tier.cost) return false;
  stats.notes-=tier.cost;
  if(!stats.upgrades) stats.upgrades={hp:0,coinPct:0,itemCoin:0,boostDur:0,shieldPower:0,multPower:0};
  stats.upgrades[key]=upgradeLevel(key)+1;
  saveStats(); refreshWallet();
  return true;
}
function maxHpFor(){ return 3 + upgradeBonus('hp'); }
// Taban kalkan 1 vuruş emer; Kalkan Gücü her kademede +0.5 "yarım vuruş"
// ekler (bkz. buildTiers(120,0.5) yukarıda) — floor ile tam vuruşa çevrilir.
function shieldHitsFor(){ return 1+Math.floor(upgradeBonus('shieldPower')); }
// Güç Seviyesi: 6 hattın kademe toplamı (0-44) — roguelike'ın "karakter
// seviyesi" karşılığı, ana menüde tek bakışta ilerlemeyi gösterir.
function totalPowerLevel(){
  return Object.keys(META_UPGRADES).reduce((s,k)=>s+upgradeLevel(k), 0);
}
// Sadece kalıcı yükseltme sistemini (kademeler + nota bakiyesi)
// sıfırlar — oyuncu baştan güçlenmek isterse. İstatistikler (en iyi skor,
// başarımlar, liderlik, toplam biriktirilen nota, sahip olunan
// kozmetikler/takviyeler, sezon ilerlemesi vb.) BİLEREK dokunulmadan kalır.
function resetProgression(){
  stats.upgrades = {hp:0, coinPct:0, itemCoin:0, boostDur:0, shieldPower:0, multPower:0};
  stats.notes = 0;
  saveStats(); refreshWallet();
}

// ---- Süpernova (prestij) ve Çekirdek Ağacı -----------------------------
// Oyuncuları bir "sona" götüren eşik mekaniği: Kademe (nota) ağacını
// ve bakiyeni tamamen sıfırlayıp karşılığında kalıcı bir "Çekirdek"
// kazanıyorsun. Çekirdekler, HİÇBİR sıfırlamada silinmeyen ayrı bir ağaçta
// (CORE_TREE) harcanır — her düğüm bir üsttekini açtıktan sonra açılabilir,
// tıpkı gerçek bir yetenek ağacı gibi. Bu döngü (kasarak kademe doldur ->
// sıfırla -> kalıcı güç kazan -> baştan kas ama artık daha güçlüsün)
// Scritchy Scratchy'deki "jeton" kurgusunun buradaki karşılığı.
//
// Düğüm etkileri META_UPGRADES ile AYNI anahtarları (hp/coinPct/boostDur/
// multPower) kullanır ve upgradeBonus() üzerinden otomatik toplanır — SADECE
// 'startCombo' ve 'hazardSoften' yeni, kalıcı anahtarlar (bkz. engine.js).
const CORE_TREE = [
  {id:'core_root', nameKey:'core_root_name', icon:'orbit', cost:0, req:[], effects:{}},

  {id:'core_hp_1', nameKey:'core_hp1_name', icon:'shield', cost:2,  req:['core_root'],  effects:{hp:1}},
  {id:'core_hp_2', nameKey:'core_hp2_name', icon:'shield', cost:3,  req:['core_hp_1'],  effects:{hp:1}},
  {id:'core_hp_3', nameKey:'core_hp3_name', icon:'shield', cost:5,  req:['core_hp_2'],  effects:{hp:1}},
  {id:'core_hp_4', nameKey:'core_hp4_name', icon:'shield', cost:8,  req:['core_hp_3'],  effects:{hp:1}},
  {id:'core_hp_5', nameKey:'core_hp5_name', icon:'shield', cost:13, req:['core_hp_4'],  effects:{hp:2}},

  {id:'core_wealth_1', nameKey:'core_wealth1_name', icon:'coin', cost:2,  req:['core_root'],     effects:{coinPct:0.01}},
  {id:'core_wealth_2', nameKey:'core_wealth2_name', icon:'coin', cost:3,  req:['core_wealth_1'], effects:{coinPct:0.01}},
  {id:'core_wealth_3', nameKey:'core_wealth3_name', icon:'coin', cost:5,  req:['core_wealth_2'], effects:{coinPct:0.015}},
  {id:'core_wealth_4', nameKey:'core_wealth4_name', icon:'coin', cost:8,  req:['core_wealth_3'], effects:{coinPct:0.015}},
  {id:'core_wealth_5', nameKey:'core_wealth5_name', icon:'coin', cost:13, req:['core_wealth_4'], effects:{coinPct:0.02}},

  {id:'core_time_1', nameKey:'core_time1_name', icon:'hourglass', cost:2,  req:['core_root'],   effects:{boostDur:0.01}},
  {id:'core_time_2', nameKey:'core_time2_name', icon:'hourglass', cost:3,  req:['core_time_1'], effects:{boostDur:0.01}},
  {id:'core_time_3', nameKey:'core_time3_name', icon:'hourglass', cost:5,  req:['core_time_2'], effects:{boostDur:0.015}},
  {id:'core_time_4', nameKey:'core_time4_name', icon:'hourglass', cost:8,  req:['core_time_3'], effects:{boostDur:0.015}},
  {id:'core_time_5', nameKey:'core_time5_name', icon:'hourglass', cost:13, req:['core_time_4'], effects:{boostDur:0.02}},

  {id:'core_power_1', nameKey:'core_power1_name', icon:'lightning', cost:3,  req:['core_root'],    effects:{multPower:0.02}},
  {id:'core_power_2', nameKey:'core_power2_name', icon:'lightning', cost:4,  req:['core_power_1'], effects:{multPower:0.02}},
  {id:'core_power_3', nameKey:'core_power3_name', icon:'lightning', cost:6,  req:['core_power_2'], effects:{multPower:0.03}},
  {id:'core_power_4', nameKey:'core_power4_name', icon:'lightning', cost:10, req:['core_power_3'], effects:{multPower:0.03}},
  {id:'core_power_5', nameKey:'core_power5_name', icon:'lightning', cost:16, req:['core_power_4'], effects:{multPower:0.05}},

  {id:'core_reflex_1', nameKey:'core_reflex1_name', icon:'flame', cost:2, req:['core_root'],     effects:{startCombo:1}},
  {id:'core_reflex_2', nameKey:'core_reflex2_name', icon:'flame', cost:4, req:['core_reflex_1'], effects:{startCombo:1}},
  {id:'core_reflex_3', nameKey:'core_reflex3_name', icon:'flame', cost:7, req:['core_reflex_2'], effects:{startCombo:1}},

  {id:'core_calm_1', nameKey:'core_calm1_name', icon:'gear', cost:2, req:['core_root'],   effects:{hazardSoften:0.05}},
  {id:'core_calm_2', nameKey:'core_calm2_name', icon:'gear', cost:4, req:['core_calm_1'], effects:{hazardSoften:0.05}},
  {id:'core_calm_3', nameKey:'core_calm3_name', icon:'gear', cost:7, req:['core_calm_2'], effects:{hazardSoften:0.05}},

  {id:'core_capstone', nameKey:'core_capstone_name', icon:'atom', cost:50,
    req:['core_hp_5','core_wealth_5','core_time_5','core_power_5','core_reflex_3','core_calm_3'],
    effects:{hp:2, coinPct:0.02, boostDur:0.02, multPower:0.05, startCombo:1, hazardSoften:0.05}},
];
// Çekirdek Ağacı'ndaki (dallar, tek tek ekranda bu sırayla dizilir) 6 dal —
// her biri bir üsttekini gerektiren düz bir zincir, hepsi kökten (core_root)
// çıkar; capstone hepsinin ucunu birleştirir (bkz. upgrades-ui.js).
const CORE_BRANCHES = [
  {labelKey:'core_branch_hp',     ids:['core_hp_1','core_hp_2','core_hp_3','core_hp_4','core_hp_5']},
  {labelKey:'core_branch_wealth', ids:['core_wealth_1','core_wealth_2','core_wealth_3','core_wealth_4','core_wealth_5']},
  {labelKey:'core_branch_time',   ids:['core_time_1','core_time_2','core_time_3','core_time_4','core_time_5']},
  {labelKey:'core_branch_power',  ids:['core_power_1','core_power_2','core_power_3','core_power_4','core_power_5']},
  {labelKey:'core_branch_reflex', ids:['core_reflex_1','core_reflex_2','core_reflex_3']},
  {labelKey:'core_branch_calm',   ids:['core_calm_1','core_calm_2','core_calm_3']},
];
function coreNode(id){ return CORE_TREE.find(n=>n.id===id); }
function coreNodeOwned(id){ return (stats.coreUnlocked||[]).includes(id); }
function coreNodeReqMet(node){ return node.req.every(r=>coreNodeOwned(r)); }
function coreBonus(key){
  let s=0;
  for(const node of CORE_TREE){ if(node.effects[key] && coreNodeOwned(node.id)) s+=node.effects[key]; }
  return s;
}
function buyCoreNode(id){
  const node=coreNode(id);
  if(!node || coreNodeOwned(id) || !coreNodeReqMet(node) || (stats.cores||0)<node.cost) return false;
  stats.cores -= node.cost;
  stats.coreUnlocked.push(id);
  saveStats(); refreshWallet();
  return true;
}
// Çekirdek kazanç ağırlıkları: geliştirme ağacı (Kademe toplamı, 0-44) EN
// yüksek katsayı, en iyi skorda SON sıfırlamadan bu yana yapılan yeni
// ilerleme ikinci, oynanan yeni oyun sayısı en düşük katsayı. Kare kök
// kullanılması büyük sayıların (skor binlerce olabiliyor) çekirdek
// ekonomisini bozmasını engelliyor — incremental oyunlardaki standart
// "yumuşatma" kalıbı. Skor/oyun sayısı LIFETIME değil, bestAtPrestige/
// gamesAtPrestige'e göre DELTA hesaplanır — aksi halde tek bir yüksek
// skorla art arda sıfırlayıp sonsuz çekirdek üretmek mümkün olurdu.
const CORE_WEIGHTS = {tree:1.8, score:0.085, games:0.05};
function coresPreview(){
  const treeFactor = Math.sqrt(totalPowerLevel());
  const scoreFactor = Math.sqrt(Math.max(0, stats.best - (stats.bestAtPrestige||0)));
  const gamesFactor = Math.sqrt(Math.max(0, stats.games - (stats.gamesAtPrestige||0)));
  const raw = treeFactor*CORE_WEIGHTS.tree + scoreFactor*CORE_WEIGHTS.score + gamesFactor*CORE_WEIGHTS.games;
  return Math.max(0, Math.floor(raw));
}
function performPrestige(){
  const gain = coresPreview();
  if(gain<=0) return 0;
  stats.cores = (stats.cores||0)+gain;
  stats.lifetimeCores = (stats.lifetimeCores||0)+gain;
  stats.totalPrestiges = (stats.totalPrestiges||0)+1;
  stats.bestAtPrestige = stats.best;
  stats.gamesAtPrestige = stats.games;
  resetProgression();
  saveStats(); refreshWallet();
  return gain;
}

// TEST MODU: true iken mağazadaki tüm kozmetikler (tema, pena — premium
// dahil —, iz, güneş, halka, sezon/seri ödülleri) ücretsiz ve açık.
// İleride: premium içerik gerçek parayla alınan bir "elmas" para birimiyle
// (LoL'deki RP gibi), diğerleri notayla satılacak — o zaman false yapılır.
// Yetenekler/Çekirdek Ağacı (ilerleme mekaniği) bundan etkilenmez.
const TEST_FREE_UNLOCK = true;
function isUnlockedItem(category, item){
  if(TEST_FREE_UNLOCK) return true;
  if(item.gate.type==='free') return true;
  if(item.gate.type==='achievement') return stats.unlocked.includes(item.gate.id);
  if(item.gate.type==='coin') return stats.owned[category].includes(item.id);
  if(item.gate.type==='seasonpass') return stats.owned[category].includes(item.id);
  if(item.gate.type==='streak') return stats.owned[category].includes(item.id);
  if(item.gate.type==='gem') return stats.owned[category].includes(item.id);
  if(item.gate.type==='coin_or_gem') return stats.owned[category].includes(item.id);
  return false;
}

const DEAL_DISCOUNT = 0.3;
const DEAL_CATEGORIES = {
  themes: ()=>Object.keys(THEMES).map(k=>Object.assign({id:k}, THEMES[k])),
  skins: ()=>SKINS, trails: ()=>TRAILS,
};
// Günün Olayı: her gün tarih-seed'li RNG ile 3 ihtimalden biri seçilir —
// bir kozmetiğe %30 indirim ("Günün Fırsatı", eskiden tek seçenekti), ya da
// TÜM GÜN geçerli bir ×2 nota / ×2 Sezon XP çarpanı. Amaç: her gün
// farklı bir sebep olsun, oyuncu "bugün ne var" diye geri gelsin. Ağırlık
// %50 indirim / %25 nota / %25 XP — indirim en sık ama diğer ikisi
// de düzenli aralıklarla çıkıyor.
const DAILY_EVENT_POOL = ['deal','deal','notes2x','xp2x'];
// goShop() + main.js boot sırasında çağrılır, stats.dealDate bugünse
// no-op olduğu için güvenle tekrar tekrar çağrılabilir.
function ensureDailyEvent(){
  const t = todayStr();
  if(stats.dealDate===t) return;
  stats.dealDate = t;
  const rng = mulberry32(dateSeed());
  let type = DAILY_EVENT_POOL[Math.floor(rng()*DAILY_EVENT_POOL.length)];
  stats.dealCategory=''; stats.dealId='';
  if(type==='deal'){
    const candidates=[];
    for(const cat in DEAL_CATEGORIES){
      DEAL_CATEGORIES[cat]().forEach(item=>{
        if(item.gate.type==='coin' && !isUnlockedItem(cat,item)) candidates.push({cat, id:item.id});
      });
    }
    if(candidates.length){
      const pick = candidates[Math.floor(rng()*candidates.length)];
      stats.dealCategory = pick.cat; stats.dealId = pick.id;
    } else { type='notes2x'; } // alınabilecek kozmetik kalmadıysa yerine geç
  }
  stats.eventType = type;
  saveStats();
}
function activeDeal(){
  if(!stats.dealCategory || !stats.dealId) return null;
  const item = (DEAL_CATEGORIES[stats.dealCategory]?DEAL_CATEGORIES[stats.dealCategory]():[]).find(i=>i.id===stats.dealId);
  return item ? {category:stats.dealCategory, item} : null;
}
function effectivePrice(category, item){
  if(category===stats.dealCategory && item.id===stats.dealId) return Math.round(item.gate.price*(1-DEAL_DISCOUNT));
  return item.gate.price;
}
// addNotes/addSeasonXp'nin başvurduğu günlük çarpanlar — ensureDailyEvent()
// o gün için stats.eventType'ı belirledikten sonra geçerli olur.
function noteEventMult(){ return stats.eventType==='notes2x' ? 2 : 1; }
function seasonXpEventMult(){ return stats.eventType==='xp2x' ? 2 : 1; }

// Eski "Neon Yörünge" adıyla kaydedilmiş localStorage verisini yeni
// "Beat Orbit" anahtarlarına bir kerelik taşır — rebrand nedeniyle hiçbir
// oyuncu ilerlemesini/bakiyesini kaybetmesin diye. Yeni anahtar zaten
// varsa (ikinci açılıştan itibaren) no-op'tur.
(function migrateLegacyStorage(){
  try{
    if(localStorage.getItem('beatOrbitCfg')==null && localStorage.getItem('neonYorungeCfg')!=null){
      localStorage.setItem('beatOrbitCfg', localStorage.getItem('neonYorungeCfg'));
    }
    if(localStorage.getItem('beatOrbitStats')==null && localStorage.getItem('neonYorungeStats')!=null){
      let raw = localStorage.getItem('neonYorungeStats');
      try{
        const obj = JSON.parse(raw);
        if(obj && obj.stardust!==undefined && obj.notes===undefined) obj.notes = obj.stardust;
        if(obj && obj.lifetimeStardust!==undefined && obj.lifetimeNotes===undefined) obj.lifetimeNotes = obj.lifetimeStardust;
        raw = JSON.stringify(obj);
      }catch(e){}
      localStorage.setItem('beatOrbitStats', raw);
    }
  }catch(e){}
})();
// Güneş ve halka stilleri mağazadan kaldırıldı (uzay döneminden kalmaydı;
// plağın ortasını ve halkaların görünümünü artık tema belirliyor). Eski
// kayıtlarda seçili kalan stil sıfırlanır — bkz. aşağıdaki cfg yüklemesi.
let cfg = load('beatOrbitCfg', {sound:true, theme:'neon', skin:'teal', trail:'classic', sun:'classic', ringStyle:'classic', bigButtons:false, leftHand:false, colorblind:false, lang:'tr', gfx:'3d', gfxQuality:'auto'});
// Oyunun asıl hâli 3D: herkes (eski kayıtlar dahil) bir kez 3D'ye geçirilir.
// Sonrasında Ayarlar > 3D Grafik'ten 2D'ye dönen oyuncunun seçimi korunur.
if(!cfg.gfx3dDefaultV1){ cfg.gfx='3d'; cfg.gfx3dDefaultV1=true; }
cfg.sun='classic'; cfg.ringStyle='classic';
// Müzik ayarı yeni: sesi kapatmış eski oyuncuya birden müzik çalmasın.
if(cfg.music===undefined) cfg.music = cfg.sound!==false;
let stats = load('beatOrbitStats', {
  best:0, stars:0, games:0, maxLevel:1, magnets:0, golds:0, diamonds:0,
  unlocked:[], leaderboard:[], dailyDate:'', dailyDone:false, dailyScore:0, dailyCount:0,
  questDate:'', questId:'', questDone:false,
  notes:0, lifetimeNotes:0, owned:{themes:[], skins:[], trails:[], suns:[], rings:[]}, boosts:{},
  adRewardsDate:'', adRewardsToday:0, lastAdRewardAt:0,
  rivalName:'', rivalScore:0, premiumNoAds:false,
  lastSeenDate:'', loginStreak:0, lastClaimedRewardDate:'',
  dealDate:'', dealCategory:'', dealId:'', eventType:'',
  rivalLeague:[],
  seasonKey:'', seasonXp:0, seasonPremium:false,
  seasonClaimedFree:[], seasonClaimedPremium:[],
  upgrades:{hp:0, coinPct:0, itemCoin:0, boostDur:0, shieldPower:0, multPower:0},
  tutorialDone:false,
  cores:0, lifetimeCores:0, totalPrestiges:0, bestAtPrestige:0, gamesAtPrestige:0,
  coreUnlocked:['core_root'],
  gems:0, lifetimeGems:0,
});
// Kayıt yükleme: iç içe nesneler (owned, upgrades, boosts…) de varsayılanlarla
// birleştirilir (eski kayıtlarda yeni eklenen anahtar eksik kalmasın). Kayıt
// bozuksa (JSON hatası) ham veri '<anahtar>_bak' altına yedeklenir; ilk
// saveStats() üzerine yazsa bile ilerleme kurtarılabilir.
function load(k,def){
  let raw=null;
  try{
    raw=localStorage.getItem(k);
    const data=JSON.parse(raw||'{}');
    const out=Object.assign({}, def, data);
    for(const key in def){
      const dv=def[key], v=data[key];
      if(dv && typeof dv==='object' && !Array.isArray(dv) && v && typeof v==='object' && !Array.isArray(v)) out[key]=Object.assign({}, dv, v);
    }
    return out;
  }catch(e){
    try{ if(raw) localStorage.setItem(k+'_bak', raw); }catch(e2){}
    return Object.assign({}, def);
  }
}
// Senkron localStorage yazımı WebView'de kare kaybettirir; oyun sonunda art arda
// çağrılan kayıtlar tek yazımda birleşsin diye ertelenir, uygulama arka plana
// giderken de zorla yazılır.
let _dirtyCfg=false, _dirtyStats=false, _saveTimer=null;
function flushSaves(){
  clearTimeout(_saveTimer); _saveTimer=null;
  try{
    if(_dirtyCfg){ _dirtyCfg=false; localStorage.setItem('beatOrbitCfg', JSON.stringify(cfg)); }
    if(_dirtyStats){ _dirtyStats=false; localStorage.setItem('beatOrbitStats', JSON.stringify(stats)); }
  }catch(e){}
}
function _queueSave(){ if(!_saveTimer) _saveTimer=setTimeout(flushSaves,300); }
function saveCfg(){ _dirtyCfg=true; _queueSave(); }
function saveStats(){ _dirtyStats=true; _queueSave(); }
document.addEventListener('visibilitychange',()=>{ if(document.hidden) flushSaves(); });
window.addEventListener('pagehide',flushSaves);

// speedRamp artık SKORA bağlı (bkz. engine.js update() — skor 1500'e kadar
// hiç devreye girmiyor) ve eskisine göre %20 daha yumuşak — ani/aşırı hız
// artışı hissini azaltmak için.
// "lives" alanı kaldırıldı: can artık zorluktan bağımsız, sadece Can
// Kapasitesi yükseltmesinden geliyor (bkz. maxHpFor()). Zorluk hâlâ
// tehlike sıklığı/hızı ve skor çarpanını belirlemeye devam ediyor.
// Tehlike ihtimali (hazBase/hazRamp/hazCap) hepsinde ~%15-20 artırıldı —
// kalıcı Çekirdek Ağacı/Kademe yükseltmeleri (can, hazardSoften, güç süresi
// vb.) zamanla oyuncuyu doğal olarak güçlendirip oyunu kendiliğinden
// kolaylaştırdığı için (bkz. kullanıcı talebi), taban zorluk da buna
// karşılık bir tık yükseltildi — skor hâlâ kazanılıyor ama kolay gelmiyor.
const DIFF = {
  easy:{label:'Kolay', hazBase:0.06, hazRamp:0.0003, hazCap:0.16, speedRamp:0.00056, speedCap:2.0, scoreMult:0.8, threatFar:3.4, threatCdMul:1.5},
  normal:{label:'Normal', hazBase:0.105, hazRamp:0.00054, hazCap:0.26, speedRamp:0.00088, speedCap:2.4, scoreMult:1.0, threatFar:2.7, threatCdMul:1},
  hard:{label:'Zor', hazBase:0.165, hazRamp:0.00096, hazCap:0.40, speedRamp:0.00128, speedCap:2.9, scoreMult:1.35, threatFar:2.3, threatCdMul:0.8},
};
let diffCfg = DIFF.normal;

function mulberry32(seed){
  return function(){
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
// Oyun saati: cihaz saati geri alınsa bile görülen en ileri an kullanılır.
// Saati ileri alıp günlük ödülü/serisini/reklam hakkını toplayan ve sonra
// geri dönen oyuncu, gerçek saat o ana yetişene kadar yeni gün alamaz
// (sunucusuz en makul önlem). Date.now() UTC olduğu için saat dilimi
// değişikliği (yolculuk) bunu tetiklemez.
function gameNowMs(){
  const n=Date.now(), last=(typeof stats!=='undefined' && stats.lastSeenTs)||0;
  if(n>last && typeof stats!=='undefined'){
    const big = n-last > 60000;
    stats.lastSeenTs=n;
    if(big && typeof saveStats==='function') saveStats();
  }
  return Math.max(n,last);
}
function gameNow(){ return new Date(gameNowMs()); }
function dateSeed(d){ d=d||gameNow(); return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate(); }
function todayStr(d){ d=d||gameNow(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function daysBetweenStr(a,b){
  const da=new Date(a+'T00:00:00'), db=new Date(b+'T00:00:00');
  return Math.round((db-da)/86400000);
}
function weekendMult(){ return [5,6,0].includes(gameNow().getDay()) ? 1.2 : 1; }
let rngFn = Math.random;
function rnd(){ return rngFn(); }

// "Rakip" hedef sistemi — gerçek arkadaş verisi yok (backend/sosyal giriş
// yok), bu yüzden Subway Surfers'ın "arkadaşını geç" bannerındaki hissi
// rastgele bir isim + mantıklı bir hedef puanla simüle ediyoruz.
const RIVAL_NAMES = [
  'Ahmet','Mehmet','Ayşe','Fatma','Zeynep','Emre','Deniz','Can','Elif','Burak',
  'Ece','Kerem','Selin','Onur','Yusuf','Merve','Berk','Cem','Gizem','Umut',
  'İrem','Kaan','Aslı','Barış','Nazlı','Serkan','Buse','Tolga','Pınar','Volkan',
];
// Türkçe belirtme hâli (accusative) eki: son ünlüye göre ı/i/u/ü seçilir,
// isim ünlüyle bitiyorsa araya kaynaştırma "y" harfi girer (Tolga'yı,
// Ahmet'i, Onur'u gibi) — sabit bir "'i" eki yanlış isimlerde yanlış olurdu.
function turkishAccusative(name){
  const vowels='aeıioöuü';
  const lower=name.toLocaleLowerCase('tr-TR');
  let lastVowel=null;
  for(let i=lower.length-1;i>=0;i--){ if(vowels.includes(lower[i])){ lastVowel=lower[i]; break; } }
  const sufMap={a:'ı', ı:'ı', e:'i', i:'i', o:'u', u:'u', ö:'ü', ü:'ü'};
  const suf=sufMap[lastVowel]||'ı';
  const endsInVowel=vowels.includes(lower[lower.length-1]);
  return name+"'"+(endsInVowel?'y':'')+suf;
}
function ensureRival(){
  if(stats.rivalScore>0 && stats.best<stats.rivalScore) return;
  let name;
  do{ name=RIVAL_NAMES[Math.floor(Math.random()*RIVAL_NAMES.length)]; }while(name===stats.rivalName && RIVAL_NAMES.length>1);
  let target;
  if(stats.best<=0) target = 300+Math.floor(Math.random()*400);
  else target = stats.best + Math.max(150, Math.round(stats.best*(0.15+Math.random()*0.15)));
  stats.rivalName=name; stats.rivalScore=target;
  saveStats();
}

// "Rakipler Ligi" — İstatistikler ekranında gösterilen 5 kademeli sabit
// hedef listesi (ensureRival'daki tekli banner'dan ayrı, geriye dönük
// tüm kademeleri aynı anda görebilmek için).
function ensureRivalLeague(){
  const league = stats.rivalLeague||[];
  const topScore = league.length ? league[league.length-1].score : 0;
  if(league.length>0 && stats.best<topScore) return;
  const usedNames = new Set();
  let base = stats.best>0 ? stats.best : 0;
  const fresh=[];
  for(let i=0;i<5;i++){
    let name;
    do{ name=RIVAL_NAMES[Math.floor(Math.random()*RIVAL_NAMES.length)]; }while(usedNames.has(name) && usedNames.size<RIVAL_NAMES.length);
    usedNames.add(name);
    if(base<=0) base = 300+Math.floor(Math.random()*400);
    else base += 150+Math.floor(Math.random()*150);
    fresh.push({name, score:base, beaten:false});
  }
  stats.rivalLeague = fresh;
  saveStats();
}

// Giriş serisi ödülleri: 14 günlük döngü, ucuzdan pahalıya, bilinçli
// şekilde ÇEŞİTLİ (nota / 4 farklı tek-oyunluk takviye stoğu / ucuz
// kozmetiklerden ücretsiz birer tane / kalıcı özel kozmetik) — ekonomiyi
// bozmasın diye SADECE en ucuz kozmetikler hediye ediliyor, pahalı/nadir
// olanlara (prism, shadow, blackhole, quasar vb.) hiç dokunulmuyor.
// 7. gün bir "ara zirve" (büyükçe bir takviye), 14. gün YALNIZCA bu
// yoldan kazanılabilen özel 'loyalty_orb' ile büyük final — 15. günden
// itibaren döngü 1'den tekrar başlar (loginCycleDay() modulo alır).
const LOGIN_STREAK_REWARDS = [
  {type:'notes', amount:40},
  {type:'boost', id:'luckystart', amount:3},
  {type:'notes', amount:60},
  {type:'boost', id:'slowstart', amount:3},
  {type:'cosmetic', cat:'trails', id:'ribbon'},
  {type:'notes', amount:90},
  {type:'boost', id:'shieldstart', amount:5},
  {type:'notes', amount:120},
  {type:'boost', id:'coinrush', amount:3},
  {type:'cosmetic', cat:'trails', id:'sparkle'},
  {type:'notes', amount:160},
  {type:'boost', id:'shieldstart', amount:4},
  {type:'notes', amount:220},
  {type:'skin', id:'loyalty_orb', notes:400},
];
function loginCycleDay(){ return ((Math.max(1,stats.loginStreak||1)-1)%LOGIN_STREAK_REWARDS.length)+1; }
// Bugünün ödülü zaten alınmış mı? Seri sayacı (loginStreak) her gün
// otomatik ilerler (app açılınca) ama ÖDÜL artık otomatik verilmiyor —
// kullanıcı ana menüdeki ışıklı butona basıp takvim ekranını açmalı ve
// o günün kartına dokunmalı. O gün dokunmazsa ertesi gün o hediye kaçmış
// olur (bilinçli bir "her gün gel" baskısı — kullanıcı talebi).
function loginRewardClaimedToday(){ return stats.lastClaimedRewardDate===todayStr(); }
function grantLoginStreakReward(r){
  if(r.type==='notes') addNotes(r.amount);
  else if(r.type==='boost') stats.boosts[r.id]=(stats.boosts[r.id]||0)+r.amount;
  else if(r.type==='cosmetic'){
    if(!stats.owned[r.cat].includes(r.id)) stats.owned[r.cat].push(r.id);
  } else if(r.type==='skin'){
    if(!stats.owned.skins.includes(r.id)) stats.owned.skins.push(r.id);
    addNotes(r.notes);
  }
}
// Takvim ekranındaki "bugün" kartına dokununca çağrılır. Zaten alınmışsa
// false döner (kart tıklanamaz zaten ama çifte koruma). Aksi halde ödülü
// uygulayıp {day, reward} döner — ekran bunu onay mesajı için kullanır.
function claimLoginReward(){
  if(loginRewardClaimedToday()) return false;
  const day = loginCycleDay();
  const reward = LOGIN_STREAK_REWARDS[day-1];
  grantLoginStreakReward(reward);
  stats.lastClaimedRewardDate = todayStr();
  saveStats();
  return {day, reward};
}

// Uygulama her açıldığında bir kez çağrılır: (1) günlerdir açılmadıysa
// "geri dönüş" bonusu verir, (2) art arda giriş serisi sayacını günceller
// (ödülü VERMEZ, sadece hangi günde olduğumuzu ilerletir — bkz. yukarıdaki
// not). `stats.lastSeenDate` bugünse fonksiyon no-op'tur, bu yüzden aynı
// gün içinde tekrar çağrılması güvenlidir.
function handleDailyReturn(){
  const td = todayStr();
  if(stats.lastSeenDate === td) return;
  const gap = stats.lastSeenDate ? daysBetweenStr(stats.lastSeenDate, td) : 0;
  if(gap>=3){
    const bonus = Math.min(300, gap*20);
    addNotes(bonus);
    queueToast(t('toast_welcome_back',{gap, bonus}));
  }
  stats.loginStreak = (gap===1) ? (stats.loginStreak||0)+1 : 1;
  stats.lastSeenDate = td;
  saveStats();
}

const QUEST_POOL = [
  {id:'magnet3', textKey:'quest_magnet3', check:s=>s.magnets>=3},
  {id:'survive90', textKey:'quest_survive90', check:(s,c)=>c.elapsedSec>=90 && s.hits===0},
  {id:'level3', textKey:'quest_level3', check:(s,c)=>c.level>=3},
  {id:'diamond1', textKey:'quest_diamond1', check:s=>s.diamonds>=1},
  {id:'coin5', textKey:'quest_coin5', check:s=>s.coinPickups>=5},
];
function ensureTodayQuest(){
  const t=todayStr();
  if(stats.questDate!==t){
    stats.questDate=t; stats.questId=QUEST_POOL[dateSeed()%QUEST_POOL.length].id; stats.questDone=false; saveStats();
  }
}
function currentQuest(){ return QUEST_POOL.find(q=>q.id===stats.questId)||QUEST_POOL[0]; }

const ACHIEVEMENTS = [
  {id:'first', icon:'star', nameKey:'ach_first_name', descKey:'ach_first_desc', reward:50, check:(s)=>s.games>=1},
  {id:'hundred', icon:'star', nameKey:'ach_hundred_name', descKey:'ach_hundred_desc', reward:80, check:(s,c)=>c.runScore>=100},
  {id:'lvl5', icon:'rocket', nameKey:'ach_lvl5_name', descKey:'ach_lvl5_desc', reward:100, check:(s,c)=>c.level>=5},
  {id:'shield', icon:'shield', nameKey:'ach_shield_name', descKey:'ach_shield_desc', reward:80, check:(s,c)=>c.session.shieldSaved},
  {id:'magnetmaster', icon:'magnet', nameKey:'ach_magnetmaster_name', descKey:'ach_magnetmaster_desc', reward:120, check:(s)=>s.magnets>=10},
  {id:'diamondhunter', icon:'gem', nameKey:'ach_diamondhunter_name', descKey:'ach_diamondhunter_desc', reward:150, check:(s)=>s.diamonds>=5},
  {id:'combo15', icon:'flame', nameKey:'ach_combo15_name', descKey:'ach_combo15_desc', reward:120, check:(s,c)=>c.session.streakMax>=15},
  {id:'zenmaster', icon:'moon', nameKey:'ach_zenmaster_name', descKey:'ach_zenmaster_desc', reward:100, check:(s,c)=>c.mode==='zen' && c.elapsedSec>=120},
  {id:'dailyexplorer', icon:'calendar', nameKey:'ach_dailyexplorer_name', descKey:'ach_dailyexplorer_desc', reward:100, check:(s)=>s.dailyCount>=1},
  {id:'legend', icon:'trophy', nameKey:'ach_legend_name', descKey:'ach_legend_desc', reward:300, check:(s)=>s.best>=500},
  {id:'richling', icon:'coin', nameKey:'ach_richling_name', descKey:'ach_richling_desc', reward:150, check:(s)=>s.lifetimeNotes>=1000},
  // Zorlu başarımlar: 50-60 oyunda kendiliğinden açılmaz, ustalık ister.
  {id:'virtuoso', icon:'atom', nameKey:'ach_virtuoso_name', descKey:'ach_virtuoso_desc', reward:500, check:(s,c)=>c.runScore>=4000},
  {id:'bossslayer', icon:'medal', nameKey:'ach_bossslayer_name', descKey:'ach_bossslayer_desc', reward:500, check:(s,c)=>(c.session.bossesCleared||0)>=3},
  {id:'untouchable', icon:'shield', nameKey:'ach_untouchable_name', descKey:'ach_untouchable_desc', reward:400, check:(s,c)=>c.runScore>=1000 && c.session.hits===0},
  {id:'combo75', icon:'lightning', nameKey:'ach_combo75_name', descKey:'ach_combo75_desc', reward:400, check:(s,c)=>c.session.streakMax>=75},
  {id:'veteran', icon:'gamepad', nameKey:'ach_veteran_name', descKey:'ach_veteran_desc', reward:300, check:(s)=>s.games>=250},
  {id:'notemogul', icon:'sparkle', nameKey:'ach_notemogul_name', descKey:'ach_notemogul_desc', reward:500, check:(s)=>(s.lifetimeNotes||0)>=25000},
  {id:'survivor', icon:'hourglass', nameKey:'ach_survivor_name', descKey:'ach_survivor_desc', reward:400, check:(s,c)=>c.mode==='classic' && c.elapsedSec>=300},
  {id:'clefking', icon:'target', nameKey:'ach_clefking_name', descKey:'ach_clefking_desc', reward:400, check:(s,c)=>(c.session.diamonds||0)>=8},
  {id:'collector', icon:'palette', nameKey:'ach_collector_name', descKey:'ach_collector_desc', reward:200, check:(s)=>Object.values(s.owned).reduce((n,arr)=>n+arr.length,0)>=5},
];
function checkAchievements(c){
  const newly=[];
  for(const a of ACHIEVEMENTS){
    if(stats.unlocked.includes(a.id)) continue;
    if(a.check(stats,c)){ stats.unlocked.push(a.id); addNotes(a.reward); newly.push(a); }
  }
  if(newly.length){ saveStats(); newly.forEach(a=>queueToast(icon(a.icon)+' '+t('toast_achievement',{name:t(a.nameKey), reward:a.reward})+' '+icon('coin'))); }
}
function addNotes(n){
  n = Math.round(n*noteEventMult());
  stats.notes += n; stats.lifetimeNotes = (stats.lifetimeNotes||0) + n;
  refreshWallet();
}
function addSeasonXp(n){ stats.seasonXp += Math.round(n*seasonXpEventMult()); }

const REWARD_AD_COINS = 150, DAILY_AD_REWARD_CAP = 10;
// AdMob'un ödüllü reklamlar için resmi olarak dayattığı sabit bir
// "minimum saniye" yok (frekans sınırlaması geliştiricinin kendi AdMob
// panelinden ayarladığı bir şey) — bu yüzden istenen 15 saniye kullanıldı.
const AD_REWARD_COOLDOWN_MS = 15*1000;
function adRewardsLeftToday(){
  const t=todayStr();
  if(stats.adRewardsDate!==t){ stats.adRewardsDate=t; stats.adRewardsToday=0; }
  return Math.max(0, DAILY_AD_REWARD_CAP - (stats.adRewardsToday||0));
}
function adCooldownRemainingMs(){
  return Math.max(0, AD_REWARD_COOLDOWN_MS - (gameNowMs() - (stats.lastAdRewardAt||0)));
}
function watchAdForCoins(){
  const cooldown = adCooldownRemainingMs();
  if(cooldown>0){
    const secs=Math.ceil(cooldown/1000);
    queueToast(t('toast_ad_wait',{n:secs}));
    beep(200,0.1,'square',0.1);
    return;
  }
  if(adRewardsLeftToday()<=0){ queueToast(t('toast_ad_cap_reached')); beep(200,0.1,'square',0.1); return; }
  Ads.showRewarded(()=>{
    // Sınırlar ödül anında da kontrol edilir (bekleme/günlük hak).
    if(adRewardsLeftToday()<=0 || adCooldownRemainingMs()>0) return;
    stats.adRewardsToday=(stats.adRewardsToday||0)+1;
    stats.lastAdRewardAt=gameNowMs();
    addNotes(REWARD_AD_COINS); saveStats();
    queueToast(t('toast_ad_watched',{n:REWARD_AD_COINS}));
    beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
    syncAdButtons();
  }, ()=>{});
}
// Mağaza ve oyun-sonu ekranlarındaki "Reklam İzle" butonlarını bekleme
// süresi/günlük hak durumuna göre günceller — main.js'de her saniye
// çağrılır, böylece geri sayım ekranda canlı akar.
function syncAdButtons(){
  const cooldown = adCooldownRemainingMs();
  const left = adRewardsLeftToday();
  let html, disabled;
  if(left<=0){ html=t('ad_cap_btn'); disabled=true; }
  else if(cooldown>0){
    const secs=Math.ceil(cooldown/1000);
    html=icon('clock')+' '+t('ad_wait_btn',{n:secs}); disabled=true;
  } else { html=icon('filmreel')+' '+t('ad_watch_btn',{n:REWARD_AD_COINS})+' '+icon('coin')+')'; disabled=false; }
  ['watchAdCoinsBtn','watchAdCoinsShopBtn'].forEach(id=>{
    const el=document.getElementById(id); if(!el) return;
    el.innerHTML = html; el.disabled = disabled; el.style.opacity = disabled ? 0.55 : 1;
  });
}

// Battle-Pass ("Sezon Bileti"): takvim ayına değil, belirli bir başlangıç
// tarihine ve sabit süreye (gün) bağlı bir sezon penceresi kullanır — böylece
// "bugünden itibaren 1 ay" gibi kesin bir aralık tanımlanabilir. Her sezonun
// kendine özel, YALNIZCA o sezonun Sezon Bileti ilerlemesinden açılan bir
// çember + iz + orb seti vardır (bkz. RINGSTYLES/TRAILS/SKINS'teki
// 'seasonN_*' girdileri) — mağazadan asla notayla satın alınamazlar.
// Sezon bitince ödülü almamış olanlar için o kozmetikler kalıcı olarak
// erişilemez hâle gelir (mağaza listesinden bile kalkar, bkz. shop-ui.js
// shopItemsFor); zaten sahip olanlarda ise kalıcı bir nadirlik/prestij
// eşyası olarak kalır. Son tanımlı sezon takvimde süresi dolsa bile aktif
// kalmaya devam eder — yeni bir sezon eklenene kadar "sonsuza kadar" sürer.
// Mobil (Android/iOS) lansmanıyla birlikte sezon takvimi 1'den yeniden
// başlatıldı — eski S1/S2 pencereleri gerçek kullanıcı trafiği olmadan
// geçmişti. 'season1_orb'/'season1_trail'/'season1_ring' kozmetikleri aynen
// kalıyor, sadece bu sezonun ÖDÜLÜ olarak yeniden devreye giriyor.
const SEASONS = [
  {id:1, nameKey:'season1_name', start:'2026-10-01', days:30},
];
function seasonDayIndex(startStr, d){
  const start = new Date(startStr+'T00:00:00');
  return Math.floor((d-start)/86400000);
}
function activeSeason(d){
  d = d || gameNow();
  for(let i=0;i<SEASONS.length;i++){
    const s=SEASONS[i];
    const idx=seasonDayIndex(s.start, d);
    const isLast = i===SEASONS.length-1;
    if(idx>=0 && (isLast || idx<s.days)) return s;
  }
  return SEASONS[0];
}
// XP eşikleri normal ilerlemeye göre %50 artırıldı (bkz. proje talebi) —
// ödül miktarları (free/premium) değişmedi, sadece kademelere ulaşmak
// daha uzun sürüyor.
// XP eşikleri, bir oyundan kazanılan XP'nin skorun 1/40'ı olmasıyla
// (bkz. gameOver()) birlikte ~2 oyunda 2. kademeye, ~10-12 oyunda
// 5. kademeye ulaşacak şekilde ayarlandı. Ödül miktarları (free/premium)
// önceki sürüme göre 10 katına çıkarıldı — kademeler daha yavaş
// açılıyor ama açıldığında çok daha değerli.
// Premium (Sezon Bileti) çizgisi kademe kademe ARTAR — her kademede ücretsiz
// çizginin belirgin üstünde, son kademeler kozmetikle birlikte en değerlisi;
// bilete para vermenin anlamı olsun (eskiden hepsi düz 1000'di).
const SEASON_TIERS = [
  {xp:100,  free:300,  premium:800},
  {xp:200,  free:400,  premium:1100},
  {xp:400,  free:500,  premium:1400},
  {xp:700,  free:600,  premium:1800},
  {xp:1100, free:700,  premium:2300},
  {xp:1600, free:900,  premium:2900},
  {xp:2200, free:1100, premium:3600},
  {xp:2900, free:1300, premium:4500},
  {xp:3700, free:1600, premium:5500, cosmeticSlot:'trails'},
  {xp:4600, free:2000, premium:7000, cosmeticSlot:'skins'},
];
function ensureSeason(){
  const k = 'S'+activeSeason().id;
  if(stats.seasonKey!==k){
    stats.seasonKey=k; stats.seasonXp=0; stats.seasonPremium=false;
    stats.seasonClaimedFree=[]; stats.seasonClaimedPremium=[];
    saveStats();
  }
}
// Alınmayı bekleyen sezon ödülü sayısı (ücretsiz + varsa premium) — ana
// menüdeki Sezon butonunda kırmızı rozet olarak gösterilir.
function seasonClaimableCount(){
  ensureSeason();
  let n=0;
  SEASON_TIERS.forEach((tr,i)=>{
    if(stats.seasonXp < tr.xp) return;
    if(!stats.seasonClaimedFree.includes(i)) n++;
    if(stats.seasonPremium && !stats.seasonClaimedPremium.includes(i)) n++;
  });
  return n;
}
function seasonCosmeticFor(slot, season){
  season = season || activeSeason();
  const list = slot==='skins' ? SKINS : slot==='rings' ? RINGSTYLES : TRAILS;
  return list.find(it=>it.gate.type==='seasonpass' && it.gate.season===season.id);
}
function claimSeasonTier(index, track){
  const tier = SEASON_TIERS[index]; if(!tier) return false;
  if(stats.seasonXp < tier.xp) return false;
  if(track==='free'){
    if(stats.seasonClaimedFree.includes(index)) return false;
    addNotes(tier.free); stats.seasonClaimedFree.push(index);
  } else {
    if(!stats.seasonPremium) return false;
    if(stats.seasonClaimedPremium.includes(index)) return false;
    addNotes(tier.premium); stats.seasonClaimedPremium.push(index);
    if(tier.cosmeticSlot){
      const cosmetic = seasonCosmeticFor(tier.cosmeticSlot);
      if(cosmetic && !stats.owned[tier.cosmeticSlot].includes(cosmetic.id)) stats.owned[tier.cosmeticSlot].push(cosmetic.id);
    }
  }
  saveStats();
  queueToast(t('season_tier_claimed_toast',{n:index+1}));
  beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
  return true;
}
