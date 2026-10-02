// Sahnenin sabit kısmı: arka plan (yıldızlar/nebula/toz), pikap platteri,
// plak, oyun halkaları (plak olukları), etiket ("güneş"), pikap kolu ve
// ışıklar. Bu grup "base" birimde (1 = min(W,H)) kurulur ve resize'da
// tek bir scale ile piksel ölçeğine getirilir — böylece engine.js'in piksel
// koordinatları (RINGS, PLAYER_R) birebir aynı kalır.
import * as THREE from 'three';
import { glowTexture, shadowTexture, vinylTexture, vinylRoughnessTexture, sheenTexture, labelTexture, dotTexture, shade } from './textures.js';
import { resolveSlot, instantiateModel } from './assets.js';
import { RibbonBatch, jagged } from './ribbon.js';
import { buildThemeScene, disposeThemeScene } from './themes.js';

// engine.js: RINGS=[base*0.19, base*0.285, base*0.38]
export const RING_K = [0.19, 0.285, 0.38];
export const DISC_R = 0.44;       // plak yarıçapı (en dış halkanın biraz dışı)
export const DISC_H = 0.012;      // plak kalınlığı
export const LABEL_R = 0.105;     // etiket ("güneş") yarıçapı
export const TOP_Y = DISC_H;      // plak üst yüzeyi (base birimde)

// Pikap kolu geometrisi (base birimde). Dinlenmede plağın sağ-üst dışında
// durur, boss uyarısında (bossIntensity 0->1) etikete doğru iner — 2D
// sürümdeki drawBossTelegraph() ile aynı "iğne plağa vurunca boss patlar".
const ARM_PIVOT = new THREE.Vector3(0.36, 0, -0.42);
const ARM_LEN = 0.5;
const ARM_REST_YAW = 0.5;    // dinlenmede kol tamamen plağın dışında (sağda) bekler; yalnızca boss'ta içeri girer
const ARM_STRIKE_YAW = Math.atan2(-ARM_PIVOT.x, -ARM_PIVOT.z) + 0.06;
const ARM_H = 0.05;
// İğne ucunun kol eksenine göre yanal kayması (kırılmalı tüp, bkz. _buildTonearm).
const ARM_TIP_X = -0.04;
// İğne ucunun plak yüzeyine tam değdiği eğim.
const ARM_STRIKE_TILT = Math.asin(Math.max(0, ARM_H - 0.038 - DISC_H)/ARM_LEN); // 0.038: iğne ucunun kol eksenine göre derinliği
const ELECTRIC = '#7fe8ff';

// Kırılmalı tüpün yanal kayması: kolun ilk ~%55'i düz, sonra uca kadar ARM_TIP_X'e iner.
function _armKinkX(along){ const k = Math.max(0, Math.min(1, (along-0.55)/0.35)); return ARM_TIP_X*k*k*(3-2*k); }

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
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x000000, 0.55);
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
    dots.visible = false;   // konseptlerde yok — sade görünüm için kapalı (tema isterse açar)
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
    this.sheen = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({map:sheenTexture(), transparent:true, opacity:0.12,
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

  // Pikap kolu — Retro Beats konseptindeki gibi: koyu yuvarlak taban, kolla
  // dönen pirinç pivot kutusu, ortasında kırılma olan pirinç tüp, arkada
  // karşı ağırlık, büyük dikdörtgen kafa ve kırmızı-turuncu parlayan iğne
  // ucu; plağa düşen yumuşak gölge. Malzeme rengi temaya göre (armMetal).
  _buildTonearm(){
    this.arm = new THREE.Group();
    this.arm.position.copy(ARM_PIVOT);
    const metal = new THREE.MeshStandardMaterial({color:0xb8925a, metalness:0.85, roughness:0.32});
    this.armMetal = metal;   // tema rengi (ör. Retro'da pirinç) setTheme'de ayarlanır
    const dark = new THREE.MeshStandardMaterial({color:0x1c1512, metalness:0.4, roughness:0.6});
    const darker = new THREE.MeshStandardMaterial({color:0x2a211c, metalness:0.7, roughness:0.4});
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.09, 0.012, 48), dark);
    plinth.position.y = 0.006;
    const plinthRing = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.0025, 8, 64), darker);
    plinthRing.rotation.x = Math.PI/2; plinthRing.position.y = 0.0125;
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.016, ARM_H, 20), darker);
    post.position.y = ARM_H/2;
    this.arm.add(plinth, plinthRing, post);

    this.armSwing = new THREE.Group();      // yaw (Y ekseni)
    this.armTilt = new THREE.Group();       // iniş (X ekseni)
    this.armSwing.position.y = ARM_H;
    this.armSwing.add(this.armTilt);
    this.arm.add(this.armSwing);
    // Pivot kutusu (gimbal) kolla birlikte döner.
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 0.065), metal);
    housing.position.set(0, 0.004, 0);
    // Kırılmalı tüp: düz iner, kafaya yakın içe doğru kırılır.
    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0.01), new THREE.Vector3(0, 0, 0.26), new THREE.Vector3(-0.012, 0, 0.33),
      new THREE.Vector3(-0.03, 0, 0.39), new THREE.Vector3(ARM_TIP_X, -0.004, 0.44),
    ]);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(path, 48, 0.015, 16, false), metal);
    const weight = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.06, 28), darker);
    weight.rotation.x = Math.PI/2; weight.position.z = -0.06;
    const weightCap = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.008, 28), metal);
    weightCap.rotation.x = Math.PI/2; weightCap.position.z = -0.088;
    // Kafa (headshell + kartuş) ve parmak tutamağı.
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.056, 0.024, 0.09), metal);
    head.position.set(ARM_TIP_X, -0.01, ARM_LEN-0.035);
    const cart = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.014, 0.05), darker);
    cart.position.set(ARM_TIP_X, -0.026, ARM_LEN-0.025);
    const lift = new THREE.Mesh(new THREE.CylinderGeometry(0.0025, 0.0025, 0.03, 8), metal);
    lift.rotation.z = Math.PI/2; lift.position.set(ARM_TIP_X-0.032, -0.004, ARM_LEN-0.045);
    this.stylusMat = new THREE.MeshStandardMaterial({color:0xff5a1f, emissive:0xff4a10, emissiveIntensity:0.9, roughness:0.4});
    const stylus = new THREE.Mesh(new THREE.ConeGeometry(0.006, 0.016, 12), this.stylusMat);
    stylus.rotation.x = Math.PI; stylus.position.set(ARM_TIP_X, -0.03, ARM_LEN-0.004);
    this.armSwing.add(housing);
    this.armTilt.add(tube, weight, weightCap, head, cart, lift, stylus);
    // Plağa düşen yumuşak gölge (ışık sol üstten → gölge sağ alta kayık).
    const sg = new THREE.PlaneGeometry(1, 1); sg.rotateX(-Math.PI/2);
    this.armShadow = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({map:shadowTexture(), transparent:true, opacity:0.5, depthWrite:false}));
    this.armShadow.scale.set(0.09, 1, 0.58);
    this.armShadow.position.set(0.012, -ARM_H + TOP_Y + 0.0015, 0.25);
    this.armSwing.add(this.armShadow);
    this.armProcedural = [plinth, plinthRing, post, housing, tube, weight, weightCap, head, cart, lift, stylus];

    this.armGlow = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(), color:0x5ad1ff, transparent:true,
      opacity:0, depthWrite:false, depthTest:false, blending:THREE.AdditiveBlending}));
    this.armGlow.position.set(ARM_TIP_X, -0.024, ARM_LEN);
    this.armTilt.add(this.armGlow);
    // İğne ucunun sürekli, hafif turuncu parıltısı (görseldeki gibi).
    this.stylusGlow = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(), color:0xff6a2a, transparent:true,
      opacity:0.55, depthWrite:false, depthTest:false, blending:THREE.AdditiveBlending}));
    this.stylusGlow.position.set(ARM_TIP_X, -0.03, ARM_LEN-0.004); this.stylusGlow.scale.setScalar(0.03);
    this.armTilt.add(this.stylusGlow);
    this.armLight = new THREE.PointLight(0x5ad1ff, 0, 0.35, 0);
    this.armLight.position.set(ARM_TIP_X, -0.02, ARM_LEN);
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
    // Kol yerel koordinatı: z boyunca uzunluk, uca yakın kırılma yanal
    // (x) kayma, iğneye doğru aşağı (y) iniş → önce eğim (X), sonra yaw (Y).
    const yaw = this.armYaw, tl = this.armTiltX;
    const ox = _armKinkX(along), oy = -0.038*along*along, oz = ARM_LEN*along;
    const y1 = oy*Math.cos(tl) - oz*Math.sin(tl), z1 = oy*Math.sin(tl) + oz*Math.cos(tl);
    out.set(ARM_PIVOT.x + ox*Math.cos(yaw) + z1*Math.sin(yaw), ARM_H + y1, ARM_PIVOT.z - ox*Math.sin(yaw) + z1*Math.cos(yaw));
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
    this.chargeOrb.position.set(_armKinkX(tr), 0.004, ARM_LEN*tr);
    this.chargeOrb.scale.setScalar((0.045 + 0.03*g + 0.035*tr + 0.08*dis)*flick);
    this.chargeBar.visible = tr > 0 && dis < 1;
    this.chargeBar.scale.set(1, 1, Math.max(0.001, ARM_LEN*tr));
    this.chargeBar.material.opacity = 0.55*flick;
    this.armLight.position.set(_armKinkX(tr), -0.01, ARM_LEN*tr);
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
  flashRing(i){
    if(i>=0 && i<3) this.ringFlash[i] = 1;
    if(this.themeScene && this.themeScene.onNote) this.themeScene.onNote(i);
  }
  // Kamera değişince tema süsleri ekrandaki boş alanlara yeniden yerleşir.
  setView(view){
    this.view = view;
    if(this.themeScene && this.themeScene.layout) this.themeScene.layout(view);
  }

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

  // Etiket dokusu: tema görseli (art) daha büyük ve daha az parlatılmış
  // çizilir ki renkleri korunsun; prosedürel etiket eski görünümünde kalır.
  _setLabel(t, art){
    // Tema görseli ışıktan etkilenmeyen (unlit) malzemeyle çizilir: ortadaki
    // nokta ışık ve bloom görselin renklerini yakıp soldurmasın.
    if(!this.labelArtMat) this.labelArtMat = new THREE.MeshBasicMaterial({color:0xd9d9d9});
    const old = art ? this.labelArtMat.map : this.labelMat.map;
    if(art){ this.labelArtMat.map = t; this.labelArtMat.needsUpdate = true; this.label.material = this.labelArtMat; }
    else {
      this.labelMat.map = t; this.labelMat.emissiveMap = t; this.labelMat.emissiveIntensity = 0.35;
      this.labelMat.needsUpdate = true; this.label.material = this.labelMat;
    }
    this.label.scale.setScalar(art ? 1.28 : 1);
    this.labelGlow.material.opacity = art ? 0 : 0.35;
    if(old && old !== t && old.userData.generated && art) old.dispose();
  }

  setTheme(key, T){
    if(this.themeKey === key) return;
    this.themeKey = key;
    // Tema sahnesi (bkz. themes.js): etiket görseli, plak/kol rengi, arka
    // plan ve temaya özel efektler. Önceki tema tamamen temizlenir.
    if(this.themeScene) disposeThemeScene(this.themeScene);
    const sc = this.themeScene = buildThemeScene(key, this);
    this.root.add(sc.group);
    if(this.view && sc.layout) sc.layout(this.view);
    this.themeBackground = sc.background || null;
    this.vinylMat.color.set(sc.vinyl || '#ffffff');
    this.armMetal.color.set(sc.armMetal || '#cfd5e0');
    this.starMat.opacity = sc.stars ?? 1; this.stars.visible = (sc.stars ?? 1) > 0;
    this.nebula.forEach(s=>{ s.material.opacity = sc.nebula ?? 0.22; s.visible = (sc.nebula ?? 0.22) > 0; });
    this.dustMat.opacity = sc.dust ?? 0.3; this.dust.visible = (sc.dust ?? 0.3) > 0;
    this.sheen.material.opacity = sc.sheen ?? 0.12;
    this.strobe.visible = !!sc.strobe;
    this.bloomBase = sc.bloom ?? 0.45;
    if(!this.customLabel){
      // Görsel yüklenene kadar (ya da yüklenemezse) prosedürel etiket.
      if(this.labelMat.map && this.labelMat.map.userData.generated) this.labelMat.map.dispose();
      const gen = labelTexture(T.sun); gen.userData.generated = true;
      this._setLabel(gen, false);
      sc.labelPromise.then(t=>{ if(t && this.themeScene===sc && !this.customLabel) this._setLabel(t, true); });
    }
    this.labelGlow.material.color.set(T.sun);
    this.centerLight.color.set(T.sun);
    this.hemi.color.set(T.sf); this.hemi.groundColor.set(T.bg1);
    this.rim.color.set(T.star);
    this.starMat.color.set(shade(T.sf, 0.4));
    this.dustMat.color.set(T.star);
    const nebCols = [T.bg1, T.peril, T.player];
    this.nebula.forEach((s,i)=>s.material.color.set(shade(nebCols[i%nebCols.length], 0.1)));
    this.ringColor = (this.themeScene && this.themeScene.ringColor) || T.star;
    this.ringStyle = null;   // halka renkleri yeni temaya göre bir sonraki setRingStyle'da yeniden uygulansın
  }

  // Halkalar: oynanışta yalnızca plağa kazınmış silik bir oluk çizgisi
  // (renkli ışık yok). Pena o halkada nota topladığında halka tema renginde
  // bir an yanıp söner — her toplama küçük bir "kazanım" ışığı.
  setRingStyle(style){
    if(this.ringStyle === style) return;
    this.ringStyle = style;
    const sc = this.themeScene || {};
    const base = new THREE.Color(sc.ringBaseColor || '#d8d2c8');
    const flashCol = new THREE.Color(sc.ringFlash || this.ringColor || '#ffcf7a');
    for(const r of this.rings){
      r.baseCol = base; r.flashCol = flashCol; r.baseOp = sc.ringBase ?? 0.12;
      r.core.material.color.copy(base); r.core.material.opacity = r.baseOp;
      r.halo.material.color.copy(flashCol); r.halo.material.opacity = 0;
      r.twin.visible = false;
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
    this.centerLight.intensity = 0.6 + Math.sin(t*2)*0.1;   // eskiden 2.0: tüm plağı turuncuya boyuyordu
    // Toz zerreleri: yavaş yörünge + nefes alan yükseklik.
    const p = this.dust.geometry.attributes.position.array, s = this.dustSeed;
    for(let i=0;i<s.length/3;i++){
      const a = s[i*3] + t*0.03*(i%3+1), r = s[i*3+1];
      p[i*3] = Math.cos(a)*r; p[i*3+1] = s[i*3+2] + Math.sin(t*0.6+i)*0.01; p[i*3+2] = Math.sin(a)*r;
    }
    this.dust.geometry.attributes.position.needsUpdate = true;

    this._updateElectric(dt, t, f);
    if(this.themeScene && this.themeScene.update) this.themeScene.update(dt, t, f);

    // Oluk parlamaları: nota (ringFlash) ve boss elektriği (elec).
    const ef = this.elec > 0 ? this.elec*(0.6 + Math.random()*0.4) : 0;
    for(let i=0;i<3;i++){
      const r = this.rings[i];
      if(!r.baseCol) continue;
      this.ringFlash[i] = Math.max(0, this.ringFlash[i] - dt*0.045);   // ~0.4 sn
      const fl = this.ringFlash[i]*this.ringFlash[i];                  // hızlı yanar, yumuşak söner
      r.core.material.color.copy(r.baseCol).lerp(r.flashCol, Math.min(1, fl*1.5)).lerp(this._elecCol, ef);
      r.core.material.opacity = Math.min(1, r.baseOp + fl*0.75 + ef*0.6);
      r.halo.material.color.copy(r.flashCol).lerp(this._elecCol, ef);
      r.halo.material.opacity = fl*0.3 + ef*0.35;
    }

    for(const m of this.mixers) if(m) m.update(dt/60);
  }
}
