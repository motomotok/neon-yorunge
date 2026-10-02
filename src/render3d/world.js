// Sahnenin sabit kısmı: arka plan (yıldızlar/nebula/toz), pikap platteri,
// plak, oyun halkaları (plak olukları), etiket ("güneş"), pikap kolu ve
// ışıklar. Bu grup "base" birimde (1 = min(W,H)) kurulur ve resize'da
// tek bir scale ile piksel ölçeğine getirilir — böylece engine.js'in piksel
// koordinatları (RINGS, PLAYER_R) birebir aynı kalır.
import * as THREE from 'three';
import { glowTexture, vinylTexture, vinylRoughnessTexture, sheenTexture, labelTexture, dotTexture, shade } from './textures.js';
import { resolveSlot, instantiateModel } from './assets.js';
import { RibbonBatch, jagged } from './ribbon.js';

// engine.js: RINGS=[base*0.19, base*0.285, base*0.38]
export const RING_K = [0.19, 0.285, 0.38];
export const DISC_R = 0.44;       // plak yarıçapı (en dış halkanın biraz dışı)
export const DISC_H = 0.012;      // plak kalınlığı
export const LABEL_R = 0.105;     // etiket ("güneş") yarıçapı
export const TOP_Y = DISC_H;      // plak üst yüzeyi (base birimde)

// Pikap kolu geometrisi (base birimde). Dinlenmede plağın sağ-üst dışında
// durur, boss uyarısında (bossIntensity 0->1) etikete doğru iner — 2D
// sürümdeki drawBossTelegraph() ile aynı "iğne plağa vurunca boss patlar".
const ARM_PIVOT = new THREE.Vector3(0.41, 0, -0.45);
const ARM_LEN = 0.5;
const ARM_REST_YAW = 0.1;
const ARM_STRIKE_YAW = Math.atan2(-ARM_PIVOT.x, -ARM_PIVOT.z) + 0.06;
const ARM_H = 0.05;
// İğne ucunun plak yüzeyine tam değdiği eğim.
const ARM_STRIKE_TILT = Math.asin((ARM_H - 0.012 - DISC_H)/ARM_LEN);
const ELECTRIC = '#7fe8ff';

export class World {
  constructor(scene, manifest){
    this.scene = scene;
    this.manifest = manifest || {};
    this.root = new THREE.Group();          // base birim -> resize'da ölçeklenir
    this.recordSpin = new THREE.Group();    // plakla birlikte dönen kısımlar
    this.root.add(this.recordSpin);
    scene.add(this.root);
    this.themeKey = null;
    this._buildLights();
    this._buildBackground();
    this._buildPlatter();
    this._buildRecord();
    this._buildRings();
    this._buildTonearm();
    this._buildElectric();
    this._applyManifest();
    this.ringFlash = [0,0,0];
    this.afterT = 0;
  }

  _buildLights(){
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x000000, 0.9);
    this.key = new THREE.DirectionalLight(0xffffff, 1.6);
    this.key.position.set(-0.5, 1.2, 0.6);
    this.rim = new THREE.DirectionalLight(0xffffff, 0.7);
    this.rim.position.set(0.7, 0.4, -0.9);
    this.centerLight = new THREE.PointLight(0xffffff, 2.2, 0, 0);
    this.centerLight.position.set(0, 0.06, 0);
    this.root.add(this.hemi, this.key, this.rim, this.centerLight);
  }

  _buildBackground(){
    // Uzak yıldız alanı: kameranın etrafında büyük bir küre kabuğu.
    const n = 1400, pos = new Float32Array(n*3), col = new Float32Array(n*3);
    for(let i=0;i<n;i++){
      const u = Math.random()*2-1, th = Math.random()*Math.PI*2, r = 9+Math.random()*6;
      const s = Math.sqrt(1-u*u);
      pos[i*3]=Math.cos(th)*s*r; pos[i*3+1]=u*r - 3; pos[i*3+2]=Math.sin(th)*s*r;
      const b = 0.5+Math.random()*0.5; col[i*3]=b; col[i*3+1]=b; col[i*3+2]=b;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos,3));
    g.setAttribute('color', new THREE.BufferAttribute(col,3));
    this.starMat = new THREE.PointsMaterial({size:0.035, map:dotTexture(), vertexColors:true, transparent:true,
      depthWrite:false, blending:THREE.AdditiveBlending, fog:false});
    this.stars = new THREE.Points(g, this.starMat);
    this.root.add(this.stars);

    // Nebula lekeleri: plağın altında/ötesinde büyük, yumuşak renk bulutları.
    this.nebula = [];
    const spots = [[-1.6,-1.2,-2.4,3.2],[1.8,-1.4,-1.6,2.6],[0.2,-1.8,1.6,3.0]];
    for(const [x,y,z,s] of spots){
      const m = new THREE.SpriteMaterial({map:glowTexture(), transparent:true, opacity:0.22,
        depthWrite:false, blending:THREE.AdditiveBlending, fog:false});
      const sp = new THREE.Sprite(m); sp.position.set(x,y,z); sp.scale.setScalar(s);
      this.root.add(sp); this.nebula.push(sp);
    }

    // Plağın üstünde süzülen toz zerreleri — sahneye "canlı" hava katar.
    const dn = 90, dpos = new Float32Array(dn*3);
    this.dustSeed = new Float32Array(dn*3);
    for(let i=0;i<dn;i++){
      const a = Math.random()*Math.PI*2, r = Math.random()*0.6;
      this.dustSeed[i*3]=a; this.dustSeed[i*3+1]=r; this.dustSeed[i*3+2]=0.02+Math.random()*0.18;
    }
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(dpos,3));
    this.dustMat = new THREE.PointsMaterial({size:0.006, map:dotTexture(), transparent:true, opacity:0.55,
      depthWrite:false, blending:THREE.AdditiveBlending});
    this.dust = new THREE.Points(dg, this.dustMat);
    this.root.add(this.dust);
  }

  _buildPlatter(){
    // Plağın altındaki metal platter + kenarındaki strobe noktaları.
    const g = new THREE.CylinderGeometry(DISC_R*1.035, DISC_R*1.05, 0.03, 128, 1);
    const m = new THREE.MeshStandardMaterial({color:0x8a8f99, metalness:0.9, roughness:0.32});
    this.platter = new THREE.Mesh(g, m);
    this.platter.position.y = -0.015;
    this.root.add(this.platter);
    const dots = new THREE.Group();
    const dg = new THREE.SphereGeometry(0.0035, 8, 6);
    const dm = new THREE.MeshBasicMaterial({color:0xffe2b0});
    for(let i=0;i<72;i++){
      const a = i/72*Math.PI*2, d = new THREE.Mesh(dg, dm);
      d.position.set(Math.cos(a)*DISC_R*1.045, -0.01, Math.sin(a)*DISC_R*1.045);
      dots.add(d);
    }
    this.strobe = dots;
    this.recordSpin.add(dots);
  }

  _buildRecord(){
    const side = new THREE.MeshStandardMaterial({color:0x111111, roughness:0.4, metalness:0.2});
    this.vinylMat = new THREE.MeshStandardMaterial({map:vinylTexture(), roughnessMap:vinylRoughnessTexture(),
      roughness:0.55, metalness:0.35, color:0xffffff});
    const g = new THREE.CylinderGeometry(DISC_R, DISC_R, DISC_H, 160, 1);
    this.disc = new THREE.Mesh(g, [side, this.vinylMat, side]);
    this.disc.position.y = DISC_H/2;
    this.recordSpin.add(this.disc);

    // Sabit parıltı (dönmez) — klasik vinil yansıması.
    const sg = new THREE.CircleGeometry(DISC_R*0.995, 128);
    sg.rotateX(-Math.PI/2);
    this.sheen = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({map:sheenTexture(), transparent:true, opacity:0.22,
      depthWrite:false, blending:THREE.AdditiveBlending}));
    this.sheen.position.y = TOP_Y + 0.0006;
    this.root.add(this.sheen);

    const lg = new THREE.CircleGeometry(LABEL_R, 96);
    lg.rotateX(-Math.PI/2);
    this.labelMat = new THREE.MeshStandardMaterial({roughness:0.6, metalness:0.05, emissive:0xffffff,
      emissiveIntensity:0.35});
    this.label = new THREE.Mesh(lg, this.labelMat);
    this.label.position.y = TOP_Y + 0.0012;
    this.recordSpin.add(this.label);

    // Etiketin üstündeki ışık hâlesi ("güneş" parlaması, bloom'u besler).
    this.labelGlow = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(), transparent:true, opacity:0.55,
      depthWrite:false, depthTest:false, blending:THREE.AdditiveBlending}));
    this.labelGlow.position.y = TOP_Y + 0.02;
    this.labelGlow.scale.setScalar(LABEL_R*4);
    this.root.add(this.labelGlow);

    const spindle = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.03, 20),
      new THREE.MeshStandardMaterial({color:0xd8dde6, metalness:1, roughness:0.2}));
    spindle.position.y = TOP_Y + 0.015;
    this.root.add(spindle);
  }

  _buildRings(){
    // Oyun halkaları: plağın üstünde parlayan oluklar. Her halka için ince
    // parlak bir çizgi + geniş soluk bir hâle.
    this.rings = [];
    for(const k of RING_K){
      const core = new THREE.Mesh(this._ringGeo(k, 0.0028), new THREE.MeshBasicMaterial({transparent:true, opacity:0.5,
        depthWrite:false, blending:THREE.AdditiveBlending}));
      const halo = new THREE.Mesh(this._ringGeo(k, 0.013), new THREE.MeshBasicMaterial({transparent:true, opacity:0.1,
        depthWrite:false, blending:THREE.AdditiveBlending}));
      const twin = new THREE.Mesh(this._ringGeo(k+0.009, 0.0016), core.material.clone());
      twin.visible = false;
      for(const m of [core, halo, twin]){ m.position.y = TOP_Y + 0.0009; this.root.add(m); }
      this.rings.push({core, halo, twin});
    }
  }
  _ringGeo(r, w){
    const g = new THREE.RingGeometry(r-w, r+w, 160, 1);
    g.rotateX(-Math.PI/2);
    return g;
  }

  _buildTonearm(){
    this.arm = new THREE.Group();
    this.arm.position.copy(ARM_PIVOT);
    const metal = new THREE.MeshStandardMaterial({color:0xcfd5e0, metalness:1, roughness:0.22});
    const dark = new THREE.MeshStandardMaterial({color:0x22232a, metalness:0.6, roughness:0.45});
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.046, 0.03, 40), dark);
    base.position.y = 0.015;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, ARM_H, 20), metal);
    post.position.y = ARM_H/2;
    this.arm.add(base, post);

    this.armSwing = new THREE.Group();      // yaw (Y ekseni)
    this.armTilt = new THREE.Group();       // iniş (X ekseni)
    this.armSwing.position.y = ARM_H;
    this.armSwing.add(this.armTilt);
    this.arm.add(this.armSwing);
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.0055, 0.0055, ARM_LEN, 16), metal);
    tube.rotation.x = Math.PI/2; tube.position.z = ARM_LEN/2;
    const weight = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.04, 24), dark);
    weight.rotation.x = Math.PI/2; weight.position.z = -0.05;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.012, 0.05), dark);
    head.position.set(0, -0.006, ARM_LEN);
    this.armTilt.add(tube, weight, head);
    this.armProcedural = [base, post, tube, weight, head];

    this.armGlow = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(), color:0x5ad1ff, transparent:true,
      opacity:0, depthWrite:false, depthTest:false, blending:THREE.AdditiveBlending}));
    this.armGlow.position.set(0, -0.012, ARM_LEN);
    this.armTilt.add(this.armGlow);
    this.armLight = new THREE.PointLight(0x5ad1ff, 0, 0.35, 0);
    this.armLight.position.set(0, -0.02, ARM_LEN);
    this.armTilt.add(this.armLight);
    this.root.add(this.arm);
  }

  // Boss uyarısının elektrik efekti: kolun sabit ucunda toplanan yük,
  // kol boyunca uca akan enerji topu, koldaki "dolu" parıltı ve plağa
  // yayılan şimşekler (yüzeye yatan şeritler, bkz. ribbon.js).
  _buildElectric(){
    const add = THREE.AdditiveBlending;
    this.bolts = new RibbonBatch(900);
    this.root.add(this.bolts.mesh);
    const cg = new THREE.CylinderGeometry(0.0095, 0.0095, 1, 12, 1, true);
    cg.rotateX(Math.PI/2); cg.translate(0, 0, 0.5);
    this.chargeBar = new THREE.Mesh(cg, new THREE.MeshBasicMaterial({color:ELECTRIC, transparent:true, opacity:0,
      depthWrite:false, blending:add}));
    this.chargeBar.visible = false;
    this.armTilt.add(this.chargeBar);
    const orbMat = new THREE.SpriteMaterial({map:glowTexture(), color:0xbff8ff, transparent:true, opacity:0,
      depthWrite:false, depthTest:false, blending:add});
    this.chargeOrb = new THREE.Sprite(orbMat);
    this.armTilt.add(this.chargeOrb);
    this.baseGlow = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(), color:ELECTRIC, transparent:true,
      opacity:0, depthWrite:false, depthTest:false, blending:add}));
    this.baseGlow.position.y = ARM_H;
    this.arm.add(this.baseGlow);
    this.armYaw = ARM_REST_YAW; this.armTiltX = -0.04;
    this._jag = new Float32Array(3*24);
    this._boltShapes = []; this._boltTs = -1;
    this._elecCol = new THREE.Color(ELECTRIC);
  }

  // Kol üzerindeki bir noktanın (along: 0 = sabit uç, 1 = iğne ucu) kök
  // koordinatı.
  _armPoint(out, along){
    const y = this.armYaw, x = this.armTiltX, L = ARM_LEN*along;
    out.set(ARM_PIVOT.x + Math.sin(y)*Math.cos(x)*L, ARM_H - Math.sin(x)*L - 0.012*along, ARM_PIVOT.z + Math.cos(y)*Math.cos(x)*L);
    return out;
  }

  _addBolt(ax,ay,az, bx,by,bz, segs, amp, w, a, grow){
    const n = jagged(this._jag, ax,ay,az, bx,by,bz, segs, amp);
    this._boltShapes.push({pts:this._jag.slice(0, n*3), n, w, a, grow:grow==null?1:grow});
  }

  // Şimşek şekilleri ~18 kez/sn yeniden üretilir (titreşen, canlı elektrik).
  _regenBolts(ph, t){
    this._boltShapes.length = 0;
    const P = this._p1 || (this._p1 = new THREE.Vector3()), Q = this._p2 || (this._p2 = new THREE.Vector3());
    const surf = TOP_Y + 0.002;
    if(ph && ph.gather > 0 && ph.travel < 1){
      // Yük toplanıyor: kolun sabit ucunun çevresinde çıtırdayan kısa arklar.
      const base = this._armPoint(P, 0);
      const n = 2 + Math.round(ph.gather*3);
      for(let i=0;i<n;i++){
        const a = Math.random()*Math.PI*2, r = 0.03 + Math.random()*0.05*ph.gather;
        this._addBolt(base.x, base.y, base.z, base.x+Math.cos(a)*r, ARM_H*(0.2+Math.random()*0.8), base.z+Math.sin(a)*r,
          6, 0.35, 0.0045, 0.9);
      }
    }
    if(ph && ph.travel > 0 && ph.discharge < 1){
      // Enerji topu kolda ilerliyor: arkasında kolu yalayan arklar.
      const orb = this._armPoint(P, ph.travel);
      for(let i=0;i<3;i++){
        const back = Math.max(0, ph.travel - (0.05 + Math.random()*0.25));
        const q = this._armPoint(Q, back);
        this._addBolt(orb.x, orb.y, orb.z, q.x, q.y, q.z, 7, 0.22, 0.004, 0.85);
      }
      const a = Math.random()*Math.PI*2;
      this._addBolt(orb.x, orb.y, orb.z, orb.x+Math.cos(a)*0.05, orb.y, orb.z+Math.sin(a)*0.05, 5, 0.4, 0.0035, 0.7);
    }
    if(ph && ph.discharge > 0){
      // Boşalma: iğne ucundan plağa doğru, halkalara uzanan dallı şimşekler.
      const tip = this._armPoint(P, 1);
      const grow = Math.min(1, ph.discharge*1.4);
      for(let i=0;i<8;i++){
        const ang = (i/8)*Math.PI*2 + Math.random()*0.5;
        const rr = RING_K[i%3] + (Math.random()-0.5)*0.03;
        const bx = Math.cos(ang)*rr, bz = Math.sin(ang)*rr;
        this._addBolt(tip.x, surf, tip.z, bx, surf, bz, 14, 0.16, 0.009, 1, grow);
        if(Math.random() < 0.7){
          const u = 0.35+Math.random()*0.35, mx = tip.x+(bx-tip.x)*u, mz = tip.z+(bz-tip.z)*u;
          const ba = ang + (Math.random()-0.5)*1.4, br = 0.05+Math.random()*0.08;
          this._addBolt(mx, surf, mz, mx+Math.cos(ba)*br, surf, mz+Math.sin(ba)*br, 6, 0.3, 0.005, 0.8, Math.max(0,(grow-u)/(1-u)));
        }
      }
      // İğne ucu ile plak arasında dikey ark (temas noktası)
      this._addBolt(tip.x, tip.y, tip.z, tip.x+(Math.random()-0.5)*0.02, surf, tip.z+(Math.random()-0.5)*0.02, 4, 0.5, 0.006, 1);
    }
    if(this.afterT > 0){
      // Boss patlaması anı: merkezden dış halkaya kadar elektrik dalgası.
      for(let i=0;i<10;i++){
        const ang = (i/10)*Math.PI*2 + Math.random()*0.4, rr = RING_K[2] + Math.random()*0.05;
        this._addBolt(0, surf, 0, Math.cos(ang)*rr, surf, Math.sin(ang)*rr, 16, 0.14, 0.01, 1, 1);
      }
    }
  }

  _updateElectric(dt, t, f){
    const ph = f.bossPh;
    // Kol pozu: uyarı sırasında doğrudan zaman çizelgesini izler, bitince
    // dinlenme pozisyonuna yumuşakça geri döner.
    if(ph){
      this.armYaw = ARM_REST_YAW + (ARM_STRIKE_YAW-ARM_REST_YAW)*ph.swing;
      this.armTiltX = -0.04 + (ARM_STRIKE_TILT+0.04)*ph.swing;
      if(ph.discharge > 0.85) this._discharging = true;
    } else {
      const k = Math.min(1, 0.035*dt);
      this.armYaw += (ARM_REST_YAW-this.armYaw)*k;
      this.armTiltX += (-0.04-this.armTiltX)*k;
      if(this._discharging){ this._discharging = false; this.afterT = 1; }
    }
    this.afterT = Math.max(0, this.afterT - dt*0.03);
    this.armSwing.rotation.y = this.armYaw;
    this.armTilt.rotation.x = this.armTiltX;

    const flick = 0.75 + Math.random()*0.25;
    const g = ph ? ph.gather : 0, tr = ph ? ph.travel : 0, dis = ph ? ph.discharge : 0;
    const charging = ph && g > 0 && dis < 1;
    this.baseGlow.material.opacity = (ph && tr < 1) ? g*(0.9 - tr*0.6)*flick : 0;
    this.baseGlow.scale.setScalar(0.05 + 0.09*g);
    this.chargeOrb.material.opacity = charging ? flick : 0;
    this.chargeOrb.position.set(0, 0.004, ARM_LEN*tr);
    this.chargeOrb.scale.setScalar((0.045 + 0.03*g + 0.035*tr + 0.08*dis)*flick);
    this.chargeBar.visible = tr > 0 && dis < 1;
    this.chargeBar.scale.set(1, 1, Math.max(0.001, ARM_LEN*tr));
    this.chargeBar.material.opacity = 0.55*flick;
    this.armLight.position.set(0, -0.01, ARM_LEN*tr);
    this.armLight.intensity = ph ? (g*2.5 + tr*3 + dis*7)*flick : this.afterT*8;
    this.armGlow.material.opacity = dis*flick;
    this.armGlow.scale.setScalar(0.08 + dis*0.2);

    if(t - this._boltTs > 0.055){ this._boltTs = t; this._regenBolts(ph, t); }
    const B = this.bolts, c = this._elecCol;
    B.begin();
    const fade = ph ? 1 : this.afterT;
    for(const sh of this._boltShapes){
      const m = Math.max(0, Math.min(sh.n, Math.ceil(sh.n*sh.grow)));
      if(m < 2) continue;
      B.strip();
      for(let i=0;i<m;i++) B.p(sh.pts[i*3], sh.pts[i*3+1], sh.pts[i*3+2], sh.w, c.r, c.g, c.b, sh.a*fade*flick);
      B.endStrip();
    }
    B.end();
    this.elec = Math.max(dis, this.afterT);
  }

  // Nota alınınca pena'nın bulunduğu oluk bir an parlar.
  flashRing(i){ if(i>=0 && i<3) this.ringFlash[i] = 1; }

  // Manifest'teki dünya slotlarını asenkron uygular; yüklenene kadar
  // prosedürel sürüm görünür kalır.
  async _applyManifest(){
    const m = this.manifest;
    const rec = m.record || {};
    const [grooves, label] = await Promise.all([resolveSlot(rec.texture), resolveSlot(rec.label)]);
    if(grooves && grooves.texture){ this.vinylMat.map = grooves.texture; this.vinylMat.needsUpdate = true; }
    if(label && label.texture){ this.customLabel = true; this.labelMat.map = label.texture; this.labelMat.emissiveMap = label.texture; this.labelMat.needsUpdate = true; }

    const recModel = await resolveSlot(rec.model);
    if(recModel && recModel.kind==='model'){
      const {object, mixer} = instantiateModel(recModel, DISC_R*2*(recModel.opts.size||1));
      this.disc.visible = false; this.label.visible = false;
      this.recordSpin.add(object); this.mixers.push(mixer);
    }
    const arm = await resolveSlot((m.tonearm||{}).model);
    if(arm && arm.kind==='model'){
      const {object, mixer} = instantiateModel(arm, ARM_LEN*1.2*(arm.opts.size||1));
      object.position.z = ARM_LEN*0.45;
      for(const p of this.armProcedural) p.visible = false;
      this.armTilt.add(object); this.mixers.push(mixer);
    }
    const deco = await resolveSlot(m.turntable);
    if(deco && deco.kind==='model'){
      const {object, mixer} = instantiateModel(deco, (deco.opts.size||2.2));
      object.position.y = -0.04 - (deco.opts.sink||0);
      this.root.add(object); this.mixers.push(mixer);
    }
  }
  get mixers(){ return this._mixers || (this._mixers = []); }

  // Işık mesafeleri ve nokta boyutları ebeveyn ölçeğinden etkilenmez —
  // piksel ölçeğine elle taşınır.
  resize(base){
    this.root.scale.setScalar(base);
    this.armLight.distance = 0.35*base;
    this.starMat.size = 0.035*base;
    this.dustMat.size = 0.006*base;
  }

  setTheme(key, T){
    if(this.themeKey === key) return;
    this.themeKey = key;
    if(!this.customLabel){
      if(this.labelMat.map) this.labelMat.map.dispose();
      const tex = labelTexture(T.sun);
      this.labelMat.map = tex; this.labelMat.emissiveMap = tex; this.labelMat.needsUpdate = true;
    }
    this.labelGlow.material.color.set(T.sun);
    this.centerLight.color.set(T.sun);
    this.hemi.color.set(T.sf); this.hemi.groundColor.set(T.bg1);
    this.rim.color.set(T.star);
    this.starMat.color.set(shade(T.sf, 0.4));
    this.dustMat.color.set(T.star);
    const nebCols = [T.bg1, T.peril, T.player];
    this.nebula.forEach((s,i)=>s.material.color.set(shade(nebCols[i%nebCols.length], 0.1)));
    this.ringColor = T.star;
  }

  setRingStyle(style){
    if(this.ringStyle === style) return;
    this.ringStyle = style;
    const col = style==='season1_ring' ? '#54e0ff' : style==='season2_ring' ? '#ff8a3d' : this.ringColor || '#ffcf7a';
    const op = {glow:0.85, dotted:0.3, circuit:0.38, double:0.32, classic:0.45}[style] ?? 0.5;
    for(const r of this.rings){
      r.core.material.color.set(col); r.core.material.opacity = op;
      r.baseCol = new THREE.Color(col); r.baseOp = op;
      r.halo.material.color.set(col); r.halo.material.opacity = style==='glow' ? 0.22 : 0.1;
      r.twin.material.color.set(style==='season1_ring' ? '#ffd24a' : col);
      r.twin.visible = style==='double' || style==='season1_ring';
    }
  }

  update(dt, t, f){
    // Plak 33⅓ devirden çok daha yavaş, sakin döner; oyunda hızla birlikte
    // biraz hızlanır (ritim hissi).
    const speed = f.inGame ? 0.35 + (f.player ? f.player.speed*0.12 : 0) : 0.25;
    this.recordSpin.rotation.y -= speed*dt/60;
    this.stars.rotation.y += 0.0004*dt;
    const beat = 1 + Math.sin(t*2)*0.05;
    this.labelGlow.scale.setScalar(LABEL_R*4*beat);
    this.centerLight.intensity = 2.0 + Math.sin(t*2)*0.4;
    // Toz zerreleri: yavaş yörünge + nefes alan yükseklik.
    const p = this.dust.geometry.attributes.position.array, s = this.dustSeed;
    for(let i=0;i<s.length/3;i++){
      const a = s[i*3] + t*0.03*(i%3+1), r = s[i*3+1];
      p[i*3] = Math.cos(a)*r; p[i*3+1] = s[i*3+2] + Math.sin(t*0.6+i)*0.01; p[i*3+2] = Math.sin(a)*r;
    }
    this.dust.geometry.attributes.position.needsUpdate = true;

    this._updateElectric(dt, t, f);

    // Oluk parlamaları: nota (ringFlash) ve boss elektriği (elec).
    const white = this._white || (this._white = new THREE.Color('#ffffff'));
    const pulseOp = this.ringStyle==='pulse' ? Math.max(0.08, 0.25 + Math.sin(t*3)*0.2) : null;
    const ef = this.elec > 0 ? this.elec*(0.6 + Math.random()*0.4) : 0;
    for(let i=0;i<3;i++){
      const r = this.rings[i];
      if(!r.baseCol) continue;
      this.ringFlash[i] = Math.max(0, this.ringFlash[i] - dt*0.07);
      const fl = this.ringFlash[i];
      r.core.material.color.copy(r.baseCol).lerp(white, fl*0.2).lerp(this._elecCol, ef);
      r.core.material.opacity = Math.min(1, (pulseOp ?? r.baseOp) + fl*0.15 + ef*0.6);
      r.halo.material.color.copy(r.core.material.color);
      r.halo.material.opacity = (this.ringStyle==='glow' ? 0.22 : 0.1) + fl*0.06 + ef*0.35;
    }

    for(const m of this.mixers) if(m) m.update(dt/60);
  }
}
