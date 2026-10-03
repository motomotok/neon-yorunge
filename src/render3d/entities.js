// Dinamik varlıklar: oyuncu (pena), toplanabilir öğeler ve tehlikeler
// (canavarlar), oyuncu izi ve parçacıklar. Hepsi engine.js'in piksel
// koordinatlarını birebir kullanır: tahtadaki (x,y) -> sahnede (x, h, y).
//
// Her öğe tipi için görsel kaynağı önceliği:
//   1) manifest.items[tip]  (sizin vereceğiniz PNG / sprite sheet / GLB)
//   2) klasik 2D çizim (render.js drawItem) bir canvas'a basılıp doku olur
// Böylece asset'ler tek tek eklendikçe oyun parça parça "yükselir".
import * as THREE from 'three';
import { resolveSlot, instantiateModel, updateSheetFrame } from './assets.js';
import { glowTexture, shadowTexture, dotTexture, bossRingTexture } from './textures.js';
import { TOP_Y } from './world.js';
import { RibbonBatch } from './ribbon.js';

export const ITEM_TYPES = ['star','gold','diamond','coin','heart','shield','slow','magnet','mult',
  'hazard','hazardJump','hazardBomb','hazardPull','hazardTwin','hazardTwinDecoy','hazardPulse','hazardCreep'];
const HAZARDS = new Set(['hazard','hazardJump','hazardBomb','hazardPull','hazardTwin','hazardTwinDecoy','hazardPulse','hazardCreep']);
// Manifest görsellerinin varsayılan göreli boyutu (2D sürümdeki oranlar).
const TYPE_SIZE = {hazardBomb:1.5, diamond:1.0, coin:0.9, heart:1.1};
const HOVER = 1.55;
// Klasik moddakiyle (render.js CLEF_SPARKS) aynı yıldız konumları — R cinsinden x, y ve faz.
const CLEF_SPARKS = [[1.25,-1.15,0],[-1.3,-0.5,1.6],[1.35,0.75,3.1],[-0.9,1.25,4.5],[0.2,-1.6,5.6]];
let _spark = null;
function sparkTexture(){
  if(_spark) return _spark;
  const c=document.createElement('canvas'); c.width=c.height=64; const g=c.getContext('2d');
  const gr=g.createRadialGradient(32,32,0,32,32,20); gr.addColorStop(0,'rgba(200,255,250,.6)'); gr.addColorStop(1,'rgba(120,230,255,0)');
  g.fillStyle=gr; g.beginPath(); g.arc(32,32,20,0,7); g.fill();
  g.fillStyle='#fff'; g.beginPath();
  for(let i=0;i<8;i++){ const a=i*Math.PI/4, r=(i%2?3.5:22); i?g.lineTo(32+Math.cos(a)*r,32+Math.sin(a)*r):g.moveTo(32+Math.cos(a)*r,32+Math.sin(a)*r); }
  g.closePath(); g.fill();
  _spark=new THREE.CanvasTexture(c); _spark.colorSpace=THREE.SRGBColorSpace; return _spark;
}
const SCRATCH_LEN_R = 22;       // çiziğin en fazla uzunluğu (PLAYER_R cinsinden)            // öğelerin plaktan yüksekliği (R biriminde)
const FALLBACK_PX = 160;       // klasik çizimden üretilen dokunun çözünürlüğü

const _col = new Map();
function linColor(str){
  let c = _col.get(str);
  if(!c){ c = new THREE.Color(); try{ c.setStyle(str); }catch(e){ c.set('#ffffff'); } _col.set(str, c); if(_col.size>512) _col.clear(); }
  return c;
}

// Boyutu dünya biriminde verilen, kamera mesafesiyle küçülen yumuşak noktalar.
function pointsMaterial(map){
  return new THREE.ShaderMaterial({
    uniforms:{ map:{value:map}, uScale:{value:500} },
    vertexShader:`
      attribute float aSize; attribute vec4 aColor; varying vec4 vColor; uniform float uScale;
      void main(){ vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0);
        gl_PointSize = aSize*uScale/max(0.001,-mv.z); gl_Position=projectionMatrix*mv; }`,
    fragmentShader:`
      uniform sampler2D map; varying vec4 vColor;
      void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vColor.rgb, vColor.a*t.a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    transparent:true, depthWrite:false, blending:THREE.AdditiveBlending,
  });
}
class PointCloud {
  constructor(cap, map){
    this.cap = cap;
    this.pos = new Float32Array(cap*3); this.size = new Float32Array(cap); this.color = new Float32Array(cap*4);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos,3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size,1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.color,4).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0,0);
    this.geo = g;
    this.mat = pointsMaterial(map);
    this.obj = new THREE.Points(g, this.mat);
    this.obj.frustumCulled = false;
    this.n = 0;
  }
  begin(){ this.n = 0; }
  push(x,y,z,size,c,a){
    if(this.n>=this.cap) return;
    const i=this.n++;
    this.pos[i*3]=x; this.pos[i*3+1]=y; this.pos[i*3+2]=z; this.size[i]=size;
    this.color[i*4]=c.r; this.color[i*4+1]=c.g; this.color[i*4+2]=c.b; this.color[i*4+3]=a;
  }
  end(){
    const g=this.geo; g.setDrawRange(0,this.n);
    g.attributes.position.needsUpdate=true; g.attributes.aSize.needsUpdate=true; g.attributes.aColor.needsUpdate=true;
  }
  setMap(tex){ this.mat.uniforms.map.value = tex; }
}

function ringSpriteTexture(color, dashed){
  const c=document.createElement('canvas'); c.width=c.height=128; const g=c.getContext('2d');
  g.strokeStyle=color; g.lineWidth=dashed?5:6; if(dashed) g.setLineDash([12,14]);
  g.shadowColor=color; g.shadowBlur=10;
  g.beginPath(); g.arc(64,64,52,0,Math.PI*2); g.stroke();
  const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; return t;
}
function flatPlane(tex, opacity, additive){
  const g = new THREE.PlaneGeometry(1,1); g.rotateX(-Math.PI/2);
  return new THREE.Mesh(g, new THREE.MeshBasicMaterial({map:tex, transparent:true, opacity, depthWrite:false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending}));
}

export class Entities {
  constructor(scene, manifest, hooks){
    this.scene = scene; this.manifest = manifest || {}; this.hooks = hooks || {};
    this.group = new THREE.Group();
    scene.add(this.group);
    this.defs = {};            // tip -> çözümlenmiş manifest tanımı (ya da null)
    this.fallbackTex = new Map();
    this.pool = new Map();     // havuz anahtarı -> [visual]
    this.live = new Map();     // engine item nesnesi -> visual
    this.frame = 0;
    this._resolveManifest();
    this._buildPlayer();
    this.trail = new PointCloud(140, dotTexture());       // pena temas kıvılcımları
    this.scratch = {batch:new RibbonBatch(300), pts:[], sparks:[], sparkAcc:0, flare:0};
    this.group.add(this.scratch.batch.mesh);
    this.ripples = [];
    for(let i=0;i<5;i++){
      const g = new THREE.RingGeometry(0.9, 1, 64); g.rotateX(-Math.PI/2);
      const mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({transparent:true, opacity:0, depthWrite:false,
        blending:THREE.AdditiveBlending}));
      mesh.visible = false; this.group.add(mesh);
      this.ripples.push({mesh, life:0, x:0, z:0});
    }
    this.lastNotes = 0;
    this.particles = new PointCloud(900, dotTexture());
    // Toplama patlamasındaki parçacıklar aynı noktada doğar; toplamalı (additive)
    // karışımda üst üste binip aşırı parlak bir nokta oluşturuyor, bloom da bunu
    // dev bir sarı/beyaz topa yayıyordu ("elektrik çarpması"). Normal karışım.
    this.particles.mat.blending = THREE.NormalBlending;
    this.group.add(this.trail.obj, this.particles.obj);
  }

  async _resolveManifest(){
    const items = this.manifest.items || {};
    await Promise.all(ITEM_TYPES.map(async t=>{
      const slot = items[t] || (t==='hazardTwinDecoy' ? items.hazardTwin : null);
      this.defs[t] = await resolveSlot(slot);
    }));
    const pl = this.manifest.player || {};
    this.playerDefault = await resolveSlot(pl.default);
    this.playerSkinDefs = {};
    for(const id of Object.keys(pl.skins||{})) this.playerSkinDefs[id] = await resolveSlot(pl.skins[id]);
    const fx = this.manifest.particles || {};
    const spark = await resolveSlot(fx.spark);
    if(spark && spark.texture) this.particles.setMap(spark.texture);
    const trail = await resolveSlot(fx.trail);
    if(trail && trail.texture) this.trail.setMap(trail.texture);
    this.defsVersion = (this.defsVersion||0)+1;
    // Manifest geldiğinde eski (klasik) görselleri at — yeniden oluşturulsunlar.
    for(const [it, v] of this.live){ this._release(v); }
    this.live.clear();
  }

  // ---------------- Klasik çizimden doku (fallback) ----------------
  _fallbackTexture(type, styleKey){
    const paintType = type==='hazardTwinDecoy' ? 'hazardTwin' : type;
    const key = paintType+'|'+styleKey;
    let e = this.fallbackTex.get(key);
    if(!e){
      const c = document.createElement('canvas'); c.width = c.height = FALLBACK_PX;
      const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
      e = {canvas:c, tex, ready:false, lastTry:-999, type:paintType};
      this.fallbackTex.set(key, e);
    }
    // Görseller (canavar PNG'leri) henüz yüklenmemişse birkaç karede bir tekrar dene.
    if(!e.ready && this.frame - e.lastTry > 20 && this.hooks.paintItem){
      e.lastTry = this.frame;
      e.ready = !!this.hooks.paintItem(e.type, e.canvas);
      e.tex.needsUpdate = true;
    }
    return e.tex;
  }

  // ---------------- Öğe görselleri ----------------
  _poolKey(type){ const d = this.defs[type]; return type+'|'+(d ? d.kind : 'fb')+'|'+(this.defsVersion||0); }

  _create(type){
    const def = this.defs[type];
    const root = new THREE.Group();
    const v = {type, def, root, body:null, mat:null, glow:null, mixer:null, key:this._poolKey(type)};
    const shadow = new THREE.Mesh(this._shadowGeo || (this._shadowGeo = (()=>{ const g=new THREE.PlaneGeometry(1,1); g.rotateX(-Math.PI/2); return g; })()),
      this._shadowMat || (this._shadowMat = new THREE.MeshBasicMaterial({map:shadowTexture(), transparent:true, opacity:0.55, depthWrite:false})));
    shadow.scale.setScalar(2.2); shadow.position.y = 0.02;
    root.add(shadow); v.shadow = shadow;

    const sz = (TYPE_SIZE[type]||1) * (def && def.opts.size || 1);
    if(def && def.kind==='model'){
      const {object, mixer} = instantiateModel(def, 2.6*sz);
      object.position.y = HOVER;
      root.add(object); v.body = object; v.mixer = mixer;
    } else {
      const map = def ? def.texture : null;
      // Billboard'lar kameraya döndüğü için alt yarıları plak yüzeyinin
      // "altına" girer; derinlik testi kapalı (sıralamayı saydam nesne
      // sıralaması yapar), yoksa hâleler yatay bir çizgiyle kesik görünür.
      v.mat = new THREE.SpriteMaterial({map, transparent:true, depthWrite:false, depthTest:false});
      v.body = new THREE.Sprite(v.mat);
      v.body.position.y = HOVER;
      v.baseScale = def ? 2.6*sz : 2*2.6;
      v.body.scale.setScalar(v.baseScale);
      root.add(v.body);
    }
    // Sol anahtarı: çevresinde sabit noktalarda belirip sönen küçük yıldızlar.
    if(type==='diamond'){
      v.sparks = CLEF_SPARKS.map(sp=>{
        const s = new THREE.Sprite(new THREE.SpriteMaterial({map:sparkTexture(), transparent:true, opacity:0,
          depthWrite:false, depthTest:false, blending:THREE.AdditiveBlending}));
        s.position.set(sp[0], HOVER - sp[1], 0.01); s.userData.phase = sp[2];
        root.add(s); return s;
      });
    }
    // Manifest görselleri kendi parlamalarını taşımayabilir — tip renginde
    // yumuşak bir hâle ekle (bloom'u da besler). Klasik doku zaten hâleli.
    if(def && def.opts.glow !== false){
      v.glow = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(), transparent:true, opacity:0.55,
        depthWrite:false, depthTest:false, blending:THREE.AdditiveBlending}));
      v.glow.position.y = HOVER; v.glow.scale.setScalar(4.6*sz);
      root.add(v.glow);
    }
    return v;
  }
  _acquire(type){
    const key = this._poolKey(type);
    const list = this.pool.get(key);
    const v = (list && list.length) ? list.pop() : this._create(type);
    v.root.visible = true;
    this.group.add(v.root);
    return v;
  }
  _release(v){
    this.group.remove(v.root);
    if(v.bossRing) v.bossRing.visible = false;
    if(!this.pool.has(v.key)) this.pool.set(v.key, []);
    this.pool.get(v.key).push(v);
  }

  _itemColor(type, f, it){
    const T = f.theme;
    if(type==='hazardPull') return '#ffb454';
    if(type==='hazardTwin'||type==='hazardTwinDecoy') return '#ff8a3d';
    if(type==='hazardPulse') return (it && it.pulseDanger===false) ? '#ffd9dc' : '#ff3b52';
    if(type==='hazardCreep') return '#d94a1f';
    if(HAZARDS.has(type)) return T.peril;
    if(type==='star') return T.star;
    if(type==='gold') return T.gold;
    if(type==='coin') return '#ffb454';
    if(type==='heart') return '#ff5d8f';
    if(type==='diamond') return '#fff4e0';
    return '#ffffff';
  }

  _updateItems(f, t, dt, styleKey){
    const seen = new Set();
    const baseY = TOP_Y*f.base + 0.5;
    if(f.inGame){
      for(const it of f.items){
        if(!it.alive) continue;
        const sc = f.easeOut(Math.max(0, it.pop));
        if(sc<=0) continue;
        let v = this.live.get(it);
        if(v && v.key !== this._poolKey(it.type)){ this._release(v); v = null; }
        if(!v){ v = this._acquire(it.type); this.live.set(it, v); }
        seen.add(it);
        const rad = f.RINGS[it.ring];
        const R = f.PLAYER_R*0.95*sc;
        v.root.position.set(Math.cos(it.ang)*rad, baseY, Math.sin(it.ang)*rad);
        v.root.scale.setScalar(R);
        this._animateItem(v, it, t, dt, f, styleKey);
      }
    }
    for(const [it, v] of this.live){
      if(!seen.has(it)){ this._release(v); this.live.delete(it); }
    }
  }

  _animateItem(v, it, t, dt, f, styleKey){
    const type = it.type, def = v.def, hazard = HAZARDS.has(type);
    // Notalar Subway Surfers coin'leri gibi belirgin salınır; diğerleri hafif.
    const bob = (type==='star'||type==='gold') ? Math.sin(t*3.2 + it.ang*3)*0.32 : type==='diamond' ? 0 : Math.sin(t*2.4 + it.ang*3)*0.14;
    let scale = 1, opacity = 1, spin = 0, flipX = 1;
    if(hazard){
      spin = type==='hazardJump' ? 0 : t*(type==='hazardCreep'?1.1:type==='hazardPulse'?1.0:0.6);
      if(type==='hazardPulse'){
        scale = (0.55+(Math.sin(it.pulsePhase||0)*0.5+0.5)*0.85)/0.975;
        if(!it.pulseDanger) opacity = 0.55;
      }
      if(type==='hazardTwinDecoy') opacity = 0.4+Math.sin(t*9)*0.25;
      // Cızırtı: bozuk sinyal gibi hafif parlaklık titremesi.
      opacity *= 0.82 + Math.random()*0.18;
    } else if(type==='coin'){
      // Jeton gibi yavaş dönen çevirme; hiçbir an ince bir çizgiye inmez.
      flipX = 0.35 + 0.65*Math.abs(Math.cos(t*1.6 + it.ang*2));
    } else if(type==='diamond'){
      // Kristal sol anahtarı tamamen sabit; canlılığı çevresindeki yıldızlar verir.
      flipX = 1; scale = 1.08;
    } else if(type==='heart'){
      scale = 1+Math.sin(t*5)*0.08;
    }
    if(v.mat){
      if(!def) setMap(v.mat, this._fallbackTexture(type, styleKey));
      else if(def.kind==='sheet') updateSheetFrame(def, t);
      v.mat.rotation = (def && def.opts.spin===false) ? 0 : spin;
      v.mat.opacity = opacity;
      v.body.scale.set(v.baseScale*scale*flipX, v.baseScale*scale, 1);
    } else if(v.body){
      v.body.rotation.y = (def.opts.spin===false) ? 0 : (hazard ? spin : t*1.5);
      v.body.scale.setScalar(scale);
      if(v.mixer) v.mixer.update(dt/60);
    }
    v.body.position.y = HOVER + bob;
    if(v.glow){
      v.glow.position.y = HOVER + bob;
      v.glow.material.color.copy(linColor(this._itemColor(type, f, it)));
      v.glow.material.opacity = 0.5*opacity;
    }
    v.shadow.material.opacity = 0.5;
    if(v.sparks) for(const s of v.sparks){
      const tw = Math.max(0, Math.sin(t*2.2 + s.userData.phase));
      s.material.opacity = tw; s.scale.setScalar(0.35 + tw*0.55); s.material.rotation = t*2 + s.userData.phase;
    }
    // Boss dalgasının öğeleri: altlarında dönen kesikli altın halka.
    // Cızırtının kendisiyle aynı yükseklikte, kameraya dönük; yarıçapı
    // cızırtının görsel boyutunun (~1.75 birim, yeşilde 1.5 katı) dışında
    // kalır — cızırtı halkanın içinde kalır, taşmaz.
    if(it.boss){
      if(!v.bossRing){
        v.bossRing = new THREE.Sprite(new THREE.SpriteMaterial({map:bossRingTexture(), transparent:true, opacity:0.8,
          depthWrite:false, depthTest:false, blending:THREE.AdditiveBlending}));
        v.root.add(v.bossRing);
      }
      const k = it.type==='hazardBomb' ? 1.5 : it.type==='hazardPulse' ? 1.4 : 1;
      v.bossRing.visible = true;
      v.bossRing.position.y = HOVER;
      v.bossRing.scale.setScalar(2*1.75*k*1.22/(54/64));
      v.bossRing.material.rotation = t*1.5;
      v.bossRing.material.opacity = 0.55+Math.sin(t*6)*0.25;
    } else if(v.bossRing) v.bossRing.visible = false;
  }

  // ---------------- Oyuncu (pena) ----------------
  _buildPlayer(){
    const p = this.player = {root:new THREE.Group()};
    p.shadow = flatPlane(shadowTexture(), 0.6, false); p.shadow.scale.setScalar(2.6); p.shadow.position.y = 0.02;
    p.glow = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(), transparent:true, opacity:0.9,
      depthWrite:false, depthTest:false, blending:THREE.AdditiveBlending}));
    p.glow.scale.setScalar(4.6);
    p.mat = new THREE.SpriteMaterial({transparent:true, depthWrite:false, depthTest:false});
    p.sprite = new THREE.Sprite(p.mat); p.sprite.scale.setScalar(2.7);
    p.shield = new THREE.Sprite(new THREE.SpriteMaterial({map:ringSpriteTexture('#5efc82', false), transparent:true,
      depthWrite:false, depthTest:false, blending:THREE.AdditiveBlending}));
    p.shield.scale.setScalar(4.0);
    p.magnet = flatPlane(ringSpriteTexture('#ff7ae0', true), 0.6, true); p.magnet.scale.setScalar(6.4);
    p.magnet.position.y = 0.06;
    p.light = new THREE.PointLight(0xffffff, 1.8, 100, 0);   // 3.2'ten düşürüldü: pirinç kolu yeşile boyuyordu
    p.root.add(p.shadow, p.glow, p.sprite, p.shield, p.magnet, p.light);
    this.group.add(p.root);
    this.penaTex = new Map();
  }

  _penaTexture(skinId, img){
    let tex = this.penaTex.get(skinId);
    if(!tex && img){
      tex = new THREE.Texture(img); tex.colorSpace = THREE.SRGBColorSpace;
      if(img.complete && img.naturalWidth>0) tex.needsUpdate = true;
      else img.addEventListener('load', ()=>{ tex.needsUpdate = true; }, {once:true});
      this.penaTex.set(skinId, tex);
    }
    return tex || null;
  }

  _updatePlayer(f, t, dt){
    const p = this.player, pl = f.player;
    const show = (f.inGame || f.inMenu) && pl;
    p.root.visible = !!show;
    if(!show) return;
    const pr = pl.curRadius, R = f.PLAYER_R;
    p.root.position.set(Math.cos(pl.ang)*pr, TOP_Y*f.base + 0.5, Math.sin(pl.ang)*pr);
    p.root.scale.setScalar(R);
    // Pena plağı kazıyor: ucu yüzeye değecek kadar alçakta, süzülme yerine
    // kazıma titreşimi (oyunda hızlı ve ince, menüde sakin).
    const jit = f.inGame ? Math.sin(t*47)*0.035 + Math.sin(t*31)*0.025 : Math.sin(t*3)*0.05;
    const h = 1.12 + jit;

    // Görsel kaynağı: manifest (skin'e özel > varsayılan) yoksa mevcut pena PNG'si.
    const def = (this.playerSkinDefs && this.playerSkinDefs[f.skin]) || this.playerDefault || null;
    if(def && def.kind==='model'){
      if(p.modelDef !== def){
        if(p.model) p.root.remove(p.model);
        const inst = instantiateModel(def, 2.7*(def.opts.size||1));
        p.model = inst.object; p.mixer = inst.mixer; p.modelDef = def; p.root.add(p.model);
      }
      p.sprite.visible = false; p.model.visible = true;
      p.model.position.y = h; p.model.rotation.y = -pl.ang;
      if(p.mixer) p.mixer.update(dt/60);
    } else {
      if(p.model) p.model.visible = false;
      p.sprite.visible = true;
      if(def){ setMap(p.mat, def.texture); if(def.kind==='sheet') updateSheetFrame(def, t); }
      else setMap(p.mat, this._penaTexture(f.skin, f.skinImg));
      p.sprite.visible = !!p.mat.map;
      p.sprite.position.y = h;
      p.sprite.scale.setScalar(2.7*((def && def.opts.size)||1));
      // Halka değiştirirken hareket yönüne hafif yatış.
      const lean = Math.max(-1, Math.min(1, (radiusTarget(f)-pr)/(R*4)));
      p.mat.rotation = -lean*0.35 + (f.inGame ? Math.sin(t*39)*0.04 : 0);
    }
    const blink = pl.invulT>0 && (Math.floor(pl.invulT/4)%2===0);
    const alpha = blink ? 0 : 1;
    p.mat.opacity = alpha;
    if(p.model) p.model.visible = p.model.visible && !blink;
    p.glow.position.y = 0.35; p.glow.scale.setScalar(3.6); p.glow.material.color.copy(linColor(f.playerColor)); p.glow.material.opacity = 0.4*alpha;
    p.light.color.copy(linColor(f.playerColor)); p.light.position.y = h*0.9; p.light.distance = R*14;
    p.shield.visible = pl.shieldHits>0;
    if(p.shield.visible){ p.shield.position.y = h; p.shield.material.opacity = 0.8+Math.sin(t*8)*0.2; }
    p.magnet.visible = pl.magnetT>0;
    if(p.magnet.visible){ p.magnet.rotation.y = t*1.6; p.magnet.material.opacity = 0.45+Math.sin(t*6)*0.2; }
  }

  // ---------------- Pena çiziği ----------------
  // Kuyruk yerine pena plağı kazıyormuş gibi bir çizik bırakır. Noktalar
  // PLAĞIN kendi koordinatlarında saklanır, bu yüzden çizik plakla
  // birlikte dönüp penadan uzaklaşarak söner: "pena plağı çiziyor" hissi.
  // Renkler mağazadaki İz Efekti seçimini (cfg.trail) izler.
  _scratchColor(style, i, age, t, pc){
    const tmp = this._tmpCol || (this._tmpCol = new THREE.Color());
    switch(style){
      case 'rainbow': return tmp.setHSL(((t*60 + i*9)%360)/360, 0.9, 0.62);
      case 'sparkle': return linColor(i%3===0 ? '#ffffff' : '#fff2c4');
      case 'quantum': return (i>>2)%2===0 ? pc : linColor('#7fe8ff');
      case 'phantom': return linColor('#eaf2ff');
      case 'season1_trail': return linColor((i>>2)%2===0 ? '#54e0ff' : '#fff6c8');
      case 'season2_trail': return tmp.setHSL((28+Math.sin(t*3-i*0.2)*10)/360, 0.95, 0.55);
      case 'pixel': return pc;
      default: return pc;
    }
  }

  _updateScratch(f, t, dt){
    const sc = this.scratch, pl = f.player, R = f.PLAYER_R;
    const now = t, LIFE = 3.0;
    const ra = f.recordAngle || 0, c = Math.cos(ra), s = Math.sin(ra);
    const active = (f.inGame || f.inMenu) && pl;
    const y = TOP_Y*f.base + 0.9;
    const pc = linColor(f.playerColor);
    if(active){
      const pr = pl.curRadius, wx = Math.cos(pl.ang)*pr, wz = Math.sin(pl.ang)*pr;
      // dünya -> plak koordinatı (Y ekseni etrafında -ra döndür)
      const lx = wx*c - wz*s, lz = wx*s + wz*c;
      const last = sc.pts[sc.pts.length-1];
      const d = last ? Math.hypot(lx-last.x, lz-last.z) : Infinity;
      if(d > R*6) sc.pts.push({x:lx, z:lz, born:now, brk:true});       // ışınlanma (yeni oyun vb.)
      else if(d > R*0.22) sc.pts.push({x:lx, z:lz, born:now, brk:false});
      if(sc.pts.length > 290) sc.pts.splice(0, sc.pts.length-290);
      // Temas kıvılcımları: pena hızlandıkça (kombo) daha çok kıvılcım.
      const rate = (f.inGame ? 0.35 + Math.min(1.2, (pl.speed-1.5)*0.6) : 0.12) * (f.trail==='sparkle' ? 2.2 : 1);
      sc.sparkAcc += rate*dt;
      while(sc.sparkAcc >= 1){
        sc.sparkAcc -= 1;
        if(sc.sparks.length >= 120) break;
        const a = Math.random()*Math.PI*2, sp = (0.6+Math.random()*1.6)*R*0.06;
        sc.sparks.push({x:wx, y:y, z:wz, vx:Math.cos(a)*sp, vy:(0.5+Math.random())*R*0.07, vz:Math.sin(a)*sp, life:1,
          hot:Math.random()<0.6});
      }
    }
    while(sc.pts.length && now - sc.pts[0].born > LIFE*1.5) sc.pts.shift();
    // Uzunluk sınırı: çizik penadan geriye en fazla maxLen kadar uzar. Pena
    // hızlandıkça eski kısım aynı oranda hızlı silinir, yani hız ne olursa
    // olsun ekranda hep yaklaşık aynı uzunlukta bir çizik kalır.
    const maxLen = R*SCRATCH_LEN_R*(f.trail==='comet' ? 1.4 : 1);
    const dist = sc.dist || (sc.dist = new Float32Array(512));
    {
      const m = sc.pts.length;
      if(m) dist[m-1] = 0;
      for(let i=m-2;i>=0;i--){
        const a = sc.pts[i], b = sc.pts[i+1];
        dist[i] = b.brk ? Infinity : dist[i+1] + Math.hypot(b.x-a.x, b.z-a.z);
      }
      let cut = 0;
      while(cut < m && dist[cut] > maxLen) cut++;
      if(cut){ sc.pts.splice(0, cut); dist.copyWithin(0, cut, m); }
    }
    sc.flare = Math.max(0, sc.flare - dt*0.035);

    const B = sc.batch; B.begin(); B.strip();
    const style = f.trail, n = sc.pts.length, white = linColor('#ffffff');
    const life = style==='comet' ? LIFE*1.5 : LIFE;
    const wMul = style==='comet' ? 1.35 : style==='phantom' ? 1.2 : 1;
    for(let i=0;i<n;i++){
      const p = sc.pts[i];
      const age = now - p.born;
      // Zamanla sönme ve uzunluk sınırına yaklaştıkça sönme; hangisi güçlüyse o geçerli.
      const k = Math.max(0, Math.min(1 - age/life, (maxLen - dist[i])/(maxLen*0.6)));
      // Piksel stili: kesik kesik çizik (2 nokta çiz, 2 nokta boşluk).
      if(p.brk || (style==='pixel' && i%4===0)){ B.endStrip(); B.strip(); }
      if(style==='pixel' && i%4===3) continue;
      const hot = Math.max(0, 1 - age/0.3);
      const col = this._scratchColor(style, n-i, age, t, pc);
      const mix = Math.min(1, hot*0.75 + sc.flare*0.35);
      const r = col.r + (white.r-col.r)*mix, g = col.g + (white.g-col.g)*mix, b = col.b + (white.b-col.b)*mix;
      const w = R*(0.42 + hot*0.45 + sc.flare*0.35*k)*wMul;
      const a = Math.min(1, Math.pow(k,1.4)*(style==='phantom' ? 0.5 : 0.95)*(1+sc.flare*0.8));
      // world = plak koordinatı ra kadar döndürülmüş
      let wx = p.x*c + p.z*s, wz = -p.x*s + p.z*c;
      if(style==='ribbon'){                       // kurdele: dalgalı çizik
        const rl = Math.hypot(wx,wz) || 1, off = Math.sin(i*0.45 - t*3)*R*0.45;
        wx += wx/rl*off; wz += wz/rl*off;
      }
      B.p(wx, y, wz, w, r, g, b, a);
    }
    // son nokta -> penanın tam temas noktası (çizik hep pena ucunda başlasın)
    if(active && n){
      const pr = pl.curRadius;
      B.p(Math.cos(pl.ang)*pr, y, Math.sin(pl.ang)*pr, R*0.7, 1, 1, 1, 1);
    }
    B.endStrip(); B.end();

    // kıvılcımlar
    const T = this.trail; T.begin();
    for(const k of sc.sparks){
      k.x += k.vx*dt; k.y += k.vy*dt; k.z += k.vz*dt; k.vy -= R*0.006*dt; k.vx *= 0.96; k.vz *= 0.96;
      k.life -= 0.045*dt;
      if(k.y < y){ k.y = y; k.vy *= -0.3; }
      if(k.life > 0) T.push(k.x, k.y, k.z, R*0.32*k.life, k.hot ? white : pc, k.life);
    }
    sc.sparks = sc.sparks.filter(k=>k.life>0);
    T.end();
  }

  // Nota toplandı: çizik parlar, penadan plağa ses dalgası halkası yayılır
  // ve pena'nın bulunduğu oluk bir an yanar — "notalar şarkıyı çalıyor".
  _noteHit(f){
    const pl = f.player, pr = pl.curRadius;
    // Sadece çizik hafifçe parlar ve oluk yanıp söner (pena etrafındaki
    // büyüyen halka kaldırıldı — kullanıcı geri bildirimi).
    this.scratch.flare = 0.5;
    if(this.onNote) this.onNote(pl.targetRing);
  }
  _updateRipples(f, dt){
    const R = f.PLAYER_R, y = TOP_Y*f.base + 0.7;
    for(const r of this.ripples){
      if(r.life <= 0){ r.mesh.visible = false; continue; }
      r.life -= dt*0.06;
      const u = 1 - Math.max(0, r.life);
      r.mesh.visible = r.life > 0;
      r.mesh.position.set(r.x, y, r.z);
      // Küçük ve kısa: toplandığı belli olsun ama oyunu kaplamasın.
      r.mesh.scale.setScalar(R*(1.1 + u*2.4));
      r.mesh.material.opacity = Math.max(0, r.life)*0.5;
    }
  }

  // ---------------- Parçacıklar ----------------
  _updateParticles(f){
    const P = this.particles; P.begin();
    const R = f.PLAYER_R, baseY = TOP_Y*f.base + 0.5;
    for(const p of f.particles){
      if(p.life<=0) continue;
      const y = baseY + R*(1.2 + (1-p.life)*1.4);
      // İlk birkaç karede (henüz dağılmamışken) görünmez başlayıp açılır.
      const fadeIn = Math.min(1, (1-p.life)/0.12);
      P.push(p.x - f.CX, y, p.y - f.CY, p.r*p.life*3.2, linColor(p.color), Math.min(1, p.life*1.2)*fadeIn*0.85);
    }
    P.end();
  }

  setPointScale(s){ this.trail.mat.uniforms.uScale.value = s; this.particles.mat.uniforms.uScale.value = s; }

  update(dt, t, f){
    this.frame++;
    const styleKey = (f.themeKey||'') + '|' + (f.colorblind?1:0);
    this._updateItems(f, t, dt, styleKey);
    this._updatePlayer(f, t, dt);
    const notes = f.notes||0;
    if(f.inGame && notes > this.lastNotes) this._noteHit(f);
    this.lastNotes = notes;
    this._updateScratch(f, t, dt);
    this._updateRipples(f, dt);
    this._updateParticles(f);
  }
}

// map'in varlığı değişince (null <-> doku) shader yeniden derlenmeli.
function setMap(mat, tex){
  if(mat.map === tex) return;
  const had = !!mat.map;
  mat.map = tex;
  if(had !== !!tex) mat.needsUpdate = true;
}
function radiusTarget(f){ return f.RINGS[f.player.targetRing]; }
