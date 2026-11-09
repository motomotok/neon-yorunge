/* ===== DİL: Türkçe ana metindir, hikâye ve mantık tek yerdedir. Başka dilde ekrana giden her metin t()'den geçer.
   Sözlükte bulunmayan metin Türkçe kalır ve __eksik listesine yazılır (araclar/dil_kontrol.js bunu önceden yakalar). ===== */
window.SOZLUK = window.SOZLUK || {};
const DIL = (() => {
  try { const d = localStorage.getItem("bd_dil"); if (d) return d; } catch (e) {}
  return (navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en";
})();
const YEREL = DIL === "tr" ? "tr-TR" : "en-US";

function t(metin){
  if (DIL === "tr" || !metin) return metin;
  const S = SOZLUK[DIL] || {};
  if (S[metin] !== undefined) return S[metin];
  const sayilar = [];
  const kalip = metin.replace(/\d[\d.,]*\d|\d/g, m => `{${sayilar.push(m) - 1}}`);
  if (S[kalip] !== undefined) return S[kalip].replace(/\{(\d)\}/g, (_, i) => sayilar[i]);
  if (/\p{L}/u.test(metin)) (window.__eksik = window.__eksik || []).push(metin);
  return metin;
}

/* index.html'deki sabit yazılar: data-t taşıyanlar */
function dilUygula(){
  document.documentElement.lang = DIL;
  document.querySelectorAll("[data-t]").forEach(el => { el.textContent = t(el.textContent); });
  document.querySelectorAll("[aria-label]").forEach(el => { el.setAttribute("aria-label", t(el.getAttribute("aria-label"))); });
}
function dilDegistir(){
  try { localStorage.setItem("bd_dil", DIL === "tr" ? "en" : "tr"); } catch (e) {}
  location.reload();
}
