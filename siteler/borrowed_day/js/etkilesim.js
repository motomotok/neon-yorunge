/* ===== ETKİLEŞİMLER: görsel kutusu, yağmur, denge, topla ===== */

/* sahne görselinin göründüğü dikdörtgen (object-fit: contain kutusu) */
function gorselKutusu(){
  const img = $("sceneImg"), box = $("scene").getBoundingClientRect();
  const r = (img.naturalWidth && img.naturalHeight) ? img.naturalWidth / img.naturalHeight : 1;   // kareler kare
  let w = box.width, h = w / r; if (h > box.height){ h = box.height; w = h * r; }
  return { left:(box.width - w) / 2, top:(box.height - h) / 2, w, h };
}
function fitCanvas(cv){
  const k = gorselKutusu();
  Object.assign(cv.style, { left:k.left+"px", top:k.top+"px", width:k.w+"px", height:k.h+"px" });
  cv.width = k.w * devicePixelRatio; cv.height = k.h * devicePixelRatio;
  return cv.getContext("2d");
}

/* yağmur: sahne görselinin üstünde hafif gri çizgiler */
let rainOn = false, rainGen = 0;
function rain(on){
  const cv = $("rain"), ctx = cv.getContext("2d");
  if (on && rainOn) return;
  rainOn = on; const gen = ++rainGen;
  if (!on){ ctx.clearRect(0,0,cv.width,cv.height); return; }
  fitCanvas(cv);
  const drops = Array.from({length:120}, () => ({x:Math.random()*cv.width, y:Math.random()*cv.height, v:8+Math.random()*10}));
  (function f(){ if (gen !== rainGen) return; ctx.clearRect(0,0,cv.width,cv.height); ctx.strokeStyle = "rgba(40,38,36,.35)"; ctx.lineWidth = 1.2*devicePixelRatio;
    ctx.beginPath(); for (const d of drops){ ctx.moveTo(d.x,d.y); ctx.lineTo(d.x-3,d.y+18); d.y += d.v; d.x -= 1.5;
      if (d.y > cv.height){ d.y = -20; d.x = Math.random()*cv.width; } } ctx.stroke(); requestAnimationFrame(f); })();
}

const ALTIN = "#d6a028";
function simitCiz(ctx, x, y, r, a = 1){
  ctx.globalAlpha = a; ctx.lineWidth = r * 0.55; ctx.strokeStyle = ALTIN;
  ctx.beginPath(); ctx.arc(x, y, r * 0.72, 0, 7); ctx.stroke();
  ctx.lineWidth = Math.max(1, r * 0.09); ctx.strokeStyle = "#1d1b19";
  ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y, r * 0.44, 0, 7); ctx.stroke();
  ctx.globalAlpha = 1;
}

/* DENGE (06:30): tepsi kendi kendine yalpalar; parmakla ya da telefonu eğerek düzelt. Uzun süre çok eğilirse bir simit düşer. */
/* tur: "tepsi" (simit tepsisi, varsayılan) ya da "kayik" (taş yüklü kayık, İdu) */
function denge(sure, zorluk = 1, tur = "tepsi"){
  return new Promise(res => {
    const cv = $("fx"), ctx = fitCanvas(cv), W = cv.width, H = cv.height, dpr = devicePixelRatio;
    cv.style.pointerEvents = "auto";
    let duzelt = 0, egik = 0, dustu = false, dusenY = 0, t0 = performance.now(), son = t0;
    const faz = Math.random() * 6;
    const egim = e => { if (e.gamma != null) duzelt = Math.max(-40, Math.min(40, e.gamma * 1.2)); };
    const parmak = e => { const r = cv.getBoundingClientRect(); duzelt = ((e.clientX - r.left) / r.width - 0.5) * 90; };
    addEventListener("deviceorientation", egim); cv.addEventListener("pointermove", parmak); cv.addEventListener("pointerdown", parmak);
    function kare(t){
      const s = (t - t0) / 1000, dt = t - son; son = t;
      const ramp = Math.min(1, s / 1.2);
      const kayma = zorluk * ramp * (24 * Math.sin(s * 1.25 + faz) + 15 * Math.sin(s * 2.7 + faz * 2) + 6 * Math.sin(s * 5.1));
      const aci = Math.max(-45, Math.min(45, kayma - duzelt));
      if (Math.abs(aci) > 24) egik += dt; else egik = Math.max(0, egik - dt);
      if (egik > 500 && !dustu){ dustu = true; Ses.dus(); }
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H * 0.8, L = W * 0.30;
      ctx.fillStyle = "rgba(243,239,231,.82)"; ctx.fillRect(0, H * 0.66, W, H * 0.34);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(aci * Math.PI / 180);
      ctx.strokeStyle = "#1d1b19"; ctx.lineWidth = 3 * dpr; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(-L, 0); ctx.lineTo(L, 0); ctx.stroke();
      if (tur === "kayik") kayikCiz(ctx, L, dpr, dustu);
      else {
        const r = W * 0.035, adet = dustu ? 4 : 5;
        for (let i = 0; i < adet; i++) simitCiz(ctx, -L * 0.72 + i * (L * 1.44 / 4), -r * 1.05, r);
      }
      ctx.restore();
      if (tur !== "kayik" && dustu && dusenY < H){ dusenY += 9 * dpr; simitCiz(ctx, cx + Math.sign(aci || 1) * L * 1.05, cy + dusenY, W * 0.035); }
      ctx.fillStyle = "#1d1b19"; ctx.beginPath(); ctx.arc(cx, cy + 6 * dpr, 4 * dpr, 0, 7); ctx.fill();
      if (s < sure) requestAnimationFrame(kare);
      else { removeEventListener("deviceorientation", egim); cv.removeEventListener("pointermove", parmak); cv.removeEventListener("pointerdown", parmak);
        cv.style.pointerEvents = "none"; ctx.clearRect(0, 0, W, H); res(dustu); }
    }
    requestAnimationFrame(kare);
  });
}

/* KENDİNE ÇEK: Hasan'ın yukarı verdiği simit öbür uçtan alınır. Simit sahnede durur, aşağı çekilince alınır.
   Karta dokunmak yönü gösterir, ikinci dokunuş da alır (hareketi yapamayan takılmasın). */
function kendineCek(kart, done, sinyal, yer){
  const sahne = $("scene"), kutu = document.createElement("canvas"), boy = 96, dpr = devicePixelRatio;
  kutu.className = "ceken"; kutu.width = kutu.height = boy * dpr; kutu.style.width = kutu.style.height = boy + "px";
  simitCiz(kutu.getContext("2d"), boy * dpr / 2, boy * dpr / 2, boy * dpr * 0.36);
  if (yer){ kutu.style.left = yer[0] + "%"; kutu.style.top = `calc(${yer[1]}% - ${boy / 2}px)`; }   // çizimdeki simidin üstü
  sahne.appendChild(kutu);
  sinyal.addEventListener("abort", () => kutu.remove());
  const esik = () => sahne.getBoundingClientRect().height * 0.2;
  let y0 = null, bitti = false;
  kutu.addEventListener("pointerdown", e => { y0 = e.clientY; kutu.setPointerCapture(e.pointerId); kutu.classList.add("tutuldu"); });
  kutu.addEventListener("pointermove", e => { if (y0 === null || bitti) return;
    const dy = Math.max(0, e.clientY - y0); kutu.style.transform = `translate(-50%,${dy}px)`;
    if (dy > esik()){ bitti = true; titre(15); tiklamaYut(); done(); } });
  const birak = () => { if (bitti) return; y0 = null; kutu.classList.remove("tutuldu"); kutu.style.transform = ""; };
  kutu.addEventListener("pointerup", birak); kutu.addEventListener("pointercancel", birak);
  let dokunus = 0;
  kart.addEventListener("click", () => { if (++dokunus > 1) return done(); kutu.classList.remove("oynat"); void kutu.offsetWidth; kutu.classList.add("oynat"); });
}

/* YAZILI: kağıt sahnede, şıklar kart. Saat 11:00'den akar. Son soruya gelen de gelmeyen de onu boş bırakır:
   "yavas" = zil çaldı, "hizli" = son soruya geldin ve kalem yazmadı. Hiç geri bildirim yok, sınav gibi. */
function yazili(sure){
  return new Promise(res => {
    const D = HAYAT.yazili, sorular = D.sorular(b), box = $("cards"), kagit = document.createElement("div");
    const yerlestir = () => { const k = gorselKutusu(); Object.assign(kagit.style, { left:k.left+"px", top:k.top+"px", width:k.w+"px", height:k.h+"px" }); kagit.style.setProperty("--pfs", (k.h / 15) + "px"); };
    kagit.className = "page kagit"; $("scene").appendChild(kagit);
    const t0 = performance.now(), ms = sure * 1000; let bitti = false, sonTm = null;
    const ilk = parseInt($("clock").textContent.split(":")[1], 10) || 0;   // kalem aranırken geçen dakika geri gelmez
    const yaz = () => saat(`11:${String(Math.min(39, ilk + Math.floor((40 - ilk) * (performance.now() - t0) / ms))).padStart(2, "0")}`, true);
    const saatTm = setInterval(yaz, 250); yaz();
    const bitir = sonuc => { if (bitti) return; bitti = true; clearInterval(saatTm); clearTimeout(genelTm); clearTimeout(sonTm);
      Ses.efekt("zil"); box.innerHTML = ""; kagit.remove(); res(sonuc); };
    const genelTm = setTimeout(() => bitir(sorular.__son ? "hizli" : "yavas"), ms);
    const sor = i => {
      const q = sorular[i], son = i === sorular.length - 1;
      kagit.innerHTML = `<div class="h">${t(D.soru)} ${i + 1} / ${sorular.length}</div><div class="soru">${t(q.s)}</div>`;
      setText(i === 3 ? D.dorduncu(oynayis) : st.huzur <= 3 ? D.ikiKere : D.akiyor); yerlestir();
      box.className = "cards three"; box.innerHTML = "";
      q.c.forEach(c => { const el = document.createElement("button"); el.className = "card"; el.type = "button"; el.textContent = t(c);
        if (st.huzur <= 3){ el.disabled = true; setTimeout(() => { el.disabled = false; }, 1200); }   // huzur düşükse satırlar iki kere okunur
        el.onclick = () => { Ses.kalem();
          if (son){ setText(D.kuru); titre(30); return; }     // son soruda kalem yazmıyor
          sor(i + 1); };
        box.appendChild(el); });
      if (son){ sorular.__son = true; sonTm = setTimeout(() => bitir("hizli"), Math.min(ms - (performance.now() - t0), 6000)); }
    };
    sor(0);
  });
}

/* TOPLA (15:00): simitler suya batmadan dokun. Hepsini kurtarmak mümkün değil. */
function topla(sure, enFazla = 8){
  return new Promise(res => {
    const cv = $("fx"), ctx = fitCanvas(cv), W = cv.width, H = cv.height, r = W * 0.045;
    cv.style.pointerEvents = "auto";
    const ADET = 11, EN_FAZLA = enFazla;
    const simitler = Array.from({length:ADET}, (_, i) => ({
      x: r * 2 + Math.random() * (W - r * 4), y: H * 0.56 + Math.random() * (H * 0.42 - r * 2),
      batma: 1.6 + (i / ADET) * (sure - 1.8) + Math.random() * 0.6, durum: "var", uc: 0 }));
    let alinan = 0; const t0 = performance.now();
    setText("Dokunarak topla. Kurtardığın: 0");
    const dokun = e => {
      const k = cv.getBoundingClientRect(), x = (e.clientX - k.left) * W / k.width, y = (e.clientY - k.top) * H / k.height;
      for (const s of simitler) if (s.durum === "var" && Math.hypot(s.x - x, s.y - y) < r * 1.6){
        s.durum = "alindi"; alinan++; Ses.simit(); setText("Dokunarak topla. Kurtardığın: " + alinan);
        if (alinan >= EN_FAZLA) simitler.forEach(o => { if (o.durum === "var") o.batma = Math.min(o.batma, (performance.now() - t0) / 1000 + 0.4); });
        break; }
    };
    cv.addEventListener("pointerdown", dokun);
    function kare(t){
      const s = (t - t0) / 1000; ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(243,239,231,.72)"; ctx.fillRect(0, H * 0.5, W, H * 0.5);   // çizimdeki simitler soluk kalsın, dokunulacaklar öne çıksın
      for (const o of simitler){
        if (o.durum === "var"){
          const kalan = o.batma - s;
          if (kalan <= 0){ o.durum = "batti"; continue; }
          simitCiz(ctx, o.x, o.y, r, kalan < 0.8 ? kalan / 0.8 : 1);
        } else if (o.durum === "alindi" && o.uc < 1){ o.uc += 0.08; simitCiz(ctx, o.x, o.y - o.uc * H * 0.5, r, 1 - o.uc); }
      }
      if (s < sure && simitler.some(o => o.durum === "var" || (o.durum === "alindi" && o.uc < 1))) requestAnimationFrame(kare);
      else { cv.removeEventListener("pointerdown", dokun); cv.style.pointerEvents = "none"; ctx.clearRect(0, 0, W, H); res(alinan); }
    }
    requestAnimationFrame(kare);
  });
}

/* OVALA: görselin üstündeki damlaları parmakla sil. Süresi yok, acele ettirmez. Dokunulmazsa 14 saniyede kendi biter. */
function ovala(){
  return new Promise(res => {
    const cv = $("fx"), ctx = fitCanvas(cv), W = cv.width, H = cv.height, dpr = devicePixelRatio, sahne = $("scene");
    cv.style.pointerEvents = "auto";
    for (let i = 0; i < 90; i++){
      const x = Math.random() * W, y = H * 0.25 + Math.random() * H * 0.75, r = (2 + Math.random() * 5) * dpr;
      ctx.fillStyle = "rgba(235,240,245,.82)"; ctx.strokeStyle = "rgba(29,27,25,.5)"; ctx.lineWidth = dpr * .7;
      ctx.beginPath(); ctx.ellipse(x, y, r * .8, r, 0, 0, 7); ctx.fill(); ctx.stroke();
    }
    ctx.globalCompositeOperation = "destination-out"; ctx.lineCap = "round"; ctx.lineWidth = 60 * dpr;
    let son = null, yol = 0, bitti = false; const gerek = W * 2.4;
    /* parmak hayaleti: sürter, geçtiği yerdeki damlalar gerçekten silinir. Oyuncu dokununca kaybolur */
    const el = document.createElement("div"); el.className = "ov-el"; el.textContent = t("sürt"); sahne.appendChild(el);
    const cubuk = document.createElement("div"); cubuk.className = "ov-cubuk"; cubuk.innerHTML = "<i></i>"; sahne.appendChild(cubuk);
    const dolgu = cubuk.firstChild, oran = cv.getBoundingClientRect().width / W;
    let gosteri = true, onceki = null; const t0 = performance.now();
    const sil = (a, b) => { ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); };
    (function f(t){
      if (!gosteri) return;
      const g = ((t - t0) % 2600) / 1500;
      if (g > 1){ el.style.opacity = 0; onceki = null; return requestAnimationFrame(f); }
      const n = reduce ? [W * .5, H * .6] : [W * (.5 - .3 * Math.cos(g * Math.PI * 3)), H * (.45 + .25 * g)];
      el.style.opacity = 1; el.style.transform = `translate(${n[0] * oran}px, ${n[1] * oran}px)`;
      if (onceki && !reduce && t - t0 < 1500) sil(onceki, n);
      onceki = n; requestAnimationFrame(f);
    })(t0);
    const bitir = () => { if (bitti) return; bitti = true; gosteri = false; clearTimeout(tm); el.remove(); cubuk.remove();
      cv.removeEventListener("pointerdown", bas); cv.removeEventListener("pointermove", git); cv.removeEventListener("pointerup", kalk);
      ctx.globalCompositeOperation = "source-over"; cv.style.pointerEvents = "none"; ctx.clearRect(0, 0, W, H); res(); };
    const nokta = e => { const k = cv.getBoundingClientRect(); return [(e.clientX - k.left) * W / k.width, (e.clientY - k.top) * H / k.height]; };
    const bas = e => { if (gosteri){ gosteri = false; el.remove(); titre(10); } son = nokta(e); cv.setPointerCapture(e.pointerId); };
    const git = e => { if (!son) return; const n = nokta(e); sil(son, n);
      yol += Math.hypot(n[0] - son[0], n[1] - son[1]); son = n;
      dolgu.style.transform = `scaleX(${Math.min(1, yol / gerek)})`;
      if (yol > gerek) bitir(); };
    const kalk = () => { son = null; };
    cv.addEventListener("pointerdown", bas); cv.addEventListener("pointermove", git); cv.addEventListener("pointerup", kalk);
    const tm = setTimeout(bitir, 14000);
  });
}


/* KÜREK (İdu, 9 Kasım): sürekli denge yerine kolay hâli. Akıntı kayığı bir yana yatırır, o yanda halka yanıp söner;
   o yarıya dokunmak kayığı doğrultur. 4 dalga. Dokunulmazsa kayık su alır (true döner) ve yine doğrulur, oyun sürer.
   Yanlış yana dokunmak cezasızdır. Enerji düştükçe kayık biraz daha hızlı yatar. */
function kurek(zorluk = 1){
  return new Promise(res => {
    const cv = $("fx"), ctx = fitCanvas(cv), W = cv.width, H = cv.height, dpr = devicePixelRatio;
    cv.style.pointerEvents = "auto";
    const DALGA = 4, MAX = 26, YATMA = 2200 / zorluk, BEKLE = 1100;
    let no = 0, yon = Math.random() < 0.5 ? -1 : 1, aci = 0, durum = "bekle", t1 = performance.now() + 500, suAldi = false;
    const dokun = e => {
      if (durum !== "yatiyor" && durum !== "dolu") return;
      const r = cv.getBoundingClientRect();
      if (((e.clientX - r.left) > r.width / 2 ? 1 : -1) !== yon) return;
      Ses.dokun(); titre(10); durum = "donuyor";
    };
    cv.addEventListener("pointerdown", dokun);
    function kare(t){
      if (durum === "bekle" && t >= t1){ durum = "yatiyor"; t1 = t; }
      if (durum === "yatiyor"){ aci = yon * MAX * Math.min(1, (t - t1) / YATMA); if (t - t1 >= YATMA){ durum = "dolu"; t1 = t; } }
      if (durum === "dolu" && t - t1 > BEKLE){ if (!suAldi){ suAldi = true; Ses.dus(); } durum = "donuyor"; }
      if (durum === "donuyor"){
        aci *= 0.85;
        if (Math.abs(aci) < 0.5){
          aci = 0;
          if (++no >= DALGA){ cv.removeEventListener("pointerdown", dokun); cv.style.pointerEvents = "none"; ctx.clearRect(0, 0, W, H); return res(suAldi); }
          if (Math.random() < 0.75) yon = -yon;
          durum = "bekle"; t1 = t + 600;
        }
      }
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H * 0.8, L = W * 0.30, a = aci * Math.PI / 180;
      ctx.fillStyle = "rgba(243,239,231,.82)"; ctx.fillRect(0, H * 0.66, W, H * 0.34);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(a);
      ctx.strokeStyle = "#1d1b19"; ctx.lineWidth = 3 * dpr; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(-L, 0); ctx.lineTo(L, 0); ctx.stroke();
      kayikCiz(ctx, L, dpr, suAldi);
      ctx.restore();
      if (durum === "yatiyor" || durum === "dolu"){                 // dokunulacak yan: kayığın yatan ucunda yanıp sönen halka
        const hx = cx + yon * L * Math.cos(a), hy = cy + yon * L * Math.sin(a), r = W * 0.06 * (1 + 0.15 * Math.sin(t / 140));
        ctx.strokeStyle = "#b5532f"; ctx.lineWidth = 3 * dpr; ctx.beginPath(); ctx.arc(hx, hy, r, 0, 7); ctx.stroke();
      }
      ctx.fillStyle = "#1d1b19"; ctx.beginPath(); ctx.arc(cx, cy + 6 * dpr, 4 * dpr, 0, 7); ctx.fill();
      requestAnimationFrame(kare);
    }
    requestAnimationFrame(kare);
  });
}

/* ÇİZ (KURALLAR 3.7: iz bırakmak): sahnenin üstüne parmakla kırmızı aşı boyası. İlk çizgiden sonra "Bitti" çıkar.
   Çizim küçültülüp döner; "Bu gerçekti" ekranında yeniden görünür. */
function cizim(){
  return new Promise(res => {
    const cv = $("fx"), ctx = fitCanvas(cv), W = cv.width, H = cv.height, dpr = devicePixelRatio, kalin = 9 * dpr;
    cv.style.pointerEvents = "auto"; cv.style.touchAction = "none";
    ctx.strokeStyle = ctx.fillStyle = "#b5532f"; ctx.lineWidth = kalin; ctx.lineCap = ctx.lineJoin = "round";
    let son = null, cizildi = false, x0 = W, y0 = H, x1 = 0, y1 = 0;
    const nokta = e => { const r = cv.getBoundingClientRect(), p = [(e.clientX - r.left) * W / r.width, (e.clientY - r.top) * H / r.height];
      x0 = Math.min(x0, p[0]); y0 = Math.min(y0, p[1]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]); return p; };
    const bas = e => { son = nokta(e); cv.setPointerCapture(e.pointerId); ctx.beginPath(); ctx.arc(son[0], son[1], kalin / 2, 0, 7); ctx.fill(); };
    const git = e => { if (!son) return; const p = nokta(e); ctx.beginPath(); ctx.moveTo(son[0], son[1]); ctx.lineTo(p[0], p[1]); ctx.stroke(); son = p; };
    const kalk = () => { son = null; if (!cizildi){ cizildi = true; kartlar([{ yazi:"Bitti", tip:"dugme" }]).then(bitir); } };
    function bitir(){
      cv.removeEventListener("pointerdown", bas); cv.removeEventListener("pointermove", git); cv.removeEventListener("pointerup", kalk);
      const m = kalin, sx = Math.max(0, x0 - m), sy = Math.max(0, y0 - m), sw = Math.min(W - sx, x1 - x0 + 2 * m), sh = Math.min(H - sy, y1 - y0 + 2 * m);
      const k = Math.min(1, 240 / Math.max(sw, sh)), kucuk = document.createElement("canvas");
      kucuk.width = Math.max(1, Math.round(sw * k)); kucuk.height = Math.max(1, Math.round(sh * k));
      kucuk.getContext("2d").drawImage(cv, sx, sy, sw, sh, 0, 0, kucuk.width, kucuk.height);
      const veri = kucuk.toDataURL("image/png");
      cv.style.pointerEvents = "none"; cv.style.touchAction = ""; ctx.clearRect(0, 0, W, H); res(veri);
    }
    cv.addEventListener("pointerdown", bas); cv.addEventListener("pointermove", git); cv.addEventListener("pointerup", kalk);
  });
}

/* İdu'nun kayığı: gövde çizgisinin altında kavisli tekne, üstünde beyaz taş ve kırmızı aşı boyası işaret (KURALLAR 10.3) */
function kayikCiz(ctx, L, dpr, suAldi){
  ctx.save();
  ctx.lineWidth = 2.5 * dpr; ctx.strokeStyle = "#1d1b19"; ctx.fillStyle = "#e9e3d8";
  ctx.beginPath(); ctx.moveTo(-L * 1.1, -L * 0.06); ctx.quadraticCurveTo(0, L * 0.34, L * 1.1, -L * 0.06); ctx.stroke();
  const w = L * 0.62, h = L * 0.42;
  ctx.fillStyle = "#f6f3ec"; ctx.fillRect(-w / 2, -h, w, h); ctx.strokeRect(-w / 2, -h, w, h);
  ctx.fillStyle = "#b5532f"; ctx.beginPath();
  ctx.moveTo(-w * 0.08, -h * 0.25); ctx.lineTo(w * 0.08, -h * 0.25); ctx.lineTo(0, -h * 0.62); ctx.closePath(); ctx.fill();
  if (suAldi){ ctx.strokeStyle = "rgba(29,27,25,.45)"; ctx.lineWidth = 1.5 * dpr;
    for (let i = 0; i < 3; i++){ ctx.beginPath(); ctx.moveTo(-L * 0.6 + i * L * 0.45, L * 0.12); ctx.lineTo(-L * 0.45 + i * L * 0.45, L * 0.12); ctx.stroke(); } }
  ctx.restore();
}
