/* ===== SES: müzik, ortam sesleri, kısa efektler. assets/ses/liste.js'te olan dosyadan çalınır;
   dosyası olmayan ortam ve efekt WebAudio ile üretilir, müzik sessiz kalır. ===== */
const Ses = (() => {
  let ctx = null, ana = null, acik = true, gurultuBeyaz = null, gurultuKahve = null;
  let ortamAd = null, ortamKapat = null, dongu = null, donguKaynak = null;
  const LISTE = window.SES_LISTE || { muzik:[], efekt:[], ortam:[] };
  const orn = {};                                     // çözülmüş kısa efektler
  const dosya = (tur, ad) => `assets/ses/${tur}/${ad}.m4a`;
  async function coz(tur, ad){
    const r = await fetch(dosya(tur, ad));
    return ctx.decodeAudioData(await r.arrayBuffer());
  }
  try { acik = localStorage.getItem("bd_ses") !== "0"; } catch (e) {}

  /* ad: { kaynak, alt geçiren, üst geçiren, ses, ek olaylar } */
  const ORTAMLAR = {
    gece:    { kaynak:"kahve", lp:420,  ses:.10 },
    sabah:   { kaynak:"kahve", lp:900,  ses:.08, olay:"kus" },
    sokak:   { kaynak:"kahve", lp:1300, ses:.10 },
    aksam:   { kaynak:"kahve", lp:650,  ses:.10 },
    ruzgar:  { kaynak:"kahve", lp:800,  ses:.20, dalga:true },
    firin:   { kaynak:"kahve", lp:240,  ses:.32 },
    ev:      { kaynak:"kahve", lp:170,  ses:.14 },
    yagmur:  { kaynak:"beyaz", lp:5200, hp:600, ses:.07, olay:"damla" },
    cisenti: { kaynak:"beyaz", lp:3600, hp:1000, ses:.045, olay:"damla" },
  };

  function tampon(sure, doldur){
    const b = ctx.createBuffer(1, ctx.sampleRate * sure, ctx.sampleRate), d = b.getChannelData(0);
    doldur(d); return b;
  }
  function baslat(){
    if (ctx){ ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    ana = ctx.createGain(); ana.gain.value = acik ? 1 : 0; ana.connect(ctx.destination);
    gurultuBeyaz = tampon(4, d => { for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; });
    gurultuKahve = tampon(6, d => { let s = 0; for (let i = 0; i < d.length; i++){ s = (s + .02 * (Math.random() * 2 - 1)) / 1.02; d[i] = s * 3.5; } });
    document.addEventListener("visibilitychange", () => { askida(document.hidden); });
    for (const ad of LISTE.efekt) coz("efekt", ad).then(b => { orn[ad] = b; }).catch(() => {});
    if (bekleyenMuzik){ const m = bekleyenMuzik; bekleyenMuzik = null; muzik(m); }
  }

  /* kısa sinüs vuruşu */
  function ton(frek, sure, ses = .1, tip = "sine", gecikme = 0, hedefFrek = null){
    if (!ctx) return;
    const t = ctx.currentTime + gecikme, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = tip; o.frequency.setValueAtTime(frek, t);
    if (hedefFrek) o.frequency.exponentialRampToValueAtTime(hedefFrek, t + sure);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(ses, t + .008); g.gain.exponentialRampToValueAtTime(.0005, t + sure);
    o.connect(g); g.connect(ana); o.start(t); o.stop(t + sure + .02);
  }
  /* kısa gürültü vuruşu */
  function tik(lp, sure, ses = .1, gecikme = 0){
    if (!ctx) return;
    const t = ctx.currentTime + gecikme, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = gurultuBeyaz; f.type = "lowpass"; f.frequency.value = lp;
    g.gain.setValueAtTime(ses, t); g.gain.exponentialRampToValueAtTime(.0005, t + sure);
    s.connect(f); f.connect(g); g.connect(ana); s.start(t, Math.random() * 3, sure + .02);
  }

  const OLAYLAR = {
    kus:     () => { const f = 2600 + Math.random() * 1400; ton(f, .09, .012, "sine", 0, f * 1.25); ton(f * 1.1, .08, .010, "sine", .13, f * .9); return 4000 + Math.random() * 7000; },
    damla:   () => { ton(900 + Math.random() * 900, .05, .012, "sine", 0, 300); return 200 + Math.random() * 500; },
  };

  /* aynı dosyayı daha kısık kullanan ortamlar; dosya yoksa koddan üretilir */
  const ORTAM_BAGLA = { sabah:["sokak", .8], aksam:["sokak", .7], gece:["sokak", .45], cisenti:["yagmur", .35] };

  /* dosyadan ortam: tek seferde bir tane bellekte durur */
  async function ortamDosya(ad, dosyaAd, kat){
    let b; try { b = await coz("ortam", dosyaAd); } catch (e) { return; }
    if (ortamAd !== ad) return;
    const s = ctx.createBufferSource(), g = ctx.createGain(), t = ctx.currentTime;
    s.buffer = b; s.loop = true; s.connect(g); g.connect(ana);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(ORTAM_SES * kat, t + 1.6); s.start();
    ortamKapat = () => { const n = ctx.currentTime; g.gain.cancelScheduledValues(n); g.gain.setValueAtTime(g.gain.value, n); g.gain.linearRampToValueAtTime(0, n + 1.2); s.stop(n + 1.3); };
  }

  function ortam(ad){
    if (!ctx || ad === ortamAd) return;
    ortamAd = ad;
    if (ortamKapat){ ortamKapat(); ortamKapat = null; }
    const [dosyaAd, kat] = ORTAM_BAGLA[ad] && LISTE.ortam.includes(ORTAM_BAGLA[ad][0]) ? ORTAM_BAGLA[ad] : [ad, 1];
    if (LISTE.ortam.includes(dosyaAd)) return void ortamDosya(ad, dosyaAd, kat);
    const o = ORTAMLAR[ad]; if (!o) return;
    const s = ctx.createBufferSource(), lp = ctx.createBiquadFilter(), g = ctx.createGain(), t = ctx.currentTime;
    s.buffer = o.kaynak === "beyaz" ? gurultuBeyaz : gurultuKahve; s.loop = true;
    lp.type = "lowpass"; lp.frequency.value = o.lp;
    let son = lp; s.connect(lp);
    if (o.hp){ const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = o.hp; lp.connect(hp); son = hp; }
    son.connect(g); g.connect(ana);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(o.ses, t + 1.4);
    let dalga = null;
    if (o.dalga){ dalga = ctx.createOscillator(); const dg = ctx.createGain(); dalga.frequency.value = .13; dg.gain.value = o.ses * .55; dalga.connect(dg); dg.connect(g.gain); dalga.start(); }
    s.start();
    let tm = null, canli = true;
    if (o.olay){ const f = () => { if (!canli) return; tm = setTimeout(f, OLAYLAR[o.olay]()); }; tm = setTimeout(f, 800); }
    ortamKapat = () => {
      canli = false; clearTimeout(tm);
      const n = ctx.currentTime; g.gain.cancelScheduledValues(n); g.gain.setValueAtTime(g.gain.value, n); g.gain.linearRampToValueAtTime(0, n + 1.2);
      s.stop(n + 1.3); if (dalga) dalga.stop(n + 1.3);
    };
  }

  /* MÜZİK: akarak çalınır, belleğe açılmaz. Bitince bir süre susar, sonra yeniden başlar; arada yalnız ortam sesi kalır. */
  let muzikAd = null, muzikEl = null, muzikGain = null, muzikTm = null, bekleyenMuzik = null;
  const dosyadan = location.protocol === "file:";     // file:// üzerinde WebAudio'ya bağlanamaz, ses seviyesiyle yürür
  const MUZIK_SES = 0.6, ORTAM_SES = 0.55, ARA = 28000;
  function muzikSol(el, g){
    if (!el) return;
    if (g && ctx){ const n = ctx.currentTime; g.gain.cancelScheduledValues(n); g.gain.setValueAtTime(g.gain.value, n); g.gain.linearRampToValueAtTime(0, n + 2.4); }
    else { let v = el.volume; const id = setInterval(() => { v -= 0.04; if (v <= 0){ clearInterval(id); el.pause(); } else el.volume = v; }, 90); }
    setTimeout(() => { el.pause(); el.src = ""; }, 2600);
  }
  function muzik(ad){
    if (ad && !ctx){ bekleyenMuzik = ad; return; }
    if (ad === muzikAd) return;
    muzikAd = ad; clearTimeout(muzikTm);
    muzikSol(muzikEl, muzikGain); muzikEl = muzikGain = null;
    if (!ad || !LISTE.muzik.includes(ad)) return;
    const el = new Audio(dosya("muzik", ad)); el.preload = "auto";
    let g = null;
    if (!dosyadan){
      el.crossOrigin = "anonymous";
      g = ctx.createGain(); g.gain.value = 0; ctx.createMediaElementSource(el).connect(g); g.connect(ana);
      const t = ctx.currentTime; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(MUZIK_SES, t + 3);
    } else el.volume = acik ? MUZIK_SES : 0;
    el.onended = () => { if (muzikEl === el) muzikTm = setTimeout(() => { if (muzikEl === el) el.play().catch(() => {}); }, ARA); };
    el.play().catch(() => {});
    muzikEl = el; muzikGain = g;
  }
  function askida(v){
    if (!ctx) return;
    if (v){ ctx.suspend(); if (muzikEl) muzikEl.pause(); clearTimeout(muzikTm); }
    else { ctx.resume(); if (muzikEl && !muzikEl.ended) muzikEl.play().catch(() => {}); }
  }

  /* bir sahne boyunca tekrar eden efekt (alarm, telefon) */
  function donguBaslat(cal, aralik){
    donguDur(); cal();
    const id = setInterval(cal, aralik); dongu = () => clearInterval(id);
  }
  function donguDur(){
    if (dongu){ dongu(); dongu = null; }
    if (donguKaynak){ try { donguKaynak.stop(); } catch (e) {} donguKaynak = null; }
  }

  const EFEKTLER = {
    alarm:    () => donguBaslat(() => { for (let i = 0; i < 8; i++){ ton(2100, .05, .05, "square", i * .07); ton(2750, .05, .025, "square", i * .07); } }, 950),
    zil:      () => { for (let i = 0; i < 12; i++) ton(1250, .06, .022, "square", i * .09); },
    kapizili: () => { ton(1900, .7, .05); ton(2850, .5, .025); ton(1900, .6, .03, "sine", .16); },
    telefon:  () => donguBaslat(() => { [0, .18, .36].forEach(g => ton(1250, .13, .05, "square", g)); }, 1700),
    motor:    () => { ton(110, .9, .08, "sawtooth", 0, 240); tik(900, .7, .05); },
    gok:      () => { tik(160, 2.4, .9); tik(90, 3.2, .7, .15); },
    tepsi:    () => { [730, 1180, 1710, 2430].forEach((f, i) => ton(f, .9, .035, "sine", i * .012)); tik(2500, .08, .12); },
    anahtar:  () => { [0, .09, .2].forEach(g => tik(4200, .03, .1, g)); tik(800, .09, .2, .42); },
    damla:    () => { [0, .55, 1.3].forEach(g => ton(1100, .08, .03, "sine", g, 350)); },
    telsiz:   () => { tik(3500, .35, .05); tik(2600, .2, .04, .4); },
  };

  function ornekCal(ad){
    const s = ctx.createBufferSource(); s.buffer = orn[ad]; s.connect(ana); s.start(); return s;
  }
  const TEKRAR = { alarm:100, telefon:700 };          // sahne boyunca dönen efektler: kayıt bitince bu kadar ms sonra yeniden

  return {
    baslat, ortam, muzik, askida,
    efekt(ad){
      donguDur();
      if (!ctx || !ad) return;
      if (orn[ad]) return TEKRAR[ad] ? donguBaslat(() => { donguKaynak = ornekCal(ad); }, orn[ad].duration * 1000 + TEKRAR[ad]) : void ornekCal(ad);
      if (EFEKTLER[ad]) EFEKTLER[ad]();
    },
    kalem(){ tik(5200, .02, .018); },
    dokun(){ tik(1700, .035, .05); },
    simit(){ ton(520, .09, .09, "triangle", 0, 780); },
    dus(){ ton(300, .22, .1, "sine", 0, 120); },
    get acik(){ return acik; },
    degistir(){
      acik = !acik;
      try { localStorage.setItem("bd_ses", acik ? "1" : "0"); } catch (e) {}
      if (ana) ana.gain.value = acik ? 1 : 0;
      if (dosyadan && muzikEl) muzikEl.volume = acik ? MUZIK_SES : 0;
      return acik;
    },
  };
})();
