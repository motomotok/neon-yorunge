// Günün Seti: günlük yarışma. Herkes aynı tohumlu parçayı (bkz. startGame,
// mode 'daily') sınırsız deneme oynar; puan = günün EN İYİ 3 oyununun toplamı.
// Gün Türkiye saatiyle 00:00'da biter, ertesi açılışta DJ Vinil ödülü verir.
//
// Sıralama = gerçek oyuncular (Firestore, bkz. src/leaderboard.js) + oyuncuya
// özel botlar. Botlar (kullanıcıyla kararlaştırıldı):
//  - Gün başında oyuncunun son günlerdeki seviyesine (ref) göre kurulur ve gün
//    sonu skorları O ANDA sabitlenir: oyuncunun o gün ne yaptığına tepki
//    vermez. Normalinden iyi oynayan gerçekten birinci olur.
//  - En güçlü bot ref'in yalnız ~%3-7 üstünde (geçmesi biraz kolay, ama emek ister).
//  - Gün içinde "oynarlar": her botun saatlere dağılmış 3-6 oyunu var, toplamı
//    o saate kadarki en iyi 3 oyunu — tablo gün boyu basamak basamak yükselir.
//  - Gerçek oyuncu sayısı arttıkça azalır, 30+ gerçek oyuncuda hiç yoktur.
const DSET_TZ_MS = 3*3600*1000;          // Türkiye (UTC+3, yaz saati yok)
const DSET_DAY_MS = 86400000;
const DSET_TOP_N = 3;
const DSET_BOTS_MAX = 11, DSET_REAL_FULL = 30;
// Botların gün sonu toplamları, ref'e oran olarak (yüksekten düşüğe).
const DSET_BOT_BANDS = [[1.03,1.07],[0.96,1.0],[0.9,0.95],[0.83,0.88],[0.74,0.8],[0.64,0.7],
  [0.54,0.6],[0.44,0.5],[0.34,0.4],[0.25,0.3],[0.16,0.22]];
const DSET_REWARDS = [
  {gems:10, notes:600},
  {gems:5, notes:300},
  {gems:3, notes:200},
];
const DSET_REWARD_TOP10 = {notes:100}, DSET_REWARD_ALL = {notes:30};

// Takma adlar: harf/rakam (Firestore kuralıyla aynı), dilden bağımsız.
const DSET_ADJ = ['Neon','Bass','Lofi','Retro','Funky','Cosmic','Turbo','Groovy','Pixel','Disco','Sonic','Velvet',
  'Jazzy','Echo','Vinyl','Synth','Solar','Lunar','Hyper','Mellow','Electric','Golden','Midnight','Rapid','Lucky',
  'Wild','Chill','Crimson','Indigo','Silver','Snappy','Dizzy','Mighty','Tiny','Fuzzy','Stereo'];
const DSET_NOUN = ['Fox','Panda','Tiger','Owl','Wolf','Cat','Falcon','Otter','Koala','Lynx','Raven','Shark','Dragon',
  'Bunny','Moose','Gecko','Beat','Groove','Drop','Tempo','Rhythm','Pulse','Riff','Note','Wave','Comet','Orbit',
  'Rocket','Mixer','Kitty','Penguin','Bee','Yeti','Llama','Hawk','Bear'];
function dsetGenName(r){
  const a=DSET_ADJ[Math.floor(r()*DSET_ADJ.length)], n=DSET_NOUN[Math.floor(r()*DSET_NOUN.length)];
  const num = r()<0.55 ? String(Math.floor(r()*99)+1) : '';
  return a+n+num;
}
function dsetStrHash(s){ let h=2166136261; for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }

function dsetDayKey(ms){
  const d=new Date((ms==null ? gameNowMs() : ms)+DSET_TZ_MS);
  return d.getUTCFullYear()+'-'+String(d.getUTCMonth()+1).padStart(2,'0')+'-'+String(d.getUTCDate()).padStart(2,'0');
}
function dsetDayStartMs(key){ const [y,m,d]=key.split('-').map(Number); return Date.UTC(y,m-1,d)-DSET_TZ_MS; }
function dsetSeed(key){ return +key.replace(/-/g,''); }
function dsetDayFrac(key){ return Math.max(0, Math.min(1, (gameNowMs()-dsetDayStartMs(key))/DSET_DAY_MS)); }
function dsetMsLeft(){ const k=dsetDayKey(); return Math.max(0, dsetDayStartMs(k)+DSET_DAY_MS-gameNowMs()); }
function dsetTotal(top){ return Math.round((top||[]).reduce((s,v)=>s+v,0)*100)/100; }
function dsetFmt(n){ return (+n||0).toFixed(2); }

function dsetPlayerName(){
  if(stats.playerName) return stats.playerName;   // oyuncunun seçtiği ad (bkz. ranking.js)
  if(!stats.dsetName){ stats.dsetName = dsetGenName(Math.random); saveStats(); }
  return stats.dsetName;
}
function dsetInstallId(){
  if(!stats.installId){ stats.installId = Math.random().toString(36).slice(2,10)+Date.now().toString(36); saveStats(); }
  return stats.installId;
}

// Oyuncunun "normal günü": son oynadığı günlerin toplamlarının ortancası; az
// veri varsa en iyi skordan tahmin (tipik bir günde en iyi 3 ≈ rekorun 1.4 katı).
function dsetComputeRef(){
  const totals = (stats.dsetHist||[]).slice(-7).map(h=>h.total).filter(v=>v>0);
  if(stats.dsetPending && stats.dsetPending.top && stats.dsetPending.top.length) totals.push(dsetTotal(stats.dsetPending.top));
  const est = Math.max(400, Math.round((stats.best||0)*1.4));
  let ref;
  if(totals.length>=3){ const s=totals.slice().sort((a,b)=>a-b); ref=s[Math.floor(s.length/2)]; }
  else if(totals.length) ref=(totals.reduce((a,b)=>a+b,0)/totals.length + est)/2;
  else ref=est;
  return Math.max(300, Math.round(ref));
}
function dsetComputeBotCount(){
  const real = stats.dsetRealSeen||0;
  return Math.max(0, Math.min(DSET_BOTS_MAX, Math.round(DSET_BOTS_MAX*(1-real/DSET_REAL_FULL))));
}

// Gün değiştiyse: biten günü ödül için kenara koy, yeni günü kur. Senkron.
function dsetEnsureDay(){
  const key=dsetDayKey();
  const cur=stats.dset;
  if(cur && cur.day===key){
    // 2.69 öncesi kurulmuş gün: lige yerleştir, skoru ligle birlikte yeniden gönder.
    if(!cur.lg){ cur.lg=dsetLeague(); cur.sent=0; saveStats(); }
    return cur;
  }
  if(cur && cur.day && cur.top && cur.top.length){
    // Ödülü hiç verilemeyen daha eski bir gün varsa geçmişe yazılıp bırakılır.
    if(stats.dsetPending) dsetPushHist(stats.dsetPending.day, dsetTotal(stats.dsetPending.top));
    stats.dsetPending = cur;
  }
  stats.dset = {day:key, top:[], runs:0, sent:0, ref:0, nbots:0, lg:dsetLeague()};
  stats.dset.ref = dsetComputeRef();
  stats.dset.nbots = dsetComputeBotCount();
  saveStats();
  return stats.dset;
}
// Lig: oyuncu günün tablosunda yalnız kendi seviyesindekilerle yarışır (ekranda
// lig adı geçmez — herkes "Günün Seti"ni görür). Düello kademesine göre
// (Usta+Şampiyon birlikte); hiç düello oynamamış olan 'u'. Gün başında sabitlenir.
function dsetLeague(){
  const d=stats.duel;
  if(!d || !(d.games>0) || d.d==null || typeof rankTier!=='function') return 'u';
  const id=rankTier(d.d, d.lp||0).id;
  return id==='champion' ? 'master' : id;
}
function dsetLg(d){ return (d && d.lg) || 'u'; }
function dsetPushHist(day, total){
  stats.dsetHist = (stats.dsetHist||[]).filter(h=>h.day!==day);
  stats.dsetHist.push({day, total}); stats.dsetHist = stats.dsetHist.slice(-14);
}

// ---- Botlar ----
// Kalıcı rakip havuzu (aynı isimler günlerce görünür, "müdavimler"), her gün
// bu havuzdan nbots kadarı seçilir. Her şey (gün + kurulum) tohumlu: aynı gün
// içinde her açılışta birebir aynı botlar ve oyun saatleri.
function dsetBotPool(){
  const r=mulberry32(dsetStrHash('pool'+dsetInstallId())), out=[], used=new Set([dsetPlayerName()]);
  while(out.length<24){ const n=dsetGenName(r); if(!used.has(n)){ used.add(n); out.push(n); } }
  return out;
}
function dsetBots(d){
  if(!d.nbots) return [];
  const r=mulberry32(dsetStrHash(d.day+'|'+dsetInstallId()));
  const pool=dsetBotPool();
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
  // Bant seçimi: en üst bant hep var, kalanlar eşit aralıklı.
  const idx=[0], rest=DSET_BOT_BANDS.length-1, want=d.nbots-1;
  for(let i=0;i<want;i++) idx.push(1+Math.round(i*(rest-1)/Math.max(1,want-1)));
  return idx.map((bi,i)=>{
    const [lo,hi]=DSET_BOT_BANDS[bi];
    const final=d.ref*(lo+r()*(hi-lo));
    // 3 iyi oyun (toplamı final) + 0-3 kötü oyun, gün içine dağılmış saatlerde.
    const a=0.36+r()*0.08, b=0.31+r()*0.05, good=[a,b,1-a-b].map(f=>Math.round(final*f*100)/100);
    const minGood=Math.min(...good), runs=good.map(v=>({v}));
    const extra=Math.floor(r()*4);
    for(let k=0;k<extra;k++) runs.push({v:Math.round(minGood*(0.3+r()*0.6)*100)/100});
    for(let k=runs.length-1;k>0;k--){ const j=Math.floor(r()*(k+1)); [runs[k],runs[j]]=[runs[j],runs[k]]; }
    let t=0.25+r()*0.45;                    // ilk oyun 06:00-16:50 arası
    const span=(0.97-t)/runs.length;
    runs.forEach(rn=>{ rn.t=Math.min(0.97, t); t+=span*(0.5+r()); });
    return {name:pool[i], runs};
  });
}
function dsetBotTotalAt(bot, frac){
  const got=bot.runs.filter(rn=>rn.t<=frac).map(rn=>rn.v).sort((a,b)=>b-a).slice(0,DSET_TOP_N);
  return dsetTotal(got);
}

// ---- Sıralama ----
let _dsetMyUid=null, _dsetFetching=null;
// real: [{uid,name,total}] (kendimiz hariç). Döner: sıralı satırlar + kendi sıramız.
function dsetBuildBoard(d, real, frac){
  const rows=[];
  dsetBots(d).forEach(b=>{ const total=dsetBotTotalAt(b, frac); if(total>0) rows.push({name:b.name, total}); });
  (real||[]).forEach(p=>{ if(p.uid!==_dsetMyUid && p.total>0) rows.push({name:dsetSafeName(p.name, p.uid), total:p.total}); });
  const myTotal=dsetTotal(d.top);
  const me={name:dsetPlayerName(), total:myTotal, me:true};
  if(myTotal>0) rows.push(me);
  // Eşitlikte oyuncu önde.
  rows.sort((x,y)=> y.total-x.total || (y.me?1:0)-(x.me?1:0));
  rows.forEach((row,i)=>row.rank=i+1);
  return {rows, me: myTotal>0 ? me : null, count: rows.length};
}
// Tablodaki isimler istemciden geldiği için uygunsuz olanlar (küçük bir kara
// liste, harf/rakam dışı zaten kuralda yasak) oyuna özgü takma adla gösterilir.
const DSET_BAD_NAME = /(amk|orospu|pic|sik|yarak|yarrak|amcik|pezevenk|kahpe|ibne|kaltak|serefsiz|fuck|shit|bitch|cunt|dick|nigg|porn|sex|nazi|hitler|penis|vagina|whore|slut)/;
function dsetSafeName(name, uid){
  name = String(name||'');
  if(!DSET_BAD_NAME.test(name.toLowerCase())) return name;
  return 'DJ'+(1000 + dsetStrHash(String(uid||name)) % 9000);
}
function dsetCachedReal(day, lg){
  const c=stats.dsetCache;
  return (c && c.day===day && (c.lg||'u')===(lg||'u')) ? c.list : [];
}
// Gerçek oyuncuları çeker (en fazla 90 sn'de bir), önbelleğe yazar.
async function dsetFetchReal(day, force, lg){
  lg = lg || 'u';
  if(!window.DailySetCloud) return dsetCachedReal(day, lg);
  const c=stats.dsetCache;
  // Firestore ücretsiz kotası (günde 50 bin okuma): ekran için 5 dk önbellek ve
  // 30 kayıt; yalnız ödül hesabında (günde bir) taze 50 kayıt okunur.
  if(!force && c && c.day===day && (c.lg||'u')===lg && Date.now()-(c.at||0) < 300000) return c.list;
  if(_dsetFetching) return _dsetFetching;
  _dsetFetching = (async ()=>{
    try{
      if(!_dsetMyUid) _dsetMyUid = await DailySetCloud.uid();
      const list = await DailySetCloud.top(day, force ? 50 : 30, lg);
      stats.dsetCache = {day, lg, list, at:Date.now()};
      const others = list.filter(p=>p.uid!==_dsetMyUid).length;
      // Ertesi günün bot sayısı buna göre (bkz. dsetComputeBotCount).
      if(day===dsetDayKey()) stats.dsetRealSeen = others;
      saveStats();
      return list;
    }catch(e){ return dsetCachedReal(day, lg); }
    finally{ _dsetFetching=null; }
  })();
  return _dsetFetching;
}
// Toplam yükseldiyse skoru gönder (sessizce; olmazsa bir sonraki fırsatta).
async function dsetSubmit(){
  const d=stats.dset; if(!d || !window.DailySetCloud) return;
  const total=dsetTotal(d.top);
  if(!(total>0) || total<=(d.sent||0)) return;
  try{
    _dsetMyUid = await DailySetCloud.submit(d.day, dsetPlayerName(), total, Math.min(500, d.runs), dsetLg(d));
    if(stats.dset===d){ d.sent=total; saveStats(); }
  }catch(e){}
}

// Bir Günün Seti oyunu bitti. day: oyunun BAŞLADIĞI gün (gece yarısını
// geçen oyun yine o güne yazılır, o günün ödülü henüz verilmediyse).
function dsetRecordRun(day, score){
  dsetEnsureDay();
  let d=null;
  if(stats.dset.day===day) d=stats.dset;
  else if(stats.dsetPending && stats.dsetPending.day===day) d=stats.dsetPending;
  if(!d || !(score>0)) return null;
  const before=dsetTotal(d.top);
  d.runs=(d.runs||0)+1;
  d.top=d.top.concat([Math.round(score*100)/100]).sort((a,b)=>b-a).slice(0,DSET_TOP_N);
  saveStats();
  const after=dsetTotal(d.top);
  if(d===stats.dset) dsetSubmit();
  return {before, after, counted: after>before};
}
// Oyun sonu ekranı için tek satır: toplam, sıra, bir üsttekine kalan.
function dsetOverText(res){
  const d=stats.dset; if(!d) return '';
  const b=dsetBuildBoard(d, dsetCachedReal(d.day, dsetLg(d)), dsetDayFrac(d.day));
  if(!b.me) return '';
  let s=t('dset_over_line',{total:dsetFmt(b.me.total), rank:b.me.rank});
  if(res && res.counted && res.before>0) s+=' · +'+dsetFmt(res.after-res.before);
  else if(res && !res.counted) s+=' · '+t('dset_not_counted');
  return s;
}

// ---- Ödül (biten gün) ----
let _dsetClaiming=false;
function dsetRewardFor(rank, count){
  if(rank<=DSET_REWARDS.length) return DSET_REWARDS[rank-1];
  if(rank<=Math.ceil(count*0.1)) return DSET_REWARD_TOP10;
  return DSET_REWARD_ALL;
}
function dsetRewardText(rw){
  const parts=[];
  if(rw.gems) parts.push(t('dset_rw_gems',{n:rw.gems}));
  if(rw.notes) parts.push(t('dset_rw_notes',{n:rw.notes}));
  if(rw.shields) parts.push(t('dset_rw_shields',{n:rw.shields}));
  return parts.join(' + ');
}
// Ödül ekranlarda nota çarpanına (×2 nota günü) takılmadan, sabit verilir.
function dsetGrant(rw){
  if(rw.notes){ stats.notes=(stats.notes||0)+rw.notes; stats.lifetimeNotes=(stats.lifetimeNotes||0)+rw.notes; }
  if(rw.gems){ stats.gems=(stats.gems||0)+rw.gems; stats.lifetimeGems=(stats.lifetimeGems||0)+rw.gems; }
  refreshWallet();
}
// Bekleyen ödül varsa verir ve DJ Vinil söyler. Diyalog gösterdiyse true.
async function dsetClaimPending(){
  dsetEnsureDay();
  const p=stats.dsetPending;
  if(!p || _dsetClaiming) return false;
  _dsetClaiming=true;
  try{
    const real = await dsetFetchReal(p.day, true, dsetLg(p));
    if(stats.dsetPending!==p) return false;
    const b=dsetBuildBoard(p, real, 1);
    if(!b.me){ stats.dsetPending=null; saveStats(); return false; }
    const rank=b.me.rank, rw=dsetRewardFor(rank, b.count);
    const before=rewardSnapshot();
    dsetGrant(rw);
    rewardLedgerAdd('dset', before);
    dsetPushHist(p.day, b.me.total);
    stats.dsetPending=null;
    if(rank===1) stats.dsetCrownDay=stats.dset.day;
    stats.dsetLastResult={day:p.day, rank, count:b.count};
    saveStats();
    const medal = rank===1?'🥇':rank===2?'🥈':rank===3?'🥉':'🎧';
    const msg = t(rank<=3 ? 'dset_reward_msg' : 'dset_reward_msg_plain', {rank, medal, reward:dsetRewardText(rw)});
    showDjConfirm(msg, ()=>goDset(), {yes:t('dset_reward_go'), no:t('btn_later')});
    beep(660,0.1,'triangle',0.12); beep(990,0.14,'sine',0.1);
    return true;
  } finally { _dsetClaiming=false; }
}

// ---- Ekran ----
let _dsetTimer=null;
// Ayrı ekranı yok: Sıralama ekranının "Bugün" sekmesi (bkz. ranking.js).
function goDset(){ goRanking('today'); }
const dsetOnToday = ()=> state==='ranking' && typeof RK!=='undefined' && RK.tab==='today';
function dsetShowToday(){
  dsetEnsureDay(); renderDset();
  dsetFetchReal(stats.dset.day, false, dsetLg(stats.dset)).then(()=>{ if(dsetOnToday()) renderDset(); });
  dsetSubmit();
  clearInterval(_dsetTimer);
  _dsetTimer=setInterval(()=>{ if(!dsetOnToday()){ clearInterval(_dsetTimer); return; } renderDset(); }, 20000);
}
function dsetTimeLeftText(){
  const ms=dsetMsLeft(), h=Math.floor(ms/3600000), m=Math.floor(ms%3600000/60000);
  return t('dset_time_left',{h, m});
}
function dsetEsc(s){ return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function renderDset(){
  const d=dsetEnsureDay();
  const b=dsetBuildBoard(d, dsetCachedReal(d.day, dsetLg(d)), dsetDayFrac(d.day));
  document.getElementById('rkTimer').innerHTML=icon('hourglass')+' '+dsetTimeLeftText();
  const crown = stats.dsetCrownDay===d.day ? ' <span class="dsCrown">👑 '+t('dset_crown')+'</span>' : '';
  // Kürsü: 2 - 1 - 3
  const stand=(rank)=>{
    const r=b.rows[rank-1];
    const medal=['🥇','🥈','🥉'][rank-1];
    const rw=DSET_REWARDS[rank-1];
    const rwHtml = `<div class="dsBlockRw">${rw.gems?`<span>${icon('gem')}${rw.gems}</span>`:''}${rw.notes?`<span>${icon('coin')}${rw.notes}</span>`:''}</div>`;
    return `<div class="dsStand p${rank}${r&&r.me?' me':''}">
      <div class="dsMedal">${medal}</div>
      <div class="dsName">${r?dsetEsc(r.name):'—'}</div>
      <div class="dsPts">${r?dsetFmt(r.total):''}</div>
      <div class="dsBlock rw"><b>${rank}</b>${rwHtml}</div></div>`;
  };
  document.getElementById('rkPodium').innerHTML = stand(2)+stand(1)+stand(3);
  // Kendi kartı
  const you=document.getElementById('rkYou');
  if(b.me){
    const above=b.rows[b.me.rank-2];
    const tip = above ? t('dset_to_next',{name:dsetEsc(above.name), n:dsetFmt(above.total-b.me.total+0.01)}) : t('dset_lead');
    const best=d.top.map(dsetFmt).join(' · ');
    you.innerHTML = `<div class="dsYouTop"><b>${t('dset_your_rank',{rank:b.me.rank})}</b>${crown}<span class="dsYouPts">${dsetFmt(b.me.total)}</span></div>
      <div class="dsYouSub">${t('dset_best3',{list:best})}${d.top.length<DSET_TOP_N?' · '+t('dset_more_runs',{n:DSET_TOP_N-d.top.length}):''}</div>
      <div class="dsYouTip">${tip}</div>`;
  } else {
    you.innerHTML = `<div class="dsYouTop"><b>${t('dset_not_played')}</b>${crown}</div><div class="dsYouSub">${t('dset_rule')}</div>`;
  }
  // Liste (4. sıradan itibaren)
  const list=b.rows.slice(3, 40).map(r=>`<div class="dsRow${r.me?' me':''}"><span class="rk">${r.rank}</span><span class="nm">${dsetEsc(r.name)}</span><span class="pt">${dsetFmt(r.total)}</span></div>`).join('');
  document.getElementById('rkList').innerHTML = list;
  const nick=document.getElementById('rkName'); if(nick) nick.textContent=dsetPlayerName()+(stats.myUid?' '+playerTag(stats.myUid):'');
  renderDsetRewards();
}
function renderDsetRewards(){
  const el=document.getElementById('rkRewards'); if(!el) return;
  const row=(lbl, rw)=>`<div class="dsRw"><span>${lbl}</span><span>${dsetRewardText(rw)}</span></div>`;
  el.innerHTML = `<div class="dsRwHead">${icon('gift')} ${t('dset_rewards_title')}</div>`
    + row('🥇', DSET_REWARDS[0]) + row('🥈', DSET_REWARDS[1]) + row('🥉', DSET_REWARDS[2])
    + row(t('dset_rw_top10'), DSET_REWARD_TOP10) + row(t('dset_rw_all'), DSET_REWARD_ALL);
}
function dsetRerollName(){
  let n; do{ n=dsetGenName(Math.random); }while(n===stats.dsetName);
  stats.dsetName=n; if(stats.dset) stats.dset.sent=0; saveStats();
  renderDset(); dsetSubmit();
}
// Ana menüdeki çip: sıra ya da davet.
function syncDsetChip(){
  const el=document.getElementById('menuSetChip'); if(!el) return;   // 2.69.1'de menüden kalktı
  if(!stats.tutorialDone){ el.style.display='none'; return; }
  const d=dsetEnsureDay();
  const b=dsetBuildBoard(d, dsetCachedReal(d.day, dsetLg(d)), dsetDayFrac(d.day));
  el.style.display='';
  document.getElementById('menuSetText').textContent = b.me ? t('dset_your_rank',{rank:b.me.rank}) : t('dset_chip_sub');
}
// Mod ekranındaki kartın alt yazısı.
function dsetModeStatus(){
  const d=dsetEnsureDay();
  const b=dsetBuildBoard(d, dsetCachedReal(d.day, dsetLg(d)), dsetDayFrac(d.day));
  return b.me ? t('dset_chip_rank',{rank:b.me.rank}) : t('mode_daily_desc');
}
