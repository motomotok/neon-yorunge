// Simülasyon çekirdeği: canvas boyutlandırma, oyuncu/eşya fiziği, çarpışma
// tespiti, güç-yükseltmeleri, can/revive akışı ve HUD güncellemesi.
// (Çizim mantığı render.js'de, ekran/durum geçişleri screens.js'de.)
const cv = document.getElementById('game');
// let: gfx.js (3D mod) klasik öğe çizimlerini doku olarak üretmek için
// drawItem()'ı geçici olarak başka bir canvas'a yönlendirir (bkz. paintItem3D).
let ctx = cv.getContext('2d');
let W,H,CX,CY,DPR, RINGS=[], PLAYER_R;
const NUM_RINGS = 3, MIN_GAP = 0.55;

function resize(){
  // 3D modda bu canvas yalnız tam ekran flaşları taşır (dünya WebGL'de):
  // yüksek çözünürlük gereksiz yere her karede ekstra tam ekran katman demek.
  const overlayOnly = typeof cfg!=='undefined' && cfg.gfx==='3d' && (typeof _gfx3dState==='undefined' || _gfx3dState!=='failed');
  DPR = overlayOnly ? 1 : Math.min(window.devicePixelRatio||1, 1.5);
  W = window.innerWidth; H = window.innerHeight;
  // Bazı Android WebView'lerde (örn. Redmi Note 9) 100dvh 0'a çözülüyor ve
  // tüm menü/ekranlar çökeyip görünmez oluyordu; gerçek yüksekliği CSS'e
  // JS ile veriyoruz (style.css: var(--app-h,100vh)).
  document.documentElement.style.setProperty('--app-h', H+'px');
  cv.width=W*DPR; cv.height=H*DPR; cv.style.width=W+'px'; cv.style.height=H+'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);
  CX=W/2; CY=H/2;
  const base=Math.min(W,H);
  RINGS=[base*0.19, base*0.285, base*0.38];
  PLAYER_R=Math.max(9, base*0.021);
}

let state='menu';
// story: oyun bir anlatıcı mesajı için donmuş (bkz. narrator.js) — dünya çizilir, update çalışmaz.
const GAME_STATES = {play:1, pause:1, over:1, revive:1, story:1};
// Menü ailesindeki tüm ekranlar: gerçek oyun burada değil ama oyuncu küresi
// hâlâ yörüngede yavaşça dönüyor olmalı — "canlı menü" hissi için.
const MENU_STATES = {menu:1, mode:1, shop:1, settings:1, stats:1, battlepass:1, upgrades:1, howto:1, language:1, loginstreak:1};
let mode='classic', diffKey='normal';
let player, items, particles, score, combo, hp, maxHp, level, elapsed, spawnCooldown, shake, flash;
let levelFlashT, session, timeLeft, newRecord, timeScale, timeScaleT, activeBoost=null, pendingBoost=null;
// Boss dalgası: skor eşiklerinde (bkz. BOSS_STAGES) güneşten patlayarak
// beliren, tek seferlik yoğun bir tehlike dalgası. bossWaveItems o dalganın
// öğelerine referans tutar; hepsi (kaçırılarak ya da çarpılarak) hayattan
// çıkınca "temizlendi" sayılır ve oyuncuya ekstra nota verilir.
let bossNextIndex, bossActive, bossWaveItems, bossReward;
// Boss'un gelişini önceden hisettiren "telegraph": eşikten BOSS_WARN_WINDOW
// puan önce başlar, merkezden dışa doğru büyüyen farklı renkte bir yaratık
// olarak çizilir (bkz. render.js: drawBossTelegraph), eşiğe ulaşınca patlar
// ve tam o anda startBossWave() zaten tetiklenir.
let bossTelegraph;
// Can (kalp) düşürme: HP dolu değilken, düşük ama fark edilir bir ihtimalle
// belirir. HEART_SCORE_GAP bir kere düşünce art arda gelmesini engeller —
// oyuncu tam HP'ye dönene kadar başka biri beklemez, ama "otomatik doldurma"
// gibi hissettirmesin diye aralarda anlamlı bir skor mesafesi zorunlu.
let lastHeartScore;
const HEART_CHANCE = 0.06, HEART_SCORE_GAP = 300;

const SLOW_DUR=300, MAGNET_DUR=360, INVUL=47.5, MULT_DUR=360; // INVUL eskiden 95'ti, yarıya indirildi
// Kombo başına eklenen hız payı — bkz. update()'teki comboSpeedBonus.
// diffCfg.speedCap'e göre normal zorlukta tavana ~combo 27'de ulaşılır.
const COMBO_SPEED_STEP = 0.09;
const PW = ['shield','slow','magnet','mult'];
// HUD çipleriyle (bkz. chip() çağrıları aşağıda) aynı ikon setine eşler —
// oyun dünyasındaki takviye topları da render.js'de bu anahtarlarla,
// sistem emojisi yerine oyunun kendi SVG ikonlarıyla çizilir.
const PW_ICON_TYPE = {shield:'shield', slow:'clock', magnet:'magnet', mult:'coin'};

function resetGame(){
  player = { ang:-Math.PI/2, targetRing:0, curRadius:radiusFor(0), speed:1.6, speedMulEase:1,
             shieldHits:0, slowT:0, magnetT:0, invulT:0, multT:0 };
  items=[]; particles=[]; score=0;
  // Çekirdek Ağacı'ndaki "Refleks" dalı, her denemeyi biraz daha ileriden
  // (yüksek bir kombodan) başlatır — kalıcı, sıfırlanmayan bir avantaj.
  combo=1+Math.floor(coreBonus('startCombo'));
  maxHp = mode==='zen' ? 9999 : maxHpFor(); hp = maxHp;
  level=1; elapsed=0; spawnCooldown=0; threatCd=150; rareSince=0; teaserCredit=0; teaserLastScore=0; breathT=0; nextBreath=720; shake=0; flash=0; levelFlashT=0;   // threatCd: tehdit yönetmeni ilk ~2.5 sn bekler
  session = {stars:0, golds:0, diamonds:0, magnets:0, hits:0, shieldSaved:false, streakMax:0,
             coins:0, coinPickups:0, luckyCharges:0, noteMult:1, revivedUsed:false, bossesCleared:0};
  timeLeft = mode==='time' ? 60 : null;
  newRecord=false; timeScale=1; timeScaleT=0;
  bossNextIndex=0; bossActive=false; bossWaveItems=[]; bossReward=0; bossTelegraph=null; bossQueue=[]; bossNextCol=0; bossEnd=0;
  lastHeartScore=-HEART_SCORE_GAP;
  if(activeBoost){
    if(activeBoost==='shieldstart') player.shieldHits=shieldHitsFor();
    else if(activeBoost==='slowstart') player.slowT=SLOW_DUR;
    else if(activeBoost==='luckystart') session.luckyCharges=3;
    else if(activeBoost==='coinrush') session.noteMult=1.5;
    activeBoost=null;
  }
  // İlk 4 tohum öğe: açılar zaten eşit aralıklı, halkaları da dengeli
  // dağıtalım (tamamen rastgele bırakılırsa 4'ü de aynı halkaya düşebilir).
  const seedRings=[0,1,2,0];
  for(let i=seedRings.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [seedRings[i],seedRings[j]]=[seedRings[j],seedRings[i]]; }
  // İlk tohum öğeleri asla cızırtı değil — oyun başlar başlamaz çarpılmasın.
  for(let i=0;i<4;i++) spawnItem(player.ang + 1.4 + i*0.95, seedRings[i], false, true);
  updateHud();
}

// Menü ailesindeki ekranlarda (bkz. MENU_STATES) gerçek fizik/çarpışma
// çalışmaz, ama oyuncu küresi görünürde kalıp yavaşça dönsün diye —
// "canlı menü" hissi. Hız/kombo gibi hiçbir gerçek oyun değişkenine
// bağlı değil, sabit ve yavaş.
function updateIdleOrb(dt){ player.ang += 0.006*dt; }

// Zorluk çarpanı (0.8/1.35) yüzünden puan artışları küsuratlı olabiliyor;
// her ekleme sonrası kuruşa (2 ondalık) yuvarlamazsak kayan nokta hatası
// birikip "44.999999999" gibi uzun/çirkin değerlere yol açıyordu.
function addScore(n){ score = Math.round((score+n)*100)/100; }
function normAng(a){ a%=(Math.PI*2); if(a<0)a+=Math.PI*2; return a; }
function angDiff(a,b){ let d=b-a; while(d>Math.PI)d-=Math.PI*2; while(d<-Math.PI)d+=Math.PI*2; return d; }
function radiusFor(r){ return RINGS[r]; }
function easeOut(t){ return 1-Math.pow(1-t,3); }
function isHazardType(t){ return t==='hazard'||t==='hazardJump'||t==='hazardBomb'||t==='hazardPull'||t==='hazardTwin'||t==='hazardPulse'||t==='hazardCreep'; }
function isPower(t){ return t==='shield'||t==='slow'||t==='magnet'||t==='mult'; }

// Skor eşiklerinde açılan gelişmiş tehlike tipleri: eşiğe ulaşınca bir anda
// hep-ya-da-hiç değil, eşikten ne kadar ileri gidersen ihtimali o kadar
// artan (tavana kadar) kalıcı bir risk haline gelirler.
const HAZARD_KINDS = [
  {type:'hazard',     min:0,    rampPer:0,       cap:0.55},
  {type:'hazardJump', min:0,    rampPer:0,       cap:0.27},
  {type:'hazardBomb', min:0,    rampPer:0,       cap:0.18},
  {type:'hazardPull', min:500,  rampPer:0.00012, cap:0.22},
  {type:'hazardTwin', min:1000, rampPer:0.00012, cap:0.22},
  {type:'hazardPulse',min:1500, rampPer:0.00012, cap:0.22},
  {type:'hazardCreep',min:2000, rampPer:0.00012, cap:0.20},
];
// Her tip kaç HP götürür — açılma eşiğine ve mekanik zorluğuna göre
// kademeli artıyor (bkz. hitHazard()). Temel/erken tipler hafif, sinsi
// (en geç açılan) hazardCreep en ağır — Can Kapasitesi yükseltmesiyle
// dengelenmesi gereken asıl risk bu.
const HAZARD_DAMAGE = {
  hazard:1, hazardJump:1, hazardBomb:2, hazardPull:3, hazardTwin:4, hazardPulse:6, hazardCreep:10,
};
// ---- Keşif ("teaser") algoritması ----
// Gelişmiş tipler eşiklerinden önce de ARA SIRA görünür — oyuncu daha 300-500
// puandayken "bu renk ne?" diye heyecanlansın. Puan-uzayında bir Poisson
// süreci gibi çalışır (cızırtı sayısından bağımsız: hızlı da yavaş puanlayan
// oyuncu da aynı puanda aynı şansa sahip):
//  1) Yoğunluk e(s) = 100 puan başına beklenen keşif: 150 puana kadar 0;
//     150→500 arası 0.10→0.25; 500→1000 arası 0.25→0.30; sonrası 0.30.
//     Toplam beklenen: 500 puana kadar ~0.6 → P(en az bir) ≈ %45 (2-3 oyunda
//     bir); 1000 puana kadar ~2.0 → ≈ %86.
//  2) Kredi: her cızırtı seçiminde son seçimden beri kazanılan puan kadar
//     kredi birikir; zar ihtimali 1-e^(-kredi) ve her zar krediyi harcar
//     (Poisson inceltme) — keşifler puan ilerledikçe düzenli dağılır.
//  3) Aralık: iki keşif arasında en az 3 normal cızırtı.
//  4) Seçim: eşiği henüz gelmemiş tipler arasından; eşiğe yakın olan ve
//     oyuncunun hiç görmediği tipler daha olası.
//  5) Adalet: eşiğinden önce gelen keşif cızırtısı en fazla 2 can götürür.
let rareSince=0, _pickTeaser=false, teaserCredit=0, teaserLastScore=0;
function teaserRate(s){
  if(s<150) return 0;
  if(s<500) return 0.10 + (s-150)/350*0.15;
  if(s<1000) return 0.25 + (s-500)/500*0.05;
  return 0.30;
}
function teaserChance(){
  const ds = Math.max(0, score-teaserLastScore); teaserLastScore = score;
  teaserCredit += teaserRate(score)*ds/100;
  if(rareSince<3) return 0;                 // aralık dolana kadar kredi birikmeye devam eder
  const p = 1-Math.exp(-teaserCredit);
  teaserCredit = 0;                         // her zar o ana kadarki krediyi harcar (Poisson inceltme)
  return p;
}
function pickHazardKind(){
  _pickTeaser=false;
  const locked = HAZARD_KINDS.filter(h=>h.min>0 && score<h.min);
  const tc = teaserChance();
  if(locked.length && tc>0 && rnd()<tc){
    const seen = stats.seenHazards||[];
    let tot=0;
    const ws = locked.map(h=>{ const w=(1/(1+(h.min-score)/500))*(seen.includes(h.type)?1:2); tot+=w; return w; });
    let r=rnd()*tot;
    for(let i=0;i<locked.length;i++){ r-=ws[i]; if(r<=0){ _pickTeaser=true; rareSince=0; teaserCredit=0; return locked[i].type; } }
  }
  let total=0;
  const weights=HAZARD_KINDS.map(h=>{
    const w = h.min===0 ? h.cap : (score>=h.min ? Math.min(h.cap,(score-h.min)*h.rampPer) : 0);
    total+=w; return w;
  });
  let r=rnd()*total;
  let type='hazard';
  for(let i=0;i<HAZARD_KINDS.length;i++){ r-=weights[i]; if(r<=0){ type=HAZARD_KINDS[i].type; break; } }
  if(type==='hazard'||type==='hazardJump'||type==='hazardBomb') rareSince++; else rareSince=0;
  return type;
}
const RARE_GLITCH_KEYS = {hazardPull:'yellow', hazardTwin:'purple', hazardPulse:'orange', hazardCreep:'pink'};
// İlk kez görülen gelişmiş cızırtı: kısa bir "Yeni cızırtı!" bildirimi.
function noteGlitchSeen(type){
  if(!RARE_GLITCH_KEYS[type] || tutorialActive) return;
  stats.seenHazards = stats.seenHazards || [];
  if(stats.seenHazards.includes(type)) return;
  stats.seenHazards.push(type); saveStats();
  const k=RARE_GLITCH_KEYS[type];
  queueToast(t('toast_new_glitch',{name:t('glitch_'+k+'_name'), desc:t('glitch_'+k+'_desc')}));
}

// Skor eşiklerinde bir kerelik "boss dalgası": güneşten patlama efektiyle
// belirir, aynı anda `count` kadar tehlike fırlatır. Zen modda hiç
// tetiklenmez (o modda zaten hiç tehlike yok). Her eşik bir oyunda yalnızca
// bir kez tetiklenir (bkz. bossNextIndex, resetGame() ile sıfırlanır).
// gap = ardışık cızırtı sütunları arasındaki açı (küçüldükçe sıklaşır),
// laps = savaşın kaç tur boyunca KESİNTİSİZ süreceği.
// sw = halka değiştirme penceresi (orta halkada, radyan) — küçüldükçe daha
// keskin refleks ister; laps = labirentin kaç tur süreceği.
const BOSS_STAGES = [
  {score:450,   sw:0.70, laps:2,   reward:30},
  {score:1600,  sw:0.60, laps:2.5, reward:55},
  {score:3000,  sw:0.54, laps:3,   reward:80},
  {score:5000,  sw:0.50, laps:3,   reward:120},
  {score:10000, sw:0.46, laps:3,   reward:220},
  {score:15000, sw:0.43, laps:3,   reward:300},
];
// 15000'den sonra dizi BİTMİYOR — her +5000 puanda bir dalga daha gelmeye
// devam ediyor (count/reward kademeli artıyor, count bir tavanda duruyor).
// Eskiden BOSS_STAGES.length'te tamamen kesiliyordu; iyi oynayan/kalıcı
// yükseltmeleri olan bir oyuncu 15000'i geçtiğinde önünde hiçbir hedef
// kalmıyordu (bkz. kullanıcı geri bildirimi — "3k'dan sonra amaçsız
// hissettim"). bossStageFor() dizinin ÖTESİNDEKİ her index için de bir
// tanım üretir, boss dalgaları asla bitmez.
const BOSS_INFINITE_STEP = 5000;
const BOSS_INFINITE_REWARD_STEP = 60;
function bossStageFor(index){
  if(index < BOSS_STAGES.length) return BOSS_STAGES[index];
  const extra = index - BOSS_STAGES.length + 1;
  const last = BOSS_STAGES[BOSS_STAGES.length-1];
  return {
    score: last.score + extra*BOSS_INFINITE_STEP,
    sw: Math.max(0.40, last.sw - extra*0.01),
    reward: last.reward + extra*BOSS_INFINITE_REWARD_STEP,
    laps: 3,
  };
}
// Boss dalgası sırasında oyuncunun (mevcut hızından bağımsız) sabit açısal
// hızı — bir tur ~5 sn; boss 2-3 tur sürer (bkz. spawnBossColumns).
const BOSS_SLOW_RATE = 0.0204;   // eskiden 0.012 — boss'ta çok yavaşlanıyordu (x1.7)
// Telegraph, eşikten BOSS_WARN_SCORE_GAP puan önce başlar ve SKORDAN
// BAĞIMSIZ, gerçek zamanlı BOSS_WARN_SECONDS saniye sonra (performance.now()
// ile ölçülür) boss'u tetikler — oyuncu o aralıkta hiç puan kazanamasa bile
// (örn. eşiğin son birkaç puanına ulaşamıyorsa) boss "askıda" kalmaz, süre
// dolunca kesin gelir. Skor eşiğine erken ulaşılırsa da (hızlı oyuncu)
// beklemeden hemen tetiklenir — hangisi önce gelirse.
const BOSS_WARN_SCORE_GAP = 100;
const BOSS_WARN_SECONDS = 5;
// Telegraph'ın "heyecan eğrisi": ilk %60'lık dilimde (5 sn'nin ilk 3
// saniyesi) yavaş yavaş, sakin bir birikim; son %40'ında (son 2 saniye)
// hızla ivmelenen, çarpıcı bir yükseliş — "yavaş yavaş heyecanlanıp son
// 2 saniye yüksek heyecan" hissi. render.js (nabız/parlama) ve buradaki
// ekran sarsıntısı aynı eğriyi kullanır.
function bossTelegraphIntensity(tt){
  if(tt<0.6) return (tt/0.6)*0.3;
  return 0.3 + Math.pow((tt-0.6)/0.4, 1.4)*0.7;
}
function startBossWave(stageDef){
  // Telegraph tam güneşin üstünde büyümüştü; patlama da tam orada olsun ki
  // "yaratık güneşten patladı, dalga ondan çıktı" hissi net olsun.
  bossTelegraph = null;
  bossActive=true; bossReward=stageDef.reward; bossWaveItems=[];
  shake=Math.max(shake,20); flash=1;
  burst(CX,CY,'#5ad1ff',34,7); burst(CX,CY,'#ffffff',22,6);
  burst(CX,CY,'#ffd24a',40,7); burst(CX,CY,'#ff6b3d',30,6); burst(CX,CY,'#ffffff',12,3.5);
  beep(90,0.5,'sawtooth',0.2); beep(140,0.5,'square',0.16); beep(60,0.6,'sine',0.18);
  showFlash('⚠ '+t('flash_boss_wave'),90); vibrate([30,40,30,40,60]);
  bossStage = stageDef; bossStageIdx = bossNextIndex;
  // Sahneyi temizle: boss öncesinden kalan cızırtılar labirentin açık
  // yolunu kapatıp haksızlık yapmasın.
  for(const it of items) if(it.alive && !it.boss) it.expiring = true;
  bossTravel = 0; bossNextCol = 1.0; bossEnd = 1.0 + (stageDef.laps||2)*Math.PI*2; bossColored = 0;
  bossBaseAng = player.ang; bossFree = player.targetRing; bossQueue = []; bossSegs = 0; bossRun = 1;
  spawnBossColumns();
}

// Boss = REFLEKS LABİRENTİ. Plak etrafında 2-3 tur boyunca ara vermeden
// gelen cızırtı sütunları. Her sütun, BİR ÖNCEKİ sütunun açık halkasına
// göre yerleştirilir (bkz. bossPlanSegment):
//  * Oyuncunun durduğu (önceki açık) halka bir sonraki sütunda hep kapanır
//    — aynı halkada en fazla 2 sütun art arda açık kalır (kısa duvar çifti,
//    yalnızca kenar halkalarda), yani "ortadan gidip hepsini geçme" yok.
//  * Çatal: yalnızca orta halkayı kapatan bir sütun iki yol açar; hemen
//    ardından gelen sütun yollardan birini çıkmaz sokağa çevirir (yanlış
//    seçen iki halka birden atlamak zorunda kalır).
//  * Kenardan kenara (iki halka) atlamalar ileri boss'larda sıklaşır.
// Sütunlar penanın yalnızca ~1.9 rad (~1.5 sn) önünde belirir — labirent
// önceden ezberlenemez, okuyup anında tepki vermek gerekir. Her geçiş
// penceresi halka yarıçapına göre ölçeklenir (iç halkada açı olarak daha
// geniş) ve en az bir halka hep açıktır; boss ilerledikçe pencere daralır.
let bossColored=0, bossStage=null, bossStageIdx=0, bossTravel=0, bossNextCol=0, bossEnd=0, bossBaseAng=0, bossFree=0, bossQueue=[], bossSegs=0, bossRun=1;
const BOSS_LOOKAHEAD = 1.9, BOSS_WALL_STEP = 0.32;
function bossSwitchGap(from, to){
  const def = bossStage, prog = Math.min(1, bossNextCol/bossEnd);
  const sw = Math.max(0.38, def.sw - prog*0.06);
  const rmin = Math.min(radiusFor(from), radiusFor(to)) / radiusFor(1);   // iç halkada açı olarak daha geniş
  return (sw + (Math.abs(to-from)>1 ? 0.3 : 0)) / rmin;
}
const _allBut = x=>[0,1,2].filter(r=>r!==x);
function bossPlanSegment(){
  const idx = bossStageIdx, f = bossFree; bossSegs++;
  const prog = Math.min(1, bossNextCol/bossEnd);
  // Kısa duvar çifti: kenar halkada aynı yol bir sütun daha açık kalır.
  if(f!==1 && bossRun<2 && rnd() < 0.28){
    bossNextCol += BOSS_WALL_STEP;
    bossQueue.push({pos:bossNextCol, blocked:_allBut(f)});
    bossRun++;
    return;
  }
  // Çatal (pena ortadayken): orta kapanır, iki kenar açılır; hemen sonra
  // biri çıkmaz sokak olur.
  if(f===1 && rnd() < 0.3 + idx*0.05){
    bossNextCol += bossSwitchGap(1, 0);
    bossQueue.push({pos:bossNextCol, blocked:[1]});
    const dead = rnd()<0.5 ? 0 : 2, good = 2-dead;
    bossNextCol += bossSwitchGap(dead, good);              // yanlış seçen de (zor da olsa) yetişebilsin
    bossQueue.push({pos:bossNextCol, blocked:_allBut(good)});
    bossFree = good; bossRun = 1;
    return;
  }
  // Geçiş: önceki açık halka MUTLAKA kapanır, yeni açık halka seçilir.
  let nf;
  if(f===1) nf = rnd()<0.5 ? 0 : 2;
  else {
    const jump = idx>=1 ? Math.min(0.5, 0.25 + idx*0.05 + prog*0.1) : 0.12;   // kenardan kenara atlama
    nf = rnd() < jump ? 2-f : 1;
  }
  bossNextCol += bossSwitchGap(f, nf);
  bossQueue.push({pos:bossNextCol, blocked:_allBut(nf)});
  bossFree = nf; bossRun = 1;
}
const BOSS_COLOR_TYPES = ['hazardJump','hazardPull','hazardTwin','hazardPulse','hazardCreep'];
// Boss labirentinde renkli (sabit) duvar oranı: 1. boss ~%5, sonra her
// boss'ta +%3, en fazla %16 — ilk boss'ta 1-3, ilerleyenlerde daha çok.
function bossColorChance(){ return Math.min(0.16, 0.05 + Math.max(0,bossNextIndex-1)*0.03); }
function spawnBossColumns(){
  while(true){
    if(!bossQueue.length){
      if(bossNextCol >= bossEnd) return;
      bossPlanSegment();
    }
    const col = bossQueue[0];
    if(col.pos - bossTravel > BOSS_LOOKAHEAD) return;
    bossQueue.shift();
    const ang = normAng(bossBaseAng + col.pos);
    for(const ring of col.blocked){
      // Labirent duvarı çoğunlukla kırmızı/yeşil; aralara her boss'ta biraz
      // daha sık diğer renkler serpiştirilir. Bu "renkli" duvarlar SABİTTİR
      // (zıplamaz, çekmez, atılmaz, ikiz çıkarmaz, hep tehlikeli) ve 1 can
      // götürür — labirentin kaçış yolu ve adilliği bozulmaz.
      let type = rnd()<0.8 ? 'hazard' : 'hazardBomb', bossStatic=false;
      // Asgari garanti: 1. boss'ta en az 1, 2.'de 2, sonrakilerde 3 renkli
      // duvar — labirentin son ~yarım turunda hâlâ eksikse zorla eklenir.
      const minColored = Math.min(3, Math.max(1, bossNextIndex));
      const nearEnd = bossEnd - col.pos < Math.PI;
      if(rnd() < bossColorChance() || (nearEnd && bossColored < minColored && rnd()<0.5)){
        bossColored++;
        type = BOSS_COLOR_TYPES[Math.floor(rnd()*BOSS_COLOR_TYPES.length)]; bossStatic=true;
      }
      const it = {ang, ring, type, alive:true, pop:0, expiring:false, prevFwd:null, jumpT:0,
        pulsePhase:0, pulseDanger:bossStatic, creepT:0, creeped:false, boss:true, bossStatic, dmgCap: bossStatic ? 1 : 0};
      items.push(it); bossWaveItems.push(it);
    }
  }
}

// ---- Sarı cızırtı: halka kilidi ----
// Sarı, bulunduğu halkanın yarısını (kendinden geriye doğru yarım tur)
// kilitler: pena o yay boyunca BU HALKAYA GEÇEMEZ (zaten içindeyse çıkabilir;
// topun kendisi hâlâ can götürür). Adillik: kilit yalnız kenar halkalara
// (0/2) konur, aynı anda tek kilit olur ve kilit + cızırtılar bir açıda üç
// halkayı birden kapatamaz (pinchAt).
const SEAL_SPAN = Math.PI, JUMP_FIRST = 22, JUMP_EVERY = 42;
function isSeal(it){ return it.alive && !it.expiring && it.type==='hazardPull' && !it.bossStatic; }
function sealCovers(it, ang){ const back = normAng(it.ang - ang); return back <= SEAL_SPAN; }
function sealAt(ring, ang){
  for(const it of items) if(isSeal(it) && it.ring===ring && sealCovers(it, ang)) return it;
  return null;
}
function activeSeal(){ for(const it of items) if(isSeal(it)) return it; return null; }
function ringBlockedAt(ring, ang, ignore){
  if(sealAt(ring, ang)) return true;
  for(const it of items){
    if(it===ignore || !it.alive || it.expiring || it.ring!==ring) continue;
    if((isHazardType(it.type)||it.type==='hazardTwinDecoy') && Math.abs(angDiff(it.ang, ang)) < 0.5) return true;
  }
  return false;
}
// ring'e ang'da bir cızırtı konursa o açıda hiç açık halka kalmaz mı?
function pinchAt(ring, ang, ignore){
  for(let r=0;r<NUM_RINGS;r++) if(r!==ring && !ringBlockedAt(r, ang, ignore)) return false;
  return true;
}
// Yeni kilit (ring, ang) adil mi: yay boyunca diğer iki halka aynı yerde kapalı olmasın.
function sealFair(ring, ang){
  if(ring===1 || activeSeal()) return false;
  const others=[0,1,2].filter(r=>r!==ring);
  for(const it of items){
    if(!it.alive || it.expiring || it.ring!==others[0] || !(isHazardType(it.type)||it.type==='hazardTwinDecoy')) continue;
    if(normAng(ang - it.ang) <= SEAL_SPAN+0.5 && ringBlockedAt(others[1], it.ang)) return false;
  }
  return true;
}

// atAng/atRing verilirse doğrudan o açı+halkaya yerleştirir (yoğunluk
// sistemi zaten çakışmasız bir yer bulup buraya iletir); ikisi de
// verilmezse resetGame()'in ilk tohumlaması için basit bir arama yapar.
// İkisi de başarıyla yerleştirilip yerleştirilmediğini boolean döner.
function spawnItem(atAng, atRing, forceHazard, safe){
  const zen = mode==='zen';
  // Çekirdek Ağacı'ndaki "Sağlamlık" dalı tehlike ihtimalini kalıcı olarak
  // hafifçe düşürür — %30'la sınırlı, zorluk hep anlamlı kalsın diye.
  const hazSoftMul = 1-Math.min(0.3, coreBonus('hazardSoften'));
  const hazChance = zen ? 0 : Math.min(diffCfg.hazCap, diffCfg.hazBase + elapsed*diffCfg.hazRamp)*hazSoftMul;
  let ang=atAng, ring=atRing;
  if(ang==null || ring==null){
    let tries=0, ok=false;
    do{
      ring = atRing!=null ? atRing : Math.floor(rnd()*NUM_RINGS);
      ang = atAng!=null ? atAng : normAng(player.ang + 1.5 + rnd()*3.0);
      ok=true;
      for(const it of items){
        if(!it.alive || it.expiring || it.ring!==ring) continue;
        if(Math.abs(angDiff(it.ang,ang))<MIN_GAP){ ok=false; break; }
      }
      tries++;
    } while(!ok && tries<12);
    if(!ok) return false;
  }
  let type; _pickTeaser=false;
  const heartEligible = !zen && hp<maxHp && (score-lastHeartScore)>=HEART_SCORE_GAP;
  if(forceHazard){
    type = pickHazardKind();
  } else if(heartEligible && rnd()<HEART_CHANCE){
    type='heart'; lastHeartScore=score;
  } else {
    let r=rnd();
    if(session.luckyCharges>0 && r<hazChance){ session.luckyCharges--; r=hazChance; }
    if((safe || (!forceHazard && elapsed<150)) && r < hazChance) r = 1;   // güvenli tohum / ilk ~2.5 sn: cızırtı yerine nota
    if(r < hazChance){
      type = pickHazardKind();
    } else if(r < hazChance+0.03) type='diamond';
    else if(r < hazChance+0.08) type=PW[Math.floor(rnd()*PW.length)];
    else if(r < hazChance+0.14) type='coin';
    else type='star';
  }
  if(type==='hazardPull' && !sealFair(ring, ang)) type='hazard';
  items.push({ang, ring, type, alive:true, pop:0, expiring:false, prevFwd:null, sealBump:0,
    jumpT: type==='hazardJump' ? JUMP_FIRST+rnd()*18 : 0,
    pulsePhase: type==='hazardPulse' ? rnd()*Math.PI*2 : 0, pulseDanger:false,
    // Not: oyuncu geç oyunda (bu tip skor 2000+'da açılıyor) halkayı çok
    // hızlı katlediyor; birkaç saniyelik bir gecikme çoğu zaman öğe zaten
    // geçildikten sonra dolardı. Gecikme, fark edilir bir "bekleme" hissi
    // korurken gerçek erişim süresiyle uyumlu kalacak şekilde kısa tutuldu.
    creepT: type==='hazardCreep' ? 50+rnd()*40 : 0, creeped:false});
  if(_pickTeaser) items[items.length-1].dmgCap=2;      // eşiğinden önce gelen keşif: en fazla 2 can
  if(isHazardType(type)) noteGlitchSeen(type);
  if(type==='hazardTwin'){
    const otherRings=[0,1,2].filter(x=>x!==ring);
    const decoyRing=otherRings[Math.floor(rnd()*otherRings.length)];
    items.push({ang, ring:decoyRing, type:'hazardTwinDecoy', alive:true, pop:0, expiring:false, prevFwd:null, jumpT:0});
  }
  return true;
}

// ---- Akış (spawn) yönetimi: yoğunluk temelli, halka dengeleyen -------
// Eski sistem sadece bir zamanlayıcıyla, SÜREYE bağlı olarak, TAMAMEN
// rastgele bir halkaya tek bir öğe koyuyordu. Bunun somut sonuçları:
//  1) Halka seçimi dengesizdi — şans eseri art arda hep aynı halkaya
//     düşebiliyordu ("hep en alt halkada dolanıp geçtim" şikayeti).
//  2) Çakışma kontrolü SADECE aynı halkadaki öğelere bakıyordu — farklı
//     halkalarda tam aynı açıda iki öğe (örn. kalkan + canavar) rahatça
//     üst üste binebiliyordu.
//  3) Zamanlayıcı SÜREYE bağlıydı, topun dönme hızına değil — top
//     hızlanınca (bkz. comboSpeedBonus) birim açı başına düşen öğe
//     yoğunluğu görünmez şekilde SEYRELİYORDU; ayrıca şans eseri önde
//     "boş" bir alan varsa bir sonraki spawn'a kadar hiçbir şey olmuyordu.
//
// Yeni sistem oyuncunun ÖNÜNDEKİ (LOOKAHEAD radyan) pencereyi her karede
// izler, o pencerede HALKA BAZINDA kaç öğe olduğunu sayar, hedef
// yoğunluğun altındaysa EN BOŞ halkaya, tüm halkalara göre çakışmasız bir
// açıya yeni bir öğe yerleştirir. Pencere AÇISAL olduğu için top
// hızlanınca pencere daha çabuk "tükeniyor" — sistem otomatik olarak
// daha sık spawn ediyor; yani akış hızı topun dönme hızına doğal olarak
// bağlı (ek olarak izin verilen en kısa spawn aralığı da doğrudan
// player.speed'e göre kısalıyor, bkz. updateSpawns). Hedef yoğunluğa
// ayrıca yavaş bir sinüs dalgası binmiş durumda (targetDensity) — bu da
// kör rastgeleliğe bırakmak yerine KASITLI, tasarlanmış yoğun/sakin anlar
// (refleks testi / nefes alma) yaratıyor; "bazen sinirlendirip bazen
// keyif verme" hissi buradan geliyor.
const LOOKAHEAD = 3.2;        // oyuncunun önünde izlenen açısal pencere (radyan)
const CROSS_RING_GAP = 0.30;  // farklı halkalardaki öğeler arası minimum açı — tam üst üste binmesinler
function targetDensity(){
  if(mode==='zen') return 2.4; // zen'de tehlike yok, toplanacak şey hep bulunsun
  const base = 2.6 + Math.min(1.6, elapsed*0.00035);  // zamanla hafifçe artan taban
  const wave = Math.sin(elapsed*0.012) * 0.9;         // ~9 saniyelik yoğun/sakin nabzı
  return Math.max(1.5, base + wave);
}
function itemsAheadByRing(){
  const perRing=[0,0,0]; let total=0;
  for(const it of items){
    if(!it.alive || it.expiring) continue;
    const fwd = normAng(it.ang-player.ang);
    if(fwd < LOOKAHEAD){ perRing[it.ring]++; total++; }
  }
  return {perRing, total};
}
function trySpawnOnRing(ring, safe){
  let ang, tries=0, ok=false;
  do{
    ang = normAng(player.ang + 1.2 + rnd()*(LOOKAHEAD-1.0));
    ok = true;
    for(const it of items){
      if(!it.alive || it.expiring) continue;
      const gap = Math.abs(angDiff(it.ang, ang));
      if(it.ring===ring){ if(gap<MIN_GAP){ ok=false; break; } }
      else if(gap<CROSS_RING_GAP){ ok=false; break; } // farklı halkada da tam üst üste binmesin
    }
    tries++;
  } while(!ok && tries<10);
  if(!ok) return false;
  return spawnItem(ang, ring, false, safe || pinchAt(ring, ang));
}
// ---- Tehdit yönetmeni ----
// Rastgele akış tek başına oyuncunun halkasını uzun süre boş bırakabiliyordu
// (ölçüm: normal modda zamanın ~%75'inde oyuncunun önünde, kendi halkasında
// hiç cızırtı yoktu; 9-14 sn'lik boş anlar). Yönetmen, oyuncunun bulunduğu
// halkada önde (threatFar rad içinde) cızırtı yoksa adil bir mesafeye bir
// tane koyar — hangi halkaya geçerse geçsin kısa sürede yeni bir tehdit
// gelir. Adillik: cızırtı en az ~0.8 sn ileride belirir ve o açıda diğer
// iki halkadan en az biri hep boş kalır (kaçış yolu).
// Nefes molası: ~12-15 sn'de bir ~2.5 sn yönetmen ve normal akış susar,
// önüne düz bir nota dizisi gelir (Subway Surfers'taki jeton sırası gibi).
let threatCd=0, breathT=0, nextBreath=720;
function threatDirector(dt){
  if(mode==='zen') return;
  if(breathT>0){ breathT-=dt; return; }
  nextBreath -= dt;
  if(nextBreath<=0){ startBreather(); return; }
  threatCd -= dt; if(threatCd>0) return;
  const r = player.targetRing;
  // Yoğun/sakin nabız: tehdit penceresi yavaşça genişleyip daralır.
  const angPerSec = player.speed*Math.max(0.5, player.speedMulEase||1)*0.018*60;
  const near = Math.max(1.2, angPerSec*0.8);        // en az ~0.8 sn tepki süresi
  // Pencere hızla birlikte kayar (yüksek komboda pena çok hızlı — pencere
  // sabit kalsaydı yönetmen tam en heyecanlı anda susardı).
  const far = Math.max((diffCfg.threatFar||2.7) + Math.sin(elapsed*0.012)*0.35, near + 0.9);
  for(const it of items){
    if(!it.alive || it.expiring || it.ring!==r || !isHazardType(it.type)) continue;
    if(normAng(it.ang-player.ang) < far) return;
  }
  for(let k=0;k<8;k++){
    const ang = normAng(player.ang + near + 0.1 + rnd()*(far-near-0.1));
    let ok = true, blockedOther = new Set();
    for(const it of items){
      if(!it.alive || it.expiring) continue;
      const gap = Math.abs(angDiff(it.ang, ang));
      if(it.ring===r && gap<0.45){ ok=false; break; }
      if(it.ring!==r && gap<CROSS_RING_GAP){ ok=false; break; }
      if(it.ring!==r && gap<0.5 && (isHazardType(it.type))) blockedOther.add(it.ring);
    }
    for(let o=0;o<NUM_RINGS;o++) if(o!==r && sealAt(o, ang)) blockedOther.add(o);
    if(!ok || blockedOther.size>=2) continue;          // kaçış yolu kalmazdı
    if(spawnItem(ang, r, true)){
      // Yoğun anda ~1.1 sn, sakin anda ~2.5 sn sonra yeni tehdit (nefes payı).
      const intensity = 0.5 + 0.5*Math.sin(elapsed*0.012);
      threatCd = (65 + (1-intensity)*85)*(diffCfg.threatCdMul||1); return;
    }
  }
  threatCd = 12;
}
function startBreather(){
  breathT = 150 + rnd()*30; nextBreath = 720 + rnd()*180;
  // Nota dizisi: oyuncunun halkasına ya da komşusuna, önünde düz bir sıra.
  const opts = [player.targetRing, player.targetRing, player.targetRing-1, player.targetRing+1].filter(x=>x>=0&&x<3);
  const ring = opts[Math.floor(rnd()*opts.length)];
  for(let i=0;i<6;i++){
    const ang = normAng(player.ang + 1.3 + i*0.2);
    let clear = true;
    for(const it of items){
      if(!it.alive || it.expiring || it.ring!==ring) continue;
      if(Math.abs(angDiff(it.ang, ang)) < 0.22){ clear=false; break; }
    }
    if(clear) items.push({ang, ring, type:'star', alive:true, pop:0, expiring:false, prevFwd:null});
  }
}
function updateSpawns(dt, calm){
  // Tutorial kendi öğelerini elle (tutorial.js) sahneye koyuyor — normal
  // rastgele spawn tamamen susturulur, senaryo hiç bozulmasın.
  if(tutorialActive) return;
  if(!calm) threatDirector(dt);
  // Ekran hiçbir zaman boş kalmaz: görünen öğe sayısı MIN_VISIBLE'ın altına
  // düşerse bekleme ve yoğunluk sınırı atlanıp hemen yeni öğe gelir.
  // Nefes molasında akış DURMAZ, sadece cızırtı gelmez (eskiden mola boyunca
  // hiçbir şey doğmuyordu → ölçümde 2 sn'ye varan tamamen boş turlar).
  const breathing = breathT>0 || !!calm;
  let visible=0;
  for(const it of items) if(it.alive && !it.expiring) visible++;
  const starving = visible < MIN_VISIBLE;
  spawnCooldown -= dt;
  if(spawnCooldown>0 && !starving) return;
  const {perRing, total} = itemsAheadByRing();
  if(total >= targetDensity() && !starving) return;
  // En boş halkayı önce dene (yığılmayı önler); eşit doluluklarda
  // rastgele sırayla (önce karıştır, SONRA doluluğa göre kararlı sırala —
  // sort() içinde rnd() çağırmak yanlış/kararsız sonuç verirdi).
  const order=[0,1,2];
  for(let i=order.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [order[i],order[j]]=[order[j],order[i]]; }
  order.sort((a,b)=>perRing[a]-perRing[b]);
  for(const ring of order){
    if(trySpawnOnRing(ring, breathing)){
      spawnCooldown = Math.max(3, 7/(player.speed/1.5));
      return;
    }
  }
}
const MIN_VISIBLE = 3;

function tap(x){
  // Tutorial'ın coin/tehlike adımlarında (senaryo öğesi oyuncunun O ANKİ
  // halkasına göre yerleştirildiği için) halka değiştirmek öğeyi
  // kaçırmasına yol açar — bu adımlarda dokunma geçici olarak devre dışı.
  if(tutorialActive && typeof tutorialTapAllowed==='function' && !tutorialTapAllowed()) return;
  const goOut = x >= W/2;
  const next = player.targetRing + (goOut ? 1 : -1);
  if(next < 0 || next > NUM_RINGS-1) return;
  const seal = (typeof sealAt==='function') ? sealAt(next, player.ang) : null;
  if(seal){
    // Kilitli yay: geçiş reddedilir — kısa bir "tok" ses ve yay parlaması.
    seal.sealBump = 1; shake = Math.max(shake, 4);
    beep(140,0.09,'square',0.08);
    return;
  }
  player.targetRing = next;
  // Her dokunuşta (= her halka değişiminde) çalan "tık" kasıtlı olarak
  // kaldırıldı — nota/elmas toplama ve combo seslerinin arasına girip
  // ritmi bozuyordu. Kilitli yay reddi (yukarıdaki beep) ayrı bir nadir
  // olay olduğu için dokunulmadı.
  if(tutorialActive && typeof tutorialOnTap==='function') tutorialOnTap(goOut);
}

function burst(x,y,color,n,spd){
  for(let i=0;i<n;i++){
    const a=Math.random()*Math.PI*2, s=Math.random()*spd+0.5;
    particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,color,r:Math.random()*3+1.5});
  }
}
// sub: büyük yazının altında küçük ikinci satır; cls: 'drop' gibi görünüm.
function showFlash(text,dur,sub,cls){
  levelFlashT=dur;
  const el=document.getElementById('levelFlash');
  el.textContent=text; el.className=cls||'';
  if(sub){ const s=document.createElement('small'); s.textContent=sub; el.appendChild(s); }
  // Müzik anlarında kısa bir "vuruş" büyümesi (yalnız transform: GPU'da, boyama yok).
  if((cls==='melody'||cls==='drop') && el.animate)
    el.animate([{transform:'scale(1.3)'},{transform:'scale(1)'}],{duration:320,easing:'cubic-bezier(.34,1.6,.64,1)'});
}
// Melodi kombosu = müzik: her 5 notada şarkıya yeni bir katman girer
// (bkz. music.js MUSIC_LEVELS). Alt satır oyuncuya bunu ve kazandığı bonusu söyler.
// Tema şarkısı kombo ile çalarken nota toplama "bip"leri susar: şarkıyı
// zaten nota toplamak dolduruyor, perdeli bip'ler şarkıyla çatışıyordu.
function musicCarriesNotes(){ return typeof Music!=='undefined' && Music.themeAudible(); }
function musicStageText(octave, bonus){
  const pts='+'+Math.round(bonus);
  if(typeof Music==='undefined' || !Music.themeAudible()) return pts;
  return t('music_up_'+Math.min(octave,4))+' · '+pts;
}

function checkStreak(ix,iy,mult){
  if(combo>0 && combo%MELODY_SCALE.length===0){
    const octave=combo/MELODY_SCALE.length;
    const bonus=20*octave*mult;
    addScore(bonus); timeScale=0.3; timeScaleT=16;
    showFlash(t('flash_melody',{n:octave}),110,musicStageText(octave,bonus),'melody'); burst(ix,iy,'#ffffff',18,5);
    if(!musicCarriesNotes()){
      const root=melodyFreq(combo-1);
      beep(root,0.16,'triangle',0.16,true); beep(root*1.25,0.16,'sine',0.12,true); beep(root*1.5,0.18,'sine',0.10,true);
    }
  }
}

function update(dt){
  elapsed+=dt;
  const zen = mode==='zen';
  const nl = zen ? level : 1 + Math.floor(elapsed/720);
  if(nl>level){ level=nl; beep(660,0.1,'triangle',0.13); beep(990,0.12,'sine',0.10); showFlash(t('flash_level',{n:level}),70); vibrate([10,50,10]); }

  if(mode==='time'){
    timeLeft -= dt/60;
    if(timeLeft<=0){ timeLeft=0; gameOver('time'); return; }
  }

  // Ani hız sıçramalarını (dondurma/yavaşlatma bitince tek karede eski hıza
  // fırlaması) önlemek için hedef çarpana her karede yumuşakça yaklaşılır —
  // "top bi anda aşırı hızlanıyor" hissi buradan geliyordu.
  let targetSpeedMul = 1;
  if(player.slowT>0) targetSpeedMul=0.5;
  player.speedMulEase += (targetSpeedMul-player.speedMulEase)*Math.min(1,0.1*dt);
  const speedMul = player.speedMulEase;
  // Hız artışı artık SÜREYE/SKORA değil KOMBOYA bağlı: oyunun başında
  // (kombo düşükken) top rahat kontrol edilir, ama kombo yükseldikçe —
  // yani daha çok puan kazandıkça — hızlanır. Bu, yüksek komboyu hem
  // ödüllü hem riskli kılar: o puanı istiyorsan hıza ayak uydurman gerekir.
  // Bir tehlikeye çarpıp kombo 1'e dönünce hız da hemen normale döner.
  // Zen modda devre dışı (zaten tehlike/kayıp yok).
  const comboSpeedBonus = zen ? 0 : Math.min(diffCfg.speedCap, Math.max(0,combo-1)*COMBO_SPEED_STEP);
  player.speed = 1.5 + comboSpeedBonus;
  // Boss dalgası sırasında oyuncu hızından bağımsız, sabit ve yavaş bir
  // açısal hızla ilerlenir — dalga en az ~6-7 saniye sürsün diye (bkz.
  // BOSS_SLOW_RATE, startBossWave()).
  const angStep = bossActive ? BOSS_SLOW_RATE : player.speed*speedMul*0.018;
  player.ang = normAng(player.ang + angStep*dt*timeScale);
  if(bossActive){ bossTravel += angStep*dt*timeScale; spawnBossColumns(); }

  const tR=radiusFor(player.targetRing);
  player.curRadius += (tR-player.curRadius)*Math.min(1,0.22*dt);
  const settled = Math.abs(player.curRadius-tR) < PLAYER_R*0.8;
  const curRing = player.targetRing;

  if(player.slowT>0) player.slowT-=dt;
  if(player.magnetT>0) player.magnetT-=dt;
  if(player.invulT>0) player.invulT-=dt;
  if(player.multT>0) player.multT-=dt;
  const mult = (player.multT>0 ? 2+upgradeBonus('multPower') : 1) * (diffCfg.scoreMult||1);

  // Boss dalgası sürerken normal akış duraklar — "stage" temiz kalsın,
  // dalganın öğeleriyle karışıp okunaksızlaşmasın.
  // Labirent bitti ama son sütunlar henüz geride kalmadıysa (boss resmen
  // bitmeden) normal akış cızırtısız başlar — ekran o arada boş kalmasın.
  const bossTail = bossActive && bossNextCol>=bossEnd && !bossQueue.length;
  if(!bossActive || bossTail) updateSpawns(dt, bossTail);

  for(const it of items){
    if(!it.alive) continue;
    if(!it.expiring && it.pop<1) it.pop=Math.min(1,it.pop+dt*0.14);
    if(it.sealBump>0) it.sealBump=Math.max(0,it.sealBump-dt*0.05);

    if(it.type==='hazardJump' && !it.expiring && !it.bossStatic){
      it.jumpT-=dt;
      if(it.jumpT<=0){
        // Yalnız komşu halkaya atlar (eskiden 0→2 sarmalı iki halka zıplıyordu)
        // ve oyuncunun hemen önüne, onun halkasına ışınlanmaz (tepki süresi
        // kalmıyordu) — öyleyse atlama kısa süre ertelenir. rnd(): günlük mod
        // herkes için aynı kalsın.
        // Mavi HER ZAMAN yer değiştirir (gerekirse penanın önüne de);
        // tek kısıt: bir açıda üç halkanın da kapanmasına yol açmamak.
        const first = it.ring + (rnd()<0.5 ? 1 : -1);
        const opts = [first, 2*it.ring-first].filter(r=>r>=0 && r<NUM_RINGS && !pinchAt(r, it.ang, it));
        if(opts.length){ it.ring=opts[0]; it.jumpT=JUMP_EVERY+rnd()*25; burst(CX+Math.cos(it.ang)*radiusFor(it.ring), CY+Math.sin(it.ang)*radiusFor(it.ring), '#3b8bff', 6, 2); }
        else it.jumpT=8;
      }
    }
    if(it.type==='hazardPulse' && !it.expiring && !it.bossStatic){
      it.pulsePhase += dt*0.045;
      it.pulseDanger = Math.sin(it.pulsePhase) > 0.5;
    }
    if(it.type==='hazardCreep' && !it.expiring && !it.creeped && !it.bossStatic){
      it.creepT-=dt;
      if(it.creepT<=0){
        it.creeped=true;
        const creepFwd=normAng(it.ang-player.ang);
        // Sadece oyuncuya doğru, aradaki mesafenin en fazla %40'ı kadar
        // ufak bir sıçrama yapar — asla oyuncuyu geçip "arkada" belirmez.
        if(creepFwd>0.3){
          const nudge=Math.min(0.5, creepFwd*0.4);
          it.ang=normAng(it.ang-nudge);
          const cix=CX+Math.cos(it.ang)*radiusFor(it.ring), ciy=CY+Math.sin(it.ang)*radiusFor(it.ring);
          burst(cix,ciy,'#d94a1f',10,3);
        }
      }
    }

    const fwd=normAng(it.ang-player.ang);
    // Oyuncu öğenin yanından geçince öğe söner. Nadir değerli öğeler (jeton,
    // sol anahtarı) hemen gitmez: bir tur daha plakta kalır, ikinci geçişte söner.
    if(it.prevFwd!=null && (fwd-it.prevFwd)>Math.PI){
      it.passes=(it.passes||0)+1;
      if(it.passes >= ((it.type==='coin'||it.type==='diamond') ? 2 : 1)) it.expiring=true;
    }
    it.prevFwd=fwd;

    if(it.expiring){ it.pop-=dt*0.028; if(it.pop<=0){ it.alive=false; continue; } }   // ~0.6 sn'de söner (eskiden 0.2 sn)

    const da=Math.abs(angDiff(player.ang,it.ang));
    const hitWindow = it.type==='hazardBomb' ? 0.20 : 0.13;
    const isDangerKind = isHazardType(it.type) || it.type==='hazardTwinDecoy';

    // Tehlikeler: eskisi gibi açı+halka+"yerleşmiş mi" kontrolüyle — bu
    // tiplerin zorluğuna/adilliğine dokunmuyoruz.
    // Çarpışma da toplama gibi pena'nın O ANKİ gerçek piksel konumuyla
    // ölçülür: halka geçişi sırasında cızırtının tam üstünden geçen pena
    // artık çarpar (eskiden "yerleşmemiş" pena hiç çarpmıyordu).
    if(isDangerKind){
      if(it.expiring || da>0.6) continue;
      const ix=CX+Math.cos(it.ang)*radiusFor(it.ring), iy=CY+Math.sin(it.ang)*radiusFor(it.ring);
      const ppx=CX+Math.cos(player.ang)*player.curRadius, ppy=CY+Math.sin(player.ang)*player.curRadius;
      const sameRing = Math.hypot(ppx-ix, ppy-iy) < PLAYER_R*(it.type==='hazardBomb' ? 2.6 : 2.0);
      if(isHazardType(it.type)){
        if(!sameRing) continue;
        if(it.type==='hazardPulse' && !it.pulseDanger) continue;
        if(player.invulT<=0){
          it.alive=false;
          if(it.tutorialTag && typeof tutorialOnItemResolved==='function') tutorialOnItemResolved(it.tutorialTag);
          hitHazard(ix,iy,it.type,it); if(state!=='play') return;
        }
      } else { // hazardTwinDecoy
        if(sameRing){ it.alive=false; burst(ix,iy,'#ffb27a',10,3); beep(300,0.05,'sine',0.06); }
      }
      session.streakMax=Math.max(session.streakMax,combo);
      continue;
    }

    // Toplanabilir öğeler (yıldız/altın/elmas/coin/takviye): açı+"yerleşmiş
    // mi" yerine oyuncunun O ANKİ gerçek piksel konumuna bakılır. Eskiden
    // halka geçişi sırasında (henüz "settled" olmadan) tam üstünden geçilen
    // bir parçacık bile toplanamıyordu — halka değiştirmek için dokunduğun an
    // tam da bu pencereye denk geliyordu. Ayrıca sabit açısal pencere iç
    // halkada dış halkaya göre çok daha dar bir gerçek mesafeye denk
    // geliyordu; piksel mesafesi tüm halkalarda tutarlı bir cömertlik sağlar.
    const magnetGrab = player.magnetT>0 && !isPower(it.type);
    let grabbed;
    if(magnetGrab){
      grabbed = da<hitWindow && settled; // mıknatıs halka farkı gözetmeden çeker
    } else {
      const px=CX+Math.cos(player.ang)*player.curRadius, py=CY+Math.sin(player.ang)*player.curRadius;
      const iix=CX+Math.cos(it.ang)*radiusFor(it.ring), iiy=CY+Math.sin(it.ang)*radiusFor(it.ring);
      grabbed = Math.hypot(px-iix, py-iiy) < PLAYER_R*2.6;
    }
    if(grabbed){
      const ix=CX+Math.cos(it.ang)*radiusFor(it.ring), iy=CY+Math.sin(it.ang)*radiusFor(it.ring);
      it.alive=false;
      if(it.type==='diamond'){ combo++; addScore((20+level*4)*mult); session.stars++; session.diamonds++; stats.diamonds++;
        burst(ix,iy,'#fff4e0',10,3); shake=3; if(!musicCarriesNotes()){ beep(1200,0.1,'triangle',0.15); beep(1600,0.12,'sine',0.12); playMelodyNote(combo,0.12); } bumpCombo(); checkStreak(ix,iy,mult); }
      else if(it.type==='star'){ combo++;
        // Yıldızın tam merkezine ne kadar yakın toplandığına göre küçük bir
        // "hassasiyet" küsuratı eklenir (0-0.99) — skorun her zaman anlamlı
        // ondalıklara sahip xx.xx hissini korumasının tek kaynağı bu; diğer
        // tüm kazanımlar (altın/elmas/parçacık/takviye) tam sayı kalıyor ama
        // toplam zaten bu küsuratı taşımaya devam ediyor.
        addScore(combo*mult + rnd()*0.99); session.stars++;
        burst(ix,iy,T.star,6,2.4); shake=1.5; if(!musicCarriesNotes()) playMelodyNote(combo,0.16); bumpCombo(); checkStreak(ix,iy,mult);
        if(it.tutorialTag && typeof tutorialOnItemResolved==='function') tutorialOnItemResolved(it.tutorialTag); }
      else if(it.type==='coin'){
        // Parçacık Değeri yükseltmesi (kalıcı) tabana sabit ek yapar, Nota
        // Bonusu yükseltmesi (kalıcı) SONRASINDA çarpan olarak
        // uygulanır — session.noteMult (tek oyunluk "Toz Rüzgarı"
        // takviyesi) ve weekendMult() ile bağımsız kaynaklar olarak çarpılır.
        const base=(3+Math.floor(rnd()*4))+upgradeBonus('itemCoin');
        const gained=Math.round(base*(1+upgradeBonus('coinPct'))*session.noteMult*weekendMult());
        // Zen modunda ("sonsuz mod") risk/tehlike olmadığı için sınırsız
        // güvenli kasmayı önlemek adına toplama görsel/sesle aynen
        // kalıyor ama cüzdana (stats.notes) hiç yansımıyor.
        if(mode!=='zen') addNotes(gained);
        session.coins+=gained; session.coinPickups++;
        burst(ix,iy,'#ffb454',8,2.8); shake=2; beep(950,0.08,'triangle',0.13); beep(1400,0.06,'sine',0.1);
        if(it.tutorialTag && typeof tutorialOnItemResolved==='function') tutorialOnItemResolved(it.tutorialTag);
      }
      else if(it.type==='heart'){
        hp=Math.min(maxHp,hp+1);
        burst(ix,iy,'#ff5d8f',24,5); shake=4;
        beep(660,0.12,'sine',0.14); beep(880,0.14,'triangle',0.12); vibrate([20,20,20]);
        queueToast(icon('heart')+' '+t('toast_heart_gain'));
        if(it.tutorialTag && typeof tutorialOnItemResolved==='function') tutorialOnItemResolved(it.tutorialTag);
      }
      else {
        activatePower(it.type,ix,iy);
        if(it.tutorialTag && typeof tutorialOnItemResolved==='function') tutorialOnItemResolved(it.tutorialTag);
      }
    }
    session.streakMax=Math.max(session.streakMax,combo);
  }
  let _iw=0;
  for(let _ir=0;_ir<items.length;_ir++){ if(items[_ir].alive) items[_iw++]=items[_ir]; }
  items.length=_iw;
  if(items.length>60){
    // Atılanlar ölü işaretlenir: aksi hâlde boss dalgası listesinde "canlı"
    // kalıp dalganın hiç bitmemesine (boss kilitlenmesi) yol açabiliyordu.
    for(let i=0;i<items.length-60;i++) items[i].alive=false;
    items.splice(0, items.length-60);
  }   // jeton/sol anahtarı bir tur daha kaldığı için 30'dan artırıldı

  if(bossActive){
    bossWaveItems = bossWaveItems.filter(it=>it.alive);
    if(bossWaveItems.length===0 && !bossQueue.length && bossNextCol>=bossEnd){
      bossActive=false;
      const finalReward=Math.round(bossReward*(1+upgradeBonus('coinPct')));
      addNotes(finalReward);
      showFlash(t('flash_wave_cleared'),60);
      queueToast(icon('coin')+' '+t('toast_boss_cleared',{n:finalReward}));
      session.bossesCleared++; stats.bossesCleared=(stats.bossesCleared||0)+1;
      // İlk boss temizlendi: DJ Vinil ileriye dönük bir meydan okuma yazar
      // (bkz. narrator.js). Kutlama efektleri önce görünsün diye kısa gecikme.
      if(!stats.firstBossStory && typeof narratorFirstBossStory==='function') setTimeout(narratorFirstBossStory, 1100);
      beep(700,0.15,'sine',0.15); beep(1000,0.15,'triangle',0.12); beep(1300,0.18,'sine',0.1);
    }
  } else if(!zen){
    const stage = bossStageFor(bossNextIndex), warnStart = stage.score-BOSS_WARN_SCORE_GAP;
    if(bossTelegraph && bossTelegraph.stageIndex===bossNextIndex){
      // Oyun zamanıyla sayılır: duraklatma/reklam/arka planda geçen süre sayılmaz
      // (eskiden duvar saatine bağlıydı; devam edilince boss anında patlıyordu).
      bossTelegraph.el += dt/60;
      const elapsedSec = bossTelegraph.el;
      bossTelegraph.t = Math.min(1, elapsedSec/BOSS_WARN_SECONDS);
      shake=Math.max(shake, bossTelegraphIntensity(bossTelegraph.t)*10);
      // Skor eşiğe erken ulaşılsa BİLE animasyon kesilmiyor — telegraph
      // HER ZAMAN tam BOSS_WARN_SECONDS sürüyor (bkz. kullanıcı geri
      // bildirimi: oyuncu skoru bir anda yapınca animasyon anında
      // bitiyordu). Eşik artık sadece uyarının NE ZAMAN BAŞLAYACAĞINI
      // belirliyor, patlamanın ne zaman olacağını değil.
      if(elapsedSec>=BOSS_WARN_SECONDS){
        startBossWave(stage);
        bossNextIndex++;
      }
    } else if(score>=warnStart){
      bossTelegraph = {stageIndex:bossNextIndex, el:0, t:0};
      showFlash('⚠ '+t('flash_boss_incoming'),50);
    }
  }

  if(shake>0) shake*=Math.pow(0.86,dt);
  if(flash>0) flash=Math.max(0,flash-dt*0.06);
  if(levelFlashT>0) levelFlashT-=dt;
  // Melodi kombosunun "yavaş çekim" anı bitince timeScale eskiden tek
  // karede 0.3'ten 1'e fırlıyordu — bu da anlık bir hız patlaması gibi
  // hissettiriyordu. Artık geri sayım bitince yumuşakça 1'e yaklaşıyor.
  if(timeScaleT>0) timeScaleT-=dt;   // dt ile: 120 Hz ekranda yarı sürmesin
  else if(timeScale<1) timeScale=Math.min(1, timeScale+0.05*dt);
  if(tutorialActive && typeof tutorialTick==='function') tutorialTick();
  if(!_simBatch) updateHud();
}

// Sabit adımlı simülasyon: oyun mantığı her zaman SIM_STEP (1/240 sn)
// adımlarla ilerler, ekran yenileme hızından bağımsız.
// - 60 Hz ve 120 Hz cihazlar aynı adım dizisini görür (günlük mod herkese
//   aynı; rnd() tüketimi FPS'e bağlı değil).
// - Düşük FPS'te tek karede büyük sıçrama olmaz → pena tehlikelerin
//   "içinden geçemez", notalar kaçmaz (eskiden dış halkada kare başına açı
//   çarpışma penceresini aşabiliyordu).
// - 25 FPS'in altında oyun ağır çekime girmez (kare başına 100 ms'ye kadar
//   yetişir; daha uzun duraklamalar — arka plan vb. — atlanır).
const SIM_STEP = 0.25, SIM_MAX_STEPS = 24;
let _simAcc = 0, _simBatch = false;
function stepGame(frameDt){
  _simAcc = Math.min(_simAcc + frameDt, SIM_STEP*SIM_MAX_STEPS);
  _simBatch = true;
  try{
    while(_simAcc >= SIM_STEP && state==='play'){ update(SIM_STEP); _simAcc -= SIM_STEP; }
  } finally { _simBatch = false; }
  if(state!=='play') _simAcc = 0;
  updateHud();
}

function hitHazard(ix,iy,subtype,itm){
  const px=CX+Math.cos(player.ang)*player.curRadius, py=CY+Math.sin(player.ang)*player.curRadius;
  // Bu fonksiyondaki tüm sesler "rakiplere çarpma" anına ait olduğundan
  // melodi-kombosu sesi kısma kuralından muaf tutulur (5. parametre).
  if(player.shieldHits>0){ player.shieldHits--; session.shieldSaved=true; burst(px,py,'#5efc82',26,5); shake=9;
    beep(300,0.2,'square',0.14,true); return; }
  let dmg = HAZARD_DAMAGE[subtype]||1;
  if(itm && itm.dmgCap) dmg = Math.min(dmg, itm.dmgCap);
  const lostCombo=combo;
  hp = Math.max(0, hp-dmg); combo=1; shake=Math.min(20, 8+dmg*1.2); flash=1; session.hits++;
  burst(ix,iy,T.peril,22,5); beep(120,0.4,'sawtooth',0.2,true); beep(80,0.5,'square',0.15,true); vibrate([40,30,40]);
  // Müzik katmanları söndü: kısa bir uyarı. Ekrandaki melodi yazısını ezer
  // (çarpınca geçersiz kaldı), boss/seviye duyurularını ezmez.
  const flashCls=document.getElementById('levelFlash').className;
  if(hp>0 && lostCombo>=MELODY_SCALE.length && (levelFlashT<=0 || flashCls==='melody') && typeof Music!=='undefined' && Music.themeAudible())
    showFlash(t('music_drop'),100,t('music_drop_sub'),'drop');
  if(hp<=0){
    // Tutorial'da ölüm senaryonun bir parçası — reklamlı "devam et" ekranı
    // (offerRevive) akışı kesip 6 saniyelik bir bekleme dayatır, bu yüzden
    // tutorial sırasında doğrudan oyun-sonuna gidilir.
    if(tutorialActive) gameOver();
    else if(mode!=='zen' && !session.revivedUsed) offerRevive();
    else gameOver();
  }
  else { player.invulT=INVUL; beep(220,0.15,'square',0.1,true); }
}

let reviveTimer=null;
function reviveSubRender(hpVal, secs){
  const el=document.getElementById('reviveSub'); if(el) el.innerHTML=t('revive_sub_html',{hp:hpVal, sec:secs});
}
function offerRevive(){
  state='revive'; showScreen('revive'); reviveAdPending=false;
  const hpVal=Math.max(1,Math.ceil(maxHp/2));
  let secs=6;
  reviveSubRender(hpVal, secs);
  clearInterval(reviveTimer);
  reviveTimer=setInterval(()=>{
    secs--; reviveSubRender(hpVal, secs);
    if(secs<=0){ clearInterval(reviveTimer); declineRevive(); }
  },1000);
}
let reviveAdPending=false;
function acceptRevive(){
  // Çift tıklama / reklam sürerken tekrar basma korunur; ödül geldiğinde oyun
  // hâlâ revive ekranında değilse (ör. süre doldu, oyun bitti) hiçbir şey olmaz.
  if(state!=='revive' || reviveAdPending) return;
  clearInterval(reviveTimer);
  reviveAdPending=true;
  const started=Ads.showRewarded(()=>{
    reviveAdPending=false;
    if(state!=='revive') return;
    session.revivedUsed=true; hp=Math.max(1,Math.ceil(maxHp/2)); combo=1; player.invulT=INVUL*3;
    state='play'; showScreen(null); queueToast(t('revive_continue_toast'));
  }, ()=>{ reviveAdPending=false; declineRevive(true); });
  if(started===false){ reviveAdPending=false; declineRevive(true); }
}
function declineRevive(fromAd){
  if(reviveAdPending && !fromAd) return;   // reklam açıkken "geç" sayılmaz
  clearInterval(reviveTimer);
  if(state==='revive') gameOver();
}

function activatePower(type,x,y){
  // Takviye Süresi yükseltmesi (kalıcı) tüm zamanlı güçlendirmelerin
  // süresini çarpar — kalkanın süresi yok, etkilenmiyor.
  const durMul = 1+upgradeBonus('boostDur');
  if(type==='shield'){ player.shieldHits=shieldHitsFor(); burst(x,y,'#5efc82',12,3.5); beep(700,0.12,'sine',0.13); beep(1050,0.12,'triangle',0.1); }
  else if(type==='slow'){ player.slowT=SLOW_DUR*durMul; burst(x,y,'#7aa2ff',12,3.5); beep(400,0.2,'sine',0.13); }
  else if(type==='magnet'){ player.magnetT=MAGNET_DUR*durMul; session.magnets++; stats.magnets++; burst(x,y,'#ff7ae0',12,3.5); beep(600,0.14,'triangle',0.13); beep(900,0.14,'sine',0.1); }
  else if(type==='mult'){ player.multT=MULT_DUR*durMul; burst(x,y,'#ffd24a',12,3.5); beep(750,0.14,'triangle',0.13); }
  addScore(10*(diffCfg.scoreMult||1)); shake=6; vibrate(15);
}

function bumpCombo(){
  const c=document.getElementById('combo');
  c.style.transform='scale(1.4)'; setTimeout(()=>c.style.transform='scale(1)',110);
}

// Değişmeyen alanlara yazmayı atlamak için son yazılan değerleri önbelleğe
// alır — her karede (60/sn) unconditional DOM yazımı yerine, sadece
// gerçekten değişen elemanlar güncellenir (davranış aynı, gereksiz
// reflow/style recalculation önlenir).
const _hud = {score:null, combo:null, level:null, hp:null, hpText:null, isTime:null, timer:null, pw:null, flash:null, wallet:null, goal:null, waveActive:null, wave:null};
function updateHud(){
  if(_hud.score!==score){ document.getElementById('scoreHud').textContent=score.toFixed(2); _hud.score=score; }
  // "Dalga" satırı: sıradaki boss dalgasının numarası (sonsuz boss sistemi
  // olduğu için sabit bir payda yok, bkz. bossStageFor()). Zen modda boss
  // hiç yok, satır tamamen gizlenir.
  const waveActive = mode!=='zen';
  if(_hud.waveActive!==waveActive){
    document.getElementById('waveRow').style.display = waveActive ? '' : 'none';
    _hud.waveActive=waveActive;
  }
  if(waveActive){
    const waveText=String(bossNextIndex+1);
    if(_hud.wave!==waveText){ document.getElementById('waveHud').textContent=waveText; _hud.wave=waveText; }
  }
  // "Sıradaki hedef" ipucu: oyuncuya HER AN görünür, somut, yakın bir hedef
  // göster — rekor kırmaya mı yoksa sıradaki boss dalgasına mı daha
  // yakınsa onu seç. Boş string döndürürse (ikisi de uzaksa/boss aktifken)
  // satır tamamen boş kalır, başka hiçbir metni kapatmaz (bkz. kullanıcı
  // talebi — "başka yazıları kapatmasın"). Playwright testinde ölçülerek
  // doğrulandı: birden fazla güç-takviyesi chip'i (#pw) aynı anda aktif
  // olunca ikinci satıra taşıp goalHint'in TAM ÜSTÜNE biniyordu — bu
  // yüzden herhangi bir takviye aktifken ipucu geçici olarak gizleniyor.
  const anyPowerupActive = player.shieldHits>0 || player.slowT>0 || player.magnetT>0 || player.multT>0;
  let goalText='';
  if(mode!=='zen' && !bossActive && !anyPowerupActive){
    const bossRemain = bossStageFor(bossNextIndex).score - score;
    const recordRemain = stats.best - score;
    if(recordRemain>0 && (bossRemain<=0 || recordRemain<bossRemain)) goalText = t('hud_goal_record',{n:Math.ceil(recordRemain)});
    else if(bossRemain>0) goalText = t('hud_goal_boss',{n:Math.ceil(bossRemain)});
  }
  if(_hud.goal!==goalText){ document.getElementById('goalHint').textContent=goalText; _hud.goal=goalText; }
  const comboText='x'+combo;
  if(_hud.combo!==comboText){ document.getElementById('combo').textContent=comboText; _hud.combo=comboText; }
  if(_hud.level!==level){ document.getElementById('levelHud').textContent=level; _hud.level=level; }
  // Can artık sabit kalp sayısı değil, değişken bir HP bar (bkz. §4 plan) —
  // "3 can" yerine "3-17 arası HP", tehlike tipine göre değişen hasar alıyor.
  const hpPct = mode==='zen' ? 100 : Math.max(0, Math.round(hp/maxHp*100));
  if(_hud.hp!==hpPct){ document.getElementById('hpBarFill').style.width=hpPct+'%'; _hud.hp=hpPct; }
  const hpText = mode==='zen' ? '∞' : hp+'/'+maxHp;
  if(_hud.hpText!==hpText){ document.getElementById('hpText').textContent=hpText; _hud.hpText=hpText; }
  const isTime = mode==='time';
  if(_hud.isTime!==isTime){
    document.getElementById('timerLbl').style.display = isTime?'block':'none';
    document.getElementById('timerHud').style.display = isTime?'block':'none';
    document.getElementById('levelLbl').style.display = isTime?'none':'block';
    document.getElementById('levelHud').style.display = isTime?'none':'block';
    _hud.isTime=isTime;
  }
  if(isTime){
    const timerText=Math.ceil(timeLeft)+'s';
    if(_hud.timer!==timerText){ document.getElementById('timerHud').textContent=timerText; _hud.timer=timerText; }
  }
  // Güç çipleri: yapı (hangi güçler aktif) değişince bir kez HTML üretilir;
  // her karede yalnız çubuk genişlikleri güncellenir (eskiden her karede
  // innerHTML yeniden yazılıyordu → düşük seviye telefonlarda kare düşüşü).
  const durMul = 1+upgradeBonus('boostDur');
  const timed=[];
  if(player.slowT>0) timed.push(['clock', player.slowT/(SLOW_DUR*durMul)]);
  if(player.magnetT>0) timed.push(['magnet', player.magnetT/(MAGNET_DUR*durMul)]);
  if(player.multT>0) timed.push(['coin', player.multT/(MULT_DUR*durMul)]);
  const key=(player.shieldHits>0 ? 's'+player.shieldHits : '')+'|'+timed.map(x=>x[0]).join(',');
  const pwEl=document.getElementById('pw');
  if(_hud.pw!==key){
    let html='';
    if(player.shieldHits>0) html+=`<div class="pwchip">${icon('shield')}${player.shieldHits>1?' ×'+player.shieldHits:''}</div>`;
    for(const [ic] of timed) html+=chip(ic);
    pwEl.innerHTML=html; _hud.pw=key; _hud.pwBars=[...pwEl.querySelectorAll('.pwbar i')]; _hud.pwW=[];
  }
  timed.forEach(([,frac],i)=>{
    const w=Math.round(Math.max(0,Math.min(1,frac))*100);
    if(_hud.pwW[i]!==w && _hud.pwBars[i]){ _hud.pwBars[i].style.width=w+'%'; _hud.pwW[i]=w; }
  });
  const flashOpacity = levelFlashT>0 ? Math.min(1, levelFlashT/20) : 0;
  if(_hud.flash!==flashOpacity){ document.getElementById('levelFlash').style.opacity=flashOpacity; _hud.flash=flashOpacity; }
  const wallet = stats.notes||0;
  if(_hud.wallet!==wallet){ document.getElementById('walletHud').textContent=wallet; _hud.wallet=wallet; }
}
function chip(iconKey){ return `<div class="pwchip">${icon(iconKey)}<div class="pwbar"><i style="width:0%"></i></div></div>`; }
