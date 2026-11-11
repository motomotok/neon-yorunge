// DJ Vinil'in kısa rehberleri (eğitimden sonra, oyunun ilerleyen anlarında).
// Her biri 2-3 adım: oyuncuyu sıkmadan doğru ekrana götürür, bir iki cümle
// söyler, sonra bırakır. Adımlar narratorSay + tutorialSpotlight kullanır;
// rehber sürerken yalnız beklenen menü düğmesine gidilebilir (input.js).
//
//  - 'duel': Düello kilidi açılınca (DUEL_UNLOCK_RUNS Skor Avı oyunu) ilk ana
//    menüye dönüşte → Düello'ya dokun → 3 strateji yeteneğini birlikte seç →
//    Maç Ara.
//  - 'rank': oyuncu Sıralama'ya ilk kez girdiğinde (ne zaman olursa); hiç
//    girmediyse 7. Skor Avı oyunundan sonra ilk ana menüye dönüşte menüden
//    götürür. İsim yoksa önce isim yazdırır, sonra "Merhaba X" diye günlük
//    ödülleri (kürsü) ve haftalık / tüm zamanlar sekmelerini anlatır.
//  İsim iki rehberde ortaktır: birinde yazıldıysa diğeri sormaz, adıyla selamlar.
//  - 'up': yeni öğreticiyi görenlerde ilk iki şarkı bitince (data.js songNext) → YETENEKLER
//    → hoş geldin hediyesiyle Can Kapasitesi al (screens.js gameOver).
//  - 'recycle': Süpernova ilk kez Çekirdek verecek seviyeye gelince
//    Yetenekler ekranında bir kez anlatılır (screens.js goUpgrades).
const DUEL_UNLOCK_RUNS = 2, RANK_GUIDE_RUNS = 7, GUIDE_UP_RUNS = 3;
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
    // 2.81: açılış soruları (güncelleme, dünkü set ödülü) ve günün hediyesi önce.
    // Eskiden rehber 0.7 sn'de başlıyor, sözü verilen plak rehber bitene kadar hiç çıkmıyordu.
    if(typeof _menuBootDone!=='undefined' && !_menuBootDone) return;
    if(typeof dailyWelcomeDue==='function' && dailyWelcomeDue()) return;
    const ov=document.getElementById('purchaseConfirmOverlay');
    if(ov && getComputedStyle(ov).display!=='none') return;   // başka bir DJ sorusu açık
    if(!stats.guideDuelDone && duelUnlocked() && songNext()===0){
      if(stats.duel && stats.duel.games>0){ stats.guideDuelDone=true; saveStats(); }
      else return guideStart('duel');
    }
    if(!stats.guideRankDone && (stats.scoreRuns||0) >= RANK_GUIDE_RUNS) guideStart('rank');
  }, 700);
}

function guideHello(){ return stats.playerName ? t('guide_hello',{name:stats.playerName})+' ' : ''; }
let _guideAfter=null;
// goRanking'den: Sıralama rehberi görülmediyse burada başlar. true = rehber devraldı.
function guideRankEnter(after){
  if(stats.guideRankDone || tutorialActive || !stats.tutorialDone) return false;
  if(guideActive && guideActive!=='rank') return false;
  guideActive='rank'; _guideAfter=after||null;
  if(!stats.playerName) guideGo('rname');
  else { if(after) after(); guideGo('podium'); }
  return true;
}
function guideStart(id){
  guideActive=id;
  guideGo({duel:'menu', rank:'rmenu', up:'uover', recycle:'rc'}[id]);
}
// screens.js gameOver: ilk gerçek oyun bittiğinde.
function guideCheckOver(){
  if(guideActive || tutorialActive || !stats.guideUpPending || mode!=='daily') return;
  // İlk iki şarkı bitmeden ve ilk 3 oyundan önce değil: oyuncu önce oyunu sevsin.
  if(songNext()>0 || (stats.scoreRuns||0) < GUIDE_UP_RUNS) return;

  setTimeout(()=>{ if(!guideActive && state==='over') guideStart('up'); }, 900);
}
// screens.js goUpgrades: Süpernova ilk kez Çekirdek verebilir hâle gelince.
function guideCheckUpgrades(){
  if(guideActive || tutorialActive || !stats.guideRecyclePending) return;
  if(coresPreview()<=0) return;
  setTimeout(()=>{ if(!guideActive && state==='upgrades') guideStart('recycle'); }, 500);
}
function guideGiveGift(){
  if(stats.welcomeGiftDone) return;
  stats.welcomeGiftDone=true;
  addNotes(tutGift()); refreshWallet(); saveStats();
}
function guideEnd(){
  if(!guideActive) return;
  if(guideActive==='duel') stats.guideDuelDone=true;
  if(guideActive==='rank') stats.guideRankDone=true;
  if(guideActive==='up'){
    stats.guideUpPending=false;
    // Rehber yarıda kapatılsa da hediye verilir.
    if(!stats.welcomeGiftDone){ guideGiveGift(); queueToast(icon('coin')+' '+t('tut2_gift_toast',{n:tutGift()})); }
  }
  if(guideActive==='recycle') stats.guideRecyclePending=false;
  saveStats();
  guideActive=null; guideStep=null; _guideAfter=null;
  tutorialClearSpotlight(); tutorialRestoreHidden(); tutorialRestoreDisabled(); narratorHide();
  if(state==='upgrades'){ renderUpgrades(); renderUpgradesTab(); }
}
// Rehber yarıda bırakılır ama "görüldü" sayılmaz: oyuncu başka bir ekrana
// geçtiyse (ör. bir DJ sorusundan Mağaza'ya) kutu peşinden gitmesin; bir
// sonraki ana menüde yeniden başlar.
function guidePause(){
  if(!guideActive) return;
  guideActive=null; guideStep=null; _guideAfter=null;
  tutorialClearSpotlight(); tutorialRestoreHidden(); tutorialRestoreDisabled(); narratorHide();
}
// showScreen'den: rehber adımı yalnız kendi ekranlarında yaşar.
const GUIDE_SCREENS = {menu:['menu','duel'], rmenu:['menu','ranking'], pick:['duel'], find:['duel'], dname:['duel'],
  rname:['ranking'], podium:['ranking'], tabs:['ranking'], uover:['over','upgrades'], uhp:['upgrades'], rc:['upgrades']};
function guideOnScreen(id){
  if(!guideActive || !guideStep) return;
  const ok=GUIDE_SCREENS[guideStep];
  if(ok && !ok.includes(id)){ if(guideActive==='up') guideEnd(); else guidePause(); }
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
  dname(){
    narratorSay(t('guide_duel_name'), {pos:'bottom', cta:t('guide_name_cta'), onCta:()=>{
      narratorHide(); openNameDialog(()=>{ if(guideActive==='duel'){ renderDuelLobby(); guideGo('pick'); } }, {required:true});
    }});
  },
  pick(){
    _duelSel=[]; renderDuelLobby();
    tutorialSpotlight(document.getElementById('duelPerkGrid'));
    narratorSay(guideHello()+t('guide_duel_2'), {pos:'bottom'});
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
  rname(){
    narratorSay(t('guide_rank_name'), {pos:'bottom', cta:t('guide_name_cta'), onCta:()=>{
      narratorHide(); openNameDialog(()=>{ if(guideActive==='rank'){ if(_guideAfter) _guideAfter(); guideGo('podium'); } }, {required:true});
    }});
  },
  podium(){
    tutorialSpotlight(document.getElementById('rkPodium'));
    narratorSay(guideHello()+t('guide_rank_2'), {pos:'bottom', cta:t('guide_next'), onCta:()=>guideGo('tabs')});
  },
  tabs(){
    tutorialSpotlight(document.getElementById('rkTabs'));
    narratorSay(t('guide_rank_3'), {pos:'bottom', cta:t('tut_cta_understood'), onCta:()=>guideEnd()});
  },
  // ---- Yetenekler (ilk oyun sonu) ----
  // Görev kartı gizlenir ve DJ Vinil üstte konuşur: YETENEKLER düğmesi
  // kutunun arkasında kalmasın (görev kartı ekranı uzatıp düğmeyi aşağı itiyordu).
  uover(){
    tutorialHideEl(document.getElementById('watchAdCoinsBtn'));
    tutorialHideEl(document.querySelector('#screen-over .row2'));
    tutorialHideEl(document.getElementById('msCard'));
    tutorialHideEl(document.getElementById('tmrLine'));
    tutorialHideEl(document.getElementById('nextGoalLine'));
    const upBtn=document.querySelector('#screen-over [data-go="upgrades"]');
    tutorialSpotlight(document.getElementById('coinsEarned'));
    tutorialSpotlight(upBtn);
    narratorSay(t('tut2_over',{b:t('menu_upgrades')}), {pos:'top'});
    requestAnimationFrame(()=>{ const sc=document.getElementById('screen-over'); if(sc) sc.scrollTop=sc.scrollHeight; });
  },
  // Hediye verilir, Yetenekler anlatılır; satın almaya zorlanmaz ("Anladım" ile
  // kapanır). Eskiden Can Kapasitesi'ni almadan çıkılamıyordu: notasını önceden
  // harcayan oyuncuda hediye yetmiyor ve rehber takılı kalıyordu.
  uhp(){
    guideGiveGift();
    upgradesTab='tier'; renderUpgradesTab();
    tutorialSpotlight(document.getElementById('upgradesGrid'));
    narratorSay(t('tut2_skills_info',{n:tutGift()}), {pos:'bottom', cta:t('tut_cta_understood'), onCta:()=>guideEnd()});
  },
  // ---- Süpernova (ilk kez Çekirdek verebilir olunca) ----
  rc(){
    upgradesTab='core'; renderUpgradesTab();
    tutorialSpotlight(document.getElementById('resetProgressBtn'));
    narratorSay(t('tut2_prestige',{p:t('prestige_name')}), {pos:'top', cta:t('tut_cta_understood'), onCta:()=>guideEnd()});
  },
};

// input.js: rehber sürerken yalnız beklenen düğme. true = bu gezinmeyi engelle.
function guideBlocksNav(g){
  if(!guideActive) return false;
  const want = guideStep==='menu' ? 'duel' : guideStep==='rmenu' ? 'ranking'
    : ['pick','find','dname','rname','podium','tabs','rc'].includes(guideStep) ? '__none' : null;
  if(want && g!==want){ beep(200,0.08,'square',0.1); return true; }
  return false;
}
// Gezinme / olay sonrası adım geçişleri.
function guideOnNav(g){
  if(!guideActive) return;
  if(guideStep==='menu' && g==='duel') guideGo(stats.playerName ? 'pick' : 'dname');
  if(guideStep==='uover') g==='upgrades' ? guideGo('uhp') : guideEnd();   // öneri: başka yere giderse rehber biter
  else if(guideStep==='uhp') guideEnd();
  // 'ranking': goRanking → guideRankEnter devralır.
}
function guideOnDuelPick(n){
  if(guideActive==='duel' && guideStep==='pick' && n>=DUEL_SLOTS) setTimeout(()=>{ if(guideStep==='pick') guideGo('find'); }, 350);
}
function guideOnDuelSearch(){ if(guideActive==='duel') guideEnd(); }
function guideOnUpgradeBought(key){
  if(guideActive==='up' && guideStep==='uhp' && key==='hp' && typeof telemetryFt==='function') telemetryFt(7);
  if(guideActive==='up' && guideStep==='uhp') setTimeout(()=>{ if(guideStep==='uhp') guideEnd(); }, 600);
}
