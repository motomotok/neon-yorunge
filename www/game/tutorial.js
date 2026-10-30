// İlk açılış öğreticisi: DJ Vinil'in anlattığı ~20 saniyelik oynanabilir
// giriş. Oyun ilk kez açılınca menü beklemeden kendiliğinden başlar (bkz.
// main.js); sonunda doğrudan gerçek ilk oyun (Skor Avı) başlar.
//
// Akış (2.76.0): sola + sağa dokun → başka halkadaki nota → cızırtıdan kaç
// → "sahne senin" → gerçek oyun. Bilerek çarptırma / bilerek düşürme ve
// yetenek–Süpernova–Çekirdek turu kaldırıldı (yeni oyuncular öğreticide
// bırakıyordu). Onlar artık oyun içinde, sırası gelince kısa rehberle
// anlatılır (guide.js 'up' = ilk oyun sonu, 'recycle' = Süpernova açılınca).
//
// Kurallar: her adımda önce metin daktiloyla yazılır; öğe ancak metin
// bitince sahneye girer ve dokunma ancak o zaman açılır. Kaçırılan nota
// tekrar gelir. Diğer dosyalardaki hook'lar bu dosyadaki fonksiyonları
// `typeof X==='function'` korumasıyla çağırır.
let tutorialActive = false;
let tutorialStep = null;
let _tutTapOK = false;            // bu adımda dokunmaya izin var mı
let _tutPending = {};             // etiket -> {type, ring, resolved}
let _tutDodgeHit = false;
let _tutSidesDone = {left:false, right:false};
// Süpernova'nın adı tek yerden (i18n: prestige_name) gelir — ad değişirse metinler kendiliğinden uyar.
function _tutP(){ return {p:t('prestige_name')}; }

function startTutorial(){
  tutorialActive = true;
  mode='classic'; diffKey='normal'; diffCfg=DIFF.normal;
  resetGame();
  items.length = 0; // resetGame()'in otomatik tohum öğelerini temizle — senaryo tamamen elle kontrol edilecek
  // Orta halkada başla: hem SOL (1→0) hem SAĞ (0→1) geçerli birer hamle olsun.
  player.targetRing = 1; player.curRadius = radiusFor(1);
  // Tam canla başlar: kaçış adımında çarpsa da öğretici bitmez.
  hp = maxHp;
  state='play'; setHud(true); showScreen(null);
  // Oynanış boyunca duraklat butonu gizli (menüye kaçıp senaryo dışına çıkılmasın).
  tutorialHideEl(document.getElementById('pauseBtn'));
  tutorialGoStep('sides');
}

function tutorialGoStep(step, arg){
  tutorialClearSpotlight();
  tutorialHideTapHint();
  tutorialRestoreDisabled();
  _tutTapOK = false;
  _tutPending = {};
  tutorialStep = step;
  const ft = {sides:1, note:2, dodge:3, go:4}[step];
  if(ft && typeof telemetryFt==='function') telemetryFt(ft);
  const S = TUTORIAL_STEPS[step];
  if(S) S(arg);
}

// Oyuncunun önüne (yarım tur ileriye) etiketli bir öğe koyar.
const TUTORIAL_ITEM_DIST = Math.PI;
function tutorialSpawnItem(type, tag, ring, angOffset){
  const r = ring==null ? player.targetRing : ring;
  items.push({ang: normAng(player.ang+(angOffset==null ? TUTORIAL_ITEM_DIST : angOffset)), ring:r, type, alive:true, pop:0,
    expiring:false, prevFwd:null, jumpT:0, pulsePhase:0, pulseDanger:false, creepT:0, creeped:false,
    tutorialTag:tag});
  _tutPending[tag] = {type, ring:r, resolved:false};
}
function _tutAllResolved(){ return Object.values(_tutPending).every(p=>p.resolved); }
function _tutSay(key, opts){ narratorSay(t(key), opts); }
function _tutSayThen(key, fn){ narratorSay(t(key), {onDone:fn}); }

const TUTORIAL_STEPS = {
  // Sola ve sağa dokunma tek adım: iki taraf da (sıra fark etmez) bir kez denenince geçilir.
  sides(){
    _tutSidesDone = {left:false, right:false};
    narratorSay(t('tut2_intro')+' '+t('tut2_sides'), {onDone:()=>{ _tutTapOK=true; tutorialShowTapHint('both'); }});
  },
  // Nota başka bir halkada: oyuncu oraya geçmek için dokunmalı.
  note(){
    const ring = player.targetRing<2 ? player.targetRing+1 : player.targetRing-1;
    _tutSayThen('tut2_note2', ()=>{
      _tutTapOK = true;
      tutorialShowTapHint(ring>player.targetRing ? 'right' : 'left');
      tutorialSpawnItem('star','note',ring);
    });
  },
  dodge(){
    _tutDodgeHit = false;
    _tutSayThen('tut2_dodge', ()=>{
      _tutTapOK = true;
      tutorialShowTapHint(player.targetRing<2 ? 'right' : 'left');
      tutorialSpawnItem('hazard','dodge');
    });
  },
  // Kaçış sonucu + "sahne senin" → kısa bekleme → gerçek ilk oyun.
  go(){
    const lead = t(_tutDodgeHit ? 'tut2_dodge_hit' : 'tut2_dodge_ok');
    narratorSay(lead+' '+t('tut3_go'), {skippable:false, onDone:()=>setTimeout(()=>{ if(tutorialStep==='go') tutorialPlayNow(); }, 900)});
  },
};

// --- Diğer dosyalardan çağrılan hook'lar ---
function tutorialOnTap(goOut){
  if(tutorialStep!=='sides') return;
  _tutSidesDone[goOut ? 'right' : 'left'] = true;
  tutorialShowTapHint(_tutSidesDone.left ? (_tutSidesDone.right ? null : 'right') : (_tutSidesDone.right ? 'left' : 'both'));
  if(_tutSidesDone.left && _tutSidesDone.right) tutorialGoStep('note');
}
function tutorialTapAllowed(){
  return _tutTapOK && !narratorIsTyping();
}
function tutorialOnItemResolved(tag){
  const p = _tutPending[tag]; if(!p || p.resolved) return;
  p.resolved = true;
  if(tag==='note') tutorialGoStep('dodge');
  else if(tag==='dodge'){ _tutDodgeHit = true; setTimeout(()=>{ if(tutorialStep==='dodge') tutorialGoStep('go'); }, 800); }
}
// Her karede (engine.js update) çağrılır: yanından geçilip kaybolan
// etiketli öğeleri yakalar. Nota tekrar gelir; kaçış adımında yaratığın
// kaybolması başarılı kaçış demektir.
function tutorialTick(){
  for(const tag in _tutPending){
    const p = _tutPending[tag];
    if(p.resolved) continue;
    if(items.some(it=>it.alive && it.tutorialTag===tag)) continue;
    if(tag==='dodge'){ p.resolved = true; setTimeout(()=>{ if(tutorialStep==='dodge') tutorialGoStep('go'); }, 300); }
    else tutorialSpawnItem(p.type, tag, p.ring);
  }
}
// Öğreticide can 1'e düşmez (tek darbe), ama yine de biterse doğrudan gerçek oyuna geç.
function tutorialOnGameOver(){ tutorialPlayNow(); }
// Öğretici sırasında menü gezinmesi yok (duraklat butonu gizli).
function tutorialExpectedNav(){ return tutorialActive ? '__none' : null; }
function tutorialOnNav(){}
function tutorialOnUpgradeBought(){}
function tutorialOnPrestige(){}
function tutorialOnCoreBought(){}
// Hoş geldin hediyesi = Can Kapasitesi 1. kademe fiyatı (fiyat değişirse otomatik izler).
function tutGift(){ return META_UPGRADES.hp.tiers[0].cost; }
function tutorialNudge(){ beep(200,0.08,'square',0.1); }

function tutorialFinish(){
  tutorialActive=false; tutorialStep=null; _tutTapOK=false; _tutPending={};
  tutorialClearSpotlight(); tutorialRestoreHidden(); tutorialRestoreDisabled(); narratorHide(); tutorialHideTapHint();
  if(!stats.tutorialDone){
    stats.tutorialDone=true;
    if(typeof trackEvent==='function') trackEvent('tutorial_complete', true);
    // Yetenekler (hoş geldin hediyesiyle) ilk oyun sonunda, Süpernova
    // açılınca anlatılır — bkz. guide.js. Eski öğreticiyi görenlerde yok.
    stats.guideUpPending=true; stats.guideRecyclePending=true;
  }
  saveStats();
}
// Öğretici bitti (ya da atlandı): menüye dönmeden gerçek ilk oyun başlar.
function tutorialPlayNow(){
  tutorialFinish();
  startGame('daily');
}
function tutorialSkip(){ tutorialPlayNow(); }
// "Atla": önce sorulur. Oynanış sürerken soru açıkken oyun donar ('story':
// update çalışmaz); vazgeçilirse kaldığı yerden devam eder.
function tutorialAskSkip(){
  if(!tutorialActive) return;
  const froze = state==='play';
  if(froze) state='story';
  const ov=document.getElementById('purchaseConfirmOverlay');
  ov.style.zIndex = '60'; // anlatıcı kutusunun ve engelleyicinin üstünde
  showPurchaseConfirm('book', t('tut_skip_title'), null, ()=>tutorialSkip(),
    t('tut_skip_confirm',{h:t('howto_title')}), null,
    ()=>{ if(froze && state==='story') state='play'; });
}

// --- UI yardımcıları ---
function tutorialShowTapHint(side){
  const el=document.getElementById('tutorialHint'); if(!el) return;
  if(!side){ tutorialHideTapHint(); return; }
  el.classList.add('show');
  const l=el.querySelector('.tutTap-left'), r=el.querySelector('.tutTap-right');
  if(l) l.style.display = (side==='left' || side==='both') ? 'flex' : 'none';
  if(r) r.style.display = (side==='right' || side==='both') ? 'flex' : 'none';
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
// Eleman görünür kalır ama tıklanamaz (ör. yetenek alınırken Süpernova butonu).
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
