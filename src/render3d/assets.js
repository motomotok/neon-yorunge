// Asset yükleyici: www/assets3d/manifest.js'teki (window.ASSETS3D) slotları
// okur ve her slot için "görsel tanımı" (visual def) üretir. Bir slot boş
// bırakılırsa ya da dosya yüklenemezse çağıran taraf prosedürel/klasik
// görsele düşer — asset eksikliği oyunu asla kırmaz.
//
// Desteklenen slot biçimleri (bkz. ASSETS_3D.md):
//   'yol/dosya.png'                                  -> sabit görsel (kısa yazım)
//   {image:'yol.png', size, glow, spin, bob}         -> sabit görsel
//   {sheet:'yol.png', cols, rows, frames, fps, loop} -> animasyonlu sprite sheet
//   {model:'yol.glb', size, rotation:[x,y,z], animation, spin} -> 3D model
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';

const texLoader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();
const texCache = new Map();
const gltfCache = new Map();
export const loadErrors = [];

function markError(path, err){
  loadErrors.push(path);
  console.warn('[Render3D] asset yüklenemedi:', path, err && err.message ? err.message : err);
}

export function loadTexture(path){
  if(!path) return Promise.resolve(null);
  if(texCache.has(path)) return texCache.get(path);
  const p = new Promise(res=>{
    texLoader.load(path, tex=>{
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      res(tex);
    }, undefined, err=>{ markError(path, err); res(null); });
  });
  texCache.set(path, p);
  return p;
}

export function loadGltf(path){
  if(!path) return Promise.resolve(null);
  if(gltfCache.has(path)) return gltfCache.get(path);
  const p = new Promise(res=>{
    gltfLoader.load(path, g=>res(g), undefined, err=>{ markError(path, err); res(null); });
  });
  gltfCache.set(path, p);
  return p;
}

// Kısa yazımı ('dosya.png') tam nesneye çevirir; tanımsız/boş ise null.
export function normalizeSlot(slot){
  if(!slot) return null;
  if(typeof slot==='string') return /\.(glb|gltf)$/i.test(slot) ? {model:slot} : {image:slot};
  if(typeof slot==='object' && (slot.image || slot.sheet || slot.model)) return slot;
  return null;
}

// Slotu yükleyip kullanıma hazır bir tanım döner:
//   {kind:'image', texture, opts} | {kind:'sheet', texture, opts} | {kind:'model', gltf, opts}
// Yüklenemezse null.
export async function resolveSlot(slot){
  const s = normalizeSlot(slot);
  if(!s) return null;
  if(s.model){
    const gltf = await loadGltf(s.model);
    return gltf ? {kind:'model', gltf, opts:s} : null;
  }
  if(s.sheet){
    const tex = await loadTexture(s.sheet);
    if(!tex) return null;
    const cols = Math.max(1, s.cols|0 || 1), rows = Math.max(1, s.rows|0 || 1);
    tex.repeat.set(1/cols, 1/rows);
    return {kind:'sheet', texture:tex, opts:Object.assign({cols, rows, frames:cols*rows, fps:12, loop:true}, s)};
  }
  const tex = await loadTexture(s.image);
  return tex ? {kind:'image', texture:tex, opts:s} : null;
}

// Bir sprite sheet dokusunun karesini zamana göre ayarlar. Aynı tipin tüm
// örnekleri tek dokuyu paylaştığı için animasyonları senkron oynar (ucuz ve
// ritim oyununa zaten uygun).
export function updateSheetFrame(def, timeSec){
  const o = def.opts;
  let f = Math.floor(timeSec*o.fps);
  f = o.loop===false ? Math.min(f, o.frames-1) : f % o.frames;
  const col = f % o.cols, row = Math.floor(f / o.cols);
  def.texture.offset.set(col/o.cols, 1 - (row+1)/o.rows);
}

// GLB sahnesini klonlar, en büyük boyutu targetSize olacak şekilde ölçekler,
// merkezler ve (varsa) animasyonu başlatır. {object, mixer} döner.
export function instantiateModel(def, targetSize){
  const src = def.gltf.scene;
  const obj = cloneSkinned(src);
  const box = new THREE.Box3().setFromObject(obj);
  const size = new THREE.Vector3(); box.getSize(size);
  const center = new THREE.Vector3(); box.getCenter(center);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const k = targetSize / maxDim;
  const pivot = new THREE.Group();
  obj.position.sub(center);
  pivot.add(obj);
  const wrap = new THREE.Group();
  pivot.scale.setScalar(k);
  const r = def.opts.rotation;
  if(Array.isArray(r)) pivot.rotation.set(
    THREE.MathUtils.degToRad(r[0]||0), THREE.MathUtils.degToRad(r[1]||0), THREE.MathUtils.degToRad(r[2]||0));
  wrap.add(pivot);
  let mixer = null;
  const clips = def.gltf.animations || [];
  if(clips.length){
    mixer = new THREE.AnimationMixer(obj);
    const clip = (def.opts.animation && THREE.AnimationClip.findByName(clips, def.opts.animation)) || clips[0];
    mixer.clipAction(clip).play();
  }
  obj.traverse(o=>{ if(o.isMesh){ o.castShadow=false; o.receiveShadow=false; } });
  return {object:wrap, mixer};
}
