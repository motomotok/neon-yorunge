/* ===== EKRAN: durum, göstergeler, ekranlar, metin, kartlar =====
   Hangi hayatın oynanacağı adres satırından seçilir: index.html?hayat=hasan (varsayılan hasan). */
const GOSTERGELER = [["enerji","Enerji"],["huzur","Huzur"],["para","Para"],["bag","Bağ"]];
const HAYAT = HAYATLAR[new URLSearchParams(location.search).get("hayat")] || HAYATLAR.hasan;
const $ = id => document.getElementById(id);
const st = { ...HAYAT.baslangic };   // göstergeler
const b = {};                        // bayraklar
const yol = [];                      // Kader Haritası kayıtları
let oynayis = 1;
try { oynayis = (parseInt(localStorage.getItem(`bd_${HAYAT.id}_oynayis`), 10) || 0) + 1; } catch (e) {}
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const bekle = ms => new Promise(r => setTimeout(r, ms));
const devam = () => kartlar([{ yazi:"Devam" }]);          // okunacak yazı: oyuncu dokununca geçer, süreyle geçmez

/* uygulama gibi davransın: büyütme, uzun basma menüsü ve görsel sürükleme yok */
for (const olay of ["gesturestart", "gesturechange", "dblclick", "contextmenu", "dragstart"]) document.addEventListener(olay, e => e.preventDefault());
document.addEventListener("touchmove", e => { if (e.touches.length > 1) e.preventDefault(); }, { passive:false });

/* göstergeler: altında adı yazar, dokununca ne işe yaradığı çıkar (HAYAT.gostergeler). Para çubuk değil, rakamdır. */
const TL = n => (n < 0 ? "−" : "") + "₺" + Math.abs(n).toLocaleString(YEREL);
/* para her çağda başka bir şeydir (KURALLAR 10.5): HAYAT.para.bicim varsa o yazılır (İdu: "2 ekmek") */
const PARA = n => HAYAT.para ? t(HAYAT.para.bicim(n)) : TL(n);
let notSure = null;
function gostergeNotu(yazi, ms = 4200){
  const n = $("gNot"); n.textContent = yazi; n.hidden = false;
  clearTimeout(notSure); notSure = setTimeout(() => { n.hidden = true; }, ms);
}
function buildGauges(){
  $("gauges").innerHTML = GOSTERGELER.map(([k,ad]) =>
    `<button class="g" id="g-${k}" type="button" aria-label="${t(ad)}"><img src="${(HAYAT.ikonlar || {})[k] || `assets/ikon_${k}.png`}" onerror="this.onerror=null;this.src='assets/ikon_${k}.png'" alt=""><i><b></b></i><span class="ad">${t(ad)}</span><span class="d"></span></button>`).join("");
  for (const [k,ad] of GOSTERGELER) $("g-"+k).onclick = () => { Ses.dokun(); gostergeNotu(`${t(ad)}: ${t((HAYAT.gostergeler || {})[k] || "")}`); };
  updateGauges({});
}
function updateGauges(etki){
  for (const [k] of GOSTERGELER){
    const el = $("g-"+k), v = Math.max(0, Math.min(10, st[k]));
    if (k === "para") el.querySelector(".ad").textContent = PARA(st.para);
    else el.querySelector("b").style.width = (v*10)+"%";
    const d = etki[k];
    if (d){
      const s = el.querySelector(".d");
      s.textContent = (d > 0 ? "+" : "−") + (k === "para" && !HAYAT.para ? "₺" : "") + Math.abs(d);
      s.classList.add("show");
      el.classList.remove("pulse"); void el.offsetWidth; el.classList.add("pulse");
      setTimeout(() => s.classList.remove("show"), 1200);
    }
  }
}
/* etki: { gösterge: fark } ya da bunu döndüren (b, st) işlevi. Gösterge olmayan sayaçlar (simit gibi) da st'de tutulur. */
function uygula(etki){
  if (typeof etki === "function") etki = etki(b, st);
  if (!etki) return;
  for (const k in etki){
    st[k] = (st[k] || 0) + etki[k];
    if (k === "enerji" || k === "huzur" || k === "bag") st[k] = Math.max(0, Math.min(10, st[k]));
  }
  updateGauges(etki);
}

function titre(desen){ try { if (desen && navigator.vibrate) navigator.vibrate(desen); } catch (e) {} }

function show(id){ document.querySelectorAll(".screen").forEach(s => s.classList.toggle("on", s.id===id)); }

/* el yazısı: kelimeler satır kırabilsin diye her kelime kendi kutusunda, harfler içinde tek tek belirir */
function yaziKutusu(el, metin){
  el.innerHTML = t(metin).split(" ").map(w =>
    `<span style="display:inline-block;opacity:1">${[...w].map(c => `<span>${c}</span>`).join("")}</span>`).join(" ");
  const harfler = [...el.querySelectorAll("span > span")]; let i = 0;
  const tick = () => { if (i < harfler.length){ harfler[i++].classList.add("on"); setTimeout(tick, 45); } };
  tick();
  return () => harfler.forEach(s => s.classList.add("on"));
}
function showFate(k){
  return new Promise(res => {
    $("fateArt").style.backgroundImage = k.cizim ? `url(${k.cizim})` : "none";
    $("fateMeta").textContent = t(k.meta);
    const bitir = yaziKutusu($("fateLine"), k.cumle);
    show("fate");
    $("fate").onclick = () => { bitir(); $("fate").onclick = null; res(); };
  });
}

function saat(t, kader){ const y = window.t(t); $("clock").classList.toggle("uzun", y.length > 8); $("clock").innerHTML = y + (kader ? '<span class="flag">⚑︎</span>' : ""); }

/* sahne görseli: yenisi önce yüklenir, sonra eskisinin üstünden yumuşakça geçer (kare kare akış).
   Görsel yoksa sırayla yedek mekan plakaları denenir. kamera: yakınlaşmanın merkezi ("50% 40%"), false = hareketsiz */
function gorsel(s){
  const img = $("sceneImg"), eski = $("sceneOld");
  if (img.dataset.key === s.gorsel) return;
  img.dataset.key = s.gorsel;
  const kamera = s.kamera === false || reduce ? null : (s.kamera || "50% 45%");
  const adaylar = [`assets/${HAYAT.klasor}/${s.gorsel}.jpg`, ...[].concat(s.yedek || []).map(y => `assets/${y}.jpg`)];
  const dene = () => {
    const src = adaylar.shift(); if (!src) return;
    const on = new Image();
    on.onerror = dene;
    on.onload = () => {
      if (img.dataset.key !== s.gorsel) return;
      if (img.getAttribute("src")){
        eski.src = img.src; eski.style.transform = getComputedStyle(img).transform;
        eski.style.transformOrigin = img.style.transformOrigin;
        eski.style.transition = "none"; eski.style.opacity = 1; void eski.offsetWidth; eski.style.transition = "";
      }
      img.classList.remove("kb"); void img.offsetWidth;
      img.src = src;
      if (kamera){ img.style.transformOrigin = kamera; img.classList.add("kb"); }
      requestAnimationFrame(() => { eski.style.opacity = 0; });
      if (rainOn) fitCanvas($("rain"));
    };
    on.src = src;
  };
  dene();
}

/* konuşan yüz: "hasan/6" -> assets/yuz/hasan/06.jpg, sahnenin sol alt köşesinde. Boş ya da dosya yoksa gizlenir. */
function yuz(v){
  const kutu = $("yuz"), im = kutu.querySelector("img");
  if (!v){ kutu.classList.remove("on"); kutu.dataset.v = ""; return; }
  if (kutu.dataset.v === v) return;
  kutu.dataset.v = v;
  const [kisi, no] = v.split("/");
  const k = gorselKutusu(), w = k.w * 0.3;
  Object.assign(kutu.style, { width:w+"px", left:(k.left + k.w * 0.04)+"px", top:(k.top + k.h * 0.96 - w)+"px" });
  kutu.classList.remove("on");
  im.onload = () => { if (kutu.dataset.v === v) kutu.classList.add("on"); };
  im.onerror = () => kutu.classList.remove("on");
  im.src = `assets/yuz/${kisi}/${String(no).padStart(2, "0")}.jpg`;
}

/* metin 3 satıra sığmazsa yazı küçülür, kartlar yine yerinden oynamaz */
function setText(html){
  const el = $("text"); el.style.fontSize = "";
  el.innerHTML = `<span>${t(html)}</span>`;
  const sp = el.firstChild; let fs = parseFloat(getComputedStyle(el).fontSize);
  while (sp.offsetHeight > el.clientHeight - 6 && fs > 15){ fs -= 1; el.style.fontSize = fs + "px"; }
}

/* kartlar: tıklanan seçeneği döndürür. kapali:true olan kart görünür ama basılmaz (yerler sabit kalsın diye) */
function kartlar(list){
  return new Promise(res => {
    const box = $("cards"), n = list.length;
    box.className = "cards" + (n === 1 ? " one" : n === 3 ? " three" : ""); box.innerHTML = "";
    let bitti = false, tm = null;
    const ac = new AbortController();
    /* tek düz kartta (Devam gibi) ekranın herhangi bir yerine dokunmak da ilerletir; kaza olmasın diye kısa gecikmeyle açılır */
    if (n === 1 && !list[0].tip && !list[0].oyun)
      setTimeout(() => { if (!bitti) $("play").addEventListener("click", e => { if (!e.target.closest("button")) sec(list[0], box.children[0]); }, { signal:ac.signal }); }, 350);
    const sec = (c, el) => {
      if (bitti) return; bitti = true; clearTimeout(tm); ac.abort(); Ses.dokun();
      [...box.children].forEach(x => x.disabled = true);
      el && el.classList.add("picked");
      setTimeout(() => res(c), 280);
    };
    /* sahne: kart yok, görselin kendisine dokunulur. Kendiliğinden geçmez (KURALLAR 3.11). */
    if (n === 1 && list[0].tip === "sahne"){
      const yazi = document.createElement("div"); yazi.className = "sahne-ipucu"; yazi.textContent = t(list[0].yazi); box.appendChild(yazi);
      setTimeout(() => { if (!bitti) $("scene").addEventListener("click", () => sec(list[0]), { signal:ac.signal }); }, 350);
      return;
    }
    list.forEach(c => {
      const el = document.createElement("button"); el.className = "card"; el.type = "button"; el.textContent = t(c.yazi);
      if (c.kapali) el.disabled = true;
      else if (c.tip === "basili") holdable(el, () => sec(c, el));
      else if (c.tip === "surukle") draggable(el, () => sec(c, el));
      else if (c.tip === "saril") holdable(el, () => sec(c, el), () => sec(c.kisa, el));
      else if (c.tip === "kendine") kendineCek(el, () => sec(c, el), ac.signal, c.cekYer);
      else el.addEventListener("click", () => sec(c, el));
      const ipucu = { basili:"basılı tut", saril:"basılı tut", surukle:"yukarı sürükle", kendine:"simidi aşağı çek" }[c.tip];
      if (ipucu){ const h = document.createElement("span"); h.className = "hint"; h.textContent = t(ipucu); el.appendChild(h); }
      if (c.tip === "sureli"){ el.classList.add("timed"); el.style.setProperty("--t", c.sure + "s");
        tm = setTimeout(() => c.gec ? sec(c.gec) : sec(list[0], box.children[0]), c.sure * 1000); }   // gec: süre dolunca olan
      box.appendChild(el);
    });
  });
}

/* hareket parmak ekrandayken biter; parmak kalkınca oluşan tıklama sonraki sahneyi atlatmasın */
function tiklamaYut(){
  const yut = e => { e.stopPropagation(); e.preventDefault(); };
  document.addEventListener("click", yut, true);
  addEventListener("pointerup", () => setTimeout(() => document.removeEventListener("click", yut, true), 120), { once:true });
  addEventListener("pointercancel", () => document.removeEventListener("click", yut, true), { once:true });
}

/* erken verilirse: yarıda bırakmak da bir sonuçtur (sarılma) */
function holdable(btn, done, erken){
  const NS = "http://www.w3.org/2000/svg", svg = document.createElementNS(NS,"svg"), circ = document.createElementNS(NS,"circle");
  svg.setAttribute("viewBox","0 0 100 100"); svg.setAttribute("preserveAspectRatio","none"); svg.classList.add("ring");
  circ.setAttribute("cx",50); circ.setAttribute("cy",50); circ.setAttribute("r",46);
  const L = 2*Math.PI*46; circ.style.strokeDasharray = L; circ.style.strokeDashoffset = L;
  svg.appendChild(circ); btn.appendChild(svg);
  let t0 = 0, raf = 0, DUR = 1300, tutuyor = false;
  const step = t => { const p = Math.min(1,(t-t0)/DUR); circ.style.strokeDashoffset = L*(1-p);
    if (p >= 1){ tutuyor = false; stop(); tiklamaYut(); done(); } else raf = requestAnimationFrame(step); };
  const start = e => { if (btn.disabled) return; e.preventDefault(); DUR = 1300 + 700 * Math.max(0, 5 - st.huzur); t0 = performance.now(); tutuyor = true; raf = requestAnimationFrame(step); };   // huzur düştükçe daha uzun tutulur
  const stop = () => { cancelAnimationFrame(raf); circ.style.strokeDashoffset = L; };
  if (erken) btn.addEventListener("pointerup", () => { if (tutuyor && performance.now() - t0 > 500){ tutuyor = false; erken(); } tutuyor = false; });
  btn.addEventListener("pointerdown", start); ["pointerup","pointerleave","pointercancel"].forEach(ev => btn.addEventListener(ev, stop));
  btn.addEventListener("keydown", e => { if (e.key==="Enter"||e.key===" "){ e.preventDefault(); done(); } });
}

/* sürükle: kart sahneye doğru yukarı çekilince seçilir; erken bırakılırsa yerine döner */
function draggable(btn, done){
  let y0 = 0, x0 = 0, on = false;
  const esik = () => $("scene").getBoundingClientRect().height * 0.22;
  btn.addEventListener("pointerdown", e => { if (btn.disabled) return; e.preventDefault(); on = true; y0 = e.clientY; x0 = e.clientX;
    btn.setPointerCapture(e.pointerId); btn.classList.add("dragging"); });
  btn.addEventListener("pointermove", e => { if (!on) return;
    const dy = Math.min(0, e.clientY - y0), dx = (e.clientX - x0) * 0.3;
    btn.style.transform = `translate(${dx}px,${dy}px) rotate(${dx*0.05}deg)`;
    if (-dy > esik()){ on = false; btn.classList.remove("dragging"); btn.style.transform = `translate(${dx}px,${dy - 30}px)`; btn.style.opacity = 0; tiklamaYut(); done(); } });
  const birak = () => { if (!on) return; on = false; btn.classList.remove("dragging"); btn.style.transform = ""; };
  btn.addEventListener("pointerup", birak); btn.addEventListener("pointercancel", birak);
  btn.addEventListener("keydown", e => { if (e.key==="Enter"||e.key===" "){ e.preventDefault(); done(); } });
}
