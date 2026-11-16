// Joystick (2.83): eski "sola dokun içe / sağa dokun dışa" kontrolünün yerine.
//
// Ekranın altında yarı saydam bir taban durur. Parmak ekranın herhangi bir
// yerine basınca taban oraya atlar (kayan joystick), topuz parmağı izler,
// bırakınca taban alt ortaya döner. Pena halkalar arasında yine AYRIK (0/1/2)
// geçer: joystick yalnız hedef halkayı değiştirir; kilit, tehdit yönetmeni,
// düello, öğretici olduğu gibi çalışır.
//
// Yön EKRANDA hesaplanır: her karede penanın plak merkezine göre ekrandaki
// "dışa doğru" birim vektörü bulunur (3D'de kameranın eğik bakışı dahil) ve
// joystick vektörü onun üzerine izdüşürülür. Böylece pena plağın neresinde
// olursa olsun "ittiğin yöne" gider: alttayken aşağı = dış, yukarı = iç;
// sağdayken sağ = dış, sol = iç. Teğet bileşen (penanın yörüngesi boyunca)
// yok sayılır.
//
// Klavye: oklar / WASD ekran yönü verir, aynı hesaptan geçer.
const JOY_MAX = 56;          // topuzun merkezden en fazla gidebildiği yol (px)
const JOY_DEAD = 14;         // ölü bölge (px)
const JOY_FIRE = 0.55;       // halka değişimi için gereken izdüşüm (JOY_MAX oranı)
const JOY_REARM = 0.35;      // yeni adım için bu oranın altına dönmek yeter
const JOY_REPEAT_MS = 320;   // basılı tutunca bir sonraki adım (kısa bir itiş iki halka atlamasın)
const JOY_TANGENT = false;   // v2: teğet bileşenle hız oynatma (şimdilik kapalı)

const _joy = {active:false, id:null, ox:0, oy:0, vx:0, vy:0, tx:0, ty:0,
  keys:{}, armed:true, lastDir:0, lastStep:0, lastOk:false, el:null, knob:null, rejT:null};

function _joyEls(){
  if(!_joy.el){ _joy.el = document.getElementById('joy'); _joy.knob = _joy.el && _joy.el.querySelector('.joyKnob'); }
  return _joy.el;
}
function _joyPlace(){
  const el = _joyEls(); if(!el) return;
  el.style.transform = (_joy.tx||_joy.ty) ? `translate3d(${_joy.tx}px,${_joy.ty}px,0)` : '';
}
function _joyKnob(){
  if(!_joyEls() || !_joy.knob) return;
  const v = joyVec();
  _joy.knob.style.transform = (v[0]||v[1]) ? `translate3d(${v[0].toFixed(1)}px,${v[1].toFixed(1)}px,0)` : '';
}

// Topuzun o anki vektörü (px, uzunluğu en fazla JOY_MAX): parmak ya da klavye.
function joyVec(){
  if(_joy.active){
    let x=_joy.vx, y=_joy.vy; const l=Math.hypot(x,y);
    if(l>JOY_MAX){ x*=JOY_MAX/l; y*=JOY_MAX/l; }
    return [x,y];
  }
  const k=_joy.keys;
  let x=(k.r?1:0)-(k.l?1:0), y=(k.d?1:0)-(k.u?1:0);
  if(!x && !y) return [0,0];
  const l=Math.hypot(x,y); return [x/l*JOY_MAX, y/l*JOY_MAX];
}

function joyBegin(e){
  if(_joy.active || state!=='play') return;
  const el = _joyEls(); if(!el) return;
  _joy.active = true; _joy.id = e.pointerId; _joy.vx = 0; _joy.vy = 0;
  // Ev konumu: taban şu an kaydırılmışsa (dönüş animasyonu sürerken) onu düş.
  el.classList.remove('home');
  const r = el.getBoundingClientRect();
  const hx = r.left + r.width/2 - _joy.tx, hy = r.top + r.height/2 - _joy.ty;
  _joy.ox = e.clientX; _joy.oy = e.clientY;
  _joy.tx = _joy.ox - hx; _joy.ty = _joy.oy - hy;
  el.style.setProperty('--joy-col', typeof playerColor==='function' ? playerColor() : '#2fe6c4');
  el.classList.add('on');
  _joyPlace(); _joyKnob();
}
function joyMove(e){
  if(!_joy.active || e.pointerId!==_joy.id) return;
  _joy.vx = e.clientX - _joy.ox; _joy.vy = e.clientY - _joy.oy;
  _joyKnob();
}
function joyEnd(e){
  if(e && _joy.active && e.pointerId!==_joy.id) return;
  if(!_joy.active && !_joy.tx && !_joy.ty) return;
  _joy.active = false; _joy.id = null; _joy.vx = 0; _joy.vy = 0;
  _joy.armed = true; _joy.lastDir = 0;
  _joy.tx = 0; _joy.ty = 0;
  const el = _joyEls(); if(el){ el.classList.remove('on'); el.classList.add('home'); }
  _joyPlace(); _joyKnob();
}
// Klavye: code -> yön. down=false bırakma.
const _JOY_KEYS = {ArrowUp:'u', KeyW:'u', ArrowDown:'d', KeyS:'d', ArrowLeft:'l', KeyA:'l', ArrowRight:'r', KeyD:'r'};
function joyKey(code, down){
  const k = _JOY_KEYS[code]; if(!k) return false;
  if(!!_joy.keys[k] === down) return true;
  _joy.keys[k] = down;
  if(!down && !Object.values(_joy.keys).some(Boolean)){ _joy.armed = true; _joy.lastDir = 0; }
  _joyKnob();
  return true;
}
function joyReset(){
  _joy.keys = {};
  joyEnd();
}
// Kilitli halkaya itince topuz kısa süre kırmızı titrer (bkz. engine.js moveRing).
function joyReject(){
  const el=_joyEls(); if(!el) return;
  el.classList.remove('rej'); void el.offsetWidth; el.classList.add('rej');
  clearTimeout(_joy.rejT); _joy.rejT = setTimeout(()=>el.classList.remove('rej'), 260);
}

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

// Her oyun karesinde (engine.js update) çağrılır.
function updateJoystick(dt, settled){
  _joyArrow();
  const v = joyVec(), mag = Math.hypot(v[0], v[1]);
  if(mag < JOY_DEAD){ _joy.armed = true; _joy.lastDir = 0; return; }
  if(tutorialActive && typeof tutorialTapAllowed==='function' && !tutorialTapAllowed()) return;
  const o = joyOutward(); if(!o) return;
  const d = v[0]*o[0] + v[1]*o[1];
  if(Math.abs(d) < JOY_REARM*JOY_MAX) _joy.armed = true;
  const dir = d > JOY_FIRE*JOY_MAX ? 1 : d < -JOY_FIRE*JOY_MAX ? -1 : 0;
  if(!dir) return;
  if(dir !== _joy.lastDir) _joy.armed = true;
  const now = performance.now();
  const repeat = !_joy.armed && _joy.lastOk && settled && dir===_joy.lastDir && now-_joy.lastStep >= JOY_REPEAT_MS;
  if(_joy.armed || repeat){
    _joy.lastOk = moveRing(dir);
    if(_joy.lastOk) _joy.lastStep = now;
    _joy.armed = false; _joy.lastDir = dir;
  }
}
document.addEventListener('visibilitychange', ()=>{ if(document.hidden) joyReset(); });

// ---- İpucu katmanı: tabanın çevresinde nabız halkası, ok, etiket ----
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
