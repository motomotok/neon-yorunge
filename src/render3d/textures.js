// Prosedürel dokular: manifest'te karşılığı verilmeyen her şey (plak
// olukları, etiket, parlama, gölge, parçacık noktası) burada canvas'a
// çizilip THREE.CanvasTexture'a çevrilir. Böylece hiç asset verilmese bile
// 3D mod eksiksiz çalışır; asset geldikçe bunların yerini alır.
import * as THREE from 'three';

function canvas(size){
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return c;
}
function toTex(c, srgb=true){
  const t = new THREE.CanvasTexture(c);
  if(srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// Yumuşak radyal parlama (glow sprite'ları, oyuncu hâlesi, ışık lekeleri).
let _glow = null;
export function glowTexture(){
  if(_glow) return _glow;
  const c = canvas(128), g = c.getContext('2d');
  const gr = g.createRadialGradient(64,64,0,64,64,64);
  gr.addColorStop(0,'rgba(255,255,255,1)');
  gr.addColorStop(0.25,'rgba(255,255,255,.55)');
  gr.addColorStop(0.6,'rgba(255,255,255,.12)');
  gr.addColorStop(1,'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0,0,128,128);
  return (_glow = toTex(c));
}

// Zemindeki yuvarlak "blob" gölge — gerçek gölge haritasından çok daha ucuz,
// mobilde 60 FPS'i korur ve 2.5D görünümde derinlik hissinin ana kaynağı.
let _shadow = null;
export function shadowTexture(){
  if(_shadow) return _shadow;
  const c = canvas(64), g = c.getContext('2d');
  const gr = g.createRadialGradient(32,32,0,32,32,32);
  gr.addColorStop(0,'rgba(0,0,0,.75)');
  gr.addColorStop(0.5,'rgba(0,0,0,.35)');
  gr.addColorStop(1,'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0,0,64,64);
  return (_shadow = toTex(c, false));
}

// Plak yüzeyi: yoğun ince oluklar + birkaç belirgin "parça arası" boşluk.
// CylinderGeometry'nin kapak UV'leri düzlemsel daire olduğu için radyal
// çizim doğrudan doğru yere oturur.
export function vinylTexture(size=1024){
  const c = canvas(size), g = c.getContext('2d'), R = size/2;
  g.fillStyle = '#0b0807'; g.fillRect(0,0,size,size);
  for(let r=R*0.3; r<R*0.985; r+=1.6){
    const a = 0.05 + 0.05*Math.random();
    g.strokeStyle = `rgba(255,255,255,${a})`;
    g.lineWidth = 0.7;
    g.beginPath(); g.arc(R,R,r,0,Math.PI*2); g.stroke();
  }
  for(const k of [0.52,0.7,0.86]){
    g.strokeStyle = 'rgba(0,0,0,.85)'; g.lineWidth = 5;
    g.beginPath(); g.arc(R,R,R*k,0,Math.PI*2); g.stroke();
  }
  g.strokeStyle = 'rgba(255,255,255,.18)'; g.lineWidth = 3;
  g.beginPath(); g.arc(R,R,R*0.99,0,Math.PI*2); g.stroke();
  return toTex(c);
}

// Plak yüzeyinin pürüzlülük haritası: olukların arası daha mat, oluk
// kenarları daha parlak — ışık plak üzerinde gezinince "gerçek vinil" parlar.
export function vinylRoughnessTexture(size=512){
  const c = canvas(size), g = c.getContext('2d'), R = size/2;
  g.fillStyle = '#6a6a6a'; g.fillRect(0,0,size,size);
  for(let r=R*0.3; r<R*0.985; r+=1.2){
    const v = 60 + Math.floor(Math.random()*90);
    g.strokeStyle = `rgb(${v},${v},${v})`; g.lineWidth = 0.6;
    g.beginPath(); g.arc(R,R,r,0,Math.PI*2); g.stroke();
  }
  return toTex(c, false);
}

// Sabit (plakla dönmeyen) yansıma: konik iki parlak dilim. Plak altında
// dönerken bu yerinde kaldığı için klasik "dönen vinil" parıltısı oluşur.
export function sheenTexture(size=512){
  const c = canvas(size), g = c.getContext('2d'), R = size/2;
  if(typeof g.createConicGradient === 'function'){
    const gr = g.createConicGradient(-Math.PI/4, R, R);
    gr.addColorStop(0,'rgba(255,255,255,0)');
    gr.addColorStop(0.06,'rgba(255,255,255,.55)');
    gr.addColorStop(0.14,'rgba(255,255,255,0)');
    gr.addColorStop(0.5,'rgba(255,255,255,0)');
    gr.addColorStop(0.56,'rgba(255,255,255,.4)');
    gr.addColorStop(0.64,'rgba(255,255,255,0)');
    gr.addColorStop(1,'rgba(255,255,255,0)');
    g.fillStyle = gr;
  } else {
    g.fillStyle = 'rgba(255,255,255,.08)';
  }
  g.beginPath(); g.arc(R,R,R,0,Math.PI*2); g.arc(R,R,R*0.3,0,Math.PI*2,true); g.fill();
  return toTex(c);
}

// Plak etiketi: tema rengi zemin + iç halkalar + başlık. Tema değişince
// yeniden üretilir (bkz. world.js setTheme).
export function labelTexture(color, size=512){
  const c = canvas(size), g = c.getContext('2d'), R = size/2;
  const gr = g.createRadialGradient(R*0.8,R*0.7,0,R,R,R);
  gr.addColorStop(0,'#ffffff'); gr.addColorStop(0.18,color); gr.addColorStop(1,shade(color,-0.35));
  g.fillStyle = gr; g.beginPath(); g.arc(R,R,R,0,Math.PI*2); g.fill();
  g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 4;
  for(const k of [0.92,0.62]){ g.beginPath(); g.arc(R,R,R*k,0,Math.PI*2); g.stroke(); }
  g.fillStyle = 'rgba(20,10,8,.85)';
  g.font = `900 ${Math.round(size*0.11)}px Orbitron, sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('BEAT', R, R*0.62);
  g.fillText('ORBIT', R, R*1.38);
  return toTex(c);
}

// Parçacık/iz noktaları için yumuşak dairesel nokta (Points shader'ında map).
let _dot = null;
export function dotTexture(){
  if(_dot) return _dot;
  const c = canvas(64), g = c.getContext('2d');
  const gr = g.createRadialGradient(32,32,0,32,32,32);
  gr.addColorStop(0,'rgba(255,255,255,1)');
  gr.addColorStop(0.4,'rgba(255,255,255,.8)');
  gr.addColorStop(1,'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0,0,64,64);
  return (_dot = toTex(c));
}

// Boss öğelerinin altında dönen kesikli altın halka.
let _bossRing = null;
export function bossRingTexture(){
  if(_bossRing) return _bossRing;
  const c = canvas(128), g = c.getContext('2d');
  g.strokeStyle = '#ffd24a'; g.lineWidth = 7; g.setLineDash([14,9]);
  g.beginPath(); g.arc(64,64,54,0,Math.PI*2); g.stroke();
  return (_bossRing = toTex(c));
}

export function shade(hex, amt){
  const h = hex.replace('#','');
  const n = parseInt(h.length===3 ? h.split('').map(x=>x+x).join('') : h, 16);
  const f = v=>Math.max(0, Math.min(255, Math.round(v + (amt<0 ? v*amt : (255-v)*amt))));
  const r = f((n>>16)&255), gg = f((n>>8)&255), b = f(n&255);
  return '#'+((1<<24)|(r<<16)|(gg<<8)|b).toString(16).slice(1);
}
