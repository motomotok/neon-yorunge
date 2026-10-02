// Plak yüzeyine (XZ düzlemine) yatan, kalınlığı ve rengi nokta nokta
// değişebilen şerit çizgiler. Pena'nın kazıdığı çizik ve boss
// şimşekleri bu tek bileşeni kullanır. Her karede baştan doldurulur;
// bellek önceden ayrılır, karede yeni dizi/nesne üretilmez.
import * as THREE from 'three';

export class RibbonBatch {
  constructor(maxPts){
    this.maxPts = maxPts;
    const maxV = maxPts*2;
    this.pos = new Float32Array(maxV*3);
    this.col = new Float32Array(maxV*4);
    this.side = new Float32Array(maxV);
    this.index = new Uint16Array(maxPts*6);
    this.tmp = new Float32Array(maxPts*8);     // x,y,z,w,r,g,b,a
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos,3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col,4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSide', new THREE.BufferAttribute(this.side,1).setUsage(THREE.DynamicDrawUsage));
    g.setIndex(new THREE.BufferAttribute(this.index,1).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0,0);
    this.geo = g;
    this.mat = new THREE.ShaderMaterial({
      vertexShader:`
        attribute vec4 aColor; attribute float aSide; varying vec4 vC; varying float vS;
        void main(){ vC=aColor; vS=aSide; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader:`
        varying vec4 vC; varying float vS;
        void main(){
          float e = 1.0-abs(vS);
          float core = smoothstep(0.6,1.0,e);
          float a = vC.a*(e*e*0.75 + core*0.5);
          gl_FragColor = vec4(vC.rgb + core*0.45, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent:true, depthWrite:false, blending:THREE.AdditiveBlending,
    });
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false;
    this.v = 0; this.i = 0; this.sn = 0;
  }
  begin(){ this.v = 0; this.i = 0; }
  strip(){ this.sn = 0; }
  // Bir noktanın kalınlığı (w) ve rengi (linear r,g,b + alpha).
  p(x,y,z,w,r,g,b,a){
    if(this.sn >= this.maxPts) return;
    const o = this.sn*8, t = this.tmp;
    t[o]=x; t[o+1]=y; t[o+2]=z; t[o+3]=w; t[o+4]=r; t[o+5]=g; t[o+6]=b; t[o+7]=a;
    this.sn++;
  }
  endStrip(){
    const n = this.sn, t = this.tmp;
    if(n < 2 || this.v + n*2 > this.maxPts*2 || this.i + (n-1)*6 > this.index.length) return;
    const v0 = this.v;
    for(let k=0;k<n;k++){
      const o = k*8;
      const pa = (k>0 ? k-1 : k)*8, pb = (k<n-1 ? k+1 : k)*8;
      let tx = t[pb]-t[pa], tz = t[pb+2]-t[pa+2];
      const l = Math.hypot(tx,tz) || 1; tx/=l; tz/=l;
      const hw = t[o+3]*0.5, nx = -tz*hw, nz = tx*hw;
      for(let s=-1;s<=1;s+=2){
        const vi = this.v++;
        this.pos[vi*3]=t[o]+nx*s; this.pos[vi*3+1]=t[o+1]; this.pos[vi*3+2]=t[o+2]+nz*s;
        this.col[vi*4]=t[o+4]; this.col[vi*4+1]=t[o+5]; this.col[vi*4+2]=t[o+6]; this.col[vi*4+3]=t[o+7];
        this.side[vi]=s;
      }
    }
    for(let k=0;k<n-1;k++){
      const a = v0+k*2, b = a+2;
      const ix = this.index; let i = this.i;
      ix[i++]=a; ix[i++]=a+1; ix[i++]=b; ix[i++]=a+1; ix[i++]=b+1; ix[i++]=b;
      this.i = i;
    }
  }
  end(){
    const g = this.geo;
    g.setDrawRange(0, this.i);
    g.attributes.position.needsUpdate = true;
    g.attributes.aColor.needsUpdate = true;
    g.attributes.aSide.needsUpdate = true;
    g.index.needsUpdate = true;
  }
}

// Zikzaklı şimşek yolu: A'dan B'ye, yatayda (XZ) dik yönde rastgele
// sapmalarla `segs` parçalı bir çizgi. Uçlar sabit, orta kısım en çok sapar.
// out: [x,y,z, x,y,z, ...] (önceden ayrılmış diziye yazar, nokta sayısını döner)
export function jagged(out, ax,ay,az, bx,by,bz, segs, amp){
  const dx = bx-ax, dz = bz-az, l = Math.hypot(dx,dz) || 1;
  const nx = -dz/l, nz = dx/l;
  for(let k=0;k<=segs;k++){
    const u = k/segs, env = Math.sin(u*Math.PI);
    const off = (k===0||k===segs) ? 0 : (Math.random()*2-1)*amp*l*env;
    out[k*3] = ax+dx*u+nx*off; out[k*3+1] = ay+(by-ay)*u; out[k*3+2] = az+dz*u+nz*off;
  }
  return segs+1;
}
