// Beat Orbit — KVKK izni, oyuncu özeti (admin paneli için) ve hediye kutusunun
// oyun tarafı (düz <script>). Firebase köprüsü: window.Telemetry
// (src/telemetry.js → firebase-bundle.js). Ağ/Firebase yoksa sessizce no-op.
//
// KVKK: ilk açılışta bir kez bilgilendirme gösterilir. Hata kayıtları ve oyuncu
// özeti (admin paneli: takma ad, oyun sayısı, süre, bugünkü oyunlar...) HER ZAMAN
// gider (oyun hizmeti / meşru menfaat, aydınlatma metninde yazıyor; Pasla'daki
// gibi). Açık rıza (varsayılan kapalı) yalnız Firebase Analytics olayları için.
// İzin Ayarlar → Bilgi → Gizlilik & Yasal → "Veri İzinleri"nden değişir.
const KVKK_VERSION = 1;
// MALİYET: periyodik sinyal YOK. İzin veren oyuncu yalnız oyunu açınca
// (on:true) ve kapatınca/arka plana atınca (on:false) yazar; oyun 30 dk'dan
// uzun açık kalırsa yarım saatte bir tek yazma daha. Admin paneli "on:true
// ve son 35 dk içinde" olanı şu an oynuyor sayar.
const BEAT_MS = 30*60000, GIFT_CHECK_MS = 10*60000;
let _lastBeat = 0, _lastGiftCheck = 0;

function analyticsOn(){ return stats.kvkkV>=KVKK_VERSION && !!stats.analytics; }

// Google Ads'in kurulum sonrası davranışa göre teklif verebilmesi için Firebase
// Analytics olayları (yalnız izin verenlerde, yalnız telefonda). Tek seferlik
// olaylar stats.evSent'te tutulur: eğitimi bitirdi, 5. oyun.
function trackEvent(name, once){
  if(!window.Telemetry || !analyticsOn()) return;
  if(once){ const s=stats.evSent||(stats.evSent=[]); if(s.includes(name)) return; s.push(name); saveStats(); }
  Telemetry.logEvent(name);
}

// Açılışta: izin hiç sorulmadıysa ekranın altında küçük bir şerit çıkar
// (oyunu kapatmaz, beklemez). Yalnız ana menüdeyken görünür; oyuncu karar
// verene kadar her menüye dönüşte yeniden belirir. "Kabul et" büyük/parlak,
// "Reddet" küçük; "Ayarlar" ayrıntılı pencereyi (kvkkOverlay) açar.
// Not: kutu önceden işaretli gelmez, Reddet her zaman görünür — KVKK/GDPR'de
// geçerli onay için şart.
function kvkkMaybeAsk(){
  if(stats.kvkkV>=KVKK_VERSION) return false;
  const bar=document.getElementById('kvkkBar');
  const sync=()=>{
    if(stats.kvkkV>=KVKK_VERSION){ bar.style.display='none'; clearInterval(_kvkkBarTimer); return; }
    // İlk açılışı kalabalıklaştırmasın: ilk gerçek oyun bitmeden çıkmaz.
    const show = state==='menu' && (stats.scoreRuns||0)>=1 && document.getElementById('kvkkOverlay').style.display!=='flex';
    bar.style.display = show ? 'flex' : 'none';
  };
  _kvkkBarTimer=setInterval(sync, 400); sync();
  return true;
}
let _kvkkBarTimer=null;
function kvkkDecide(on){
  stats.kvkkV=KVKK_VERSION; stats.analytics=!!on;
  if(!stats.firstSeen) stats.firstSeen=Date.now();
  saveStats();
  if(window.Telemetry) Telemetry.analyticsEnabled(!!on);
  document.getElementById('kvkkBar').style.display='none';
  telemetryBeat(true);
}
function openKvkk(first){
  const ov=document.getElementById('kvkkOverlay'); if(!ov) return;
  document.getElementById('kvkkStatsSw').classList.toggle('on', first ? false : !!stats.analytics);
  const idEl=document.getElementById('kvkkId'); idEl.textContent='';
  if(window.Telemetry) Telemetry.uid().then(u=>{ if(u) idEl.textContent=t('kvkk_player_id')+': '+u; });
  ov.style.display='flex';
}
function closeKvkk(){
  document.getElementById('kvkkOverlay').style.display='none';
  kvkkDecide(document.getElementById('kvkkStatsSw').classList.contains('on'));
}

// Cihaz ve akıcılık (panel → Raporlar → "Telefon ve akıcılık"): reklamdan
// gelenler ucuz telefonda takılıp mı çıkıyor? Saniyede çizilen kare sayısı
// oyunda ve menüde ayrı ayrı yumuşatılarak tutulur (bu oturumun değeri).
let _frames = 0, _fpsPlay = null, _fpsMenu = null;
(function _frameCount(){ _frames++; requestAnimationFrame(_frameCount); })();
const _fpsAvg = (prev, v) => prev==null ? v : prev*0.85 + v*0.15;
function deviceModel(){
  const ua=navigator.userAgent||'';
  const m=ua.match(/Android [\d.]+;(?: [a-z]{2}[-_][a-z]{2};)? ([^;)]+?)(?: Build[^;)]*)?[;)]/i);
  if(m) return m[1].trim();
  if(/iPad/.test(ua)) return 'iPad '+screen.width+'x'+screen.height;
  if(/iPhone/.test(ua)) return 'iPhone '+screen.width+'x'+screen.height;
  return '';
}
function perfSummary(){
  const i=(window.Render3D && typeof _gfx3dState!=='undefined' && _gfx3dState==='ready') ? Render3D.info() : null;
  return { fps: Math.round(_fpsPlay||0), mfps: Math.round(_fpsMenu||0), dev: deviceModel(), gpu: i ? i.gpu||'' : '',
    q: i ? i.quality||'' : (cfg.gfx==='3d' ? '' : '2d'), ram: navigator.deviceMemory||0, boot: stats.bootDs||0 };
}

// Oyuncu şu an nerede (çıkış anında son yazılan değer = nerede bıraktı).
function telemetryScreen(){
  let s=String(state||'');
  if(typeof tutorialActive!=='undefined' && tutorialActive) s+=':tut';
  else if(typeof guideActive!=='undefined' && guideActive) s+=':'+guideActive;
  return s.slice(0,16);
}
// İlk gerçek oyun (r1) ve son oyun: süre, skor, darbe, öldüren tehlike, devam
// teklifi (0 yok · 1 teklif edildi, geçti · 2 devam etti). Oyun sonu ekranında
// kaç saniye kaldığı (os) ve oradan nereye gittiği (ob) ekran değişiminde yazılır.
function telemetryRun(sec, sc){
  const o={s:Math.round(sec), sc:Math.floor(sc), h:session.hits||0, k:session.lastHit||'',
    rv: session.revivedUsed ? 2 : session.reviveOffered ? 1 : 0};
  stats.lastRun={s:o.s, h:o.h};
  if((stats.scoreRuns||0)===1 && !stats.r1) stats.r1=Object.assign({at:Date.now()}, o);
}
function telemetryOnState(prev, cur){
  const r=stats.r1;
  if(prev==='over' && r && r.ob==null){ r.ob=cur; r.os=Math.round((Date.now()-r.at)/1000); saveStats(); }
}
function runSummary(){
  const r=stats.r1||{}, l=stats.lastRun||{};
  const os = r.ob==null && r.at && state==='over' ? Math.round((Date.now()-r.at)/1000) : (r.os||0);
  return { scr: telemetryScreen(), opens: stats.opens||0, r1s: r.s||0, r1sc: r.sc||0, r1h: r.h||0, r1k: r.k||'',
    r1rv: r.rv||0, r1os: os, r1ob: r.ob||'', lrs: l.s||0, lrh: l.h||0 };
}

function telemetrySummary(){
  // İlk açılış zamanı herkes için (eskiden yalnız KVKK kararında yazılıyordu).
  if(!stats.firstSeen) stats.firstSeen=Date.now();
  if(stats.ft==null && stats.tutorialDone) stats.ft = FT_LEGACY;
  const d=stats.duel;
  let tier='';
  if(d && d.games>0 && typeof rankTier==='function'){
    const div=rankDiv(d.d||0);
    tier=rankTier(d.d||0, d.lp||0).id+(div ? ' '+ROMAN[div] : '');
  }
  return {
    name: stats.playerName||(typeof dsetPlayerName==='function' ? dsetPlayerName() : stats.dsetName)||'', ver: GAME_VERSION, lang: cfg.lang,
    games: stats.games||0, best: stats.best||0, mins: Math.floor((stats.playSec||0)/60),
    mmr: d ? d.mmr||0 : 0, tier, duels: d ? d.games||0 : 0,
    gems: stats.gems||0, notes: stats.notes||0, lvl: stats.maxLevel||1,
    linked: typeof isAccountLinked==='function' && isAccountLinked(),
    noads: !!stats.premiumNoAds, pass: !!stats.seasonPremium, since: stats.firstSeen||0,
    day: dayStat().d, dayGames: dayStat().g, dayMins: Math.floor(dayStat().s/60),
    ft: stats.ft||0, runs: stats.scoreRuns||0, days: stats.activeDays||1,
    ...perfSummary(), ...runSummary(),
  };
}
// İlk deneyim hunisi (panel → Raporlar → Oyuncu yolculuğu). Oyuncunun ulaştığı
// en ileri adım; her adım oyuncu başına yalnız BİR kez yazılır (~7 yazma):
//  1 öğretici başladı · 2 nota adımı · 3 kaçış adımı · 4 öğretici bitti
//  5 ilk gerçek oyun başladı · 6 ilk gerçek oyun bitti · 7 ilk yeteneği aldı
// Sonrası özetteki runs (oyun sayısı) ve days (dönüş) ile izlenir.
// 2.76.1'den önce öğreticiyi bitirmiş eski oyuncular 99 (huniye girmez).
const FT_LEGACY = 99;
function telemetryFt(n){
  if((stats.ft||0) >= n) return;
  stats.ft = n; saveStats();
  if(!window.Telemetry) return;
  _lastBeat=Date.now(); _lastOn=true;
  Telemetry.beat(Object.assign(telemetrySummary(), {on:true})).catch(()=>{});
}
// Bugünkü oyun sayısı ve süresi (panelde "bugün kim ne kadar oynadı").
function dayStat(){
  const d=todayStr();
  if(!stats.dayStat || stats.dayStat.d!==d){ stats.dayStat={d, g:0, s:0}; stats.activeDays=(stats.activeDays||0)+1; }
  return stats.dayStat;
}
// Oyun sonunda: bugünkü sayaç +1 ve özet yazılır (en fazla 2 dakikada bir).
let _lastRunBeat = 0;
function telemetryRunEnd(){
  dayStat().g++;
  if(!window.Telemetry || Date.now()-_lastRunBeat < 120000) return;
  _lastRunBeat=Date.now(); _lastBeat=Date.now(); _lastOn=true;
  Telemetry.beat(Object.assign(telemetrySummary(), {on:true})).catch(()=>{});
}
let _lastOn = false;
function telemetryBeat(force){
  if(!window.Telemetry || document.hidden) return;
  // Zaten "oyunda" yazılmışsa (ör. reklamdan dönüş) yalnız 30 dk'da bir yeniler.
  if(_lastOn && Date.now()-_lastBeat < BEAT_MS-5000) return;
  _lastBeat=Date.now(); _lastOn=true;
  Telemetry.beat(Object.assign(telemetrySummary(), {on:true})).catch(()=>{});
}
// Oturum sonu: güncel istatistikle "çıktı" yazılır (bir kez).
function telemetryEnd(){
  if(!window.Telemetry || !_lastOn) return;
  // Reklam tam ekrandayken oyun arka plana düşer; bu oturum sonu değildir.
  if(window.Ads && Ads.isShowing && Ads.isShowing()) return;
  _lastOn=false; _lastBeat=Date.now();
  Telemetry.beat(Object.assign(telemetrySummary(), {on:false})).catch(()=>{});
}

// Admin panelinden gelen hediyeler: önce "alındı" işaretlenir, sonra verilir
// (aynı hediye iki cihazda/iki kez alınamasın). stats.giftsDone yedek kontrol.
let _giftBusy=false;
async function checkGifts(){
  // Hediye sorgusu açılışta ve en fazla 10 dakikada bir (her geri dönüşte değil).
  if(!window.Telemetry || _giftBusy || Date.now()-_lastGiftCheck < GIFT_CHECK_MS) return;
  _giftBusy=true; _lastGiftCheck=Date.now();
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
  if(window.Telemetry) Telemetry.analyticsEnabled(analyticsOn());
  document.getElementById('kvkkStatsRow').addEventListener('click', e=>{
    e.stopPropagation(); document.getElementById('kvkkStatsSw').classList.toggle('on'); beep(500,0.05,'sine',0.08);
  });
  document.getElementById('kvkkOkBtn').addEventListener('click', e=>{ e.stopPropagation(); closeKvkk(); });
  document.getElementById('kvkkBarYes').addEventListener('click', e=>{ e.stopPropagation(); beep(700,0.06,'sine',0.1); kvkkDecide(true); queueToast(t('kvkk_thanks')); });
  document.getElementById('kvkkBarNo').addEventListener('click', e=>{ e.stopPropagation(); kvkkDecide(false); });
  document.getElementById('kvkkBarMore').addEventListener('click', e=>{ e.preventDefault(); e.stopPropagation(); openKvkk(stats.kvkkV<KVKK_VERSION); });
  document.getElementById('kvkkPolicyBtn').addEventListener('click', e=>{ e.stopPropagation(); openDocPage('privacy.html'); });
  document.getElementById('kvkkBtn').addEventListener('click', e=>{
    e.stopPropagation(); document.getElementById('infoPopupOverlay').style.display='none'; openKvkk(false);
  });
  // Oynama süresi: yalnız oyun ekranı açık ve uygulama öndeyken sayılır
  // (stats oyun sonunda zaten kaydediliyor).
  let stPrev=null, stSince=0;
  setInterval(()=>{
    const fr=_frames; _frames=0;
    if(state!==stPrev){ if(stPrev!==null) telemetryOnState(stPrev, state); stPrev=state; stSince=Date.now(); }
    if(document.hidden) return;
    if(state==='play'){ stats.playSec=(stats.playSec||0)+1; dayStat().s++; _fpsPlay=_fpsAvg(_fpsPlay, fr); }
    // Menü FPS'i: açılış logosu + 3D kurulumu (ilk ~8 sn) ve menüye geçişin
    // ilk 2 sn'si sayılmaz — eskiden yeni oyuncuda yalnız açılışı ölçüyordu.
    else if(state==='menu' && performance.now()>8000 && Date.now()-stSince>=2000 && !document.getElementById('splash'))
      _fpsMenu=_fpsAvg(_fpsMenu, fr);
  }, 1000);
  setInterval(()=>telemetryBeat(false), 60000);
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden){ telemetryEnd(); return; }
    telemetryBeat(true); checkGifts();
  });
  setTimeout(checkGifts, 6000);
}
initTelemetry();
