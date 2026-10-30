// Oyun müziği ("Model B"): şarkı kendi temposunda döngüde çalar, oyuncu
// kombo kurdukça dolar, çarpınca söner. Ana menü müziği kombodan bağımsızdır.
//
// Her tema şarkısı iki parça olarak gelir (music/<ad>/drums.m4a + rest.m4a);
// ikisi aynı anda başlar, "rest" (bas + melodi) bir alçak geçiren filtre ve
// ses seviyesiyle kombo basamaklarına göre açılır:
//   kombo 0-4: sadece davul · 5: bas · 10: melodi (kısık) · 15: tam şarkı
//   20: ekstra parlaklık — eşikler oyundaki "MELODİ xN" (her 5 nota)
//   anlarıyla çakışır; o yazının altında müziğin ne kazandığı da yazar.
//   Tasarımın ilk hali 0 davul / 5 bas / 10 melodiydi; 2-4-6 çok kolay bulundu.
// Yükselişler bir sonraki ölçünün başına hizalanır (ritim hiç kaymaz);
// çarpınca düşüş anında olur.
//
// Dosyalar, döngünün 0.3 sn öncesi/sonrasıyla birlikte kesildi: AAC'nin
// baştaki sessizlik payı döngü noktalarını bozmasın diye. Bellek için ses
// bağlamı 32 kHz'de açılır ve en fazla iki şarkı (menü + son tema) çözülmüş
// tutulur. fx.js'ten SONRA, engine.js'ten önce de olabilir — oyun durumuna
// yalnızca zamanlayıcı içinde bakılır.
// Oyuncunun müzik sesi (cfg.musicVol, 0-1) bu tavanla çarpılır. Varsayılan
// 0.5 → eski sabit seviyenin (0.5) yarısından biraz fazlası: ilk açılışta
// bağırmasın, yormasın (kullanıcı geri bildirimi).
const MUSIC_MAX = 0.6;
const MUSIC_VOL_DEFAULT = 0.5;
function musicVolume(){ const v = cfg.musicVol; return MUSIC_MAX * (typeof v==='number' ? Math.max(0, Math.min(1, v)) : MUSIC_VOL_DEFAULT); }
const MUSIC_LOOP_START = 0.3;
const MUSIC_TRACKS = {
  menu:   {bpm:84.999,  loopLen:56.4709, minorRoot:0, parts:['full']},
  retro:  {bpm:119.986, loopLen:56.0065, minorRoot:0, parts:['drums','rest']},
  synth:  {bpm:109.999, loopLen:61.0917, minorRoot:0, parts:['drums','rest']},
  urban:  {bpm:89.995,  loopLen:53.3362, minorRoot:5, parts:['drums','rest']},
  kozmik: {bpm:104.009, loopLen:55.3796, minorRoot:7, parts:['drums','rest']},
};
// Yeni temaların kendi şarkısı henüz yok; en yakın havadaki parçayı çalarlar.
const THEME_MUSIC = {neon:'retro', synthbeats:'synth', urbansounds:'urban', cosmicsoundwave:'kozmik', lofichillhop:'kozmik', hellsanthem:'urban',
  candydrip:'retro', steamfunk:'urban', cybercircuit:'synth', crystalrune:'kozmik'};
// Kombo basamağı → "rest" parçasının sesi, filtre frekansı, tiz parlaklığı (dB).
const MUSIC_LEVELS = [
  {rest:0,    lp:20000, shelf:0},
  {rest:0.65, lp:600,   shelf:0},
  {rest:0.8,  lp:3200,  shelf:0},
  {rest:1,    lp:20000, shelf:0},
  {rest:1,    lp:20000, shelf:3},
];
function musicLevelFor(c){ return c>=20 ? 4 : c>=15 ? 3 : c>=10 ? 2 : c>=5 ? 1 : 0; }

const Music = (function(){
  let ctx=null, out=null, duck=null, fx=null;
  const buffers = {};         // ad → Promise<{part: AudioBuffer}>
  let cur=null;               // çalan şarkı
  let loadingName=null;
  let suspended=false, lastCombo=0;

  function ensureCtx(){
    if(ctx) return ctx;
    const C = window.AudioContext || window.webkitAudioContext; if(!C) return null;
    // iOS (WKWebView): donanımdan farklı örnekleme hızıyla açılan bağlam hata vermeden
    // SESSİZ kalabiliyor (TestFlight 1.0.1: efektler var, müzik yok). iOS'ta varsayılan hız.
    const IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
    try{ ctx = IOS ? new C({latencyHint:'playback'}) : new C({sampleRate:32000, latencyHint:'playback'}); }
    catch(e){ try{ ctx = new C(); }catch(e2){ return null; } }
    // iOS telefon görüşmesi/Siri sonrası bağlamı 'interrupted' bırakır: ilk dokunuşta devam.
    ctx.onstatechange = ()=>{ if(ctx.state==='interrupted' && !suspended) resume(); };
    out = ctx.createGain(); out.gain.value = musicVolume();
    duck = ctx.createGain(); duck.gain.value = 1;
    // Risk balonu etkileri için tüm şarkıya binen filtre (bkz. setFx).
    fx = ctx.createBiquadFilter(); fx.type='lowpass'; fx.frequency.value=ctx.sampleRate*0.45; fx.Q.value=0.7;
    duck.connect(fx); fx.connect(out); out.connect(ctx.destination);
    return ctx;
  }
  function resume(){ try{ if(ctx && ctx.state!=='running' && !suspended){ const p=ctx.resume(); if(p && p.catch) p.catch(()=>{}); } }catch(e){} }

  // Düşük RAM'li cihazlar (navigator.deviceMemory ≤ 3 GB; çoğunlukla Android):
  // çözülmüş stereo parça ~14 MB (56 sn × 32 kHz × 2 kanal × 4 bayt), iki şarkı
  // ~44 MB. Bu cihazlarda kanallar tek kanala (mono) karıştırılıp yarıya iner.
  // Diğer cihazlarda stereo aynen kalır.
  const LOW_MEM = (navigator.deviceMemory || 8) <= 3;
  function maybeMono(buf){
    if(!LOW_MEM || buf.numberOfChannels < 2) return buf;
    const m = ctx.createBuffer(1, buf.length, buf.sampleRate), o = m.getChannelData(0);
    const a = buf.getChannelData(0), b = buf.getChannelData(1);
    for(let i=0;i<o.length;i++) o[i] = (a[i]+b[i])*0.5;
    return m;
  }
  function decode(ab){
    return new Promise((res, rej)=>{
      const p = ctx.decodeAudioData(ab, res, rej);
      if(p && p.then) p.then(res, rej);
    });
  }
  // iOS (Capacitor, capacitor://): uygulama içi ses dosyaları HTTP olmayan bir yanıtla
  // gelir, durum kodu 0 olur ama içerik doludur (24.10.2026: "music load failed: 0").
  // Durum 0 + dolu içerik kabul; olmazsa XHR ile bir kez daha denenir.
  function fetchAudio(url){
    return fetch(url).then(r=>{
      if(!r.ok && r.status!==0) throw new Error('HTTP '+r.status);
      return r.arrayBuffer();
    }).then(ab=>{ if(!ab || !ab.byteLength) throw new Error('empty'); return ab; })
      .catch(()=>new Promise((res, rej)=>{
        const x=new XMLHttpRequest(); x.open('GET', url); x.responseType='arraybuffer';
        x.onload=()=>{ (x.response && x.response.byteLength) ? res(x.response) : rej(new Error('xhr empty '+x.status)); };
        x.onerror=()=>rej(new Error('xhr error')); x.send();
      }));
  }
  function load(name){
    if(buffers[name]) return buffers[name];
    // Bellek: menü + en son tema dışında çözülmüş şarkı tutulmaz.
    Object.keys(buffers).forEach(k=>{ if(k!=='menu' && k!==name) delete buffers[k]; });
    const tr = MUSIC_TRACKS[name];
    buffers[name] = Promise.all(tr.parts.map(p =>
      fetchAudio('music/'+name+'/'+p+'.m4a').then(decode).then(maybeMono)
    )).then(list=>{ const o={}; tr.parts.forEach((p,i)=>o[p]=list[i]); return o; })
      .catch(e=>{ delete buffers[name]; throw e; });
    return buffers[name];
  }

  function start(name, bufs){
    const tr = MUSIC_TRACKS[name];
    const bus = ctx.createGain(); bus.gain.value = 0; bus.connect(duck);
    const lp = ctx.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=20000; lp.Q.value=0.7;
    const shelf = ctx.createBiquadFilter(); shelf.type='highshelf'; shelf.frequency.value=6000; shelf.gain.value=0;
    lp.connect(shelf); shelf.connect(bus);
    const t0 = ctx.currentTime + 0.05, nodes = {};
    tr.parts.forEach(p=>{
      const s = ctx.createBufferSource(); s.buffer = bufs[p]; s.loop = true;
      s.loopStart = MUSIC_LOOP_START; s.loopEnd = MUSIC_LOOP_START + tr.loopLen;
      const g = ctx.createGain(); g.gain.value = (p==='rest') ? 0 : 1;
      s.connect(g); g.connect(p==='rest' ? lp : bus);
      s.start(t0, MUSIC_LOOP_START);
      nodes[p] = {s, g};
    });
    // Menü müziği kısıktan başlayıp ~3.5 sn'de yavaşça açılır (oyun sonu →
    // menü geçişi "tak" diye olmasın, uygulama açılınca da bağırmasın).
    bus.gain.setValueAtTime(0, t0);
    if(name==='menu') bus.gain.linearRampToValueAtTime(1, t0 + 3.5);
    else bus.gain.setTargetAtTime(1, t0, 0.35);
    cur = {name, tr, t0, bar: 4*60/tr.bpm, bus, lp, shelf, nodes, level:-1};
  }
  function stop(fade){
    if(!cur) return;
    const c = cur; cur = null;
    const t = ctx.currentTime;
    // Menünün yavaş açılışı yarıdaysa o anki seviyeden sönsün (sıfıra zıplamasın).
    const g = c.bus.gain;
    if(g.cancelAndHoldAtTime) g.cancelAndHoldAtTime(t); else { const v=g.value; g.cancelScheduledValues(t); g.setValueAtTime(v, t); }
    g.setTargetAtTime(0, t, fade/3);
    Object.values(c.nodes).forEach(n=>{ try{ n.s.stop(t+fade+0.05); }catch(e){} });
  }

  function nextBar(){ const el = ctx.currentTime - cur.t0; return cur.t0 + Math.ceil((el+0.03)/cur.bar)*cur.bar; }
  function setLevel(lv, now){
    if(!cur || !cur.nodes.rest || lv===cur.level) return;
    const down = lv < cur.level;
    const at = (now || down) ? ctx.currentTime : nextBar();
    const L = MUSIC_LEVELS[lv], beat = cur.bar/4;
    const g = cur.nodes.rest.g.gain;
    g.cancelScheduledValues(at); g.setTargetAtTime(L.rest, at, down ? 0.06 : beat*0.25);
    cur.lp.frequency.cancelScheduledValues(at);
    if(down && !now){ cur.lp.frequency.setTargetAtTime(300, at, 0.03); cur.lp.frequency.setTargetAtTime(L.lp, at+0.25, 0.3); }
    else cur.lp.frequency.setTargetAtTime(L.lp, at, beat*0.3);
    cur.shelf.gain.cancelScheduledValues(at); cur.shelf.gain.setTargetAtTime(L.shelf, at, 0.2);
    cur.level = lv;
  }

  function wantedTrack(){
    if(typeof GAME_STATES!=='undefined' && GAME_STATES[state]) return THEME_MUSIC[cfg.theme] || 'retro';
    return 'menu';
  }
  function audible(){
    return cfg.music && !document.hidden && !(window.Ads && Ads.isShowing && Ads.isShowing());
  }

  function tick(){
    if(!audible()){
      if(ctx && !suspended){
        suspended = true;
        // Müzik kapatıldıysa şarkı tamamen durur; reklam / arka plan ise sadece askıya alır.
        if(!cfg.music) stop(0.3);
        duck.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
        setTimeout(()=>{ if(suspended && ctx) ctx.suspend().catch(()=>{}); }, 350);
      }
      return;
    }
    if(!ensureCtx()) return;
    if(suspended){ suspended = false; resume(); }
    // Tarayıcı otomatik çalmayı engelliyorsa ilk dokunuşu bekle; uygulamada
    // (Capacitor) engel yok, öğretici dokunmadan başlarken de müzik çalar.
    if(ctx.state!=='running'){ resume(); return; }

    const name = wantedTrack();
    if((!cur || cur.name!==name) && loadingName!==name){
      if(cur) stop(cur.name==='menu' ? 0.6 : 1.4); // tema şarkısı yavaşça söner
      loadingName = name;
      load(name).then(bufs=>{
        if(loadingName!==name) return;
        loadingName = null;
        if(!cur && wantedTrack()===name && audible()){ start(name, bufs); lastCombo=-1; }
      }).catch(e=>{ if(loadingName===name) loadingName=null;
        if(window.CrashReport && CrashReport.report) CrashReport.report('music load failed: '+name+' ('+(ctx&&ctx.sampleRate)+' Hz): '+((e&&e.message)||e), e); });
    }

    // Menüdeyken seçili temanın şarkısı önceden çözülür: oyun başlarken
    // yapılınca büyük bellek ayırması çöp toplamayı tetikleyip ilk saniyelerde
    // takılma yapıyordu.
    if(cur && cur.name==='menu' && !loadingName){
      const th = THEME_MUSIC[cfg.theme] || 'retro';
      if(!buffers[th]) load(th).catch(()=>{});
    }

    // Duraklat / oyun sonu / dirilme ekranında müzik kısılır.
    const d = (state==='pause') ? 0.3 : (state==='over' || state==='revive') ? 0.45 : 1;
    if(Math.abs(duck.gain.value - d) > 0.01) duck.gain.setTargetAtTime(d, ctx.currentTime, 0.15);

    if(cur && cur.nodes.rest && state==='play'){
      const c = (typeof combo!=='undefined') ? combo : 0;
      let lv = musicLevelFor(c);
      // Öğretici: "olayımız müzik" — şarkı kombo beklemeden duyulur.
      if(typeof tutorialActive!=='undefined' && tutorialActive) lv = Math.max(lv, tutorialMusicLv||1);
      if(cur.level<0) setLevel(lv, true);
      else if(c!==lastCombo || lv!==cur.level) setLevel(lv, false);
      lastCombo = c;
    }
  }

  // Teşhis (iOS'ta müzik yoktu): ilk dokunuştan 10 sn sonra şarkı hâlâ çalmıyorsa
  // durumu admin paneline bir kez yazar.
  let diagT=null;
  function diag(){
    if(cur || !cfg.music || !window.CrashReport || !CrashReport.report) return;
    CrashReport.report('DIAG music: state='+(ctx&&ctx.state)+' rate='+(ctx&&ctx.sampleRate)+' suspended='+suspended+
      ' loading='+loadingName+' buffers='+Object.keys(buffers).join('|')+' wanted='+wantedTrack()+' audible='+audible()+
      ' scr='+state+' ua='+navigator.userAgent.slice(0,60));
  }
  function unlock(){ ensureCtx(); resume(); if(!diagT) diagT=setTimeout(diag, 10000); }
  document.addEventListener('pointerdown', unlock, true);
  document.addEventListener('touchend', unlock, true);
  setInterval(tick, 120);

  return {
    // Melodi bip'leri o an çalan şarkının tonunda kalsın: fx.js'teki La minör
    // pentatonik, şarkının (göreli) minör tonuna en yakın yöne kaydırılır.
    keyRatio(){
      if(!cur || !cfg.music) return 1;
      const semi = ((cur.tr.minorRoot - 9 + 18) % 12) - 6;
      return Math.pow(2, semi/12);
    },
    playing(){ return !!cur; },
    // Ses kaydırıcısı (ayarlar / duraklat) sürüklenirken anında uygular.
    setVolume(){ if(out) out.gain.setTargetAtTime(musicVolume(), ctx.currentTime, 0.05); },
    // Oyunda kombo ile dolan bir tema şarkısı duyuluyor mu (yazılar için).
    themeAudible(){ return !!(cur && cur.nodes.rest && cfg.music); },
    // Risk balonu: Karartma şarkıyı boğuklaştırır (duvarın arkasından gibi),
    // Geri Sar rezonanslı bir "bant" sesi verir; null normale döndürür.
    setFx(kind){
      if(!ctx || !fx) return;
      const now=ctx.currentTime, open=ctx.sampleRate*0.45;
      const f = kind==='dark' ? 650 : kind==='rewind' ? 1500 : open, q = kind==='rewind' ? 6 : 0.7;
      fx.frequency.cancelScheduledValues(now); fx.frequency.setTargetAtTime(f, now, kind ? 0.08 : 0.3);
      fx.Q.cancelScheduledValues(now); fx.Q.setTargetAtTime(q, now, 0.1);
    },
  };
})();
