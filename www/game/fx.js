// Ses (WebAudio beep'leri), titreşim ve ekran-üstü toast bildirimleri.
let AC=null;
function acResume(){ try{ const p=AC.resume(); if(p && p.catch) p.catch(()=>{}); }catch(e){} }
// Melodi kombosu 4'ü geçtiğinde, melodi notaları VE rakiplere çarpma
// sesleri dışındaki her şeyin sesi kısılır — oyuncu o an kurduğu melodiye
// odaklanabilsin diye. `keepFull=true` geçen çağrılar (melodi notaları,
// hitHazard() sesleri) bu kısıtlamadan muaftır.
function beep(freq,dur,type,vol,keepFull){
  if(!cfg.sound) return;
  dur=dur||0.09; type=type||'sine'; vol=vol||0.14;
  if(!keepFull && typeof state!=='undefined' && state==='play' && typeof combo!=='undefined' && combo>4) vol*=0.3;
  try{
    if(!AC) AC=new (window.AudioContext||window.webkitAudioContext)();
    if(AC.state!=='running') acResume();
    const o=AC.createOscillator(), g=AC.createGain();
    o.type=type; o.frequency.value=freq; o.connect(g); g.connect(AC.destination);
    const t=AC.currentTime;
    g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol,t+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    o.start(t); o.stop(t+dur);
  }catch(e){}
}
// iOS: telefon görüşmesi, Siri ya da arka plana geçiş ses bağlamını
// "interrupted"/"suspended" bırakır ve kendiliğinden dönmez — her dokunuşta
// (kullanıcı hareketi, iOS'un şart koştuğu an) yeniden başlatılır.
function resumeAudio(){ try{ if(AC && AC.state!=='running') acResume(); }catch(e){} }
document.addEventListener('pointerdown', resumeAudio, true);
document.addEventListener('touchend', resumeAudio, true);
function vibrate(pattern){ try{ if(navigator.vibrate) navigator.vibrate(pattern); }catch(e){} }

// Kombo ilerledikçe çalan üretimsel melodi: La minör pentatonik (A-C-D-E-G),
// hangi sırayla toplanırsa toplansın hep uyumlu kalır. Her 5 notada (bir
// "oktav") bir üst kayda geçilir — combo ne kadar uzun sürerse melodi o kadar
// yükselir, bu da oyuncuya skorun ötesinde kovalanacak somut bir his verir.
const MELODY_SCALE = [220.00, 261.63, 293.66, 329.63, 392.00];
function melodyFreq(i){
  const oct = Math.floor(Math.max(0,i) / MELODY_SCALE.length);
  return MELODY_SCALE[((i%MELODY_SCALE.length)+MELODY_SCALE.length)%MELODY_SCALE.length] * Math.pow(2, Math.min(oct,3));
}
function playMelodyNote(comboVal, vol){
  beep(melodyFreq(comboVal-1), 0.10, 'sine', vol||0.14, true);
}

let toastQueue=[], toastShowing=false, toastCurrent=null;
// Spam koruması aynı metnin tekrarına uygulanır (bir butona art arda basınca
// aynı hata tekrar tekrar kuyruğa girmez). Farklı mesajlar (görev, birden
// fazla başarım, rakip) sırayla gösterilir; eskiden kuyruk 1 ile sınırlı
// olduğu için oyun sonunda kazanılan başarımlar sessizce kayboluyordu.
const TOAST_QUEUE_MAX = 5;
function queueToast(text){
  if(text===toastCurrent || toastQueue.includes(text)) return;
  if(toastQueue.length >= TOAST_QUEUE_MAX) return;
  toastQueue.push(text); pumpToast();
}
function pumpToast(){
  if(toastShowing || !toastQueue.length) return;
  toastShowing=true;
  const el=document.getElementById('toast');
  toastCurrent=toastQueue.shift(); el.innerHTML=toastCurrent; el.classList.add('show');
  setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=>{ toastShowing=false; toastCurrent=null; pumpToast(); },300); },2400);
}
