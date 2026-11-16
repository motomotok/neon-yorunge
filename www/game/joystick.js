// Kaydırma kontrolü (2.83.3; dosya adı 2.83.0'daki joystick'ten kaldı).
// Eski "sola dokun içe / sağa dokun dışa" kontrolü Ayarlar > Sol/Sağ Dokunma
// ile hâlâ seçilebilir (bkz. input.js).
//
// Oyuncu ekranın HERHANGİ bir yerinde (butonlar hariç) parmağını kaydırır;
// pena kaydırılan EKRAN yönüne bir halka gider. Yön, kaydırma anında penanın
// plak üstündeki konumuna göre hesaplanır (ortaya doğru = iç, dışarı = dış;
// 3D'de kameranın eğik bakışı dahil). Bir kaydırma = bir halka: aynı yöne
// devam etmek ikinci halkayı açmaz, aynı dokunuşta geri kaydırmak geri getirir.
// Halka değişimi parmak hareketinin olduğu anda (pointermove) yapılır, kare beklemez.
//
// Klavye: oklar / WASD ekran yönü; her basış bir halka.
const SWIPE_MIN_FR = 0.045;  // halka değişimi için gereken kaydırma (kısa kenarın oranı, ~18 px)
const SWIPE_AXIS = 0.2;      // kaydırmanın iç/dış eksenindeki en az payı (tam yörünge boyunca olanı yok say)

const _joy = {active:false, id:null, ox:0, oy:0, lastDir:0, el:null, rejT:null};

function _joyEls(){
  if(!_joy.el) _joy.el = document.getElementById('joy');
  return _joy.el;
}
function _swipeMin(){ return Math.max(14, Math.min(window.innerWidth, window.innerHeight)*SWIPE_MIN_FR); }
// Oyunda bir dokunuş başladı (butonlar input.js'de ayıklanır).
function joyBegin(e){
  if(_joy.active || state!=='play') return false;
  _joy.active = true; _joy.id = e.pointerId; _joy.ox = e.clientX; _joy.oy = e.clientY; _joy.lastDir = 0;
  return true;
}
function joyMove(e){
  if(!_joy.active || e.pointerId!==_joy.id || state!=='play') return;
  const dx = e.clientX-_joy.ox, dy = e.clientY-_joy.oy, len = Math.hypot(dx,dy);
  if(len < _swipeMin()) return;
  const reorigin = ()=>{ _joy.ox = e.clientX; _joy.oy = e.clientY; };
  // Öğretici metni yazılırken halka değişmez; o sırada yapılan kaydırma birikmez.
  if(tutorialActive && typeof tutorialTapAllowed==='function' && !tutorialTapAllowed()){ reorigin(); return; }
  const o = joyOutward(); if(!o){ reorigin(); return; }
  const d = (dx*o[0] + dy*o[1]) / len;
  if(Math.abs(d) < SWIPE_AXIS){ reorigin(); return; }
  const dir = d>0 ? 1 : -1;
  reorigin();
  if(dir === _joy.lastDir) return;     // aynı yöne devam: tek halka
  _joy.lastDir = dir;
  moveRing(dir);                       // Geri Sar tersliğini moveRing uygular
}
function joyEnd(e){
  if(e && _joy.active && e.pointerId!==_joy.id) return;
  _joy.active = false; _joy.id = null; _joy.lastDir = 0;
}
// Klavye: oklar / WASD ekran yönü, her basış bir halka.
const _JOY_KEYS = {ArrowUp:[0,-1], KeyW:[0,-1], ArrowDown:[0,1], KeyS:[0,1], ArrowLeft:[-1,0], KeyA:[-1,0], ArrowRight:[1,0], KeyD:[1,0]};
function joyKey(code, down){
  const k = _JOY_KEYS[code]; if(!k) return false;
  if(!down) return true;
  const o = joyOutward(); if(!o) return true;
  const d = k[0]*o[0] + k[1]*o[1];
  if(Math.abs(d) >= SWIPE_AXIS) moveRing(d>0 ? 1 : -1);
  return true;
}
function joyReset(){ joyEnd(); }
// Kilitli halkaya kaydırınca kısa titreşim zaten moveRing'de (sarsıntı + bip).
function joyReject(){}

// Penanın plak merkezine göre ekrandaki dışa doğru birim vektörü.
function joyOutward(){
  let p=null, c=null;
  if(typeof gfx3dActive==='function' && gfx3dActive() && window.Render3D && Render3D.discScreen){
    p = Render3D.playerScreen(0); c = Render3D.discScreen();
  }
  if(!p || !c){
    p = {x:CX+Math.cos(player.ang)*player.curRadius, y:CY+Math.sin(player.ang)*player.curRadius};
    c = {x:CX, y:CY};
  }
  const dx=p.x-c.x, dy=p.y-c.y, l=Math.hypot(dx,dy);
  return l<1 ? null : [dx/l, dy/l];
}
// Öğretici okunun yönü için: +1 dışa, -1 içe -> ekran birim vektörü.
function joyDirScreen(dir){
  const o = joyOutward(); return o ? [o[0]*dir, o[1]*dir] : null;
}

// Her oyun karesinde (engine.js update) çağrılır: yalnız öğretici okunu döndürür.
function updateJoystick(dt, settled){ _joyArrow(); }
document.addEventListener('visibilitychange', ()=>{ if(document.hidden) joyReset(); });

// ---- İpucu katmanı (alt ortada): nabız halkası, penanın gideceği yönü gösteren ok, etiket ----
// opts: {pulse:bool, dir:+1|-1|0 (ok: dışa/içe, pena döndükçe yönü güncellenir),
//        label:'metin', rev:bool (Geri Sar: mor)}
let _joyHint = null, _joyHintT = null;
function joyHint(opts, ms){
  const el=_joyEls(); if(!el) return;
  _joyHint = opts || null;
  clearTimeout(_joyHintT); _joyHintT = null;
  el.classList.toggle('hintOn', !!_joyHint);
  el.classList.toggle('pulse', !!(_joyHint && _joyHint.pulse));
  el.classList.toggle('rev', !!(_joyHint && _joyHint.rev));
  el.classList.toggle('arrow', !!(_joyHint && _joyHint.dir));
  const lb = el.querySelector('.joyLbl');
  if(lb) lb.textContent = (_joyHint && _joyHint.label) || '';
  _joyArrow();
  if(_joyHint && ms) _joyHintT = setTimeout(()=>joyHint(null), ms);
}
function joyHintOff(){ joyHint(null); }
function _joyArrow(){
  if(!_joyHint || !_joyHint.dir) return;
  const el=_joyEls(), ar = el && el.querySelector('.joyArrow'); if(!ar || typeof player==='undefined' || !player) return;
  const v = joyDirScreen(_joyHint.dir); if(!v) return;
  ar.style.transform = `rotate(${(Math.atan2(v[1], v[0])*180/Math.PI).toFixed(1)}deg)`;
}
