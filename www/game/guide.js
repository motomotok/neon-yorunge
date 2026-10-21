// DJ Vinil'in kısa rehberleri (eğitimden sonra, oyunun ilerleyen anlarında).
// Her biri 2-3 adım: oyuncuyu sıkmadan doğru ekrana götürür, bir iki cümle
// söyler, sonra bırakır. Adımlar narratorSay + tutorialSpotlight kullanır;
// rehber sürerken yalnız beklenen menü düğmesine gidilebilir (input.js).
//
//  - 'duel': Düello kilidi açılınca (DUEL_UNLOCK_RUNS Skor Avı oyunu) ilk ana
//    menüye dönüşte → Düello'ya dokun → 3 strateji yeteneğini birlikte seç →
//    Maç Ara.
//  - 'rank': 7. Skor Avı oyunundan sonra ilk ana menüye dönüşte → Sıralama'ya
//    dokun → günlük ödüller (kürsü) → haftalık / tüm zamanlar.
const DUEL_UNLOCK_RUNS = 3, RANK_GUIDE_RUNS = 7;
let guideActive = null, guideStep = null;

function duelUnlocked(){
  return (stats.scoreRuns||0) >= DUEL_UNLOCK_RUNS || !!(stats.duel && stats.duel.games>0);
}
// Menüdeki Düello düğmesi: kilitliyken ilerleme gösterir.
function syncDuelLock(){
  const b=document.querySelector('.menuDuelBtn'); if(!b) return;
  const locked=!duelUnlocked();
  b.classList.toggle('locked', locked);
  const sm=b.querySelector('small');
  if(sm) sm.textContent = locked ? t('duel_locked_sub',{n:Math.min(stats.scoreRuns||0, DUEL_UNLOCK_RUNS), m:DUEL_UNLOCK_RUNS}) : t('menu_play_duel_sub');
}

// Ana menü her açıldığında: sırası gelen rehber varsa başlat.
function guideCheckMenu(){
  if(guideActive || tutorialActive || !stats.tutorialDone) return;
  setTimeout(()=>{
    if(guideActive || tutorialActive || state!=='menu') return;
    const ov=document.getElementById('purchaseConfirmOverlay');
    if(ov && getComputedStyle(ov).display!=='none') return;   // başka bir DJ sorusu açık
    if(!stats.guideDuelDone && duelUnlocked()){
      if(stats.duel && stats.duel.games>0){ stats.guideDuelDone=true; saveStats(); }
      else return guideStart('duel');
    }
    if(!stats.guideRankDone && (stats.scoreRuns||0) >= RANK_GUIDE_RUNS) guideStart('rank');
  }, 700);
}

function guideStart(id){
  guideActive=id;
  guideGo(id==='duel' ? 'menu' : 'rmenu');
}
function guideEnd(){
  if(!guideActive) return;
  if(guideActive==='duel') stats.guideDuelDone=true;
  if(guideActive==='rank') stats.guideRankDone=true;
  saveStats();
  guideActive=null; guideStep=null;
  tutorialClearSpotlight(); narratorHide();
}
function guideGo(step){
  guideStep=step;
  tutorialClearSpotlight();
  const S=GUIDE_STEPS[step]; if(S) S();
}
const GUIDE_STEPS = {
  // ---- Düello ----
  menu(){
    tutorialSpotlight(document.querySelector('.menuDuelBtn'));
    narratorSay(t('guide_duel_1'), {pos:'top'});
  },
  pick(){
    _duelSel=[]; renderDuelLobby();
    tutorialSpotlight(document.getElementById('duelPerkGrid'));
    narratorSay(t('guide_duel_2'), {pos:'bottom'});
  },
  find(){
    tutorialSpotlight(document.getElementById('duelFindBtn'));
    narratorSay(t('guide_duel_3'), {pos:'top'});
  },
  // ---- Sıralama ----
  rmenu(){
    tutorialSpotlight(document.querySelector('.menuSocialBtn.rank'));
    narratorSay(t('guide_rank_1'), {pos:'top'});
  },
  podium(){
    tutorialSpotlight(document.getElementById('rkPodium'));
    narratorSay(t('guide_rank_2'), {pos:'bottom', cta:t('guide_next'), onCta:()=>guideGo('tabs')});
  },
  tabs(){
    tutorialSpotlight(document.getElementById('rkTabs'));
    narratorSay(t('guide_rank_3'), {pos:'bottom', cta:t('tut_cta_understood'), onCta:()=>guideEnd()});
  },
};

// input.js: rehber sürerken yalnız beklenen düğme. true = bu gezinmeyi engelle.
function guideBlocksNav(g){
  if(!guideActive) return false;
  const want = guideStep==='menu' ? 'duel' : guideStep==='rmenu' ? 'ranking' : (guideStep==='pick' || guideStep==='find') ? '__none' : null;
  if(want && g!==want){ beep(200,0.08,'square',0.1); return true; }
  return false;
}
// Gezinme / olay sonrası adım geçişleri.
function guideOnNav(g){
  if(!guideActive) return;
  if(guideStep==='menu' && g==='duel') guideGo('pick');
  else if(guideStep==='rmenu' && g==='ranking'){
    // İlk kez Sıralama'ya giriyorsa önce isim penceresi: kapanınca devam.
    const wait=()=>{
      const ov=document.getElementById('nameOverlay');
      if(ov && getComputedStyle(ov).display!=='none'){ setTimeout(wait, 300); return; }
      if(guideActive==='rank') guideGo('podium');
    };
    wait();
  }
}
function guideOnDuelPick(n){
  if(guideActive==='duel' && guideStep==='pick' && n>=DUEL_SLOTS) setTimeout(()=>{ if(guideStep==='pick') guideGo('find'); }, 350);
}
function guideOnDuelSearch(){ if(guideActive==='duel') guideEnd(); }
