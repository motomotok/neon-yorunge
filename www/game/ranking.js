// Oyuncu adı + Global Sıralama (Klasik mod).
//
// Ad (Clash Royale tarzı): oyuncu kendi adını yazar (3-16 karakter: harf —
// her dilde —, rakam, boşluk, _ . -). Uygunsuz kelimeler istemcide süzülür,
// başkalarından gelen uygunsuz adlar da ekranda takma adla gösterilir. İlk ad
// ve bir değişiklik ücretsiz, sonrakiler NAME_CHANGE_GEMS elmas. Aynı ad
// birden çok kişide olabilir; tablolarda adın yanında uid'den türeyen kısa
// bir etiket (#4F2K) durur. Ad Günün Seti'nde de kullanılır.
//
// Sıralama: iki tablo — "Bu Hafta" (pazartesi 00:00 TR'de yenilenir; yeni
// gelen de zirveye çıkabilsin) ve "Tüm Zamanlar". Yalnız Klasik mod sayılır,
// Isı mühürleri dahil (risk almak ödüllendirilir). Rekor kırınca sessizce
// gönderilir (bkz. src/leaderboard.js GlobalBoard, firestore.rules lb/...).
const NAME_CHANGE_GEMS = 50;
const NAME_RE = /^[\p{L}\p{N} _.\-]{3,16}$/u;
// Uygunsuz kelimeler: harfler sadeleştirilip (Türkçe karakterler, 0→o, 1→i…,
// boşluk/noktalama atılır) kök aranır.
const NAME_BAD = /(amk|amina|aminak|orospu|pic|sik|yarak|yarrak|amcik|pezevenk|kahpe|ibne|kaltak|serefsiz|gavat|yavsak|gotveren|fuck|shit|bitch|cunt|dick|nigg|porn|sex|nazi|hitler|penis|vagina|whore|slut|rape)/;
function nameNorm(s){
  return String(s||'').toLocaleLowerCase('tr-TR')
    .replace(/[çğıöşüâîû]/g, c=>({'ç':'c','ğ':'g','ı':'i','ö':'o','ş':'s','ü':'u','â':'a','î':'i','û':'u'}[c]))
    .replace(/[0134578@$]/g, c=>({'0':'o','1':'i','3':'e','4':'a','5':'s','7':'t','8':'b','@':'a','$':'s'}[c]))
    .replace(/[^a-z]/g,'');
}
function nameIsBad(s){ return NAME_BAD.test(nameNorm(s)); }
function nameClean(s){ return String(s||'').replace(/\s+/g,' ').trim(); }
// Başkasının adı: uygunsuzsa oyuna özgü takma ad.
function safeOtherName(name, uid){
  name=String(name||'');
  return nameIsBad(name) ? 'DJ'+(1000 + dsetStrHash(String(uid||name)) % 9000) : name;
}
function playerTag(uid){
  if(!uid) return '';
  return '#'+(dsetStrHash(String(uid)) % 1679616).toString(36).toUpperCase().padStart(4,'0');
}
// Oyuncunun adı: kendi seçtiği, yoksa Günün Seti'nin ürettiği takma ad.
function playerName(){ return stats.playerName || dsetPlayerName(); }

// ---- Ad penceresi ----
let _nameDone=null;
function nameChangeCost(){
  if(!stats.playerName) return 0;                 // ilk ad
  return (stats.nameChanges||0) < 1 ? 0 : NAME_CHANGE_GEMS;
}
// opts.required: "Sonra" yok — DJ Vinil rehberinde isim yazılmadan geçilmez.
function openNameDialog(onDone, opts){
  _nameDone=onDone||null;
  const cb=document.getElementById('nameCancelBtn'); if(cb) cb.style.display = (opts && opts.required) ? 'none' : '';
  const ov=document.getElementById('nameOverlay'), inp=document.getElementById('nameInput');
  const cost=nameChangeCost();
  document.getElementById('nameSub').innerHTML = !stats.playerName ? t('name_first_sub')
    : cost===0 ? t('name_free_sub') : icon('gem')+' '+t('name_cost_sub',{n:cost});
  document.getElementById('nameErr').textContent='';
  inp.value = stats.playerName || '';
  inp.placeholder = t('name_placeholder');
  ov.style.display='flex';
  setTimeout(()=>{ try{ inp.focus(); }catch(e){} }, 60);
}
function closeNameDialog(){ document.getElementById('nameOverlay').style.display='none'; }
function saveNameDialog(){
  const err=document.getElementById('nameErr');
  const v=nameClean(document.getElementById('nameInput').value);
  if(!NAME_RE.test(v)){ err.textContent=t('name_err_len'); beep(200,0.1,'square',0.08); return; }
  if(nameIsBad(v)){ err.textContent=t('name_err_bad'); beep(200,0.1,'square',0.08); return; }
  if(v===stats.playerName){ closeNameDialog(); return; }
  const cost=nameChangeCost();
  if(cost>0 && (stats.gems||0)<cost){ err.textContent=t('name_err_gems'); beep(200,0.1,'square',0.08); return; }
  if(cost>0){ stats.gems-=cost; refreshWallet(); }
  if(stats.playerName) stats.nameChanges=(stats.nameChanges||0)+1;
  stats.playerName=v;
  // Yeni adla tablolara yeniden yaz (skor aynı kalır).
  const g=rkState(); g.allSent=0; g.weekSent=0;
  if(stats.dset) stats.dset.sent=0;
  saveStats();
  closeNameDialog();
  queueToast(t('name_saved_toast',{name:v}));
  beep(700,0.08,'sine',0.1); beep(1000,0.1,'triangle',0.09);
  rkSync(); if(typeof dsetSubmit==='function') dsetSubmit();
  if(_nameDone){ const f=_nameDone; _nameDone=null; f(); }
}

// ---- Sıralama ----
const RK_TZ_MS = 3*3600000, RK_CACHE_MS = 600000;
const RK = {tab:'today', cache:{}, loading:{}};
function rkWeekKey(ms){
  const d=new Date((ms==null ? gameNowMs() : ms)+RK_TZ_MS);
  const dow=(d.getUTCDay()+6)%7;                                  // pazartesi=0
  const thu=new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()-dow+3));
  const y=thu.getUTCFullYear(), jan1=Date.UTC(y,0,1);
  const wk=1+Math.floor((thu-jan1)/86400000/7);
  return 'w'+y+'-'+String(wk).padStart(2,'0');
}
function rkWeekMsLeft(){
  const now=gameNowMs(), d=new Date(now+RK_TZ_MS), dow=(d.getUTCDay()+6)%7;
  const nextMon=Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()-dow+7)-RK_TZ_MS;
  return Math.max(0, nextMon-now);
}
function rkState(){
  if(!stats.gb) stats.gb={all:0, allHeat:0, allSent:0, wk:'', week:0, weekHeat:0, weekSent:0};
  const g=stats.gb, wk=rkWeekKey();
  if(g.wk!==wk){ g.wk=wk; g.week=0; g.weekHeat=0; g.weekSent=0; }
  // Özellikten önceki Klasik rekor tüm zamanlar tablosuna bir kez taşınır.
  if(!g.seeded){ g.seeded=1; if((stats.best||0)>g.all) g.all=stats.best; }
  return g;
}
const rkBoard = (tab)=> tab==='all' ? 'all' : rkState().wk;
const rkRound = (v)=> Math.round(v*100)/100;
// Klasik oyun bitti: rekorsa tablolara yaz.
function rkOnRun(score, heat){
  if(!(score>0)) return;
  const g=rkState();
  if(score>g.all){ g.all=score; g.allHeat=heat||0; }
  if(score>g.week){ g.week=score; g.weekHeat=heat||0; }
  saveStats(); rkSync();
}
let _rkSyncing=false;
async function rkSync(){
  if(!window.GlobalBoard || _rkSyncing) return;
  _rkSyncing=true;
  try{
    const g=rkState(), name=playerName();
    if(g.all>0 && g.allSent!==g.all){
      try{ const uid=await GlobalBoard.submit('all', name, rkRound(g.all), g.allHeat||0); stats.myUid=uid; g.allSent=g.all; saveStats(); delete RK.cache.all; }catch(e){}
    }
    if(g.week>0 && g.weekSent!==g.week){
      const wk=g.wk;
      try{ const uid=await GlobalBoard.submit(wk, name, rkRound(g.week), g.weekHeat||0); stats.myUid=uid; if(rkState().wk===wk){ g.weekSent=g.week; } saveStats(); delete RK.cache[wk]; }catch(e){}
    }
  } finally { _rkSyncing=false; }
}
async function rkFetch(board, force){
  const c=RK.cache[board];
  if(!force && c && Date.now()-c.at<RK_CACHE_MS) return c;
  if(RK.loading[board]) return RK.loading[board];
  const g=rkState(), my = board==='all' ? g.all : g.week;
  RK.loading[board]=(async()=>{
    try{
      const [top, rank, above] = await Promise.all([
        GlobalBoard.top(board, 10),
        my>0 ? GlobalBoard.rank(board, rkRound(my)) : Promise.resolve(null),
        my>0 ? GlobalBoard.above(board, rkRound(my)) : Promise.resolve(null),
      ]);
      const res={at:Date.now(), top, rank, above, my, ok:true};
      RK.cache[board]=res; return res;
    }catch(e){ return c || {ok:false, top:[], my}; }
    finally{ delete RK.loading[board]; }
  })();
  return RK.loading[board];
}
function goRanking(tab){
  if(tab) RK.tab=tab;
  state='ranking'; setHud(false); showScreen('ranking');
  renderRanking(null);
  const after=()=>{ rkSync().then(()=>rkLoad(false)); };
  // İlk giriş: DJ Vinil rehberi (isim yoksa önce isim yazdırır). Rehber
  // görüldüyse ve isim yoksa düz isim penceresi.
  if(typeof guideRankEnter==='function' && guideRankEnter(after)) return;
  if(!stats.playerName) openNameDialog(after); else after();
}
function rkLoad(force){
  if(RK.tab==='today'){ dsetShowToday(); return; }
  const board=rkBoard(RK.tab), tab=RK.tab;
  if(!window.GlobalBoard){ renderRanking({ok:false, top:[], my:0}); return; }
  rkFetch(board, force).then(res=>{ if(state==='ranking' && RK.tab===tab) renderRanking(res); });
}
function rkSetTab(tab){
  RK.tab=tab;
  document.querySelectorAll('#rkTabs .stab').forEach(el=>el.classList.toggle('sel', el.dataset.rktab===tab));
  if(tab==='today'){ renderRanking(null); dsetShowToday(); return; }
  renderRanking(RK.cache[rkBoard(tab)]||null); rkLoad(false);
}
function rkFmt(v){ return (Math.round(v*100)/100).toLocaleString(cfg.lang||'tr',{maximumFractionDigits:2}); }
function renderRanking(res){
  document.querySelectorAll('#rkTabs .stab').forEach(el=>el.classList.toggle('sel', el.dataset.rktab===RK.tab));
  const today = RK.tab==='today';
  const rw=document.getElementById('rkRewards'), note=document.getElementById('rkNote');
  if(rw) rw.style.display = today ? '' : 'none';
  if(note) note.style.display = today ? 'none' : '';
  if(today){ renderDset(); return; }   // ödüllü günlük sıralama (dailyset.js)
  const ms=rkWeekMsLeft(), dd=Math.floor(ms/86400000), hh=Math.floor(ms%86400000/3600000);
  document.getElementById('rkTimer').innerHTML = RK.tab==='week' ? icon('hourglass')+' '+t('rank_reset_in',{d:dd, h:hh}) : icon('trophy')+' '+t('rank_tab_all');
  const nm=document.getElementById('rkName'); if(nm) nm.textContent=playerName()+(stats.myUid?' '+playerTag(stats.myUid):'');
  const podium=document.getElementById('rkPodium'), you=document.getElementById('rkYou'), list=document.getElementById('rkList');
  if(!res){ podium.innerHTML=''; list.innerHTML=''; you.innerHTML=`<div class="dsYouSub">${t('rank_loading')}</div>`; return; }
  const me=stats.myUid;
  const rows=(res.top||[]).map((r,i)=>({rank:i+1, uid:r.uid, me:r.uid===me, name:r.uid===me ? playerName() : safeOtherName(r.name, r.uid), score:r.score}));
  const stand=(rank)=>{
    const r=rows[rank-1], medal=['🥇','🥈','🥉'][rank-1];
    return `<div class="dsStand p${rank}${r&&r.me?' me':''}"><div class="dsMedal">${medal}</div>
      <div class="dsName">${r?dsetEsc(r.name):'—'}</div><div class="dsPts">${r?rkFmt(r.score):''}</div><div class="dsBlock">${rank}</div></div>`;
  };
  podium.innerHTML = stand(2)+stand(1)+stand(3);
  list.innerHTML = rows.slice(3).map(r=>`<div class="dsRow${r.me?' me':''}"><span class="rk">${r.rank}</span><span class="nm">${dsetEsc(r.name)} <small class="rkTag">${playerTag(r.uid)}</small></span><span class="pt">${rkFmt(r.score)}</span></div>`).join('');
  // Kendi kartı: kaçıncıyım, bir üstü geçmek ve zirve için ne lazım.
  if(!res.ok){ you.innerHTML=`<div class="dsYouTop"><b>${t('rank_offline')}</b></div>`; return; }
  if(!(res.my>0) || !res.rank){ you.innerHTML=`<div class="dsYouTop"><b>${t('rank_none')}</b></div><div class="dsYouSub">${t('rank_note')}</div>`; return; }
  const first=rows[0];
  let tips='';
  if(res.rank===1) tips=`<div class="dsYouTip">👑 ${t('rank_first')}</div>`;
  else {
    if(res.above) tips+=`<div class="dsYouTip">${t('rank_to_next',{rank:res.rank-1, n:rkFmt(res.above.score-res.my+0.01)})}</div>`;
    if(first && res.rank>2) tips+=`<div class="dsYouSub">${t('rank_to_first',{n:rkFmt(first.score+0.01)})}</div>`;
  }
  you.innerHTML=`<div class="dsYouTop"><b>${t('rank_you',{rank:res.rank})}</b><span class="dsYouPts">${rkFmt(res.my)}</span></div>${tips}`;
}
