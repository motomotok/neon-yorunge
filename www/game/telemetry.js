// Beat Orbit — KVKK izni, oyuncu özeti (admin paneli için) ve hediye kutusunun
// oyun tarafı (düz <script>). Firebase köprüsü: window.Telemetry
// (src/telemetry.js → firebase-bundle.js). Ağ/Firebase yoksa sessizce no-op.
//
// KVKK: ilk açılışta bir kez bilgilendirme gösterilir. Hata kayıtları her
// zaman (meşru menfaat, aydınlatma metninde yazıyor) gider; istatistik özeti
// YALNIZ oyuncu kutuyu işaretlediyse (açık rıza, varsayılan kapalı) gider.
// İzin Ayarlar → Bilgi → Gizlilik & Yasal → "Veri İzinleri"nden değişir.
const KVKK_VERSION = 1;
const BEAT_MS = 60000;
let _kvkkResolve = null, _lastBeat = 0;

function analyticsOn(){ return stats.kvkkV>=KVKK_VERSION && !!stats.analytics; }

// Açılışta: izin hiç sorulmadıysa pencereyi açar, kapanınca çözülür.
function kvkkMaybeAsk(){
  if(stats.kvkkV>=KVKK_VERSION) return Promise.resolve(false);
  // Oyun sırasında açılmasın: oyuncu ana menüye dönene kadar bekler.
  return new Promise(res=>{
    const tryOpen=()=>{ if(state!=='menu') return setTimeout(tryOpen, 700); _kvkkResolve=res; openKvkk(true); };
    tryOpen();
  });
}
function openKvkk(first){
  const ov=document.getElementById('kvkkOverlay'); if(!ov) return;
  document.getElementById('kvkkStatsSw').classList.toggle('on', first ? false : !!stats.analytics);
  const idEl=document.getElementById('kvkkId'); idEl.textContent='';
  if(window.Telemetry) Telemetry.uid().then(u=>{ if(u) idEl.textContent=t('kvkk_player_id')+': '+u; });
  ov.style.display='flex';
}
function closeKvkk(){
  const on=document.getElementById('kvkkStatsSw').classList.contains('on');
  const was=analyticsOn();
  stats.kvkkV=KVKK_VERSION; stats.analytics=on;
  if(!stats.firstSeen) stats.firstSeen=Date.now();
  saveStats();
  document.getElementById('kvkkOverlay').style.display='none';
  if(on) telemetryBeat(true);
  else if(was && window.Telemetry) Telemetry.forget().catch(()=>{});
  if(_kvkkResolve){ const r=_kvkkResolve; _kvkkResolve=null; r(true); }
}

function telemetrySummary(){
  const d=stats.duel;
  let tier='';
  if(d && d.games>0 && typeof rankTier==='function'){
    const div=rankDiv(d.d||0);
    tier=rankTier(d.d||0, d.lp||0).id+(div ? ' '+ROMAN[div] : '');
  }
  return {
    name: stats.playerName||stats.dsetName||'', ver: GAME_VERSION, lang: cfg.lang,
    games: stats.games||0, best: stats.best||0, mins: Math.floor((stats.playSec||0)/60),
    mmr: d ? d.mmr||0 : 0, tier, duels: d ? d.games||0 : 0,
    gems: stats.gems||0, notes: stats.notes||0, lvl: stats.maxLevel||1,
    linked: typeof isAccountLinked==='function' && isAccountLinked(),
    noads: !!stats.premiumNoAds, pass: !!stats.seasonPremium, since: stats.firstSeen||0,
  };
}
function telemetryBeat(force){
  if(!window.Telemetry || !analyticsOn() || document.hidden) return;
  if(!force && Date.now()-_lastBeat < BEAT_MS-2000) return;
  _lastBeat=Date.now();
  Telemetry.beat(telemetrySummary()).catch(()=>{});
}

// Admin panelinden gelen hediyeler: önce "alındı" işaretlenir, sonra verilir
// (aynı hediye iki cihazda/iki kez alınamasın). stats.giftsDone yedek kontrol.
let _giftBusy=false;
async function checkGifts(){
  if(!window.Telemetry || _giftBusy) return;
  _giftBusy=true;
  try{
    const list=await Telemetry.gifts();
    const done=stats.giftsDone||(stats.giftsDone=[]);
    for(const g of list){
      if(done.includes(g.id)) continue;
      try{ await Telemetry.claimGift(g.id); }catch(e){ continue; }
      done.push(g.id); if(done.length>100) done.splice(0, done.length-100);
      const n=Math.max(0, Math.floor(+g.amount||0));
      if(g.type==='gems' && n>0){ addGems(n); queueToast(t('gift_gems',{n})); }
      else if(g.type==='notes' && n>0){ stats.notes=(stats.notes||0)+n; stats.lifetimeNotes=(stats.lifetimeNotes||0)+n; queueToast(t('gift_notes',{n})); }
      else if(g.type==='noads'){
        stats.premiumNoAds=true; queueToast(t('gift_noads'));
        if(typeof syncPremiumUI==='function') syncPremiumUI();
        if(typeof syncAdButtons==='function') syncAdButtons();
      }
      saveStats();
      if(typeof refreshWallet==='function') refreshWallet();
      if(typeof syncShopIfOpen==='function') syncShopIfOpen();
    }
  }catch(e){}
  _giftBusy=false;
}

function initTelemetry(){
  document.getElementById('kvkkStatsRow').addEventListener('click', e=>{
    e.stopPropagation(); document.getElementById('kvkkStatsSw').classList.toggle('on'); beep(500,0.05,'sine',0.08);
  });
  document.getElementById('kvkkOkBtn').addEventListener('click', e=>{ e.stopPropagation(); closeKvkk(); });
  document.getElementById('kvkkPolicyBtn').addEventListener('click', e=>{ e.stopPropagation(); openDocPage('privacy.html'); });
  document.getElementById('kvkkBtn').addEventListener('click', e=>{
    e.stopPropagation(); document.getElementById('infoPopupOverlay').style.display='none'; openKvkk(false);
  });
  // Oynama süresi: yalnız oyun ekranı açık ve uygulama öndeyken sayılır
  // (stats oyun sonunda zaten kaydediliyor).
  setInterval(()=>{ if(state==='play' && !document.hidden) stats.playSec=(stats.playSec||0)+1; }, 1000);
  setInterval(()=>telemetryBeat(false), 15000);
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden) return;
    telemetryBeat(true); checkGifts();
  });
  setTimeout(checkGifts, 6000);
}
initTelemetry();
