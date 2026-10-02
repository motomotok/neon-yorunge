// Beat Orbit — 3D (2.5D) çizim katmanı giriş noktası.
// esbuild ile www/render3d-bundle.js'e IIFE olarak paketlenir
// (npm run build:3d) ve window.Render3D'yi tanımlar. Oyun mantığı (engine.js)
// bu dosyadan habersizdir: render.js her karede bir "frame" nesnesi
// (oyun durumunun salt-okunur bir anlık görüntüsü) gönderir, burası çizer.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { World } from './world.js';
import { Entities } from './entities.js';
import { resolveSlot, loadErrors } from './assets.js';

// Kalite önayarları. 'auto' orta ile başlar, FPS'e göre iner/çıkar.
const QUALITY = {
  low:    {dpr:1.0, bloom:false, bloomScale:0,   msaa:0},
  medium: {dpr:1.5, bloom:true,  bloomScale:0.5, msaa:0},
  high:   {dpr:2.0, bloom:true,  bloomScale:1.0, msaa:4},
};
const ORDER = ['low','medium','high'];

let renderer, scene, camera, composer, bloomPass, renderPass, world, entities;
let W=1, H=1, base=1, qualityPref='auto', qualityLive='medium', failed=false, onFail=null;
let camCfg = {tilt:68, fov:38, zoom:1};
let bgDef = null;
// Ekran konumu (NDC, -1..1) -> yer düzlemi (base birimi). Tema süsleri
// (themes.js) plağın dışındaki boş alanları bununla bulur; her en-boy
// oranında doğru yere oturur.
const _rd = new THREE.Vector3();
const view = {aspect:1, tilt:0, ground(nx, ny, y){
  if(!camera) return null;
  _rd.set(nx, ny, 0.5).unproject(camera).sub(camera.position).normalize();
  const o = camera.position, k = ((y||0)*base - o.y)/_rd.y;
  if(!(k > 0)) return null;
  return {x:(o.x + _rd.x*k)/base, z:(o.z + _rd.z*k)/base};
}};
const fps = {acc:0, frames:0, lowFor:0, highFor:0, downgraded:false, value:60};

function supported(){
  try{
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  }catch(e){ return false; }
}

function init(opts){
  if(renderer) return true;
  if(!supported()) return false;
  const manifest = opts.manifest || {};
  onFail = opts.onFail || null;
  qualityPref = opts.quality || 'auto';
  Object.assign(camCfg, manifest.camera || {});
  try{
    renderer = new THREE.WebGLRenderer({canvas:opts.canvas, antialias:false, alpha:false, powerPreference:'high-performance'});
  }catch(e){ console.warn('[Render3D] WebGL başlatılamadı', e); return false; }
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = manifest.exposure || 1.05;
  opts.canvas.addEventListener('webglcontextlost', e=>{ e.preventDefault(); fail('context-lost'); });

  scene = new THREE.Scene();
  scene.background = new THREE.Color('#170a08');
  camera = new THREE.PerspectiveCamera(camCfg.fov, 1, 1, 10000);

  world = new World(scene, manifest);
  entities = new Entities(scene, manifest, opts.hooks || {});
  entities.onNote = ring=>world.flashRing(ring);
  resolveSlot((manifest.background||{}).image).then(d=>{ if(d && d.texture){ bgDef = d; scene.background = d.texture; fitBackground(); } });

  renderPass = new RenderPass(scene, camera);
  applyQuality(qualityPref==='auto' ? 'medium' : qualityPref);
  return true;
}

function buildComposer(q){
  if(composer){ composer.dispose(); composer = null; bloomPass = null; }
  if(!q.bloom) return;
  const rt = new THREE.WebGLRenderTarget(1, 1, {type:THREE.HalfFloatType, samples:q.msaa});
  composer = new EffectComposer(renderer, rt);
  composer.addPass(renderPass);
  // Sade bloom: yalnızca gerçekten parlak şeyler (öğeler, iğne ucu, elektrik) parlar.
  bloomPass = new UnrealBloomPass(new THREE.Vector2(1,1), 0.45, 0.4, 0.85);
  composer.addPass(bloomPass);
  composer.addPass(new OutputPass());
}

function applyQuality(level){
  qualityLive = level;
  const q = QUALITY[level];
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, q.dpr));
  buildComposer(q);
  resize(W, H, base);
}

function setQuality(pref){
  qualityPref = pref;
  fps.downgraded = false; fps.lowFor = 0; fps.highFor = 0;
  if(renderer) applyQuality(pref==='auto' ? 'medium' : pref);
}

// Ekran sabit arka plan görselini "cover" kırpar (en-boy oranını korur).
function fitCover(tex){
  if(!tex || !tex.image) return;
  const img = tex.image, ia = img.width/img.height, sa = W/H;
  if(ia > sa){ tex.repeat.set(sa/ia, 1); tex.offset.set((1-sa/ia)/2, 0); }
  else { tex.repeat.set(1, ia/sa); tex.offset.set(0, (1-ia/sa)/2); }
}
function fitBackground(){
  if(bgDef) fitCover(bgDef.texture);
  else if(world && world.themeBackground) fitCover(world.themeBackground);
}

function resize(w, h, b){
  W = w; H = h; base = b || Math.min(w,h);
  if(!renderer) return;
  renderer.setSize(W, H, false);
  camera.aspect = W/H;
  camera.fov = camCfg.fov;
  // Kadrajı plağı (ve pikap kolunu) her en-boy oranında sığdıracak şekilde
  // ayarla: dikeyde eğim sayesinde daha az yer gerekiyor.
  // Dikey ekranda (telefon) plak sağdan soldan boşluk bırakmasın diye biraz
  // yakınlaştır — öğeler de büyür.
  const zoom = (camCfg.zoom||1) * (camera.aspect < 0.9 ? (camCfg.portraitZoom||1.15) : 1);
  const fitR = base*0.5/zoom;
  const vf = THREE.MathUtils.degToRad(camCfg.fov)/2;
  const hf = Math.atan(Math.tan(vf)*camera.aspect);
  const dist = Math.max(fitR/Math.tan(hf), fitR*0.85/Math.tan(vf)) + fitR*0.35;
  const tilt = THREE.MathUtils.degToRad(camCfg.tilt);
  camera.userData.basePos = new THREE.Vector3(0, Math.sin(tilt)*dist, Math.cos(tilt)*dist);
  camera.userData.target = new THREE.Vector3(0, 0, base*0.015);
  camera.position.copy(camera.userData.basePos);
  camera.lookAt(camera.userData.target);
  camera.near = Math.max(1, dist*0.02); camera.far = base*40;
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
  view.aspect = camera.aspect; view.tilt = tilt; view.camPos = camera.userData.basePos;
  view.camUp = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);
  world.resize(base);
  world.setView(view);
  const pr = renderer.getPixelRatio();
  entities.setPointScale((H*pr)/(2*Math.tan(vf)));
  if(composer){
    composer.setPixelRatio(pr);
    composer.setSize(W, H);
    const s = QUALITY[qualityLive].bloomScale;
    bloomPass.resolution.set(W*pr*s, H*pr*s);
  }
  fitBackground();
}

function trackFps(dtMs){
  if(qualityPref !== 'auto') return;
  fps.acc += dtMs; fps.frames++;
  if(fps.acc < 1000) return;
  fps.value = fps.frames*1000/fps.acc; fps.acc = 0; fps.frames = 0;
  const i = ORDER.indexOf(qualityLive);
  if(fps.value < 45){ fps.lowFor++; fps.highFor = 0; } else if(fps.value > 57){ fps.highFor++; fps.lowFor = 0; } else { fps.lowFor = 0; fps.highFor = 0; }
  if(fps.lowFor >= 2 && i > 0){ fps.downgraded = true; fps.lowFor = 0; applyQuality(ORDER[i-1]); }
  // Bir kez düşürüldüyse bir daha yükseltme (sürekli gidip gelmesin).
  else if(fps.highFor >= 5 && i < ORDER.length-1 && !fps.downgraded){ fps.highFor = 0; applyQuality(ORDER[i+1]); }
}

let lastTs = 0;
function render(f){
  if(!renderer || failed) return;
  const now = performance.now();
  const dtMs = lastTs ? Math.min(100, now-lastTs) : 16.7; lastTs = now;
  trackFps(dtMs);
  const t = now*0.001, dt = f.dt || 1;
  if(f.W !== W || f.H !== H) resize(f.W, f.H, f.base);
  if(!bgDef){
    // Tema arka planı (ör. Urban'da neon şehir, Cosmic'te uzay) yoksa düz tema rengi.
    const tb = world.themeBackground;
    if(tb){ if(scene.background !== tb){ scene.background = tb; fitCover(tb); } }
    else {
      if(!(scene.background && scene.background.isColor)) scene.background = new THREE.Color();
      scene.background.set(f.theme.bg0);
    }
  }
  world.setTheme(f.themeKey, f.theme);
  world.setRingStyle(f.ringStyle);
  world.update(dt, t, f);
  f.recordAngle = world.recordSpin.rotation.y;
  entities.update(dt, t, f);

  // Ekran sarsıntısı -> kamera titremesi; boss uyarısında hafif yakınlaşma.
  const bp = camera.userData.basePos, tg = camera.userData.target;
  const sh = f.inGame ? (f.shake||0) : 0;
  const zoomIn = 1 - (f.bossIntensity||0)*0.06;
  camera.position.set(bp.x + (Math.random()-0.5)*sh*1.2, bp.y*zoomIn + (Math.random()-0.5)*sh*0.6, bp.z*zoomIn);
  camera.lookAt(tg);
  if(bloomPass) bloomPass.strength = (world.bloomBase ?? 0.45) + (f.flash||0)*0.5 + (f.bossIntensity||0)*0.3 + (world.elec||0)*0.6;

  if(composer) composer.render(); else renderer.render(scene, camera);
}

function fail(reason){
  if(failed) return;
  failed = true;
  console.warn('[Render3D] devre dışı:', reason);
  if(onFail) onFail(reason);
}

function info(){
  return {quality:qualityLive, preference:qualityPref, fps:Math.round(fps.value), failed, missingAssets:loadErrors.slice(),
    scratchPoints: entities ? entities.scratch.pts.length : 0};
}

window.Render3D = { supported, init, resize, render, setQuality, info, fail };
