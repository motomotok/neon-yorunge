/* ===== AKIŞ: sahne sırası, defter, Kader Haritası, başlat ===== */

function sayfalariAl(s){
  let m = typeof s.metin === "function" ? s.metin(b, st) : s.metin;
  m = [].concat(m).filter(Boolean);
  if (oynayis > 1 && s.tekrar) m.push(s.tekrar);
  return m;
}

const deger = v => typeof v === "function" ? v(b, st) : v;   // saat, yüz gibi alanlar bayraklara göre değişebilir

async function sahne(s){
  const t = deger(s.saat);
  show("play"); saat(t, s.kader); gorsel(s); yuz(deger(s.yuz)); rain(!!s.yagmur);
  Ses.ortam(s.ortam || (HAYAT.ortamlar || {})[String(s.gorsel).split("/")[0]]);
  Ses.muzik(s.muzik !== undefined ? s.muzik : (HAYAT.muzikler || {})[String(s.gorsel).split("/")[0]]);
  Ses.efekt(s.efekt);
  titre(s.titre);
  uygula(s.girince);
  if (s.ozel === "defter") return defter();
  const sayfalar = sayfalariAl(s);
  for (let i = 0; i < sayfalar.length - 1; i++){ setText(sayfalar[i]); await kartlar([{ yazi:[].concat(s.kart || [])[i] || "Devam" }]); }
  setText(sayfalar[sayfalar.length - 1] || "");
  const secenekler = (s.secimler || [{ yazi:[].concat(s.kart || [])[sayfalar.length - 1] || "Devam" }]).filter(c => !c.goster || c.goster(b, oynayis, st))
    .map(c => typeof c.kapali === "function" ? { ...c, kapali:c.kapali(b, oynayis, st) } : c);
  if (HAYAT.kilitNot && secenekler.some(c => c.kapali)) gostergeNotu(window.t(HAYAT.kilitNot), 5200);
  const c = await kartlar(secenekler);
  if (HAYAT.kilitNot && secenekler.some(x => x.kapali)) $("gNot").hidden = true;
  if (secenekler.length > 1) yol.push({ saat:t, secilen:c.yazi, digerleri:secenekler.filter(x => x !== c).map(x => x.yazi), n:secenekler.length, damga:s.damga });
  if (c.saatSonra) saat(c.saatSonra, s.kader);
  if (c.bayrak) b[c.bayrak] = true;
  uygula(c.etki);
  if (c.oyun){ $("menuTus").hidden = true; [...$("cards").children].forEach(k => k.style.visibility = "hidden"); }   // mini oyunda kart görünmez (yeri kalır, sahne zıplamaz), menü açılmaz
  if (c.oyun === "denge"){
    const kayik = HAYAT.denge === "kayik";                         // İdu: kolay hâli, yatan yana dokun (kurek)
    setText(kayik ? "Kayık hangi yana yatarsa o yana dokun." : "Parmağınla ya da telefonu eğerek dengede tut.");
    if (!kayik && window.DeviceOrientationEvent && DeviceOrientationEvent.requestPermission){ try { await DeviceOrientationEvent.requestPermission(); } catch (e) {} }
    const yorgunluk = 1 + 0.1 * Math.max(0, 6 - st.enerji);       // enerji düştükçe tepsi daha çok yalpalar
    b.denge = kayik ? await kurek(yorgunluk * (deger(c.agir) || 1))
                    : await denge(c.sure || 6, yorgunluk * (deger(c.agir) || 1), HAYAT.denge);   // true = bir şey düştü
    if (c.oyunEtki) uygula(c.oyunEtki(b.denge, b, st));
    if (c.oyunSonuc){ setText(c.oyunSonuc(b.denge)); await devam(); }
  }
  if (c.oyun === "topla"){
    const yorgun = Math.max(0, 5 - st.enerji);                    // enerji düştükçe süre ve kurtarılabilecek sayı azalır
    b.toplanan = await topla(Math.max(5, (c.sure || 8) - 0.7 * yorgun), Math.max(4, 8 - yorgun));
    if (c.oyunEtki) uygula(c.oyunEtki(b.toplanan, b, st));
    if (c.oyunSonuc){ setText(c.oyunSonuc(b.toplanan)); await devam(); }
  }
  if (c.oyun === "ov"){ setText(c.ipucu || ""); await ovala(); }
  if (c.oyun === "ciz"){ setText(c.ipucu || ""); b.isaret = await cizim(); }
  if (c.oyun === "yazili") b.yazili = await yazili(deger(c.sure));
  $("menuTus").hidden = false;
  for (const t of [].concat(c.sonuc || [])){ setText(t); await devam(); }   // yazı oyuncu dokunmadan geçmez (KURALLAR 3.11)
  if (s.kaderSatir) yol.push({ kader:true, saat:t, yazi:s.kaderSatir, damga:s.damga });
  await bekle(300);
}

/* parmak sayfada gezdikçe satır yazılır; kalem "dur" harfinde bir an takılır. Dokunulmazsa 9 saniyede kendi yazar. */
function kalemleYaz(sayfa, hedef, dur, yaz){
  return new Promise(res => {
    let i = 0, x0 = null, birikim = 0, bekliyor = false, otoTm = null, bitti = false;
    const harf = () => {
      if (bitti || bekliyor) return;
      i++; yaz(hedef.slice(0, i)); Ses.kalem();
      if (i >= hedef.length) return son();
      if (i === dur){ bekliyor = true; setTimeout(() => { bekliyor = false; }, 1300); }
    };
    const son = () => { bitti = true; clearTimeout(otoTm); $("cards").innerHTML = "";
      sayfa.removeEventListener("pointerdown", bas); sayfa.removeEventListener("pointermove", git); sayfa.removeEventListener("pointerup", kalk);
      sayfa.style.touchAction = ""; res(); };
    const oto = () => { harf(); if (!bitti) otoTm = setTimeout(oto, bekliyor ? 1300 : 75); };
    const bas = e => { clearTimeout(otoTm); x0 = e.clientX; sayfa.setPointerCapture(e.pointerId); };
    const git = e => { if (x0 === null) return; birikim += Math.abs(e.clientX - x0); x0 = e.clientX;
      while (birikim > 7 && !bitti){ birikim -= 7; harf(); } };
    const kalk = () => { x0 = null; clearTimeout(otoTm); if (!bitti) otoTm = setTimeout(oto, 9000); };   // parmak kalkınca bekleyiş yeniden başlar
    sayfa.style.touchAction = "none";
    sayfa.addEventListener("pointerdown", bas); sayfa.addEventListener("pointermove", git); sayfa.addEventListener("pointerup", kalk);
    const yazi = document.createElement("div"); yazi.className = "sahne-ipucu"; yazi.textContent = t("parmağınla satırın üstünden geç");
    $("cards").className = "cards one"; $("cards").innerHTML = ""; $("cards").appendChild(yazi);
    otoTm = setTimeout(oto, 9000);
  });
}

/* DEFTER (ozel:"defter"): bugünün satırını yaz, sonra sayfaları geriye çevir. Sayfalar hayat dosyasından gelir. */
async function defter(){
  const D = HAYAT.defter, sayfalar = D.sayfalar(b, st), img = $("sceneImg"), scene = $("scene");
  img.style.opacity = 0; $("sceneOld").style.opacity = 0; yuz(null);
  const pg = document.createElement("div"); scene.appendChild(pg);
  const yerlestir = () => { const k = gorselKutusu(); Object.assign(pg.style, { left:k.left+"px", top:k.top+"px", width:k.w+"px", height:k.h+"px" });
    pg.style.setProperty("--pfs", (k.h / 18.5) + "px"); };
  let bugunSatiri = "";
  const ciz = i => {
    const p = sayfalar[i]; yerlestir();
    if (p.kapak){ pg.className = "page kapak"; pg.innerHTML = `<div class="kapak-yazi">${t(p.yazi)}</div>`; return; }
    pg.className = "page";
    const satir = x => typeof x === "string" ? `<div class="l">${t(x)}</div>`
      : x.n ? `<div class="l baska">${t(x.n)}</div>`                   // başka bir el yazısı
      : `<div class="l"><i class="k" style="width:${x.k}%"></i></div>`;
    pg.innerHTML = `<div class="h">${t(p.h)}</div>` + p.satirlar.map(satir).join("") + (i === 0 ? `<div class="l" id="bugun">${bugunSatiri}</div>` : "");
  };
  ciz(0);
  setText(D.giris); yerlestir();          // metin satır sayısı sahne yüksekliğini değiştirir, sayfa her seferinde yeniden oturur
  const yazilacak = t(D.satir(st, b));
  /* duraklama her dilde ilk kelimeden sonradır */
  await kalemleYaz(pg, yazilacak, D.duraklama && D.duraklama(st) >= 0 ? yazilacak.indexOf(" ") : -1, m => { bugunSatiri = m; $("bugun").textContent = m; });
  if (D.kaderSatir) yol.push({ kader:true, saat:HAYAT.sahneler.find(x => x.ozel === "defter").saat, yazi:D.kaderSatir, damga:D.damga });
  await bekle(700);
  let i = 0;
  for (;;){
    setText(sayfalar[i].not); yerlestir();
    const k = await kartlar([
      { yazi:"‹ Eski", git:+1, kapali:i === sayfalar.length - 1 },
      { yazi:"Yeni ›", git:-1, kapali:i === 0 },
      { yazi:"Kapat", kapat:true } ]);
    if (k.kapat) break;
    i += k.git; ciz(i);
  }
  pg.remove(); img.style.opacity = 1;   // defterden sonra sahne akışı sürebilsin
}

/* kayıt: her sahne bitince; uygulama kapansa da kaldığı sahneden sürer */
const KAYIT = `bd_${HAYAT.id}_kayit`;
function kaydet(i){ try { localStorage.setItem(KAYIT, JSON.stringify({ i, b, st, yol })); } catch (e) {} }
function kayitOku(){ try { return JSON.parse(localStorage.getItem(KAYIT)); } catch (e) { return null; } }
function kayitSil(){ try { localStorage.removeItem(KAYIT); } catch (e) {} }

/* hayatlar arası hafıza (KURALLAR 4.3): biten hayatın bayrakları ve göstergeleri sonraki hayatlara kalır */
function oncekiler(){
  const o = {};
  for (const ad of ["hasan", "deniz", "kemal", "emre", "burak"]) if (ad !== HAYAT.id){
    try { const k = JSON.parse(localStorage.getItem(`bd_${ad}_sonuc`)); if (k) o[ad] = k; } catch (e) {}
  }
  return o;
}
function sonucYaz(){
  const { once, ...kalan } = b;
  try { localStorage.setItem(`bd_${HAYAT.id}_sonuc`, JSON.stringify({ ...kalan, gosterge:{ ...st } })); } catch (e) {}
}

function onYukle(i){
  for (const s of HAYAT.sahneler.slice(i, i + 3)) if (s.gorsel) new Image().src = `assets/${HAYAT.klasor}/${s.gorsel}.jpg`;
}

async function oyna(bas = 0){
  if (!b.once) b.once = oncekiler();
  if (bas === 0){
    await showFate(HAYAT.kader);
    if (oynayis === 1) gostergeNotu(t("Üstteki simgelere dokunursan ne işe yaradıklarını görürsün."), 5000);
  }
  for (let i = bas; i < HAYAT.sahneler.length; i++){
    const s = HAYAT.sahneler[i];
    if (s.atla && s.atla(b, oynayis, st)) continue;
    onYukle(i + 1);
    await sahne(s);
    kaydet(i + 1);
  }
  kayitSil(); sonucYaz();
  Ses.efekt(null);
  await harita();
}

/* OYUN İÇİ MENÜ: üstteki tuş ya da telefonun geri tuşu açar */
const durakAcik = () => !$("durak").hidden;
function durakYaz(){ $("dSes").textContent = t(Ses.acik ? "Ses: açık" : "Ses: kapalı"); }
function durakAc(){
  durakYaz(); $("dBastan").textContent = t("Baştan başla"); delete $("dBastan").dataset.emin;
  $("durak").hidden = false; Ses.askida(true);
}
function durakKapat(){ $("durak").hidden = true; Ses.askida(false); }
$("menuTus").onclick = () => { Ses.dokun(); durakAc(); };
$("dDevam").onclick = durakKapat;
$("dSes").onclick = () => { Ses.degistir(); durakYaz(); };
$("dMenu").onclick = () => location.reload();                 // kayıt duruyor, menüde "Kaldığın yerden devam" çıkar
$("dBastan").onclick = e => {
  const y = e.currentTarget;
  if (!y.dataset.emin){ y.dataset.emin = "1"; y.textContent = t("Emin misin? Dokun"); return; }
  kayitSil(); location.reload();
};

/* telefonun geri tuşu: oyunda menüyü açar/kapatır, ana menüde uygulamadan çıkar */
const App = window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.App;
if (App) App.addListener("backButton", () => {
  if (durakAcik()) return durakKapat();
  const ekran = document.querySelector(".screen.on");
  if (!ekran || ekran.id === "menu") return App.exitApp();
  if (ekran.id === "play"){ if (!$("menuTus").hidden) durakAc(); return; }
  location.reload();                                           // kader ekranı ve Kader Haritası: menüye dön
});

function menu(){
  dilUygula();
  buildGauges();
  document.addEventListener("pointerdown", () => { Ses.baslat(); Ses.muzik("menu"); }, { once:true });
  $("menuArt").style.backgroundImage = `url(${HAYAT.kader.cizim})`;
  $("mBasla").textContent = t(HAYAT.gunAdi || `${HAYAT.isim}'ın günü`);
  /* hazır öteki hayatlar; biri seçilince sayfa o hayatla yeniden açılır */
  const hasanBitti = (() => { try { return !!localStorage.getItem("bd_hasan_sonuc"); } catch (e) { return false; } })();
  for (const h of Object.values(HAYATLAR)) if (h.hazir && h !== HAYAT && (h.id === "hasan" || hasanBitti || h.zaman)){   // zaman hayatları Hasan'ı beklemez (KURALLAR 9.10)
    const y = document.createElement("button"); y.className = "card"; y.type = "button"; y.textContent = t(h.gunAdi);
    y.onclick = () => { location.search = "?hayat=" + h.id; };
    $("mHayatlar").appendChild(y);
  }
  const sesYaz = () => { $("mSes").textContent = t(Ses.acik ? "Ses: açık" : "Ses: kapalı"); };
  sesYaz();
  $("mSes").onclick = () => { Ses.degistir(); sesYaz(); };
  $("mDil").textContent = DIL === "tr" ? "English" : "Türkçe";
  $("mDil").onclick = dilDegistir;
  const k = kayitOku();
  $("mDevam").hidden = !k;
  $("mBasla").onclick = () => { Ses.baslat(); kayitSil(); oyna(0); };
  $("mDevam").onclick = () => {
    Ses.baslat();
    Object.assign(b, k.b); Object.assign(st, k.st); yol.push(...k.yol); updateGauges({});
    oyna(k.i);
  };
  show("menu");
}
menu();
