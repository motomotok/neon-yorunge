// Oyun verisi: temalar, kozmetikler, mağaza kilitleri, ayarlar/istatistik
// kalıcılığı (localStorage), zorluk tabloları, seed'li RNG, günlük görevler,
// başarımlar ve yıldız tozu (coin) ekonomisi.

// Ana menüde küçük bir etiket olarak gösterilir (bkz. main.js) — bir
// güncelleme push edildiğinde cihaza gerçekten yansıyıp yansımadığını
// görsel olarak doğrulamak için. HER anlamlı değişiklikte artırılmalı:
// küçük düzeltme -> patch (x.x.+1), yeni özellik -> minor (x.+1.0).
const GAME_VERSION = '1.12.0';

const THEMES = {
  neon:      {nameKey:'theme_neon',      star:'#54e0ff', gold:'#ffd24a', peril:'#ff4d6d', player:'#a97bff', sun:'#8ad8ff', bg0:'#05060f', bg1:'#0b0f2a', sf:'#9fb8ff', gate:{type:'free'}},
  sunset:    {nameKey:'theme_sunset',    star:'#ff9e64', gold:'#ffd93d', peril:'#ff2e63', player:'#ff6bd6', sun:'#ffb37b', bg0:'#160a14', bg1:'#2a0f24', sf:'#ffd0b0', gate:{type:'free'}},
  matrix:    {nameKey:'theme_matrix',    star:'#39ff14', gold:'#c6ff3b', peril:'#ff0055', player:'#00ffc3', sun:'#7dffb0', bg0:'#020a05', bg1:'#03160b', sf:'#7dff9f', gate:{type:'free'}},
  ice:       {nameKey:'theme_ice',       star:'#7fdbff', gold:'#eaf9ff', peril:'#ff5e78', player:'#4fc3ff', sun:'#bdecff', bg0:'#05101a', bg1:'#0a2033', sf:'#bfe6ff', gate:{type:'free'}},
  vaporwave: {nameKey:'theme_vaporwave', star:'#ff6ec7', gold:'#7afcff', peril:'#ff2f6e', player:'#8a5fff', sun:'#ff9ee8', bg0:'#0f0620', bg1:'#1d0a3a', sf:'#c9a8ff', gate:{type:'coin', price:3200}},
  gilded:    {nameKey:'theme_gilded',    star:'#ffe08a', gold:'#fff4c2', peril:'#ff5a3c', player:'#ffd24a', sun:'#fff6da', bg0:'#120d02', bg1:'#241a05', sf:'#ffe9a8', gate:{type:'coin', price:3200}},
  void:      {nameKey:'theme_void',      star:'#c9c9ff', gold:'#8f8fff', peril:'#ff3d6b', player:'#4a3fff', sun:'#e0e0ff', bg0:'#020204', bg1:'#08060f', sf:'#8888aa', gate:{type:'coin', price:4000}},
  inferno:   {nameKey:'theme_inferno',   star:'#ffb454', gold:'#ffe08a', peril:'#ff2e2e', player:'#ff5a1f', sun:'#ffcf8a', bg0:'#170502', bg1:'#2c0a03', sf:'#ffb27a', gate:{type:'coin', price:5600}},
  celestial: {nameKey:'theme_celestial', star:'#7fffd4', gold:'#ffe9a8', peril:'#ff4d8a', player:'#2fe6c4', sun:'#bff7ea', bg0:'#01100e', bg1:'#03201b', sf:'#8ff5da', gate:{type:'coin', price:6000}},
};
let T = THEMES.neon;
function applyTheme(key){
  T = THEMES[key] || THEMES.neon; cfg.theme = key; saveCfg();
  const r = document.documentElement.style;
  r.setProperty('--star',T.star); r.setProperty('--gold',T.gold);
  r.setProperty('--peril',T.peril); r.setProperty('--player',T.player);
  r.setProperty('--bg0',T.bg0); r.setProperty('--bg1',T.bg1);
  document.body.style.background = T.bg0;
  document.querySelectorAll('.theme').forEach(el=>el.classList.toggle('sel', el.dataset.key===key));
}

const SKINS = [
  {id:'default', nameKey:'skin_default', color:'#a97bff', gate:{type:'free'}},
  {id:'verdant', nameKey:'skin_verdant', color:'#5efc82', gate:{type:'achievement', id:'shield'}},
  {id:'solar',   nameKey:'skin_solar',   color:'#ffd24a', gate:{type:'achievement', id:'lvl5'}},
  {id:'aurora',  nameKey:'skin_aurora',  color:'#7fe8ff', gate:{type:'achievement', id:'diamondhunter'}},
  {id:'crimson', nameKey:'skin_crimson', color:'#ff4d6d', gate:{type:'achievement', id:'combo15'}},
  {id:'ember',   nameKey:'skin_ember',   color:'#ff8a3d', gate:{type:'coin', price:2000}},
  {id:'frost',   nameKey:'skin_frost',   color:'#bfe8ff', gate:{type:'coin', price:2000}},
  {id:'toxic',   nameKey:'skin_toxic',   color:'#baff3d', gate:{type:'coin', price:2800}},
  {id:'obsidian',nameKey:'skin_obsidian', color:'#7d6fae', gate:{type:'coin', price:2800}},
  {id:'prism',   nameKey:'skin_prism',   color:'#ffffff', gate:{type:'coin', price:5200}, rainbow:true},
  {id:'plasma',    nameKey:'skin_plasma',    color:'#ff5ec4', gate:{type:'coin', price:5600}},
  {id:'starlight', nameKey:'skin_starlight', color:'#eaf2ff', gate:{type:'coin', price:6400}},
  {id:'shadow',    nameKey:'skin_shadow',    color:'#3a2f55', gate:{type:'coin', price:7200}},
  {id:'season1_orb', nameKey:'skin_season1orb', color:'#54e0ff', gate:{type:'seasonpass', season:1}, rainbow:true},
  {id:'season2_orb', nameKey:'skin_season2orb', color:'#ff8a3d', gate:{type:'seasonpass', season:2}, rainbow:true},
];
function playerColor(){
  const sk=SKINS.find(s=>s.id===cfg.skin)||SKINS[0];
  if(!isUnlockedItem('skins', sk)) return SKINS[0].color;
  if(sk.rainbow) return `hsl(${(performance.now()*0.06)%360},85%,68%)`;
  return sk.color;
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
// aynı yıldız tozuyla satın alınır — böylece her yeni deneme bir öncekinden
// biraz daha güçlü başlar.
//
// TEK bir formül, tüm hatlarda aynı: 8 kademe, maliyet GEOMETRİK dizi
// (her kademe bir öncekinden ×1.5 pahalı), etki her kademede SABİT bir
// miktar (E0) ekler — incremental-oyun tasarımında standart bir kalıp:
// sabit güç artışı + büyüyen maliyet = doğal azalan getiri eğrisi. Her
// hattı sadece 2 parametre tanımlar: C0 (1. kademe maliyeti) ve E0
// (kademe başına etki). Geometrik dizi toplamı C0×(1.5^8-1)/0.5 ≈
// C0×49.26 olduğundan, hedeflenen toplam maliyetten C0=hedef/49.26 ile
// geri çözüldü — 6 hattın toplamı ~50.000 yıldız tozu olacak şekilde.
function buildTiers(C0, E0){
  const tiers=[];
  for(let i=1;i<=8;i++) tiers.push({cost:Math.round(C0*Math.pow(1.5,i-1)/10)*10, add:E0});
  return tiers;
}
const META_UPGRADES = {
  hp: {
    nameKey:'up_hp_name', icon:'heart', format:n=>'+'+n+' '+t('unit_hp'),
    tiers: buildTiers(240, 2), // hedef ~12.000, taban 3 -> tavan 19 can
  },
  coinPct: {
    nameKey:'up_coinpct_name', icon:'sparkle', format:n=>'+%'+(Math.round(n*1000)/10),
    tiers: buildTiers(200, 0.02), // hedef ~10.000, tavan %16 kazanç çarpanı
  },
  itemCoin: {
    nameKey:'up_itemcoin_name', icon:'coin', format:n=>'+'+n+' '+icon('coin'),
    tiers: buildTiers(180, 5), // hedef ~9.000, tavan +40 boncuk başına
  },
  boostDur: {
    nameKey:'up_boostdur_name', icon:'hourglass', format:n=>'+%'+(Math.round(n*1000)/10),
    tiers: buildTiers(140, 0.025), // hedef ~7.000, tavan %20 (yavaşlatma/mıknatıs/çarpan)
  },
  shieldPower: {
    nameKey:'up_shieldpower_name', icon:'shield', format:n=>Math.floor(n)+' '+t('unit_hits'),
    tiers: buildTiers(120, 0.5), // hedef ~6.000, taban 1 -> tavan 5 vuruş emer
  },
  multPower: {
    nameKey:'up_multpower_name', icon:'lightning', format:n=>'×'+(Math.round((2+n)*100)/100),
    tiers: buildTiers(120, 0.15), // hedef ~6.000, taban ×2 -> tavan ×3.2 puan çarpanı
  },
};
function upgradeLevel(key){ return (stats.upgrades && stats.upgrades[key]) || 0; }
// Kademe (stardust, sıfırlanabilir) + Çekirdek Ağacı (prestij, KALICI) aynı
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
  if(!tier || (stats.stardust||0)<tier.cost) return false;
  stats.stardust-=tier.cost;
  if(!stats.upgrades) stats.upgrades={hp:0,coinPct:0,itemCoin:0,boostDur:0,shieldPower:0,multPower:0};
  stats.upgrades[key]=upgradeLevel(key)+1;
  saveStats(); refreshWallet();
  return true;
}
function maxHpFor(){ return 3 + upgradeBonus('hp'); }
// Taban kalkan 1 vuruş emer; Kalkan Gücü her kademede +0.5 "yarım vuruş"
// ekler (bkz. buildTiers(120,0.5) yukarıda) — floor ile tam vuruşa çevrilir.
function shieldHitsFor(){ return 1+Math.floor(upgradeBonus('shieldPower')); }
// Güç Seviyesi: 6 hattın kademe toplamı (0-48) — roguelike'ın "karakter
// seviyesi" karşılığı, ana menüde tek bakışta ilerlemeyi gösterir.
function totalPowerLevel(){
  return Object.keys(META_UPGRADES).reduce((s,k)=>s+upgradeLevel(k), 0);
}
// Sadece kalıcı yükseltme sistemini (kademeler + yıldız tozu bakiyesi)
// sıfırlar — oyuncu baştan güçlenmek isterse. İstatistikler (en iyi skor,
// başarımlar, liderlik, toplam biriktirilen yıldız tozu, sahip olunan
// kozmetikler/takviyeler, sezon ilerlemesi vb.) BİLEREK dokunulmadan kalır.
function resetProgression(){
  stats.upgrades = {hp:0, coinPct:0, itemCoin:0, boostDur:0, shieldPower:0, multPower:0};
  stats.stardust = 0;
  saveStats(); refreshWallet();
}

// ---- Süpernova (prestij) ve Çekirdek Ağacı -----------------------------
// Oyuncuları bir "sona" götüren eşik mekaniği: Kademe (stardust) ağacını
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
// Çekirdek kazanç ağırlıkları: geliştirme ağacı (Kademe toplamı, 0-48) EN
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

function isUnlockedItem(category, item){
  if(item.gate.type==='free') return true;
  if(item.gate.type==='achievement') return stats.unlocked.includes(item.gate.id);
  if(item.gate.type==='coin') return stats.owned[category].includes(item.id);
  if(item.gate.type==='seasonpass') return stats.owned[category].includes(item.id);
  return false;
}

const DEAL_DISCOUNT = 0.3;
const DEAL_CATEGORIES = {
  themes: ()=>Object.keys(THEMES).map(k=>Object.assign({id:k}, THEMES[k])),
  skins: ()=>SKINS, trails: ()=>TRAILS, suns: ()=>SUNS, rings: ()=>RINGSTYLES,
};
// Her gün tarih-seed'li RNG ile kozmetik kataloglardan bir öğe seçip
// %30 indirim uygular ("Günün Fırsatı"). goShop() her açılışta çağırır,
// stats.dealDate bugünse no-op olduğu için güvenle tekrar çağrılabilir.
function ensureDailyDeal(){
  const t = todayStr();
  if(stats.dealDate===t) return;
  const candidates=[];
  for(const cat in DEAL_CATEGORIES){
    DEAL_CATEGORIES[cat]().forEach(item=>{
      if(item.gate.type==='coin' && !isUnlockedItem(cat,item)) candidates.push({cat, id:item.id});
    });
  }
  stats.dealDate = t;
  if(candidates.length){
    const pick = candidates[Math.floor(mulberry32(dateSeed())()*candidates.length)];
    stats.dealCategory = pick.cat; stats.dealId = pick.id;
  } else { stats.dealCategory=''; stats.dealId=''; }
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

let cfg = load('neonYorungeCfg', {sound:true, theme:'neon', skin:'default', trail:'classic', sun:'classic', ringStyle:'classic', bigButtons:false, leftHand:false, colorblind:false, lang:'tr'});
let stats = load('neonYorungeStats', {
  best:0, stars:0, games:0, maxLevel:1, magnets:0, golds:0, diamonds:0,
  unlocked:[], leaderboard:[], dailyDate:'', dailyDone:false, dailyScore:0, dailyCount:0,
  questDate:'', questId:'', questDone:false,
  stardust:0, lifetimeStardust:0, owned:{themes:[], skins:[], trails:[], suns:[], rings:[]}, boosts:{},
  adRewardsDate:'', adRewardsToday:0, lastAdRewardAt:0,
  rivalName:'', rivalScore:0, premiumNoAds:false,
  lastSeenDate:'', loginStreak:0,
  dealDate:'', dealCategory:'', dealId:'',
  rivalLeague:[],
  seasonKey:'', seasonXp:0, seasonPremium:false,
  seasonClaimedFree:[], seasonClaimedPremium:[],
  upgrades:{hp:0, coinPct:0, itemCoin:0, boostDur:0, shieldPower:0, multPower:0},
  tutorialDone:false,
  cores:0, lifetimeCores:0, totalPrestiges:0, bestAtPrestige:0, gamesAtPrestige:0,
  coreUnlocked:['core_root'],
});
function load(k,def){ try{ return Object.assign({}, def, JSON.parse(localStorage.getItem(k)||'{}')); }catch(e){ return def; } }
// Senkron localStorage yazımı WebView'de kare kaybettirir; oyun sonunda art arda
// çağrılan kayıtlar tek yazımda birleşsin diye ertelenir, uygulama arka plana
// giderken de zorla yazılır.
let _dirtyCfg=false, _dirtyStats=false, _saveTimer=null;
function flushSaves(){
  clearTimeout(_saveTimer); _saveTimer=null;
  try{
    if(_dirtyCfg){ _dirtyCfg=false; localStorage.setItem('neonYorungeCfg', JSON.stringify(cfg)); }
    if(_dirtyStats){ _dirtyStats=false; localStorage.setItem('neonYorungeStats', JSON.stringify(stats)); }
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
const DIFF = {
  easy:{label:'Kolay', hazBase:0.05, hazRamp:0.00025, hazCap:0.14, speedRamp:0.00056, speedCap:2.0, scoreMult:0.8},
  normal:{label:'Normal', hazBase:0.09, hazRamp:0.00045, hazCap:0.22, speedRamp:0.00088, speedCap:2.4, scoreMult:1.0},
  hard:{label:'Zor', hazBase:0.14, hazRamp:0.0008, hazCap:0.34, speedRamp:0.00128, speedCap:2.9, scoreMult:1.35},
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
function dateSeed(d){ d=d||new Date(); return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate(); }
function todayStr(d){ d=d||new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function daysBetweenStr(a,b){
  const da=new Date(a+'T00:00:00'), db=new Date(b+'T00:00:00');
  return Math.round((db-da)/86400000);
}
function weekendMult(){ return [5,6,0].includes(new Date().getDay()) ? 1.2 : 1; }
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

// Giriş serisi ödülleri: gün 1..7, 8. günden itibaren döngü tekrarlanır.
const LOGIN_STREAK_REWARDS = [20,30,40,60,80,100,150];

// Uygulama her açıldığında bir kez çağrılır: (1) günlerdir açılmadıysa
// "geri dönüş" bonusu verir, (2) art arda giriş serisini günceller ve
// ödülünü verir. `stats.lastSeenDate` bugünse fonksiyon no-op'tur, bu
// yüzden aynı gün içinde tekrar çağrılması güvenlidir.
function handleDailyReturn(){
  const td = todayStr();
  if(stats.lastSeenDate === td) return;
  const gap = stats.lastSeenDate ? daysBetweenStr(stats.lastSeenDate, td) : 0;
  if(gap>=3){
    const bonus = Math.min(300, gap*20);
    addStardust(bonus);
    queueToast(t('toast_welcome_back',{gap, bonus}));
  }
  stats.loginStreak = (gap===1) ? (stats.loginStreak||0)+1 : 1;
  const day = Math.min(stats.loginStreak, LOGIN_STREAK_REWARDS.length);
  const reward = LOGIN_STREAK_REWARDS[day-1];
  addStardust(reward);
  queueToast(t('toast_login_streak',{n:stats.loginStreak, reward}));
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
  {id:'richling', icon:'coin', nameKey:'ach_richling_name', descKey:'ach_richling_desc', reward:150, check:(s)=>s.lifetimeStardust>=1000},
  {id:'collector', icon:'palette', nameKey:'ach_collector_name', descKey:'ach_collector_desc', reward:200, check:(s)=>Object.values(s.owned).reduce((n,arr)=>n+arr.length,0)>=5},
];
function checkAchievements(c){
  const newly=[];
  for(const a of ACHIEVEMENTS){
    if(stats.unlocked.includes(a.id)) continue;
    if(a.check(stats,c)){ stats.unlocked.push(a.id); addStardust(a.reward); newly.push(a); }
  }
  if(newly.length){ saveStats(); newly.forEach(a=>queueToast(icon(a.icon)+' '+t('toast_achievement',{name:t(a.nameKey), reward:a.reward})+' '+icon('coin'))); }
}
function addStardust(n){
  stats.stardust += n; stats.lifetimeStardust = (stats.lifetimeStardust||0) + n;
  refreshWallet();
}

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
  return Math.max(0, AD_REWARD_COOLDOWN_MS - (Date.now() - (stats.lastAdRewardAt||0)));
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
    stats.adRewardsToday=(stats.adRewardsToday||0)+1;
    stats.lastAdRewardAt=Date.now();
    addStardust(REWARD_AD_COINS); saveStats();
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
// 'seasonN_*' girdileri) — mağazadan asla yıldız tozuyla satın alınamazlar.
// Sezon bitince ödülü almamış olanlar için o kozmetikler kalıcı olarak
// erişilemez hâle gelir (mağaza listesinden bile kalkar, bkz. shop-ui.js
// shopItemsFor); zaten sahip olanlarda ise kalıcı bir nadirlik/prestij
// eşyası olarak kalır. Son tanımlı sezon takvimde süresi dolsa bile aktif
// kalmaya devam eder — yeni bir sezon eklenene kadar "sonsuza kadar" sürer.
const SEASONS = [
  {id:1, nameKey:'season1_name', start:'2026-07-22', days:30},
  {id:2, nameKey:'season2_name', start:'2026-08-21', days:30},
];
function seasonDayIndex(startStr, d){
  const start = new Date(startStr+'T00:00:00');
  return Math.floor((d-start)/86400000);
}
function activeSeason(d){
  d = d || new Date();
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
const SEASON_TIERS = [
  {xp:100,  free:300,  premium:1000},
  {xp:200,  free:400,  premium:1000},
  {xp:400,  free:500,  premium:1000},
  {xp:700,  free:600,  premium:1000},
  {xp:1100, free:700,  premium:1000},
  {xp:1600, free:900,  premium:1000},
  {xp:2200, free:1100, premium:1000},
  {xp:2900, free:1300, premium:1000, cosmeticSlot:'rings'},
  {xp:3700, free:1600, premium:1000, cosmeticSlot:'trails'},
  {xp:4600, free:2000, premium:1000, cosmeticSlot:'skins'},
];
function ensureSeason(){
  const k = 'S'+activeSeason().id;
  if(stats.seasonKey!==k){
    stats.seasonKey=k; stats.seasonXp=0; stats.seasonPremium=false;
    stats.seasonClaimedFree=[]; stats.seasonClaimedPremium=[];
    saveStats();
  }
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
    addStardust(tier.free); stats.seasonClaimedFree.push(index);
  } else {
    if(!stats.seasonPremium) return false;
    if(stats.seasonClaimedPremium.includes(index)) return false;
    addStardust(tier.premium); stats.seasonClaimedPremium.push(index);
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
