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
  else if(step==='hazard') tutorialStepHazard();
  else if(step==='gameover') tutorialStepGameOver();
  else if(step==='buyHp') tutorialStepBuyHp();
  else if(step==='backToMenu') tutorialStepBackToMenu();
  else if(step==='outro') tutorialStepOutro();
}

function tutorialStepIntro(){
  tutorialShow('Bu senin orb\'un — merkezdeki yörüngede dönüyor.', {cta:'Anladım', onCta:()=>tutorialGoStep('awaitLeft')});
}
function tutorialStepAwaitLeft(){
  tutorialShow('SOL tarafa dokun, iç halkaya geç.');
  tutorialShowTapHint('left');
}
function tutorialStepAwaitRight(){
  tutorialShow('Şimdi SAĞ tarafa dokun, dış halkaya geç.');
  tutorialShowTapHint('right');
}
function tutorialStepCoin(){
  tutorialShow('Önündeki yıldız tozunu topla!');
  items.push({ang: normAng(player.ang+0.55), ring: player.targetRing, type:'coin', alive:true, pop:0,
    expiring:false, prevFwd:null, jumpT:0, pulsePhase:0, pulseDanger:false, creepT:0, creeped:false,
    tutorialTag:'coin'});
}
function tutorialStepHazard(){
  tutorialShow('Dikkat, bir tehlike geliyor!');
  hp = 1; // Ölümü öğretmek için bilinçli müdahale — tek vuruşta oyun sonu garanti olsun diye.
  items.push({ang: normAng(player.ang+0.55), ring: player.targetRing, type:'hazard', alive:true, pop:0,
    expiring:false, prevFwd:null, jumpT:0, pulsePhase:0, pulseDanger:false, creepT:0, creeped:false,
    tutorialTag:'hazard'});
}
function tutorialStepGameOver(){
  tutorialHideEl(document.getElementById('retryBtn'));
  tutorialHideEl(document.getElementById('watchAdCoinsBtn'));
  tutorialHideEl(document.querySelector('#screen-over .row2'));
  tutorialSpotlight(document.querySelector('#screen-over [data-go="upgrades"]'));
  tutorialShow('Güçlenmek için YETENEKLER\'e dokun.');
}
function tutorialStepBuyHp(){
  addStardust(240); // Can Kapasitesi'nin 1. kademesi tam bu kadar — ilk yeteneğini açabilsin diye küçük bir hoşgeldin hediyesi.
  const cards=[...document.querySelectorAll('#upgradesGrid .shopCard')];
  const hpCard=cards.find(c=>c.dataset.key==='hp');
  cards.forEach(c=>{ if(c!==hpCard) tutorialDim(c); });
  tutorialSpotlight(hpCard);
  tutorialShow('İlk kalıcı yeteneğini aç: Can Kapasitesi!');
}
function tutorialStepBackToMenu(){
  tutorialHideEl(document.getElementById('resetProgressBtn'));
  tutorialSpotlight(document.querySelector('#screen-upgrades [data-go="menu"]'));
  tutorialShow('Harika! Şimdi geri dön.');
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
  // 'hazard' etiketi için asıl adım geçişi tutorialOnGameOver()'da —
  // hitHazard() zaten hp<=0 olduğunda gameOver()'ı senkron tetikliyor.
  if(tag==='coin' && tutorialStep==='coin') tutorialGoStep('hazard');
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
  if(tutorialStep==='buyHp' && key==='hp') tutorialGoStep('backToMenu');
}
function tutorialNudge(){
  beep(200,0.08,'square',0.1);
}

function tutorialFinish(){
  tutorialActive=false; tutorialStep=null;
  tutorialClearSpotlight(); tutorialHide(); tutorialHideTapHint();
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
