// İlk oyun tutorial'ı: DJ Vinil'in (bkz. narrator.js) anlattığı, ~1 dakikalık
// oynanabilir rehber. Sadece stats.tutorialDone===false iken (yani hayatta
// ilk kez BAŞLA'ya basıldığında) tetiklenir — bkz. input.js "quickstart".
//
// Akış: tanışma → sola dokun → sağa dokun → nota → başka halkadaki nota →
// art arda 2 nota (kombo 5 = MELODİ anı) → kalp → yaratığa çarp →
// kalple toparlan → yaratıktan kaç → mıknatısla notaları çek → sahneye çık.
// Boss savaşı bilerek YOK: ilk boss oyuncuya sürpriz (sonrasında
// narratorFirstBossStory mesajı gelir).
//
// Kurallar: her adımda önce metin daktiloyla yazılır; öğe ancak metin
// bitince sahneye girer ve dokunma ancak o zaman açılır — oyuncu okumadan
// ilerleyemez. Kaçırılan öğe (yanından geçilen nota vb.) tekrar gelir.
// Diğer dosyalardaki hook'lar bu dosyadaki fonksiyonları
// `typeof X==='function'` korumasıyla çağırır.
let tutorialActive = false;
let tutorialStep = null;
let _tutTapOK = false;            // bu adımda dokunmaya izin var mı
let _tutPending = {};             // etiket -> {type, ring, resolved}
let _tutDodgeHit = false;

function startTutorial(){
  tutorialActive = true;
  mode='classic'; diffKey='normal'; diffCfg=DIFF.normal;
  resetGame();
  items.length = 0; // resetGame()'in otomatik tohum öğelerini temizle — senaryo tamamen elle kontrol edilecek
  // Orta halkada başla: hem SOL (1→0) hem SAĞ (0→1) geçerli birer hamle olsun.
  player.targetRing = 1; player.curRadius = radiusFor(1);
  // Can biraz eksik başlar: ilk kalp gerçekten bir şey doldursun.
  hp = Math.max(1, maxHp-1);
  state='play'; setHud(true); showScreen(null);
  // Oynanış boyunca duraklat butonu gizli (menüye kaçıp senaryo dışına çıkılmasın).
  tutorialHideEl(document.getElementById('pauseBtn'));
  tutorialGoStep('intro');
}

function tutorialGoStep(step){
  tutorialClearSpotlight();
  tutorialHideTapHint();
  _tutTapOK = false;
  _tutPending = {};
  tutorialStep = step;
  const S = TUTORIAL_STEPS[step];
  if(S) S();
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
  intro(){
    narratorSay(t('tut2_intro'), {cta:t('tut_cta_understood'), onCta:()=>tutorialGoStep('left')});
  },
  left(){
    _tutSayThen('tut2_left', ()=>{ _tutTapOK=true; tutorialShowTapHint('left'); });
  },
  right(){
    _tutSayThen('tut2_right', ()=>{ _tutTapOK=true; tutorialShowTapHint('right'); });
  },
  note1(){
    _tutSayThen('tut2_note1', ()=>tutorialSpawnItem('star','note1'));
  },
  // Nota başka bir halkada: oyuncu oraya geçmek için dokunmalı.
  note2(){
    const ring = player.targetRing<2 ? player.targetRing+1 : player.targetRing-1;
    _tutSayThen('tut2_note2', ()=>{
      _tutTapOK = true;
      tutorialShowTapHint(ring>player.targetRing ? 'right' : 'left');
      tutorialSpawnItem('star','note2',ring);
    });
  },
  // Art arda iki nota: kombo 3→5, 5'te MELODİ anı (fx.js MELODY_SCALE=5 nota).
  combo(){
    combo = 3;
    tutorialSpotlight(document.getElementById('combo'));
    _tutSayThen('tut2_combo', ()=>{
      tutorialSpawnItem('star','combo1');
      tutorialSpawnItem('star','combo2',null,TUTORIAL_ITEM_DIST+0.45);
    });
  },
  melody(){
    tutorialSpotlight(document.getElementById('combo'));
    narratorSay(t('tut2_melody'), {cta:t('tut_cta_understood'), onCta:()=>tutorialGoStep('heart1')});
  },
  heart1(){
    tutorialSpotlight(document.getElementById('hpBarWrap'));
    _tutSayThen('tut2_heart1', ()=>tutorialSpawnItem('heart','heart1'));
  },
  // Kaçış yok: dokunma kapalı, yaratık oyuncunun halkasında. Çarpma
  // hissini (can düşer, kombo sıfırlanır) bilerek yaşatıyoruz.
  hazard(){
    _tutSayThen('tut2_hazard', ()=>tutorialSpawnItem('hazard','hazard'));
  },
  heart2(){
    tutorialSpotlight(document.getElementById('hpBarWrap'));
    _tutSayThen('tut2_heart2', ()=>tutorialSpawnItem('heart','heart2'));
  },
  dodge(){
    _tutDodgeHit = false;
    _tutSayThen('tut2_dodge', ()=>{
      _tutTapOK = true;
      tutorialShowTapHint(player.targetRing<2 ? 'right' : 'left');
      tutorialSpawnItem('hazard','dodge');
    });
  },
  magnet(){
    const lead = t(_tutDodgeHit ? 'tut2_dodge_hit' : 'tut2_dodge_ok');
    narratorSay(lead+' '+t('tut2_magnet'), {onDone:()=>tutorialSpawnItem('magnet','magnet')});
  },
  // Mıknatıs aktif: diğer halkalardaki notalar halka değiştirmeden toplanır.
  magnetGo(){
    const others = [0,1,2].filter(r=>r!==player.targetRing);
    tutorialSpawnItem('star','mag1',others[0],1.0);
    tutorialSpawnItem('star','mag2',others[1],1.4);
    tutorialSpawnItem('star','mag3',others[0],1.8);
    _tutSay('tut2_magnet_go');
  },
  end(){
    narratorSay(t('tut2_end'), {cta:t('tut2_cta_go'), onCta:()=>tutorialStartRealGame()});
  },
};

// --- Diğer dosyalardan çağrılan hook'lar ---
function tutorialOnTap(goOut){
  if(tutorialStep==='left' && !goOut) tutorialGoStep('right');
  else if(tutorialStep==='right' && goOut) tutorialGoStep('note1');
}
function tutorialTapAllowed(){
  return _tutTapOK && !narratorIsTyping();
}
function tutorialOnItemResolved(tag){
  const p = _tutPending[tag]; if(!p || p.resolved) return;
  p.resolved = true;
  if(tag==='note1') tutorialGoStep('note2');
  else if(tag==='note2') tutorialGoStep('combo');
  else if(tag==='combo1' || tag==='combo2'){
    // Kutu bir an çekilir: "MELODİ" yazısı ve yavaş çekim anı net görünsün.
    if(_tutAllResolved()){ narratorHide(); setTimeout(()=>{ if(tutorialStep==='combo') tutorialGoStep('melody'); }, 1500); }
  }
  else if(tag==='heart1') tutorialGoStep('hazard');
  else if(tag==='hazard') setTimeout(()=>{ if(tutorialStep==='hazard') tutorialGoStep('heart2'); }, 800);
  else if(tag==='heart2') tutorialGoStep('dodge');
  else if(tag==='dodge'){ _tutDodgeHit = true; setTimeout(()=>{ if(tutorialStep==='dodge') tutorialGoStep('magnet'); }, 800); }
  else if(tag==='magnet') tutorialGoStep('magnetGo');
  else if(tag.startsWith('mag') && _tutAllResolved()) setTimeout(()=>{ if(tutorialStep==='magnetGo') tutorialGoStep('end'); }, 600);
}
// Her karede (engine.js update) çağrılır: yanından geçilip kaybolan
// etiketli öğeleri yakalar. Notalar/kalpler tekrar gelir; kaçış adımında
// yaratığın kaybolması başarılı kaçış demektir.
function tutorialTick(){
  for(const tag in _tutPending){
    const p = _tutPending[tag];
    if(p.resolved) continue;
    if(items.some(it=>it.alive && it.tutorialTag===tag)) continue;
    if(tag==='dodge'){ p.resolved = true; setTimeout(()=>{ if(tutorialStep==='dodge') tutorialGoStep('magnet'); }, 300); }
    else if(tag.startsWith('mag') && tutorialStep==='magnetGo'){ p.resolved = true; if(_tutAllResolved()) setTimeout(()=>{ if(tutorialStep==='magnetGo') tutorialGoStep('end'); }, 600); }
    else tutorialSpawnItem(p.type, tag, p.ring);
  }
}
function tutorialOnGameOver(){
  // Senaryoda can hiç sıfırlanmaz; olur da biterse tutorial'ı kapatıp
  // normal oyun-sonu ekranına bırak.
  tutorialFinish();
}
function tutorialExpectedNav(){ return null; }
function tutorialOnNav(){}
function tutorialOnUpgradeBought(){}
function tutorialNudge(){ beep(200,0.08,'square',0.1); }

function tutorialFinish(){
  tutorialActive=false; tutorialStep=null; _tutTapOK=false; _tutPending={};
  tutorialClearSpotlight(); tutorialRestoreHidden(); narratorHide(); tutorialHideTapHint();
  if(!stats.tutorialDone){
    stats.tutorialDone=true;
    // Hoş geldin hediyesi: ilk kalıcı yetenek (Can Kapasitesi 1. kademe) tam bu kadar.
    addNotes(240);
    queueToast(icon('coin')+' '+t('tut2_gift_toast',{n:240}));
  }
  saveStats();
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
