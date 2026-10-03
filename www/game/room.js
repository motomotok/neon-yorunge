// ---------------------------------------------------------------------------
// Retro Oda menüsü + sinematik giriş ("elektrik kaçağı").
//
// Ana menünün arkasında, gece vakti retro bir oturma odası: yağmurlu pencere,
// titreyen abajur, duvarda altın plak ödülü, masada dönen bir gramofon ve
// borusundan süzülen notalar. BAŞLA'ya basılınca (oturumda ilk kez) ~4.5 sn'lik
// bir giriş oynar: prizde kısa devre → kablo boyunca elektrik gramofona akar →
// plak elektriklenir, cızırtılar plaktan fışkırır → kamera plağın içine dalar →
// oyun başlar. Oturumdaki sonraki BAŞLA'larda kısa (~1.2 sn) dalış oynar;
// "Tekrar Oyna" hiç oynatmaz. Ekrana dokunmak girişi atlar.
//
// Tamamen ayrı bir katman (#roomCanvas): Ayarlar > "Retro oda menüsü"
// (cfg.menuScene: 'room' | 'classic') kapatılırsa menü birebir eski hâline
// döner. Oyun mantığına dokunmaz; sadece startGame/startTutorial'ı geciktirir.
// ---------------------------------------------------------------------------
const ROOM_SW = 1000, ROOM_SH = 1700;          // sahne koordinatları (dikey tasarım)
const ROOM_REC = {x:500, y:900, rx:108, ry:26}; // gramofondaki plak (kamera odağı)
const _room = {cv:null, g:null, stat:null, statK:0, w:0, h:0, dpr:1, t:0, last:0,
  notes:[], motes:[], rain:[], lights:[], intro:null, introsPlayed:0, visible:false};

function roomEnabled(){ return (cfg.menuScene||'room')==='room'; }
function roomCovers(){ return _room.visible; }

function _roomInit(){
  if(_room.cv) return true;
  const cv=document.getElementById('roomCanvas'); if(!cv) return false;
  _room.cv=cv; _room.g=cv.getContext('2d');
  for(let i=0;i<70;i++) _room.rain.push({x:Math.random(), y:Math.random(), s:0.6+Math.random()*0.8});
  for(let i=0;i<26;i++) _room.motes.push({x:760+Math.random()*240, y:600+Math.random()*700, ph:Math.random()*9, s:1.5+Math.random()*2.5});
  // Şehir pencereleri (sabit konum, bazıları yanıp söner)
  let seed=7; const r=()=>((seed=(seed*16807)%2147483647)/2147483647);
  for(let i=0;i<46;i++) _room.lights.push({x:90+r()*300, y:470+r()*150, on:r()<0.55, k:r()});
  return true;
}

// Kamera: sahneyi ekrana "cover" sığdırır; menüde hafif yakın (gramofon
// büyük görünsün) ve plak BAŞLA butonunun hemen üstünde (~%44 yükseklik).
const ROOM_MENU_ZOOM = 1.19;
function _roomCam(zoom, fx, fy){
  const W=_room.w, H=_room.h;
  const base=Math.max(W/ROOM_SW, H/ROOM_SH);
  const land = W>H;   // yatay ekranda sahne zaten genişliğe göre büyük; ek yakınlaştırma yok
  const s=base*(land?1:ROOM_MENU_ZOOM)*zoom;
  const tx=W/2, ty=H*(land?0.36:0.44);
  let ox=tx-fx*s, oy=ty-fy*s;
  if(zoom<=1.001){ // kenarlar her zaman ekranı kaplasın
    ox=Math.min(0, Math.max(W-ROOM_SW*s, ox)); oy=Math.min(0, Math.max(H-ROOM_SH*s, oy));
  }
  return {s, ox, oy};
}

// ---------------- Sabit katman (bir kez çizilir) ----------------
function _roomBuildStatic(){
  const k=Math.min(2.2, Math.max(1, Math.max(_room.w/ROOM_SW, _room.h/ROOM_SH)*_room.dpr*1.4));
  if(_room.stat && Math.abs(_room.statK-k)<0.01) return;
  _room.statK=k;
  const c=document.createElement('canvas'); c.width=Math.round(ROOM_SW*k); c.height=Math.round(ROOM_SH*k);
  const g=c.getContext('2d'); g.scale(k,k);
  _roomDrawStatic(g);
  _room.stat=c;
}
function _lg(g,x0,y0,x1,y1,stops){ const gr=g.createLinearGradient(x0,y0,x1,y1); stops.forEach(([o,c])=>gr.addColorStop(o,c)); return gr; }
function _rg(g,x,y,r0,r1,stops){ const gr=g.createRadialGradient(x,y,r0,x,y,r1); stops.forEach(([o,c])=>gr.addColorStop(o,c)); return gr; }
function _rr(g,x,y,w,h,r){ g.beginPath(); g.roundRect(x,y,w,h,r); }

function _roomDrawStatic(g){
  // Duvar: koyu bordo-kahve, ince çizgili duvar kâğıdı
  g.fillStyle=_lg(g,0,0,0,1150,[[0,'#2a140d'],[1,'#3b1d12']]); g.fillRect(0,0,ROOM_SW,1150);
  for(let x=0;x<ROOM_SW;x+=44){ g.fillStyle='rgba(255,210,160,.035)'; g.fillRect(x,0,14,1150); }
  g.fillStyle='rgba(255,210,160,.05)';
  for(let y=40;y<1000;y+=88) for(let x=22;x<ROOM_SW;x+=88){ g.beginPath(); g.moveTo(x,y-7); g.lineTo(x+5,y); g.lineTo(x,y+7); g.lineTo(x-5,y); g.fill(); }
  // Lambri
  g.fillStyle=_lg(g,0,1000,0,1150,[[0,'#2b150a'],[1,'#1c0d06']]); g.fillRect(0,1000,ROOM_SW,150);
  g.fillStyle='#4a2a16'; g.fillRect(0,992,ROOM_SW,12);
  g.strokeStyle='rgba(0,0,0,.35)'; g.lineWidth=3; for(let x=30;x<ROOM_SW;x+=140){ g.strokeRect(x,1022,110,108); }
  // Zemin: perspektif parke
  g.fillStyle=_lg(g,0,1150,0,1700,[[0,'#3a1e0f'],[1,'#6a3b1e']]); g.fillRect(0,1150,ROOM_SW,550);
  g.strokeStyle='rgba(0,0,0,.28)'; g.lineWidth=2;
  for(let i=-14;i<=14;i++){ g.beginPath(); g.moveTo(500+i*36,1150); g.lineTo(500+i*150,1700); g.stroke(); }
  for(let y=1180, d=24; y<1700; y+=d, d*=1.18){ g.strokeStyle='rgba(0,0,0,.12)'; g.beginPath(); g.moveTo(0,y); g.lineTo(ROOM_SW,y); g.stroke(); }
  // Halı
  g.save(); g.translate(500,1440); g.scale(1,0.34);
  g.fillStyle='#5e1518'; g.beginPath(); g.arc(0,0,440,0,7); g.fill();
  g.lineWidth=18; g.strokeStyle='#b9873a'; g.beginPath(); g.arc(0,0,400,0,7); g.stroke();
  g.lineWidth=6; g.strokeStyle='rgba(255,220,150,.35)'; g.setLineDash([16,14]); g.beginPath(); g.arc(0,0,340,0,7); g.stroke(); g.setLineDash([]);
  g.fillStyle='rgba(0,0,0,.18)'; g.beginPath(); g.arc(0,0,280,0,7); g.fill(); g.restore();

  // Pencere (gece şehir) — yağmur dinamik katmanda
  g.fillStyle=_lg(g,0,180,0,640,[[0,'#0a1030'],[1,'#22305e']]); g.fillRect(90,180,320,460);
  g.fillStyle=_rg(g,320,265,0,80,[[0,'rgba(255,250,220,.5)'],[1,'rgba(255,250,220,0)']]); g.fillRect(240,185,165,170);
  g.fillStyle='#f4ecd0'; g.beginPath(); g.arc(320,265,26,0,7); g.fill();
  g.fillStyle='#0a1030'; g.beginPath(); g.arc(332,258,22,0,7); g.fill();   // hilal
  let seed=3; const r=()=>((seed=(seed*16807)%2147483647)/2147483647);
  for(let x=90;x<410;){ const w=24+r()*46, h=60+r()*150; g.fillStyle='#0b0d1c'; g.fillRect(x,640-h,w,h); x+=w+2; }
  // Pencere çerçevesi ve kayıtlar
  g.strokeStyle='#4a2a16'; g.lineWidth=18; g.strokeRect(90,180,320,460);
  g.lineWidth=10; g.beginPath(); g.moveTo(250,180); g.lineTo(250,640); g.moveTo(90,410); g.lineTo(410,410); g.stroke();
  g.fillStyle='#5a3218'; g.fillRect(70,640,360,20);
  // Perdeler (kadife)
  for(const [x0,x1,dir] of [[40,140,1],[360,460,-1]]){
    g.fillStyle=_lg(g,x0,0,x1,0,[[0,'#4a0f12'],[.3,'#8e2026'],[.55,'#5c1216'],[.8,'#9b2a2f'],[1,'#4a0f12']]);
    g.beginPath(); g.moveTo(x0,150); g.lineTo(x1,150); g.quadraticCurveTo(x1-dir*10,520,(x0+x1)/2+dir*18,560); g.quadraticCurveTo(x0+dir*0,700,x0+(dir>0?0:100),780); g.lineTo(x0+(dir>0?0:100)-dir*40,780); g.closePath(); g.fill();
    g.fillStyle='#c99a45'; g.fillRect((x0+x1)/2-22+dir*10,548,44,12);
  }
  g.fillStyle=_lg(g,0,140,0,160,[[0,'#f2d28a'],[1,'#8a5a1e']]); g.fillRect(24,142,452,10);
  // Duvarda altın plak ödülü
  _rr(g,620,220,260,290,10); g.fillStyle='#2a160c'; g.fill();
  _rr(g,636,236,228,258,6); g.fillStyle='#e9dcc0'; g.fill();
  _rr(g,656,256,188,190,4); g.fillStyle='#1b1410'; g.fill();
  g.fillStyle=_rg(g,735,335,10,78,[[0,'#fff1b0'],[.5,'#e2a83a'],[1,'#7a4a10']]); g.beginPath(); g.arc(750,350,76,0,7); g.fill();
  g.strokeStyle='rgba(0,0,0,.18)'; g.lineWidth=1.2; for(let rr=30;rr<74;rr+=5){ g.beginPath(); g.arc(750,350,rr,0,7); g.stroke(); }
  g.fillStyle='#b5241e'; g.beginPath(); g.arc(750,350,24,0,7); g.fill(); g.fillStyle='#1b1410'; g.beginPath(); g.arc(750,350,4,0,7); g.fill();
  _rr(g,700,458,100,22,3); g.fillStyle='#c99a45'; g.fill();
  // Duvar prizi (girişte kısa devre yapar)
  _rr(g,786,1040,40,58,6); g.fillStyle='#d9cdb4'; g.fill(); g.strokeStyle='rgba(0,0,0,.4)'; g.lineWidth=2; g.stroke();
  g.fillStyle='#3a2a1a'; g.beginPath(); g.arc(800,1069,4,0,7); g.arc(812,1069,4,0,7); g.fill();
  // Kablo: prizden gramofona
  g.strokeStyle='#1a1210'; g.lineWidth=7; g.lineCap='round'; g.beginPath(); _roomCablePath(g); g.stroke();
  // Abajur ayağı (ışık dinamik)
  g.fillStyle='#2a1a10'; g.beginPath(); g.ellipse(880,1330,62,16,0,0,7); g.fill();
  g.strokeStyle=_lg(g,872,0,888,0,[[0,'#6b4a1a'],[.5,'#f2d28a'],[1,'#6b4a1a']]); g.lineWidth=12; g.beginPath(); g.moveTo(880,1325); g.lineTo(880,575); g.stroke();
  g.fillStyle=_lg(g,800,0,960,0,[[0,'#a8702e'],[.5,'#f0c37a'],[1,'#a8702e']]);
  g.beginPath(); g.moveTo(838,470); g.lineTo(922,470); g.lineTo(968,585); g.lineTo(792,585); g.closePath(); g.fill();
  g.strokeStyle='#7a4a1a'; g.lineWidth=4; g.beginPath(); g.moveTo(792,585); g.lineTo(968,585); g.stroke();
  // Saksı bitkisi
  g.fillStyle='#1f5a2c';
  for(const [x,y,a,s] of [[120,1180,-.8,1],[160,1150,-.2,1.1],[95,1230,-1.3,.9],[190,1200,.4,1],[140,1230,-.5,.8]]){
    g.save(); g.translate(x,y); g.rotate(a); g.fillStyle=s>1?'#2a7a3a':'#1f6a30'; g.beginPath(); g.ellipse(0,-60*s,34*s,64*s,0,0,7); g.fill();
    g.strokeStyle='rgba(0,0,0,.25)'; g.lineWidth=2; g.beginPath(); g.moveTo(0,0); g.lineTo(0,-118*s); g.stroke(); g.restore(); }
  g.fillStyle=_lg(g,90,0,190,0,[[0,'#8a3e1e'],[.5,'#c66a3a'],[1,'#7a3418']]); g.beginPath(); g.moveTo(92,1260); g.lineTo(188,1260); g.lineTo(176,1360); g.lineTo(104,1360); g.closePath(); g.fill();
  // Plak sandığı
  _rr(g,215,1250,170,120,6); g.fillStyle=_lg(g,215,0,385,0,[[0,'#5a3218'],[1,'#7a4a24']]); g.fill();
  const sleeves=['#c33','#e8a33a','#2f6db5','#d14f8a','#3aa37a','#f2e2c0'];
  sleeves.forEach((c,i)=>{ g.fillStyle=c; g.fillRect(228+i*25,1210+((i*37)%18),20,50); });
  g.strokeStyle='rgba(0,0,0,.3)'; g.lineWidth=3; g.strokeRect(215,1250,170,120);
  // Masa (orta yüzyıl konsol)
  g.fillStyle=_lg(g,0,975,0,1010,[[0,'#8a5228'],[1,'#5a3018']]); _rr(g,215,975,570,30,8); g.fill();
  g.fillStyle=_lg(g,0,1005,0,1180,[[0,'#5a3018'],[1,'#3a1c0c']]); g.fillRect(235,1005,530,175);
  g.strokeStyle='rgba(0,0,0,.35)'; g.lineWidth=3; g.strokeRect(250,1020,240,145); g.strokeRect(510,1020,240,145);
  g.fillStyle='#d9b26a'; for(const x of [370,630]){ _rr(g,x-24,1086,48,9,4); g.fill(); }
  g.strokeStyle='#3a1c0c'; g.lineWidth=12; g.beginPath(); g.moveTo(270,1180); g.lineTo(256,1250); g.moveTo(730,1180); g.lineTo(744,1250); g.stroke();
  // Gramofon gövdesi
  g.fillStyle=_lg(g,390,0,610,0,[[0,'#4a2410'],[.5,'#8a4a22'],[1,'#4a2410']]); _rr(g,385,900,230,80,8); g.fill();
  g.strokeStyle='#d9b26a'; g.lineWidth=4; _rr(g,385,900,230,80,8); g.stroke();
  g.fillStyle='rgba(0,0,0,.35)'; _rr(g,420,925,160,36,6); g.fill();
  g.strokeStyle='rgba(217,178,106,.6)'; g.lineWidth=2; for(let x=430;x<575;x+=12){ g.beginPath(); g.moveTo(x,929); g.lineTo(x,957); g.stroke(); }
  // Tabla (plak dinamik çizilir)
  g.fillStyle='#1a1414'; g.beginPath(); g.ellipse(ROOM_REC.x,ROOM_REC.y,ROOM_REC.rx+14,ROOM_REC.ry+5,0,0,7); g.fill();
  g.strokeStyle='#d9b26a'; g.lineWidth=3; g.beginPath(); g.ellipse(ROOM_REC.x,ROOM_REC.y+2,ROOM_REC.rx+14,ROOM_REC.ry+5,0,0,Math.PI); g.stroke();
  // Boru (horn): gövdenin arkasından yükselip ön-sola açılır
  g.strokeStyle=_lg(g,540,0,600,0,[[0,'#7a4a12'],[.5,'#f2d28a'],[1,'#7a4a12']]); g.lineWidth=20; g.lineCap='round';
  g.beginPath(); g.moveTo(585,905); g.bezierCurveTo(640,860,630,770,560,725); g.stroke();
  g.save(); g.translate(440,640); g.rotate(-0.42);
  g.fillStyle=_rg(g,-30,-20,10,175,[[0,'#fff1c0'],[.35,'#e9b44c'],[.8,'#9a6418'],[1,'#5a3608']]); g.beginPath(); g.ellipse(0,0,165,128,0,0,7); g.fill();
  g.fillStyle=_rg(g,10,8,4,110,[[0,'#140a04'],[.7,'#3a2008'],[1,'rgba(90,54,8,0)']]); g.beginPath(); g.ellipse(14,6,118,90,0,0,7); g.fill();
  g.strokeStyle='rgba(90,54,8,.55)'; g.lineWidth=3; for(let i=0;i<10;i++){ const a=i/10*Math.PI*2; g.beginPath(); g.moveTo(Math.cos(a)*120,Math.sin(a)*92); g.lineTo(Math.cos(a)*163,Math.sin(a)*126); g.stroke(); }
  g.strokeStyle='#f6dfa0'; g.lineWidth=5; g.beginPath(); g.ellipse(0,0,165,128,0,Math.PI*1.05,Math.PI*1.6); g.stroke();
  g.restore();
  g.strokeStyle=_lg(g,540,0,600,0,[[0,'#7a4a12'],[.5,'#f2d28a'],[1,'#7a4a12']]); g.lineWidth=30; g.beginPath(); g.moveTo(560,725); g.lineTo(530,705); g.stroke();
}
function _roomCablePath(g){ g.moveTo(806,1040); g.bezierCurveTo(800,990,700,1000,640,972); g.lineTo(612,962); }
function _roomCablePoint(u){ // kablo boyunca nokta (yaklaşık)
  const p0={x:806,y:1040},p1={x:800,y:990},p2={x:700,y:1000},p3={x:640,y:972};
  if(u>0.85){ const v=(u-0.85)/0.15; return {x:640+(612-640)*v, y:972+(962-972)*v}; }
  const t=u/0.85, mt=1-t;
  return {x:mt*mt*mt*p0.x+3*mt*mt*t*p1.x+3*mt*t*t*p2.x+t*t*t*p3.x, y:mt*mt*mt*p0.y+3*mt*mt*t*p1.y+3*mt*t*t*p2.y+t*t*t*p3.y};
}

// ---------------- Dinamik katman ----------------
function _roomDrawRecord(g, t, squash, elec, zoom){
  const R=ROOM_REC, ry=R.rx*squash;
  g.save(); g.translate(R.x,R.y);
  g.fillStyle='#0c0a0a'; g.beginPath(); g.ellipse(0,0,R.rx,ry,0,0,7); g.fill();
  g.strokeStyle='rgba(255,255,255,.07)'; g.lineWidth=1;
  for(let k=0.42;k<0.98;k+=0.07){ g.beginPath(); g.ellipse(0,0,R.rx*k,ry*k,0,0,7); g.stroke(); }
  // dönen parlama
  const a=t*2.2;
  g.strokeStyle='rgba(255,255,255,.16)'; g.lineWidth=5; g.beginPath(); g.ellipse(0,0,R.rx*0.78,ry*0.78,0,a,a+0.5); g.stroke();
  g.fillStyle='#b5241e'; g.beginPath(); g.ellipse(0,0,R.rx*0.3,ry*0.3,0,0,7); g.fill();
  g.fillStyle='#f2d28a'; g.beginPath(); g.ellipse(Math.cos(a)*R.rx*0.2, Math.sin(a)*ry*0.2, 4, Math.max(1.5,4*squash/0.24*0.5),0,0,7); g.fill();
  g.fillStyle='#d9b26a'; g.beginPath(); g.ellipse(0,0,3,2,0,0,7); g.fill();
  if(elec>0){
    g.globalCompositeOperation='lighter';
    g.fillStyle=`rgba(90,230,255,${0.35*elec})`; g.beginPath(); g.ellipse(0,0,R.rx*1.05,ry*1.05,0,0,7); g.fill();
    g.strokeStyle=`rgba(190,250,255,${0.9*elec})`; g.lineWidth=2.5/Math.max(1,(zoom||1)*0.55);   // dalışta kalınlaşmasın
    for(let i=0;i<7;i++){
      let ang=Math.random()*Math.PI*2, rr=R.rx*0.25;
      g.beginPath(); g.moveTo(Math.cos(ang)*rr, Math.sin(ang)*rr*squash/0.24*0.24);
      for(let s=0;s<5;s++){ rr+=R.rx*0.15; ang+=(Math.random()-0.5)*0.6; g.lineTo(Math.cos(ang)*rr, Math.sin(ang)*rr*(ry/R.rx)); }
      g.stroke();
    }
    g.globalCompositeOperation='source-over';
  }
  g.restore();
  // ton kolu
  g.strokeStyle='#d9b26a'; g.lineWidth=5; g.lineCap='round';
  g.beginPath(); g.moveTo(R.x+R.rx+4, R.y-6); g.lineTo(R.x+R.rx*0.45, R.y+ry*0.25); g.stroke();
  g.fillStyle='#2a1a10'; g.beginPath(); g.arc(R.x+R.rx+4, R.y-6, 8, 0, 7); g.fill();
}

function _roomFrame(dt){
  const g=_room.g, W=_room.w, H=_room.h, t=_room.t;
  const I=_room.intro, it = I ? (I.freeze!=null ? I.freeze : (performance.now()-I.t0)/1000) : 0;   // freeze: test/önizleme için
  // --- giriş zaman çizelgesi ---
  let zoom=1, dark=0, spark=0, arc=0, elec=0, glitch=0, flashA=0, squash=ROOM_REC.ry/ROOM_REC.rx, creatures=0;
  if(I){
    const ease=x=>x<0?0:x>1?1:x*x*(3-2*x);
    if(I.short){
      zoom = 1 + ease(it/1.1)*7.5; squash += (0.92-squash)*ease((it-0.3)/0.8); flashA = ease((it-0.75)/0.35);
    } else {
      zoom = 1 + ease(it/2.6)*0.75 + ease((it-2.9)/1.2)*6.5;
      dark = (it>0.45 && it<1.6) ? (Math.random()<0.35 ? 0.75 : 0.25) : (it>=1.6 && it<3.0 ? 0.3 : 0);
      spark = (it>0.5 && it<1.3) ? 1 : 0;
      arc = Math.max(0, Math.min(1, (it-0.85)/0.65));
      elec = it>1.4 ? Math.min(1,(it-1.4)/0.3) : 0;
      creatures = Math.max(0, Math.min(1, (it-1.7)/0.8));
      glitch = (it>1.5 && it<3.1 && Math.random()<0.18) ? 1 : 0;
      squash += (0.92-squash)*ease((it-3.0)/1.0);
      flashA = ease((it-3.7)/0.45);
    }
  }
  const cam=_roomCam(zoom, ROOM_REC.x, ROOM_REC.y + (I? 0 : 0));
  g.setTransform(1,0,0,1,0,0);
  g.fillStyle='#120806'; g.fillRect(0,0,W,H);
  g.setTransform(cam.s,0,0,cam.s,cam.ox,cam.oy);
  if(_room.stat) g.drawImage(_room.stat,0,0,ROOM_SW,ROOM_SH);
  // yağmur (pencere içi)
  g.save(); g.beginPath(); g.rect(99,189,302,442); g.clip();
  g.strokeStyle='rgba(170,200,255,.35)'; g.lineWidth=1.6;
  for(const d of _room.rain){ d.y+=0.012*d.s*dt; if(d.y>1.05){ d.y=-0.05; d.x=Math.random(); }
    const x=99+d.x*302, y=189+d.y*442; g.beginPath(); g.moveTo(x,y); g.lineTo(x-4,y+18*d.s); g.stroke(); }
  for(const L of _room.lights){ if(Math.random()<0.002) L.on=!L.on; if(!L.on) continue; g.fillStyle='rgba(255,205,120,.75)'; g.fillRect(L.x,L.y,5,7); }
  g.restore();
  // abajur ışığı (titreşir; girişte söner/yanar)
  const flick = 0.92 + Math.sin(t*13)*0.03 + (Math.random()<0.02 ? -0.25 : 0);
  const lampOn = Math.max(0, flick - dark*1.2);
  g.save(); g.globalCompositeOperation='lighter';
  g.fillStyle=_rg(g,880,600,10,560,[[0,`rgba(255,190,110,${0.30*lampOn})`],[1,'rgba(255,170,90,0)']]); g.fillRect(320,40,680,1300);
  g.fillStyle=_rg(g,880,1340,10,260,[[0,`rgba(255,190,110,${0.18*lampOn})`],[1,'rgba(255,170,90,0)']]); g.fillRect(600,1200,400,300);
  g.fillStyle=_rg(g,500,880,10,420,[[0,`rgba(255,170,90,${0.10*lampOn})`],[1,'rgba(255,170,90,0)']]); g.fillRect(80,460,840,840);
  // toz zerreleri
  for(const m of _room.motes){ m.y-=0.25*dt; m.x+=Math.sin(t*0.7+m.ph)*0.25*dt; if(m.y<520){ m.y=1300; m.x=760+Math.random()*240; }
    g.fillStyle=`rgba(255,220,170,${0.35*lampOn})`; g.beginPath(); g.arc(m.x,m.y,m.s,0,7); g.fill(); }
  g.restore();
  // plak
  _roomDrawRecord(g, t, squash, elec, zoom);
  // borudan süzülen notalar
  if(!I || it<1.4){
    _room.noteT=(_room.noteT||0)-dt;
    if(_room.noteT<=0){ _room.noteT=38+Math.random()*30; _room.notes.push({x:400+Math.random()*60, y:600+Math.random()*40, vx:-0.5-Math.random()*0.6, ph:Math.random()*6, life:1}); }
  }
  for(const n of _room.notes){ n.x+=n.vx*dt; n.y-=0.9*dt; n.life-=0.0045*dt;
    const a=Math.max(0,Math.min(1,n.life*1.6)); const s=24;
    const img=ITEM_IMG && ITEM_IMG.note;
    g.globalAlpha=a*0.9;
    if(imgReady(img)) g.drawImage(img, n.x+Math.sin(t*2+n.ph)*10-s/2, n.y-s/2, s, s);
    g.globalAlpha=1; }
  _room.notes=_room.notes.filter(n=>n.life>0);
  // --- giriş efektleri ---
  if(I && !I.short){
    // prizde kıvılcımlar
    if(spark){ g.save(); g.globalCompositeOperation='lighter';
      for(let i=0;i<6;i++){ const a=Math.random()*Math.PI*2, l=10+Math.random()*34; g.strokeStyle='rgba(180,240,255,.9)'; g.lineWidth=2;
        g.beginPath(); g.moveTo(806,1069); g.lineTo(806+Math.cos(a)*l, 1069+Math.sin(a)*l); g.stroke(); }
      g.fillStyle=_rg(g,806,1069,2,60,[[0,'rgba(200,250,255,.9)'],[1,'rgba(90,230,255,0)']]); g.fillRect(746,1009,120,120); g.restore(); }
    // kablo boyunca akan elektrik
    if(arc>0 && arc<1.2){ g.save(); g.globalCompositeOperation='lighter';
      const head=_roomCablePoint(Math.min(1,arc));
      g.strokeStyle='rgba(120,235,255,.85)'; g.lineWidth=5; g.beginPath();
      for(let u=0; u<=Math.min(1,arc); u+=0.04){ const p=_roomCablePoint(u); const j=(Math.random()-0.5)*6; u===0?g.moveTo(p.x,p.y+j):g.lineTo(p.x,p.y+j); } g.stroke();
      g.fillStyle=_rg(g,head.x,head.y,2,46,[[0,'rgba(220,255,255,1)'],[1,'rgba(90,230,255,0)']]); g.fillRect(head.x-46,head.y-46,92,92); g.restore(); }
    // plaktan fışkıran cızırtılar
    if(creatures>0){
      const keys=['glitch_red','glitch_blue','glitch_green','glitch_yellow','glitch_purple','glitch_orange'];
      keys.forEach((k,i)=>{
        const img=MONSTER_IMG[k]; if(!imgReady(img)) return;
        const a=i/keys.length*Math.PI*2 + it*1.6, rr=30+creatures*130, lift=creatures*(70+Math.sin(it*6+i)*14);
        const x=ROOM_REC.x+Math.cos(a)*rr, y=ROOM_REC.y+Math.sin(a)*rr*0.35-lift, s=26+creatures*22;
        g.save(); g.translate(x+(Math.random()-0.5)*4, y+(Math.random()-0.5)*4); g.rotate(it*3+i);
        g.globalAlpha=Math.min(1,creatures*1.5)*(0.8+Math.random()*0.2); g.drawImage(img,-s/2,-s/2,s,s); g.restore();
      });
    }
  }
  g.setTransform(1,0,0,1,0,0);
  // vinyet
  g.fillStyle=_rg(g,W/2,H*0.45,Math.min(W,H)*0.35,Math.max(W,H)*0.8,[[0,'rgba(0,0,0,0)'],[1,'rgba(0,0,0,.55)']]); g.fillRect(0,0,W,H);
  if(dark>0){ g.fillStyle=`rgba(0,0,0,${dark*0.6})`; g.fillRect(0,0,W,H); }
  if(glitch){ // RGB kayması: yatay şeritleri kaydır
    for(let i=0;i<5;i++){ const y=Math.random()*H, h=8+Math.random()*30, dx=(Math.random()-0.5)*40*_room.dpr;
      g.drawImage(_room.cv, 0, y*_room.dpr, W*_room.dpr, h*_room.dpr, dx/_room.dpr, y, W, h); }
    g.fillStyle='rgba(90,230,255,.08)'; g.fillRect(0,0,W,H);
  }
  if(flashA>0){ g.fillStyle=`rgba(225,250,255,${flashA})`; g.fillRect(0,0,W,H); }
  // giriş bitti mi?
  if(I){
    const end = I.short ? 1.15 : 4.15;
    if(it>=end) _roomFinishIntro();
  }
}

// Ana döngüden (render.js) her karede çağrılır; oda görünürse true döner
// (bu durumda oyun dünyası arkada boşuna çizilmez).
function roomTick(ts){
  const want = roomEnabled() && (state==='menu' || !!_room.intro);
  if(!_roomInit()) return false;
  if(want!==_room.visible){
    _room.visible=want; _room.cv.style.display = want ? 'block' : 'none';
    document.body.classList.toggle('roomMenu', want);
  }
  if(!want) return false;
  const W=window.innerWidth, H=window.innerHeight, dpr=Math.min(2, window.devicePixelRatio||1);
  if(W!==_room.w || H!==_room.h || dpr!==_room.dpr){
    _room.w=W; _room.h=H; _room.dpr=dpr;
    _room.cv.width=Math.round(W*dpr); _room.cv.height=Math.round(H*dpr);
    _room.cv.style.width=W+'px'; _room.cv.style.height=H+'px';
    _room.stat=null;
  }
  _roomBuildStatic();
  const dt = _room.last ? Math.min(40, ts-_room.last)/16.6667 : 1; _room.last=ts;
  _room.t += dt/60;
  _room.g.save(); _room.g.scale(dpr,dpr);
  // _roomFrame setTransform kullanıyor; dpr'yi kamera ölçeğine katmak için:
  const g=_room.g; const st=g.setTransform.bind(g);
  g.setTransform=(a,b,c,d,e,f)=>st(a*dpr,b,c,d*dpr,e*dpr,f*dpr);
  try{ _roomFrame(dt); } finally { g.setTransform=st; g.restore(); }
  return true;
}

// ---------------- Giriş ----------------
// BAŞLA'dan çağrılır. Oda açık ve görünürse girişi başlatıp true döner;
// giriş bitince onDone() (startGame / startTutorial) çağrılır.
function roomIntroPlay(onDone){
  if(!roomEnabled() || !_room.visible || _room.intro) return false;
  const short = _room.introsPlayed>0;
  _room.introsPlayed++;
  _room.intro={t0:performance.now(), short, onDone};
  if(AC && AC.state==='suspended') AC.resume();
  showScreen(null); setHud(false);
  document.body.classList.add('roomIntro');
  _roomCaptions(short);
  _roomIntroSfx(short);
  return true;
}
function _roomFinishIntro(){
  const I=_room.intro; if(!I) return;
  _room.intro=null; _room.notes=[];
  document.body.classList.remove('roomIntro');
  _roomCaptionClear();
  // Oyuna beyazdan açılarak geçiş
  const f=document.getElementById('roomFlash'); if(f){ f.classList.remove('fade'); void f.offsetWidth; f.classList.add('fade'); }
  I.onDone();
}
function roomSkipIntro(){ if(_room.intro) _roomFinishIntro(); }

let _roomCapTimers=[];
function _roomCaptions(short){
  const el=document.getElementById('roomCaption'); if(!el) return;
  _roomCaptionClear();
  if(short) return;
  const show=(txt,cls,at,dur)=>{ _roomCapTimers.push(setTimeout(()=>{ el.textContent=txt; el.className='show '+cls; }, at*1000));
    _roomCapTimers.push(setTimeout(()=>{ el.className=''; }, (at+dur)*1000)); };
  show(t('intro_cap1'),'warn',0.75,1.15);
  show(t('intro_cap2'),'',2.0,1.2);
  show(t('intro_cap3'),'big',3.25,0.85);
}
function _roomCaptionClear(){ _roomCapTimers.forEach(clearTimeout); _roomCapTimers=[]; const el=document.getElementById('roomCaption'); if(el) el.className=''; }
function _roomIntroSfx(short){
  if(typeof beep!=='function') return;
  const at=(s,f)=>setTimeout(f,s*1000);
  if(short){ at(0,()=>beep(300,0.25,'sawtooth',0.06)); at(0.5,()=>beep(600,0.3,'sine',0.07)); return; }
  at(0.5,()=>{ beep(60,0.35,'sawtooth',0.12); beep(120,0.2,'square',0.08); });
  at(0.8,()=>beep(1400,0.05,'square',0.06)); at(0.95,()=>beep(900,0.05,'square',0.06));
  at(1.4,()=>{ beep(80,0.5,'sawtooth',0.12); beep(2400,0.04,'square',0.05); });
  at(1.8,()=>beep(220,0.12,'square',0.08)); at(2.1,()=>beep(330,0.12,'square',0.08)); at(2.4,()=>beep(180,0.15,'square',0.09));
  at(3.0,()=>beep(200,0.9,'sine',0.08)); at(3.5,()=>beep(400,0.6,'sine',0.08)); at(3.8,()=>beep(800,0.4,'triangle',0.08));
}
document.addEventListener('pointerdown', ()=>{ if(_room.intro && performance.now()-_room.intro.t0>300) roomSkipIntro(); }, true);
