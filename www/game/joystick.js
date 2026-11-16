// Joystick (2.83): eski "sola dokun içe / sağa dokun dışa" kontrolünün yerine
// (eski kontrol Ayarlar > Sol/Sağ Dokunma ile hâlâ seçilebilir, bkz. input.js).
//
// Ekranın altında SABİT bir joystick. Yalnız ona (ve çevresine) basınca çalışır.
// Kol gibi: dokunduğun anda penanın plak üstündeki konumuna göre ekranda
// "dışa doğru" yön bir kez belirlenir ve parmak kalkana kadar sabit kalır
// (pena dönerken basılı tutmanın anlamı değişmesin). Topuzun o eksendeki
// itişi penanın halkasını DOĞRUDAN belirler: az it = bir halka, sonuna kadar
// it = iki halka, geri çek = başladığı halkaya döner. Bırakınca pena olduğu
// halkada kalır. Halkalar ayrık kalır; kilit, tehdit yönetmeni, düello aynı.
//
// Klavye: oklar / WASD ekran yönü; her basış bir halka.
const JOY_MAX = 56;          // topuzun merkezden en fazla gidebildiği yol (px)
const JOY_DEAD = 10;         // ölü bölge (px)
// Kol kademeleri (JOY_MAX oranı); iniş eşikleri biraz düşük (titremesin).
const JOY_L1_UP = 0.40, JOY_L1_DN = 0.30, JOY_L2_UP = 0.85, JOY_L2_DN = 0.74;
const JOY_HIT = 1.6;         // tabanın yarıçapının bu katı içinde dokunuş joystick'i tutar

const _joy = {active:false, id:null, cx:0, cy:0, vx:0, vy:0, base:0, axis:null, level:0,
  keys:{}, el:null, knob:null, rejT:null};

function _joyEls(){
  if(!_joy.el){ _joy.el = document.getElementById('joy'); _joy.knob = _joy.el && _joy.el.querySelector('.joyKnob'); }
  return _joy.el;
}
function _joyKnob(){
  if(!_joyEls() || !_joy.knob) return;
  const v = joyVec();
  _joy.knob.style.transform = (v[0]||v[1]) ? `translate3d(${v[0].toFixed(1)}px,${v[1].toFixed(1)}px,0)` : '';
}
// Topuzun o anki vektörü (px, uzunluğu en fazla JOY_MAX).
function joyVec(){
  if(!_joy.active) return [0,0];
  let x=_joy.vx, y=_joy.vy; const l=Math.hypot(x,y);
  if(l>JOY_MAX){ x*=JOY_MAX/l; y*=JOY_MAX/l; }
  return [x,y];
}
// Dokunuş joystick'e mi? Öyleyse tutar ve true döner.
function joyBegin(e){
  if(_joy.active || state!=='play') return false;
  const el = _joyEls(); if(!el || el.offsetParent===null) return false;
  const r = el.getBoundingClientRect(), cx = r.left + r.width/2, cy = r.top + r.height/2;
  if(Math.hypot(e.clientX-cx, e.clientY-cy) > (r.width/2)*JOY_HIT) return false;
  _joy.active = true; _joy.id = e.pointerId; _joy.cx = cx; _joy.cy = cy;
  _joy.vx = e.clientX-cx; _joy.vy = e.clientY-cy;
  _joy.base = player.targetRing; _joy.axis = joyOutward(); _joy.level = 0; _joy.blocked = null;
  el.style.setProperty('--joy-col', typeof playerColor==='function' ? playerColor() : '#2fe6c4');
  el.classList.add('on');
  _joyKnob();
  return true;
}
function joyMove(e){
  if(!_joy.active || e.pointerId!==_joy.id) return;
  _joy.vx = e.clientX - _joy.cx; _joy.vy = e.clientY - _joy.cy;
  _joyKnob();
}
function joyEnd(e){
  if(e && _joy.active && e.pointerId!==_joy.id) return;
  if(!_joy.active) return;
  _joy.active = false; _joy.id = null; _joy.vx = 0; _joy.vy = 0; _joy.axis = null; _joy.level = 0;
  const el = _joyEls(); if(el) el.classList.remove('on');
  _joyKnob();
}
// Klavye (joystick modu): oklar / WASD ekran yönü, her basış bir halka.
const _JOY_KEYS = {ArrowUp:[0,-1], KeyW:[0,-1], ArrowDown:[0,1], KeyS:[0,1], ArrowLeft:[-1,0], KeyA:[-1,0], ArrowRight:[1,0], KeyD:[1,0]};
function joyKey(code, down){
  const k = _JOY_KEYS[code]; if(!k) return false;
  if(!down) return true;
  const o = joyOutward(); if(!o) return true;
  const d = k[0]*o[0] + k[1]*o[1];
  if(Math.abs(d) >= 0.35) moveRing(d>0 ? 1 : -1);
  return true;
}
function joyReset(){ joyEnd(); }
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
  if(!_joy.active) return;
  if(!_joy.axis){ _joy.axis = joyOutward(); if(!_joy.axis) return; }
  if(tutorialActive && typeof tutorialTapAllowed==='function' && !tutorialTapAllowed()){ _joy.base = player.targetRing; return; }
  const v = joyVec(), mag = Math.hypot(v[0], v[1]);
  let s = mag < JOY_DEAD ? 0 : (v[0]*_joy.axis[0] + v[1]*_joy.axis[1]) / JOY_MAX;
  // Geri Sar: kolun anlamı ters.
  if(session && session.risk && session.risk.type==='riskRewind') s = -s;
  const a = Math.abs(s), cur = Math.abs(_joy.level);
  let lv = cur;
  if(cur===0){ if(a>=JOY_L2_UP) lv=2; else if(a>=JOY_L1_UP) lv=1; }
  else if(cur===1){ if(a>=JOY_L2_UP) lv=2; else if(a<JOY_L1_DN) lv=0; }
  else { if(a<JOY_L1_DN) lv=0; else if(a<JOY_L2_DN) lv=1; }
  let level = lv * (s<0 ? -1 : 1);
  if(lv && Math.sign(_joy.level) && Math.sign(_joy.level)!==Math.sign(s) && a<JOY_L1_UP) level = 0;   // karşı yöne geçerken önce nötr
  _joy.level = level;
  const want = Math.max(0, Math.min(NUM_RINGS-1, _joy.base + level));
  // Kilitli halkaya istek: bir kez reddedilir (bip), aynı istek tekrarlanmaz.
  if(want===_joy.blocked) return;
  _joy.blocked = null;
  for(let i=0; i<NUM_RINGS && player.targetRing!==want; i++){
    if(!moveRing(want>player.targetRing ? 1 : -1, true)){ _joy.blocked = want; break; }
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
