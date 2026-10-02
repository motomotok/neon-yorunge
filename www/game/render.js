// Çizim katmanı: ana requestAnimationFrame döngüsü, arkaplan yıldızları,
// güneş/halka/iz/oyuncu/eşya görselleri. Buradaki hiçbir fonksiyon oyun
// durumunu (skor, can vb.) değiştirmez — sadece engine.js'in ürettiği
// durumu canvas'a çizer.
const bgStars=[];
function initStars(){
  bgStars.length=0;
  const n=Math.round((W*H)/9000);
  for(let i=0;i<n;i++) bgStars.push({x:Math.random()*W,y:Math.random()*H,z:Math.random()*0.9+0.1,r:Math.random()*1.4+0.3});
}
let shootTimer=140; const shootStars=[];
function updateShootingStars(dt){
  shootTimer-=dt;
  if(shootTimer<=0){
    shootTimer=240+Math.random()*300;
    shootStars.push({x:-40,y:Math.random()*H*0.4,vx:7+Math.random()*4,vy:3+Math.random()*2,life:1});
  }
  for(const s of shootStars){ s.x+=s.vx*dt; s.y+=s.vy*dt; s.life-=0.012*dt; }
  for(let i=shootStars.length-1;i>=0;i--) if(shootStars[i].life<=0||shootStars[i].x>W+40) shootStars.splice(i,1);
}
function drawShootingStars(){
  for(const s of shootStars){
    ctx.save(); ctx.globalAlpha=Math.max(0,s.life);
    const g=ctx.createLinearGradient(s.x,s.y,s.x-60,s.y-26);
    g.addColorStop(0,'#ffffff'); g.addColorStop(1,'rgba(255,255,255,0)');
    ctx.strokeStyle=g; ctx.lineWidth=2.4; ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(s.x-60,s.y-26); ctx.stroke();
    ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(s.x,s.y,2.6,0,7); ctx.fill();
    ctx.restore();
  }
}

let last=0;
function loop(ts){
  const dt=Math.min(40, ts-last)/16.6667 || 1; last=ts;
  ctx.clearRect(0,0,W,H);
  // 3D modda (bkz. gfx.js) dünya WebGL canvas'ına (#game3d) çizilir; bu 2D
  // canvas onun üstünde saydam kalır ve sadece tam ekran flaşları taşır.
  // Oyun mantığı (update) iki modda da birebir aynı.
  if(gfx3dActive()){
    if(state==='play') update(dt);
    else if(MENU_STATES[state]) updateIdleOrb(dt);
    updateParticles(dt);
    renderFrame3D(dt);
    drawScreenOverlays();
  } else {
    updateShootingStars(dt);
    drawBg(dt);
    if(state==='play') update(dt);
    else if(MENU_STATES[state]) updateIdleOrb(dt);
    drawWorld();
    drawParticles(dt);
  }
  requestAnimationFrame(loop);
}

function drawBg(dt){
  for(const s of bgStars){
    s.y += s.z*0.15*dt; if(s.y>H){ s.y=0; s.x=Math.random()*W; }
    ctx.globalAlpha=s.z; ctx.fillStyle=T.sf;
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,7); ctx.fill();
  }
  ctx.globalAlpha=1;
  drawShootingStars();
}

function drawWorld(){
  const t=performance.now()*0.001;
  ctx.save();
  if(shake>0.3 && GAME_STATES[state]) ctx.translate((Math.random()-0.5)*shake,(Math.random()-0.5)*shake);

  drawSun(t);

  for(const r of RINGS) drawRing(r);
  drawRingFlash2D();

  if(GAME_STATES[state]){
    for(const it of items){
      if(!it.alive) continue;
      const rad=radiusFor(it.ring);
      drawItem(CX+Math.cos(it.ang)*rad, CY+Math.sin(it.ang)*rad, it.type, easeOut(Math.max(0,it.pop)), t, it);
    }
  }
  if(GAME_STATES[state] && bossTelegraph) drawBossTelegraph(t, bossTelegraph);
  else { drawTonearmIdle(); drawBossAfterglow(); }

  // Oyuncu küresi gerçek oyunda VE menü ailesindeki ekranlarda (yavaşça
  // dönerek, "canlı menü") çizilir — sadece parçacık/asteroit menüde yok.
  if(GAME_STATES[state] || MENU_STATES[state]) drawPlayer(t);
  ctx.restore();
  drawScreenOverlays();
}
// Çarpışma (kırmızı) ve zaman dondurma (buz mavisi) tam ekran flaşları —
// iki çizim modunun ortak katmanı.
function drawScreenOverlays(){
  if(flash>0 && GAME_STATES[state]){ ctx.fillStyle=hexA(T.peril, flash*0.4); ctx.fillRect(0,0,W,H); }
  if(freezeFlash>0 && GAME_STATES[state]){ ctx.fillStyle=hexA('#7fe8ff', freezeFlash*0.22); ctx.fillRect(0,0,W,H); }
}

function drawSun(t){
  const sunR=Math.min(W,H)*0.06*(1+Math.sin(t*2)*0.04);
  const style = cfg.sun;
  if(style==='blackhole'){
    const ringR=sunR*2.2;
    const g=ctx.createRadialGradient(CX,CY,sunR*0.3,CX,CY,ringR);
    g.addColorStop(0,'#000000'); g.addColorStop(0.55,'#000000');
    g.addColorStop(0.7,hexA('#ffb454',.9)); g.addColorStop(0.85,hexA('#ff6b3d',.5)); g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(CX,CY,ringR,0,7); ctx.fill();
    ctx.save(); ctx.translate(CX,CY); ctx.rotate(t*0.6);
    ctx.strokeStyle=hexA('#ffd88a',.7); ctx.lineWidth=3;
    ctx.beginPath(); ctx.ellipse(0,0,sunR*1.9,sunR*0.55,0,0,7); ctx.stroke();
    ctx.restore();
    ctx.fillStyle='#000000'; ctx.beginPath(); ctx.arc(CX,CY,sunR*0.85,0,7); ctx.fill();
  } else if(style==='redgiant'){
    const g=ctx.createRadialGradient(CX,CY,0,CX,CY,sunR*2.8);
    g.addColorStop(0,'#fff4e0'); g.addColorStop(0.3,'#ff8a3d'); g.addColorStop(1,'rgba(255,90,30,0)');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(CX,CY,sunR*2.8,0,7); ctx.fill();
    ctx.fillStyle='#ffb27a'; ctx.beginPath(); ctx.arc(CX,CY,sunR*1.1,0,7); ctx.fill();
  } else if(style==='nebula'){
    const colors=['#a97bff','#54e0ff','#ff7ae0'];
    for(let i=0;i<3;i++){
      const g=ctx.createRadialGradient(CX,CY,0,CX,CY,sunR*(2.4+i*0.3));
      g.addColorStop(0, hexA(colors[i],.5)); g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(CX,CY,sunR*(2.4+i*0.3),0,7); ctx.fill();
    }
    ctx.fillStyle='#f5f0ff'; ctx.beginPath(); ctx.arc(CX,CY,sunR*0.9,0,7); ctx.fill();
  } else if(style==='crystal'){
    const g=ctx.createRadialGradient(CX,CY,0,CX,CY,sunR*2.4);
    g.addColorStop(0,'rgba(255,255,255,.9)'); g.addColorStop(1,'rgba(140,200,255,0)');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(CX,CY,sunR*2.4,0,7); ctx.fill();
    ctx.save(); ctx.translate(CX,CY); ctx.rotate(t*0.3);
    ctx.fillStyle='#dff6ff'; ctx.beginPath();
    for(let i=0;i<6;i++){ const a=i*Math.PI/3; const x=Math.cos(a)*sunR, y=Math.sin(a)*sunR; i?ctx.lineTo(x,y):ctx.moveTo(x,y); }
    ctx.closePath(); ctx.fill();
    ctx.restore();
  } else if(style==='quasar'){
    const g=ctx.createRadialGradient(CX,CY,0,CX,CY,sunR*1.6);
    g.addColorStop(0,'#ffffff'); g.addColorStop(0.4,'#bfe0ff'); g.addColorStop(1,'rgba(140,200,255,0)');
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(CX,CY,sunR*1.6,0,7); ctx.fill();
    ctx.save(); ctx.translate(CX,CY); ctx.rotate(t*0.9);
    for(const sign of [1,-1]){
      const bg=ctx.createLinearGradient(0,0,0,sign*sunR*3.2);
      bg.addColorStop(0,'rgba(180,220,255,.85)'); bg.addColorStop(1,'rgba(180,220,255,0)');
      ctx.fillStyle=bg; ctx.fillRect(-sunR*0.12,0,sunR*0.24,sign*sunR*3.2);
    }
    ctx.restore();
    ctx.fillStyle='#ffffff'; ctx.beginPath(); ctx.arc(CX,CY,sunR*0.7,0,7); ctx.fill();
  } else if(style==='supernova'){
    const colors=['#ffffff','#ffd28a','#ff6b3d','#a97bff'];
    for(let i=0;i<4;i++){
      const rr=sunR*(1.1+i*0.55)*(1+Math.sin(t*1.6+i)*0.05);
      ctx.strokeStyle=hexA(colors[i],.55-i*0.1); ctx.lineWidth=3-i*0.4;
      ctx.beginPath(); ctx.arc(CX,CY,rr,0,7); ctx.stroke();
    }
    ctx.fillStyle='#fff8ea'; ctx.beginPath(); ctx.arc(CX,CY,sunR*0.9,0,7); ctx.fill();
  } else {
    // Varsayılan: dönen plak — oluklu halkalar + kayan parlama şeridi
    // (dönüşü hissettirir) + tema renginde etiket + iğne deliği.
    const discR=sunR*2.3;
    ctx.fillStyle='#120a08'; ctx.beginPath(); ctx.arc(CX,CY,discR,0,7); ctx.fill();
    for(let i=0;i<6;i++){
      const rr=discR*(0.42+i*0.095);
      ctx.strokeStyle = i%2===0 ? 'rgba(255,255,255,.07)' : 'rgba(255,255,255,.035)';
      ctx.lineWidth=1.2; ctx.beginPath(); ctx.arc(CX,CY,rr,0,7); ctx.stroke();
    }
    ctx.save(); ctx.translate(CX,CY); ctx.rotate(t*0.8);
    const hg=ctx.createLinearGradient(-discR,-discR,discR,discR);
    hg.addColorStop(0,'rgba(255,255,255,0)'); hg.addColorStop(0.5,'rgba(255,255,255,.1)'); hg.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle=hg; ctx.beginPath(); ctx.arc(0,0,discR,0,7); ctx.fill();
    ctx.restore();
    const g=ctx.createRadialGradient(CX,CY,0,CX,CY,sunR*1.3);
    g.addColorStop(0,'rgba(255,255,255,.95)');
    g.addColorStop(0.4, hexA(T.sun,.9));
    g.addColorStop(1, hexA(T.sun,0));
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(CX,CY,sunR*1.3,0,7); ctx.fill();
    const lim=THEME_LABEL_IMG[cfg.theme];
    if(lim && lim.complete && lim.naturalWidth>0){
      // Temanın plak etiketi (konsept görseli), plakla birlikte döner.
      const lr=sunR*1.05;
      ctx.save(); ctx.translate(CX,CY); ctx.rotate(t*0.8);
      ctx.beginPath(); ctx.arc(0,0,lr,0,7); ctx.clip();
      ctx.drawImage(lim,-lr,-lr,lr*2,lr*2);
      ctx.restore();
    } else {
      ctx.fillStyle=T.sun; ctx.beginPath(); ctx.arc(CX,CY,sunR*0.82,0,7); ctx.fill();
    }
  }
  ctx.fillStyle='#0a0604'; ctx.beginPath(); ctx.arc(CX,CY,sunR*0.13,0,7); ctx.fill();
}

function drawRing(r){
  const style = cfg.ringStyle;
  if(style==='dotted'){
    ctx.strokeStyle='rgba(255,195,150,0.3)'; ctx.lineWidth=2; ctx.setLineDash([2,8]);
    ctx.beginPath(); ctx.arc(CX,CY,r,0,7); ctx.stroke(); ctx.setLineDash([]);
  } else if(style==='glow'){
    ctx.save(); ctx.shadowColor=hexA(T.star,.6); ctx.shadowBlur=10;
    ctx.strokeStyle=hexA(T.star,.35); ctx.lineWidth=2;
    ctx.beginPath(); ctx.arc(CX,CY,r,0,7); ctx.stroke();
    ctx.restore();
  } else if(style==='double'){
    ctx.strokeStyle='rgba(255,195,150,0.15)'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.arc(CX,CY,r-3,0,7); ctx.stroke();
    ctx.beginPath(); ctx.arc(CX,CY,r+3,0,7); ctx.stroke();
  } else if(style==='pulse'){
    const pt=performance.now()*0.001;
    const a=0.18+Math.sin(pt*3)*0.12;
    ctx.strokeStyle=hexA(T.star,Math.max(0.06,a)); ctx.lineWidth=2+Math.sin(pt*3)*1;
    ctx.beginPath(); ctx.arc(CX,CY,r,0,7); ctx.stroke();
  } else if(style==='circuit'){
    ctx.strokeStyle='rgba(255,195,150,0.18)'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.arc(CX,CY,r,0,7); ctx.stroke();
    ctx.fillStyle='rgba(255,210,190,0.4)';
    const n=18;
    for(let i=0;i<n;i++){
      const a=(i/n)*Math.PI*2;
      const x=CX+Math.cos(a)*r, y=CY+Math.sin(a)*r;
      ctx.fillRect(x-1.5,y-1.5,3,3);
    }
  } else if(style==='season1_ring'){
    const pt=performance.now()*0.001;
    ctx.strokeStyle=hexA('#54e0ff',0.45+Math.sin(pt*2)*0.15); ctx.lineWidth=2.5;
    ctx.beginPath(); ctx.arc(CX,CY,r,0,7); ctx.stroke();
    ctx.strokeStyle=hexA('#ffd24a',0.3); ctx.lineWidth=1;
    ctx.beginPath(); ctx.arc(CX,CY,r+4,0,7); ctx.stroke();
    ctx.save(); ctx.translate(CX,CY); ctx.rotate(pt*0.5);
    ctx.fillStyle=hexA('#fff8d8',0.85);
    for(let i=0;i<10;i++){ const a=(i/10)*Math.PI*2; ctx.beginPath(); ctx.arc(Math.cos(a)*r,Math.sin(a)*r,1.8,0,7); ctx.fill(); }
    ctx.restore();
  } else if(style==='season2_ring'){
    const pt=performance.now()*0.001;
    ctx.strokeStyle=hexA('#ffd24a',0.22); ctx.lineWidth=1;
    ctx.beginPath(); ctx.arc(CX,CY,r-4,0,7); ctx.stroke();
    ctx.save(); ctx.translate(CX,CY); ctx.rotate(pt*0.4);
    ctx.strokeStyle=hexA('#ff8a3d',0.5+Math.sin(pt*2.4)*0.18); ctx.lineWidth=2.5;
    ctx.setLineDash([10,6]);
    ctx.beginPath(); ctx.arc(0,0,r,0,7); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  } else {
    // Varsayılan: plak oluğu — ince kesikli çizgi, soluk sıcak ton.
    ctx.strokeStyle='rgba(255,210,180,0.14)'; ctx.lineWidth=2; ctx.setLineDash([1,3]);
    ctx.beginPath(); ctx.arc(CX,CY,r,0,7); ctx.stroke(); ctx.setLineDash([]);
  }
}

// Pena çiziği (klasik mod): kuyruk yerine pena geçtiği yolu ince, parlayan
// bir çizikle kazıyormuş gibi bırakır; çizik ~2 sn'de söner. Nota alınınca
// çizik parlar, penadan bir ses dalgası halkası yayılır ve pena'nın oluğu
// bir an yanar — "pena plağı çiziyor, notalar şarkıyı çalıyor" hissi.
// Renk/şekil mağazadaki İz Efekti seçimini (cfg.trail) izler.
// 3D modun karşılığı: src/render3d/entities.js (_updateScratch).
const _scr={pts:[], sparks:[], ripples:[], ringFlash:[0,0,0], flare:0, lastNotes:0, lastTs:0};
const SCRATCH_LIFE=2000;
// Çiziğin penadan geriye en fazla uzunluğu (PLAYER_R cinsinden). Süre
// sınırına ek olarak uygulanır: pena hızlandıkça eski kısım aynı oranda hızlı
// silinir, yüksek kombolarda bile ekran çizikle dolmaz.
const SCRATCH_LEN_R=22;
const _scrDist=new Float32Array(256);
function scratchColor2D(style,i,t,pc){
  switch(style){
    case 'rainbow': return `hsl(${Math.round(t*60+i*9)%360},90%,62%)`;
    case 'sparkle': return i%3===0 ? '#ffffff' : '#fff2c4';
    case 'quantum': return (i>>2)%2===0 ? pc : '#7fe8ff';
    case 'phantom': return '#eaf2ff';
    case 'season1_trail': return (i>>2)%2===0 ? '#54e0ff' : '#fff6c8';
    case 'season2_trail': return `hsl(${Math.round(28+Math.sin(t*3-i*0.2)*10)},95%,55%)`;
    default: return pc;
  }
}
function updateScratch2D(px,py){
  const now=performance.now(), dt=Math.min(3, (now-(_scr.lastTs||now))/16.67); _scr.lastTs=now;
  const last=_scr.pts[_scr.pts.length-1];
  const d=last ? Math.hypot(px-last.x,py-last.y) : Infinity;
  if(d>PLAYER_R*8) _scr.pts.push({x:px,y:py,born:now,brk:true});
  else if(d>PLAYER_R*0.3) _scr.pts.push({x:px,y:py,born:now,brk:false});
  const life = cfg.trail==='comet' ? SCRATCH_LIFE*1.5 : SCRATCH_LIFE;
  while(_scr.pts.length && now-_scr.pts[0].born>life) _scr.pts.shift();
  if(_scr.pts.length>220) _scr.pts.splice(0,_scr.pts.length-220);
  const maxLen=PLAYER_R*SCRATCH_LEN_R*(cfg.trail==='comet'?1.4:1);
  const m=_scr.pts.length;
  if(m) _scrDist[m-1]=Math.hypot(px-_scr.pts[m-1].x, py-_scr.pts[m-1].y);
  for(let i=m-2;i>=0;i--){
    const a=_scr.pts[i], b=_scr.pts[i+1];
    _scrDist[i] = b.brk ? Infinity : _scrDist[i+1]+Math.hypot(b.x-a.x,b.y-a.y);
  }
  let cut=0;
  while(cut<m && _scrDist[cut]>maxLen) cut++;
  if(cut){ _scr.pts.splice(0,cut); _scrDist.copyWithin(0,cut,m); }
  // Temas kıvılcımları — kombo/hız arttıkça daha çok.
  if(state==='play'){
    const rate=(0.3+Math.min(1.2,(player.speed-1.5)*0.6))*(cfg.trail==='sparkle'?2.2:1);
    if(Math.random()<rate*dt && _scr.sparks.length<80){
      const a=Math.random()*Math.PI*2, sp=0.6+Math.random()*1.8;
      _scr.sparks.push({x:px,y:py,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:1,hot:Math.random()<0.6});
    }
    // Nota toplandı mı?
    if(session.stars>_scr.lastNotes){
      _scr.flare=1;
      _scr.ripples.push({x:px,y:py,life:1,col:playerColor()});
      _scr.ringFlash[player.targetRing]=1;
    }
  }
  _scr.lastNotes = session ? session.stars : 0;
  _scr.flare=Math.max(0,_scr.flare-0.035*dt);
  for(let i=0;i<3;i++) _scr.ringFlash[i]=Math.max(0,_scr.ringFlash[i]-0.07*dt);
  for(const r of _scr.ripples) r.life-=0.06*dt;
  _scr.ripples=_scr.ripples.filter(r=>r.life>0);
  for(const k of _scr.sparks){ k.x+=k.vx*dt; k.y+=k.vy*dt; k.vx*=0.93; k.vy*=0.93; k.life-=0.05*dt; }
  _scr.sparks=_scr.sparks.filter(k=>k.life>0);
}
// Nota alınınca pena'nın bulunduğu halka bir an parlar (drawWorld'den çağrılır).
function drawRingFlash2D(){
  for(let i=0;i<3;i++){
    const f=_scr.ringFlash[i]; if(f<=0.01) continue;
    ctx.save(); ctx.globalCompositeOperation='lighter';
    ctx.strokeStyle=hexA(T.star,f*0.3); ctx.lineWidth=1.5+f*1.5;
    ctx.beginPath(); ctx.arc(CX,CY,RINGS[i],0,7); ctx.stroke();
    ctx.restore();
  }
}
function drawScratch2D(t,px,py,pc){
  updateScratch2D(px,py);
  const now=performance.now(), style=cfg.trail, pts=_scr.pts, n=pts.length;
  const life = style==='comet' ? SCRATCH_LIFE*1.5 : SCRATCH_LIFE;
  const wMul = style==='comet' ? 1.35 : 1;
  // butt: yuvarlak uçlar 'lighter' modda ek yerlerinde boncuk gibi parlıyordu
  ctx.save(); ctx.globalCompositeOperation='lighter'; ctx.lineCap='butt';
  for(let i=1;i<=n;i++){
    const p0=pts[i-1], p1 = i<n ? pts[i] : {x:px,y:py,born:now,brk:false};
    if(p1.brk) continue;
    if(style==='pixel' && i%4===0) continue;                 // kesik kesik çizik
    const age=now-p1.born;
    const maxLen=PLAYER_R*SCRATCH_LEN_R*(style==='comet'?1.4:1), dd = i<n ? _scrDist[i] : 0;
    const k=Math.max(0,Math.min(1-age/life,(maxLen-dd)/(maxLen*0.6)));
    if(k<=0) continue;
    const hot=Math.max(0,1-age/300);
    let x0=p0.x, y0=p0.y, x1=p1.x, y1=p1.y;
    if(style==='ribbon'){                                     // dalgalı çizik
      const o0=Math.sin((i-1)*0.45-t*3)*PLAYER_R*0.45, o1=Math.sin(i*0.45-t*3)*PLAYER_R*0.45;
      const d0=Math.hypot(x0-CX,y0-CY)||1, d1=Math.hypot(x1-CX,y1-CY)||1;
      x0+=(x0-CX)/d0*o0; y0+=(y0-CY)/d0*o0; x1+=(x1-CX)/d1*o1; y1+=(y1-CY)/d1*o1;
    }
    const a=Math.min(1,Math.pow(k,1.4)*(style==='phantom'?0.45:0.9)*(1+_scr.flare*0.8));
    const w=PLAYER_R*(0.3+hot*0.4+_scr.flare*0.3*k)*wMul;
    ctx.strokeStyle=hexA(colorToHex(scratchColor2D(style,n-i,t,pc)),a*0.55);
    ctx.lineWidth=w*2.2; ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x1,y1); ctx.stroke();
    ctx.strokeStyle=`rgba(255,255,255,${a*(0.35+hot*0.6)})`;
    ctx.lineWidth=Math.max(1,w*0.5); ctx.stroke();
  }
  for(const k of _scr.sparks){
    ctx.fillStyle = k.hot ? `rgba(255,255,255,${k.life})` : hexA(pc,k.life);
    ctx.beginPath(); ctx.arc(k.x,k.y,PLAYER_R*0.16*k.life+0.6,0,7); ctx.fill();
  }
  for(const r of _scr.ripples){
    const u=1-r.life;
    // Küçük ve kısa: toplandığı belli olsun ama oyunu kaplamasın.
    ctx.strokeStyle=hexA(r.col,r.life*0.5); ctx.lineWidth=1+r.life*1.5;
    ctx.beginPath(); ctx.arc(r.x,r.y,PLAYER_R*(1.1+u*2.4),0,7); ctx.stroke();
  }
  ctx.restore();
}
// scratchColor2D hem hex hem hsl() dönebilir; hexA hex beklediği için
// hsl'yi bir kez gizli canvas ile hex'e çevirip önbellekler.
const _colHexCache=new Map();
function colorToHex(c){
  if(c[0]==='#') return c;
  let h=_colHexCache.get(c);
  if(!h){
    const g=colorToHex._c || (colorToHex._c=document.createElement('canvas').getContext('2d'));
    g.fillStyle=c; h=g.fillStyle; _colHexCache.set(c,h);
    if(_colHexCache.size>720) _colHexCache.clear();
  }
  return h;
}

function drawPlayer(t){
  const pr=player.curRadius;
  const px=CX+Math.cos(player.ang)*pr, py=CY+Math.sin(player.ang)*pr;
  const pc = playerColor();
  drawScratch2D(t,px,py,pc);
  const blink = player.invulT>0 && (Math.floor(player.invulT/4)%2===0);
  if(!blink){
    if(player.ghostT>0) ctx.globalAlpha = 0.5+Math.sin(t*10)*0.15;
    const pg=ctx.createRadialGradient(px,py,0,px,py,PLAYER_R*2.2);
    pg.addColorStop(0,'#ffffff'); pg.addColorStop(0.4, hexA(pc,.85)); pg.addColorStop(1, hexA(pc,0));
    ctx.fillStyle=pg; ctx.beginPath(); ctx.arc(px,py,PLAYER_R*2.2,0,7); ctx.fill();
    // Oyuncu artık vektör nota değil, gerçek bir pena (mediator) görseli
    // (bkz. data.js penaImg()/PENA_IMG) — görsel henüz yüklenmediyse (ilk
    // birkaç kare) eski nota glifine düşülür ki oyuncu asla görünmez olmasın.
    const pImg = penaImg();
    if(pImg && pImg.complete && pImg.naturalWidth>0){
      const s = PLAYER_R*2.7;
      ctx.drawImage(pImg, px-s/2, py-s/2, s, s);
    } else {
      drawNoteShape(px,py,PLAYER_R,'#ffffff',true,0);
    }
    ctx.globalAlpha=1;
  }
  if(player.shieldHits>0){
    ctx.strokeStyle='#5efc82'; ctx.lineWidth=3; ctx.globalAlpha=0.8+Math.sin(t*8)*0.2;
    ctx.beginPath(); ctx.arc(px,py,PLAYER_R*1.9,0,7); ctx.stroke(); ctx.globalAlpha=1;
  }
  if(player.magnetT>0){
    ctx.strokeStyle='#ff7ae0'; ctx.lineWidth=2; ctx.globalAlpha=0.4+Math.sin(t*6)*0.2;
    ctx.setLineDash([6,8]); ctx.beginPath(); ctx.arc(px,py,PLAYER_R*3,0,7); ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha=1;
  }
}

// Takviye topu ikonları — HUD çiplerinde (icons.js/ICON_SVG) kullanılanla
// birebir aynı çizgi-ikonlar, 24x24 birimlik bir düzlemde Path2D olarak bir
// kez tanımlanıp her karede ölçeklenerek çizilir. Önceden burada sistem
// emojisi (ctx.fillText) kullanılıyordu; bazı Android emoji fontlarında
// glif ortalanmıyor, topun dışına taşıyordu — bu yüzden değiştirildi.
const PW_ICON_PATH = {
  shield: new Path2D('M12 3l7 3v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6l7-3Z'),
  magnet: new Path2D('M8 21V11a4 4 0 0 1 8 0v10M8 21H4M8 17H4M16 21h4M16 17h4'),
  hourglass: new Path2D('M6 3h12M6 21h12M7 3c0 5 4 6.5 5 8-1 1.5-5 3-5 8M17 3c0 5-4 6.5-5 8 1 1.5 5 3 5 8'),
  clockHand: new Path2D('M12 7v5l3.5 2'),
  ghost: new Path2D('M5 20V11a7 7 0 0 1 14 0v9l-2.5-2-2 2-2.5-2-2 2-2.5-2L5 20Z'),
};
function drawPwIcon(x,y,key,R){
  const s=(R*1.7)/24;
  ctx.save();
  ctx.translate(x-12*s, y-12*s); ctx.scale(s,s);
  ctx.lineCap='round'; ctx.lineJoin='round';
  if(key==='coin'){
    ctx.fillStyle='#ffb454'; ctx.beginPath(); ctx.arc(12,12,10,0,7); ctx.fill();
    ctx.fillStyle='#c47a1f'; ctx.beginPath(); ctx.arc(12,12,6.2,0,7); ctx.fill();
    ctx.fillStyle='#ffe3a8'; ctx.beginPath(); ctx.arc(12,12,2.8,0,7); ctx.fill();
  } else if(key==='clock'){
    ctx.strokeStyle='rgba(255,255,255,.95)'; ctx.lineWidth=1.8;
    ctx.beginPath(); ctx.arc(12,12,9,0,7); ctx.stroke();
    ctx.stroke(PW_ICON_PATH.clockHand);
  } else if(key==='ghost'){
    ctx.strokeStyle='rgba(255,255,255,.95)'; ctx.lineWidth=1.8;
    ctx.stroke(PW_ICON_PATH.ghost);
    ctx.fillStyle='rgba(255,255,255,.95)';
    ctx.beginPath(); ctx.arc(9.5,10.5,1,0,7); ctx.fill();
    ctx.beginPath(); ctx.arc(14.5,10.5,1,0,7); ctx.fill();
  } else if(PW_ICON_PATH[key]){
    ctx.strokeStyle='rgba(255,255,255,.95)'; ctx.lineWidth=1.8;
    ctx.stroke(PW_ICON_PATH[key]);
  }
  ctx.restore();
}
function drawItem(x,y,type,sc,t,it){
  if(sc<=0) return;
  const R=(PLAYER_R*0.95)*sc;
  const isTwinKind = type==='hazardTwin'||type==='hazardTwinDecoy';
  let col;
  if(type==='hazardPull') col='#ffb454';
  else if(isTwinKind) col='#ff8a3d';
  else if(type==='hazardPulse') col = (it && it.pulseDanger===false) ? '#ffd9dc' : '#ff3b52';
  else if(type==='hazardCreep') col='#d94a1f';
  else if(isHazardType(type)) col=T.peril;
  else if(type==='gold') col=T.gold;
  else if(type==='star') col=T.star;
  else if(type==='diamond') col='#fff4e0';
  else if(type==='coin') col='#ffb454';
  else if(type==='heart') col='#ff5d8f';
  else col='#ffffff';
  const glowAlpha = type==='hazardTwinDecoy' ? 0.3+Math.sin(t*9)*0.15 : 0.6;
  const g=ctx.createRadialGradient(x,y,0,x,y,R*2.4);
  g.addColorStop(0, hexA(col,glowAlpha)); g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,R*2.4,0,7); ctx.fill();

  if(isHazardType(type) || type==='hazardTwinDecoy'){
    let Rh = type==='hazardBomb' ? R*1.5 : R;
    let shapeAlpha = type==='hazardTwinDecoy' ? 0.4+Math.sin(t*9)*0.25 : 1;
    if(type==='hazardPulse'){
      const danger = it ? it.pulseDanger : true;
      const phase = it ? it.pulsePhase : 0;
      Rh = R*(0.55+(Math.sin(phase)*0.5+0.5)*0.85);
      if(!danger) shapeAlpha=0.55;
    }
    ctx.globalAlpha=shapeAlpha;
    // Her tehlike tipi artık kendine özgü bir CANAVAR GÖRSELİ taşıyor (eski
    // vektör poligon/yıldız yerine, bkz. HAZARD_IMG_KEY + data.js MONSTER_IMG)
    // — tip renk kadar GÖRSELDEN de bir bakışta ayırt edilebiliyor, poligon
    // siluetlerinden bile daha güçlü bir ayrım. (hazardTwin ile
    // hazardTwinDecoy kasıtlı olarak birebir aynı görseli paylaşır —
    // ikisini ayırt edilemez kılmak, oyunun "hangisi gerçek?" mekaniğinin
    // ta kendisi.)
    const spin = (type==='hazardJump') ? 0 : t*(type==='hazardCreep'?1.1:type==='hazardPulse'?1.0:0.6);
    drawHazardImage(x,y,Rh*1.3,col,type,spin);
    ctx.globalAlpha=1;
    if(type==='hazardJump'){
      ctx.strokeStyle='rgba(255,255,255,.5)'; ctx.setLineDash([3,5]); ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(x,y,Rh*1.6,0,7); ctx.stroke(); ctx.setLineDash([]);
    } else if(type==='hazardPull'){
      ctx.save(); ctx.translate(x,y); ctx.rotate(-t*2.2);
      ctx.strokeStyle=hexA('#ffb454',.55); ctx.setLineDash([2,4]); ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(0,0,Rh*1.7,0,7); ctx.stroke(); ctx.setLineDash([]);
      ctx.restore();
    } else if(isTwinKind){
      ctx.fillStyle='rgba(255,255,255,.7)';
      ctx.beginPath(); ctx.arc(x-Rh*0.55,y-Rh*0.75,Rh*0.22,0,7); ctx.fill();
      ctx.beginPath(); ctx.arc(x+Rh*0.55,y-Rh*0.75,Rh*0.22,0,7); ctx.fill();
    }
    if(it && it.boss){
      // Boss dalgasının öğelerini diğer tehlike şekillerinin üstüne titreşen
      // altın bir halkayla işaretler — tip ne olursa olsun tanınabilir kalır.
      ctx.strokeStyle=hexA('#ffd24a', 0.55+Math.sin(t*6)*0.25); ctx.lineWidth=2;
      ctx.setLineDash([4,3]);
      ctx.beginPath(); ctx.arc(x,y,Rh*1.9,0,7); ctx.stroke();
      ctx.setLineDash([]);
    }
  } else if(type==='gold'){
    drawNoteShape(x,y,R*1.1,col,true,0);
    if(cfg.colorblind){ ctx.setLineDash([4,4]); ctx.strokeStyle='#fff'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(x,y,R*1.5,0,7); ctx.stroke(); ctx.setLineDash([]); }
  } else if(type==='star'){
    drawNoteShape(x,y,R,col,false,0);
    if(cfg.colorblind){ ctx.strokeStyle='#fff'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(x,y,R*1.15,0,7); ctx.stroke(); }
  } else if(type==='diamond'){
    // Nadir değerli öğe (kodda 'diamond'): sol anahtarı. Asset gelene kadar
    // vektörle çizilir (bkz. drawTrebleClef); 3D mod da bu çizimi doku
    // olarak kullanır (manifest items.diamond ile değiştirilebilir).
    ctx.save(); ctx.shadowColor='#ffd98a'; ctx.shadowBlur=R*0.9;
    drawTrebleClef(ctx, x, y, R*2.9, col);
    ctx.restore();
    // Dönen küçük ışıltı — "beyaz ışık" hissi.
    const tw=0.6+Math.sin(t*6)*0.4, sx=x+R*0.75, sy=y-R*0.95;
    ctx.save(); ctx.translate(sx,sy); ctx.rotate(t*1.5); ctx.fillStyle=`rgba(255,255,255,${0.5+tw*0.5})`;
    ctx.beginPath();
    for(let i=0;i<8;i++){ const a=i*Math.PI/4, rr=(i%2?0.12:0.42)*R*tw; i?ctx.lineTo(Math.cos(a)*rr,Math.sin(a)*rr):ctx.moveTo(Math.cos(a)*rr,Math.sin(a)*rr); }
    ctx.closePath(); ctx.fill(); ctx.restore();
  } else if(type==='coin'){
    // Para birimi (Nota) jetonu — mini plak gibi: oluklu dış halka + renkli etiket.
    ctx.save(); ctx.translate(x,y); ctx.rotate(t*2);
    ctx.fillStyle='#2a1a10'; ctx.beginPath(); ctx.arc(0,0,R,0,7); ctx.fill();
    ctx.strokeStyle='rgba(255,255,255,.18)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.arc(0,0,R*0.8,0,7); ctx.stroke();
    ctx.fillStyle='#ffb454'; ctx.beginPath(); ctx.arc(0,0,R*0.58,0,7); ctx.fill();
    ctx.fillStyle='#c47a1f'; ctx.beginPath(); ctx.arc(0,0,R*0.3,0,7); ctx.fill();
    ctx.fillStyle='#0a0604'; ctx.beginPath(); ctx.arc(0,0,R*0.1,0,7); ctx.fill();
    ctx.restore();
  } else if(type==='heart'){
    const pulse=1+Math.sin(t*5)*0.08;
    drawHeartShape(x,y,R*1.15*pulse,col);
    ctx.fillStyle='rgba(255,255,255,.85)'; ctx.beginPath(); ctx.arc(x-R*0.22,y-R*0.18,R*0.22,0,7); ctx.fill();
  } else {
    ctx.fillStyle='rgba(255,255,255,.14)'; ctx.beginPath(); ctx.arc(x,y,R*1.25,0,7); ctx.fill();
    const iconKey = PW_ICON_TYPE[type];
    if(iconKey) drawPwIcon(x,y,iconKey,R);
  }
}
// Tehlike tipi -> canavarlar.jpg'den kesilen görsel (bkz. data.js
// MONSTER_IMG). col parametresi burada tint için DEĞİL, sadece çağıranın
// glow/halka efektleri için kullanılmaya devam ediyor — görsel kendi rengini
// taşıyor, üstüne boyama yapılmıyor.
// Her tehlike tipi artık kullanıcının verdiği 12 "yaratık davranışı"
// listesinden, OYUN MEKANİĞİYLE EN İYİ ÖRTÜŞENİ seçilerek eşlendi:
// Çizik CD (sürekli dönen temel tehlike), MiniDisc (halkalar arası zıplar
// — hazardJump'ın ZATEN yaptığı şey), 8-Track Kartuş (ağır/büyük —
// hazardBomb'un 1.5x boyutuyla örtüşüyor), Kaset Bandı (dolanıp çeken —
// hazardPull'ın çekim alanıyla örtüşüyor), Telefon Bildirimi (aniden beliren,
// "gerçek mi sahte mi?" — hazardTwin/Decoy mekaniğiyle birebir), Dijital
// Ekolayzer (ritme göre büyüyüp küçülen çubuklar — hazardPulse'ın boyut
// nabzıyla birebir), P2P Virüsü (notalarını yemeye çalışan saldırgan böcek —
// en tehlikeli/en geç açılan hazardCreep ile örtüşüyor).
const HAZARD_IMG_KEY = {
  hazard:'monster3', hazardJump:'monster2', hazardBomb:'monster6',
  hazardPull:'monster1', hazardTwin:'monster16', hazardTwinDecoy:'monster16',
  hazardPulse:'monster11', hazardCreep:'monster13',
};
function drawHazardImage(x,y,size,col,type,rot){
  const img = MONSTER_IMG[HAZARD_IMG_KEY[type]];
  if(img && img.complete && img.naturalWidth>0){
    ctx.save(); ctx.translate(x,y); if(rot) ctx.rotate(rot);
    ctx.drawImage(img, -size, -size, size*2, size*2);
    ctx.restore();
  } else {
    // Görsel henüz yüklenmediyse (ilk birkaç kare) eski basit daireye düş.
    ctx.fillStyle=col; ctx.beginPath(); ctx.arc(x,y,size*0.8,0,7); ctx.fill();
  }
}
function drawStar(x,y,outer,inner,pts,rot,col){
  ctx.fillStyle=col; ctx.beginPath();
  for(let i=0;i<pts*2;i++){ const rr=i%2?inner:outer; const a=rot+i*Math.PI/pts-Math.PI/2;
    const xx=x+Math.cos(a)*rr, yy=y+Math.sin(a)*rr; i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy); }
  ctx.closePath(); ctx.fill();
}
// Nota glifi: notabaşı (eğik elips) + sap + (opsiyonel) bayrak. Oyuncu,
// toplanabilir "nota" (eski adıyla 'star' item tipi) ve boss ödülü ('gold')
// BU TEK fonksiyonu paylaşır — sadece boyut/renk/bayrak değişir, böylece
// "nota" görsel kimliği oyun genelinde tutarlı kalır.
function drawNoteShape(x,y,r,col,withFlag,rot){
  ctx.save(); ctx.translate(x,y); ctx.rotate(rot||0);
  ctx.fillStyle=col;
  ctx.beginPath(); ctx.ellipse(0,r*0.05,r*0.95,r*0.72,-0.32,0,7); ctx.fill();
  ctx.strokeStyle=col; ctx.lineWidth=Math.max(1.4,r*0.26); ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(r*0.78,-r*0.15); ctx.lineTo(r*0.78,-r*2.0); ctx.stroke();
  if(withFlag){
    ctx.beginPath();
    ctx.moveTo(r*0.78,-r*2.0);
    ctx.quadraticCurveTo(r*2.1,-r*1.6, r*1.5,-r*0.55);
    ctx.quadraticCurveTo(r*1.25,-r*1.25, r*0.78,-r*1.45);
    ctx.closePath(); ctx.fill();
  }
  ctx.restore();
}
// Sol anahtarı (𝄞) — font yerine vektör: bazı Android/iOS fontlarında
// müzik sembolleri hiç çizilmiyor. g: hangi canvas bağlamı (oyun ya da
// Nasıl Oynanır ikonu), h: toplam yükseklik (piksel).
function drawTrebleClef(g,x,y,h,col){
  const s=h/2.5;
  g.save(); g.translate(x,y); g.scale(s,s);
  g.strokeStyle=col; g.fillStyle=col; g.lineCap='round'; g.lineJoin='round';
  g.lineWidth=Math.max(0.15, 1.6/s); // küçük boyutta da en az ~1.6px kalınlık
  g.beginPath();
  g.moveTo(-0.28,0.98);
  g.bezierCurveTo(-0.28,1.22, 0.14,1.22, 0.12,0.86);
  g.lineTo(-0.02,-0.62);
  g.bezierCurveTo(-0.06,-1.05, 0.28,-1.32, 0.32,-0.98);
  g.bezierCurveTo(0.36,-0.68, -0.40,-0.42, -0.42,0.12);
  g.bezierCurveTo(-0.44,0.58, 0.16,0.74, 0.38,0.42);
  g.bezierCurveTo(0.56,0.14, 0.30,-0.14, 0.04,-0.08);
  g.bezierCurveTo(-0.18,-0.02, -0.20,0.30, 0.02,0.36);
  g.stroke();
  g.beginPath(); g.arc(-0.24,0.98,0.13,0,7); g.fill();
  g.restore();
}
function drawHeartShape(x,y,r,col){
  ctx.save(); ctx.translate(x,y); ctx.fillStyle=col;
  ctx.beginPath();
  ctx.moveTo(0,r*0.32);
  ctx.bezierCurveTo(0,-r*0.28, -r*1.05,-r*0.28, -r*1.05,r*0.32);
  ctx.bezierCurveTo(-r*1.05,r*0.82, -r*0.35,r*1.05, 0,r*1.35);
  ctx.bezierCurveTo(r*0.35,r*1.05, r*1.05,r*0.82, r*1.05,r*0.32);
  ctx.bezierCurveTo(r*1.05,-r*0.28, 0,-r*0.28, 0,r*0.32);
  ctx.closePath(); ctx.fill();
  ctx.restore();
}
// Pikap kolu: normal oynanışta plağın dışında, kalkık "dinlenme"
// pozisyonunda sabit durur (drawTonearmIdle). Boss eşiğine yaklaşınca
// (drawBossTelegraph) aynı kol BOSS_WARN_SECONDS boyunca plağa doğru iner;
// tam indiği an (tel.t=1) engine.js zaten startBossWave()'i tetikliyor —
// yani "iğne plağa vurunca boss dalgası patlıyor" hissi, eski "ortadan
// büyüyen yıldız" yerine (kullanıcı talebi). Zamanlama/eşik mantığı hiç
// değişmedi, sadece görsel sunum.
const TONEARM_REST_ANGLE = -0.15, TONEARM_STRIKE_ANGLE = 2.35;
function tonearmGeometry(swing){
  const sunR = Math.min(W,H)*0.06, discR = sunR*2.3;
  const pivotX = CX + discR*1.35, pivotY = CY - discR*0.85;
  const armLen = discR*1.55;
  const ang = TONEARM_REST_ANGLE + (TONEARM_STRIKE_ANGLE-TONEARM_REST_ANGLE)*swing;
  return {discR, pivotX, pivotY, tipX: pivotX+Math.cos(ang)*armLen, tipY: pivotY+Math.sin(ang)*armLen};
}
function drawTonearmBody(g, headGlowAlpha, headGlowR){
  if(headGlowR>0){
    const grad=ctx.createRadialGradient(g.tipX,g.tipY,0,g.tipX,g.tipY,headGlowR);
    grad.addColorStop(0, hexA('#5ad1ff',headGlowAlpha)); grad.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=grad; ctx.beginPath(); ctx.arc(g.tipX,g.tipY,headGlowR,0,7); ctx.fill();
  }
  ctx.strokeStyle='rgba(210,216,230,.85)'; ctx.lineWidth=Math.max(2,g.discR*0.045); ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(g.pivotX,g.pivotY); ctx.lineTo(g.tipX,g.tipY); ctx.stroke();
  ctx.fillStyle='#2a2a33'; ctx.beginPath(); ctx.arc(g.pivotX,g.pivotY,g.discR*0.12,0,7); ctx.fill();
  ctx.fillStyle='rgba(234,252,255,.9)'; ctx.beginPath(); ctx.arc(g.tipX,g.tipY,g.discR*0.08,0,7); ctx.fill();
}
function drawTonearmIdle(){
  drawTonearmBody(tonearmGeometry(0), 0, 0);
}
// Boss uyarısının zaman çizelgesi (tt: 0->1, BOSS_WARN_SECONDS boyunca).
// Klasik ve 3D çizim aynı fazları kullanır — sadece görsel; boss'un ne
// zaman ve nasıl geldiği (engine.js) değişmedi:
//   swing     0.00-0.28  iğne plağın üstüne gelip yüzeye iner
//   gather    0.28-0.40  kolun sabit ucunda elektrik yükü toplanır
//   travel    0.40-0.82  yük kol boyunca iğne ucuna akar
//   discharge 0.82-1.00  uçtan plağa şimşekler yayılır -> boss patlar
function bossTelegraphPhases(tt){
  const cl=v=>Math.max(0,Math.min(1,v)), ss=v=>v*v*(3-2*v);
  return {swing:ss(cl(tt/0.28)), gather:cl((tt-0.28)/0.12), travel:ss(cl((tt-0.40)/0.42)), discharge:cl((tt-0.82)/0.18)};
}
const ELECTRIC_COL='#7fe8ff';
// Zikzaklı şimşek. Rastgelelik ~18 kez/sn değişen bir tohumdan gelir:
// şimşek titrer ama her karede baştan zıplamaz.
function drawBolt2D(ax,ay,bx,by,segs,amp,w,alpha,grow,seed){
  const rng=mulberry32(seed);
  const dx=bx-ax, dy=by-ay, l=Math.hypot(dx,dy)||1, nx=-dy/l, ny=dx/l;
  const m=Math.max(1,Math.ceil(segs*Math.max(0,Math.min(1,grow==null?1:grow))));
  ctx.beginPath(); ctx.moveTo(ax,ay);
  for(let k=1;k<=m;k++){
    const u=k/segs, off=(k===segs)?0:(rng()*2-1)*amp*l*Math.sin(u*Math.PI);
    ctx.lineTo(ax+dx*u+nx*off, ay+dy*u+ny*off);
  }
  ctx.strokeStyle=hexA(ELECTRIC_COL,alpha); ctx.lineWidth=w*2.6; ctx.stroke();
  ctx.strokeStyle=`rgba(255,255,255,${alpha})`; ctx.lineWidth=w; ctx.stroke();
}
function electricGlow(x,y,r,alpha){
  const g=ctx.createRadialGradient(x,y,0,x,y,r);
  g.addColorStop(0,`rgba(235,255,255,${alpha})`); g.addColorStop(0.3,hexA(ELECTRIC_COL,alpha*0.7)); g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,r,0,7); ctx.fill();
}
let _bossDischargeTs=-1e9;
function drawBossTelegraph(t, tel){
  const ph=bossTelegraphPhases(tel.t);
  const g=tonearmGeometry(ph.swing);
  drawTonearmBody(g, 0, 0);
  const bucket=Math.floor(performance.now()/55), flick=0.75+((bucket*9301)%100)/400;
  ctx.save(); ctx.globalCompositeOperation='lighter'; ctx.lineCap='round'; ctx.lineJoin='round';
  if(ph.gather>0 && ph.travel<1){
    // Yük toplanıyor: kolun sabit ucunda büyüyen parıltı + çıtırdayan arklar.
    const a=ph.gather*(1-ph.travel*0.6)*flick;
    electricGlow(g.pivotX,g.pivotY,g.discR*(0.25+0.4*ph.gather),a);
    const n=2+Math.round(ph.gather*3);
    for(let i=0;i<n;i++){
      const r2=mulberry32(bucket*31+i), ang=r2()*Math.PI*2, rr=g.discR*(0.15+r2()*0.3*ph.gather);
      drawBolt2D(g.pivotX,g.pivotY,g.pivotX+Math.cos(ang)*rr,g.pivotY+Math.sin(ang)*rr,5,0.35,1.2,a,1,bucket*97+i);
    }
  }
  if(ph.travel>0 && ph.discharge<1){
    // Yük kol boyunca iğne ucuna akıyor: dolan kısım parlıyor.
    const ox=g.pivotX+(g.tipX-g.pivotX)*ph.travel, oy=g.pivotY+(g.tipY-g.pivotY)*ph.travel;
    ctx.strokeStyle=hexA(ELECTRIC_COL,0.55*flick); ctx.lineWidth=Math.max(3,g.discR*0.09);
    ctx.beginPath(); ctx.moveTo(g.pivotX,g.pivotY); ctx.lineTo(ox,oy); ctx.stroke();
    for(let i=0;i<3;i++){
      const r2=mulberry32(bucket*17+i), back=Math.max(0,ph.travel-(0.05+r2()*0.25));
      drawBolt2D(ox,oy,g.pivotX+(g.tipX-g.pivotX)*back,g.pivotY+(g.tipY-g.pivotY)*back,6,0.25,1.1,0.85*flick,1,bucket*53+i);
    }
    electricGlow(ox,oy,g.discR*(0.22+0.12*ph.travel)*flick,1);
  }
  if(ph.discharge>0){
    // Boşalma: iğne ucundan halkalara yayılan dallı şimşekler.
    const grow=Math.min(1,ph.discharge*1.4);
    electricGlow(g.tipX,g.tipY,g.discR*(0.35+ph.discharge*0.5)*flick,1);
    for(let i=0;i<8;i++){
      const r2=mulberry32(bucket*13+i), ang=(i/8)*Math.PI*2+r2()*0.5, rr=RINGS[i%3]*(0.95+r2()*0.1);
      const bx=CX+Math.cos(ang)*rr, by=CY+Math.sin(ang)*rr;
      drawBolt2D(g.tipX,g.tipY,bx,by,12,0.16,1.6,flick,grow,bucket*71+i);
      if(r2()<0.7){
        const u=0.35+r2()*0.35, mx=g.tipX+(bx-g.tipX)*u, my=g.tipY+(by-g.tipY)*u;
        const ba=ang+(r2()-0.5)*1.4, br=g.discR*(0.3+r2()*0.5);
        drawBolt2D(mx,my,mx+Math.cos(ba)*br,my+Math.sin(ba)*br,5,0.3,1,0.8*flick,Math.max(0,(grow-u)/(1-u)),bucket*113+i);
      }
    }
    for(const r of RINGS){ ctx.strokeStyle=hexA(ELECTRIC_COL,ph.discharge*0.5*flick); ctx.lineWidth=2.5; ctx.beginPath(); ctx.arc(CX,CY,r,0,7); ctx.stroke(); }
    if(ph.discharge>0.85) _bossDischargeTs=performance.now();
  }
  ctx.restore();
}
// Boss patlama anı: elektrik merkezden dış halkaya dalga halinde yayılıp söner.
function drawBossAfterglow(){
  const age=performance.now()-_bossDischargeTs;
  if(age>550 || !GAME_STATES[state]) return;
  const a=1-age/550, bucket=Math.floor(performance.now()/55);
  ctx.save(); ctx.globalCompositeOperation='lighter'; ctx.lineCap='round'; ctx.lineJoin='round';
  for(let i=0;i<10;i++){
    const r2=mulberry32(bucket*29+i), ang=(i/10)*Math.PI*2+r2()*0.4, rr=RINGS[2]*(1+r2()*0.12);
    drawBolt2D(CX,CY,CX+Math.cos(ang)*rr,CY+Math.sin(ang)*rr,14,0.14,1.7,a,1,bucket*61+i);
  }
  for(const r of RINGS){ ctx.strokeStyle=hexA(ELECTRIC_COL,a*0.6); ctx.lineWidth=3; ctx.beginPath(); ctx.arc(CX,CY,r,0,7); ctx.stroke(); }
  ctx.restore();
}
// Parçacık fiziği çizimden ayrı: 3D modda sadece bu çalışır, çizimi
// Render3D yapar.
function updateParticles(dt){
  for(const p of particles){
    p.x+=p.vx*dt; p.y+=p.vy*dt; p.vx*=0.94; p.vy*=0.94; p.life-=0.03*dt;
  }
  let _pw=0;
  for(let _pr=0;_pr<particles.length;_pr++){ if(particles[_pr].life>0) particles[_pw++]=particles[_pr]; }
  particles.length=_pw;
}
function drawParticles(dt){
  updateParticles(dt);
  for(const p of particles){
    ctx.globalAlpha=Math.max(0,p.life); ctx.fillStyle=p.color;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r*p.life,0,7); ctx.fill();
  }
  ctx.globalAlpha=1;
}
function hexA(hex,a){
  const h=hex.replace('#',''); const n=parseInt(h.length===3? h.split('').map(c=>c+c).join(''):h,16);
  return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`;
}
