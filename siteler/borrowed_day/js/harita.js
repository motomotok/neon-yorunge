/* ===== KADER HARİTASI: günün yolu çizilir. Seçilen yol altın, seçilmeyen yollar soluk; hepsi kader düğümlerinde birleşir.
   Hayata özel her şey HAYAT.harita içinde. Damga görseli yoksa düğüm nokta olarak çizilir. ===== */
const NS_SVG = "http://www.w3.org/2000/svg";

function haritaYerlesim(W){
  let y = 34; const cx = W / 2;
  return yol.map((e, i) => {
    const r = e.kader ? 138 : 92;
    const d = { ...e, y:y + r / 2, x:cx, yon:0 };
    if (!e.kader){ d.yon = i % 2 ? 1 : -1; d.x = cx + d.yon * W * 0.11; }
    d.ust = y; d.alt = y + r; y += r;
    return d;
  });
}

/* her düğüm için ayrı yol parçası: yalnız çizilmekte olan parça yeniden boyanır */
function yolParcalari(noktalar, cx, ilkUst){
  return noktalar.map((n, i) => {
    const bas = i ? n.ust : ilkUst;
    return { d:`M ${cx} ${bas} C ${cx} ${n.ust + 20}, ${n.x} ${n.y - 26}, ${n.x} ${n.y} C ${n.x} ${n.y + 26}, ${cx} ${n.alt - 20}, ${cx} ${n.alt}`, pay:n.alt - bas };
  });
}

function svgYol(d, sinif){
  const p = document.createElementNS(NS_SVG, "path");
  p.setAttribute("d", d); p.setAttribute("class", sinif); p.setAttribute("fill", "none");
  return p;
}

/* parçaları sırayla akıtır; süre yükseklikle orantılıdır, ekran sabit hızla iner.
   adim(0-1, uç nokta) her karede çağrılır. atla() çağrılırsa hemen biter. */
function ciz(parcalar, sinif, svg, sure, adim){
  const yollar = parcalar.map(p => {
    const el = svgYol(p.d, sinif); svg.appendChild(el);
    const L = el.getTotalLength();
    el.style.strokeDasharray = `${L} ${L}`; el.style.strokeDashoffset = L; el.style.visibility = "hidden";
    return { el, L, pay:p.pay };
  });
  const toplam = yollar.reduce((a, y) => a + y.pay, 0);
  const tamam = y => { y.el.style.visibility = ""; y.el.style.strokeDasharray = "none"; y.el.style.strokeDashoffset = 0; };
  let bitti = false, cozum, i = 0, once = 0;
  const son = () => { if (bitti) return; bitti = true; yollar.forEach(tamam); const y = yollar[yollar.length - 1]; adim && adim(1, y.el.getPointAtLength(y.L)); cozum(); };
  const soz = new Promise(r => { cozum = r; });
  const t0 = performance.now();
  (function f(t){
    if (bitti) return;
    const g = Math.min(1, (t - t0) / sure), yer = g * toplam;
    while (i < yollar.length - 1 && yer >= once + yollar[i].pay){ tamam(yollar[i]); once += yollar[i].pay; i++; }
    const y = yollar[i], q = Math.min(1, (yer - once) / y.pay);
    y.el.style.visibility = ""; y.el.style.strokeDashoffset = y.L * (1 - q);
    adim && adim(g, y.el.getPointAtLength(y.L * q));
    if (g >= 1) son(); else requestAnimationFrame(f);
  })(t0);
  return { soz, atla:son };
}

/* yumuşak kaydırma: başlar, hızlanır, yavaşlayarak durur */
function kaydir(kutu, hedef, sure){
  return new Promise(res => {
    const bas = kutu.scrollTop, fark = hedef - bas;
    if (Math.abs(fark) < 1){ kutu.scrollTop = hedef; return res(); }
    const t0 = performance.now();
    (function f(t){
      const g = Math.min(1, (t - t0) / sure);
      kutu.scrollTop = bas + fark * (g < .5 ? 2 * g * g : 1 - Math.pow(-2 * g + 2, 2) / 2);
      if (g < 1) requestAnimationFrame(f); else res();
    })(t0);
  });
}

async function harita(){
  if ((HAYAT.harita || {}).renk) $("harita").style.setProperty("--gold", HAYAT.harita.renk);   // yol hayatın renginde (KURALLAR 3.10)
  rain(false); yuz(null); Ses.ortam("ev"); Ses.muzik("menu");
  try { localStorage.setItem(`bd_${HAYAT.id}_oynayis`, String(oynayis)); } catch (e) {}
  const H = HAYAT.harita || {}, kutu = $("hKaydir"), alan = $("hAlan");
  show("harita");
  $("hBaslik").textContent = t(`${HAYAT.isim} · ${HAYAT.gunEtiketi || "Salı"}`);
  await bekle(60);
  const W = alan.clientWidth, cx = W / 2, N = haritaYerlesim(W), yuks = N.length ? N[N.length - 1].alt + 20 : 100;
  alan.style.height = yuks + "px"; alan.innerHTML = "";

  const svg = document.createElementNS(NS_SVG, "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${yuks}`); svg.setAttribute("width", W); svg.setAttribute("height", yuks);
  alan.appendChild(svg);

  /* seçilmeyen yollar: öbür yana açılıp aynı yere döner */
  for (const n of N) if (!n.kader){
    const x = cx - n.yon * W * 0.11;
    svg.appendChild(svgYol(`M ${cx} ${n.ust} C ${cx} ${n.ust + 20}, ${x} ${n.y - 26}, ${x} ${n.y} C ${x} ${n.y + 26}, ${cx} ${n.alt - 20}, ${cx} ${n.alt}`, "h-soluk"));
  }
  /* düğümler */
  const dugum = N.map(n => {
    const el = document.createElement("div");
    el.className = "h-d" + (n.kader ? " kader" : "");
    el.style.top = n.y + "px";
    const damga = n.damga ? `<img src="assets/harita/${n.damga}.jpg" alt="" onerror="this.remove()">` : "";
    if (n.kader) el.innerHTML = `<i class="h-nokta" style="left:${n.x}px">${damga}</i><div class="h-k-yazi"><span>${t(n.saat)}</span> ${t(n.yazi)}</div>`;
    else {
      const sag = n.yon > 0;
      el.innerHTML = `<i class="h-nokta" style="left:${n.x}px">${damga}</i>
        <div class="h-sec ${sag ? "sag" : "sol"}"><span>${t(n.saat)}</span>${t(n.secilen)}</div>
        <div class="h-oteki ${sag ? "sol" : "sag"}">${n.digerleri.map(t).join("<br>")}</div>`;
    }
    alan.appendChild(el);
    return { el, y:n.y };
  });

  /* damgalar çözülmeden çizim başlamaz, yoksa ilk karelerde takılır */
  await Promise.race([Promise.all([...alan.querySelectorAll("img")].map(i => i.decode().catch(() => {}))), bekle(800)]);

  /* başta görünen kısa cümle */
  const yollar = yol.filter(y => !y.kader).reduce((a, y) => a * y.n, 1);
  $("hyol").textContent = t(`Senin yolun: ${yollar.toLocaleString(YEREL)} olası yoldan biri.`);

  let cizim = null;
  const atlaTus = () => cizim && cizim.atla();
  kutu.addEventListener("pointerdown", atlaTus);
  let dok = 0;
  cizim = ciz(yolParcalari(N, cx, 0), "h-altin", svg, Math.max(9000, N.length * 750), (p, n) => {
    while (dok < dugum.length && dugum[dok].y <= n.y + 8) dugum[dok++].el.classList.add("on");
    if (p < 1) kutu.scrollTop = Math.max(0, p * yuks - kutu.clientHeight * 0.55);
  });
  await cizim.soz;
  dugum.forEach(d => d.el.classList.add("on"));
  kutu.removeEventListener("pointerdown", atlaTus);
  await bekle(900);

  /* kırmızı iz: ucunda yağmurluk damgasıyla altın yolun yanından gider, sonunda sahibini söylemeden ne olduğunu söyler (M1) */
  if (H.iz){
    const bas = Math.max(0, N.findIndex(n => n.saat >= H.iz.bas));
    const sonra = H.iz.son ? N.findIndex(n => n.saat > H.iz.son) : -1;   // iz bir saatte bitebilir
    const parca = N.slice(bas, sonra < 0 ? N.length : sonra).map(n => ({ ...n, x:n.x + 7 }));
    if (parca.length){
      const y0 = parca[0].ust, y1 = parca[parca.length - 1].alt, gorus = kutu.clientHeight * 0.55;
      await kaydir(kutu, Math.max(0, y0 - gorus), 1500);
      const uc = document.createElement("img");
      uc.className = "h-iz-uc"; uc.alt = ""; uc.src = `assets/harita/${H.iz.damga}.jpg`; uc.onerror = () => uc.remove();
      alan.appendChild(uc);
      const c = ciz(yolParcalari(parca, cx + 7, y0), "h-kirmizi", svg, 6000, (p, n) => {
        uc.style.transform = `translate(${n.x - 17}px, ${n.y - 17}px)`;
        if (p < 1) kutu.scrollTop = Math.max(0, y0 + p * (y1 - y0) - gorus);
      });
      kutu.addEventListener("pointerdown", c.atla, { once:true });
      await c.soz;
      kutu.removeEventListener("pointerdown", c.atla);
      /* damga yazının üstünde kalmasın: son satırın altına iner */
      uc.style.transition = "transform .6s ease";
      uc.style.transform = `translate(${cx + 7 - 17}px, ${y1 + 26 - 17}px)`;
      const iz = $("hIz"); iz.innerHTML = H.iz.yazi.map(t).join("<br>"); iz.hidden = false;
      await bekle(60);
      kaydir(kutu, kutu.scrollHeight - kutu.clientHeight, 900);
      await new Promise(r => { const t = setTimeout(r, 3400); kutu.addEventListener("pointerdown", () => { clearTimeout(t); r(); }, { once:true }); });
    }
  }

  /* kapanış ve öteki hayatlar: önce ekran iner, yazı sonra başlar */
  $("hHayatlar").innerHTML = (H.digerleri || []).map(d =>
    `<button class="h-hayat" type="button" data-not="${t(d.not)}"><img src="assets/harita/${d.damga}.jpg" alt="" onerror="this.style.visibility='hidden'"><span>${t(d.ad)}</span></button>`).join("");
  $("hHayatlar").querySelectorAll("button").forEach(b => b.onclick = () => { Ses.dokun(); $("hNot").textContent = b.dataset.not; });
  await Promise.race([Promise.all([...$("hHayatlar").querySelectorAll("img")].map(i => i.decode().catch(() => {}))), bekle(500)]);
  $("hDigerBaslik").hidden = !(H.digerleri || []).length;
  $("hSon").hidden = false;
  await bekle(60);
  await kaydir(kutu, kutu.scrollHeight - kutu.clientHeight, 1600);
  yaziKutusu($("hkapanis"), HAYAT.kapanis);
  if (HAYAT.gercekler){ $("hMenu").textContent = t("Bu gerçekti"); $("hMenu").onclick = gercekEkrani; }
  else $("hMenu").onclick = () => location.reload();     // yeniden yükleme menüye döner
}

/* BU GERÇEKTİ (KURALLAR 9.9): haritadan sonra tek tek; oyuncunun çizdiği işaret de burada geri gelir */
async function gercekEkrani(){
  Ses.dokun(); show("play"); $("gauges").style.visibility = "hidden"; $("menuTus").hidden = true; yuz(null); rain(false);
  saat("Bu gerçekti");
  const G = HAYAT.gercekler;
  for (let i = 0; i < G.length; i++){
    gorsel({ gorsel:G[i].gorsel, yedek:G[i].yedek, kamera:false });
    let im = null;
    if (G[i].isaret && b.isaret){ im = document.createElement("img"); im.className = "gercek-isaret"; im.alt = ""; im.src = b.isaret; $("scene").appendChild(im); }
    setText(G[i].yazi);
    await kartlar([{ yazi:i === G.length - 1 ? "Ana menü" : "Devam" }]);
    if (im) im.remove();
  }
  location.reload();
}
