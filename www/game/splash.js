// Açılış ekranı: siyah arka planda ClampGames logosu (en az ~2.7 sn).
// Logo kavramı: "C" harfi bir mengene (C-clamp); mengene bir oyun küpünü
// kavrar — stüdyonun her oyunu (müzik, koşu, kutu oyunu...) için genel bir
// marka. Dokununca geçilir. Logo değişirse yalnızca #splash içindeki SVG
// ve yazılar değişir.
// Logo en az MIN_MS görünür; bu sırada oyun arkada yüklenir (sayfa, oda
// görseli/videosu, 3D paketi). Hepsi hazır olunca (ya da en geç MAX_MS'de)
// yumuşakça kaybolur ve altında hazır bekleyen ana menü görünür.
function gameAssetsReady(){
  if(document.readyState!=='complete') return false;
  if(typeof roomAssetsReady==='function' && !roomAssetsReady()) return false;
  if(typeof cfg!=='undefined' && cfg.gfx==='3d' && typeof _gfx3dState!=='undefined'
     && _gfx3dState!=='ready' && _gfx3dState!=='failed' && _gfx3dState!=='off') return false;
  return true;
}
(function(){
  const el = document.getElementById('splash'); if(!el) return;
  const MIN_MS = 2700, MAX_MS = 8000, t0 = performance.now();
  let done = false;
  function finish(){
    if(done) return; done = true;
    el.classList.add('out');
    setTimeout(()=>{ el.remove(); }, 900);
  }
  function check(){
    if(done) return;
    const el_ = performance.now()-t0;
    if(el_>=MAX_MS || (el_>=MIN_MS && gameAssetsReady())) finish();
    else setTimeout(check, 120);
  }
  el.addEventListener('pointerdown', ()=>{ if(performance.now()-t0>800) finish(); });
  // Kilitleme anında küçük bir "tık" sesi (ses bağlamı açıksa).
  setTimeout(()=>{ try{ if(typeof beep==='function' && AC && AC.state==='running'){ beep(180,0.06,'square',0.08); beep(90,0.12,'sine',0.1); } }catch(e){} }, 1250);
  setTimeout(check, MIN_MS);
})();
