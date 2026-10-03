// Anlatıcı karakter "DJ Vinil": tutorial ve hikâye anlarında (ör. ilk boss
// sonrası) konuşan maskot. Metin daktilo gibi harf harf yazılır; CTA
// butonu ancak yazı bittikten sonra çıkar — oyuncu metni okumadan geçemez.
// tutorial.js'ten ÖNCE yüklenir.
const NARRATOR_CHAR_MS = 30;     // harf başına süre
const NARRATOR_CTA_DELAY = 450;  // yazı bittikten sonra butonun belirme gecikmesi
let _narr = {timer:null, ctaTimer:null, typing:false};

function narratorIsTyping(){ return _narr.typing; }

// opts: {cta, onCta, onDone, skippable, pos:'top'|'bottom'}
function narratorSay(msg, opts){
  opts = opts || {};
  const box = document.getElementById('tutorialBox'); if(!box) return;
  const txt = document.getElementById('tutorialBoxMsg');
  const cta = document.getElementById('tutorialBoxCta');
  const skip = document.getElementById('tutorialSkipBtn');
  clearInterval(_narr.timer); clearTimeout(_narr.ctaTimer);
  cta.style.display = 'none'; cta.onclick = null;
  if(skip) skip.style.display = opts.skippable===false ? 'none' : '';
  box.classList.toggle('atBottom', opts.pos==='bottom');
  box.classList.add('show', 'talking');
  // Array.from: emoji / çok baytlı karakterler (Arapça, Japonca…) bölünmesin.
  const chars = Array.from(msg);
  let i = 0;
  txt.textContent = '';
  _narr.typing = true;
  setNarrBlock(true);
  _narr.timer = setInterval(()=>{
    i++;
    txt.textContent = chars.slice(0, i).join('');
    const ch = chars[i-1];
    // Daktilo tıkırtısı: her iki harfte bir, boşluklarda sessiz.
    if(i%2===0 && ch && ch.trim()) beep(1500+Math.random()*250, 0.018, 'square', 0.025, true);
    if(i >= chars.length){
      clearInterval(_narr.timer);
      _narr.typing = false;
      setNarrBlock(false);
      box.classList.remove('talking');
      if(opts.onDone) opts.onDone();
      if(opts.cta){
        _narr.ctaTimer = setTimeout(()=>{
          cta.textContent = opts.cta;
          cta.style.display = 'inline-block';
          cta.onclick = e=>{ e.stopPropagation(); beep(700,0.06,'sine',0.1); if(opts.onCta) opts.onCta(); };
        }, NARRATOR_CTA_DELAY);
      }
    }
  }, NARRATOR_CHAR_MS);
}

// Yazı akarken tüm ekran tıklamaya kapalı (yalnızca anlatıcı kutusu —
// ör. Atla — açık): oyuncu metni okumadan bir yere basıp akışı bozamaz.
function setNarrBlock(on){
  const b = document.getElementById('narrBlocker'); if(b) b.classList.toggle('on', !!on);
}

function narratorHide(){
  clearInterval(_narr.timer); clearTimeout(_narr.ctaTimer);
  _narr.typing = false;
  setNarrBlock(false);
  const box = document.getElementById('tutorialBox');
  if(box) box.classList.remove('show', 'talking');
  const cta = document.getElementById('tutorialBoxCta');
  if(cta){ cta.style.display = 'none'; cta.onclick = null; }
}

// ---- Hikâye anı: ilk boss dalgası temizlendikten sonra ----
// Oyun 'story' durumunda donar (update çalışmaz, dokunma/duraklat etkisiz),
// DJ Vinil ileriye dönük bir meydan okuma yazar. Okunmadan devam edilemez.
// Bayrak (stats.firstBossStory) sadece mesaj gerçekten gösterilince konur:
// oyuncu o arada ölürse bir sonraki boss temizliğinde tekrar denenir.
function narratorFirstBossStory(tries){
  tries = tries || 0;
  if(stats.firstBossStory || tutorialActive) return;
  if(state==='pause' || state==='revive'){
    if(tries < 120) setTimeout(()=>narratorFirstBossStory(tries+1), 500);
    return;
  }
  if(state!=='play') return;
  stats.firstBossStory = true; saveStats();
  state = 'story';
  narratorSay(t('story_boss1'), {
    cta: t('story_boss1_cta'), skippable:false,
    onCta: ()=>{
      narratorHide();
      if(state==='story'){ state='play'; player.invulT = INVUL; }
    },
  });
}
