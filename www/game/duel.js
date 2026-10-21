// DÜELLO — 90 saniyelik 1'e 1 dereceli maç.
//
// Her oyuncu kendi telefonunda, rakibiyle AYNI tohumlu haritada oynar. Rakip,
// başka bir oyuncunun en son tamamladığı düello maçıdır (Firestore duels/{uid},
// oyuncu başına tek belge, her maçta üzerine yazılır); maç boyunca oynatılır:
// rakibin puanı/canı canlı akar, rakibin saldırıları tam o anlarda bize gelir,
// bizim saldırılarımız rakibin puanından düşer (kalkanı varsa engellenir).
// Havuz henüz küçükken her kademede 5 kişilik başlangıç kadrosu (DUEL_SEEDS)
// boşluğu doldurur; gerçek oyuncu kaydı geldikçe kadro geri çekilir.
// Sunucu kiralamadan, oyuncu azken bile her an rakip bulunur.
//
// Adalet: kalıcı yükseltmeler, Çekirdek Ağacı, Süpernova yetenekleri, Isı ve
// takviyeler KAPALI (metaOff); herkes aynı canla başlar. Fark, maçtan önce
// seçilen 3 düello yeteneğiyle (DUEL_PERKS — herkese açık) gelir; "Maç Ara"ya
// basınca yuvalar kilitlenir.
//
// Rütbe (LoL tarzı): gizli MMR (Elo) eşleşmeyi ve kazanılan/kaybedilen LP'yi
// belirler; görünür rütbe Bronz IV → … → Elmas I → Usta → Şampiyon. 100 LP'de
// terfi, 0 LP'de kayıpta küme düşme; yeni kademeye çıkınca 3 maçlık koruma.
const DUEL_SECS = 90, DUEL_HP = 5, DUEL_SLOTS = 3, DUEL_SAMPLE = 30;   // 30 kare = 0.5 sn
const DUEL_ATK_HP_CHANCE = 0.4;   // isabetli saldırının rakibe can kaybettirme olasılığı
const DUEL_PERKS = [
  {id:'dpStriker', icon:'lightning'},   // saldırı balonu daha sık
  {id:'dpGuard',   icon:'shield'},      // maça kalkanla başla
  {id:'dpMelody',  icon:'music'},       // notalar +%25 puan
  {id:'dpMirror',  icon:'replay'},      // ilk gelen saldırıyı geri yolla
  {id:'dpHeart',   icon:'heart'},       // +1 can
  {id:'dpMagnet',  icon:'magnet'},      // komşu halkadaki notayı da al
  {id:'dpFocus',   icon:'target'},      // gelen saldırılar %40 kısa
];
// Kademeler: ilk 5'i 4 kümeli (IV → I), Usta ve Şampiyon tek basamak.
// d = 0..19 küme sırası (Bronz IV = 0, Elmas I = 19), 20 = Usta (Şampiyon:
// Usta'da CHAMP_LP ve üstü).
const DUEL_TIERS = [
  {id:'bronze',   col:'#d9925a'},
  {id:'silver',   col:'#cfd8e3'},
  {id:'gold',     col:'#ffc94a'},
  {id:'platinum', col:'#6fe8d2'},
  {id:'diamond',  col:'#8fc4ff'},
  {id:'master',   col:'#c46bff'},
  {id:'champion', col:'#ff5f8f'},
];
const DUEL_TOP = 20, CHAMP_LP = 400, ROMAN = ['','I','II','III','IV'];
const DUEL_BASE_MMR = 900, DUEL_STEP = 45;            // her küme ≈ 45 MMR
function rankTier(d, lp){ return d>=DUEL_TOP ? DUEL_TIERS[lp>=CHAMP_LP?6:5] : DUEL_TIERS[Math.floor(d/4)]; }
function rankDiv(d){ return d>=DUEL_TOP ? 0 : 4-(d%4); }
function rankName(d, lp){ const dv=rankDiv(d); return t('duel_tier_'+rankTier(d,lp).id)+(dv?' '+ROMAN[dv]:''); }
// Görünür rütbenin "olması gereken" MMR'si: MMR bundan yüksekse LP daha hızlı gelir.
function rankMmr(d, lp){ return d>=DUEL_TOP ? DUEL_BASE_MMR+DUEL_TOP*DUEL_STEP+lp*0.5 : DUEL_BASE_MMR+d*DUEL_STEP+Math.min(lp,100)/100*DUEL_STEP; }
function rankFromMmr(m){
  const x=(m-DUEL_BASE_MMR)/DUEL_STEP;
  if(x>=DUEL_TOP) return {d:DUEL_TOP, lp:Math.round((m-DUEL_BASE_MMR-DUEL_TOP*DUEL_STEP)*2)};
  const d=Math.max(0, Math.floor(x));
  return {d, lp:x<0?0:Math.round((x-d)*100)};
}
function rankBadgeHtml(d, lp, cls){
  const tr=rankTier(d,lp), dv=rankDiv(d);
  return `<div class="drBadge ${cls||''}" style="--tc:${tr.col}">${icon('trophy')}${dv?`<span class="drDiv">${ROMAN[dv]}</span>`:''}</div>`;
}

// Başlangıç kadrosu: kademe başına 5 oyuncu (Bronz → Elmas = 25). Maçları
// MMR'lerine göre üretilir; havuzda yeterli gerçek oyuncu kaydı birikince
// eşleşmeye çıkmazlar (duelFindOpp).
const DUEL_SEED_NAMES = ['Kaan_07','melodi.exe','Bora','Zeynep','NoiseHunter',
  'bass.boy','Elif K','Mert44','LunaBeat','Ozzy',
  'Deniz_tr','PlakCı','Yusuf.99','RitimKızı','Can Bey',
  'neon_ece','Tuna','SynthWave','Ayşe 23','KaraPlak',
  'Emir-7','Lina','GrooveX','Selin.mp3','DJ Arda'];
const DUEL_SEEDS = DUEL_SEED_NAMES.map((name,i)=>({id:'p'+(i+1), name, mmr: DUEL_BASE_MMR + Math.floor(i/5)*180 + 18 + (i%5)*36}));
function duelSkillFor(mmr){ return Math.max(0.08, Math.min(0.97, (mmr-850)/1050)); }

let duelMatch = null;      // {seed, opp, perks, ranked}
let _duelSel = [];         // lobide seçili yetenekler
function duelState(){
  let d=stats.duel;
  if(!d) d=stats.duel={mmr:1000, d:0, lp:0, games:0, wins:0, losses:0, streak:0, shield:0, hist:[], seen:[], perks:['dpGuard','dpStriker','dpMelody']};
  if(d.mmr==null){   // 2.66-2.67 (Elo puanı) → yeni sistem
    d.mmr = Math.round(d.rating||1000); const r=rankFromMmr(Math.min(d.mmr, 1300));
    d.d=r.d; d.lp=0; d.games=(d.wins||0)+(d.losses||0); d.shield=0; d.hist=[]; d.seen=[]; delete d.rating;
  }
  if(!d.hist) d.hist=[]; if(!d.seen) d.seen=[];
  return d;
}
function duelHas(id){ return !!(duelMatch && duelMatch.perks.includes(id)); }

// Maç sonucu → MMR + LP. Dönüş: {delta, ev, before}.
function duelApplyResult(dd, win, oppMmr, forfeit){
  const before={d:dd.d, lp:dd.lp, mmr:dd.mmr};
  const E = 1/(1+Math.pow(10,(oppMmr-dd.mmr)/400));
  // MMR görünür rütbenin üstündeyse daha çok kazanır, daha az kaybeder (ve tersi).
  const adj = Math.max(-8, Math.min(8, (dd.mmr - rankMmr(dd.d, dd.lp))/25));
  let delta = win ? Math.max(10, Math.min(35, Math.round(40*(1-E) + adj)))
                  : -Math.max(8, Math.min(30, Math.round(40*E - adj)));
  if(forfeit) delta -= 5;
  const K = (dd.games||0) < 15 ? 40 : 24;
  dd.mmr = Math.max(300, Math.min(4000, Math.round(dd.mmr + K*((win?1:0)-E))));
  dd.games=(dd.games||0)+1;
  if(win){ dd.wins++; dd.streak=(dd.streak||0)+1; } else { dd.losses++; dd.streak=0; }
  let ev=null;
  dd.lp += delta;
  if(dd.d<DUEL_TOP && dd.lp>=100){
    dd.d++; dd.lp-=100;
    if(dd.d%4===0){ ev='tierup'; dd.shield=3; } else ev='promo';
  } else if(dd.d>=DUEL_TOP && before.lp<CHAMP_LP && dd.lp>=CHAMP_LP){ ev='tierup'; dd.shield=3; }
  else if(dd.d>=DUEL_TOP && before.lp>=CHAMP_LP && dd.lp<CHAMP_LP){ ev='tierdown'; }
  else if(dd.lp<0){
    if(dd.d===0) dd.lp=0;
    else if(dd.d%4===0){                       // kademe sınırı: koruma varsa düşmez
      if(dd.shield>0) dd.lp=0;
      else { dd.d--; dd.lp=75; ev='tierdown'; }
    } else { dd.d--; dd.lp=75; ev='demote'; }
  }
  if(ev!=='tierup' && dd.shield>0) dd.shield--;
  return {delta, ev, before};
}

// ---- Lobi ----
function goDuel(){
  state='duel'; setHud(false); showScreen('duel');
  _duelSel = (duelState().perks||[]).slice(0, DUEL_SLOTS);
  renderDuelLobby();
  // Rakiplerin göreceği ad: ilk düelloda seçilir (Sıralama ile aynı ad).
  if(!stats.playerName && typeof openNameDialog==='function') openNameDialog(()=>renderDuelLobby());
}
function duelLpBar(lp, d){
  if(d>=DUEL_TOP) return `<div class="drLp"><b>${t('duel_lp',{n:lp})}</b></div>`;
  return `<div class="drLp"><div class="drBar"><i style="width:${Math.max(0,Math.min(100,lp))}%"></i></div><b>${t('duel_lp',{n:lp})}</b></div>`;
}
function renderDuelLobby(){
  const d=duelState();
  const wr = d.games ? Math.round(d.wins/d.games*100) : 0;
  document.getElementById('duelRankCard').innerHTML =
    `${rankBadgeHtml(d.d, d.lp)}
     <div class="drInfo"><b style="color:${rankTier(d.d,d.lp).col}">${rankName(d.d, d.lp)}</b><span>${dsetEsc(playerName())}</span>
     ${duelLpBar(d.lp, d.d)}
     <small>${t('duel_record',{w:d.wins, l:d.losses})}${d.games?` · %${wr}`:''}${d.streak>=2?` · ${t('duel_streak',{n:d.streak})}`:''}</small>
     ${d.shield>0?`<small class="drShield">${icon('shield')} ${t('duel_shield',{n:d.shield})}</small>`:''}</div>`;
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
  // Son maçlar: gelen/giden LP.
  const h=document.getElementById('duelHist');
  h.innerHTML = d.hist.length ? d.hist.map(x=>
    `<div class="dhRow ${x.w?'win':'lose'}"><span class="dhRes">${t(x.w?'duel_hist_w':'duel_hist_l')}</span>
      <span class="dhOpp"><b>${dsetEsc(x.n)}</b><small>${x.or||''}</small></span>
      <span class="dhWhy">${(x.why||x.ff)?t('duel_hwhy_'+(x.why||'ff')):''}</span>
      <span class="dhSc">${(+x.ms||0).toFixed(0)} – ${(+x.os||0).toFixed(0)}</span>
      <span class="dhLp">${x.dl>=0?'+':''}${x.dl} LP</span></div>`).join('')
    : `<div class="dhEmpty">${t('duel_hist_empty')}</div>`;
}

// ---- Eşleşme ----
// Havuz: kendi MMR kovası ±1'deki en yeni 25 oyuncu kaydı (tek sorgu, ≤25
// okuma; 3 dk önbellek) + havuz küçükse başlangıç kadrosu. Seçim ağırlıklı
// rastgele (±200 MMR penceresinde): MMR'si yakın olan ve son 24 saatte oynamış olan öne çıkar, son
// karşılaşılan 8 rakip geri plana düşer.
let _duelSearching=false;
const _duelPool = {b:-1, at:0, list:null};
async function duelCloudPool(mmr){
  if(!window.DuelCloud) return [];
  const b=Math.floor(mmr/100);
  if(_duelPool.list && _duelPool.b===b && Date.now()-_duelPool.at < 180000) return _duelPool.list;
  const list = await DuelCloud.find(mmr).catch(()=>null);
  if(!list) return [];
  _duelPool.b=b; _duelPool.at=Date.now(); _duelPool.list=list;
  return list;
}
function duelNameKey(n){ return String(n||'').trim().replace(/\s+/g,' ').toLocaleLowerCase('tr'); }
function duelPick(cands){
  const sum=cands.reduce((a,c)=>a+c.w,0); if(!(sum>0)) return null;
  let r=Math.random()*sum;
  for(const c of cands){ r-=c.w; if(r<=0) return c; }
  return cands[cands.length-1];
}
async function duelFindOpp(dd){
  const mine=stats.myUid, seen=dd.seen||[], now=Date.now();
  // Birebir aynı isim (büyük/küçük harf ve baş/son boşluk hariç) hiç çıkmaz:
  // oyuncu başka cihazdan/giriş yapmadan oynadığı kendi kaydıyla eşleşmesin.
  // "Ali" ile "Ali1", "Aslan Ali" farklı sayılır.
  const myKey=duelNameKey(playerName()), sameName=(n)=>duelNameKey(n)===myKey;
  const near=(m)=>Math.exp(-Math.abs(m-dd.mmr)/120);
  const cloud=(await duelCloudPool(dd.mmr)).filter(g=>g.uid!==mine && !sameName(g.name));
  const cands=cloud.map(g=>({g, w: near(g.mmr) * (1 + 2*Math.exp(-(now-(g.at||0))/864e5)) * (seen.includes(g.uid)?0.12:1)}));
  // Başlangıç kadrosu, gerçek kayıt azaldıkça devreye girer.
  const seedW = cloud.length>=8 ? 0 : cloud.length>=4 ? 0.25 : cloud.length>=1 ? 0.5 : 1;
  if(seedW>0){
    DUEL_SEEDS.forEach(s=>{
      if(sameName(s.name)) return;
      // Usta+ oyuncuya en üst kadro kendi seviyesine çekilir.
      const m = dd.mmr>1790 && s.mmr>1620 ? dd.mmr-120+Math.random()*240 : s.mmr;
      cands.push({seed:s, m, w: near(m)*seedW*(seen.includes('bot_'+s.id)?0.12:1)});
    });
  }
  // Sert pencere: önce ±200 MMR, kimse yoksa ±350, o da yoksa en yakın.
  const dm=(c)=>Math.abs((c.g?c.g.mmr:c.m)-dd.mmr);
  let win=cands.filter(c=>dm(c)<=200);
  if(!win.length) win=cands.filter(c=>dm(c)<=350);
  if(!win.length && cands.length) win=[cands.reduce((a,c)=>dm(c)<dm(a)?c:a)];
  const c=duelPick(win);
  if(!c) return duelMakeBot(DUEL_SEEDS.filter(x=>!sameName(x.name)).reduce((a,x)=>Math.abs(x.mmr-dd.mmr)<Math.abs(a.mmr-dd.mmr)?x:a));
  if(c.g) return Object.assign({}, c.g, {kind:'ghost'});
  return duelMakeBot(c.seed, c.m);
}
async function duelStartSearch(){
  if(_duelSearching) return;
  if(_duelSel.length<DUEL_SLOTS){ queueToast(t('duel_pick_slots',{n:DUEL_SLOTS})); beep(200,0.1,'square',0.1); return; }
  _duelSearching=true;
  // Yuvalar kilitlenir: maç bu seçimle oynanır.
  const perks=_duelSel.slice(); const d=duelState(); d.perks=perks.slice(); saveStats();
  const ov=document.getElementById('duelSearch'); ov.classList.add('show'); ov.classList.remove('found');
  document.getElementById('duelSearchTitle').textContent=t('duel_searching');
  document.getElementById('duelSearchPerks').innerHTML = perks.map(id=>`<span>${icon(DUEL_PERKS.find(p=>p.id===id).icon)} ${t(id+'_name')}</span>`).join('');
  const tEl=document.getElementById('duelSearchTime'), t0=Date.now();
  const clock=()=>{ const s=Math.floor((Date.now()-t0)/1000); tEl.textContent='0:'+String(s).padStart(2,'0'); };
  clock(); const iv=setInterval(clock, 250);
  let opp=null;
  try{ opp = await duelFindOpp(d); }catch(e){}
  if(!opp) opp=duelMakeBot(DUEL_SEEDS[0]);
  // Gerçek kuyruk gibi: 2.5-6 sn arası.
  const wait = 2500 + Math.random()*3500;
  await new Promise(r=>setTimeout(r, Math.max(0, wait-(Date.now()-t0))));
  clearInterval(iv);
  ov.classList.add('found');
  document.getElementById('duelSearchTitle').textContent=t('duel_found');
  beep(660,0.1,'triangle',0.1); beep(990,0.14,'sine',0.09);
  await new Promise(r=>setTimeout(r, 700));
  ov.classList.remove('show','found'); _duelSearching=false;
  d.seen=[opp.uid].concat((d.seen||[]).filter(x=>x!==opp.uid)).slice(0,8); saveStats();
  duelMatch = {seed: opp.seed, opp, perks, ranked:true};
  duelShowVs();
}
function duelPushHist(dd, m, win, delta, ms, os, why){
  const o=m.opp;
  dd.hist.unshift({w:win?1:0, dl:delta, n:safeOtherName(o.name,o.uid), or:rankName(o.d|0, o.lp|0), ms:Math.round(ms), os:Math.round(os), why});
  dd.hist=dd.hist.slice(0,10);
}
// Maç ortasında çıkış (duraklat → menü): hükmen yenilgi (−5 LP ceza) —
// kaybederken çıkıp puanı korumak olmasın. Kayıt havuza girmez.
function duelAbort(){
  if(!(typeof mode!=='undefined' && mode==='duel')) return;
  metaOff=false;
  const hud=document.getElementById('duelHud'); if(hud) hud.classList.remove('show');
  document.body.classList.remove('duel');
  const m=duelMatch;
  if(m && !m.done && elapsed>60){
    m.done=true;
    const d=duelState(), res=duelApplyResult(d, false, m.opp.mmr||1000, true);
    duelPushHist(d, m, false, res.delta, score, duelOppScore(elapsed/60), 'ff');
    saveStats();
    queueToast(t('duel_forfeit')+' ('+res.delta+' LP)');
  }
  if(m) m.done=true;
}

// Başlangıç kadrosundan bir oyuncunun maçı: MMR'ye göre beceri, maçtan maça değişir.
function duelMakeBot(b, mmrOverride){
  const mmr = Math.round(mmrOverride || b.mmr), rk=rankFromMmr(mmr);
  const seed = (Math.random()*1e9)|0, r=mulberry32(seed ^ 0x5eed);
  const skill=duelSkillFor(mmr), samples=[], attacks=[];
  let score=0, combo=1, hp=DUEL_HP, died=null, nextAtk=6+r()*6;
  const themes=Object.keys(THEMES), skins=SKINS.filter(s=>s.img);
  for(let i=0;i<=DUEL_SECS*2;i++){
    const tt=i*0.5;
    if(died==null && i>0){
      const notes = r() < (0.55+skill*0.4) ? 1 + (r()<skill*0.6?1:0) : 0;
      for(let k=0;k<notes;k++){ combo++; score += Math.min(combo, 40); }
      // Darbe: acemi 90 sn'de ~3-4 kez (~%30 elenir), usta nadiren.
      if(r() < (0.02-skill*0.016)){ hp -= r()<0.8 ? 1 : 2; combo=1; if(hp<=0){ hp=0; died=tt; } }
      if(tt>=nextAtk){ if(r() < 0.35+skill*0.55) attacks.push(+tt.toFixed(1)); nextAtk = tt + 12 - skill*4 + r()*4; }
    }
    samples.push([+tt.toFixed(1), Math.round(score*100)/100, hp, 0]);
  }
  // Puan ölçeği: otomatik oyuncu ölçümünde 90 sn'lik düello ~10-45 bin puan
  // (kombo büyüdükçe nota puanı artıyor). Eğri beceriye göre hedef bir final
  // puanına ölçeklenir (±%20): Bronz ~3.5 bin … Elmas ~24 bin.
  const target = (2500 + 26000*Math.pow(skill, 1.6)) * (0.8 + r()*0.4);
  const raw = samples[samples.length-1][1] || 1, k = target/raw;
  samples.forEach(sm=>{ sm[1] = Math.round(sm[1]*k*100)/100; });
  const perks = DUEL_PERKS.map(p=>p.id).sort(()=>r()-0.5).slice(0,3);
  return {kind:'seed', name:b.name, uid:'bot_'+b.id, mmr, d:rk.d, lp:Math.max(0,Math.min(rk.d>=DUEL_TOP?999:99, rk.lp)), seed, samples, attacks, died, perks,
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
    `<div class="vsSide me">${duelRecordHtml(cfg.theme, cfg.skin, 'spin')}<b>${dsetEsc(playerName())}</b><small style="color:${rankTier(d.d,d.lp).col}">${rankName(d.d,d.lp)}</small><div class="vsPerks">${perkList(m.perks)}</div></div>
     <div class="vsMid">VS</div>
     <div class="vsSide opp">${duelRecordHtml(o.theme, o.skin, 'spin rev')}<b>${dsetEsc(safeOtherName(o.name, o.uid))}</b><small style="color:${rankTier(o.d|0,o.lp|0).col}">${rankName(o.d|0,o.lp|0)}</small><div class="vsPerks">${perkList(o.perks||[])}</div></div>`;
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
  _duelOpp = {i:0, atk:0, penalty:0, hits:0, hpLoss:0, score:0, hp:DUEL_HP, shield:0, ko:null, koT:0, popT:0, popTxt:''};
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
  // İsabet %40 ihtimalle rakibe 1 can da kaybettirir (saldırı altında hata yapar).
  const hpHit = Math.random() < DUEL_ATK_HP_CHANCE;
  if(hpHit) op.hpLoss++;
  op.popTxt = (reflected ? '↩ ' : '')+'−'+Math.round(dmg)+(hpHit?' ♥−1':''); op.popT=70;
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
function duelOppHp(tt){ const s=duelOppSample(tt); return (s?s[2]:DUEL_HP) - (_duelOpp?_duelOpp.hpLoss:0); }
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
  // Rakip elendi mi? (kendi kaydında canı bitti ya da saldırılarımız canını bitirdi)
  if(op.ko==null && ((o.died!=null && tt>=o.died) || duelOppHp(tt)<=0)){
    op.ko=tt; op.koT=75;
    showFlash(t('duel_opp_ko_flash'), 75, null, 'melody');
    burst(CX, CY, '#7dffb0', 30, 6); beep(660,0.12,'triangle',0.12); beep(990,0.18,'sine',0.1);
  }
  if(op.ko!=null && op.koT>0){ op.koT-=dt; if(op.koT<=0) duelEnd('oppko'); }
}
let _duelHudT=0;
function duelHudSync(){
  if(mode!=='duel' || !duelMatch || !_duelOpp) return;
  const tt=elapsed/60, s=duelOppSample(tt), op=_duelOpp;
  const sc=duelOppScore(tt);
  const el=document.getElementById('duelOppScore'), txt=sc.toFixed(2);
  if(el.textContent!==txt) el.textContent=txt;
  const hpv = op.ko!=null ? 0 : duelOppHp(tt);
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
  else if(iDied && oppDied) win = _duelOpp.ko <= tt;   // önce elenen kaybeder
  else win = myScore >= oppScore;
  // Sonucun nedeni (sonuç ekranı + maç geçmişi).
  const why = (oppDied && win) ? 'oppko' : (iDied && !win) ? (myScore>oppScore ? 'kohi' : 'ko') : (win ? 'timew' : 'timel');
  // Rütbe: MMR + LP
  const d=duelState(), mmrBefore=d.mmr, rankBefore={d:d.d, lp:d.lp};
  const res=duelApplyResult(d, win, o.mmr||1000, false), delta=res.delta;
  duelPushHist(d, m, win, delta, myScore, oppScore, why);
  // Küçük nota ödülü (maç başına), kaydı yükle.
  const reward = win ? 40 : 12;
  addNotes(reward);
  _duelRec.samples.push([+Math.min(tt,DUEL_SECS).toFixed(1), myScore, Math.max(0,hp), player.shieldHits>0?1:0]);
  if(iDied) _duelRec.died=+tt.toFixed(1);
  saveStats();
  m.done = true;
  // Tamamlanan maç (süre doldu ya da can bitti) oyuncunun havuzdaki kaydı
  // olur; bir öncekinin üzerine yazılır. 10 sn'den kısa maç kaydedilmez.
  if(window.DuelCloud && _duelRec.samples.length>20){
    DuelCloud.upload({seed:m.seed, name:playerName(), mmr:mmrBefore, d:rankBefore.d, lp:Math.max(0,rankBefore.lp), theme:cfg.theme, skin:cfg.skin,
      perks:m.perks, samples:_duelRec.samples.slice(0,200), attacks:_duelRec.attacks.slice(0,40), died:_duelRec.died, score:myScore})
      .then(uid=>{ if(uid){ stats.myUid=uid; saveStats(); } }).catch(()=>{});
  }
  // Sonuç ekranı
  setHud(false); showScreen('duelover');
  const down = res.ev==='tierdown' || res.ev==='demote';
  const evTxt = res.ev==='tierup' ? t('duel_tier_up',{tier:rankName(d.d,d.lp)}) : res.ev==='promo' ? t('duel_promo',{tier:rankName(d.d,d.lp)})
    : down ? t('duel_tier_down',{tier:rankName(d.d,d.lp)}) : '';
  // LP çubuğu maç öncesinden sonrasına dolar (terfi/düşüşte yeni kümenin başından/sonundan).
  const fromW = res.ev ? (delta>0?0:100) : Math.max(0,Math.min(100,rankBefore.lp));
  document.getElementById('duelOverBody').innerHTML =
    `<div class="doBanner ${win?'win':'lose'}">${t(win?'duel_win':'duel_lose')}</div>
     <div class="doReason ${win?'win':'lose'}">${t('duel_why_'+why)}</div>
     <div class="doScores"><div class="me"><small>${dsetEsc(playerName())}</small><b>${myScore.toFixed(2)}</b></div>
       <div class="vs">VS</div><div class="opp"><small>${dsetEsc(safeOtherName(o.name,o.uid))}</small><b>${oppScore.toFixed(2)}</b></div></div>
     <div class="doStats">${t('duel_attacks_line',{sent:_duelRec.sent, got:_duelOpp.atk})}</div>
     <div class="doRank">${rankBadgeHtml(d.d, d.lp, 'sm')}
       <div class="doRankInfo"><b style="color:${rankTier(d.d,d.lp).col}">${rankName(d.d, d.lp)}</b>
         ${d.d>=DUEL_TOP?'':`<div class="drBar"><i id="doLpFill" style="width:${fromW}%"></i></div>`}
         <small>${t('duel_lp',{n:d.lp})}</small></div>
       <div class="doLp ${delta>=0?'up':'down'}">${delta>=0?'+':''}${delta} LP</div></div>
     ${evTxt?`<div class="doTierUp ${down?'down':''}">${icon(down?'back':'trophy')} ${evTxt}</div>`:''}
     ${d.shield>0 && res.ev==='tierup'?`<div class="doShield">${icon('shield')} ${t('duel_shield',{n:d.shield})}</div>`:''}
     <div class="doReward">${icon('coin')} +${reward}</div>`;
  const fill=document.getElementById('doLpFill');
  if(fill) setTimeout(()=>{ fill.style.width=Math.max(0,Math.min(100,d.lp))+'%'; }, 350);
  if(win){ beep(660,0.12,'triangle',0.12); beep(990,0.16,'sine',0.11); beep(1320,0.2,'triangle',0.09); }
  else beep(200,0.3,'sine',0.12);
}
