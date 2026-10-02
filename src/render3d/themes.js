// Tema sahneleri: her tema (data.js THEMES) 3D'de kendi ortamını kurar —
// plak etiketi, plak/kenar rengi, kol rengi, arka plan ve temaya özel
// efektler. Referans: kullanıcının verdiği 4 konsept görseli.
//   neon            → Retro Beats      (ücretsiz, varsayılan)
//   synthbeats      → Synth Beats      (neon çizgiler, ekolayzer halkası)
//   urbansounds     → Urban Sounds     (altın zincir halkalar, neon şehir)
//   cosmicsoundwave → Cosmic Soundwave (galaksi sarmalı, gezegenler)
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
  return {bl:[-0.8,-0.5], br:[0.84,-0.22], ul:[-0.8,0.42], ur:[0.82,0.38], bc:[0,-0.9], sky:0.55};
}
// Nesneyi ekran konumuna (nx,ny) karşılık gelen yere koyar ve kameraya
// döndürür. Plağa ya da kola fazla yakınsa gizler (kare ekranlarda yer yok).
function placeAt(o, view, nx, ny, y, clear){
  const p = view.ground(nx, ny, y);
  const r = DISC_R + (clear||0.06);
  const nearArm = p && Math.hypot(p.x-0.36, p.z+0.42) < 0.1 + (clear||0.06);
  o.visible = !!p && Math.hypot(p.x, p.z) > r && !nearArm;
  if(p) o.position.set(p.x, y, p.z);
  o.rotation.set(-view.tilt, 0, 0);
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
    ringColor:'#d9b48a', ringCoreScale:0.55,
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
    vinyl:'#d8d8e8', armMetal:'#c9ced8', stars:0.1, nebula:0.05, dust:0, bloom:0.3, ringCoreScale:0.36, ringColor:'#5fc3d3',
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
// Altın zincir halkası dokusu: yatay (üstten görülen) ve dikey (yandan
// görülen) baklalar art arda.
function chainTexture(){
  const c = canvas(128, 32), g = c.getContext('2d');
  const gold = g.createLinearGradient(0,0,0,32);
  gold.addColorStop(0,'#fff0b0'); gold.addColorStop(0.45,'#d9a43a'); gold.addColorStop(1,'#7a5214');
  g.lineWidth = 6; g.strokeStyle = gold;
  g.beginPath(); g.ellipse(32,16,26,11,0,0,Math.PI*2); g.stroke();
  g.fillStyle = gold; g.fillRect(70,11,52,10);
  g.fillStyle = 'rgba(255,255,255,.55)'; g.fillRect(74,12,44,2);
  return tex(c, true);
}
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
  const ct = chainTexture();
  const chains = [];
  for(const k of RING_K){
    const circ = 2*Math.PI*k, links = Math.round(circ/0.05);
    const m = new THREE.Mesh(ringStrip(k, 0.018, 360, links, TOP_Y+0.0016),
      new THREE.MeshBasicMaterial({map:ct, transparent:true, alphaTest:0.05, depthWrite:false, side:THREE.DoubleSide}));
    chains.push(m); group.add(m);
  }

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
    vinyl:'#d9d3cf', armMetal:'#c9ced8', stars:0, nebula:0.0, dust:0, bloom:0.3,
    // Halka çekirdek çizgilerini sönükleştir — zincir onların yerini alır.
    ringCoreScale:0.25,
    layout(view){
      V = view; const sl = slots(view);
      placeAt(signG, view, sl.ul[0], sl.ul[1], 0.03, 0.1);
      placeAt(road, view, 0, sl.bc[1], -0.1, -1); road.visible = true;
      placeAt(sky, view, 0, sl.sky, -0.1, -1); sky.visible = true;
    },
    update(dt, t){
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
// Satürn halkası: RingGeometry'nin düzlemsel UV'si için kare doku üzerine
// eş merkezli bantlar (Cassini boşluğu dahil).
function saturnRingTexture(rIn, rOut){
  const S = 512, c = canvas(S), g = c.getContext('2d'), C = S/2;
  for(let px = rIn*C; px <= C; px += 1){
    const u = (px/C - rIn)/(rOut - rIn);
    let a = 0.25 + 0.45*Math.sin(u*31)*Math.sin(u*7.3) * 0.5 + 0.35;
    if(u > 0.62 && u < 0.68) a *= 0.12;            // Cassini boşluğu
    if(u < 0.12) a *= u/0.12;
    if(u > 0.92) a *= (1-u)/0.08;
    const l = 200 + Math.round(40*Math.sin(u*13));
    g.strokeStyle = `rgba(${l},${l-22},${l-60},${Math.max(0, Math.min(1, a))})`;
    g.lineWidth = 1.2; g.beginPath(); g.arc(C, C, px, 0, Math.PI*2); g.stroke();
  }
  return tex(c);
}
function buildCosmic(world){
  const group = new THREE.Group();
  const gTex = galaxyTexture();
  const gg = new THREE.CircleGeometry(DISC_R*0.98, 96); gg.rotateX(-Math.PI/2);
  const galaxy = new THREE.Mesh(gg, new THREE.MeshBasicMaterial({map:gTex, transparent:true, opacity:0.26, depthWrite:false, blending:ADD}));
  galaxy.position.y = TOP_Y + 0.0007;
  group.add(galaxy);
  const rim = glowRim('#5ad1ff', DISC_R*1.012, 0.0035, 0.45);
  group.add(rim);

  // --- Satürn: bantlı gezegen + eğik halka. Halkanın arka yarısı gezegenin
  // arkasında kalır (gerçek derinlik), gezegen kendi ekseninde yavaşça döner.
  const saturn = new THREE.Group(); group.add(saturn);
  const sTilt = new THREE.Group(); sTilt.rotation.z = -0.38; saturn.add(sTilt);
  const SR = 0.036;
  const sBody = new THREE.Mesh(new THREE.SphereGeometry(SR, 40, 24),
    new THREE.MeshStandardMaterial({map:planetTexture(['#e9d3a3','#d8b98a','#c9a56e','#efdcb4','#b98f5c','#e2c79a'], 'rgba(255,240,220,.5)'), roughness:0.85, metalness:0, emissive:'#3a2a18', emissiveIntensity:0.25}));
  sTilt.add(sBody);
  const RIN = 1.35, ROUT = 2.35;
  const ringMat = basicMat({map:saturnRingTexture(RIN/ROUT, 1), color:'#e8dcc4', opacity:0.85});
  const sRing = new THREE.Mesh(new THREE.RingGeometry(SR*RIN, SR*ROUT, 96, 1), ringMat);
  sRing.rotation.x = -1.22;        // halkayı neredeyse yandan gör
  sTilt.add(sRing);

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
    vinyl:'#9fb4ff', armMetal:'#c9ced8', stars:0.5, nebula:0.08, dust:0, bloom:0.3, ringCoreScale:0.36, ringColor:'#6fa6d6',
    layout(view){
      V = view; const sl = slots(view);
      placeAt(saturn, view, sl.bl[0], sl.bl[1], 0.05, 0.1);
      placeAt(ice, view, sl.ul[0], sl.ul[1], 0.05, 0.08);
    },
    update(dt, t){
      galaxy.rotation.y -= 0.0012*dt;
      sBody.rotation.y += 0.0016*dt;
      saturn.children[0].position.y = Math.sin(t*0.5)*0.004;
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

const BUILDERS = {neon:buildRetro, synthbeats:buildSynth, urbansounds:buildUrban, cosmicsoundwave:buildCosmic};

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
