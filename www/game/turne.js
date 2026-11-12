// DJ Turnesi (2.82.0): oyunun tamamı sırayla gelen görevlere bölünür.
// Oyuncunun önünde her an TEK görev vardır ("şimdi ne yapayım?" sorusunun
// cevabı). Görev, oyuncu o işi nerede yaparsa yapsın kendiliğinden tamamlanır,
// ödülü hemen verilir ve sıradaki görev açılır. Görevler 5 sahneye (bölüm)
// ayrılır; her sahnenin sonunda büyük bir ödül (elmas ya da plak) vardır.
// Turne bitince eski 3'lü görev setleri (data.js MISSION_POOL) devam eder;
// turne sürerken onlar gizlidir (iki ayrı görev sistemi aynı anda görünmesin).
//
// Görev türleri (k):
//  'state' : stats'tan okunan mutlak değer (ör. Can kademesi >= 1)
//  'count' : görev açıldığından beri artış (ör. 3 oyun oyna; base açılışta kaydedilir)
//  'run'   : TEK oyunda ulaşılan en iyi değer (oyun içinde canlı da kontrol edilir)
// go: GİT düğmesinin götürdüğü yer (turneGo). past: eski oyuncu ilk kez
// geldiğinde zaten yapmış sayılacak mı (yalnız 'run' görevleri için; diğerleri f'den).
const _tqUp = k=>()=>upgradeLevel(k);
const _tqDuel = k=>()=>(stats.duel && stats.duel[k])||0;
const _tqRunOk = ()=>typeof session!=='undefined' && session && mode==='daily' && !tutorialActive && (state==='play' || state==='over');
const TURNE = [
  {id:'c1', reward:{gems:5}, q:[
    {id:'song1',  k:'state', f:()=>stats.songStage>=1?1:0, tg:1, n:100, ic:'music',     go:'play'},
    {id:'song2',  k:'state', f:()=>stats.songStage>=2?1:0, tg:1, n:150, ic:'music',     go:'play'},
    {id:'hp1',    k:'state', f:_tqUp('hp'),                tg:1, n:200, ic:'heart',     go:'up:hp'},
    {id:'run30',  k:'run',   f:()=>Math.floor(elapsed/60), tg:30, n:150, ic:'hourglass', go:'play', vet:1},
    {id:'games3', k:'count', f:()=>stats.scoreRuns||0,     tg:3, n:200, ic:'replay',    go:'play'},
    {id:'combo10',k:'run',   f:()=>session.streakMax||0,   tg:10, n:200, ic:'flame',    go:'play', vet:1},
  ]},
  {id:'c2', reward:{gems:10}, q:[
    {id:'duel1',  k:'state', f:_tqDuel('games'),           tg:1, n:250, ic:'lightning', go:'duel'},
    {id:'name',   k:'state', f:()=>stats.playerName?1:0,   tg:1, n:100, ic:'trophy',    go:'name'},
    {id:'coin1',  k:'state', f:_tqUp('coinPct'),           tg:1, n:200, ic:'sparkle',   go:'up:coinPct'},
    {id:'login1', k:'state', f:()=>stats.loginClaims||0,   tg:1, n:100, ic:'calendar',  go:'loginstreak'},
    {id:'score500',k:'run',  f:()=>Math.floor(score),      tg:500, n:250, ic:'star',    go:'play', past:()=>stats.best||0},
    {id:'boss1',  k:'state', f:()=>stats.bossesCleared||0, tg:1, n:300, ic:'medal',     go:'play'},
  ]},
  {id:'c3', reward:{theme:'lofichillhop', gems:30}, q:[
    {id:'day2',   k:'state', f:()=>stats.activeDays||1,    tg:2, n:300, ic:'clock',     go:'tomorrow'},
    {id:'hp2',    k:'state', f:_tqUp('hp'),                tg:2, n:300, ic:'heart',     go:'up:hp'},
    {id:'win1',   k:'state', f:_tqDuel('wins'),            tg:1, n:300, ic:'medal',     go:'duel'},
    {id:'skin1',  k:'count', f:()=>((stats.owned.skins||[]).length+(stats.owned.trails||[]).length), tg:1, gems:5, ic:'cart', go:'shop:skins'},
    {id:'season1',k:'state', f:()=>(stats.seasonClaimedFree||[]).length+(stats.seasonClaimedPremium||[]).length, tg:1, n:200, ic:'ticket', go:'battlepass'},
    {id:'run90',  k:'run',   f:()=>Math.floor(elapsed/60), tg:90, n:300, ic:'hourglass', go:'play', vet:1},
  ]},
  {id:'c4', reward:{gems:20}, q:[
    {id:'streak3',k:'state', f:()=>stats.loginStreak||0,   tg:3, n:400, ic:'calendar',  go:'loginstreak'},
    {id:'shield1',k:'state', f:_tqUp('shieldPower'),       tg:1, n:300, ic:'shield',    go:'up:shieldPower'},
    {id:'score1500',k:'run', f:()=>Math.floor(score),      tg:1500, n:400, ic:'star',   go:'play', past:()=>stats.best||0},
    {id:'win3',   k:'state', f:_tqDuel('wins'),            tg:3, n:400, ic:'medal',     go:'duel'},
    {id:'pl10',   k:'state', f:()=>totalPowerLevel(),      tg:10, n:500, ic:'lightning', go:'up'},
    {id:'boss2',  k:'run',   f:()=>session.bossesCleared||0, tg:2, n:500, ic:'flame',   go:'play'},
  ]},
  {id:'c5', reward:{theme:'cosmicsoundwave', gems:60}, q:[
    {id:'pl18',   k:'state', f:()=>totalPowerLevel(),      tg:PRESTIGE_MIN_LEVEL, n:600, ic:'lightning', go:'up'},
    {id:'nova1',  k:'state', f:()=>stats.totalPrestiges||0, tg:1, n:500, ic:'replay',   go:'up:nova'},
    {id:'core1',  k:'state', f:()=>Math.max(0,(stats.coreUnlocked||[]).length-1), tg:1, n:300, ic:'atom', go:'up:core'},
    {id:'perk1',  k:'state', f:()=>(stats.perksOwned||[]).length, tg:1, n:400, ic:'sparkle', go:'up:perk'},
    {id:'heat60', k:'run',   f:()=>(session.heatLevel>0 ? Math.floor(elapsed/60) : 0), tg:60, n:400, ic:'flame', go:'up:heat'},
    {id:'duel10', k:'state', f:_tqDuel('games'),           tg:10, n:500, ic:'lightning', go:'duel'},
  ]},
];
// Güncellemeyle gelen ve en az bu kadar oynamış oyuncu kolay tek-oyun görevlerini (vet) yapmış sayılır.
const TQ_VET_RUNS = 10;
const TURNE_TOTAL = TURNE.reduce((s,c)=>s+c.q.length, 0);

function turneActive(){ return !!(stats.tutorialDone && stats.tq && !stats.tq.end); }
function turneQuest(){ const tq=stats.tq; if(!tq || tq.end) return null; const ch=TURNE[tq.c]; return ch ? ch.q[tq.i] : null; }
function turneDoneCount(){ const tq=stats.tq; if(!tq) return 0; if(tq.end) return TURNE_TOTAL; let n=tq.i; for(let c=0;c<tq.c;c++) n+=TURNE[c].q.length; return n; }
function turneText(q){ return t('tq_'+q.id, {n:q.tg}); }
function turneRewardHTML(q){ return q.gems ? '+'+q.gems+' '+icon('gem') : '+'+q.n+' '+icon('coin'); }
function turneChapReward(ch){
  const r=ch.reward;
  if(r.theme && !stats.owned.themes.includes(r.theme)) return {html:icon('music')+' '+t('tq_rw_theme',{name:t(THEMES[r.theme].nameKey)}), theme:r.theme};
  return {html:'+'+r.gems+' '+icon('gem'), gems:r.gems};
}
// Görevin şu anki değeri. Canlı oyun varsa 'run' görevleri bu oyunu da sayar.
function turneCur(q){
  const tq=stats.tq;
  try{
    if(q.k==='state') return q.f();
    if(q.k==='count') return q.f()-(tq.base||0);
    const live = _tqRunOk() ? q.f() : 0;
    return Math.max(tq.best||0, live);
  }catch(e){ return 0; }
}
function _tqOpen(c, i){
  const tq=stats.tq; tq.c=c; tq.i=i; tq.best=0; tq.base=0;
  const q=turneQuest(); if(q && q.k==='count'){ try{ tq.base=q.f(); }catch(e){} }
}
// İlk kurulum. Turneden önce oynamış oyuncu (güncellemeyle gelen) zaten yaptığı
// görevleri ödülsüz atlar ve ilk yapmadığı görevden başlar.
function turneEnsure(){
  if(!stats.tutorialDone) return false;
  if(stats.tq) return true;
  stats.tq={c:0, i:0, best:0, base:0, end:false};
  _tqOpen(0, 0);
  if((stats.scoreRuns||0)>0 && (stats.songStage||0)>=2){
    stats.tq.mig=1;
    for(let guard=0; guard<TURNE_TOTAL; guard++){
      const q=turneQuest(); if(!q) break;
      let v=0;
      try{ v = q.k==='run' ? (q.past ? q.past() : q.vet && (stats.scoreRuns||0)>=TQ_VET_RUNS ? q.tg : 0) : q.f(); }catch(e){}
      if(v < q.tg) break;
      _tqAdvance(false);
    }
  }
  saveStats();
  return true;
}
// Sıradaki göreve geçer; sahne bittiyse sahne ödülü (grant=false: sessiz atlama).
function _tqAdvance(grant){
  const tq=stats.tq, ch=TURNE[tq.c];
  if(tq.i+1 < ch.q.length){ _tqOpen(tq.c, tq.i+1); return; }
  if(grant){
    const r=turneChapReward(ch);
    if(r.theme) stats.owned.themes.push(r.theme); else addGems(r.gems);
    tq.chapPend=(tq.chapPend||[]).concat([{c:tq.c, theme:r.theme||'', gems:r.theme ? 0 : r.gems}]);
  }
  if(tq.c+1 < TURNE.length) _tqOpen(tq.c+1, 0);
  else { tq.end=true; tq.c=TURNE.length-1; tq.i=TURNE[tq.c].q.length; }
}
let _tqBusy=false, _tqJust=[];
// Biten görev(ler)i tamamlar. Her yerden çağrılabilir (saveStats sonrası, oyun içi tik, oyun sonu).
function turneCheck(){
  if(_tqBusy || !stats.tutorialDone || (typeof tutorialActive!=='undefined' && tutorialActive)) return;
  if(!turneEnsure() || stats.tq.end) return;
  _tqBusy=true;
  let any=false;
  for(let guard=0; guard<TURNE_TOTAL; guard++){
    const q=turneQuest(); if(!q || turneCur(q) < q.tg) break;
    any=true;
    if(q.gems) addGems(q.gems); else addNotes(q.n);
    _tqJust.push(q.id);
    if(typeof session!=='undefined' && session && (state==='play' || state==='over')) (session.tqDone=session.tqDone||[]).push(q.id);
    queueToast(icon('check')+' '+t('tq_done_toast',{text:turneText(q)})+' '+turneRewardHTML(q));
    if(state==='play') _tqHudFlash={q, until:performance.now()+2600};
    _tqAdvance(true);
  }
  if(any){
    beep(880,0.1,'triangle',0.12); beep(1320,0.14,'sine',0.1);
    if(typeof trackEvent==='function') trackEvent('tq_'+turneDoneCount(), true);
    saveStats(); refreshWallet();
    turneRender();
    if(state!=='play') setTimeout(turneChapterShow, 900);
  }
  _tqBusy=false;
}
// Oyun sonu (Skor Avı): bu oyunun en iyi değeri 'run' görevine yazılır.
function turneRunEnd(){
  if(!turneActive()) return;
  const q=turneQuest();
  if(q && q.k==='run'){ try{ stats.tq.best=Math.max(stats.tq.best||0, q.f()); }catch(e){} }
  turneCheck();
  setTimeout(turneChapterShow, 1200);
}
// Oyun içi görev şeridi (HUD): sağ üstte, cüzdanın altında. Görev oyunda
// tamamlanırsa 2.6 sn yeşil "tamam + ödül" gösterir, sonra sıradaki göreve geçer.
let _tqHudFlash=null, _tqHudKey='';
function turneHud(){
  const el=document.getElementById('tqHud'); if(!el) return;
  const on = mode==='daily' && !tutorialActive && state==='play' && stats.tq && turneActive();
  if(!on){ if(_tqHudKey!=='off'){ el.classList.remove('show','done'); _tqHudKey='off'; } return; }
  const now=performance.now();
  if(_tqHudFlash && now>_tqHudFlash.until) _tqHudFlash=null;
  const f=_tqHudFlash, q=f ? f.q : turneQuest(); if(!q) return;
  const cur = f ? q.tg : Math.min(q.tg, Math.floor(turneCur(q)));
  const key=(f?'F':'')+q.id+'|'+cur;
  if(key===_tqHudKey) return; _tqHudKey=key;
  el.classList.add('show'); el.classList.toggle('done', !!f);
  el.querySelector('.tqhIc').innerHTML=icon(f ? 'check' : q.ic);
  document.getElementById('tqhLbl').innerHTML = f ? t('tq_hud_done')+' '+turneRewardHTML(q)
    : t('tq_hud_lbl')+(q.tg>1 ? ' · '+cur+'/'+q.tg : '');
  document.getElementById('tqhTxt').textContent=turneText(q);
  document.getElementById('tqhFill').style.transform='scaleX('+(q.tg>0 ? cur/q.tg : 0)+')';
  if(!f && el._pop!==q.id){ el._pop=q.id; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
}
let _tqTick=0;
function turneTick(dt){
  if((_tqTick+=dt) < 30) return; _tqTick=0;
  const q=turneQuest(); if(q && q.k!=='count') turneCheck();
}

// ---- Arayüz --------------------------------------------------------------
// Kart: menüde (oyna düğmelerinin altında) ve oyun sonunda aynı bileşen.
function turneCardHTML(where){
  const q=turneQuest(); if(!q) return '';
  const tq=stats.tq, ch=TURNE[tq.c], cur=Math.min(turneCur(q), q.tg), frac=q.tg>0 ? cur/q.tg : 0;
  const dots=ch.q.map((_,i)=>`<i class="${i<tq.i?'on':i===tq.i?'cur':''}"></i>`).join('');
  const just=(where==='over' && typeof session!=='undefined' && session && session.tqDone) || [];
  const justHTML=just.map(id=>{ const jq=TURNE.flatMap(c=>c.q).find(x=>x.id===id); return jq ? `<div class="tqJust">${icon('check')} <span>${turneText(jq)}</span><b>${turneRewardHTML(jq)}</b></div>` : ''; }).join('');
  const goLbl = q.go==='tomorrow' ? icon('clock')+' '+t('tq_go_tomorrow')
    : q.go==='play' ? icon('play')+' '+t('tq_go_play')
    : t('tq_go')+' ›';
  return justHTML+`<div class="tqTop"><span class="tqCh">${icon('flag')} ${t('tq_stage',{n:tq.c+1})} · ${t('tq_ch_'+ch.id)}</span><span class="tqDots">${dots}</span></div>`
    +`<div class="tqMain"><i class="tqIc" style="--p:${frac.toFixed(3)}">${icon(q.ic)}</i>`
    +`<div class="tqBody"><div class="tqTxt">${turneText(q)}</div>`
    +`<div class="tqSub">${q.tg>1 ? `<span class="tqBar"><i style="transform:scaleX(${frac.toFixed(3)})"></i></span><b>${cur}/${q.tg}</b>` : ''}<span class="tqRw">${turneRewardHTML(q)}</span></div></div>`
    // Oyun sonunda "oyna" görevinin düğmesi yok: hemen altında büyük TEKRAR var.
    +(where==='over' && q.go==='play' ? '' : `<button class="tqGo${q.go==='tomorrow'?' wait':''}" data-tqgo="1">${goLbl}</button>`)+`</div>`;
}
function turneRender(){
  const on=turneActive() && !(typeof tutorialActive!=='undefined' && tutorialActive);
  for(const where of ['menu','over']){
    const el=document.getElementById(where==='menu' ? 'tqMenu' : 'tqOver'); if(!el) continue;
    const show = on && (where==='menu' || (mode==='daily' && typeof session!=='undefined' && session));
    el.style.display = show ? '' : 'none';
    if(!show) continue;
    el.innerHTML=turneCardHTML(where);
    if(_tqJust.length){ el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
  }
  _tqJust=[];
  if(state==='turne') renderTurneScreen();
}
function turneCardClick(e, where){
  e.stopPropagation();
  if(e.target.closest('[data-tqgo]')) turneGo(where);
  else goTurne();
  beep(560,0.05,'sine',0.08);
}
// GİT: görevin yapıldığı yere götürür ve ilgili düğmeyi birkaç saniye parlatır.
function turneGo(where){
  const q=turneQuest(); if(!q) return;
  if(typeof guideActive!=='undefined' && guideActive) return;
  const g=q.go;
  if(g==='tomorrow'){ queueToast(icon('clock')+' '+t('tq_tomorrow_toast')); return; }
  if(g==='play'){ if(where==='over') startGame(); else startGame('daily'); return; }
  if(g==='duel'){
    if(typeof duelUnlocked==='function' && !duelUnlocked()){ queueToast(t('duel_locked_toast',{n:DUEL_UNLOCK_RUNS-(stats.scoreRuns||0)})); return; }
    goDuel(); _tqHint('#duelFindBtn'); return;
  }
  if(g==='name'){ openNameDialog(()=>{ turneCheck(); turneRender(); }); return; }
  if(g==='loginstreak'){ goLoginStreak(); return; }
  if(g==='battlepass'){ goBattlepass(); return; }
  if(g==='shop:skins'){ goShop(); shopTab='skins'; renderShopTab(); return; }
  if(g.startsWith('up')){
    const sub=g.split(':')[1]||'';
    goUpgrades();
    const tab = sub==='core' ? 'core' : sub==='perk' ? 'perk' : sub==='heat' ? 'heat' : 'tier';
    if(upgradesTab!==tab){ upgradesTab=tab; renderUpgradesTab(); }
    if(sub==='nova') _tqHint('#resetProgressBtn');
    else if(sub && tab==='tier') _tqHint('#upgradesGrid [data-key="'+sub+'"]');
    else if(tab==='heat') _tqHint('#heatGrid');
  }
}
function _tqHint(sel){
  setTimeout(()=>{
    const el=document.querySelector(sel); if(!el) return;
    // scrollIntoView tüm katmanı (#overlay) kaydırabiliyordu: yalnız ekranın kendi listesi kaydırılır.
    const sb=el.closest('.screenBody');
    if(sb){ const r=el.getBoundingClientRect(), br=sb.getBoundingClientRect(); sb.scrollTop += (r.top+r.height/2) - (br.top+br.height/2); }
    el.classList.remove('tqHint'); void el.offsetWidth; el.classList.add('tqHint');
    setTimeout(()=>el.classList.remove('tqHint'), 4200);
  }, 250);
}

// Turne ekranı: sahnenin tüm görevleri (bitenler, şimdiki, sıradakiler) ve sonraki sahneler.
function goTurne(){
  if(!turneEnsure()) return;
  state='turne'; setHud(false); showScreen('turne'); renderTurneScreen();
  const sb=document.querySelector('#screen-turne .screenBody'); if(sb) sb.scrollTop=0;
}
function renderTurneScreen(){
  const body=document.getElementById('turneBody'); if(!body) return;
  const tq=stats.tq; if(!tq) return;
  const done=turneDoneCount();
  let h=`<div class="tqHero"><div class="tqHeroTop"><span>${t('tq_progress')}</span><b>${done}/${TURNE_TOTAL}</b></div>`
    +`<div class="tqHeroBar"><i style="transform:scaleX(${(done/TURNE_TOTAL).toFixed(3)})"></i></div>`
    +`<div class="tqHeroSub">${tq.end ? t('tq_all_done') : t('tq_intro')}</div></div>`;
  TURNE.forEach((ch, c)=>{
    const past = tq.end || c<tq.c, now = !tq.end && c===tq.c, cr=turneChapReward(ch);
    h+=`<div class="tqStage${past?' past':now?' now':' next'}">`
      +`<div class="tqStageHead"><span class="tqStageN">${t('tq_stage',{n:c+1})}</span><b>${t('tq_ch_'+ch.id)}</b>`
      +`<span class="tqStageRw">${past ? icon('check') : (now ? '' : icon('lock')+' ')+cr.html}</span></div>`;
    if(now){
      ch.q.forEach((q, i)=>{
        const st = i<tq.i ? 'done' : i===tq.i ? 'cur' : 'lock';
        const cur = st==='cur' ? Math.min(turneCur(q), q.tg) : 0, frac=q.tg ? cur/q.tg : 0;
        h+=`<div class="tqRow ${st}"><i class="tqRowIc">${icon(st==='done' ? 'check' : st==='lock' ? 'lock' : q.ic)}</i>`
          +`<div class="tqRowBody"><div class="tqRowTxt">${turneText(q)}</div>`
          +(st==='cur' && q.tg>1 ? `<div class="tqSub"><span class="tqBar"><i style="transform:scaleX(${frac.toFixed(3)})"></i></span><b>${cur}/${q.tg}</b></div>` : '')
          +`</div><span class="tqRowRw">${turneRewardHTML(q)}</span>`
          +(st==='cur' ? `<button class="tqGo small${q.go==='tomorrow'?' wait':''}" data-tqgo="1">${q.go==='tomorrow' ? icon('clock') : q.go==='play' ? icon('play') : t('tq_go')+' ›'}</button>` : '')
          +`</div>`;
      });
      h+=`<div class="tqStageFoot">${icon('gift')} ${t('tq_stage_reward')}: <b>${cr.html}</b></div>`;
    }
    h+=`</div>`;
  });
  body.innerHTML=h;
  body.querySelectorAll('[data-tqgo]').forEach(b=>b.addEventListener('click', e=>{ e.stopPropagation(); turneGo('screen'); beep(560,0.05,'sine',0.08); }));
}

// Sahne bitti kutlaması (menüde ya da oyun sonunda; oyun sırasında bitmişse sonra).
function turneChapterShow(){
  const tq=stats.tq; if(!tq || !(tq.chapPend||[]).length) return;
  if(state==='play' || state==='pause') return;
  const ov=document.getElementById('tqOv'); if(!ov || ov.style.display==='flex') return;
  // Başka bir pencere (DJ sorusu, anket, isim) açıksa biraz sonra tekrar dene.
  const busy=['purchaseConfirmOverlay','fbOverlay','nameOverlay','kvkkOverlay'].some(id=>{ const el=document.getElementById(id); return el && getComputedStyle(el).display!=='none'; });
  if(busy || (typeof narratorIsTyping==='function' && narratorIsTyping()) || (typeof guideActive!=='undefined' && guideActive)){ setTimeout(turneChapterShow, 2000); return; }
  const p=tq.chapPend.shift(); saveStats();
  const c=p.c, ch=TURNE[c];
  document.getElementById('tqOvStage').textContent=t('tq_stage',{n:c+1});
  document.getElementById('tqOvName').textContent=t('tq_ch_'+ch.id);
  document.getElementById('tqOvDone').textContent=t('tq_stage_done');
  document.getElementById('tqOvReward').innerHTML = p.theme ? icon('music')+' '+t('tq_rw_theme',{name:t(THEMES[p.theme].nameKey)}) : '+'+p.gems+' '+icon('gem');
  const nx=TURNE[c+1];
  document.getElementById('tqOvNext').innerHTML = nx ? t('tq_next_stage',{name:t('tq_ch_'+nx.id)}) : t('tq_all_done');
  const yes=document.getElementById('tqOvYes'), no=document.getElementById('tqOvNo');
  const canWear = !!p.theme && cfg.theme!==p.theme;
  yes.innerHTML = canWear ? icon('music')+' '+t('tq_wear') : icon('check')+' '+t('tq_ok');
  no.style.display = canWear ? '' : 'none'; no.textContent=t('btn_later');
  const close=()=>{ ov.style.display='none'; setTimeout(turneChapterShow, 300); };
  yes.onclick=e=>{ e.stopPropagation(); if(canWear) applyTheme(p.theme); close(); };
  no.onclick=e=>{ e.stopPropagation(); close(); };
  ov.style.display='flex';
  beep(660,0.12,'triangle',0.12); setTimeout(()=>beep(990,0.16,'triangle',0.12),140); setTimeout(()=>beep(1320,0.22,'sine',0.1),300);
}

document.getElementById('tqMenu').addEventListener('click', e=>turneCardClick(e,'menu'));
document.getElementById('tqOver').addEventListener('click', e=>turneCardClick(e,'over'));
