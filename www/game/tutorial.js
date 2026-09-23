// İlk oyun tutorial'ı: 10-20 saniyelik, adım adım ZORUNLU etkileşimli
// rehber. Sadece stats.tutorialDone===false iken (yani hayatta ilk kez
// BAŞLA'ya basıldığında) tetiklenir — bkz. input.js'teki "quickstart" dalı.
// Diğer dosyalardaki (engine.js/screens.js/upgrades-ui.js) ince hook'lar bu
// dosyadaki fonksiyonları `typeof X==='function'` koruması ile çağırır,
// böylece bu dosya olmasa/yüklenmese bile oyun normal çalışmaya devam eder.
let tutorialActive = false;
let tutorialStep = null;

function startTutorial(){
  tutorialActive = true;
  mode='classic'; diffKey='normal'; diffCfg=DIFF.normal;
  resetGame();
  items.length = 0; // resetGame()'in otomatik 4 tohum öğesini temizle — senaryo tamamen elle kontrol edilecek
  // resetGame() oyuncuyu ring 0'da (en iç halka) başlatır — ilk istenen
  // hareket SOL (daha da içe) olduğu için orta halkada (ring 1) başlatıyoruz,
  // böylece hem SOL (1→0) hem SAĞ (0→1) geçerli birer hamle oluyor.
  player.targetRing = 1; player.curRadius = radiusFor(1);
  state='play'; setHud(true); showScreen(null);
  // Duraklat butonu üzerinden Ayarlar/Duraklat ekranına, oradan da "ANA
  // MENÜ"ye kaçılıp tutorial'ın script dışına çıkması mümkündü (kendi
  // kendine iyileşiyordu ama temiz değildi) — oynanış adımları boyunca
  // duraklat butonu tamamen kaldırılıyor, tutorialFinish() geri getiriyor.
  tutorialHideEl(document.getElementById('pauseBtn'));
  tutorialGoStep('intro');
}

function tutorialGoStep(step){
  tutorialClearSpotlight();
  tutorialHideTapHint();
  tutorialStep = step;
  if(step==='intro') tutorialStepIntro();
  else if(step==='awaitLeft') tutorialStepAwaitLeft();
  else if(step==='awaitRight') tutorialStepAwaitRight();
  else if(step==='coin') tutorialStepCoin();
  else if(step==='magnet') tutorialStepMagnet();
  else if(step==='heart') tutorialStepHeart();
  else if(step==='hazard1') tutorialStepHazard1();
  else if(step==='hazard2') tutorialStepHazard2();
  else if(step==='gameover') tutorialStepGameOver();
  else if(step==='buyHp') tutorialStepBuyHp();
  else if(step==='coreIntro') tutorialStepCoreIntro();
  else if(step==='backToMenu') tutorialStepBackToMenu();
  else if(step==='outro') tutorialStepOutro();
}

function tutorialStepIntro(){
  tutorialShow(t('tut_step_intro'), {cta:t('tut_cta_understood'), onCta:()=>tutorialGoStep('awaitLeft')});
}
function tutorialStepAwaitLeft(){
  tutorialShow(t('tut_step_awaitleft'));
  tutorialShowTapHint('left');
}
function tutorialStepAwaitRight(){
  tutorialShow(t('tut_step_awaitright'));
  tutorialShowTapHint('right');
}
// Öğeler oyuncunun O ANKİ açısının TAM KARŞISINA (180°) yerleştiriliyor —
// oyuncu orb'un yörüngede süzülüp öğeye ulaşmasını rahatça izlesin diye
// (eskiden ~30° idi, çok hızlı/ani oluyordu — bkz. kullanıcı geri bildirimi).
const TUTORIAL_ITEM_DIST = Math.PI;
function tutorialSpawnItem(type, tag){
  items.push({ang: normAng(player.ang+TUTORIAL_ITEM_DIST), ring: player.targetRing, type, alive:true, pop:0,
    expiring:false, prevFwd:null, jumpT:0, pulsePhase:0, pulseDanger:false, creepT:0, creeped:false,
    tutorialTag:tag});
}
function tutorialStepCoin(){
  tutorialShow(t('tut_step_coin'));
  tutorialSpawnItem('coin','coin');
}
// Boncuğun ardından mıknatıs ve kalp de topluyoruz — eskiden sadece TEK bir
// toplanabilir öğretiliyordu, ama oyunda güç takviyeleri ve can toplama da
// en az boncuk kadar temel bir mekanik (bkz. kullanıcı geri bildirimi).
function tutorialStepMagnet(){
  tutorialShow(t('tut_step_magnet'));
  tutorialSpawnItem('magnet','magnet');
}
function tutorialStepHeart(){
  tutorialShow(t('tut_step_heart'));
  tutorialSpawnItem('heart','heart');
}
// Eskiden hp=1 ile TEK bir tehlikeye değince direkt ölünüyordu — oyuncu
// "çarpınca can azalır ama hemen ölmezsin" hissini hiç yaşamıyordu. Artık
// hp=2 ile başlıyor: ilk tehlike bir kez çarpıp hayatta kalıyor (hasar/HP
// bar'ı görüyor), ikinci tehlike ise gerçek oyundaki gibi oyunu bitiriyor.
function tutorialStepHazard1(){
  tutorialShow(t('tut_step_hazard'));
  hp = 2;
  tutorialSpawnItem('hazard','hazard1');
}
function tutorialStepHazard2(){
  tutorialShow(t('tut_step_hazard2'));
  tutorialSpawnItem('hazard','hazard2');
}
function tutorialStepGameOver(){
  tutorialHideEl(document.getElementById('retryBtn'));
  tutorialHideEl(document.getElementById('watchAdCoinsBtn'));
  tutorialHideEl(document.querySelector('#screen-over .row2'));
  tutorialSpotlight(document.querySelector('#screen-over [data-go="upgrades"]'));
  tutorialShow(t('tut_step_gameover'));
}
function tutorialStepBuyHp(){
  addStardust(240); // Can Kapasitesi'nin 1. kademesi tam bu kadar — ilk yeteneğini açabilsin diye küçük bir hoşgeldin hediyesi.
  // Süpernova butonu artık GİZLENMİYOR, DEVRE DIŞI bırakılıyor — bir sonraki
  // adımda (coreIntro) aynı butonu görünür halde ışıklandırıp tanıtacağız;
  // buradaki amaç sadece az önce verilen hediye stardust'ın yanlışlıkla
  // sıfırlanmasını önlemek (tutorialFinish() geri açıyor).
  tutorialDisableEl(document.getElementById('resetProgressBtn'));
  const cards=[...document.querySelectorAll('#upgradesGrid .shopCard')];
  const hpCard=cards.find(c=>c.dataset.key==='hp');
  cards.forEach(c=>{ if(c!==hpCard) tutorialDim(c); });
  tutorialSpotlight(hpCard);
  tutorialShow(t('tut_step_buyhp'));
}
// Kalıcı yeteneği satın aldıktan hemen sonra, Çekirdek Ağacı'nı (Süpernova
// prestij sistemi) tanıtan kısa bir bilgi adımı — eskiden hiç
// öğretilmiyordu. Gerçekten sıfırlama YAPTIRMIYORUZ (yeni oyuncunun daha
// yeni aldığı yeteneği anlamsız yere silmesin diye buton devre dışı
// kalıyor), sadece sekmeyi/butonu ışıklandırıp ne işe yaradığını anlatıyor.
function tutorialStepCoreIntro(){
  upgradesTab='core'; renderUpgradesTab();
  tutorialSpotlight(document.querySelector('#upgradesTabs [data-uptab="core"]'));
  tutorialSpotlight(document.getElementById('resetProgressBtn'));
  tutorialShow(t('tut_step_coreintro'), {cta:t('tut_cta_understood'), onCta:()=>tutorialGoStep('backToMenu')});
}
function tutorialStepBackToMenu(){
  upgradesTab='tier'; renderUpgradesTab();
  tutorialSpotlight(document.querySelector('#screen-upgrades [data-go="menu"]'));
  tutorialShow(t('tut_step_backtomenu'));
}
function tutorialStepOutro(){
  tutorialHide();
  const el=document.getElementById('tutorialOutro'); if(el) el.classList.add('show');
}

// --- Diğer dosyalardan çağrılan hook'lar ---
function tutorialOnTap(goOut){
  if(tutorialStep==='awaitLeft' && !goOut) tutorialGoStep('awaitRight');
  else if(tutorialStep==='awaitRight' && goOut) tutorialGoStep('coin');
}
function tutorialTapAllowed(){
  return tutorialStep==='awaitLeft' || tutorialStep==='awaitRight';
}
function tutorialOnItemResolved(tag){
  // 'hazard2' etiketi için asıl adım geçişi tutorialOnGameOver()'da —
  // hitHazard() zaten hp<=0 olduğunda gameOver()'ı senkron tetikliyor.
  if(tag==='coin' && tutorialStep==='coin') tutorialGoStep('magnet');
  else if(tag==='magnet' && tutorialStep==='magnet') tutorialGoStep('heart');
  else if(tag==='heart' && tutorialStep==='heart') tutorialGoStep('hazard1');
  else if(tag==='hazard1' && tutorialStep==='hazard1') tutorialGoStep('hazard2');
}
function tutorialOnGameOver(){
  tutorialGoStep('gameover');
}
function tutorialExpectedNav(){
  if(tutorialStep==='gameover') return 'upgrades';
  if(tutorialStep==='backToMenu') return 'menu';
  return null;
}
function tutorialOnNav(target){
  if(target==='upgrades' && tutorialStep==='gameover') tutorialGoStep('buyHp');
  else if(target==='menu' && tutorialStep==='backToMenu') tutorialGoStep('outro');
}
function tutorialOnUpgradeBought(key){
  if(tutorialStep==='buyHp' && key==='hp') tutorialGoStep('coreIntro');
}
function tutorialNudge(){
  beep(200,0.08,'square',0.1);
}

function tutorialFinish(){
  tutorialActive=false; tutorialStep=null;
  tutorialClearSpotlight(); tutorialRestoreHidden(); tutorialRestoreDisabled(); tutorialHide(); tutorialHideTapHint();
  const el=document.getElementById('tutorialOutro'); if(el) el.classList.remove('show');
  stats.tutorialDone=true; saveStats();
}
function tutorialSkip(){
  tutorialFinish();
  goMenu();
}
function tutorialStartRealGame(){
  tutorialFinish();
  startGame('classic','normal');
}

// --- UI yardımcıları ---
function tutorialShow(msg, opts){
  opts=opts||{};
  const box=document.getElementById('tutorialBox'); if(!box) return;
  document.getElementById('tutorialBoxMsg').textContent = msg;
  const cta=document.getElementById('tutorialBoxCta');
  if(opts.cta){ cta.textContent=opts.cta; cta.style.display='inline-block'; cta.onclick=opts.onCta; }
  else { cta.style.display='none'; cta.onclick=null; }
  box.classList.add('show');
}
function tutorialHide(){
  const box=document.getElementById('tutorialBox'); if(box) box.classList.remove('show');
}
function tutorialShowTapHint(side){
  const el=document.getElementById('tutorialHint'); if(!el) return;
  el.classList.add('show');
  const l=el.querySelector('.tutTap-left'), r=el.querySelector('.tutTap-right');
  if(l) l.style.display = side==='left' ? 'flex' : 'none';
  if(r) r.style.display = side==='right' ? 'flex' : 'none';
}
function tutorialHideTapHint(){
  const el=document.getElementById('tutorialHint'); if(!el) return;
  el.classList.remove('show');
  const l=el.querySelector('.tutTap-left'), r=el.querySelector('.tutTap-right');
  if(l) l.style.display=''; if(r) r.style.display='';
}
let tutorialSpotlightEls=[];
function tutorialSpotlight(el){
  if(!el) return;
  el.classList.add('tutorialTarget');
  tutorialSpotlightEls.push(el);
}
function tutorialDim(el){
  if(!el) return;
  el.classList.add('tutorialDim');
  tutorialSpotlightEls.push(el);
}
function tutorialClearSpotlight(){
  tutorialSpotlightEls.forEach(el=>{ el.classList.remove('tutorialTarget'); el.classList.remove('tutorialDim'); });
  tutorialSpotlightEls=[];
}
let tutorialHiddenEls=[];
function tutorialHideEl(el){
  if(!el) return;
  el.dataset.tutorialPrevDisplay = el.style.display || '';
  el.style.display='none';
  tutorialHiddenEls.push(el);
}
function tutorialRestoreHidden(){
  tutorialHiddenEls.forEach(el=>{ el.style.display = el.dataset.tutorialPrevDisplay || ''; delete el.dataset.tutorialPrevDisplay; });
  tutorialHiddenEls=[];
}
// Çekirdek Ağacı tanıtımında (coreIntro) Süpernova butonu GÖRÜNÜR ve
// ışıklandırılmış kalmalı (anlatım onu işaret ediyor) ama tıklanamaz —
// yeni oyuncu daha yeni aldığı Can Kapasitesi'ni yanlışlıkla sıfırlamasın.
// tutorialHideEl'den farklı olarak elemanı gizlemez, sadece devre dışı
// bırakır.
let tutorialDisabledEls=[];
function tutorialDisableEl(el){
  if(!el) return;
  el.disabled = true;
  tutorialDisabledEls.push(el);
}
function tutorialRestoreDisabled(){
  tutorialDisabledEls.forEach(el=>{ el.disabled=false; });
  tutorialDisabledEls=[];
}
