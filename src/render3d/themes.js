// Tema sahneleri: her tema (data.js THEMES) 3D'de kendi ortamını kurar —
// plak etiketi, plak/kenar rengi, kol rengi, arka plan ve temaya özel
// efektler. Referans: kullanıcının verdiği 4 konsept görseli.
//   neon            → Retro Beats      (ücretsiz, varsayılan)
//   synthbeats      → Synth Beats      (neon çizgiler, ekolayzer halkası)
//   urbansounds     → Urban Sounds     (altın zincir halkalar, neon şehir)
//   cosmicsoundwave → Cosmic Soundwave (galaksi sarmalı, gezegenler)
//   hellsanthem, lofichillhop, crystalrune, steamfunk, candydrip,
//   cybercircuit → sonradan eklenen Gemini konseptleri (aşağıda)
// Tüm ölçüler "base" biriminde (bkz. world.js), sahne world.root altına eklenir.
import * as THREE from 'three';
import { glowTexture } from './textures.js';
import { loadTexture } from './assets.js';

const DISC_R = 0.44, TOP_Y = 0.012, RING_K = [0.19, 0.285, 0.38];
const ADD = THREE.AdditiveBlending;

function canvas(w, h){ const c = document.createElement('canvas'); c.width = w; c.height = h || w; return c; }
function tex(c, wrap){
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if(wrap){ t.wrapS = THREE.RepeatWrapping; }
  return t;
}

// Halka şeklinde düz şerit: u = çevre boyunca (uRepeat kez tekrar), v = enine.
// RingGeometry'nin UV'leri düzlemsel olduğu için zincir gibi tekrar eden
// desenler bununla çizilir.
function ringStrip(r, w, segs, uRepeat, y){
  const pos = [], uv = [], idx = [];
  for(let i=0;i<=segs;i++){
    const a = i/segs*Math.PI*2, c = Math.cos(a), s = Math.sin(a), u = i/segs*uRepeat;
    pos.push(c*(r-w/2), y, s*(r-w/2), c*(r+w/2), y, s*(r+w/2));
    uv.push(u, 0, u, 1);
    if(i<segs){ const k = i*2; idx.push(k, k+2, k+1, k+1, k+2, k+3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}
function glowRim(color, r, w, opacity){
  const m = new THREE.Mesh(ringStrip(r, w, 160, 1, TOP_Y+0.002),
    new THREE.MeshBasicMaterial({color, transparent:true, opacity, depthWrite:false, blending:ADD, side:THREE.DoubleSide}));
  return m;
}


// ---------------- Ortam süsleri: ortak yardımcılar ----------------
// Plağın dışındaki boş alanlara konan küçük, sakin süsler. Hepsi:
//  * oyun alanının (plak) ve kolun DIŞINDA, HUD'un altında durur,
//  * kameraya dönük "ekran düzlemi" çerçevesinde çizilir (yerel X = ekran
//    sağı, Y = ekran yukarısı),
//  * plaktan daha aşağıda (derinlikte) durduğu için plak/kol onları örter —
//    oyun öğelerinin önüne asla geçmez.
// Ekran konumları NDC'dir (-1..1); dikey ve yatay ekranda farklı boşluklar
// kullanılır.
function slots(view){
  if(view.aspect < 0.9) return {bl:[-0.5,-0.74], br:[0.52,-0.78], ul:[-0.6,0.52], ur:[0.6,0.52], bc:[0,-0.86], sky:0.58};
  return {bl:[-0.8,-0.5], br:[0.86,-0.45], ul:[-0.8,0.42], ur:[0.82,0.38], bc:[0,-0.9], sky:0.55};
}
// Nesneyi ekran konumuna (nx,ny) karşılık gelen yere koyar ve kameraya
// döndürür. Plağa ya da kola fazla yakınsa gizler (kare ekranlarda yer yok).
function placeAt(o, view, nx, ny, y, clear){
  const p = view.ground(nx, ny, y);
  const r = DISC_R + (clear||0.06);
  const nearArm = p && Math.hypot(p.x-0.36, p.z+0.42) < 0.1 + (clear||0.06);
  o.visible = !!p && Math.hypot(p.x, p.z) > r && !nearArm;
  if(p) o.position.set(p.x, y, p.z);
  // Tam kameraya dön (ekranın altındaki nesneye kamera neredeyse tepeden bakar).
  if(view.camPos){ o.up.copy(view.camUp); o.lookAt(view.camPos); } else o.rotation.set(-view.tilt, 0, 0);
  return o.visible;
}
function basicMat(o){ return new THREE.MeshBasicMaterial(Object.assign({transparent:true, depthWrite:false, side:THREE.DoubleSide}, o)); }
// Yumuşak nokta dokusu (temaya ait; paylaşılan glowTexture tema
// temizlenirken silinmesin diye ayrı üretilir).
function softDot(){
  const c = canvas(64), g = c.getContext('2d'), gr = g.createRadialGradient(32,32,0,32,32,32);
  gr.addColorStop(0,'rgba(255,255,255,1)'); gr.addColorStop(0.35,'rgba(255,255,255,.45)'); gr.addColorStop(1,'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0,0,64,64);
  return tex(c);
}
// Işık izi: u=0 kuyruk (saydam) -> u=1 baş (parlak), enine yumuşak.
function streakTexture(){
  const c = canvas(256, 16), g = c.getContext('2d');
  const gr = g.createLinearGradient(0,0,256,0);
  gr.addColorStop(0,'rgba(255,255,255,0)'); gr.addColorStop(0.8,'rgba(255,255,255,.55)'); gr.addColorStop(1,'rgba(255,255,255,1)');
  g.fillStyle = gr; g.fillRect(0,0,256,16);
  g.globalCompositeOperation = 'destination-in';
  const v = g.createLinearGradient(0,0,0,16);
  v.addColorStop(0,'rgba(0,0,0,0)'); v.addColorStop(0.5,'rgba(0,0,0,1)'); v.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle = v; g.fillRect(0,0,256,16);
  return tex(c);
}
// Başı orijinde, kuyruğu -X yönünde uzanan iz şeridi (scale.x = uzunluk).
function streakMesh(map, color){
  const g = new THREE.PlaneGeometry(1, 1); g.translate(-0.5, 0, 0);
  return new THREE.Mesh(g, basicMat({map, color, blending:ADD, opacity:0}));
}
const rnd = (a, b)=>a + Math.random()*(b-a);
// ~96 BPM vuruş zarfı (Synth ekolayzeri ile aynı tempo).
const beatAt = t=>Math.pow(Math.max(0, Math.sin(t*Math.PI*2*1.6)), 6);

// ---------------- Retro Beats ----------------
// Sıcak, kenarları kararan koyu arka plan (Retro Beats konsepti).
function vignetteTexture(inner, outer){
  const S = 512, c = canvas(S), g = c.getContext('2d');
  const gr = g.createRadialGradient(S*0.55, S*0.35, 0, S/2, S/2, S*0.75);
  gr.addColorStop(0, inner); gr.addColorStop(1, outer);
  g.fillStyle = gr; g.fillRect(0,0,S,S);
  return tex(c);
}
// Analog VU metre yüzü: sıcak arkadan aydınlatmalı krem kadran, ölçek, kırmızı bölge.
function vuTexture(){
  const W = 320, H = 200, c = canvas(W, H), g = c.getContext('2d');
  const rr = (x,y,w,h,r)=>{ g.beginPath(); g.moveTo(x+r,y); g.arcTo(x+w,y,x+w,y+h,r); g.arcTo(x+w,y+h,x,y+h,r); g.arcTo(x,y+h,x,y,r); g.arcTo(x,y,x+w,y,r); g.closePath(); };
  // Ceviz çerçeve
  const wood = g.createLinearGradient(0,0,0,H);
  wood.addColorStop(0,'#5a3220'); wood.addColorStop(1,'#2a160d');
  g.fillStyle = wood; rr(0,0,W,H,18); g.fill();
  // Kadran: ortası sıcak, kenarları kararan (lamba arkadan yakıyor)
  const face = g.createRadialGradient(W/2,H*0.85,10,W/2,H*0.7,W*0.6);
  face.addColorStop(0,'#ffe6b0'); face.addColorStop(0.6,'#f0c47c'); face.addColorStop(1,'#a8743c');
  g.fillStyle = face; rr(14,14,W-28,H-28,10); g.fill();
  const cx = W/2, cy = H*0.92, R = 128, a0 = -Math.PI/2-0.82, a1 = -Math.PI/2+0.82, aRed = a0 + (a1-a0)*0.7;
  g.lineCap = 'round';
  g.strokeStyle = '#2a1a10'; g.lineWidth = 3; g.beginPath(); g.arc(cx,cy,R,a0,aRed); g.stroke();
  g.strokeStyle = '#c0281c'; g.lineWidth = 7; g.beginPath(); g.arc(cx,cy,R+2,aRed,a1); g.stroke();
  const ticks = [0,0.18,0.33,0.45,0.56,0.7,0.8,0.9,1];
  for(const k of ticks){
    const a = a0 + (a1-a0)*k, red = k>0.7;
    g.strokeStyle = red ? '#c0281c' : '#2a1a10'; g.lineWidth = 3;
    g.beginPath(); g.moveTo(cx+Math.cos(a)*(R+4), cy+Math.sin(a)*(R+4)); g.lineTo(cx+Math.cos(a)*(R+16), cy+Math.sin(a)*(R+16)); g.stroke();
  }
  g.fillStyle = '#2a1a10'; g.font = 'bold 30px Georgia, serif'; g.textAlign = 'center';
  g.fillText('VU', cx, cy-46);
  g.font = '15px Georgia, serif'; g.fillStyle = '#5a3a22';
  g.fillText('-20', cx+Math.cos(a0)*(R-14), cy+Math.sin(a0)*(R-14)+6);
  g.fillStyle = '#c0281c'; g.fillText('+3', cx+Math.cos(a1)*(R-14), cy+Math.sin(a1)*(R-14)+6);
  // Cam yansıması
  const gl = g.createLinearGradient(0,14,0,H*0.5);
  gl.addColorStop(0,'rgba(255,255,255,.22)'); gl.addColorStop(1,'rgba(255,255,255,0)');
  g.fillStyle = gl; rr(14,14,W-28,H*0.42,10); g.fill();
  return {tex:tex(c), pivot:[cx/W, cy/H], len:(R+6)/W, a:0.82};
}
// Pencereden süzülen ışık huzmesi: enine yumuşak, uca doğru sönen.
function beamTexture(){
  const c = canvas(64, 256), g = c.getContext('2d');
  const h = g.createLinearGradient(0,0,64,0);
  h.addColorStop(0,'rgba(255,255,255,0)'); h.addColorStop(0.5,'rgba(255,255,255,1)'); h.addColorStop(1,'rgba(255,255,255,0)');
  g.fillStyle = h; g.fillRect(0,0,64,256);
  g.globalCompositeOperation = 'destination-in';
  const v = g.createLinearGradient(0,0,0,256);
  v.addColorStop(0,'rgba(0,0,0,1)'); v.addColorStop(0.7,'rgba(0,0,0,.45)'); v.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle = v; g.fillRect(0,0,64,256);
  return tex(c);
}
function buildRetro(){
  const group = new THREE.Group();
  // Plak kenarında bakır-turuncu parlayan çember (konseptteki sıcak kenar ışığı).
  const rim = glowRim('#ff8a3d', DISC_R*1.008, 0.0035, 0.55);
  const rimHalo = glowRim('#ff6a2a', DISC_R*1.008, 0.018, 0.1);
  group.add(rim, rimHalo);

  // --- Odanın havası: sol üstten süzülen sıcak ışık huzmesi ve içinde
  // yavaşça uçuşan toz zerreleri. Zerreler yalnızca huzmeden geçerken
  // parlıyor (gerçek bir odadaki gibi); huzme dışında neredeyse görünmez.
  const air = new THREE.Group();          // plağın altında yatay katman
  group.add(air);
  const beamTex = beamTexture();
  const beam = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 3.4), basicMat({map:beamTex, color:'#ffb36b', blending:ADD, opacity:0.05}));
  air.add(beam);
  const BX = -1.25, BY = 1.55, BA = -0.5;                 // huzmenin çıkış noktası ve eğimi
  const bdx = Math.sin(-BA), bdy = -Math.cos(-BA);        // huzme yönü (aşağı-sağ)
  beam.position.set(BX + bdx*1.7, BY + bdy*1.7, 0); beam.rotation.z = BA;
  const MOTES = 34, dotTex = softDot();
  const motes = new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1), basicMat({map:dotTex, blending:ADD, opacity:1}), MOTES);
  motes.frustumCulled = false; air.add(motes);
  const mo = Array.from({length:MOTES}, ()=>({x:rnd(-1.3,1.3), y:rnd(-1.6,1.6), s:rnd(0.006,0.013), ph:rnd(0,9), sp:rnd(0.5,1.2)}));
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3(), C = new THREE.Color(), warm = new THREE.Color('#ffc58a');

  // --- Analog VU metre: pikabın yanındaki eski amfiden. İbresi müziğe göre
  // oynar; nota toplayınca gerçek bir VU gibi zıplar, yavaşça geri düşer.
  // Çok sert vuruşta kırmızı "peak" lambası yanar.
  const vu = new THREE.Group(); group.add(vu);
  const vt = vuTexture(), VW = 0.12, VH = VW*200/320;
  vu.add(new THREE.Mesh(new THREE.PlaneGeometry(VW, VH), basicMat({map:vt.tex, color:'#a8927c'})));
  const nLen = vt.len*VW;
  const ng = new THREE.PlaneGeometry(0.0016, nLen); ng.translate(0, nLen/2, 0);
  const needle = new THREE.Mesh(ng, basicMat({color:'#1a0f08', opacity:0.92}));
  needle.position.set((vt.pivot[0]-0.5)*VW, (0.5-vt.pivot[1])*VH, 0.0008); vu.add(needle);
  const cap = new THREE.Mesh(new THREE.CircleGeometry(0.006, 16), basicMat({color:'#2a1a10'}));
  cap.position.copy(needle.position); cap.position.z = 0.001; vu.add(cap);
  const peak = new THREE.Mesh(new THREE.CircleGeometry(0.0042, 16), basicMat({color:'#ff3a22', opacity:0.15}));
  peak.position.set(VW*0.39, VH*0.33, 0.001); vu.add(peak);
  let level = 0.2, kick = 0, peakT = 0;

  return {
    group, label:'assets3d/themes/neon/label.jpg', background:vignetteTexture('#2b1610', '#070302'),
    vinyl:'#d9d3cf', armMetal:'#b8925a', stars:0, nebula:0, dust:0, sheen:0.1, bloom:0.4,
    // Halkalar parlak çizgi değil, plağa kazınmış soluk oluk gibi.
    ringColor:'#d9b48a', ringBaseColor:'#d9b48a', ringBase:0.13, ringFlash:'#ffc27a',
    layout(view){
      const sl = slots(view);
      air.position.set(0, -0.12, 0); air.rotation.set(-Math.PI/2, 0, 0);   // yatay: tamamen plağın altında
      placeAt(vu, view, sl.br[0], sl.br[1], 0.02, 0.1);
    },
    onNote(){ kick = Math.min(1, kick + 0.45); },
    update(dt, t, f){
      rimHalo.material.opacity = 0.08 + Math.sin(t*2)*0.03;
      beam.material.opacity = 0.065 + Math.sin(t*0.37)*0.015 + Math.sin(t*1.13)*0.006;
      for(let i=0;i<MOTES;i++){
        const m = mo[i];
        m.x += (Math.sin(t*0.21*m.sp + m.ph)*0.00035 + 0.00012)*dt;
        m.y += (Math.cos(t*0.17*m.sp + m.ph*1.3)*0.0003 - 0.00008)*dt;
        if(m.x > 1.35) m.x = -1.35; if(m.y < -1.65) m.y = 1.65;
        // Huzme eksenine uzaklık -> parlaklık
        const rx = m.x - BX, ry = m.y - BY, perp = Math.abs(rx*bdy - ry*bdx), along = rx*bdx + ry*bdy;
        const lit = Math.exp(-(perp*perp)/(0.17*0.17)) * Math.max(0, 1 - along/3.2);
        const tw = 0.75 + 0.25*Math.sin(t*2.3*m.sp + m.ph);
        P.set(m.x, m.y, 0.01); S.set(m.s, m.s, 1); M.compose(P, Q, S); motes.setMatrixAt(i, M);
        motes.setColorAt(i, C.copy(warm).multiplyScalar((0.03 + lit*1.1)*tw));
      }
      motes.instanceMatrix.needsUpdate = true; motes.instanceColor.needsUpdate = true;
      // VU: müzik zarfı + toplama vuruşları; hızlı yükselir, yavaş düşer.
      const b = beatAt(t), sway = 0.5 + 0.5*Math.sin(t*0.9)*Math.sin(t*2.7+1);
      const energy = f.inGame ? 0.32 + (f.player ? Math.min(0.2, (f.player.speed-1.5)*0.1) : 0) : 0.2;
      const target = Math.min(1.08, energy + b*0.22 + sway*0.12 + kick*0.5);
      level += (target - level) * Math.min(1, (target > level ? 0.35 : 0.06)*dt);
      kick = Math.max(0, kick - 0.03*dt);
      needle.rotation.z = vt.a - Math.min(1.04, level)*vt.a*2;
      if(level > 0.86) peakT = 1; else peakT = Math.max(0, peakT - 0.04*dt);
      peak.material.opacity = 0.15 + peakT*0.85;
    },
  };
}

// ---------------- Synth Beats ----------------
function buildSynth(world){
  const group = new THREE.Group();
  const spin = new THREE.Group();          // plakla dönen neon çizgiler
  // Etiketten dışa uzanan neon "şerit" çizgileri (konseptteki şeritler).
  const N = 12;
  for(let i=0;i<N;i++){
    const a = i/N*Math.PI*2, col = i%2 ? '#19e3ff' : '#ff2f8a';
    const len = DISC_R*0.99 - 0.14, g = new THREE.PlaneGeometry(len, 0.0035);
    g.rotateX(-Math.PI/2); g.translate(0.14 + len/2, TOP_Y+0.0015, 0);
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({color:col, transparent:true, opacity:0.16, depthWrite:false, blending:ADD}));
    m.rotation.y = a; spin.add(m);
  }
  world.recordSpin.add(spin);
  // Pembe→mor→cyan geçişli kenar halkası.
  const c = canvas(512, 4), g = c.getContext('2d');
  const gr = g.createLinearGradient(0,0,512,0);
  gr.addColorStop(0,'#ff2f8a'); gr.addColorStop(0.25,'#a64bff'); gr.addColorStop(0.5,'#19e3ff');
  gr.addColorStop(0.75,'#a64bff'); gr.addColorStop(1,'#ff2f8a');
  g.fillStyle = gr; g.fillRect(0,0,512,4);
  const rimTex = tex(c, true);
  const rim = new THREE.Mesh(ringStrip(DISC_R*1.012, 0.006, 200, 1, TOP_Y+0.002),
    new THREE.MeshBasicMaterial({map:rimTex, transparent:true, opacity:0.42, depthWrite:false, blending:ADD, side:THREE.DoubleSide}));
  const rimHalo = new THREE.Mesh(ringStrip(DISC_R*1.012, 0.04, 200, 1, TOP_Y+0.0018),
    new THREE.MeshBasicMaterial({map:rimTex, transparent:true, opacity:0.25, depthWrite:false, blending:ADD, side:THREE.DoubleSide}));
  group.add(rim, rimHalo);
  // Plağın çevresinde müziğe göre zıplayan ekolayzer çubukları.
  const BARS = 180;
  const barGeo = new THREE.PlaneGeometry(1, 1); barGeo.rotateX(-Math.PI/2); barGeo.translate(0.5, 0, 0);
  const bars = new THREE.InstancedMesh(barGeo, new THREE.MeshBasicMaterial({transparent:true, opacity:0.38, depthWrite:false, blending:ADD}), BARS);
  const cPink = new THREE.Color('#ff2f8a'), cCyan = new THREE.Color('#19e3ff'), tmpC = new THREE.Color();
  for(let i=0;i<BARS;i++){
    const u = i/BARS, k = 0.5 - 0.5*Math.cos(u*Math.PI*2);
    bars.setColorAt(i, tmpC.copy(cPink).lerp(cCyan, k));
  }
  bars.frustumCulled = false;
  group.add(bars);
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3(), Y = new THREE.Vector3(0,1,0);
  const seeds = Array.from({length:BARS}, ()=>Math.random()*10);

  // --- Synthwave zemin ızgarası: plağın altında, ufka doğru kayan neon ağ.
  // Her 4 vuruşta plaktan dışarı bir ses dalgası gibi parlak halka yayılır.
  const gridMat = new THREE.ShaderMaterial({
    transparent:true, depthWrite:false, blending:ADD,
    uniforms:{uTime:{value:0}, uPulse:{value:-1}, uA:{value:new THREE.Color('#ff2f8a')}, uB:{value:new THREE.Color('#19e3ff')}},
    vertexShader:`varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader:`
      varying vec2 vP; uniform float uTime, uPulse; uniform vec3 uA, uB;
      void main(){
        vec2 q = (vP + vec2(0.0, uTime*0.035)) / 0.085;
        vec2 gd = abs(fract(q - 0.5) - 0.5) / fwidth(q);
        float line = 1.0 - min(min(gd.x, gd.y), 1.0);
        float r = length(vP);
        float fade = smoothstep(0.47, 0.62, r) * (1.0 - smoothstep(0.7, 1.25, r)) * smoothstep(-1.0, -0.55, vP.y);
        float pulse = uPulse > 0.0 ? exp(-pow((r - uPulse)*9.0, 2.0)) * (1.0 - smoothstep(0.9, 1.6, uPulse)) : 0.0;
        vec3 col = mix(uA, uB, clamp(0.5 - vP.y*0.45, 0.0, 1.0));
        float a = line * fade * (0.06 + pulse*0.3);
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const gridGeo = new THREE.PlaneGeometry(4, 4); gridGeo.rotateX(-Math.PI/2);
  const grid = new THREE.Mesh(gridGeo, gridMat); grid.position.y = -0.04; grid.renderOrder = -1;
  group.add(grid);

  // --- Yüzen tel kafes cisimler (synthwave ikonografisi): yavaşça döner,
  // vuruşta hafifçe parlar.
  const shapes = [];
  const mkShape = (geo, col)=>{
    const o = new THREE.Group();
    const m = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({color:col, transparent:true, opacity:0.5, depthWrite:false, blending:ADD}));
    geo.dispose(); o.add(m); group.add(o); shapes.push({o, m, ph:Math.random()*6}); return o;
  };
  const shA = mkShape(new THREE.IcosahedronGeometry(0.034, 0), '#19e3ff');
  const shB = mkShape(new THREE.ConeGeometry(0.03, 0.05, 4), '#ff4fa8');
  let pulseStart = -10;
  return {
    group, label:'assets3d/themes/synthbeats/label.jpg',
    vinyl:'#d8d8e8', armMetal:'#c9ced8', stars:0.1, nebula:0.05, dust:0, bloom:0.3, ringColor:'#5fc3d3', ringBaseColor:'#c9cbe0', ringBase:0.11, ringFlash:'#5fe8ff',
    update(dt, t, f){
      const beat = Math.pow(Math.max(0, Math.sin(t*Math.PI*2*1.6)), 6);   // ~96 BPM vuruş
      const energy = 0.6 + (f.inGame && f.player ? Math.min(1, (f.player.speed-1.5)*0.4) : 0);
      for(let i=0;i<BARS;i++){
        const a = i/BARS*Math.PI*2, s0 = seeds[i];
        const h = 0.006 + (Math.abs(Math.sin(t*3.1+s0)) * 0.017 + Math.abs(Math.sin(t*7.3+s0*2))*0.008 + beat*0.02) * energy;
        Q.setFromAxisAngle(Y, -a);
        P.set(Math.cos(a)*DISC_R*1.04, TOP_Y-0.004, Math.sin(a)*DISC_R*1.04);
        S.set(h, 1, 0.006);
        M.compose(P, Q, S); bars.setMatrixAt(i, M);
      }
      bars.instanceMatrix.needsUpdate = true;
      rimHalo.material.opacity = 0.05 + beat*0.07;
      rimTex.offset.x = (t*0.05)%1;
      gridMat.uniforms.uTime.value = t;
      // 4 vuruşta bir dalga (vuruş tepe noktası: sin=1 -> t*1.6 = k + 0.25)
      const bi = Math.floor(t*1.6 - 0.25);
      if(bi % 4 === 0 && t - pulseStart > 1) pulseStart = (bi + 0.25)/1.6;
      const pu = (t - pulseStart)*0.75;
      gridMat.uniforms.uPulse.value = pu < 1.2 ? 0.44 + pu : -1;
      for(const sh of shapes){
        sh.m.rotation.x += 0.0035*dt; sh.m.rotation.y += 0.006*dt;
        sh.m.position.y = Math.sin(t*0.8 + sh.ph)*0.006;
        sh.m.material.opacity = 0.32 + beat*0.25;
      }
    },
    layout(view){
      const sl = slots(view);
      placeAt(shA, view, sl.ul[0], sl.ul[1], 0.04, 0.06);
      placeAt(shB, view, sl.br[0], sl.br[1], 0.04, 0.06);
    },
    dispose(){
      world.recordSpin.remove(spin);
      spin.traverse(o=>{ if(o.geometry) o.geometry.dispose(); if(o.material) o.material.dispose(); });
    },
  };
}

// ---------------- Urban Sounds ----------------
// Bulanık neon şehir gecesi (Safari'de canvas filter olmadığı için
// bulanıklık radyal gradyanlarla taklit edilir).
function cityTexture(){
  const W = 1024, H = 1024, c = canvas(W, H), g = c.getContext('2d');
  const sky = g.createLinearGradient(0,0,0,H);
  sky.addColorStop(0,'#0b0618'); sky.addColorStop(0.55,'#1a0b22'); sky.addColorStop(1,'#08050c');
  g.fillStyle = sky; g.fillRect(0,0,W,H);
  // Bina siluetleri + pencere ışıkları
  let x = 0;
  while(x < W){
    const bw = 50+Math.random()*90, bh = 250+Math.random()*520, by = H-bh;
    g.fillStyle = `rgba(${10+Math.random()*12},${8+Math.random()*10},${20+Math.random()*16},0.95)`;
    g.fillRect(x, by, bw, bh);
    for(let wy=by+12; wy<H-10; wy+=16) for(let wx=x+8; wx<x+bw-8; wx+=12){
      if(Math.random()<0.22){ g.fillStyle = Math.random()<0.5 ? 'rgba(255,190,110,.22)' : 'rgba(120,200,255,.15)'; g.fillRect(wx,wy,5,7); }
    }
    x += bw + 6;
  }
  // Neon tabela/bokeh lekeleri
  const cols = ['255,47,160','255,140,60','60,220,255','170,90,255'];
  for(let i=0;i<70;i++){
    const r = 12+Math.random()*60, bx = Math.random()*W, byy = Math.random()*H*0.9;
    const gr = g.createRadialGradient(bx,byy,0,bx,byy,r), col = cols[i%cols.length], a = 0.04+Math.random()*0.09;
    gr.addColorStop(0,`rgba(${col},${a})`); gr.addColorStop(1,`rgba(${col},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(bx,byy,r,0,Math.PI*2); g.fill();
  }
  const vig = g.createRadialGradient(W/2,H/2,H*0.2,W/2,H/2,H*0.75);
  vig.addColorStop(0,'rgba(0,0,0,0.35)'); vig.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle = vig; g.fillRect(0,0,W,H);
  return tex(c);
}
// Neon tabela: kaset silueti. Gerçek neon tabelalar gibi iki kare arasında
// gidip gelir (makara kolları dönüyormuş gibi); frame = 0/1.
function neonCassetteTexture(frame){
  const W = 512, H = 330, c = canvas(W, H), g = c.getContext('2d');
  const tube = (path, col, w)=>{
    // Tüpün kendisi: geniş-soluk -> ince-parlak katmanlar.
    for(const [lw, a] of [[w*5,0.07],[w*2.6,0.16],[w*1.4,0.5]]){ g.strokeStyle = `rgba(${col},${a})`; g.lineWidth = lw; path(); g.stroke(); }
    g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = w*0.45; path(); g.stroke();
  };
  g.lineCap = 'round'; g.lineJoin = 'round';
  const rr = (x,y,w,h,r)=>()=>{ g.beginPath(); g.moveTo(x+r,y); g.arcTo(x+w,y,x+w,y+h,r); g.arcTo(x+w,y+h,x,y+h,r); g.arcTo(x,y+h,x,y,r); g.arcTo(x,y,x+w,y,r); g.closePath(); };
  const pink = '255,60,170', cyan = '80,230,255';
  tube(rr(46,40,420,250,26), pink, 7);
  tube(rr(110,92,292,104,16), pink, 5);
  tube(()=>{ g.beginPath(); g.moveTo(150,290); g.lineTo(176,236); g.lineTo(336,236); g.lineTo(362,290); }, pink, 5);
  for(const cx of [185, 327]){
    tube(()=>{ g.beginPath(); g.arc(cx,144,30,0,Math.PI*2); }, cyan, 5);
    tube(()=>{ g.beginPath(); for(let k=0;k<3;k++){ const a = frame*Math.PI/3 + k*Math.PI*2/3; g.moveTo(cx,144); g.lineTo(cx+Math.cos(a)*22, 144+Math.sin(a)*22); } }, cyan, 4);
  }
  return tex(c);
}
function buildUrban(world){
  const group = new THREE.Group();
  // Sade siyah plak + mor-pembe neon kenar (eski altın zincirler kafa
  // karıştırıyordu). Halkalar silik çizgi, notada sarı yanar.
  const rim = glowRim('#d04bff', DISC_R*1.01, 0.004, 0.6);
  const rimHalo = glowRim('#ff3fae', DISC_R*1.01, 0.022, 0.14);
  group.add(rim, rimHalo);

  // --- Neon kaset tabelası: sakin vızıltı; arada bir bozuk tüp gibi titreyip
  // söner, makara kolları iki kare arasında ritimle gidip gelir.
  const neonA = neonCassetteTexture(0), neonB = neonCassetteTexture(1);
  const NW = 0.15, sign = new THREE.Mesh(new THREE.PlaneGeometry(NW, NW*330/512), basicMat({map:neonA, blending:ADD, opacity:0.75}));
  const signG = new THREE.Group(); signG.add(sign); group.add(signG);
  let flick = null, nextFlick = 6 + Math.random()*8;

  // --- Gece trafiği: aşağıdan uzun pozlama far izleri geçer (beyaz farlar
  // bir yöne, kırmızı stoplar diğer yöne). Plağın arkasından geçer.
  const sTex = streakTexture();
  const road = new THREE.Group(); group.add(road);
  const cars = [];
  for(let i=0;i<2;i++){ const m = streakMesh(sTex, '#ffffff'); road.add(m); cars.push({m, on:false}); }
  let nextCar = 2.5;

  // --- Uzakta yanıp sönen uçak ışıkları (kırmızı + beyaz çift çakar).
  const sky = new THREE.Group(); group.add(sky);
  const dotT = softDot();
  const red = new THREE.Mesh(new THREE.PlaneGeometry(0.014, 0.014), basicMat({map:dotT, color:'#ff3b30', blending:ADD, opacity:0}));
  const wht = new THREE.Mesh(new THREE.PlaneGeometry(0.012, 0.012), basicMat({map:dotT, color:'#ffffff', blending:ADD, opacity:0}));
  wht.position.x = -0.012; sky.add(red, wht);
  let plane = null, nextPlane = 9 + Math.random()*8, V = null;

  return {
    group, label:'assets3d/themes/urbansounds/label.jpg', background:cityTexture(),
    vinyl:'#77727c', armMetal:'#c9ced8', stars:0, nebula:0.0, dust:0, bloom:0.3,
    ringColor:'#ffd45a', ringBaseColor:'#d6c8e6', ringBase:0.11, ringFlash:'#ffd45a',
    layout(view){
      V = view; const sl = slots(view);
      placeAt(signG, view, sl.ul[0], sl.ul[1], 0.03, 0.1);
      placeAt(road, view, 0, sl.bc[1], -0.1, -1); road.visible = true;
      placeAt(sky, view, 0, sl.sky, -0.1, -1); sky.visible = true;
    },
    update(dt, t){
      rimHalo.material.opacity = 0.12 + Math.sin(t*1.7)*0.03;
      // Neon: hafif vızıltı + ara sıra bozuk tüp titremesi.
      sign.material.map = (Math.floor(t*1.6) % 2) ? neonB : neonA;
      let on = 1;
      if(!flick && t > nextFlick){ flick = {t0:t, seq:[0.06,0.05,0.09,0.04,0.22,0.5].map(x=>x*(0.7+Math.random()*0.6))}; }
      if(flick){
        let e = t - flick.t0, k = 0;
        while(k < flick.seq.length && e > flick.seq[k]){ e -= flick.seq[k]; k++; }
        if(k >= flick.seq.length){ flick = null; nextFlick = t + 7 + Math.random()*10; }
        else on = k%2 ? 0.08 : 0.85;
      }
      sign.material.opacity = 0.7*on*(0.96 + Math.sin(t*41)*0.04);
      // Far izleri
      if(t > nextCar){
        const c = cars.find(c=>!c.on);
        if(c){
          const dir = Math.random()<0.6 ? 1 : -1;
          c.on = true; c.dir = dir; c.x = -1.5*dir; c.sp = rnd(1.3, 1.9);
          c.y = rnd(-0.02, 0.02); c.m.rotation.z = dir > 0 ? 0 : Math.PI;
          c.m.material.color.set(dir > 0 ? '#fff1d6' : '#ff3b2f');
        }
        nextCar = t + rnd(3, 8);
      }
      for(const c of cars){
        if(!c.on){ c.m.material.opacity = 0; continue; }
        c.x += c.dir*c.sp*dt/60;
        c.m.position.set(c.x, c.y, 0);
        c.m.scale.set(0.42, 0.006, 1);
        const edge = 1 - Math.min(1, Math.max(0, Math.abs(c.x) - 0.9)/0.6);
        c.m.material.opacity = 0.55*edge;
        if(Math.abs(c.x) > 1.6 && Math.sign(c.x) === c.dir) c.on = false;
      }
      // Uçak: uzun aralıklarla, ekranı yavaşça boydan boya geçer.
      if(!plane && t > nextPlane){ const d = Math.random()<0.5 ? 1 : -1; plane = {d, x:-1.3*d, y:rnd(-0.03, 0.03)}; }
      if(plane){
        plane.x += plane.d*0.0018*dt;
        red.position.set(plane.x, plane.y, 0); wht.position.set(plane.x - 0.014*plane.d, plane.y, 0);
        const ph = t % 1.4;
        red.material.opacity = ph < 0.5 ? 0.75 : 0.12;
        wht.material.opacity = (ph > 0.7 && ph < 0.76) || (ph > 0.86 && ph < 0.92) ? 0.9 : 0;
        if(Math.abs(plane.x) > 1.35 && Math.sign(plane.x) === plane.d){ plane = null; nextPlane = t + 20 + Math.random()*15; red.material.opacity = wht.material.opacity = 0; }
      }
    },
    dispose(){ neonA.dispose(); neonB.dispose(); },
  };
}

// ---------------- Cosmic Soundwave ----------------
function galaxyTexture(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), C = S/2;
  const cols = ['120,170,255','170,120,255','90,220,255','255,255,255'];
  for(let arm=0; arm<3; arm++){
    for(let i=0;i<1400;i++){
      const tt = Math.random(), ang = arm*2*Math.PI/3 + tt*5.2, r = 40 + tt*430;
      const jitter = (1-tt*0.5)*38*(Math.random()-0.5)*2;
      const x = C + Math.cos(ang)*r + jitter, y = C + Math.sin(ang)*r + jitter;
      const s = Math.random()<0.08 ? 10+Math.random()*16 : 2+Math.random()*6;
      const col = cols[Math.floor(Math.random()*cols.length)], a = (1-tt)*0.35 + 0.05;
      const gr = g.createRadialGradient(x,y,0,x,y,s);
      gr.addColorStop(0,`rgba(${col},${a})`); gr.addColorStop(1,`rgba(${col},0)`);
      g.fillStyle = gr; g.beginPath(); g.arc(x,y,s,0,Math.PI*2); g.fill();
    }
  }
  // Delik çevresinde parlak çekirdek halesi
  const core = g.createRadialGradient(C,C,0,C,C,120);
  core.addColorStop(0,'rgba(200,230,255,.0)'); core.addColorStop(0.4,'rgba(160,200,255,.35)'); core.addColorStop(1,'rgba(80,120,255,0)');
  g.fillStyle = core; g.beginPath(); g.arc(C,C,120,0,Math.PI*2); g.fill();
  return tex(c);
}
function spaceTexture(){
  const W = 1024, c = canvas(W), g = c.getContext('2d');
  const bg = g.createRadialGradient(W/2,W/2,0,W/2,W/2,W*0.75);
  bg.addColorStop(0,'#0b1236'); bg.addColorStop(0.6,'#050a22'); bg.addColorStop(1,'#02040f');
  g.fillStyle = bg; g.fillRect(0,0,W,W);
  for(let i=0;i<14;i++){
    const x = Math.random()*W, y = Math.random()*W, r = 80+Math.random()*220;
    const col = i%2 ? '90,70,200' : '40,120,220';
    const gr = g.createRadialGradient(x,y,0,x,y,r); gr.addColorStop(0,`rgba(${col},.1)`); gr.addColorStop(1,`rgba(${col},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(x,y,r,0,Math.PI*2); g.fill();
  }
  for(let i=0;i<900;i++){
    const a = Math.random(); g.fillStyle = `rgba(255,255,255,${a*a})`;
    const s = Math.random()<0.05 ? 1.8 : 0.9; g.fillRect(Math.random()*W, Math.random()*W, s, s);
  }
  return tex(c);
}
// Gezegen yüzeyi: yatay bulut bantları (+ isteğe bağlı fırtına lekesi ki
// kendi ekseninde döndüğü fark edilsin).
function planetTexture(bands, spot){
  const W = 512, H = 256, c = canvas(W, H), g = c.getContext('2d');
  let y = 0, i = 0;
  while(y < H){
    const h = 6 + Math.random()*22, col = bands[i++ % bands.length];
    g.fillStyle = col; g.fillRect(0, y, W, h + 1); y += h;
  }
  // Bant kenarlarını yumuşat + ince türbülans
  for(let k=0;k<260;k++){
    const x = Math.random()*W, yy = Math.random()*H, w = 20 + Math.random()*90;
    g.fillStyle = `rgba(255,255,255,${Math.random()*0.05})`; g.fillRect(x, yy, w, 1 + Math.random()*2);
    g.fillStyle = `rgba(0,0,0,${Math.random()*0.06})`; g.fillRect(Math.random()*W, Math.random()*H, w, 1 + Math.random()*2);
  }
  if(spot){
    const gr = g.createRadialGradient(W*0.3, H*0.62, 0, W*0.3, H*0.62, 26);
    gr.addColorStop(0, spot); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.save(); g.scale(1.8, 1); g.translate(-W*0.3*0.44, 0); g.fillStyle = gr; g.beginPath(); g.arc(W*0.3, H*0.62, 26, 0, Math.PI*2); g.fill(); g.restore();
  }
  // Kutuplara doğru koyulaş
  const p = g.createLinearGradient(0,0,0,H);
  p.addColorStop(0,'rgba(0,0,0,.35)'); p.addColorStop(0.2,'rgba(0,0,0,0)'); p.addColorStop(0.8,'rgba(0,0,0,0)'); p.addColorStop(1,'rgba(0,0,0,.35)');
  g.fillStyle = p; g.fillRect(0,0,W,H);
  return tex(c, true);
}
// Çizim tarzı Satürn: düz renkli bantlar, yumuşak gölge hilali, ince
// kontur; halkanın arka yarısı gezegenin arkasında, ön yarısı önünde.
function cartoonSaturnTexture(){
  const W = 512, H = Math.round(512*0.62), c = canvas(W, H), g = c.getContext('2d');
  const cx = W/2, cy = H/2, R = H*0.3, tilt = -0.32;
  const ring = (front)=>{
    g.save(); g.translate(cx, cy); g.rotate(tilt);
    g.beginPath();
    if(front) g.ellipse(0, 0, R*2.05, R*0.52, 0, 0, Math.PI); else g.ellipse(0, 0, R*2.05, R*0.52, 0, Math.PI, Math.PI*2);
    g.lineWidth = R*0.34; g.strokeStyle = '#e9cf95'; g.stroke();
    g.lineWidth = R*0.07; g.strokeStyle = 'rgba(120,80,40,.55)'; g.stroke();           // Cassini boşluğu
    g.beginPath();
    if(front) g.ellipse(0, 0, R*1.62, R*0.4, 0, 0, Math.PI); else g.ellipse(0, 0, R*1.62, R*0.4, 0, Math.PI, Math.PI*2);
    g.lineWidth = R*0.12; g.strokeStyle = '#c99e5c'; g.stroke();
    g.restore();
  };
  ring(false);
  // Gezegen
  g.save(); g.beginPath(); g.arc(cx, cy, R, 0, Math.PI*2); g.clip();
  g.fillStyle = '#f0d49a'; g.fillRect(cx-R, cy-R, R*2, R*2);
  g.translate(cx, cy); g.rotate(tilt);
  const bands = [[-0.62,0.16,'#e2b874'],[-0.28,0.12,'#f6e2b4'],[0.02,0.2,'#d9a560'],[0.36,0.1,'#f3dca8'],[0.6,0.16,'#c98f4e']];
  for(const [y, h, col] of bands){ g.fillStyle = col; g.fillRect(-R*1.2, y*R, R*2.4, h*R); }
  g.rotate(-tilt); g.translate(-cx, -cy);
  // Gölge hilali (ışık sol üstten)
  g.fillStyle = 'rgba(40,20,50,.38)'; g.beginPath(); g.arc(cx + R*0.42, cy + R*0.36, R*1.05, 0, Math.PI*2); g.fill();
  // Parlak nokta
  g.fillStyle = 'rgba(255,255,255,.35)'; g.beginPath(); g.ellipse(cx - R*0.42, cy - R*0.45, R*0.2, R*0.11, -0.6, 0, Math.PI*2); g.fill();
  g.restore();
  g.lineWidth = 3; g.strokeStyle = 'rgba(90,60,40,.7)'; g.beginPath(); g.arc(cx, cy, R, 0, Math.PI*2); g.stroke();
  ring(true);
  return tex(c);
}
function buildCosmic(world){
  const group = new THREE.Group();
  const gTex = galaxyTexture();
  const gg = new THREE.CircleGeometry(DISC_R*0.98, 96); gg.rotateX(-Math.PI/2);
  const galaxy = new THREE.Mesh(gg, new THREE.MeshBasicMaterial({map:gTex, transparent:true, opacity:0.26, depthWrite:false, blending:ADD}));
  galaxy.position.y = TOP_Y + 0.0007;
  galaxy.renderOrder = -2;
  group.add(galaxy);
  const rim = glowRim('#5ad1ff', DISC_R*1.012, 0.0035, 0.45);
  group.add(rim);

  // --- Satürn: gerçekçi küre yerine sade, çizim (illüstrasyon) tarzı küçük
  // bir Satürn. Hafifçe sallanıp süzülür.
  const saturn = new THREE.Group(); group.add(saturn);
  const SW = 0.085;
  const satMesh = new THREE.Mesh(new THREE.PlaneGeometry(SW, SW*0.62), basicMat({map:cartoonSaturnTexture(), opacity:0.95}));
  saturn.add(satMesh);

  // --- Buz devi + etrafında dönen küçük ay (ay gezegenin arkasına geçip
  // kaybolur, önüne çıkınca görünür).
  const ice = new THREE.Group(); group.add(ice);
  const iBody = new THREE.Mesh(new THREE.SphereGeometry(0.024, 32, 20),
    new THREE.MeshStandardMaterial({map:planetTexture(['#7fb6ff','#9cc7ff','#6a9ff0','#b5d6ff']), roughness:0.6, metalness:0, emissive:'#10224a', emissiveIntensity:0.35}));
  ice.add(iBody);
  const moonPivot = new THREE.Group(); moonPivot.rotation.x = 1.15; moonPivot.rotation.z = 0.3; ice.add(moonPivot);
  const moon = new THREE.Mesh(new THREE.SphereGeometry(0.0055, 16, 10), new THREE.MeshStandardMaterial({color:'#d9dde6', roughness:0.95, emissive:'#222833', emissiveIntensity:0.4}));
  moon.position.x = 0.05; moonPivot.add(moon);

  // --- Kayan yıldızlar: arada bir, plağın arkasındaki gökyüzünden geçer.
  const sTex = streakTexture(), dotT = softDot();
  const shoot = new THREE.Group(); group.add(shoot);
  const tail = streakMesh(sTex, '#cfe6ff'); shoot.add(tail);
  const head = new THREE.Mesh(new THREE.PlaneGeometry(0.016, 0.016), basicMat({map:dotT, color:'#ffffff', blending:ADD, opacity:0}));
  shoot.add(head);
  let star = null, nextStar = 2 + Math.random()*4, V = null;
  const spawnStar = t=>{
    // Boş gökyüzü noktası bul (plağın üstüne denk gelirse zaten örtülür).
    for(let k=0;k<6;k++){
      const nx = rnd(-0.9, 0.9), ny = rnd(-0.85, V.aspect < 0.9 ? 0.6 : 0.5);
      const p = V.ground(nx, ny, -0.12);
      if(!p || Math.hypot(p.x, p.z) < DISC_R + 0.1) continue;
      shoot.position.set(p.x, -0.12, p.z);
      const dir = Math.random()<0.5 ? 1 : -1;
      shoot.rotation.set(-V.tilt, 0, dir > 0 ? -rnd(0.25, 0.6) : Math.PI + rnd(0.25, 0.6));
      star = {t0:t, dur:rnd(0.7, 1.1), len:rnd(0.14, 0.22), sp:rnd(0.35, 0.5)};
      return;
    }
  };

  return {
    group, label:'assets3d/themes/cosmicsoundwave/label.jpg', background:spaceTexture(),
    vinyl:'#9fb4ff', armMetal:'#c9ced8', stars:0.5, nebula:0.08, dust:0, bloom:0.3, ringColor:'#6fa6d6', ringBaseColor:'#c8ccd8', ringBase:0.1, ringFlash:'#9fd6ff',
    layout(view){
      V = view; const sl = slots(view);
      placeAt(saturn, view, sl.bl[0], sl.bl[1], 0.05, 0.1);
      placeAt(ice, view, sl.ul[0], sl.ul[1], 0.05, 0.08);
    },
    update(dt, t){
      galaxy.rotation.y -= 0.0012*dt;
      satMesh.position.y = Math.sin(t*0.5)*0.003;
      satMesh.rotation.z = Math.sin(t*0.23)*0.06;
      iBody.rotation.y += 0.0025*dt;
      ice.children[0].position.y = Math.sin(t*0.6+2)*0.003;
      moonPivot.rotation.y += 0.006*dt;
      if(!star && V && t > nextStar) spawnStar(t);
      if(star){
        const u = (t - star.t0)/star.dur;
        if(u >= 1){ star = null; nextStar = t + rnd(4, 10); tail.material.opacity = head.material.opacity = 0; }
        else {
          const x = u*star.sp, a = Math.sin(Math.PI*Math.min(1, u*1.15));
          tail.position.x = head.position.x = x;
          tail.scale.set(Math.min(star.len, x + 0.01), 0.0035, 1);
          tail.material.opacity = 0.75*a; head.material.opacity = 0.9*a;
        }
      }
    },
  };
}

// ---------------- Ortak: tohumlu rastgele, plak üstü katman ----------------
// Desenler her açılışta aynı çıksın diye tohumlu (mulberry32).
function seeded(seed){
  return ()=>{ seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
// Plağın tamamını kaplayan, plakla dönen düz katman (dokular bir kez çizilir).
function discLayer(world, map, opts, y){
  const g = new THREE.CircleGeometry(DISC_R*0.996, 128); g.rotateX(-Math.PI/2);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial(Object.assign({map, transparent:true, depthWrite:false}, opts)));
  m.position.y = TOP_Y + y;
  // Pena/notalar derinliği yok sayan sprite'lar ve uzaklığa göre sıralanır:
  // pena plağın uzak (üst) yarısındayken plak katmanı ondan SONRA çizilip
  // üstünü örtüyordu. Plak katmanları her zaman önce çizilsin.
  m.renderOrder = -2;
  world.recordSpin.add(m);
  return m;
}

// ---------------- Hell's Anthem ve Lo-Fi: plak dışı süsler ----------------
// Diğer temalardaki gibi (VU metre, Satürn, neon tabela) plağın dışındaki boş
// alanlara konur: kameraya dönük düz görseller, bir kez çizilir, yalnız
// konum/ölçek/opaklıkla canlandırılır.

// Demir mangal: üç ayaklı kase, kenarında kor parıltısı.
function brazierTexture(){
  const W = 256, H = 200, c = canvas(W, H), g = c.getContext('2d');
  g.strokeStyle = '#1c1512'; g.lineWidth = 9; g.lineCap = 'round';
  for(const [x0, x1] of [[70, 40], [128, 128], [186, 216]]){ g.beginPath(); g.moveTo(x0, 92); g.lineTo(x1, 192); g.stroke(); }
  const bowl = g.createLinearGradient(0, 40, 0, 110);
  bowl.addColorStop(0, '#3a2c26'); bowl.addColorStop(1, '#120c0a');
  g.fillStyle = bowl; g.beginPath(); g.moveTo(28, 52); g.quadraticCurveTo(128, 150, 228, 52); g.closePath(); g.fill();
  const coal = g.createRadialGradient(128, 50, 4, 128, 50, 100);
  coal.addColorStop(0, '#ffd27a'); coal.addColorStop(0.35, '#ff6a1a'); coal.addColorStop(1, '#5a1004');
  g.fillStyle = coal; g.beginPath(); g.ellipse(128, 52, 100, 15, 0, 0, Math.PI*2); g.fill();
  g.strokeStyle = '#6a4a3a'; g.lineWidth = 4; g.beginPath(); g.ellipse(128, 52, 101, 16, 0, 0, Math.PI*2); g.stroke();
  return tex(c);
}
// Tek alev dili (toplamalı): dibi beyaz-sarı, ucu kızıl ve saydam.
function flameSpriteTexture(){
  const W = 128, H = 192, c = canvas(W, H), g = c.getContext('2d');
  const gr = g.createLinearGradient(0, H, 0, 0);
  gr.addColorStop(0, 'rgba(255,240,190,1)'); gr.addColorStop(0.35, 'rgba(255,150,40,.9)'); gr.addColorStop(0.75, 'rgba(220,40,0,.5)'); gr.addColorStop(1, 'rgba(120,0,0,0)');
  g.fillStyle = gr; g.beginPath();
  g.moveTo(W*0.5, 0); g.bezierCurveTo(W*0.62, H*0.3, W*0.98, H*0.55, W*0.82, H*0.88); g.quadraticCurveTo(W*0.5, H*1.02, W*0.18, H*0.88);
  g.bezierCurveTo(W*0.02, H*0.55, W*0.38, H*0.3, W*0.5, 0); g.fill();
  return tex(c);
}
// Yerdeki lav yarığı (toplamalı): zikzak, ortası beyaz-sarı.
function fissureTexture(){
  const W = 512, H = 96, c = canvas(W, H), g = c.getContext('2d'), r = seeded(99);
  const pts = []; for(let i=0;i<=24;i++) pts.push([i/24*W, H/2 + (r()-0.5)*36*Math.sin(i/24*Math.PI)]);
  for(const [lw, col] of [[26,'rgba(255,60,0,.18)'],[11,'rgba(255,110,20,.6)'],[3.5,'rgba(255,230,150,1)']]){
    g.strokeStyle = col; g.lineWidth = lw; g.lineCap = 'round'; g.lineJoin = 'round';
    g.beginPath(); pts.forEach(([x,y],i)=>{ const k = Math.sin(i/24*Math.PI); g.lineWidth = lw*(0.25 + k*0.75); if(i) g.lineTo(x,y); else g.moveTo(x,y); }); g.stroke();
  }
  return tex(c);
}
// Yarasa silueti: kanat yukarı (frame 0) / aşağı (frame 1).
function batTexture(frame){
  const W = 128, H = 64, c = canvas(W, H), g = c.getContext('2d');
  g.fillStyle = '#0b0606'; g.strokeStyle = 'rgba(255,90,30,.35)'; g.lineWidth = 1.5;
  const wy = frame ? 46 : 10, mid = 32;
  g.beginPath();
  g.moveTo(64, mid - 4); g.quadraticCurveTo(40, wy, 4, wy + (frame ? -8 : 12)); g.quadraticCurveTo(20, mid + 2, 30, mid + 8);
  g.quadraticCurveTo(40, mid + 2, 48, mid + 10); g.quadraticCurveTo(56, mid + 4, 64, mid + 10);
  g.quadraticCurveTo(72, mid + 4, 80, mid + 10); g.quadraticCurveTo(88, mid + 2, 98, mid + 8);
  g.quadraticCurveTo(108, mid + 2, 124, wy + (frame ? -8 : 12)); g.quadraticCurveTo(88, wy, 64, mid - 4);
  g.fill(); g.stroke();
  g.beginPath(); g.ellipse(64, mid + 2, 7, 9, 0, 0, Math.PI*2); g.fill();
  return tex(c);
}

// Lo-Fi: yağmurlu gece penceresi (ahşap çerçeve, içeriden sıcak yansıma).
function windowTexture(){
  const W = 256, H = 320, c = canvas(W, H), g = c.getContext('2d'), r = seeded(31);
  const glass = g.createLinearGradient(0, 0, 0, H);
  glass.addColorStop(0, '#1d2a3a'); glass.addColorStop(1, '#2e3346');
  g.fillStyle = glass; g.fillRect(16, 16, W-32, H-32);
  for(let i=0;i<14;i++){ const x = 30 + r()*(W-60), y = 40 + r()*(H*0.45); g.fillStyle = `rgba(255,${200 + r()*40},${120 + r()*60},${0.25 + r()*0.4})`; g.fillRect(x, y, 3 + r()*4, 4 + r()*5); }   // uzak şehir ışıkları
  const warm = g.createRadialGradient(W*0.7, H*0.85, 0, W*0.7, H*0.85, W*0.7);
  warm.addColorStop(0, 'rgba(255,190,120,.25)'); warm.addColorStop(1, 'rgba(255,190,120,0)');
  g.fillStyle = warm; g.fillRect(0, 0, W, H);
  g.strokeStyle = '#6a4630'; g.lineWidth = 16; g.strokeRect(8, 8, W-16, H-16);
  g.lineWidth = 9; g.beginPath(); g.moveTo(W/2, 12); g.lineTo(W/2, H-12); g.moveTo(12, H*0.48); g.lineTo(W-12, H*0.48); g.stroke();
  g.fillStyle = '#7a5238'; g.fillRect(0, H-20, W, 20);   // pencere pervazı
  return tex(c);
}
// Camdan süzülen damlalar (tekrarlı, aşağı kaydırılır).
function windowRainTexture(){
  const W = 128, H = 256, c = canvas(W, H), g = c.getContext('2d'), r = seeded(8);
  for(let i=0;i<26;i++){
    const x = r()*W, y = r()*H, l = 10 + r()*30;
    const gr = g.createLinearGradient(0, y - l, 0, y); gr.addColorStop(0, 'rgba(200,230,255,0)'); gr.addColorStop(1, 'rgba(220,240,255,.7)');
    g.strokeStyle = gr; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x, y - l); g.lineTo(x, y); g.stroke();
    g.fillStyle = 'rgba(230,245,255,.8)'; g.beginPath(); g.arc(x, y, 1.8, 0, Math.PI*2); g.fill();
  }
  const t = tex(c, true); t.wrapT = THREE.RepeatWrapping; return t;
}
// Saksıda monstera.
function plantTexture(){
  const W = 256, H = 320, c = canvas(W, H), g = c.getContext('2d');
  const leaf = (x, y, a, s, col)=>{
    g.save(); g.translate(x, y); g.rotate(a); g.fillStyle = col;
    g.beginPath(); g.moveTo(0, 0); g.bezierCurveTo(s*0.9, -s*0.3, s*0.8, -s*1.2, 0, -s*1.35); g.bezierCurveTo(-s*0.8, -s*1.2, -s*0.9, -s*0.3, 0, 0); g.fill();
    g.strokeStyle = 'rgba(20,40,20,.8)'; g.lineWidth = 3;
    for(const k of [0.35, 0.65, 0.95]){ g.beginPath(); g.moveTo(s*0.75, -s*k); g.lineTo(s*0.25, -s*(k+0.05)); g.moveTo(-s*0.75, -s*k); g.lineTo(-s*0.25, -s*(k+0.05)); g.stroke(); }
    g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -s*1.3); g.stroke();
    g.restore();
  };
  leaf(128, 210, -0.9, 70, '#3f6a3a'); leaf(128, 210, 0.85, 72, '#4c7a42'); leaf(128, 200, -0.25, 82, '#5a8a4c'); leaf(128, 205, 0.3, 68, '#46743f');
  const pot = g.createLinearGradient(80, 0, 176, 0); pot.addColorStop(0, '#9a5a3a'); pot.addColorStop(0.5, '#c27a52'); pot.addColorStop(1, '#8a4e30');
  g.fillStyle = pot; g.beginPath(); g.moveTo(76, 210); g.lineTo(180, 210); g.lineTo(166, 312); g.lineTo(90, 312); g.closePath(); g.fill();
  g.fillStyle = '#b06a46'; g.fillRect(70, 204, 116, 16);
  return tex(c);
}
// Kahve kupası (hafif yukarıdan): krem seramik, koyu kahve yüzeyi.
function mugTexture(){
  const W = 256, H = 220, c = canvas(W, H), g = c.getContext('2d');
  g.strokeStyle = '#e8dccb'; g.lineWidth = 18; g.beginPath(); g.ellipse(196, 120, 34, 44, 0, -1.2, 1.2); g.stroke();   // kulp
  const body = g.createLinearGradient(40, 0, 200, 0); body.addColorStop(0, '#cfc2b0'); body.addColorStop(0.45, '#f6ecdf'); body.addColorStop(1, '#bfb19e');
  g.fillStyle = body; g.beginPath(); g.moveTo(40, 60); g.lineTo(44, 190); g.quadraticCurveTo(122, 218, 200, 190); g.lineTo(204, 60); g.closePath(); g.fill();
  g.fillStyle = '#efe5d6'; g.beginPath(); g.ellipse(122, 60, 82, 22, 0, 0, Math.PI*2); g.fill();
  const coffee = g.createRadialGradient(110, 56, 4, 122, 60, 74); coffee.addColorStop(0, '#7a4a2c'); coffee.addColorStop(1, '#3a2014');
  g.fillStyle = coffee; g.beginPath(); g.ellipse(122, 61, 72, 17, 0, 0, Math.PI*2); g.fill();
  g.fillStyle = 'rgba(255,240,220,.35)'; g.beginPath(); g.ellipse(100, 58, 20, 5, -0.2, 0, Math.PI*2); g.fill();   // köpük ışığı
  g.fillStyle = '#e9a0a6'; g.beginPath(); g.arc(122, 130, 13, 0, Math.PI*2); g.fill();   // kupadaki küçük kalp
  g.beginPath(); g.moveTo(109, 132); g.lineTo(122, 150); g.lineTo(135, 132); g.fill();
  return tex(c);
}
// Buhar kıvrımı (yumuşak, saydam).
function steamTexture(){
  const W = 64, H = 192, c = canvas(W, H), g = c.getContext('2d');
  for(let k=0;k<3;k++){
    g.strokeStyle = `rgba(255,255,255,${0.10 + k*0.06})`; g.lineWidth = 14 - k*4; g.lineCap = 'round';
    g.beginPath(); g.moveTo(W/2, H); g.bezierCurveTo(W*0.1, H*0.7, W*0.9, H*0.45, W/2, H*0.25); g.quadraticCurveTo(W*0.2, H*0.12, W*0.5, 0); g.stroke();
  }
  return tex(c);
}
// Kıvrılıp uyuyan kedi (turuncu tekir).
function catTexture(){
  const W = 256, H = 160, c = canvas(W, H), g = c.getContext('2d');
  const fur = g.createRadialGradient(110, 80, 10, 120, 92, 110); fur.addColorStop(0, '#e2a066'); fur.addColorStop(1, '#a8622e');
  g.fillStyle = fur;
  g.beginPath(); g.ellipse(122, 98, 92, 52, 0, 0, Math.PI*2); g.fill();                  // gövde
  g.beginPath(); g.ellipse(64, 86, 40, 34, -0.2, 0, Math.PI*2); g.fill();                // baş
  g.beginPath(); g.moveTo(36, 66); g.lineTo(40, 36); g.lineTo(60, 58); g.fill();         // kulaklar
  g.beginPath(); g.moveTo(70, 56); g.lineTo(86, 32); g.lineTo(94, 62); g.fill();
  g.strokeStyle = '#a8622e'; g.lineWidth = 22; g.lineCap = 'round';                      // kuyruk sarılı
  g.beginPath(); g.moveTo(200, 120); g.quadraticCurveTo(170, 158, 100, 140); g.stroke();
  g.strokeStyle = 'rgba(110,55,20,.55)'; g.lineWidth = 6;                                // tekir çizgileri
  for(const x of [120, 145, 170]){ g.beginPath(); g.moveTo(x, 52); g.quadraticCurveTo(x + 10, 80, x - 4, 108); g.stroke(); }
  g.strokeStyle = '#3a2010'; g.lineWidth = 3;                                            // kapalı gözler
  g.beginPath(); g.arc(52, 86, 7, 0.2, Math.PI - 0.2); g.stroke();
  g.beginPath(); g.arc(76, 82, 7, 0.2, Math.PI - 0.2); g.stroke();
  g.fillStyle = '#e88a8a'; g.beginPath(); g.arc(64, 98, 3.5, 0, Math.PI*2); g.fill();
  return tex(c);
}
function zTexture(){
  const c = canvas(64), g = c.getContext('2d');
  g.fillStyle = '#ffffff'; g.font = 'bold 46px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('z', 32, 34);
  return tex(c);
}

// ---------------- Hell's Anthem ----------------
// Kırık taş plakalar: Voronoi hücreleri (ızgara hızlandırmalı, açılışta bir
// kez ~15 ms). Döner: her pikselin kenar mesafesi ve hücre kimliği.
function stoneCells(S){
  const r = seeded(666), G = 7, cell = S/G, seeds = [];
  for(let j=0;j<G;j++) for(let i=0;i<G;i++) seeds.push([(i + 0.15 + r()*0.7)*cell, (j + 0.15 + r()*0.7)*cell, r()]);
  const edge = new Float32Array(S*S), id = new Float32Array(S*S);
  for(let y=0;y<S;y++){
    const gy = Math.floor(y/cell);
    for(let x=0;x<S;x++){
      // Hafif bükülme: kenarlar cetvel gibi düz durmasın
      const wx = x + Math.sin(y*0.021)*9 + Math.sin(y*0.067)*3, wy = y + Math.sin(x*0.019)*9 + Math.cos(x*0.071)*3;
      const gx = Math.floor(x/cell);
      let d1 = 1e9, d2 = 1e9, best = 0;
      for(let j=gy-1;j<=gy+1;j++) for(let i=gx-1;i<=gx+1;i++){
        if(i<0||j<0||i>=G||j>=G) continue;
        const s = seeds[j*G+i], dx = wx-s[0], dy = wy-s[1], d = dx*dx+dy*dy;
        if(d < d1){ d2 = d1; d1 = d; best = s[2]; } else if(d < d2) d2 = d;
      }
      edge[y*S+x] = Math.sqrt(d2) - Math.sqrt(d1); id[y*S+x] = best;
    }
  }
  return {edge, id};
}
// Kara kaya yüzeyi (opak): plaka başına ton farkı, pürüz, kenarda kızıllık.
// Lav (toplamalı): yalnız çatlakların içi parlar. İkisi aynı hücrelerden.
function hellSurfaceTextures(){
  const S = 512, {edge, id} = stoneCells(S), r = seeded(13);
  const rc = canvas(S), lc = canvas(S), rg = rc.getContext('2d'), lg = lc.getContext('2d');
  const rd = rg.createImageData(S, S), ld = lg.createImageData(S, S);
  for(let y=0;y<S;y++) for(let x=0;x<S;x++){
    const k = y*S+x, e = edge[k], rr = Math.hypot(x-S/2, y-S/2)/(S/2);
    const inLabel = rr < 0.27;
    const crack = inLabel ? 0 : Math.max(0, 1 - e/2.6), heat = inLabel ? 0 : Math.max(0, 1 - e/9);
    const grain = r()*18;
    let v = 38 + id[k]*30 + grain - Math.min(1, rr)*14;          // plaka tonu
    v *= 1 - Math.max(0, 1 - e/5)*0.75;                          // kenara doğru kararır
    rd.data[k*4] = v + heat*55; rd.data[k*4+1] = v*0.92 + heat*8; rd.data[k*4+2] = v*0.88; rd.data[k*4+3] = 255;
    const a = Math.min(1, crack*1.1 + heat*0.35);
    ld.data[k*4] = 255; ld.data[k*4+1] = 70 + crack*170; ld.data[k*4+2] = 10 + crack*crack*110; ld.data[k*4+3] = a*255;
  }
  rg.putImageData(rd, 0, 0); lg.putImageData(ld, 0, 0);
  return {rock:tex(rc), lava:tex(lc)};
}
// Alev şeridi: u = çevre (tekrarlı), v = 0 iç kenar → 1 dış kenar.
function flameTexture(){
  const W = 512, H = 128, c = canvas(W, H), g = c.getContext('2d'), r = seeded(7);
  for(let i=0;i<70;i++){
    const x = r()*W, h = H*(0.35 + r()*0.6), w = 10 + r()*26;
    for(const dx of [-W, 0, W]){
      const gr = g.createLinearGradient(0, 0, 0, h);
      gr.addColorStop(0,'rgba(255,200,90,.9)'); gr.addColorStop(0.35,'rgba(255,110,20,.6)'); gr.addColorStop(1,'rgba(200,30,0,0)');
      g.fillStyle = gr; g.beginPath();
      g.moveTo(x+dx-w, 0); g.quadraticCurveTo(x+dx-w*0.4, h*0.6, x+dx+(r()-0.5)*w, h); g.quadraticCurveTo(x+dx+w*0.4, h*0.6, x+dx+w, 0);
      g.closePath(); g.fill();
    }
  }
  return tex(c, true);
}
// Paslı diken (yukarıdan): uzun sivri üçgen, ortasından ışık alan sırt.
function spikeTexture(){
  const W = 64, H = 256, c = canvas(W, H), g = c.getContext('2d');
  const body = g.createLinearGradient(0,0,W,0);
  body.addColorStop(0,'#2a140a'); body.addColorStop(0.45,'#8a4a26'); body.addColorStop(0.55,'#c27a44'); body.addColorStop(1,'#1e0f08');
  g.fillStyle = body; g.beginPath(); g.moveTo(W*0.1, H); g.lineTo(W/2, 0); g.lineTo(W*0.9, H); g.closePath(); g.fill();
  const tip = g.createLinearGradient(0,0,0,H);
  tip.addColorStop(0,'rgba(0,0,0,0)'); tip.addColorStop(0.75,'rgba(0,0,0,0)'); tip.addColorStop(1,'rgba(255,90,20,.55)');
  g.fillStyle = tip; g.beginPath(); g.moveTo(W*0.1, H); g.lineTo(W/2, 0); g.lineTo(W*0.9, H); g.closePath(); g.fill();
  return tex(c);
}
// Şimşek: parlak çekirdekli zikzak + dal, mavi-beyaz hâle.
function boltTexture(seed){
  const W = 512, H = 128, c = canvas(W, H), g = c.getContext('2d'), r = seeded(seed);
  const path = (x0, y0, x1, n, amp)=>{ const p = [[x0, y0]]; for(let i=1;i<=n;i++){ p.push([x0 + (x1-x0)*i/n, y0 + (r()-0.5)*amp]); } return p; };
  const main = path(0, H/2, W, 22, 46), br = path(main[9][0], main[9][1], main[9][0] + 150, 8, 40).map(([x,y],i)=>[x, y + i*4]);
  for(const [lw, col] of [[14,'rgba(90,150,255,.18)'],[6,'rgba(150,200,255,.5)'],[2.2,'rgba(255,255,255,1)']]){
    g.strokeStyle = col; g.lineCap = 'round'; g.lineJoin = 'round';
    for(const [p, k] of [[main, 1],[br, 0.6]]){
      g.lineWidth = lw*k; g.beginPath(); p.forEach(([x,y],i)=>i ? g.lineTo(x,y) : g.moveTo(x,y)); g.stroke();
    }
  }
  return tex(c);
}
function hellBackground(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(21);
  const bg = g.createRadialGradient(S/2, S*0.55, 0, S/2, S*0.55, S*0.7);
  bg.addColorStop(0,'#4a0f05'); bg.addColorStop(0.45,'#1c0604'); bg.addColorStop(1,'#060202');
  g.fillStyle = bg; g.fillRect(0,0,S,S);
  for(let i=0;i<26;i++){
    const x = r()*S, y = r()*S, rad = 80 + r()*220;
    const gr = g.createRadialGradient(x,y,0,x,y,rad);
    gr.addColorStop(0, `rgba(${30+r()*30},${12+r()*10},${10},${0.25})`); gr.addColorStop(1,'rgba(0,0,0,0)');
    g.fillStyle = gr; g.beginPath(); g.arc(x,y,rad,0,Math.PI*2); g.fill();
  }
  for(let i=0;i<260;i++){
    const x = r()*S, y = r()*S, s = r()<0.1 ? 3 : 1.5;
    g.fillStyle = `rgba(255,${120+r()*100},${40},${0.25 + r()*0.6})`; g.fillRect(x, y, s, s);
  }
  return tex(c);
}
function buildHell(world){
  const group = new THREE.Group();
  const surf = hellSurfaceTextures();
  const rock = discLayer(world, surf.rock, {opacity:1}, 0.0003);
  const lava = discLayer(world, surf.lava, {blending:ADD, opacity:0.9}, 0.0006);
  // Kenarda yanan alev halkası (iki şerit ters yönde akar) + kızıl kenar.
  // flipY kapalı: alevin dibi (doku üstü) şeridin iç kenarına, plağa otursun.
  const fTex = flameTexture(), fTex2 = flameTexture(); fTex.flipY = fTex2.flipY = false; fTex2.repeat.x = -1;
  const fire = new THREE.Mesh(ringStrip(DISC_R*1.075, DISC_R*0.17, 200, 5, TOP_Y-0.001), basicMat({map:fTex, blending:ADD, opacity:0.8}));
  const fire2 = new THREE.Mesh(ringStrip(DISC_R*1.06, DISC_R*0.13, 200, 4, TOP_Y-0.0008), basicMat({map:fTex2, blending:ADD, opacity:0.55}));
  group.add(fire, fire2, glowRim('#ff4a12', DISC_R*1.004, 0.005, 0.7));
  fire.renderOrder = fire2.renderOrder = -1;
  // Diş gibi paslı dikenler: plakla döner, iki boy dönüşümlü.
  const sTex = softDot();
  const spikes = new THREE.Group(), spMat = basicMat({map:spikeTexture(), opacity:1});
  const SN = 20;
  for(let i=0;i<SN;i++){
    const big = i%2 === 0, len = big ? 0.2 : 0.13, wid = big ? 0.034 : 0.026;
    const pg = new THREE.PlaneGeometry(wid, len); pg.translate(0, len/2, 0); pg.rotateX(-Math.PI/2);
    const m = new THREE.Mesh(pg, spMat);
    const a = i/SN*Math.PI*2 + 0.08;
    m.position.set(Math.cos(a)*DISC_R*0.97, TOP_Y-0.004, Math.sin(a)*DISC_R*0.97);
    m.rotation.y = -a - Math.PI/2;
    m.renderOrder = -1;
    spikes.add(m);
  }
  world.recordSpin.add(spikes);
  // Yükselen közler (plağın altındaki "hava" katmanında, ekran düzleminde).
  const air = new THREE.Group(); group.add(air);
  const EN = 46, embers = new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1), basicMat({map:sTex, blending:ADD, opacity:1}), EN);
  embers.frustumCulled = false; air.add(embers);
  const em = Array.from({length:EN}, ()=>({x:rnd(-1.3,1.3), y:rnd(-1.7,1.7), s:rnd(0.006,0.016), sp:rnd(0.6,1.4), ph:rnd(0,9)}));
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3(), C = new THREE.Color(), hot = new THREE.Color('#ff7a2a');
  // Plak dışı: iki demir mangal (titreyen alev), yerde lav yarığı, gökte yarasalar.
  const flameTex = flameSpriteTexture(), brTex = brazierTexture(), glowDot = softDot();
  const braziers = [0, 1].map(i=>{
    const o = new THREE.Group(); group.add(o);
    const BW = 0.085, BH = BW*200/256, coalY = BH*0.24;
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.2), basicMat({map:glowDot, color:'#ff6a1a', blending:ADD, opacity:0.35}));
    glow.position.set(0, coalY + 0.02, -0.001);
    const bowl = new THREE.Mesh(new THREE.PlaneGeometry(BW, BH), basicMat({map:brTex}));
    const fl = [0, 1].map(k=>{
      const fg = new THREE.PlaneGeometry(k ? 0.034 : 0.05, k ? 0.055 : 0.078); fg.translate(0, k ? 0.0275 : 0.039, 0);
      const m = new THREE.Mesh(fg, basicMat({map:flameTex, blending:ADD, opacity:k ? 1 : 0.85}));
      m.position.set(k ? 0.004 : -0.002, coalY, 0.001 + k*0.0005); return m;
    });
    o.add(glow, bowl, ...fl); o.scale.setScalar(1.2);
    return {o, fl, glow, ph:i*1.7};
  });
  const fissure = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.094), basicMat({map:fissureTexture(), blending:ADD, opacity:0.7}));
  const fissureG = new THREE.Group(); fissureG.add(fissure); group.add(fissureG);
  const batA = batTexture(0), batB = batTexture(1), sky = new THREE.Group(); group.add(sky);
  const bats = [0, 1, 2].map(()=>{ const m = new THREE.Mesh(new THREE.PlaneGeometry(0.045, 0.0225), basicMat({map:batA, opacity:0})); sky.add(m); return {m, on:false}; });
  let nextBats = 4;
  // Şimşekler: plağın üstünden çakıp söner (her 5 notada + ara ara kendiliğinden).
  const bolts = [boltTexture(3), boltTexture(11)].map(map=>{
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.25), basicMat({map, blending:ADD, opacity:0, depthTest:false}));
    m.rotation.x = -Math.PI/2; m.renderOrder = 5; group.add(m); return {m, t:-1};
  });
  let notes = 0, kick = 0, nextBolt = 6;
  const strike = t=>{
    const b = bolts.find(b=>b.t < 0) || bolts[0];
    const a = Math.random()*Math.PI*2, len = rnd(0.5, 0.8);
    b.m.scale.set(len, 1, rnd(0.8, 1.2));
    b.m.position.set(Math.cos(a)*rnd(0.05, 0.2), TOP_Y + 0.03, Math.sin(a)*rnd(0.05, 0.2));
    b.m.rotation.z = rnd(0, Math.PI*2);
    b.t = t;
  };
  return {
    group, label:'assets3d/themes/hellsanthem/label.jpg', background:hellBackground(),
    vinyl:'#2a2522', armMetal:'#6a5c55', stars:0, nebula:0, dust:0, sheen:0.03, bloom:0.55,
    ringColor:'#ffb066', ringBaseColor:'#e0a272', ringBase:0.22, ringFlash:'#ff6a1a',
    layout(view){
      const sl = slots(view);
      air.position.set(0, -0.12, 0); air.rotation.set(-Math.PI/2, 0, 0);
      placeAt(braziers[0].o, view, sl.bl[0], sl.bl[1], 0.03, 0.08);
      placeAt(braziers[1].o, view, sl.br[0], sl.br[1], 0.03, 0.08);
      placeAt(fissureG, view, 0, sl.bc[1], -0.02, 0.06);
      placeAt(sky, view, 0, sl.sky, -0.1, -1); sky.visible = true;
    },
    onNote(){ kick = 1; notes++; if(notes % 5 === 0) nextBolt = 0; },
    update(dt, t, f){
      kick = Math.max(0, kick - 0.03*dt);
      lava.material.opacity = 0.7 + 0.2*Math.sin(t*2.2) + kick*0.3;
      fTex.offset.x = (t*0.03)%1; fTex2.offset.x = (-t*0.045)%1;
      fire.material.opacity = 0.72 + Math.sin(t*9)*0.06 + Math.sin(t*23)*0.04;
      for(let i=0;i<EN;i++){
        const e = em[i];
        e.y += 0.0012*e.sp*dt; e.x += Math.sin(t*0.8*e.sp + e.ph)*0.0004*dt;
        if(e.y > 1.75){ e.y = -1.75; e.x = rnd(-1.3, 1.3); }
        P.set(e.x, e.y, 0.01); S.set(e.s, e.s, 1); M.compose(P, Q, S); embers.setMatrixAt(i, M);
        embers.setColorAt(i, C.copy(hot).multiplyScalar(0.5 + 0.5*Math.sin(t*4*e.sp + e.ph)));
      }
      embers.instanceMatrix.needsUpdate = true; embers.instanceColor.needsUpdate = true;
      if(f.inGame && t > nextBolt){ strike(t); nextBolt = t + rnd(7, 14); }
      for(const b of braziers){
        const q = t*1.0 + b.ph;
        b.fl[0].scale.set(1 + Math.sin(q*11)*0.07, 1 + Math.sin(q*13.7)*0.12 + Math.sin(q*5.3)*0.08, 1);
        b.fl[1].scale.set(1 + Math.sin(q*17)*0.1, 1 + Math.sin(q*19.3)*0.16, 1);
        b.fl[0].rotation.z = Math.sin(q*3.1)*0.06; b.fl[1].rotation.z = Math.sin(q*4.7)*0.09;
        b.glow.material.opacity = 0.3 + Math.sin(q*9)*0.06 + kick*0.15;
      }
      fissure.material.opacity = 0.55 + Math.sin(t*1.7)*0.2 + kick*0.25;
      // Yarasalar: arada bir sürü halinde gökyüzünden geçer, kanat çırpar.
      if(t > nextBats && bats.every(b=>!b.on)){
        const d = Math.random() < 0.5 ? 1 : -1;
        bats.forEach((b, i)=>{ b.on = true; b.d = d; b.x = -1.3*d - i*0.09*d; b.y = rnd(-0.05, 0.05); b.ph = rnd(0, 6); b.sp = rnd(0.9, 1.15); b.m.scale.x = d; });
        nextBats = t + rnd(12, 22);
      }
      for(const b of bats){
        if(!b.on){ b.m.material.opacity = 0; continue; }
        b.x += b.d*0.0042*b.sp*dt;
        b.m.position.set(b.x, b.y + Math.sin(t*3 + b.ph)*0.012, 0);
        b.m.material.map = (Math.floor(t*9 + b.ph) % 2) ? batB : batA;
        b.m.material.opacity = 0.9;
        if(Math.abs(b.x) > 1.4 && Math.sign(b.x) === b.d) b.on = false;
      }
      for(const b of bolts){
        if(b.t < 0) continue;
        const e = t - b.t;
        if(e > 0.38){ b.t = -1; b.m.material.opacity = 0; continue; }
        b.m.material.opacity = (e < 0.06 || (e > 0.12 && e < 0.2) ? 1 : 0.25) * (1 - e/0.38);
      }
    },
    dispose(){
      for(const o of [rock, lava, spikes]){ world.recordSpin.remove(o); o.traverse(x=>{ if(x.geometry) x.geometry.dispose(); if(x.material){ if(x.material.map) x.material.map.dispose(); x.material.dispose(); } }); }
    },
  };
}

// ---------------- Lo-Fi Chillhop ----------------
// Kullanıcının Lo-Fi konsepti: pembe → lila → turkuaz buzlu plak, kahve
// fincanı lekeleri ve yağmur damlaları; ortada plakla dönen polaroid; sıcak
// kahverengi oda, süzülen hafif yağmur. Sakin, göz yormayan palet.
function lofiSurface(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(42), C = S/2;
  const base = g.createLinearGradient(0, 0, S, S*0.7);
  base.addColorStop(0, '#b97f86'); base.addColorStop(0.5, '#9d8fae'); base.addColorStop(1, '#78aaa6');
  g.fillStyle = base; g.fillRect(0,0,S,S);
  // Buzlu doku: ince gren
  for(let i=0;i<9000;i++){ const v = r() < 0.5 ? 255 : 0; g.fillStyle = `rgba(${v},${v},${v},${0.03 + r()*0.04})`; g.fillRect(r()*S, r()*S, 2, 2); }
  // Soluk oluklar
  for(let rr=C*0.98; rr>C*0.3; rr -= 4 + r()*6){
    g.strokeStyle = `rgba(255,255,255,${0.03 + r()*0.05})`; g.lineWidth = 1;
    g.beginPath(); g.arc(C, C, rr, 0, Math.PI*2); g.stroke();
  }
  // Kahve fincanı lekeleri (düzensiz halka)
  const stain = (x, y, rad)=>{
    for(let k=0;k<3;k++){
      g.strokeStyle = `rgba(110,62,36,${0.18 + r()*0.12})`; g.lineWidth = 5 + r()*7;
      g.beginPath();
      for(let i=0;i<=40;i++){ const a = i/40*Math.PI*2, q = rad*(0.92 + r()*0.16) + k*3; const px = x + Math.cos(a)*q, py = y + Math.sin(a)*q; if(i) g.lineTo(px, py); else g.moveTo(px, py); }
      g.stroke();
    }
    const fill = g.createRadialGradient(x, y, 0, x, y, rad);
    fill.addColorStop(0, 'rgba(120,70,40,.05)'); fill.addColorStop(1, 'rgba(120,70,40,.16)');
    g.fillStyle = fill; g.beginPath(); g.arc(x, y, rad, 0, Math.PI*2); g.fill();
  };
  stain(C + 260, C - 330, 62); stain(C - 300, C + 280, 74); stain(C - 340, C - 60, 48); stain(C + 210, C + 330, 34);
  // Yağmur damlaları: turkuaz yansımalı küçük damlalar
  for(let i=0;i<80;i++){
    const a = r()*Math.PI*2, d = C*(0.32 + r()*0.62), x = C + Math.cos(a)*d, y = C + Math.sin(a)*d, s = 4 + r()*5;
    g.fillStyle = 'rgba(40,70,80,.25)'; g.beginPath(); g.ellipse(x+1.5, y+2, s*0.7, s, 0, 0, Math.PI*2); g.fill();
    g.fillStyle = 'rgba(190,240,235,.55)'; g.beginPath(); g.ellipse(x, y, s*0.6, s*0.9, 0, 0, Math.PI*2); g.fill();
    g.fillStyle = 'rgba(255,255,255,.8)'; g.fillRect(x - s*0.25, y - s*0.5, 1.6, 2.4);
  }
  // Kenara doğru hafif kararma
  const v = g.createRadialGradient(C, C, C*0.5, C, C, C);
  v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(40,20,30,.35)');
  g.fillStyle = v; g.fillRect(0,0,S,S);
  return tex(c);
}
function lofiBackground(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(17);
  const bg = g.createRadialGradient(S*0.5, S*0.42, 0, S*0.5, S*0.5, S*0.72);
  bg.addColorStop(0, '#4a3329'); bg.addColorStop(0.55, '#2a1c17'); bg.addColorStop(1, '#120b09');
  g.fillStyle = bg; g.fillRect(0,0,S,S);
  for(let i=0;i<18;i++){
    const x = r()*S, y = r()*S, rad = 30 + r()*90, col = r() < 0.5 ? '255,190,140' : '160,220,210';
    const gr = g.createRadialGradient(x,y,0,x,y,rad); gr.addColorStop(0, `rgba(${col},.07)`); gr.addColorStop(1, `rgba(${col},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(x,y,rad,0,Math.PI*2); g.fill();
  }
  return tex(c);
}
// Yağmur çizgisi: yukarıdan aşağı belirginleşen ince şerit.
function rainTexture(){
  const c = canvas(8, 128), g = c.getContext('2d'), gr = g.createLinearGradient(0,0,0,128);
  gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(255,255,255,1)');
  g.fillStyle = gr; g.fillRect(3, 0, 2, 128);
  return tex(c);
}
function buildLofi(world){
  const group = new THREE.Group();
  const surf = discLayer(world, lofiSurface(), {opacity:1}, 0.0003);
  // Polaroid: plakla döner, hafif eğik, altında yumuşak gölge. Etiket dairesini
  // tamamen örter (yarı genişliği etiket yarıçapından büyük).
  const PW = 0.27, PH = PW*600/512;
  const pg = new THREE.PlaneGeometry(PW, PH); pg.rotateX(-Math.PI/2);
  const polMat = new THREE.MeshBasicMaterial({color:'#ece4da', transparent:true, depthWrite:false});
  const polaroid = new THREE.Mesh(pg, polMat);
  polaroid.position.y = TOP_Y + 0.0022; polaroid.rotation.y = 0.2; polaroid.renderOrder = -1;
  const shg = new THREE.PlaneGeometry(PW*1.08, PH*1.06); shg.rotateX(-Math.PI/2);
  const shadow = new THREE.Mesh(shg, new THREE.MeshBasicMaterial({map:softDot(), color:'#000000', transparent:true, opacity:0.45, depthWrite:false}));
  shadow.position.set(0.006, TOP_Y + 0.0018, 0.008); shadow.rotation.y = 0.2; shadow.renderOrder = -1;
  world.recordSpin.add(shadow, polaroid);
  loadTexture('assets3d/themes/lofichillhop/polaroid.jpg').then(t=>{ if(t && polaroid.parent){ polMat.map = t; polMat.needsUpdate = true; } });
  group.add(glowRim('#f2c6b4', DISC_R*1.006, 0.004, 0.35));
  // Odada süzülen hafif yağmur (plağın altındaki ekran düzleminde).
  const air = new THREE.Group(); group.add(air);
  const RN = 40, rain = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), basicMat({map:rainTexture(), color:'#bfe6e2', blending:ADD, opacity:0.22}), RN);
  rain.frustumCulled = false; air.add(rain);
  const drops = Array.from({length:RN}, ()=>({x:rnd(-1.4,1.4), y:rnd(-1.8,1.8), sp:rnd(0.9,1.5), l:rnd(0.05,0.11)}));
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), 0.12), S = new THREE.Vector3(), P = new THREE.Vector3();
  let kick = 0;
  // Plak dışı: yağmurlu pencere (sol üst), saksı bitkisi (sol alt), buharı
  // tüten kahve kupası (sağ alt), uyuyan kedi (alt orta).
  const win = new THREE.Group(); group.add(win); win.scale.setScalar(1.2);
  const WW = 0.12, WH = WW*320/256;
  win.add(new THREE.Mesh(new THREE.PlaneGeometry(WW, WH), basicMat({map:windowTexture()})));
  const wrTex = windowRainTexture();
  const wrain = new THREE.Mesh(new THREE.PlaneGeometry(WW*0.86, WH*0.8), basicMat({map:wrTex, opacity:0.75}));
  wrain.position.set(0, 0.004, 0.0005); win.add(wrain);
  const plant = new THREE.Group(); group.add(plant); plant.scale.setScalar(1.3);
  const PLW = 0.1, PLH = PLW*320/256, plg = new THREE.PlaneGeometry(PLW, PLH); plg.translate(0, PLH/2, 0);
  const plantM = new THREE.Mesh(plg, basicMat({map:plantTexture()})); plantM.position.y = -PLH/2; plant.add(plantM);
  const mug = new THREE.Group(); group.add(mug); mug.scale.setScalar(1.3);
  const MW = 0.085, MH = MW*220/256;
  mug.add(new THREE.Mesh(new THREE.PlaneGeometry(MW, MH), basicMat({map:mugTexture()})));
  const stTex = steamTexture();
  const steam = [0, 1, 2].map(k=>{
    const sg = new THREE.PlaneGeometry(0.02, 0.06); sg.translate(0, 0.03, 0);
    const m = new THREE.Mesh(sg, basicMat({map:stTex, opacity:0})); m.position.set((k-1)*0.012 - 0.004, MH*0.22, 0.001); mug.add(m);
    return {m, ph:k/3};
  });
  const cat = new THREE.Group(); group.add(cat); cat.scale.setScalar(1.35);
  const CW = 0.11, CH = CW*160/256, cg = new THREE.PlaneGeometry(CW, CH); cg.translate(0, CH/2, 0);
  const catM = new THREE.Mesh(cg, basicMat({map:catTexture()})); catM.position.y = -CH/2; cat.add(catM);
  const zTex = zTexture();
  const zs = [0, 1].map(k=>{ const m = new THREE.Mesh(new THREE.PlaneGeometry(0.016, 0.016), basicMat({map:zTex, color:'#fff3ea', opacity:0})); cat.add(m); return {m, ph:k*0.5}; });
  return {
    group, label:'assets3d/themes/lofichillhop/label.jpg', background:lofiBackground(),
    vinyl:'#9d8fae', armMetal:'#c9a46a', stars:0, nebula:0, dust:0.15, sheen:0.08, bloom:0.25, noSpindle:true,
    ringColor:'#8fe3d8', ringBaseColor:'#fff3ea', ringBase:0.2, ringFlash:'#5fe8d6',
    layout(view){
      const sl = slots(view);
      air.position.set(0, -0.12, 0); air.rotation.set(-Math.PI/2, 0, 0);
      placeAt(win, view, sl.ul[0], sl.ul[1], 0.03, 0.08);
      placeAt(plant, view, sl.bl[0], sl.bl[1], 0.03, 0.08);
      placeAt(mug, view, sl.br[0], sl.br[1], 0.03, 0.08);
      placeAt(cat, view, 0, sl.bc[1], 0.02, 0.06);
    },
    onNote(){ kick = 1; },
    update(dt, t){
      wrTex.offset.y = (-t*0.05) % 1;
      plantM.rotation.z = Math.sin(t*0.55)*0.035 + Math.sin(t*1.3)*0.01;
      for(const s of steam){
        const u = ((t*0.32 + s.ph) % 1);
        s.m.position.y = MH*0.22 + u*0.03; s.m.scale.set(1 + u*0.6, 1 + u*0.3, 1);
        s.m.material.opacity = Math.sin(Math.PI*u)*0.5;
      }
      catM.scale.y = 1 + Math.sin(t*1.7)*0.025;
      for(const z of zs){
        const u = ((t*0.22 + z.ph) % 1);
        z.m.position.set(-CW*0.3 + u*0.02, CH*0.1 + u*0.05, 0.001); z.m.scale.setScalar(0.6 + u*0.8);
        z.m.material.opacity = Math.sin(Math.PI*u)*0.7;
      }
      kick = Math.max(0, kick - 0.04*dt);
      polMat.color.setScalar(0.92 + kick*0.08);
      for(let i=0;i<RN;i++){
        const d = drops[i];
        d.y -= 0.006*d.sp*dt; d.x -= 0.0007*d.sp*dt;
        if(d.y < -1.85){ d.y = 1.85; d.x = rnd(-1.4, 1.4); }
        P.set(d.x, d.y, 0.01); S.set(0.0035, d.l, 1); M.compose(P, Q, S); rain.setMatrixAt(i, M);
      }
      rain.instanceMatrix.needsUpdate = true;
    },
    dispose(){
      for(const o of [surf, polaroid, shadow]){ world.recordSpin.remove(o); o.geometry.dispose(); if(o.material.map) o.material.map.dispose(); o.material.dispose(); }
    },
  };
}

// ================ Dört yeni tema (2026-10-16 konsept sayfası) ================
// Kristal Rünler, Steam Funk, Candy Drip, Cyber Circuit. Hell/Lo-Fi ile aynı
// yapı: plakla dönen yüzey katmanları (spin grubu), kenar süsü, ekran
// düzleminde süzülen parçacıklar ve plak dışında hareketli süsler. Dokular
// tema açılırken bir kez çizilir; kareler yalnız konum/ölçek/opaklık değiştirir.

// Plakla dönen katmanları tek grupta toplar; tema kapanırken hepsini temizler.
function spinGroup(world){ const g = new THREE.Group(); world.recordSpin.add(g); return g; }
function spinLayer(spin, world, map, opts, y){ const m = discLayer(world, map, opts, y); spin.add(m); return m; }
function spinDispose(world, spin){
  world.recordSpin.remove(spin);
  spin.traverse(x=>{ if(x.geometry) x.geometry.dispose(); if(x.material){ if(x.material.map) x.material.map.dispose(); x.material.dispose(); } });
}
// Plak üstünde, plakla dönen düz küçük parça (kıvılcım, dişli, veri ışığı).
function spinPlane(spin, w, h, mat, a, d, y){
  const g = new THREE.PlaneGeometry(w, h); g.rotateX(-Math.PI/2);
  const m = new THREE.Mesh(g, mat);
  m.position.set(Math.cos(a)*d, TOP_Y + y, Math.sin(a)*d); m.renderOrder = -1; spin.add(m);
  return m;
}
// Ekran düzleminde süzülen parçacık katmanı (Hell közleri / Lo-Fi yağmuru gibi).
function airInstances(group, n, mat){
  const air = new THREE.Group(); group.add(air);
  const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), mat, n);
  mesh.frustumCulled = false; air.add(mesh);
  return {air, mesh};
}
function sparkleTexture(){
  const c = canvas(64), g = c.getContext('2d'), gr = g.createRadialGradient(32,32,0,32,32,32);
  gr.addColorStop(0,'rgba(255,255,255,1)'); gr.addColorStop(0.25,'rgba(255,255,255,.3)'); gr.addColorStop(1,'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0,0,64,64);
  g.fillStyle = 'rgba(255,255,255,.95)'; g.beginPath(); g.moveTo(32,0);
  g.quadraticCurveTo(34,30,64,32); g.quadraticCurveTo(34,34,32,64); g.quadraticCurveTo(30,34,0,32); g.quadraticCurveTo(30,30,32,0); g.fill();
  return tex(c);
}

// ---------------- Kristal Rünler ----------------
// Lacivert buzlu plak, merkezden yayılan yarı saydam kristaller, kenarda
// altın rün kuşağı (notada parlar), plaktan taşan buz sivrileri; buz
// mağarası arka planı, kutup ışıkları, süzülen kar.
function runeGlyph(g, k, H, W){
  g.beginPath(); g.moveTo(0, -H); g.lineTo(0, H);
  if(k === 0){ g.moveTo(0,-H); g.lineTo(W,-H*0.4); g.moveTo(0,-H*0.2); g.lineTo(W,H*0.3); }
  else if(k === 1){ g.moveTo(-W,-H*0.5); g.lineTo(W,H*0.5); }
  else if(k === 2){ g.moveTo(-W,-H*0.7); g.lineTo(0,-H*0.2); g.lineTo(W,-H*0.7); }
  else if(k === 3){ g.moveTo(0,-H); g.lineTo(W,-H*0.5); g.lineTo(0,0); }
  else if(k === 4){ g.moveTo(0,-H*0.4); g.lineTo(W,-H); g.moveTo(0,H*0.1); g.lineTo(W,-H*0.5); }
  else { g.moveTo(0,H*0.2); g.lineTo(W,-H*0.2); g.lineTo(W,H); }
  g.stroke();
}
function drawRunes(g, C, R, n, h, r){
  g.lineCap = 'round'; g.lineJoin = 'round'; g.lineWidth = h*0.14;
  for(let i=0;i<n;i++){
    const a = i/n*Math.PI*2, k = Math.floor(r()*6);
    g.save(); g.translate(C + Math.cos(a)*R, C + Math.sin(a)*R); g.rotate(a + Math.PI/2);
    runeGlyph(g, k, h/2, h*0.32); g.restore();
  }
}
function crystalSurface(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(61), C = S/2;
  const base = g.createRadialGradient(C,C,0,C,C,C);
  base.addColorStop(0,'#1d3266'); base.addColorStop(0.6,'#101e45'); base.addColorStop(1,'#080e26');
  g.fillStyle = base; g.fillRect(0,0,S,S);
  for(let rr=C*0.85; rr>C*0.3; rr -= 3 + r()*5){ g.strokeStyle = `rgba(160,205,255,${0.03 + r()*0.05})`; g.lineWidth = 1; g.beginPath(); g.arc(C,C,rr,0,Math.PI*2); g.stroke(); }
  for(let i=0;i<1600;i++){ const a = r()*Math.PI*2, d = C*Math.sqrt(r())*0.86; g.fillStyle = `rgba(210,240,255,${0.04 + r()*0.14})`; g.fillRect(C + Math.cos(a)*d, C + Math.sin(a)*d, 1.6, 1.6); }
  // Rün kuşağı (oyun halkalarının dışında)
  g.strokeStyle = '#24170b'; g.lineWidth = C*0.12; g.beginPath(); g.arc(C,C,C*0.93,0,Math.PI*2); g.stroke();
  g.strokeStyle = '#d98a2e';
  for(const [rad, w] of [[C*0.872, 3], [C*0.988, 5]]){ g.lineWidth = w; g.beginPath(); g.arc(C,C,rad,0,Math.PI*2); g.stroke(); }
  g.strokeStyle = '#a8682a'; drawRunes(g, C, C*0.93, 40, C*0.075, seeded(77));
  return tex(c);
}
// Aynı rünler, parlak ve hâleli: ADD katman olarak notada parlar.
function crystalRuneGlow(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), C = S/2;
  g.shadowColor = '#ffa030'; g.shadowBlur = 14; g.strokeStyle = '#ffd08a';
  drawRunes(g, C, C*0.93, 40, C*0.075, seeded(77));
  return tex(c);
}
function crystalShardsTexture(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(5), C = S/2, N = 12;
  for(let i=0;i<N;i++){
    const a = i/N*Math.PI*2 + (r()-0.5)*0.18, L = C*(i%2 ? 0.32 + r()*0.12 : 0.48 + r()*0.12);
    const w = C*(i%2 ? 0.045 : 0.06), x0 = C*0.28, x1 = x0 + L, tip = w*1.8;
    g.save(); g.translate(C,C); g.rotate(a);
    const shape = ()=>{ g.beginPath(); g.moveTo(x0,-w); g.lineTo(x1-tip,-w); g.lineTo(x1,0); g.lineTo(x1-tip,w); g.lineTo(x0,w); g.closePath(); };
    const gr = g.createLinearGradient(x0,0,x1,0);
    gr.addColorStop(0,'rgba(70,170,230,.28)'); gr.addColorStop(0.7,'rgba(130,230,255,.38)'); gr.addColorStop(1,'rgba(225,255,255,.6)');
    g.fillStyle = gr; shape(); g.fill();
    g.fillStyle = 'rgba(235,255,255,.15)'; g.beginPath(); g.moveTo(x0,-w); g.lineTo(x1-tip,-w); g.lineTo(x1,0); g.lineTo(x0,0); g.closePath(); g.fill();
    g.strokeStyle = 'rgba(205,250,255,.75)'; g.lineWidth = 2.5; shape(); g.stroke();
    g.strokeStyle = 'rgba(255,255,255,.4)'; g.lineWidth = 1.2; g.beginPath(); g.moveTo(x0,0); g.lineTo(x1,0); g.stroke();
    g.restore();
  }
  return tex(c);
}
// Plak kenarından dışarı taşan buz sivrisi (yukarı bakan, ucu üstte).
function iceSpikeTexture(){
  const W = 64, H = 256, c = canvas(W, H), g = c.getContext('2d');
  const body = g.createLinearGradient(0,0,W,0);
  body.addColorStop(0,'rgba(60,150,220,.8)'); body.addColorStop(0.45,'rgba(170,240,255,.92)'); body.addColorStop(0.55,'rgba(235,255,255,.96)'); body.addColorStop(1,'rgba(50,130,210,.8)');
  g.fillStyle = body; g.beginPath(); g.moveTo(W*0.14,H); g.lineTo(W*0.14,H*0.3); g.lineTo(W/2,0); g.lineTo(W*0.86,H*0.3); g.lineTo(W*0.86,H); g.closePath(); g.fill();
  g.strokeStyle = 'rgba(255,255,255,.85)'; g.lineWidth = 2; g.stroke();
  g.strokeStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.moveTo(W/2,2); g.lineTo(W/2,H); g.stroke();
  return tex(c);
}
function crystalBackground(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(33);
  const bg = g.createRadialGradient(S/2,S*0.5,0,S/2,S*0.5,S*0.72);
  bg.addColorStop(0,'#143a62'); bg.addColorStop(0.5,'#0a1d38'); bg.addColorStop(1,'#03070f');
  g.fillStyle = bg; g.fillRect(0,0,S,S);
  // Kutup ışıkları: üst üste binen yumuşak dalgalı şeritler.
  g.globalCompositeOperation = 'lighter';
  for(let k=0;k<3;k++){
    const y0 = S*(0.1 + k*0.075), col = k === 1 ? '120,140,255' : '80,255,200';
    for(let w=96; w>8; w-=12){
      g.strokeStyle = `rgba(${col},0.02)`; g.lineWidth = w; g.beginPath();
      for(let x=-20; x<=S+20; x+=16){ const y = y0 + Math.sin(x*0.006 + k*2)*S*0.04 + Math.sin(x*0.017 + k)*S*0.012; if(x === -20) g.moveTo(x, y); else g.lineTo(x, y); }
      g.stroke();
    }
  }
  for(let i=0;i<320;i++){ const s = r() < 0.08 ? 2.5 : 1.2; g.fillStyle = `rgba(200,235,255,${0.2 + r()*0.6})`; g.fillRect(r()*S, r()*S, s, s); }
  g.globalCompositeOperation = 'source-over';
  return tex(c);
}
// Kaya üstünde kristal kümesi (plak dışı süs).
function crystalClusterTexture(seed){
  const W = 256, H = 256, c = canvas(W, H), g = c.getContext('2d'), r = seeded(seed);
  g.fillStyle = '#1a2436'; g.beginPath(); g.ellipse(W/2,H*0.88,W*0.42,H*0.09,0,0,Math.PI*2); g.fill();
  g.fillStyle = '#2e3c56'; g.beginPath(); g.ellipse(W/2,H*0.855,W*0.34,H*0.06,0,0,Math.PI*2); g.fill();
  const shards = [[-0.6,0.5,0.1],[0.62,0.46,0.1],[-0.28,0.78,0.13],[0.3,0.7,0.12],[0,0.95,0.16]];
  for(const [ang, len, w] of shards){
    g.save(); g.translate(W/2 + ang*W*0.32, H*0.86); g.rotate(ang*0.55);
    const L = len*H*0.76*(0.92 + r()*0.16), ww = w*W*0.5, tip = ww*1.7;
    const gr = g.createLinearGradient(-ww,0,ww,0);
    gr.addColorStop(0,'#2a7fc0'); gr.addColorStop(0.48,'#9cf0ff'); gr.addColorStop(0.55,'#eaffff'); gr.addColorStop(1,'#3a9ad6');
    g.fillStyle = gr; g.beginPath(); g.moveTo(-ww,0); g.lineTo(-ww,-L+tip); g.lineTo(0,-L); g.lineTo(ww,-L+tip); g.lineTo(ww,0); g.closePath(); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.75)'; g.lineWidth = 2; g.stroke();
    g.fillStyle = 'rgba(255,255,255,.22)'; g.beginPath(); g.moveTo(-ww,-L+tip); g.lineTo(0,-L); g.lineTo(0,0); g.lineTo(-ww,0); g.closePath(); g.fill();
    g.restore();
  }
  return tex(c);
}
// Havada süzülen rün taşı: üstü karlı, oyulmuş rün (parıltı ayrı katmanda).
function runeStoneShape(g, W, H){
  g.beginPath(); g.moveTo(W*0.2,H*0.06); g.lineTo(W*0.78,H*0.02); g.lineTo(W*0.94,H*0.3); g.lineTo(W*0.88,H*0.94); g.lineTo(W*0.14,H*0.98); g.lineTo(W*0.05,H*0.4); g.closePath();
}
function runeStoneTexture(){
  const W = 192, H = 256, c = canvas(W, H), g = c.getContext('2d');
  const body = g.createLinearGradient(0,0,W,H); body.addColorStop(0,'#64707f'); body.addColorStop(1,'#262c38');
  g.fillStyle = body; runeStoneShape(g, W, H); g.fill();
  g.strokeStyle = 'rgba(0,0,0,.5)'; g.lineWidth = 4; g.stroke();
  g.fillStyle = 'rgba(225,245,255,.55)'; g.beginPath(); g.moveTo(W*0.2,H*0.06); g.lineTo(W*0.78,H*0.02); g.lineTo(W*0.86,H*0.15); g.quadraticCurveTo(W*0.5,H*0.21,W*0.11,H*0.22); g.closePath(); g.fill();
  g.strokeStyle = '#1a1410'; g.lineCap = 'round'; g.lineJoin = 'round'; g.lineWidth = 16;
  g.save(); g.translate(W/2, H*0.57); runeGlyph(g, 0, H*0.27, W*0.24); g.restore();
  return tex(c);
}
function runeStoneGlowTexture(){
  const W = 192, H = 256, c = canvas(W, H), g = c.getContext('2d');
  g.strokeStyle = '#ffc070'; g.shadowColor = '#ff8a20'; g.shadowBlur = 18; g.lineCap = 'round'; g.lineJoin = 'round'; g.lineWidth = 9;
  g.save(); g.translate(W/2, H*0.57); runeGlyph(g, 0, H*0.27, W*0.24); g.restore();
  return tex(c);
}
function buildCrystal(world){
  const group = new THREE.Group(), spin = spinGroup(world);
  spinLayer(spin, world, crystalSurface(), {opacity:1}, 0.0003);
  spinLayer(spin, world, crystalShardsTexture(), {opacity:0.95}, 0.0006);
  const runes = spinLayer(spin, world, crystalRuneGlow(), {blending:ADD, opacity:0.5}, 0.0009);
  // Plağın kenarından taşan buz sivrileri (plakla döner, iki boy).
  const spMat = basicMat({map:iceSpikeTexture(), opacity:0.92});
  for(let i=0;i<12;i++){
    const big = i%2 === 0, len = big ? 0.14 : 0.09, wid = big ? 0.03 : 0.022;
    const pg = new THREE.PlaneGeometry(wid, len); pg.translate(0, len/2, 0); pg.rotateX(-Math.PI/2);
    const m = new THREE.Mesh(pg, spMat), a = i/12*Math.PI*2 + 0.26;
    m.position.set(Math.cos(a)*DISC_R*0.95, TOP_Y-0.004, Math.sin(a)*DISC_R*0.95); m.rotation.y = -a - Math.PI/2; m.renderOrder = -1;
    spin.add(m);
  }
  // Kristaller üstünde ara ara parlayan yıldız pırıltıları.
  const spkTex = sparkleTexture(), rs = seeded(9);
  const sparks = Array.from({length:14}, ()=>{
    const m = spinPlane(spin, 0.032, 0.032, basicMat({map:spkTex, color:'#e2fbff', blending:ADD, opacity:0}), rs()*Math.PI*2, DISC_R*(0.32 + rs()*0.55), 0.003);
    return {m, ph:rs()*10, sp:0.5 + rs()*0.8};
  });
  group.add(glowRim('#ffa640', DISC_R*1.004, 0.005, 0.55));
  // Süzülen kar
  const SN = 44, {air, mesh:snow} = airInstances(group, SN, basicMat({map:softDot(), color:'#dff4ff', blending:ADD, opacity:0.8}));
  const flakes = Array.from({length:SN}, ()=>({x:rnd(-1.4,1.4), y:rnd(-1.8,1.8), s:rnd(0.008,0.02), sp:rnd(0.5,1.1), ph:rnd(0,9)}));
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3();
  // Plak dışı: iki kristal kümesi (alt köşeler), havada süzülen rün taşı (sol üst).
  const glowT = softDot();
  const clusters = [11, 23].map((seed, i)=>{
    const o = new THREE.Group(); group.add(o);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), basicMat({map:glowT, color:'#4fd8ff', blending:ADD, opacity:0.3}));
    glow.position.set(0, 0.015, -0.001);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.13, 0.13), basicMat({map:crystalClusterTexture(seed)}));
    if(i) m.scale.x = -1;
    o.add(glow, m); o.scale.setScalar(1.25);
    return {o, glow, ph:i*2.1};
  });
  const stone = new THREE.Group(), stoneBody = new THREE.Group(); group.add(stone); stone.add(stoneBody); stone.scale.setScalar(1.3);
  const SW = 0.072, SH = SW*256/192;
  const stoneHalo = new THREE.Mesh(new THREE.PlaneGeometry(0.17, 0.17), basicMat({map:glowT, color:'#ff9a3a', blending:ADD, opacity:0.2}));
  stoneHalo.position.z = -0.001;
  const stoneGlow = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), basicMat({map:runeStoneGlowTexture(), blending:ADD, opacity:0.6}));
  stoneGlow.position.z = 0.0005;
  stoneBody.add(stoneHalo, new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), basicMat({map:runeStoneTexture()})), stoneGlow);
  let kick = 0;
  return {
    group, label:'assets3d/themes/crystalrune/label.jpg', background:crystalBackground(),
    vinyl:'#3a4f8a', armMetal:'#d9b37a', stars:0.35, nebula:0.05, dust:0, sheen:0.1, bloom:0.4,
    ringColor:'#9fe8ff', ringBaseColor:'#cfeeff', ringBase:0.18, ringFlash:'#7ff3ff',
    layout(view){
      const sl = slots(view);
      air.position.set(0, -0.12, 0); air.rotation.set(-Math.PI/2, 0, 0);
      placeAt(clusters[0].o, view, sl.bl[0], sl.bl[1], 0.03, 0.08);
      placeAt(clusters[1].o, view, sl.br[0], sl.br[1], 0.03, 0.08);
      placeAt(stone, view, sl.ul[0], sl.ul[1], 0.03, 0.08);
    },
    onNote(){ kick = 1; },
    update(dt, t){
      kick = Math.max(0, kick - 0.035*dt);
      runes.material.opacity = 0.4 + Math.sin(t*1.4)*0.12 + kick*0.45;
      for(const s of sparks){
        const v = Math.pow(Math.max(0, Math.sin(t*s.sp*2 + s.ph)), 8);
        s.m.material.opacity = v*0.95; s.m.scale.setScalar(0.5 + v*0.7); s.m.rotation.y = t*0.6 + s.ph;
      }
      for(const c of clusters) c.glow.material.opacity = 0.24 + Math.sin(t*1.3 + c.ph)*0.08 + kick*0.25;
      stoneBody.position.y = Math.sin(t*0.9)*0.006; stoneBody.rotation.z = Math.sin(t*0.6)*0.05;
      stoneGlow.material.opacity = 0.45 + Math.sin(t*2)*0.15 + kick*0.4;
      stoneHalo.material.opacity = 0.14 + kick*0.25;
      for(let i=0;i<SN;i++){
        const f = flakes[i];
        f.y -= 0.0009*f.sp*dt; f.x += Math.sin(t*0.7*f.sp + f.ph)*0.0005*dt;
        if(f.y < -1.85){ f.y = 1.85; f.x = rnd(-1.4, 1.4); }
        P.set(f.x, f.y, 0.01); S.set(f.s, f.s, 1); M.compose(P, Q, S); snow.setMatrixAt(i, M);
      }
      snow.instanceMatrix.needsUpdate = true;
    },
    dispose(){ spinDispose(world, spin); },
  };
}

// ---------------- Steam Funk ----------------
// Pirinç/bakır plak, kazınmış dişliler, perçinli kenar kuşağı; plakla dönen
// ve kendi ekseninde de çevrilen dişliler. Arka planda bakır borular; plak
// dışında basınç göstergesi (ibre notada kırmızıya fırlar), buhar püskürten
// vana ve birbirine geçen iki dişli.
function gearPath(g, x, y, R, n, hole){
  const Ri = R*0.84; g.beginPath();
  for(let i=0;i<n;i++){
    const a0 = i/n*Math.PI*2, da = Math.PI*2/n;
    [[a0,Ri],[a0+da*0.12,R],[a0+da*0.42,R],[a0+da*0.54,Ri]].forEach(([a, rr], k)=>{ const px = x + Math.cos(a)*rr, py = y + Math.sin(a)*rr; if(i || k) g.lineTo(px, py); else g.moveTo(px, py); });
  }
  g.closePath();
  if(hole){ g.moveTo(x + R*0.3, y); g.arc(x, y, R*0.3, 0, Math.PI*2); }
}
function gearTexture(teeth, spokes, light, dark){
  const S = 256, c = canvas(S), g = c.getContext('2d'), C = S/2;
  gearPath(g, C, C, C*0.98, teeth);
  const gr = g.createRadialGradient(C*0.7,C*0.6,C*0.1,C,C,C); gr.addColorStop(0, light); gr.addColorStop(1, dark);
  g.fillStyle = gr; g.fill(); g.strokeStyle = 'rgba(30,15,5,.85)'; g.lineWidth = 3; g.stroke();
  // Kollar arasındaki boşluklar
  g.globalCompositeOperation = 'destination-out';
  const step = Math.PI*2/spokes;
  for(let i=0;i<spokes;i++){
    const a = i*step;
    g.beginPath(); g.arc(C, C, C*0.66, a + 0.14, a + step - 0.14); g.arc(C, C, C*0.3, a + step - 0.3, a + 0.3, true); g.closePath(); g.fill();
  }
  g.globalCompositeOperation = 'source-over';
  g.strokeStyle = 'rgba(30,15,5,.6)'; g.lineWidth = 3; g.beginPath(); g.arc(C, C, C*0.7, 0, Math.PI*2); g.stroke();
  g.fillStyle = dark; g.beginPath(); g.arc(C, C, C*0.18, 0, Math.PI*2); g.fill(); g.stroke();
  g.fillStyle = light; g.beginPath(); g.arc(C, C, C*0.1, 0, Math.PI*2); g.fill();
  g.fillStyle = '#1a0d05'; g.beginPath(); g.arc(C, C, C*0.045, 0, Math.PI*2); g.fill();
  return tex(c);
}
function steamSurface(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(44), C = S/2;
  const base = g.createRadialGradient(C*0.8,C*0.7,0,C,C,C);
  base.addColorStop(0,'#a86a30'); base.addColorStop(0.55,'#7a4a1e'); base.addColorStop(1,'#3e230e');
  g.fillStyle = base; g.fillRect(0,0,S,S);
  // Fırçalanmış metal halkaları
  for(let rr=C*0.99; rr>C*0.25; rr -= 2 + r()*3){
    g.strokeStyle = r() < 0.5 ? `rgba(255,220,160,${0.02 + r()*0.04})` : `rgba(30,15,5,${0.03 + r()*0.05})`;
    g.lineWidth = 1.5; g.beginPath(); g.arc(C,C,rr,0,Math.PI*2); g.stroke();
  }
  // Kazınmış dişliler
  for(let i=0;i<9;i++){
    const a = r()*Math.PI*2, d = C*(0.36 + r()*0.44), rad = C*(0.08 + r()*0.12);
    gearPath(g, C + Math.cos(a)*d, C + Math.sin(a)*d, rad, 10 + Math.floor(r()*8), true);
    g.strokeStyle = 'rgba(40,20,6,.35)'; g.lineWidth = 4; g.stroke();
    g.strokeStyle = 'rgba(255,215,150,.12)'; g.lineWidth = 1.5; g.stroke();
  }
  // Yeşil bakır pası lekeleri
  for(let i=0;i<40;i++){
    const x = r()*S, y = r()*S, rad = 10 + r()*40, gr = g.createRadialGradient(x,y,0,x,y,rad);
    gr.addColorStop(0,'rgba(70,140,110,.12)'); gr.addColorStop(1,'rgba(70,140,110,0)');
    g.fillStyle = gr; g.fillRect(x-rad, y-rad, rad*2, rad*2);
  }
  // Perçinli dış kuşak
  g.strokeStyle = '#5a3414'; g.lineWidth = C*0.12; g.beginPath(); g.arc(C,C,C*0.93,0,Math.PI*2); g.stroke();
  const bs = g.createRadialGradient(C,C,C*0.87,C,C,C*0.99);
  bs.addColorStop(0,'#6a4018'); bs.addColorStop(0.5,'#d89a4c'); bs.addColorStop(1,'#5a3412');
  g.strokeStyle = bs; g.lineWidth = C*0.105; g.beginPath(); g.arc(C,C,C*0.93,0,Math.PI*2); g.stroke();
  for(let i=0;i<12;i++){
    const a = i/12*Math.PI*2; g.strokeStyle = 'rgba(40,20,6,.7)'; g.lineWidth = 3;
    g.beginPath(); g.moveTo(C + Math.cos(a)*C*0.877, C + Math.sin(a)*C*0.877); g.lineTo(C + Math.cos(a)*C*0.983, C + Math.sin(a)*C*0.983); g.stroke();
  }
  for(let i=0;i<48;i++){
    const a = (i + 0.5)/48*Math.PI*2;
    for(const rr of [0.897, 0.963]){
      const x = C + Math.cos(a)*C*rr, y = C + Math.sin(a)*C*rr;
      g.fillStyle = '#3a1f0a'; g.beginPath(); g.arc(x+1, y+1, 5, 0, Math.PI*2); g.fill();
      g.fillStyle = '#e8b878'; g.beginPath(); g.arc(x, y, 4, 0, Math.PI*2); g.fill();
    }
  }
  g.strokeStyle = 'rgba(40,20,6,.6)'; g.lineWidth = 6; g.beginPath(); g.arc(C,C,C*0.33,0,Math.PI*2); g.stroke();
  return tex(c);
}
function steamBackground(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(52);
  const bg = g.createRadialGradient(S/2,S*0.5,0,S/2,S*0.5,S*0.72);
  bg.addColorStop(0,'#3e2614'); bg.addColorStop(0.55,'#1e1209'); bg.addColorStop(1,'#0a0603');
  g.fillStyle = bg; g.fillRect(0,0,S,S);
  for(let i=0;i<7;i++){
    gearPath(g, r()*S, r()*S, 60 + r()*120, 12 + Math.floor(r()*8), true);
    g.strokeStyle = 'rgba(150,90,40,.1)'; g.lineWidth = 3; g.stroke();
  }
  const pipe = (x0, y0, x1, y1, w)=>{
    const hor = Math.abs(y1-y0) < Math.abs(x1-x0);
    const gr = hor ? g.createLinearGradient(0, y0-w/2, 0, y0+w/2) : g.createLinearGradient(x0-w/2, 0, x0+w/2, 0);
    gr.addColorStop(0,'rgba(50,25,10,.55)'); gr.addColorStop(0.4,'rgba(180,105,48,.38)'); gr.addColorStop(1,'rgba(35,18,8,.55)');
    g.strokeStyle = gr; g.lineWidth = w; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke();
    const L = Math.hypot(x1-x0, y1-y0);
    for(let d=90; d<L; d+=210){
      const x = x0 + (x1-x0)*d/L, y = y0 + (y1-y0)*d/L;
      g.fillStyle = 'rgba(120,70,30,.45)';
      if(hor) g.fillRect(x-6, y-w*0.75, 12, w*1.5); else g.fillRect(x-w*0.75, y-6, w*1.5, 12);
    }
  };
  pipe(0, S*0.1, S, S*0.1, 26); pipe(0, S*0.92, S*0.62, S*0.92, 22); pipe(S*0.07, 0, S*0.07, S, 20); pipe(S*0.94, S*0.28, S*0.94, S, 24);
  for(let i=0;i<120;i++){ g.fillStyle = `rgba(255,190,110,${0.05 + r()*0.2})`; g.fillRect(r()*S, r()*S, 1.5, 1.5); }
  return tex(c);
}
function gaugeTexture(){
  const S = 256, c = canvas(S), g = c.getContext('2d'), C = S/2;
  let gr = g.createLinearGradient(0,0,S,S); gr.addColorStop(0,'#f2c474'); gr.addColorStop(0.5,'#9a6424'); gr.addColorStop(1,'#5a3410');
  g.fillStyle = gr; g.beginPath(); g.arc(C,C,C*0.96,0,Math.PI*2); g.fill();
  g.strokeStyle = '#3a1f0a'; g.lineWidth = 3; g.stroke();
  for(let i=0;i<8;i++){ const a = i/8*Math.PI*2 + 0.39; g.fillStyle = '#4a2a10'; g.beginPath(); g.arc(C + Math.cos(a)*C*0.87, C + Math.sin(a)*C*0.87, 5, 0, Math.PI*2); g.fill(); }
  gr = g.createRadialGradient(C*0.85,C*0.8,0,C,C,C*0.8); gr.addColorStop(0,'#fbf1d8'); gr.addColorStop(1,'#d2bb92');
  g.fillStyle = gr; g.beginPath(); g.arc(C,C,C*0.76,0,Math.PI*2); g.fill();
  // Kadran: 135° → 405° (saat yönünde), son çeyrek kırmızı bölge.
  g.strokeStyle = 'rgba(200,40,20,.85)'; g.lineWidth = 10; g.beginPath(); g.arc(C,C,C*0.6,Math.PI*1.875,Math.PI*2.25); g.stroke();
  g.strokeStyle = '#3a2410'; g.lineCap = 'round';
  for(let k=0;k<=20;k++){
    const a = Math.PI*0.75 + k/20*Math.PI*1.5, big = k%5 === 0, r0 = C*(big ? 0.54 : 0.62);
    g.lineWidth = big ? 4 : 2; g.beginPath(); g.moveTo(C + Math.cos(a)*r0, C + Math.sin(a)*r0); g.lineTo(C + Math.cos(a)*C*0.7, C + Math.sin(a)*C*0.7); g.stroke();
  }
  g.fillStyle = '#3a2410'; g.font = 'bold 28px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('PSI', C, C*1.42);
  g.fillStyle = 'rgba(255,255,255,.2)'; g.beginPath(); g.ellipse(C*0.74,C*0.64,C*0.36,C*0.17,-0.6,0,Math.PI*2); g.fill();
  return tex(c);
}
// Dikey bakır boru: flanşlar, kırmızı vana, üstte buhar ağzı.
function pipeTexture(){
  const W = 200, H = 256, c = canvas(W, H), g = c.getContext('2d');
  const cu = (x, w)=>{ const gr = g.createLinearGradient(x-w/2,0,x+w/2,0); gr.addColorStop(0,'#4a2610'); gr.addColorStop(0.35,'#e8a060'); gr.addColorStop(0.55,'#b8693a'); gr.addColorStop(1,'#3a1d0a'); return gr; };
  g.fillStyle = '#7a4520'; g.fillRect(W*0.2, H*0.47, W*0.3, 12);
  g.fillStyle = cu(W/2, 52); g.fillRect(W/2-26, H*0.16, 52, H*0.84);
  g.fillStyle = cu(W/2, 34); g.fillRect(W/2-17, H*0.03, 34, H*0.14);
  for(const y of [H*0.17, H*0.6, H*0.95]){
    g.fillStyle = cu(W/2, 76); g.fillRect(W/2-38, y-9, 76, 18);
    g.fillStyle = '#2a1406'; for(const dx of [-29, 29]){ g.beginPath(); g.arc(W/2+dx, y, 3.5, 0, Math.PI*2); g.fill(); }
  }
  g.strokeStyle = '#b8302a'; g.lineWidth = 7; g.beginPath(); g.arc(W*0.2, H*0.49, 24, 0, Math.PI*2); g.stroke();
  g.lineWidth = 5; g.beginPath(); g.moveTo(W*0.2-24, H*0.49); g.lineTo(W*0.2+24, H*0.49); g.moveTo(W*0.2, H*0.49-24); g.lineTo(W*0.2, H*0.49+24); g.stroke();
  g.fillStyle = '#e8c070'; g.beginPath(); g.arc(W*0.2, H*0.49, 6, 0, Math.PI*2); g.fill();
  return tex(c);
}
function buildSteam(world){
  const group = new THREE.Group(), spin = spinGroup(world);
  spinLayer(spin, world, steamSurface(), {opacity:1}, 0.0003);
  // Plakla dönen ve kendi ekseninde de çevrilen dişliler (yarı saydam, yüzeye
  // gömülü gibi; halka çizgileri üstlerinde kalır).
  const texA = gearTexture(14, 5, '#e0ac5e', '#7a4a1a'), texB = gearTexture(10, 4, '#c98f48', '#5e3612');
  const gears = [[0.4,0.66,0.13,1],[1.55,0.6,0.1,-1.4],[2.7,0.68,0.15,0.9],[3.85,0.58,0.11,-1.25],[5.05,0.67,0.12,1.1]].map(([a, d, sz, sp], i)=>
    ({m:spinPlane(spin, sz, sz, basicMat({map:i%2 ? texB : texA, opacity:0.85}), a, DISC_R*d, 0.0008), sp}));
  group.add(glowRim('#ffb347', DISC_R*1.004, 0.004, 0.4));
  // Havada yavaşça yükselen buhar
  const HN = 12, {air, mesh:haze} = airInstances(group, HN, basicMat({map:softDot(), color:'#f0e0c8', opacity:0.07}));
  const puffs = Array.from({length:HN}, ()=>({x:rnd(-1.3,1.3), y:rnd(-1.8,1.8), s:rnd(0.25,0.45), sp:rnd(0.6,1.1), ph:rnd(0,9)}));
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3();
  const glowT = softDot();
  // Basınç göstergesi (sol üst)
  const gauge = new THREE.Group(); group.add(gauge); gauge.scale.setScalar(1.25);
  gauge.add(new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.1), basicMat({map:gaugeTexture()})));
  const ng = new THREE.PlaneGeometry(0.0045, 0.036); ng.translate(0, 0.014, 0);
  const needle = new THREE.Mesh(ng, basicMat({color:'#9a1a10'})); needle.position.z = 0.0006; gauge.add(needle);
  const cap = new THREE.Mesh(new THREE.CircleGeometry(0.005, 16), basicMat({color:'#c8913f'})); cap.position.z = 0.0008; gauge.add(cap);
  // Buhar püskürten boru (sol alt)
  const PW = 0.08, PH = PW*256/200;
  const pipe = new THREE.Group(); group.add(pipe); pipe.scale.setScalar(1.25);
  pipe.add(new THREE.Mesh(new THREE.PlaneGeometry(PW, PH), basicMat({map:pipeTexture()})));
  const mouthY = PH/2 - PH*0.03;
  const steam = Array.from({length:6}, (_, k)=>{
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.05), basicMat({map:glowT, color:'#f6efe2', opacity:0}));
    m.position.set(0, mouthY, 0.001); pipe.add(m); return {m, ph:k/6};
  });
  // Birbirine geçen iki dişli (sağ alt)
  const cog = new THREE.Group(); group.add(cog); cog.scale.setScalar(1.25);
  const bigG = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.12), basicMat({map:gearTexture(16, 6, '#e8b464', '#6a3e14')}));
  const smallG = new THREE.Mesh(new THREE.PlaneGeometry(0.072, 0.072), basicMat({map:gearTexture(10, 4, '#d09a50', '#5a3410')}));
  smallG.position.set(0.07, 0.052, 0.0005); cog.add(bigG, smallG);
  let kick = 0, needleV = 0.35;
  return {
    group, label:'assets3d/themes/steamfunk/label.jpg', background:steamBackground(),
    vinyl:'#8a5a2a', armMetal:'#c8913f', stars:0, nebula:0, dust:0.2, sheen:0.12, bloom:0.35,
    ringColor:'#ffcf6a', ringBaseColor:'#f6deb0', ringBase:0.22, ringFlash:'#ffb347',
    layout(view){
      const sl = slots(view);
      air.position.set(0, -0.12, 0); air.rotation.set(-Math.PI/2, 0, 0);
      placeAt(gauge, view, sl.ul[0], sl.ul[1], 0.03, 0.08);
      placeAt(pipe, view, sl.bl[0], sl.bl[1], 0.03, 0.08);
      placeAt(cog, view, sl.br[0], sl.br[1], 0.03, 0.08);
    },
    onNote(){ kick = 1; },
    update(dt, t){
      kick = Math.max(0, kick - 0.03*dt);
      for(const g of gears) g.m.rotation.y += g.sp*0.008*dt*(1 + kick*1.5);
      // İbre: rölantide hafif titrer, notada kırmızı bölgeye fırlar.
      const target = 0.32 + Math.sin(t*0.7)*0.06 + Math.sin(t*5.3)*0.012 + kick*0.55;
      needleV += (target - needleV)*Math.min(1, 0.12*dt);
      needle.rotation.z = (0.5 - needleV)*Math.PI*1.5;
      for(const s of steam){
        const u = (t*0.45 + s.ph) % 1;
        s.m.position.set(Math.sin(u*3 + s.ph*6)*0.006 + u*0.01, mouthY + u*0.075, 0.001);
        s.m.scale.setScalar(0.35 + u*1.1);
        s.m.material.opacity = Math.sin(Math.PI*u)*(0.4 + kick*0.35);
      }
      bigG.rotation.z -= 0.006*dt; smallG.rotation.z += 0.006*1.6*dt;
      for(let i=0;i<HN;i++){
        const p = puffs[i];
        p.y += 0.0005*p.sp*dt; p.x += Math.sin(t*0.3 + p.ph)*0.0003*dt;
        if(p.y > 1.9){ p.y = -1.9; p.x = rnd(-1.3, 1.3); }
        P.set(p.x, p.y, 0.01); S.set(p.s, p.s, 1); M.compose(P, Q, S); haze.setMatrixAt(i, M);
      }
      haze.instanceMatrix.needsUpdate = true;
    },
    dispose(){ spinDispose(world, spin); },
  };
}

// ---------------- Candy Drip ----------------
// Pembe/sarı/turkuaz/turuncu akan şeker katmanları, parlak kenar ışıkları ve
// renkli şeker serpintisi; plağın çevresinde dönen baston şeker halkası.
// Plak dışında lolipop, kirazı zıplayan cupcake, süzülen jelibon ayı ve donut.
const CANDY = ['#ff5fae','#ffd93d','#41d7f0','#ff9f3a','#b77bff','#ffffff'];
function drawSwirl(g, C, R, cols, n){
  for(let i=0;i<n;i++){
    const a0 = i/n*Math.PI*2, a1 = (i+1)/n*Math.PI*2;
    g.fillStyle = cols[i%cols.length]; g.beginPath(); g.moveTo(C, C);
    for(let k=0;k<=20;k++){ const q = k/20, a = a0 + q*2.2; g.lineTo(C + Math.cos(a)*R*q, C + Math.sin(a)*R*q); }
    for(let k=0;k<=6;k++){ const a = a0 + 2.2 + (a1-a0)*k/6; g.lineTo(C + Math.cos(a)*R, C + Math.sin(a)*R); }
    for(let k=20;k>=0;k--){ const q = k/20, a = a1 + q*2.2; g.lineTo(C + Math.cos(a)*R*q, C + Math.sin(a)*R*q); }
    g.closePath(); g.fill();
  }
}
function sprinkle(g, x, y, a, len, w, col){
  g.save(); g.translate(x, y); g.rotate(a); g.fillStyle = col;
  g.beginPath(); g.moveTo(-len/2 + w/2, -w/2); g.lineTo(len/2 - w/2, -w/2); g.arc(len/2 - w/2, 0, w/2, -Math.PI/2, Math.PI/2); g.lineTo(-len/2 + w/2, w/2); g.arc(-len/2 + w/2, 0, w/2, Math.PI/2, Math.PI*1.5); g.fill();
  g.restore();
}
function dripBand(g, S, y0, col, r){
  const edge = x=>y0 + Math.sin(x*0.011 + y0)*S*0.02;
  g.fillStyle = col; g.beginPath(); g.moveTo(-10, -10); g.lineTo(S+10, -10);
  for(let x=S+10; x>=-10; x-=S/32) g.lineTo(x, edge(x));
  g.closePath(); g.fill();
  const drips = [];
  for(let i=0;i<7;i++){
    const x = r()*S, w = S*(0.022 + r()*0.03), L = S*(0.05 + r()*0.14), y = edge(x) - 4;
    g.beginPath(); g.moveTo(x-w, y); g.lineTo(x-w, y+L); g.arc(x, y+L, w, Math.PI, 0, true); g.lineTo(x+w, y); g.closePath(); g.fill();
    drips.push([x, w, y, L]);
  }
  // Parlak şeker kenarı
  g.strokeStyle = 'rgba(255,255,255,.45)'; g.lineWidth = S*0.006; g.lineCap = 'round';
  g.beginPath(); for(let x=-10; x<=S+10; x+=S/32){ const y = edge(x) - S*0.014; if(x === -10) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke();
  for(const [x, w, y, L] of drips){ g.beginPath(); g.moveTo(x - w*0.45, y + S*0.012); g.lineTo(x - w*0.45, y + L); g.stroke(); }
}
function candySurface(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(19);
  g.fillStyle = '#41d7f0'; g.fillRect(0,0,S,S);
  dripBand(g, S, S*0.76, '#ffd93d', r);
  dripBand(g, S, S*0.52, '#ff5fae', r);
  dripBand(g, S, S*0.27, '#ff9f3a', r);
  for(let i=0;i<150;i++) sprinkle(g, r()*S, r()*S, r()*Math.PI, 18 + r()*8, 6, CANDY[Math.floor(r()*CANDY.length)]);
  // Notalar seçilebilsin diye hafif koyulaştırma + kenar gölgesi.
  g.fillStyle = 'rgba(50,0,60,.3)'; g.fillRect(0,0,S,S);
  const v = g.createRadialGradient(S/2,S/2,S*0.3,S/2,S/2,S/2);
  v.addColorStop(0,'rgba(40,0,40,0)'); v.addColorStop(1,'rgba(40,0,40,.4)');
  g.fillStyle = v; g.fillRect(0,0,S,S);
  return tex(c);
}
function candyBackground(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(27);
  const bg = g.createRadialGradient(S/2,S*0.45,0,S/2,S*0.5,S*0.72);
  bg.addColorStop(0,'#45205e'); bg.addColorStop(0.55,'#221034'); bg.addColorStop(1,'#0d0616');
  g.fillStyle = bg; g.fillRect(0,0,S,S);
  for(let i=0;i<22;i++){
    const x = r()*S, y = r()*S, rad = 30 + r()*110, col = ['255,95,174','65,215,240','255,217,61','183,123,255'][i%4];
    const gr = g.createRadialGradient(x,y,0,x,y,rad); gr.addColorStop(0,`rgba(${col},.12)`); gr.addColorStop(1,`rgba(${col},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(x,y,rad,0,Math.PI*2); g.fill();
  }
  g.globalAlpha = 0.35;
  for(let i=0;i<90;i++) sprinkle(g, r()*S, r()*S, r()*Math.PI, 14, 5, CANDY[Math.floor(r()*CANDY.length)]);
  g.globalAlpha = 1;
  return tex(c);
}
function caneTexture(){
  const W = 128, H = 32, c = canvas(W, H), g = c.getContext('2d');
  g.fillStyle = '#fff6f8'; g.fillRect(0,0,W,H);
  g.fillStyle = '#ff3d7a';
  for(const x0 of [-W/2, 0, W/2, W]){ g.beginPath(); g.moveTo(x0, H); g.lineTo(x0 + W*0.2, H); g.lineTo(x0 + W*0.2 + H, 0); g.lineTo(x0 + H, 0); g.closePath(); g.fill(); }
  const sh = g.createLinearGradient(0,0,0,H);
  sh.addColorStop(0,'rgba(80,0,30,.3)'); sh.addColorStop(0.4,'rgba(255,255,255,.35)'); sh.addColorStop(1,'rgba(80,0,30,.35)');
  g.fillStyle = sh; g.fillRect(0,0,W,H);
  return tex(c, true);
}
function sprinkleTexture(){
  const c = canvas(32, 8), g = c.getContext('2d');
  sprinkle(g, 16, 4, 0, 30, 7, '#ffffff');
  return tex(c);
}
function lollipopTexture(){
  const S = 256, c = canvas(S), g = c.getContext('2d'), C = S/2;
  g.save(); g.beginPath(); g.arc(C,C,C*0.94,0,Math.PI*2); g.clip();
  drawSwirl(g, C, C*0.96, ['#ff5fae','#ffffff','#41d7f0','#ffffff','#ffd93d','#ffffff'], 6);
  g.restore();
  g.strokeStyle = 'rgba(160,20,90,.6)'; g.lineWidth = 5; g.beginPath(); g.arc(C,C,C*0.94,0,Math.PI*2); g.stroke();
  return tex(c);
}
function cupcakeTexture(){
  const W = 256, H = 256, c = canvas(W, H), g = c.getContext('2d'), r = seeded(3);
  // Kağıt kalıp (pileli)
  g.save(); g.beginPath(); g.moveTo(W*0.25,H*0.96); g.lineTo(W*0.75,H*0.96); g.lineTo(W*0.86,H*0.56); g.lineTo(W*0.14,H*0.56); g.closePath(); g.clip();
  g.fillStyle = '#5fd0e8'; g.fillRect(0,0,W,H);
  g.fillStyle = '#35a8c6'; for(let i=0;i<9;i++){ const x = W*(0.16 + i*0.085); g.beginPath(); g.moveTo(x, H*0.56); g.lineTo(x + W*0.03, H*0.56); g.lineTo(W/2 + (x - W/2)*0.7 + W*0.02, H*0.96); g.lineTo(W/2 + (x - W/2)*0.7, H*0.96); g.closePath(); g.fill(); }
  g.restore();
  // Krema katları
  const tiers = [[0.53,0.4,0.1],[0.43,0.33,0.09],[0.34,0.24,0.08],[0.26,0.12,0.06]];
  for(const [y, rx, ry] of tiers){
    g.fillStyle = '#ff7cc0'; g.beginPath(); g.ellipse(W/2, H*y, W*rx, H*ry, 0, 0, Math.PI*2); g.fill();
    g.fillStyle = 'rgba(255,255,255,.35)'; g.beginPath(); g.ellipse(W/2 - W*rx*0.25, H*y - H*ry*0.35, W*rx*0.55, H*ry*0.35, 0, 0, Math.PI*2); g.fill();
  }
  for(let i=0;i<22;i++){ const a = r()*Math.PI*2, d = r(); sprinkle(g, W/2 + Math.cos(a)*W*0.3*d, H*0.42 + Math.sin(a)*H*0.1*d, r()*Math.PI, 14, 5, CANDY[i%5]); }
  return tex(c);
}
function cherryTexture(){
  const S = 64, c = canvas(S), g = c.getContext('2d');
  g.strokeStyle = '#3a8a2a'; g.lineWidth = 3; g.beginPath(); g.moveTo(S*0.5, S*0.4); g.quadraticCurveTo(S*0.55, S*0.1, S*0.8, S*0.04); g.stroke();
  const gr = g.createRadialGradient(S*0.42,S*0.55,2,S*0.5,S*0.64,S*0.3); gr.addColorStop(0,'#ff6a7a'); gr.addColorStop(1,'#b0101e');
  g.fillStyle = gr; g.beginPath(); g.arc(S*0.5, S*0.64, S*0.28, 0, Math.PI*2); g.fill();
  g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.ellipse(S*0.4, S*0.54, 5, 3, -0.6, 0, Math.PI*2); g.fill();
  return tex(c);
}
function gummyTexture(){
  const W = 160, H = 200, c = canvas(W, H), g = c.getContext('2d');
  const body = ()=>{
    g.beginPath();
    g.arc(W*0.3, H*0.12, W*0.1, 0, Math.PI*2); g.moveTo(W*0.8, H*0.12); g.arc(W*0.7, H*0.12, W*0.1, 0, Math.PI*2);
    g.moveTo(W*0.75, H*0.27); g.arc(W/2, H*0.27, W*0.25, 0, Math.PI*2);
    g.moveTo(W*0.8, H*0.62); g.ellipse(W/2, H*0.62, W*0.3, H*0.27, 0, 0, Math.PI*2);
    g.moveTo(W*0.3, H*0.5); g.ellipse(W*0.2, H*0.5, W*0.11, H*0.09, -0.5, 0, Math.PI*2);
    g.moveTo(W*0.9, H*0.5); g.ellipse(W*0.8, H*0.5, W*0.11, H*0.09, 0.5, 0, Math.PI*2);
    g.moveTo(W*0.4, H*0.88); g.ellipse(W*0.3, H*0.88, W*0.13, H*0.09, 0, 0, Math.PI*2);
    g.moveTo(W*0.83, H*0.88); g.ellipse(W*0.7, H*0.88, W*0.13, H*0.09, 0, 0, Math.PI*2);
  };
  g.fillStyle = 'rgba(255,55,95,.88)'; body(); g.fill();
  g.strokeStyle = 'rgba(150,0,40,.5)'; g.lineWidth = 3; body(); g.stroke();
  g.fillStyle = 'rgba(255,255,255,.35)';
  g.beginPath(); g.ellipse(W*0.4, H*0.2, W*0.08, H*0.04, -0.5, 0, Math.PI*2); g.fill();
  g.beginPath(); g.ellipse(W*0.36, H*0.52, W*0.07, H*0.12, -0.2, 0, Math.PI*2); g.fill();
  g.fillStyle = 'rgba(110,0,30,.55)';
  for(const x of [0.41, 0.59]){ g.beginPath(); g.arc(W*x, H*0.25, 4, 0, Math.PI*2); g.fill(); }
  g.beginPath(); g.ellipse(W/2, H*0.32, 6, 4, 0, 0, Math.PI*2); g.fill();
  return tex(c);
}
function donutTexture(){
  const S = 256, c = canvas(S), g = c.getContext('2d'), C = S/2, r = seeded(8);
  let gr = g.createRadialGradient(C*0.9,C*0.85,C*0.2,C,C,C);
  gr.addColorStop(0,'#f2c07a'); gr.addColorStop(1,'#b8742e');
  g.fillStyle = gr; g.beginPath(); g.arc(C,C,C*0.95,0,Math.PI*2); g.fill();
  g.fillStyle = '#ff7cc0'; g.beginPath();
  for(let i=0;i<=48;i++){ const a = i/48*Math.PI*2, rr = C*(0.78 + Math.sin(i*1.7)*0.05 + (i%6 === 0 ? 0.07 : 0)); if(i) g.lineTo(C + Math.cos(a)*rr, C + Math.sin(a)*rr); else g.moveTo(C + Math.cos(a)*rr, C + Math.sin(a)*rr); }
  g.closePath(); g.fill();
  g.fillStyle = 'rgba(255,255,255,.3)'; g.beginPath(); g.ellipse(C*0.7, C*0.6, C*0.32, C*0.12, -0.7, 0, Math.PI*2); g.fill();
  for(let i=0;i<34;i++){ const a = r()*Math.PI*2, d = C*(0.42 + r()*0.32); sprinkle(g, C + Math.cos(a)*d, C + Math.sin(a)*d, r()*Math.PI, 18, 6, CANDY[i%5]); }
  g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.arc(C,C,C*0.3,0,Math.PI*2); g.fill();
  g.globalCompositeOperation = 'source-over';
  g.strokeStyle = 'rgba(120,60,20,.45)'; g.lineWidth = 4; g.beginPath(); g.arc(C,C,C*0.3,0,Math.PI*2); g.stroke();
  return tex(c);
}
function buildCandy(world){
  const group = new THREE.Group(), spin = spinGroup(world);
  spinLayer(spin, world, candySurface(), {opacity:1}, 0.0003);
  // Plağın çevresinde kayan baston şeker halkası.
  const cane = caneTexture();
  const hoop = new THREE.Mesh(ringStrip(DISC_R*1.03, DISC_R*0.055, 200, 30, TOP_Y-0.0006), basicMat({map:cane}));
  hoop.renderOrder = -1; group.add(hoop);
  // Havada dönerek düşen şeker serpintisi
  const SPN = 36, {air, mesh:spr} = airInstances(group, SPN, basicMat({map:sprinkleTexture(), opacity:0.85}));
  const cols = CANDY.map(c=>new THREE.Color(c)), Z = new THREE.Vector3(0, 0, 1);
  const bits = Array.from({length:SPN}, (_, i)=>{ spr.setColorAt(i, cols[i%cols.length]); return {x:rnd(-1.4,1.4), y:rnd(-1.8,1.8), a:rnd(0,6.28), va:rnd(-0.04,0.04), sp:rnd(0.6,1.2)}; });
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3();
  const glowT = softDot();
  // Lolipop (sol alt)
  const lolly = new THREE.Group(), lollyBody = new THREE.Group(); group.add(lolly); lolly.add(lollyBody); lolly.scale.setScalar(1.3);
  const stick = new THREE.Mesh(new THREE.PlaneGeometry(0.007, 0.075), basicMat({color:'#f4ece6'})); stick.position.y = -0.04;
  const swirl = new THREE.Mesh(new THREE.PlaneGeometry(0.075, 0.075), basicMat({map:lollipopTexture()})); swirl.position.set(0, 0.005, 0.0005);
  const gloss = new THREE.Mesh(new THREE.PlaneGeometry(0.03, 0.02), basicMat({map:glowT, color:'#ffffff', opacity:0.55})); gloss.position.set(-0.014, 0.02, 0.001); gloss.rotation.z = 0.6;
  lollyBody.add(stick, swirl, gloss);
  // Cupcake + zıplayan kiraz (sağ alt)
  const cup = new THREE.Group(); group.add(cup); cup.scale.setScalar(1.3);
  cup.add(new THREE.Mesh(new THREE.PlaneGeometry(0.095, 0.095), basicMat({map:cupcakeTexture()})));
  const cherry = new THREE.Mesh(new THREE.PlaneGeometry(0.026, 0.026), basicMat({map:cherryTexture()})); cup.add(cherry);
  const cherryY = 0.095*0.26 + 0.004;
  // Süzülen jelibon ayı (sol üst)
  const bear = new THREE.Group(), bearBody = new THREE.Group(); group.add(bear); bear.add(bearBody); bear.scale.setScalar(1.25);
  const bearGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.14), basicMat({map:glowT, color:'#ff5f8a', blending:ADD, opacity:0.18})); bearGlow.position.z = -0.001;
  bearBody.add(bearGlow, new THREE.Mesh(new THREE.PlaneGeometry(0.064, 0.08), basicMat({map:gummyTexture()})));
  // Donut (alt orta)
  const donut = new THREE.Group(); group.add(donut); donut.scale.setScalar(1.25);
  const donutM = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.08), basicMat({map:donutTexture()})); donut.add(donutM);
  let kick = 0, hop = 0;
  return {
    group, label:'assets3d/themes/candydrip/label.jpg', background:candyBackground(),
    vinyl:'#ff8ac8', armMetal:'#f7b6d8', stars:0, nebula:0, dust:0, sheen:0.16, bloom:0.22,
    ringColor:'#ffffff', ringBaseColor:'#ffffff', ringBase:0.3, ringFlash:'#ff4fd8',
    layout(view){
      const sl = slots(view);
      air.position.set(0, -0.12, 0); air.rotation.set(-Math.PI/2, 0, 0);
      placeAt(lolly, view, sl.bl[0], sl.bl[1], 0.03, 0.08);
      placeAt(cup, view, sl.br[0], sl.br[1], 0.03, 0.08);
      placeAt(bear, view, sl.ul[0], sl.ul[1], 0.03, 0.08);
      placeAt(donut, view, 0, sl.bc[1], 0.02, 0.06);
    },
    onNote(){ kick = 1; hop = 1; },
    update(dt, t){
      kick = Math.max(0, kick - 0.04*dt);
      hop = Math.max(0, hop - 0.05*dt);
      cane.offset.x = (t*0.02) % 1;
      swirl.rotation.z = -t*0.8;
      lollyBody.rotation.z = Math.sin(t*0.7)*0.06;
      cherry.position.set(0, cherryY + Math.sin(hop*Math.PI)*0.018 + Math.abs(Math.sin(t*2.2))*0.002, 0.001);
      cherry.rotation.z = Math.sin(hop*Math.PI*2)*0.3;
      bearBody.position.y = Math.sin(t*1.1)*0.007; bearBody.rotation.z = Math.sin(t*0.8)*0.12;
      bearGlow.material.opacity = 0.14 + kick*0.25;
      donutM.rotation.z = Math.sin(t*0.5)*0.15;
      for(let i=0;i<SPN;i++){
        const b = bits[i];
        b.y -= 0.0011*b.sp*dt; b.a += b.va*dt; b.x += Math.sin(t*0.6 + i)*0.0003*dt;
        if(b.y < -1.85){ b.y = 1.85; b.x = rnd(-1.4, 1.4); }
        P.set(b.x, b.y, 0.01); Q.setFromAxisAngle(Z, b.a); S.set(0.024, 0.006, 1); M.compose(P, Q, S); spr.setMatrixAt(i, M);
      }
      spr.instanceMatrix.needsUpdate = true;
    },
    dispose(){ spinDispose(world, spin); },
  };
}

// ---------------- Cyber Circuit ----------------
// Lacivert devre kartı: turkuaz/mavi/pembe yollar, çipler, ve aynı yolların
// notada parlayan ışıklı kopyası; yollar boyunca dışa akan veri ışıkları;
// pembe neon kenar. Arka planda altıgen ızgara, havada dijital yağmur; plak
// dışında hologram çip, LED'leri yanıp sönen sunucu kulesi, dönen hologram halka.
const CYBER = ['#2ee6ff','#3f7bff','#ff3df0','#9b5bff','#2ee6ff'];
function cyberCircuitTextures(){
  const S = 1024, r = seeded(88), C = S/2, G = 16;
  const base = canvas(S), g = base.getContext('2d'), glow = canvas(S), h = glow.getContext('2d');
  const bg = g.createRadialGradient(C,C,0,C,C,C);
  bg.addColorStop(0,'#16124a'); bg.addColorStop(0.6,'#0d0b30'); bg.addColorStop(1,'#07061c');
  g.fillStyle = bg; g.fillRect(0,0,S,S);
  g.strokeStyle = 'rgba(90,120,255,.06)'; g.lineWidth = 1;
  for(let x=0;x<S;x+=32){ g.beginPath(); g.moveTo(x,0); g.lineTo(x,S); g.moveTo(0,x); g.lineTo(S,x); g.stroke(); }
  const DX = [1,1,0,-1,-1,-1,0,1], DY = [0,1,1,1,0,-1,-1,-1], routes = [];
  for(let i=0;i<70;i++){
    let x = Math.round(r()*S/G)*G, y = Math.round(r()*S/G)*G, dir = Math.floor(r()*8);
    const pts = [[x, y]], n = 3 + Math.floor(r()*6);
    for(let k=0;k<n;k++){
      if(r() < 0.5) dir = (dir + (r() < 0.5 ? 1 : 7)) % 8;
      const L = G*(2 + Math.floor(r()*6)); x += DX[dir]*L; y += DY[dir]*L; pts.push([x, y]);
    }
    routes.push({pts, col:CYBER[Math.floor(r()*CYBER.length)], w:r() < 0.3 ? 4 : 2.2});
  }
  const draw = (ctx, alpha, k, halo)=>{
    ctx.lineJoin = 'round'; ctx.globalAlpha = alpha;
    for(const rt of routes){
      if(halo){ ctx.shadowColor = rt.col; ctx.shadowBlur = 10; }
      ctx.strokeStyle = ctx.fillStyle = rt.col; ctx.lineWidth = rt.w*k;
      ctx.beginPath(); rt.pts.forEach(([x, y], i)=>i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
      const [ex, ey] = rt.pts[rt.pts.length-1], [sx, sy] = rt.pts[0];
      ctx.beginPath(); ctx.arc(ex, ey, rt.w*1.8, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(sx, sy, rt.w*1.5, 0, Math.PI*2); ctx.stroke();
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
  };
  draw(g, 0.34, 1, false);
  for(let i=0;i<14;i++){
    const w = G*(2 + Math.floor(r()*4)), hh = G*(2 + Math.floor(r()*3)), x = Math.round(r()*S/G)*G, y = Math.round(r()*S/G)*G;
    g.fillStyle = '#1a1746'; g.fillRect(x, y, w, hh);
    g.strokeStyle = 'rgba(120,160,255,.5)'; g.lineWidth = 1.5; g.strokeRect(x, y, w, hh);
    g.strokeStyle = 'rgba(180,200,255,.35)'; g.lineWidth = 2; g.beginPath();
    for(let p=x+5; p<x+w-3; p+=7){ g.moveTo(p, y-5); g.lineTo(p, y); g.moveTo(p, y+hh); g.lineTo(p, y+hh+5); }
    g.stroke();
    if(r() < 0.6){ h.fillStyle = CYBER[Math.floor(r()*CYBER.length)]; h.globalAlpha = 0.5; h.fillRect(x+4, y+4, w*0.3, hh*0.3); h.globalAlpha = 1; }
  }
  draw(h, 0.9, 0.8, true);
  return {base:tex(base), glow:tex(glow)};
}
function cyberBackground(){
  const S = 1024, c = canvas(S), g = c.getContext('2d'), r = seeded(66);
  const bg = g.createRadialGradient(S/2,S*0.45,0,S/2,S*0.5,S*0.72);
  bg.addColorStop(0,'#1a0f4a'); bg.addColorStop(0.5,'#0a0624'); bg.addColorStop(1,'#030208');
  g.fillStyle = bg; g.fillRect(0,0,S,S);
  g.strokeStyle = 'rgba(80,200,255,.06)'; g.lineWidth = 1.5;
  const R = 34, hw = R*Math.sqrt(3);
  for(let row=0; row*R*1.5 < S+R; row++){
    for(let col=0; col*hw < S+hw; col++){
      const cx = col*hw + (row%2 ? hw/2 : 0), cy = row*R*1.5;
      g.beginPath(); for(let k=0;k<6;k++){ const a = Math.PI/6 + k*Math.PI/3; const x = cx + Math.cos(a)*R, y = cy + Math.sin(a)*R; if(k) g.lineTo(x, y); else g.moveTo(x, y); } g.closePath(); g.stroke();
    }
  }
  for(let i=0;i<60;i++){
    const x = r()*S, y = r()*S, rad = 6 + r()*16, col = r() < 0.5 ? '46,230,255' : '255,61,240';
    const gr = g.createRadialGradient(x,y,0,x,y,rad); gr.addColorStop(0,`rgba(${col},.5)`); gr.addColorStop(1,`rgba(${col},0)`);
    g.fillStyle = gr; g.fillRect(x-rad, y-rad, rad*2, rad*2);
  }
  const hz = g.createLinearGradient(0, S*0.7, 0, S);
  hz.addColorStop(0,'rgba(255,61,240,0)'); hz.addColorStop(1,'rgba(255,61,240,.14)');
  g.fillStyle = hz; g.fillRect(0, S*0.7, S, S*0.3);
  return tex(c);
}
// Dijital yağmur sütunu: alta doğru parlaklaşan karakterler (baş en altta).
function glyphColumnTexture(){
  const W = 32, H = 512, c = canvas(W, H), g = c.getContext('2d'), r = seeded(14), ch = '01ABCDEF<>/#$%';
  g.font = 'bold 22px monospace'; g.textAlign = 'center'; g.textBaseline = 'middle';
  for(let i=0;i<20;i++){ const a = Math.pow(i/19, 1.6); g.fillStyle = `rgba(255,255,255,${0.08 + a*0.92})`; g.fillText(ch[Math.floor(r()*ch.length)], W/2, 12 + i*25); }
  return tex(c);
}
function chipTexture(){
  const S = 256, c = canvas(S), g = c.getContext('2d'), C = S/2;
  g.strokeStyle = '#7fe9ff'; g.lineWidth = 6;
  g.beginPath();
  for(let i=0;i<7;i++){ const p = S*0.25 + i*S*0.083; g.moveTo(p, S*0.06); g.lineTo(p, S*0.2); g.moveTo(p, S*0.8); g.lineTo(p, S*0.94); g.moveTo(S*0.06, p); g.lineTo(S*0.2, p); g.moveTo(S*0.8, p); g.lineTo(S*0.94, p); }
  g.stroke();
  g.fillStyle = '#141235'; g.fillRect(S*0.18, S*0.18, S*0.64, S*0.64);
  g.strokeStyle = '#2ee6ff'; g.lineWidth = 4; g.strokeRect(S*0.18, S*0.18, S*0.64, S*0.64);
  g.strokeStyle = 'rgba(155,91,255,.8)'; g.lineWidth = 3; g.strokeRect(S*0.3, S*0.3, S*0.4, S*0.4);
  g.strokeStyle = 'rgba(46,230,255,.5)'; g.lineWidth = 2; g.beginPath();
  for(const [x0, y0, x1, y1] of [[0.3,0.4,0.22,0.4],[0.7,0.45,0.78,0.45],[0.45,0.3,0.45,0.22],[0.55,0.7,0.55,0.78],[0.3,0.6,0.24,0.66]]){ g.moveTo(S*x0, S*y0); g.lineTo(S*x1, S*y1); }
  g.stroke();
  const gr = g.createRadialGradient(C,C,0,C,C,S*0.16); gr.addColorStop(0,'#ffd0fb'); gr.addColorStop(0.4,'#ff3df0'); gr.addColorStop(1,'rgba(255,61,240,0)');
  g.fillStyle = gr; g.fillRect(S*0.3, S*0.3, S*0.4, S*0.4);
  return tex(c);
}
function rackTexture(){
  const W = 160, H = 256, c = canvas(W, H), g = c.getContext('2d');
  const gr = g.createLinearGradient(0,0,W,0); gr.addColorStop(0,'#0e0c26'); gr.addColorStop(0.5,'#1c1946'); gr.addColorStop(1,'#0b0a20');
  g.fillStyle = gr; g.fillRect(W*0.08, H*0.02, W*0.84, H*0.96);
  g.strokeStyle = 'rgba(46,230,255,.7)'; g.lineWidth = 3; g.strokeRect(W*0.08, H*0.02, W*0.84, H*0.96);
  for(let i=0;i<8;i++){
    const y = H*(0.07 + i*0.113);
    g.fillStyle = '#25225a'; g.fillRect(W*0.14, y, W*0.72, H*0.08);
    g.strokeStyle = 'rgba(120,160,255,.35)'; g.lineWidth = 1.5; g.beginPath();
    for(let x=W*0.2; x<W*0.6; x+=6){ g.moveTo(x, y + H*0.018); g.lineTo(x, y + H*0.062); }
    g.stroke();
  }
  return tex(c);
}
function holoRingTexture(segs, gap){
  const S = 256, c = canvas(S), g = c.getContext('2d'), C = S/2;
  g.strokeStyle = '#ffffff'; g.lineCap = 'butt';
  g.lineWidth = 10; for(let i=0;i<segs;i++){ const a = i/segs*Math.PI*2; g.beginPath(); g.arc(C,C,C*0.86,a,a + Math.PI*2/segs*(1-gap)); g.stroke(); }
  g.lineWidth = 2; g.globalAlpha = 0.6; g.beginPath(); g.arc(C,C,C*0.72,0,Math.PI*2); g.stroke();
  for(let i=0;i<36;i++){ const a = i/36*Math.PI*2; g.beginPath(); g.moveTo(C + Math.cos(a)*C*0.74, C + Math.sin(a)*C*0.74); g.lineTo(C + Math.cos(a)*C*(i%3 ? 0.78 : 0.82), C + Math.sin(a)*C*(i%3 ? 0.78 : 0.82)); g.stroke(); }
  return tex(c);
}
function buildCyber(world){
  const group = new THREE.Group(), spin = spinGroup(world);
  const tx = cyberCircuitTextures();
  spinLayer(spin, world, tx.base, {opacity:1}, 0.0003);
  const lit = spinLayer(spin, world, tx.glow, {blending:ADD, opacity:0.55}, 0.0006);
  // Yollar boyunca merkezden dışa akan veri ışıkları.
  const dotT = softDot(), rs = seeded(4);
  const pulses = Array.from({length:14}, (_, i)=>{
    const p = {a:rs()*Math.PI*2, u:rs(), sp:0.7 + rs()*0.7};
    p.m = spinPlane(spin, 0.022, 0.022, basicMat({map:dotT, color:i%2 ? '#ff3df0' : '#2ee6ff', blending:ADD, opacity:0}), p.a, DISC_R*0.5, 0.0035);
    return p;
  });
  group.add(glowRim('#ff3df0', DISC_R*1.006, 0.007, 0.85), glowRim('#2ee6ff', DISC_R*1.03, 0.0025, 0.45));
  // Dijital yağmur
  const RN = 24, {air, mesh:rain} = airInstances(group, RN, basicMat({map:glyphColumnTexture(), blending:ADD, opacity:0.35}));
  const rcols = ['#2ee6ff','#ff3df0','#3f7bff'].map(c=>new THREE.Color(c));
  const drops = Array.from({length:RN}, (_, i)=>{ rain.setColorAt(i, rcols[i%3]); return {x:rnd(-1.4,1.4), y:rnd(-1.8,1.8), sp:rnd(0.8,1.6), l:rnd(0.18,0.32)}; });
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3();
  const glowT = softDot();
  // Hologram çip + tarama çizgisi (sol alt)
  const chip = new THREE.Group(), chipBody = new THREE.Group(); group.add(chip); chip.add(chipBody); chip.scale.setScalar(1.3);
  const chipGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.17, 0.17), basicMat({map:glowT, color:'#2ee6ff', blending:ADD, opacity:0.25})); chipGlow.position.z = -0.001;
  const scan = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.004), basicMat({map:glowT, color:'#7ff3ff', blending:ADD, opacity:0.8})); scan.position.z = 0.001;
  chipBody.add(chipGlow, new THREE.Mesh(new THREE.PlaneGeometry(0.085, 0.085), basicMat({map:chipTexture(), opacity:0.95})), scan);
  // Sunucu kulesi + LED'ler (sağ alt)
  const RW = 0.06, RH = RW*256/160;
  const rack = new THREE.Group(); group.add(rack); rack.scale.setScalar(1.3);
  rack.add(new THREE.Mesh(new THREE.PlaneGeometry(RW, RH), basicMat({map:rackTexture()})));
  const leds = Array.from({length:16}, (_, i)=>{
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.0042, 0.0042), basicMat({color:CYBER[i%4], blending:ADD, opacity:0.3}));
    const row = i >> 1; m.position.set(RW*(0.22 + (i&1)*0.1), RH/2 - RH*(0.07 + row*0.113 + 0.04), 0.0005); rack.add(m);
    return {m, on:false, next:0};
  });
  // Dönen hologram halka (sol üst)
  const holo = new THREE.Group(); group.add(holo); holo.scale.setScalar(1.25);
  const ringA = new THREE.Mesh(new THREE.PlaneGeometry(0.11, 0.11), basicMat({map:holoRingTexture(6, 0.25), color:'#2ee6ff', blending:ADD, opacity:0.75}));
  const ringB = new THREE.Mesh(new THREE.PlaneGeometry(0.075, 0.075), basicMat({map:holoRingTexture(3, 0.4), color:'#ff3df0', blending:ADD, opacity:0.75}));
  const core = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.05), basicMat({map:glowT, color:'#b9f6ff', blending:ADD, opacity:0.6}));
  ringB.position.z = 0.0005; core.position.z = 0.001; holo.add(ringA, ringB, core);
  let kick = 0;
  return {
    group, label:'assets3d/themes/cybercircuit/label.jpg', background:cyberBackground(),
    vinyl:'#1a1440', armMetal:'#9aa6c8', stars:0.2, nebula:0.06, dust:0, sheen:0.08, bloom:0.5,
    ringColor:'#2ee6ff', ringBaseColor:'#8fe9ff', ringBase:0.2, ringFlash:'#ff3df0',
    layout(view){
      const sl = slots(view);
      air.position.set(0, -0.12, 0); air.rotation.set(-Math.PI/2, 0, 0);
      placeAt(chip, view, sl.bl[0], sl.bl[1], 0.03, 0.08);
      placeAt(rack, view, sl.br[0], sl.br[1], 0.03, 0.08);
      placeAt(holo, view, sl.ul[0], sl.ul[1], 0.03, 0.08);
    },
    onNote(){ kick = 1; },
    update(dt, t){
      kick = Math.max(0, kick - 0.035*dt);
      lit.material.opacity = 0.32 + beatAt(t)*0.18 + kick*0.45;
      for(const p of pulses){
        p.u += 0.004*p.sp*dt*(1 + kick*2);
        if(p.u > 1){ p.u = 0; p.a = Math.random()*Math.PI*2; }
        const d = DISC_R*(0.32 + p.u*0.64);
        p.m.position.set(Math.cos(p.a)*d, p.m.position.y, Math.sin(p.a)*d);
        p.m.material.opacity = Math.sin(Math.PI*p.u)*0.9;
      }
      chipBody.position.y = Math.sin(t*1.2)*0.005;
      scan.position.y = Math.sin(t*1.6)*0.038; scan.material.opacity = 0.5 + kick*0.5;
      chipGlow.material.opacity = 0.2 + Math.sin(t*2)*0.05 + kick*0.3;
      for(const l of leds){
        if(t > l.next){ l.on = Math.random() < 0.55; l.next = t + rnd(0.08, 0.5); }
        l.m.material.opacity = kick > 0.6 ? 1 : (l.on ? 0.95 : 0.2);
      }
      ringA.rotation.z = t*0.5; ringB.rotation.z = -t*0.9;
      core.material.opacity = 0.45 + Math.sin(t*3)*0.12 + kick*0.4;
      holo.children[0].material.opacity = 0.6 + kick*0.35;
      for(let i=0;i<RN;i++){
        const d = drops[i];
        d.y -= 0.0045*d.sp*dt;
        if(d.y < -1.95){ d.y = 1.95; d.x = rnd(-1.4, 1.4); }
        P.set(d.x, d.y, 0.01); S.set(0.016, d.l, 1); M.compose(P, Q, S); rain.setMatrixAt(i, M);
      }
      rain.instanceMatrix.needsUpdate = true;
    },
    dispose(){ spinDispose(world, spin); },
  };
}

const BUILDERS = {neon:buildRetro, synthbeats:buildSynth, urbansounds:buildUrban, cosmicsoundwave:buildCosmic, hellsanthem:buildHell, lofichillhop:buildLofi,
  crystalrune:buildCrystal, steamfunk:buildSteam, candydrip:buildCandy, cybercircuit:buildCyber};

export function buildThemeScene(key, world){
  const b = BUILDERS[key] || BUILDERS.neon;
  const sc = b(world);
  sc.key = key;
  sc.labelPromise = sc.label ? loadTexture(sc.label) : Promise.resolve(null);
  return sc;
}
export function disposeThemeScene(sc){
  if(!sc) return;
  if(sc.dispose) sc.dispose();
  sc.group.traverse(o=>{
    if(o.geometry) o.geometry.dispose();
    if(o.material){ if(o.material.map) o.material.map.dispose(); o.material.dispose(); }
  });
  if(sc.group.parent) sc.group.parent.remove(sc.group);
  if(sc.background) sc.background.dispose();
}
