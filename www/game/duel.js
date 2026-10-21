// DÜELLO — 90 saniyelik 1'e 1 maç, "hayalet" (asenkron) rakiple.
//
// Her oyuncu kendi telefonunda, AYNI tohumlu haritada oynar. Rakip, gerçek bir
// oyuncunun daha önce oynadığı düello maçının kaydıdır (Firestore duelGhosts);
// oyuncu yoksa ya da antrenmanda, seviyesine göre üretilmiş bir bottur. Kayıt
// maç boyunca oynatılır: rakibin puanı/canı canlı akar, rakibin gönderdiği
// saldırılar tam o anlarda bize gelir. Bizim gönderdiğimiz saldırılar kayda
// dokunamayacağı için rakibin puanından düşer (kalkanı varsa engellenir).
// Bu sayede sunucu kiralamadan, oyuncu azken bile her an rakip bulunur.
//
// Adalet: kalıcı yükseltmeler, Çekirdek Ağacı, Süpernova yetenekleri, Isı ve
// takviyeler KAPALI (metaOff); herkes aynı canla başlar. Fark, maçtan önce
// seçilen 3 düello yeteneğiyle (DUEL_PERKS — herkese açık) gelir; "Maç Ara"ya
// basınca yuvalar kilitlenir. Rütbe: Elo (gizli) → görünür kademe.
const DUEL_SECS = 90, DUEL_HP = 5, DUEL_SLOTS = 3, DUEL_SAMPLE = 30;   // 30 kare = 0.5 sn
const DUEL_PERKS = [
  {id:'dpStriker', icon:'lightning'},   // saldırı balonu daha sık
  {id:'dpGuard',   icon:'shield'},      // maça kalkanla başla
  {id:'dpMelody',  icon:'music'},       // notalar +%25 puan
  {id:'dpMirror',  icon:'replay'},      // ilk gelen saldırıyı geri yolla
  {id:'dpHeart',   icon:'heart'},       // +1 can
  {id:'dpMagnet',  icon:'magnet'},      // komşu halkadaki notayı da al
  {id:'dpFocus',   icon:'target'},      // gelen saldırılar %40 kısa
];
// Müzik sektörünün plak sertifikaları: Demo → Single → Altın → Platin → Elmas → Efsane.
const DUEL_TIERS = [
  {id:'demo',     min:0,    col:'#9aa6b5'},
  {id:'single',   min:1100, col:'#7fe8ff'},
  {id:'gold',     min:1300, col:'#ffc94a'},
  {id:'platinum', min:1500, col:'#dfe8f5'},
  {id:'diamond',  min:1700, col:'#9fe6ff'},
  {id:'legend',   min:1900, col:'#ff7ae0'},
];
// Antrenman rakipleri (oyuncu yokken de oynanabilsin; "Maç Ara" da gerçek
// kayıt bulamazsa en yakın seviyedekini getirir).
const DUEL_BOTS = [
  {id:'b1', name:'Acemi Kaset',   rating:900,  skill:0.15},
  {id:'b2', name:'Demo Deniz',    rating:1080, skill:0.32},
  {id:'b3', name:'Single Selin',  rating:1280, skill:0.5},
  {id:'b4', name:'Altın Kerem',   rating:1480, skill:0.68},
  {id:'b5', name:'Platin Ayla',   rating:1700, skill:0.85},
];

let duelMatch = null;      // {seed, opp, perks, ranked}
let _duelSel = [];         // lobide seçili yetenekler
function duelState(){
  if(!stats.duel) stats.duel={rating:1000, wins:0, losses:0, streak:0, perks:['dpGuard','dpStriker','dpMelody']};
  return stats.duel;
}
function duelTier(r){ let t=DUEL_TIERS[0]; for(const x of DUEL_TIERS) if(r>=x.min) t=x; return t; }
function duelTierName(r){ return t('duel_tier_'+duelTier(r).id); }
function duelHas(id){ return !!(duelMatch && duelMatch.perks.includes(id)); }

// ---- Lobi ----
function goDuel(){
  state='duel'; setHud(false); showScreen('duel');
  _duelSel = (duelState().perks||[]).slice(0, DUEL_SLOTS);
  renderDuelLobby();
}
function renderDuelLobby(){
  const d=duelState(), tier=duelTier(d.rating);
  document.getElementById('duelRankCard').innerHTML =
    `<div class="drBadge" style="--tc:${tier.col}">${icon('trophy')}</div>
     <div class="drInfo"><b>${duelTierName(d.rating)}</b><span>${dsetEsc(playerName())}</span>
     <small>${t('duel_rating',{n:Math.round(d.rating)})} · ${t('duel_record',{w:d.wins, l:d.losses})}</small></div>`;
  const slots=document.getElementById('duelSlots');
  slots.innerHTML='';
  for(let i=0;i<DUEL_SLOTS;i++){
    const id=_duelSel[i], p=id && DUEL_PERKS.find(x=>x.id===id);
    const el=document.createElement('button'); el.type='button';
    el.className='perkSlot '+(p?'filled':'empty');
    el.innerHTML = p ? `<span class="psIcon">${icon(p.icon)}</span><span class="psName">${t(p.id+'_name')}</span>`
                     : `<span class="psIcon">+</span><span class="psName">${t('perk_slot_empty')}</span>`;
    if(p) el.addEventListener('click', ()=>{ _duelSel=_duelSel.filter(x=>x!==id); beep(400,0.08,'sine',0.1); renderDuelLobby(); });
    slots.appendChild(el);
  }
  const grid=document.getElementById('duelPerkGrid'); grid.innerHTML='';
  DUEL_PERKS.forEach(p=>{
    const on=_duelSel.includes(p.id);
    const card=document.createElement('div');
    card.className='shopCard boostCard perkCard'+(on?' equipped':'');
    card.innerHTML=`<div class="boostIcon">${icon(p.icon)}</div><div class="cn">${t(p.id+'_name')}</div><div class="bdesc upDesc">${t(p.id+'_desc')}</div>`
      +(on?`<div class="price ok">${icon('check')} ${t('perk_equipped')}</div>`:`<div class="price">${t('perk_tap_equip')}</div>`);
    card.addEventListener('click', ()=>{
      if(on) _duelSel=_duelSel.filter(x=>x!==p.id);
      else if(_duelSel.length<DUEL_SLOTS) _duelSel.push(p.id);
      else { queueToast(t('perk_slots_full_toast')); beep(200,0.1,'square',0.1); return; }
      beep(on?400:800,0.08,'sine',0.1); renderDuelLobby();
    });
    grid.appendChild(card);
  });
  const bots=document.getElementById('duelBots'); bots.innerHTML='';
  DUEL_BOTS.forEach(b=>{
    const el=document.createElement('button'); el.type='button'; el.className='duelBotBtn';
    el.innerHTML=`<b>${dsetEsc(b.name)}</b><small>${duelTierName(b.rating)}</small>`;
    el.addEventListener('click', ()=>duelStartSearch({bot:b, ranked:false}));
    bots.appendChild(el);
  });
}

// ---- Eşleşme ----
let _duelSearching=false;
async function duelStartSearch(opts){
  if(_duelSearching) return;
  if(_duelSel.length<DUEL_SLOTS){ queueToast(t('duel_pick_slots',{n:DUEL_SLOTS})); beep(200,0.1,'square',0.1); return; }
  _duelSearching=true;
  // Yuvalar kilitlenir: maç bu seçimle oynanır.
  const perks=_duelSel.slice(); const d=duelState(); d.perks=perks.slice(); saveStats();
  const ov=document.getElementById('duelSearch'); ov.classList.add('show');
  document.getElementById('duelSearchPerks').innerHTML = perks.map(id=>`<span>${icon(DUEL_PERKS.find(p=>p.id===id).icon)} ${t(id+'_name')}</span>`).join('');
  const ranked = opts.ranked!==false;
  let opp=null;
  const t0=Date.now();
  try{
    if(!opts.bot && ranked && window.DuelCloud){
      const list = await DuelCloud.find(Math.round(d.rating), 160).catch(()=>[]);
      const mine = stats.myUid;
      const pool = list.filter(g=>g.uid!==mine);
      if(pool.length) opp = Object.assign(pool[Math.floor(Math.random()*pool.length)], {kind:'ghost'});
    }
  }catch(e){}
  if(!opp){
    const b = opts.bot || DUEL_BOTS.reduce((a,x)=>Math.abs(x.rating-d.rating)<Math.abs(a.rating-d.rating)?x:a);
    opp = duelMakeBot(b);
  }
  // Arama hissi: en az ~1.6 sn.
  await new Promise(r=>setTimeout(r, Math.max(0, 1600-(Date.now()-t0))));
  ov.classList.remove('show'); _duelSearching=false;
  duelMatch = {seed: opp.seed, opp, perks, ranked};
  duelShowVs();
}
// Maç ortasında çıkış (duraklat → menü): sıralı maçta hükmen yenilgi —
// kaybederken çıkıp puanı korumak olmasın.
function duelAbort(){
  if(!(typeof mode!=='undefined' && mode==='duel')) return;
  metaOff=false;
  const hud=document.getElementById('duelHud'); if(hud) hud.classList.remove('show');
  document.body.classList.remove('duel');
  const m=duelMatch;
  if(m && !m.done && m.ranked && elapsed>60){
    m.done=true;
    const d=duelState(), exp=1/(1+Math.pow(10,((m.opp.rating||1000)-d.rating)/400));
    d.rating=Math.max(0, d.rating+Math.min(-6, Math.round(32*(0-exp)))); d.losses++; d.streak=0; saveStats();
    queueToast(t('duel_forfeit'));
  }
  if(m) m.done=true;
}

// Bot maçı: beceri değerine göre üretilen, maçtan maça değişen kayıt.
function duelMakeBot(b){
  const seed = (Math.random()*1e9)|0, r=mulberry32(seed ^ 0x5eed);
  const skill=b.skill, samples=[], attacks=[];
  let score=0, combo=1, hp=DUEL_HP, died=null, nextAtk=6+r()*6;
  const themes=Object.keys(THEMES), skins=SKINS.filter(s=>s.img);
  for(let i=0;i<=DUEL_SECS*2;i++){
    const tt=i*0.5;
    if(died==null && i>0){
      const notes = r() < (0.55+skill*0.4) ? 1 + (r()<skill*0.6?1:0) : 0;
      for(let k=0;k<notes;k++){ combo++; score += Math.min(combo, 40); }
      // Darbe: acemi bot 90 sn'de ~3 kez (bazen düşer), usta bot nadiren.
      if(r() < (0.017-skill*0.014)){ hp -= r()<0.8 ? 1 : 2; combo=1; if(hp<=0){ hp=0; died=tt; } }
      if(tt>=nextAtk){ if(r() < 0.35+skill*0.55) attacks.push(+tt.toFixed(1)); nextAtk = tt + 12 - skill*4 + r()*4; }
    }
    samples.push([+tt.toFixed(1), Math.round(score*100)/100, hp, 0]);
  }
  // Puan ölçeği: otomatik oyuncu ölçümünde 90 sn'lik düello ~10-45 bin puan
  // (kombo büyüdükçe nota puanı artıyor). Bot eğrisi beceriye göre hedef bir
  // final puanına ölçeklenir (±%20): acemi ~3.6 bin … platin ~22 bin.
  const target = (2500 + 26000*Math.pow(skill, 1.6)) * (0.8 + r()*0.4);
  const raw = samples[samples.length-1][1] || 1, k = target/raw;
  samples.forEach(sm=>{ sm[1] = Math.round(sm[1]*k*100)/100; });
  const perks = DUEL_PERKS.map(p=>p.id).sort(()=>r()-0.5).slice(0,3);
  return {kind:'bot', name:b.name, uid:'bot_'+b.id, rating:b.rating, seed, samples, attacks, died, perks,
    theme:themes[Math.floor(r()*themes.length)], skin:(skins[Math.floor(r()*skins.length)]||{}).id||'teal'};
}

// ---- VS ekranı ----
function duelRecordHtml(themeKey, skinId, cls){
  const lbl = (typeof THEME_LABEL_IMG!=='undefined' && THEME_LABEL_IMG[themeKey]) ? THEME_LABEL_IMG[themeKey].src : '';
  const sk = SKINS.find(s=>s.id===skinId) || SKINS[0];
  return `<div class="duelRec ${cls||''}"><div class="duelDisc">${lbl?`<img src="${lbl}" alt="">`:''}</div>${sk.img?`<img class="duelPena" src="${sk.img}" alt="">`:''}</div>`;
}
function duelShowVs(){
  const m=duelMatch, o=m.opp, d=duelState();
  state='duelvs'; showScreen('duelvs');
  const perkList=(ids)=>ids.map(id=>{ const p=DUEL_PERKS.find(x=>x.id===id); return p?`<span title="${t(id+'_name')}">${icon(p.icon)}</span>`:''; }).join('');
  document.getElementById('duelVsBody').innerHTML =
    `<div class="vsSide me">${duelRecordHtml(cfg.theme, cfg.skin, 'spin')}<b>${dsetEsc(playerName())}</b><small>${duelTierName(d.rating)}</small><div class="vsPerks">${perkList(m.perks)}</div></div>
     <div class="vsMid">VS</div>
     <div class="vsSide opp">${duelRecordHtml(o.theme, o.skin, 'spin rev')}<b>${dsetEsc(safeOtherName(o.name, o.uid))}</b><small>${duelTierName(o.rating)}${o.kind==='bot'?' · BOT':''}</small><div class="vsPerks">${perkList(o.perks||[])}</div></div>`;
  beep(220,0.25,'sawtooth',0.08); beep(330,0.25,'sawtooth',0.07);
  let n=3; const cd=document.getElementById('duelVsCount'); cd.textContent=n;
  const tick=()=>{ n--; if(n<=0){ cd.textContent=''; startGame('duel'); return; } cd.textContent=n; beep(n===1?660:440,0.08,'sine',0.08); setTimeout(tick, 800); };
  setTimeout(tick, 1400);
}

// ---- Maç içi ----
let duelOrbCd=0, _duelRec=null, _duelOpp=null;
function duelSetup(){
  const m=duelMatch;
  metaOff = true;
  maxHp = DUEL_HP + (duelHas('dpHeart')?1:0); hp = maxHp;
  player.shieldHits = duelHas('dpGuard') ? 1 : 0;
  session.duelNoteMul = duelHas('dpMelody') ? 1.25 : 1;
  session.mirrorLeft = duelHas('dpMirror') ? 1 : 0;
  duelOrbCd = 360;
  _duelRec = {samples:[], attacks:[], next:0, died:null, sent:0, blocked:0};
  _duelOpp = {i:0, atk:0, penalty:0, hits:0, score:0, hp:DUEL_HP, shield:0, ko:null, popT:0, popTxt:''};
  const o=m.opp;
  document.getElementById('duelOppName').textContent = safeOtherName(o.name, o.uid);
  document.getElementById('duelOppRec').innerHTML = duelRecordHtml(o.theme, o.skin, 'spin rev');
  document.getElementById('duelHud').classList.add('show');
  document.body.classList.add('duel');
}
function duelOrbReady(){ return mode==='duel' && duelOrbCd<=0 && !items.some(it=>it.alive && it.type==='attackOrb'); }
function duelOrbGap(){ return (duelHas('dpStriker') ? 480 : 720) + rnd()*180; }
// Saldırı balonu alındı → rakibe saldırı.
function duelOnOrb(x,y){
  burst(x,y,'#ff9a3c',20,5); burst(x,y,'#ffffff',8,3); vibrate(20);
  beep(500,0.08,'square',0.08,true); beep(900,0.12,'sawtooth',0.07,true);
  duelSendAttack(false);
}
function duelSendAttack(reflected){
  const o=duelMatch.opp, op=_duelOpp, tt=elapsed/60;
  _duelRec.attacks.push(+tt.toFixed(1)); _duelRec.sent++;
  const s=duelOppSample(tt);
  if(s && s[3]>0){ op.popTxt=t('duel_blocked'); op.popT=60; _duelRec.blocked++; return; }
  const cur = Math.max(0, (s?s[1]:0) - op.penalty);
  const dmg = Math.round((cur*0.06 + 25)*100)/100;
  op.penalty += dmg; op.hits++;
  op.popTxt = (reflected ? '↩ ' : '')+'−'+Math.round(dmg); op.popT=70;
  showFlash(t(reflected?'duel_reflected':'duel_attack_out'), 40, null, 'melody');
}
// Rakipten gelen saldırı: kısa Geri Sar / Karartma ya da cızırtı sürüsü.
function duelReceiveAttack(){
  if(player.shieldHits>0){ player.shieldHits--; showFlash(t('duel_blocked'), 40); beep(300,0.15,'square',0.1,true); return; }
  if(session.mirrorLeft>0){ session.mirrorLeft--; duelSendAttack(true); return; }
  const kinds=['rewind','dark','swarm'], k=kinds[Math.floor(rnd()*kinds.length)];
  const dur = Math.round(210*(duelHas('dpFocus')?0.6:1));
  vibrate([30,30,30]);
  if(k==='swarm'){
    showFlash(t('duel_attack_in_swarm'), 60, null, 'risk');
    for(let i=0;i<3;i++){
      const ang=normAng(player.ang+1.2+i*0.45);
      for(let tries=0;tries<3;tries++){ const ring=Math.floor(rnd()*NUM_RINGS); if(!pinchAt(ring, ang)){ spawnItem(ang, ring, true); break; } }
    }
    beep(160,0.3,'sawtooth',0.12,true); return;
  }
  if(session.risk) endRisk();
  session.risk = {type:k==='rewind'?'riskRewind':'riskDark', k, t:dur, dur, clean:false, attack:true, tick:4};
  showFlash(t('duel_attack_in_'+k), 60, t('risk_'+k+'_flash'), 'risk');
  if(k==='rewind'){ showRewindHint(); beep(900,0.15,'sawtooth',0.06,true); beep(450,0.2,'sawtooth',0.06,true); }
  else beep(200,0.35,'sine',0.13,true);
  if(typeof Music!=='undefined' && Music.setFx) Music.setFx(k);
}
function duelOppSample(tt){
  const sm=duelMatch.opp.samples; if(!sm || !sm.length) return null;
  let i=Math.min(sm.length-1, Math.max(0, Math.floor(tt*2)));
  return sm[i];
}
function duelOppScore(tt){ const s=duelOppSample(tt); return Math.max(0, (s?s[1]:0) - _duelOpp.penalty); }
function duelTick(dt){
  if(duelOrbCd>0) duelOrbCd-=dt;
  const tt=elapsed/60, o=duelMatch.opp, op=_duelOpp;
  // Rakibin saldırıları
  while(op.atk < (o.attacks||[]).length && o.attacks[op.atk] <= tt){ op.atk++; duelReceiveAttack(); }
  // Kayıt (0.5 sn'de bir)
  if(elapsed >= _duelRec.next){
    _duelRec.next += DUEL_SAMPLE;
    _duelRec.samples.push([+tt.toFixed(1), Math.round(score*100)/100, hp, player.shieldHits>0?1:0]);
  }
  if(op.popT>0) op.popT-=dt;
  // Rakip nakavt oldu mu?
  if(o.died!=null && tt>=o.died && op.ko==null){ op.ko=tt; duelEnd('oppko'); }
}
let _duelHudT=0;
function duelHudSync(){
  if(mode!=='duel' || !duelMatch || !_duelOpp) return;
  const tt=elapsed/60, s=duelOppSample(tt), op=_duelOpp;
  const sc=duelOppScore(tt);
  const el=document.getElementById('duelOppScore'), txt=sc.toFixed(2);
  if(el.textContent!==txt) el.textContent=txt;
  const hpv = s ? s[2] : DUEL_HP;
  const hb=document.getElementById('duelOppHp'); const w=Math.max(0,hpv)/DUEL_HP;
  if(hb.dataset.w!==String(w)){ hb.dataset.w=String(w); hb.style.transform='scaleX('+w+')'; }
  const pop=document.getElementById('duelOppPop');
  const show=op.popT>0;
  if(pop.dataset.on!==String(show)){ pop.dataset.on=String(show); pop.classList.toggle('show', show); }
  if(show && pop.textContent!==op.popTxt) pop.textContent=op.popTxt;
  const lead=document.getElementById('duelHud'); lead.classList.toggle('ahead', score>=sc);
}
// Maç biter: süre doldu / biz düştük / rakip düştü.
function duelEnd(reason){
  if(mode!=='duel' || state!=='play') return;
  gameOver(reason);
}
function duelGameOver(reason){
  state='over';
  metaOff=false;
  document.getElementById('duelHud').classList.remove('show');
  document.body.classList.remove('duel');
  if(typeof hideRiskFx==='function') hideRiskFx();
  const m=duelMatch, o=m.opp, tt=elapsed/60;
  const myScore=Math.round(score*100)/100, oppScore=Math.round(duelOppScore(Math.min(tt, DUEL_SECS))*100)/100;
  const iDied = hp<=0, oppDied = _duelOpp.ko!=null;
  let win;
  if(iDied && !oppDied) win=false;
  else if(oppDied && !iDied) win=true;
  else win = myScore >= oppScore;
  if(!iDied && !oppDied && myScore===oppScore) win=true;
  // Rütbe (Elo)
  const d=duelState(), before=d.rating;
  let delta=0;
  if(m.ranked){
    const exp = 1/(1+Math.pow(10,((o.rating||1000)-d.rating)/400));
    delta = Math.round(32*((win?1:0)-exp));
    if(win && delta<8) delta=8; if(!win && delta>-6) delta=-6;
    d.rating = Math.max(0, d.rating+delta);
    if(win){ d.wins++; d.streak=(d.streak||0)+1; } else { d.losses++; d.streak=0; }
  }
  // Küçük nota ödülü (maç başına), kaydı yükle.
  const reward = m.ranked ? (win?40:12) : (win?10:3);
  addNotes(reward);
  _duelRec.samples.push([+Math.min(tt,DUEL_SECS).toFixed(1), myScore, Math.max(0,hp), player.shieldHits>0?1:0]);
  if(iDied) _duelRec.died=+tt.toFixed(1);
  saveStats();
  m.done = true;
  // 10 sn'den kısa maçlar rakip havuzuna girmez (anlamlı bir kayıt değil).
  if(m.ranked && window.DuelCloud && _duelRec.samples.length>20){
    DuelCloud.upload({seed:m.seed, name:playerName(), rating:Math.round(before), theme:cfg.theme, skin:cfg.skin,
      perks:m.perks, samples:_duelRec.samples.slice(0,200), attacks:_duelRec.attacks.slice(0,40), died:_duelRec.died, score:myScore})
      .then(uid=>{ if(uid) stats.myUid=uid; }).catch(()=>{});
  }
  // Sonuç ekranı
  setHud(false); showScreen('duelover');
  const tierAfter=duelTier(d.rating), tierBefore=duelTier(before);
  document.getElementById('duelOverBody').innerHTML =
    `<div class="doBanner ${win?'win':'lose'}">${t(win?'duel_win':'duel_lose')}</div>
     <div class="doReason">${t('duel_reason_'+(oppDied&&!iDied?'oppko':iDied&&!oppDied?'ko':'time'))}</div>
     <div class="doScores"><div class="me"><small>${dsetEsc(playerName())}</small><b>${myScore.toFixed(2)}</b></div>
       <div class="vs">VS</div><div class="opp"><small>${dsetEsc(safeOtherName(o.name,o.uid))}</small><b>${oppScore.toFixed(2)}</b></div></div>
     <div class="doStats">${t('duel_attacks_line',{sent:_duelRec.sent, got:_duelOpp.atk})}</div>
     ${m.ranked?`<div class="doRating ${delta>=0?'up':'down'}">${duelTierName(d.rating)} · ${Math.round(d.rating)} <span>${delta>=0?'+':''}${delta}</span></div>`
       :`<div class="doRating">${t('duel_practice')}</div>`}
     ${tierAfter.id!==tierBefore.id?`<div class="doTierUp">${icon('trophy')} ${t(d.rating>before?'duel_tier_up':'duel_tier_down',{tier:duelTierName(d.rating)})}</div>`:''}
     <div class="doReward">${icon('coin')} +${reward}</div>`;
  if(win){ beep(660,0.12,'triangle',0.12); beep(990,0.16,'sine',0.11); beep(1320,0.2,'triangle',0.09); }
  else beep(200,0.3,'sine',0.12);
}
