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

export const ITEM_TYPES = ['star','gold','diamond','coin','heart','shield','slow','magnet','freeze','mult','ghost',
  'hazard','hazardJump','hazardBomb','hazardPull','hazardTwin','hazardTwinDecoy','hazardPulse','hazardCreep'];
const HAZARDS = new Set(['hazard','hazardJump','hazardBomb','hazardPull','hazardTwin','hazardTwinDecoy','hazardPulse','hazardCreep']);
// Manifest görsellerinin varsayılan göreli boyutu (2D sürümdeki oranlar).
const TYPE_SIZE = {hazardBomb:1.5, diamond:1.0, coin:0.9, heart:1.1};
const HOVER = 1.55;            // öğelerin plaktan yüksekliği (R biriminde)
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
    this.trail = new PointCloud(40, dotTexture());
    this.particles = new PointCloud(900, dotTexture());
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
    const bob = Math.sin(t*2.4 + it.ang*3)*0.14;
    let scale = 1, opacity = 1, spin = 0, flipX = 1;
    if(hazard){
      spin = type==='hazardJump' ? 0 : t*(type==='hazardCreep'?1.1:type==='hazardPulse'?1.0:0.6);
      if(type==='hazardPulse'){
        scale = (0.55+(Math.sin(it.pulsePhase||0)*0.5+0.5)*0.85)/0.975;
        if(!it.pulseDanger) opacity = 0.55;
      }
      if(type==='hazardTwinDecoy') opacity = 0.4+Math.sin(t*9)*0.25;
    } else if(type==='coin' || type==='diamond'){
      flipX = Math.cos(t*3 + it.ang*2);              // jeton gibi dönen 3D çevirme
      if(Math.abs(flipX)<0.12) flipX = 0.12*Math.sign(flipX||1);
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
    // Boss dalgasının öğeleri: altlarında dönen kesikli altın halka.
    if(it.boss){
      if(!v.bossRing){ v.bossRing = flatPlane(bossRingTexture(), 0.8, true); v.root.add(v.bossRing); }
      v.bossRing.visible = true;
      v.bossRing.position.y = 0.05;
      v.bossRing.scale.setScalar(4.2);
      v.bossRing.rotation.y = t*1.5;
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
    p.light = new THREE.PointLight(0xffffff, 3.2, 100, 0);
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
    const bob = Math.sin(t*3)*0.15, h = HOVER + 0.15 + bob;

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
      p.mat.rotation = -lean*0.35;
    }
    const blink = pl.invulT>0 && (Math.floor(pl.invulT/4)%2===0);
    const alpha = blink ? 0 : (pl.ghostT>0 ? 0.5+Math.sin(t*10)*0.15 : 1);
    p.mat.opacity = alpha;
    if(p.model) p.model.visible = p.model.visible && !blink;
    p.glow.position.y = h; p.glow.material.color.copy(linColor(f.playerColor)); p.glow.material.opacity = 0.75*alpha;
    p.light.color.copy(linColor(f.playerColor)); p.light.position.y = h*1.6; p.light.distance = R*16;
    p.shield.visible = pl.shieldHits>0;
    if(p.shield.visible){ p.shield.position.y = h; p.shield.material.opacity = 0.8+Math.sin(t*8)*0.2; }
    p.magnet.visible = pl.magnetT>0;
    if(p.magnet.visible){ p.magnet.rotation.y = t*1.6; p.magnet.material.opacity = 0.45+Math.sin(t*6)*0.2; }
  }

  // ---------------- İz ----------------
  _updateTrail(f, t){
    const tr = this.trail; tr.begin();
    const pl = f.player;
    if((f.inGame || f.inMenu) && pl){
      const pr = pl.curRadius, R = f.PLAYER_R, y = TOP_Y*f.base + 0.5 + R*(HOVER+0.1);
      const style = f.trail, pc = linColor(f.playerColor);
      const tmp = this._tmpCol || (this._tmpCol = new THREE.Color());
      const long = style==='comet' || style==='ribbon';
      const n = long ? 26 : 14, step = long ? 0.022 : 0.05;
      for(let i=1;i<=n;i++){
        const a = pl.ang - i*step, k = 1 - i/(n+1);
        let rad = pr, col = pc, size = R*2*k, alpha = k*0.6;
        if(style==='ribbon') rad = pr + Math.sin(t*4 - i*0.25)*R*0.4;
        else if(style==='sparkle'){ if(i%2===0) continue; col = linColor('#ffffff'); size *= 0.6+((i*37)%10)/10; }
        else if(style==='rainbow'){ col = tmp.setHSL(((t*60+i*22)%360)/360, 0.9, 0.65); }
        else if(style==='quantum'){ col = i%2===0 ? pc : linColor('#7fe8ff'); size *= 1+Math.sin(t*6-i*0.8)*0.25; }
        else if(style==='phantom'){ col = linColor('#eaf2ff'); size *= 1.1; alpha *= 0.55; }
        else if(style==='season1_trail'){ col = linColor(i%2===0 ? '#54e0ff' : '#fff6c8'); size *= 1+Math.sin(t*5-i*0.6)*0.2; }
        else if(style==='season2_trail'){ col = tmp.setHSL((28+Math.sin(t*3-i*0.4)*10)/360, 0.95, Math.max(35,60-i*2)/100); }
        if(long) size *= 1.3;
        tr.push(Math.cos(a)*rad, y, Math.sin(a)*rad, size, col, alpha);
      }
    }
    tr.end();
  }

  // ---------------- Parçacıklar ----------------
  _updateParticles(f){
    const P = this.particles; P.begin();
    const R = f.PLAYER_R, baseY = TOP_Y*f.base + 0.5;
    for(const p of f.particles){
      if(p.life<=0) continue;
      const y = baseY + R*(1.2 + (1-p.life)*1.4);
      P.push(p.x - f.CX, y, p.y - f.CY, p.r*p.life*3.2, linColor(p.color), Math.min(1, p.life*1.2));
    }
    P.end();
  }

  setPointScale(s){ this.trail.mat.uniforms.uScale.value = s; this.particles.mat.uniforms.uScale.value = s; }

  update(dt, t, f){
    this.frame++;
    const styleKey = (f.themeKey||'') + '|' + (f.colorblind?1:0);
    this._updateItems(f, t, dt, styleKey);
    this._updatePlayer(f, t, dt);
    this._updateTrail(f, t);
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
