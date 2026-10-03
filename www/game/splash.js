// Açılış ekranı: siyah arka planda ClampGames logosu (~2.6 sn).
// Logo kavramı: "C" harfi bir mengene (C-clamp); mengene bir oyun küpünü
// kavrar — stüdyonun her oyunu (müzik, koşu, kutu oyunu...) için genel bir
// marka. Dokununca geçilir. Logo değişirse yalnızca #splash içindeki SVG
// ve yazılar değişir.
(function(){
  const el = document.getElementById('splash'); if(!el) return;
  const DUR = 2700;
  let done = false;
  function finish(){
    if(done) return; done = true;
    el.classList.add('out');
    setTimeout(()=>{ el.remove(); }, 450);
  }
  el.addEventListener('pointerdown', finish);
  // Kilitleme anında küçük bir "tık" sesi (ses bağlamı açıksa).
  setTimeout(()=>{ try{ if(typeof beep==='function' && AC && AC.state==='running'){ beep(180,0.06,'square',0.08); beep(90,0.12,'sine',0.1); } }catch(e){} }, 1250);
  setTimeout(finish, DUR);
})();
