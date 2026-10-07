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
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

// Bloom'a girmeden önce aşırı parlak (HDR) pikselleri sınırla: üst üste binen
// toplamalı efektler tek noktada çok yüksek değer üretse bile bloom bunu ekranı
// kaplayan bir parlama topuna çeviremesin.
const ClampShader = {
  uniforms:{ tDiffuse:{value:null}, uMax:{value:1.6} },
  vertexShader:`varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
  fragmentShader:`uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
    void main(){ vec4 c=texture2D(tDiffuse,vUv); c.rgb=min(max(c.rgb,vec3(0.0)),vec3(uMax)); gl_FragColor=c; }`,
};
import { World, DISC_R, TOP_Y } from './world.js';
import { Entities } from './entities.js';
import { resolveSlot, loadErrors } from './assets.js';

// Kalite önayarları. 'auto' cihazın GPU'suna göre seçilen seviyeden başlar
// (bkz. detectTier), FPS'e göre iner/çıkar. Her seviyede çözünürlük dpr ile
// minDpr arasında FPS'e göre kendiliğinden ayarlanır (dinamik çözünürlük).
// Neon parlaması (bloom) oyunun görsel kimliği olduğu için düşükte de açık;
// sadece daha düşük çözünürlükte hesaplanır. fxLights: pikap kolu ve oyuncu
// nokta ışıkları — her pikselde ek ışık hesabı demek, zayıf GPU'da kapalı.
const QUALITY = {
  low:    {dpr:1.25, minDpr:0.85, bloom:true, bloomScale:0.25, msaa:0, fxLights:false},
  medium: {dpr:1.5,  minDpr:1.0,  bloom:true, bloomScale:0.5,  msaa:0, fxLights:true},
  high:   {dpr:2.0,  minDpr:1.35, bloom:true, bloomScale:1.0,  msaa:4, fxLights:true},
};
const ORDER = ['low','medium','high'];

let renderer, scene, camera, composer, bloomPass, renderPass, world, entities;
let W=1, H=1, base=1, qualityPref='auto', qualityLive='medium', failed=false, onFail=null;
let dprCur = 1, bloomCut = false, gpuName = '', gpuTier = 'medium';

// Açılış seviyesini GPU adından tahmin eder; yanılırsa FPS takibi düzeltir.
// Bilinmeyen GPU'lar ortadan başlar.
function detectTier(gl){
  try{
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    gpuName = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER) || '');
  }catch(e){ gpuName = ''; }
  const s = gpuName.toLowerCase(), mem = navigator.deviceMemory || 0;
  let m;
  if(/apple/.test(s)) return 'medium';
  if((m = s.match(/adreno[^0-9]*(\d{3})/))) return +m[1] >= 640 ? 'medium' : 'low';
  if((m = s.match(/mali-g(\d+)/))) return (+m[1] >= 68) ? 'medium' : 'low';
  if(/immortalis|xclipse/.test(s)) return 'medium';
  if(/mali|powervr|sgx|vivante|tegra|videocore/.test(s)) return 'low';
  if(mem && mem <= 3) return 'low';
  return 'medium';
}
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
const fps = {acc:0, frames:0, lowFor:0, highFor:0, downgraded:false, dprDropped:false, value:60};
// Bloom katmanı yeniden kurulunca / boyut değişince (kalite değişimi, ekran
// döndürme, uygulamaya geri dönme) iOS'ta yeni doku ilk karede eski/çöp veri
// taşıyıp tek karelik sarı-yeşil bir "elektrik çarpması" parlaması yapıyordu.
// Hedefleri temizleyip bloom'u birkaç karede yumuşakça geri açıyoruz.
let bloomWarm = 0;
function clearBloomTargets(){
  if(!renderer || !bloomPass) return;
  const prev = renderer.getRenderTarget();
  const rts = [...(bloomPass.renderTargetsHorizontal||[]), ...(bloomPass.renderTargetsVertical||[]), bloomPass.renderTargetBright,
    composer && composer.renderTarget1, composer && composer.renderTarget2].filter(Boolean);
  for(const rt of rts){ renderer.setRenderTarget(rt); renderer.clear(true, true, true); }
  renderer.setRenderTarget(prev);
  bloomWarm = 0;
}

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
  gpuTier = detectTier(renderer.getContext());
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
  applyQuality(qualityPref==='auto' ? gpuTier : qualityPref);
  return true;
}

function buildComposer(q){
  if(composer){ composer.dispose(); composer = null; bloomPass = null; }
  if(!q.bloom || bloomCut) return;
  const rt = new THREE.WebGLRenderTarget(1, 1, {type:THREE.HalfFloatType, samples:q.msaa});
  composer = new EffectComposer(renderer, rt);
  composer.addPass(renderPass);
  composer.addPass(new ShaderPass(ClampShader));
  // Sade bloom: yalnızca gerçekten parlak şeyler (öğeler, iğne ucu, elektrik) parlar.
  bloomPass = new UnrealBloomPass(new THREE.Vector2(1,1), 0.45, 0.4, 0.85);
  composer.addPass(bloomPass);
  composer.addPass(new OutputPass());
}

function maxDpr(q){ return Math.min(window.devicePixelRatio||1, q.dpr); }

// Işık sayısı değişince tüm shader'lar bir kez yeniden derlenir; bu yüzden
// yalnız seviye değişiminde çağrılır, kare kare değil.
function setFxLights(on){
  if(world && world.armLight) world.armLight.visible = on;
  if(entities && entities.player && entities.player.light) entities.player.light.visible = on;
}

function applyQuality(level){
  qualityLive = level;
  const q = QUALITY[level];
  dprCur = maxDpr(q);
  bloomCut = false;
  renderer.setPixelRatio(dprCur);
  buildComposer(q);
  setFxLights(q.fxLights);
  resize(W, H, base);
}

function setDpr(v){
  dprCur = v;
  renderer.setPixelRatio(v);
  resize(W, H, base);
}

function setQuality(pref){
  qualityPref = pref;
  fps.downgraded = false; fps.dprDropped = false; fps.lowFor = 0; fps.highFor = 0;
  if(renderer) applyQuality(pref==='auto' ? gpuTier : pref);
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
    clearBloomTargets();
  }
  fitBackground();
}

// Saniyede bir FPS'e bakar. Zorlanırsa önce çözünürlüğü adım adım düşürür
// (gözle zor fark edilir); taban çözünürlükte hâlâ zorlanırsa 'auto' modda bir
// alt seviyeye iner, en altta da son çare olarak parlama efektini kapatır.
// Rahatsa tersine aynı adımlarla yükselir. Elle seçilmiş seviyede de
// çözünürlük ayarı çalışır, sadece seviye değişmez.
function trackFps(dtMs){
  fps.acc += dtMs; fps.frames++;
  if(fps.acc < 1000) return;
  fps.value = fps.frames*1000/fps.acc; fps.acc = 0; fps.frames = 0;
  const q = QUALITY[qualityLive], i = ORDER.indexOf(qualityLive);
  if(fps.value < 45){ fps.lowFor++; fps.highFor = 0; } else if(fps.value > 57){ fps.highFor++; fps.lowFor = 0; } else { fps.lowFor = 0; fps.highFor = 0; }

  if(fps.lowFor >= 2){
    fps.lowFor = 0;
    if(dprCur > q.minDpr + 0.01){ fps.dprDropped = true; setDpr(Math.max(q.minDpr, dprCur - 0.15)); return; }
    if(qualityPref === 'auto' && i > 0){ fps.downgraded = true; applyQuality(ORDER[i-1]); return; }
    if(qualityLive === 'low' && !bloomCut){ bloomCut = true; buildComposer(q); resize(W, H, base); }
    return;
  }
  // Düşürüp yeniden yükseltirken gidip gelmesin diye daha uzun bekler.
  if(fps.highFor >= (fps.dprDropped ? 15 : 5)){
    fps.highFor = 0;
    if(dprCur < maxDpr(q) - 0.01){ setDpr(Math.min(maxDpr(q), dprCur + 0.1)); return; }
    // Bir kez seviye düşürüldüyse bir daha yükseltme (sürekli gidip gelmesin).
    if(qualityPref === 'auto' && i < ORDER.length-1 && !fps.downgraded) applyQuality(ORDER[i+1]);
  }
}

let lastTs = 0;
function render(f){
  if(!renderer || failed) return;
  const now = performance.now();
  const gap = lastTs ? now-lastTs : 0;
  const dtMs = lastTs ? Math.min(100, gap) : 16.7; lastTs = now;
  // Uzun ara (arka plandan dönüş, kontrol merkezi): FPS ölçümü yanıltmasın,
  // bloom da yumuşakça geri gelsin.
  if(gap > 250){ fps.acc = 0; fps.frames = 0; fps.lowFor = 0; fps.highFor = 0; bloomWarm = 0; }
  else trackFps(dtMs);
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
  bloomWarm = Math.min(1, bloomWarm + 0.08*dt);
  if(bloomPass) bloomPass.strength = ((world.bloomBase ?? 0.45) + (f.flash||0)*0.15 + (f.bossIntensity||0)*0.3 + (world.elec||0)*0.6) * bloomWarm*bloomWarm;

  if(composer) composer.render(); else renderer.render(scene, camera);
}

function fail(reason){
  if(failed) return;
  failed = true;
  console.warn('[Render3D] devre dışı:', reason);
  if(onFail) onFail(reason);
}

// Ana menü yerleşimi için: pikap kolunun (iğne) ekrandaki alt kenarı ve
// plağın üst kenarı (CSS piksel). Menüdeki premium şeridi ikisinin arasına
// oturtulur (bkz. gfx.js syncMenuAnchors) — her ekran oranında doğru yer.
const _mv = new THREE.Vector3();
// xMin/xMax (CSS px): yalnız bu yatay aralıkta kalan kol noktaları sayılır
// (kolun sağdaki ayağı/gövdesi şeridin altına inse de şeridi etkilemez).
function menuAnchors(xMin, xMax){
  if(!renderer || !world || failed) return null;
  const r = renderer.domElement.getBoundingClientRect();
  if(!r.width || !r.height) return null;
  if(xMin==null){ xMin = -Infinity; xMax = Infinity; }
  const toScreen = v => { v.project(camera); return {x:r.left + (v.x+1)/2*r.width, y:r.top + (1-v.y)/2*r.height}; };
  let bottom = -Infinity, baseLeft = Infinity;
  const scan = (obj, isBase) => obj.traverse(o => {
    if(!o.isMesh || !o.visible || !o.geometry || !o.geometry.attributes.position) return;
    const pos = o.geometry.attributes.position, step = Math.max(1, Math.floor(pos.count/400));
    for(let i=0;i<pos.count;i+=step){
      _mv.fromBufferAttribute(pos, i); o.localToWorld(_mv);
      const p = toScreen(_mv);
      if(isBase){ if(p.x < baseLeft) baseLeft = p.x; }
      else if(p.x >= xMin && p.x <= xMax && p.y > bottom) bottom = p.y;
    }
  });
  // armProcedural: [plinth, plinthRing, post, housing, tube, weight, weightCap, head, cart, lift, stylus]
  const ap = world.armProcedural||[];
  const armParts = [ap[4], ap[7], ap[8], ap[9], ap[10]].filter(m=>m && m.visible);
  const baseParts = [ap[0], ap[1], ap[2], ap[3], ap[5], ap[6]].filter(m=>m && m.visible);
  if(armParts.length){ armParts.forEach(m=>scan(m,false)); baseParts.forEach(m=>scan(m,true)); }
  else scan(world.armTilt, false);
  const rec = toScreen(world.root.localToWorld(_mv.set(0, TOP_Y, -DISC_R)));
  return {armBottom:bottom, baseLeft, recordTop:rec.y};
}

function info(){
  return {quality:qualityLive, preference:qualityPref, fps:Math.round(fps.value), dpr:Math.round(dprCur*100)/100,
    bloom:!!composer, gpu:gpuName, gpuTier, failed, missingAssets:loadErrors.slice(),
    scratchPoints: entities ? entities.scratch.pts.length : 0};
}

window.Render3D = { supported, init, resize, render, setQuality, info, fail, menuAnchors };
