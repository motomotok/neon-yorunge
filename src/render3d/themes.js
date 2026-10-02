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

// ---------------- Retro Beats ----------------
// Sıcak, kenarları kararan koyu arka plan (Retro Beats konsepti).
function vignetteTexture(inner, outer){
  const S = 512, c = canvas(S), g = c.getContext('2d');
  const gr = g.createRadialGradient(S*0.55, S*0.35, 0, S/2, S/2, S*0.75);
  gr.addColorStop(0, inner); gr.addColorStop(1, outer);
  g.fillStyle = gr; g.fillRect(0,0,S,S);
  return tex(c);
}
function buildRetro(){
  const group = new THREE.Group();
  // Plak kenarında bakır-turuncu parlayan çember (konseptteki sıcak kenar ışığı).
  const rim = glowRim('#ff8a3d', DISC_R*1.008, 0.0035, 0.55);
  const rimHalo = glowRim('#ff6a2a', DISC_R*1.008, 0.018, 0.1);
  group.add(rim, rimHalo);
  return {
    group, label:'assets3d/themes/neon/label.jpg', background:vignetteTexture('#2b1610', '#070302'),
    vinyl:'#d9d3cf', armMetal:'#b8925a', stars:0, nebula:0, dust:0, sheen:0.1, bloom:0.4,
    // Halkalar parlak çizgi değil, plağa kazınmış soluk oluk gibi.
    ringColor:'#d9b48a', ringCoreScale:0.55,
    update(dt, t){ rimHalo.material.opacity = 0.08 + Math.sin(t*2)*0.03; },
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
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({color:col, transparent:true, opacity:0.3, depthWrite:false, blending:ADD}));
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
  const rim = new THREE.Mesh(ringStrip(DISC_R*1.012, 0.008, 200, 1, TOP_Y+0.002),
    new THREE.MeshBasicMaterial({map:rimTex, transparent:true, depthWrite:false, blending:ADD, side:THREE.DoubleSide}));
  const rimHalo = new THREE.Mesh(ringStrip(DISC_R*1.012, 0.04, 200, 1, TOP_Y+0.0018),
    new THREE.MeshBasicMaterial({map:rimTex, transparent:true, opacity:0.25, depthWrite:false, blending:ADD, side:THREE.DoubleSide}));
  group.add(rim, rimHalo);
  // Plağın çevresinde müziğe göre zıplayan ekolayzer çubukları.
  const BARS = 180;
  const barGeo = new THREE.PlaneGeometry(1, 1); barGeo.rotateX(-Math.PI/2); barGeo.translate(0.5, 0, 0);
  const bars = new THREE.InstancedMesh(barGeo, new THREE.MeshBasicMaterial({transparent:true, opacity:0.6, depthWrite:false, blending:ADD}), BARS);
  const cPink = new THREE.Color('#ff2f8a'), cCyan = new THREE.Color('#19e3ff'), tmpC = new THREE.Color();
  for(let i=0;i<BARS;i++){
    const u = i/BARS, k = 0.5 - 0.5*Math.cos(u*Math.PI*2);
    bars.setColorAt(i, tmpC.copy(cPink).lerp(cCyan, k));
  }
  bars.frustumCulled = false;
  group.add(bars);
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), P = new THREE.Vector3(), Y = new THREE.Vector3(0,1,0);
  const seeds = Array.from({length:BARS}, ()=>Math.random()*10);
  return {
    group, label:'assets3d/themes/synthbeats/label.jpg',
    vinyl:'#d8d8e8', armMetal:'#c9ced8', stars:0.15, nebula:0.1, dust:0, bloom:0.5, ringCoreScale:0.75,
    update(dt, t, f){
      const beat = Math.pow(Math.max(0, Math.sin(t*Math.PI*2*1.6)), 6);   // ~96 BPM vuruş
      const energy = 0.6 + (f.inGame && f.player ? Math.min(1, (f.player.speed-1.5)*0.4) : 0);
      for(let i=0;i<BARS;i++){
        const a = i/BARS*Math.PI*2, s0 = seeds[i];
        const h = 0.008 + (Math.abs(Math.sin(t*3.1+s0)) * 0.025 + Math.abs(Math.sin(t*7.3+s0*2))*0.012 + beat*0.03) * energy;
        Q.setFromAxisAngle(Y, -a);
        P.set(Math.cos(a)*DISC_R*1.04, TOP_Y-0.004, Math.sin(a)*DISC_R*1.04);
        S.set(h, 1, 0.006);
        M.compose(P, Q, S); bars.setMatrixAt(i, M);
      }
      bars.instanceMatrix.needsUpdate = true;
      rimHalo.material.opacity = 0.12 + beat*0.15;
      rimTex.offset.x = (t*0.05)%1;
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
      if(Math.random()<0.28){ g.fillStyle = Math.random()<0.5 ? 'rgba(255,190,110,.35)' : 'rgba(120,200,255,.25)'; g.fillRect(wx,wy,5,7); }
    }
    x += bw + 6;
  }
  // Neon tabela/bokeh lekeleri
  const cols = ['255,47,160','255,140,60','60,220,255','170,90,255'];
  for(let i=0;i<70;i++){
    const r = 12+Math.random()*60, bx = Math.random()*W, byy = Math.random()*H*0.9;
    const gr = g.createRadialGradient(bx,byy,0,bx,byy,r), col = cols[i%cols.length], a = 0.07+Math.random()*0.16;
    gr.addColorStop(0,`rgba(${col},${a})`); gr.addColorStop(1,`rgba(${col},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(bx,byy,r,0,Math.PI*2); g.fill();
  }
  const vig = g.createRadialGradient(W/2,H/2,H*0.2,W/2,H/2,H*0.75);
  vig.addColorStop(0,'rgba(0,0,0,0.35)'); vig.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle = vig; g.fillRect(0,0,W,H);
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
  return {
    group, label:'assets3d/themes/urbansounds/label.jpg', background:cityTexture(),
    vinyl:'#d9d3cf', armMetal:'#c9ced8', stars:0, nebula:0.0, dust:0, bloom:0.4,
    // Halka çekirdek çizgilerini sönükleştir — zincir onların yerini alır.
    ringCoreScale:0.25,
    update(){},
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
    const gr = g.createRadialGradient(x,y,0,x,y,r); gr.addColorStop(0,`rgba(${col},.18)`); gr.addColorStop(1,`rgba(${col},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(x,y,r,0,Math.PI*2); g.fill();
  }
  for(let i=0;i<900;i++){
    const a = Math.random(); g.fillStyle = `rgba(255,255,255,${a*a})`;
    const s = Math.random()<0.05 ? 1.8 : 0.9; g.fillRect(Math.random()*W, Math.random()*W, s, s);
  }
  return tex(c);
}
function buildCosmic(world){
  const group = new THREE.Group();
  const gTex = galaxyTexture();
  const gg = new THREE.CircleGeometry(DISC_R*0.98, 96); gg.rotateX(-Math.PI/2);
  const galaxy = new THREE.Mesh(gg, new THREE.MeshBasicMaterial({map:gTex, transparent:true, opacity:0.45, depthWrite:false, blending:ADD}));
  galaxy.position.y = TOP_Y + 0.0007;
  group.add(galaxy);
  // Plağın dışında yüzen gezegenler (oyun öğeleriyle karışmasın diye halkaların dışında).
  const planets = [];
  const defs = [[0.58, 0.5, 0.022, '#9aa6c4', 0.05],[0.62, 2.4, 0.016, '#6fa8ff', 0.035],[0.55, 4.1, 0.03, '#c9b8ff', 0.07],[0.66, 5.3, 0.012, '#e6edf7', 0.025]];
  for(const [r, a, s, col, y] of defs){
    const m = new THREE.Mesh(new THREE.SphereGeometry(s, 24, 16), new THREE.MeshStandardMaterial({color:col, roughness:0.7, metalness:0.1, emissive:col, emissiveIntensity:0.12}));
    m.userData = {r, a, y, sp:0.04+Math.random()*0.05};
    planets.push(m); group.add(m);
  }
  const rim = glowRim('#5ad1ff', DISC_R*1.012, 0.004, 0.7);
  group.add(rim);
  return {
    group, label:'assets3d/themes/cosmicsoundwave/label.jpg', background:spaceTexture(),
    vinyl:'#9fb4ff', armMetal:'#c9ced8', stars:0.7, nebula:0.15, dust:0, bloom:0.5, ringCoreScale:0.7,
    update(dt, t){
      galaxy.rotation.y -= 0.0012*dt;
      for(const p of planets){
        const u = p.userData, a = u.a + t*u.sp;
        p.position.set(Math.cos(a)*u.r, u.y + Math.sin(t*0.8+u.a)*0.01, Math.sin(a)*u.r);
        p.rotation.y += 0.004*dt;
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
