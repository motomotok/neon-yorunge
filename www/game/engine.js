// Simülasyon çekirdeği: canvas boyutlandırma, oyuncu/eşya fiziği, çarpışma
// tespiti, güç-yükseltmeleri, can/revive akışı ve HUD güncellemesi.
// (Çizim mantığı render.js'de, ekran/durum geçişleri screens.js'de.)
const cv = document.getElementById('game');
const ctx = cv.getContext('2d');
let W,H,CX,CY,DPR, RINGS=[], PLAYER_R;
const NUM_RINGS = 3, MIN_GAP = 0.55;

function resize(){
  DPR = Math.min(window.devicePixelRatio||1, 2);
  W = window.innerWidth; H = window.innerHeight;
  cv.width=W*DPR; cv.height=H*DPR; cv.style.width=W+'px'; cv.style.height=H+'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);
  CX=W/2; CY=H/2;
  const base=Math.min(W,H);
  RINGS=[base*0.19, base*0.285, base*0.38];
  PLAYER_R=Math.max(9, base*0.021);
}

let state='menu';
const GAME_STATES = {play:1, pause:1, over:1, revive:1};
let mode='classic', diffKey='normal';
let player, items, particles, score, combo, lives, level, elapsed, spawnTimer, shake, flash, freezeFlash;
let levelFlashT, session, timeLeft, newRecord, timeScale, timeScaleT, activeBoost=null, pendingBoost=null;
// Boss dalgası: skor eşiklerinde (bkz. BOSS_STAGES) güneşten patlayarak
// beliren, tek seferlik yoğun bir tehlike dalgası. bossWaveItems o dalganın
// öğelerine referans tutar; hepsi (kaçırılarak ya da çarpılarak) hayattan
// çıkınca "temizlendi" sayılır ve oyuncuya ekstra yıldız tozu verilir.
let bossNextIndex, bossActive, bossWaveItems, bossReward;

const SLOW_DUR=300, MAGNET_DUR=360, INVUL=95, FREEZE_DUR=150, MULT_DUR=360, GHOST_DUR=240;
const PW = ['shield','slow','magnet','freeze','mult','ghost'];
// HUD çipleriyle (bkz. chip() çağrıları aşağıda) aynı ikon setine eşler —
// oyun dünyasındaki takviye topları da render.js'de bu anahtarlarla,
// sistem emojisi yerine oyunun kendi SVG ikonlarıyla çizilir.
const PW_ICON_TYPE = {shield:'shield', slow:'clock', magnet:'magnet', freeze:'hourglass', mult:'coin', ghost:'ghost'};

function resetGame(){
  player = { ang:-Math.PI/2, targetRing:0, curRadius:radiusFor(0), speed:1.6, speedMulEase:1,
             shield:false, slowT:0, magnetT:0, invulT:0, freezeT:0, multT:0, ghostT:0 };
  items=[]; particles=[]; score=0; combo=1;
  lives = mode==='zen' ? 999 : diffCfg.lives;
  level=1; elapsed=0; spawnTimer=0; shake=0; flash=0; freezeFlash=0; levelFlashT=0;
  session = {stars:0, golds:0, diamonds:0, magnets:0, hits:0, shieldSaved:false, streakMax:0,
             coins:0, coinPickups:0, luckyCharges:0, stardustMult:1, revivedUsed:false};
  timeLeft = mode==='time' ? 60 : null;
  newRecord=false; timeScale=1; timeScaleT=0;
  bossNextIndex=0; bossActive=false; bossWaveItems=[]; bossReward=0;
  if(activeBoost){
    if(activeBoost==='shieldstart') player.shield=true;
    else if(activeBoost==='slowstart') player.slowT=SLOW_DUR;
    else if(activeBoost==='luckystart') session.luckyCharges=3;
    else if(activeBoost==='coinrush') session.stardustMult=1.5;
    activeBoost=null;
  }
  for(let i=0;i<4;i++) spawnItem(player.ang + 1.4 + i*0.95);
  updateHud();
}

function normAng(a){ a%=(Math.PI*2); if(a<0)a+=Math.PI*2; return a; }
function angDiff(a,b){ let d=b-a; while(d>Math.PI)d-=Math.PI*2; while(d<-Math.PI)d+=Math.PI*2; return d; }
function radiusFor(r){ return RINGS[r]; }
function easeOut(t){ return 1-Math.pow(1-t,3); }
function isHazardType(t){ return t==='hazard'||t==='hazardJump'||t==='hazardBomb'||t==='hazardPull'||t==='hazardTwin'||t==='hazardPulse'||t==='hazardCreep'; }
function isPower(t){ return t==='shield'||t==='slow'||t==='magnet'||t==='freeze'||t==='mult'||t==='ghost'; }

// Skor eşiklerinde açılan gelişmiş tehlike tipleri: eşiğe ulaşınca bir anda
// hep-ya-da-hiç değil, eşikten ne kadar ileri gidersen ihtimali o kadar
// artan (tavana kadar) kalıcı bir risk haline gelirler.
const HAZARD_KINDS = [
  {type:'hazard',     min:0,    rampPer:0,       cap:0.55},
  {type:'hazardJump', min:0,    rampPer:0,       cap:0.27},
  {type:'hazardBomb', min:0,    rampPer:0,       cap:0.18},
  {type:'hazardPull', min:500,  rampPer:0.00012, cap:0.22},
  {type:'hazardTwin', min:1000, rampPer:0.00012, cap:0.22},
  {type:'hazardPulse',min:1500, rampPer:0.00012, cap:0.22},
  {type:'hazardCreep',min:2000, rampPer:0.00012, cap:0.20},
];
function pickHazardKind(){
  let total=0;
  const weights=HAZARD_KINDS.map(h=>{
    const w = h.min===0 ? h.cap : (score>=h.min ? Math.min(h.cap,(score-h.min)*h.rampPer) : 0);
    total+=w; return w;
  });
  let r=rnd()*total;
  for(let i=0;i<HAZARD_KINDS.length;i++){ r-=weights[i]; if(r<=0) return HAZARD_KINDS[i].type; }
  return 'hazard';
}

// Skor eşiklerinde bir kerelik "boss dalgası": güneşten patlama efektiyle
// belirir, aynı anda `count` kadar tehlike fırlatır. Zen modda hiç
// tetiklenmez (o modda zaten hiç tehlike yok). Her eşik bir oyunda yalnızca
// bir kez tetiklenir (bkz. bossNextIndex, resetGame() ile sıfırlanır).
const BOSS_STAGES = [
  {score:1000,  count:5, reward:40},
  {score:5000,  count:7, reward:100},
  {score:10000, count:9, reward:200},
];
// Boss dalgası sırasında oyuncunun (mevcut hızından bağımsız) sabit açısal
// hızı — dalganın toplam açısal uzunluğu (~1.3 başlangıç payı + 3.2 yayılım
// + pay) bu hızla en az ~6.5 saniyede kat edilir.
const BOSS_SLOW_RATE = 0.012;
function startBossWave(stageDef){
  bossActive=true; bossReward=stageDef.reward; bossWaveItems=[];
  shake=Math.max(shake,20); flash=1;
  burst(CX,CY,'#ffd24a',40,7); burst(CX,CY,'#ff6b3d',30,6); burst(CX,CY,'#ffffff',20,5);
  beep(90,0.5,'sawtooth',0.2); beep(140,0.5,'square',0.16); beep(60,0.6,'sine',0.18);
  showFlash('⚠ BOSS DALGASI!',90); vibrate([30,40,30,40,60]);
  const startAng = normAng(player.ang + 1.3), spread = 3.2;
  for(let i=0;i<stageDef.count;i++){
    const ang = normAng(startAng + (stageDef.count>1 ? (i/(stageDef.count-1))*spread : 0));
    const ring = Math.floor(rnd()*NUM_RINGS);
    const type = pickHazardKind();
    const it = {ang, ring, type, alive:true, pop:0, expiring:false, prevFwd:null,
      jumpT: type==='hazardJump' ? 70+rnd()*60 : 0,
      pulsePhase: type==='hazardPulse' ? rnd()*Math.PI*2 : 0, pulseDanger:false,
      creepT: type==='hazardCreep' ? 50+rnd()*40 : 0, creeped:false, boss:true};
    items.push(it); bossWaveItems.push(it);
  }
}

function spawnItem(atAng){
  const zen = mode==='zen';
  const hazChance = zen ? 0 : Math.min(diffCfg.hazCap, diffCfg.hazBase + elapsed*diffCfg.hazRamp);
  let ang, ring, tries=0, ok=false;
  do{
    ring=Math.floor(rnd()*NUM_RINGS);
    ang=normAng(atAng!=null ? atAng : (player.ang + 1.5 + rnd()*3.0));
    ok=true;
    for(const it of items){
      if(!it.alive || it.expiring || it.ring!==ring) continue;
      if(Math.abs(angDiff(it.ang,ang))<MIN_GAP){ ok=false; break; }
    }
    tries++;
  } while(!ok && tries<12);
  if(!ok) return;
  let type; let r=rnd();
  if(session.luckyCharges>0 && r<hazChance){ session.luckyCharges--; r=hazChance; }
  if(r < hazChance){
    type = pickHazardKind();
  } else if(r < hazChance+0.03) type='diamond';
  else if(r < hazChance+0.08) type=PW[Math.floor(rnd()*PW.length)];
  else if(r < hazChance+0.14) type='coin';
  else if(r < hazChance+0.25) type='gold';
  else type='star';
  items.push({ang, ring, type, alive:true, pop:0, expiring:false, prevFwd:null,
    jumpT: type==='hazardJump' ? 70+Math.random()*60 : 0,
    pulsePhase: type==='hazardPulse' ? rnd()*Math.PI*2 : 0, pulseDanger:false,
    // Not: oyuncu geç oyunda (bu tip skor 2000+'da açılıyor) halkayı çok
    // hızlı katlediyor; birkaç saniyelik bir gecikme çoğu zaman öğe zaten
    // geçildikten sonra dolardı. Gecikme, fark edilir bir "bekleme" hissi
    // korurken gerçek erişim süresiyle uyumlu kalacak şekilde kısa tutuldu.
    creepT: type==='hazardCreep' ? 50+rnd()*40 : 0, creeped:false});
  if(type==='hazardTwin'){
    const otherRings=[0,1,2].filter(x=>x!==ring);
    const decoyRing=otherRings[Math.floor(rnd()*otherRings.length)];
    items.push({ang, ring:decoyRing, type:'hazardTwinDecoy', alive:true, pop:0, expiring:false, prevFwd:null, jumpT:0});
  }
}

function tap(x){
  const goOut = x >= W/2;
  const next = player.targetRing + (goOut ? 1 : -1);
  if(next < 0 || next > NUM_RINGS-1) return;
  player.targetRing = next;
  beep(goOut?620:420,0.07,'triangle',0.10);
}

function burst(x,y,color,n,spd){
  for(let i=0;i<n;i++){
    const a=Math.random()*Math.PI*2, s=Math.random()*spd+0.5;
    particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,color,r:Math.random()*3+1.5});
  }
}
function showFlash(text,dur){ levelFlashT=dur; document.getElementById('levelFlash').textContent=text; }

function checkStreak(ix,iy,mult){
  if(combo>0 && combo%MELODY_SCALE.length===0){
    const octave=combo/MELODY_SCALE.length;
    score+=20*octave*mult; timeScale=0.3; timeScaleT=16;
    showFlash('MELODİ x'+octave+'!',50); burst(ix,iy,'#ffffff',18,5);
    const root=melodyFreq(combo-1);
    beep(root,0.16,'triangle',0.16,true); beep(root*1.25,0.16,'sine',0.12,true); beep(root*1.5,0.18,'sine',0.10,true);
  }
}

function update(dt){
  elapsed+=dt;
  const zen = mode==='zen';
  const nl = zen ? level : 1 + Math.floor(elapsed/720);
  if(nl>level){ level=nl; beep(660,0.1,'triangle',0.13); beep(990,0.12,'sine',0.10); showFlash('SEVİYE '+level,70); vibrate([10,50,10]); }

  if(mode==='time'){
    timeLeft -= dt/60;
    if(timeLeft<=0){ timeLeft=0; gameOver('time'); return; }
  }

  // Ani hız sıçramalarını (dondurma/yavaşlatma bitince tek karede eski hıza
  // fırlaması) önlemek için hedef çarpana her karede yumuşakça yaklaşılır —
  // "top bi anda aşırı hızlanıyor" hissi buradan geliyordu.
  let targetSpeedMul = 1;
  if(player.freezeT>0) targetSpeedMul=0.04; else if(player.slowT>0) targetSpeedMul=0.5;
  player.speedMulEase += (targetSpeedMul-player.speedMulEase)*Math.min(1,0.1*dt);
  const speedMul = player.speedMulEase;
  // Temel hız artışı artık oynama SÜRESİNE değil SKORA bağlı ve skor
  // 1500'e ulaşmadan devreye girmiyor — erken oyunda tempo daha uzun süre
  // sabit kalıyor, sonrası daha yumuşak bir eğimle tavana çıkıyor.
  player.speed = 1.5 + (zen?0:Math.min(diffCfg.speedCap, Math.max(0,score-1500)*diffCfg.speedRamp));
  let pullMul=1;
  if(!zen){
    for(const it of items){
      if(!it.alive || it.expiring || it.type!=='hazardPull' || it.ring!==player.targetRing) continue;
      const fwd=normAng(it.ang-player.ang);
      if(fwd>0 && fwd<0.85) pullMul=Math.max(pullMul, 1+(1-fwd/0.85)*0.55);
    }
  }
  // Boss dalgası sırasında oyuncu hızından bağımsız, sabit ve yavaş bir
  // açısal hızla ilerlenir — dalga en az ~6-7 saniye sürsün diye (bkz.
  // BOSS_SLOW_RATE, startBossWave()).
  const angStep = bossActive ? BOSS_SLOW_RATE : player.speed*speedMul*pullMul*0.018;
  player.ang = normAng(player.ang + angStep*dt*timeScale);

  const tR=radiusFor(player.targetRing);
  player.curRadius += (tR-player.curRadius)*Math.min(1,0.22*dt);
  const settled = Math.abs(player.curRadius-tR) < PLAYER_R*0.8;
  const curRing = player.targetRing;

  if(player.slowT>0) player.slowT-=dt;
  if(player.magnetT>0) player.magnetT-=dt;
  if(player.invulT>0) player.invulT-=dt;
  if(player.freezeT>0) player.freezeT-=dt;
  if(player.multT>0) player.multT-=dt;
  if(player.ghostT>0) player.ghostT-=dt;
  const mult = (player.multT>0 ? 2 : 1) * (diffCfg.scoreMult||1);

  // Boss dalgası sürerken normal rastgele spawn duraklar — "stage" temiz
  // kalsın, dalganın öğeleriyle karışıp okunaksızlaşmasın.
  if(!bossActive){
    spawnTimer-=dt;
    if(spawnTimer<=0){ spawnItem(); spawnTimer=Math.max(14, 40 - elapsed*0.011); }
  }

  for(const it of items){
    if(!it.alive) continue;
    if(!it.expiring && it.pop<1) it.pop=Math.min(1,it.pop+dt*0.14);

    if(it.type==='hazardJump' && !it.expiring){
      it.jumpT-=dt;
      if(it.jumpT<=0){ it.ring=(it.ring+(Math.random()<0.5?1:-1)+NUM_RINGS)%NUM_RINGS; it.jumpT=70+Math.random()*60; }
    }
    if(it.type==='hazardPulse' && !it.expiring){
      it.pulsePhase += dt*0.045;
      it.pulseDanger = Math.sin(it.pulsePhase) > 0.5;
    }
    if(it.type==='hazardCreep' && !it.expiring && !it.creeped){
      it.creepT-=dt;
      if(it.creepT<=0){
        it.creeped=true;
        const creepFwd=normAng(it.ang-player.ang);
        // Sadece oyuncuya doğru, aradaki mesafenin en fazla %40'ı kadar
        // ufak bir sıçrama yapar — asla oyuncuyu geçip "arkada" belirmez.
        if(creepFwd>0.3){
          const nudge=Math.min(0.5, creepFwd*0.4);
          it.ang=normAng(it.ang-nudge);
          const cix=CX+Math.cos(it.ang)*radiusFor(it.ring), ciy=CY+Math.sin(it.ang)*radiusFor(it.ring);
          burst(cix,ciy,'#ff3aa0',10,3);
        }
      }
    }

    const fwd=normAng(it.ang-player.ang);
    if(it.prevFwd!=null && (fwd-it.prevFwd)>Math.PI) it.expiring=true;
    it.prevFwd=fwd;

    if(it.expiring){ it.pop-=dt*0.08; if(it.pop<=0){ it.alive=false; continue; } }

    const da=Math.abs(angDiff(player.ang,it.ang));
    const hitWindow = it.type==='hazardBomb' ? 0.20 : 0.13;
    const isDangerKind = isHazardType(it.type) || it.type==='hazardTwinDecoy';

    // Tehlikeler: eskisi gibi açı+halka+"yerleşmiş mi" kontrolüyle — bu
    // tiplerin zorluğuna/adilliğine dokunmuyoruz.
    if(isDangerKind){
      if(it.expiring || da>=hitWindow || !settled) continue;
      const sameRing = it.ring===curRing;
      const ix=CX+Math.cos(it.ang)*radiusFor(it.ring), iy=CY+Math.sin(it.ang)*radiusFor(it.ring);
      if(isHazardType(it.type)){
        if(!sameRing) continue;
        if(it.type==='hazardPulse' && !it.pulseDanger) continue;
        if(player.ghostT>0){ it.alive=false; burst(ix,iy,'#ffffff',10,3); continue; }
        if(player.invulT<=0){ it.alive=false; hitHazard(ix,iy,it.type); if(state!=='play') return; }
      } else { // hazardTwinDecoy
        if(sameRing){ it.alive=false; burst(ix,iy,'#ffb27a',10,3); beep(300,0.05,'sine',0.06); }
      }
      session.streakMax=Math.max(session.streakMax,combo);
      continue;
    }

    // Toplanabilir öğeler (yıldız/altın/elmas/coin/takviye): açı+"yerleşmiş
    // mi" yerine oyuncunun O ANKİ gerçek piksel konumuna bakılır. Eskiden
    // halka geçişi sırasında (henüz "settled" olmadan) tam üstünden geçilen
    // bir boncuk bile toplanamıyordu — halka değiştirmek için dokunduğun an
    // tam da bu pencereye denk geliyordu. Ayrıca sabit açısal pencere iç
    // halkada dış halkaya göre çok daha dar bir gerçek mesafeye denk
    // geliyordu; piksel mesafesi tüm halkalarda tutarlı bir cömertlik sağlar.
    const magnetGrab = player.magnetT>0 && !isPower(it.type);
    let grabbed;
    if(magnetGrab){
      grabbed = da<hitWindow && settled; // mıknatıs halka farkı gözetmeden çeker
    } else {
      const px=CX+Math.cos(player.ang)*player.curRadius, py=CY+Math.sin(player.ang)*player.curRadius;
      const iix=CX+Math.cos(it.ang)*radiusFor(it.ring), iiy=CY+Math.sin(it.ang)*radiusFor(it.ring);
      grabbed = Math.hypot(px-iix, py-iiy) < PLAYER_R*2.6;
    }
    if(grabbed){
      const ix=CX+Math.cos(it.ang)*radiusFor(it.ring), iy=CY+Math.sin(it.ang)*radiusFor(it.ring);
      it.alive=false;
      if(it.type==='gold'){ combo++; score+=5*combo*mult; session.stars++; session.golds++; stats.golds++;
        burst(ix,iy,T.gold,22,5); shake=6; beep(880,0.09,'triangle',0.14); beep(1320,0.10,'sine',0.10); playMelodyNote(combo,0.10); bumpCombo(); checkStreak(ix,iy,mult); }
      else if(it.type==='diamond'){ combo++; score+=(20+level*4)*mult; session.stars++; session.diamonds++; stats.diamonds++;
        burst(ix,iy,'#eafcff',26,6); shake=8; beep(1200,0.1,'triangle',0.15); beep(1600,0.12,'sine',0.12); playMelodyNote(combo,0.12); bumpCombo(); checkStreak(ix,iy,mult); }
      else if(it.type==='star'){ combo++; score+=combo*mult; session.stars++;
        burst(ix,iy,T.star,14,4); shake=3; playMelodyNote(combo,0.16); bumpCombo(); checkStreak(ix,iy,mult); }
      else if(it.type==='coin'){
        const gained=Math.round((3+Math.floor(rnd()*4))*session.stardustMult*weekendMult());
        addStardust(gained); session.coins+=gained; session.coinPickups++;
        burst(ix,iy,'#ffb454',18,4.5); shake=4; beep(950,0.08,'triangle',0.13); beep(1400,0.06,'sine',0.1);
      }
      else { activatePower(it.type,ix,iy); }
    }
    session.streakMax=Math.max(session.streakMax,combo);
  }
  let _iw=0;
  for(let _ir=0;_ir<items.length;_ir++){ if(items[_ir].alive) items[_iw++]=items[_ir]; }
  items.length=_iw;
  if(items.length>30) items.splice(0, items.length-30);

  if(bossActive){
    bossWaveItems = bossWaveItems.filter(it=>it.alive);
    if(bossWaveItems.length===0){
      bossActive=false;
      addStardust(bossReward);
      showFlash('DALGA TEMİZLENDİ!',60);
      queueToast(icon('coin')+' Boss dalgası temizlendi! +'+bossReward);
      beep(700,0.15,'sine',0.15); beep(1000,0.15,'triangle',0.12); beep(1300,0.18,'sine',0.1);
    }
  } else if(!zen && bossNextIndex<BOSS_STAGES.length && score>=BOSS_STAGES[bossNextIndex].score){
    startBossWave(BOSS_STAGES[bossNextIndex]);
    bossNextIndex++;
  }

  if(shake>0) shake*=Math.pow(0.86,dt);
  if(flash>0) flash=Math.max(0,flash-dt*0.06);
  if(freezeFlash>0) freezeFlash=Math.max(0,freezeFlash-dt*0.05);
  if(levelFlashT>0) levelFlashT-=dt;
  // Melodi kombosunun "yavaş çekim" anı bitince timeScale eskiden tek
  // karede 0.3'ten 1'e fırlıyordu — bu da anlık bir hız patlaması gibi
  // hissettiriyordu. Artık geri sayım bitince yumuşakça 1'e yaklaşıyor.
  if(timeScaleT>0) timeScaleT-=1;
  else if(timeScale<1) timeScale=Math.min(1, timeScale+0.05*dt);
  updateHud();
}

function hitHazard(ix,iy,subtype){
  const px=CX+Math.cos(player.ang)*player.curRadius, py=CY+Math.sin(player.ang)*player.curRadius;
  // Bu fonksiyondaki tüm sesler "rakiplere çarpma" anına ait olduğundan
  // melodi-kombosu sesi kısma kuralından muaf tutulur (5. parametre).
  if(player.shield){ player.shield=false; session.shieldSaved=true; burst(px,py,'#5efc82',26,5); shake=9;
    beep(300,0.2,'square',0.14,true); return; }
  const power = subtype==='hazardBomb' ? 1.6 : 1;
  lives--; combo=1; shake=16*power; flash=1; session.hits++;
  burst(ix,iy,T.peril,34,6); beep(120,0.4,'sawtooth',0.2,true); beep(80,0.5,'square',0.15,true); vibrate([40,30,40]);
  if(lives<=0){
    if(mode!=='zen' && !session.revivedUsed) offerRevive();
    else gameOver();
  }
  else { player.invulT=INVUL; beep(220,0.15,'square',0.1,true); }
}

let reviveTimer=null;
function offerRevive(){
  state='revive'; showScreen('revive');
  let secs=6;
  const cd=document.getElementById('reviveCountdown'); if(cd) cd.textContent=secs;
  clearInterval(reviveTimer);
  reviveTimer=setInterval(()=>{
    secs--; if(cd) cd.textContent=secs;
    if(secs<=0){ clearInterval(reviveTimer); declineRevive(); }
  },1000);
}
function acceptRevive(){
  clearInterval(reviveTimer);
  Ads.showRewarded(()=>{
    session.revivedUsed=true; lives=1; combo=1; player.invulT=INVUL*3;
    state='play'; showScreen(null); queueToast('✨ Devam ediyorsun!');
  }, ()=>{ declineRevive(); });
}
function declineRevive(){
  clearInterval(reviveTimer);
  if(state==='revive') gameOver();
}

function activatePower(type,x,y){
  if(type==='shield'){ player.shield=true; burst(x,y,'#5efc82',20,5); beep(700,0.12,'sine',0.13); beep(1050,0.12,'triangle',0.1); }
  else if(type==='slow'){ player.slowT=SLOW_DUR; burst(x,y,'#7aa2ff',20,5); beep(400,0.2,'sine',0.13); }
  else if(type==='magnet'){ player.magnetT=MAGNET_DUR; session.magnets++; stats.magnets++; burst(x,y,'#ff7ae0',20,5); beep(600,0.14,'triangle',0.13); beep(900,0.14,'sine',0.1); }
  else if(type==='freeze'){ player.freezeT=FREEZE_DUR; freezeFlash=1; burst(x,y,'#7fe8ff',20,5); beep(500,0.18,'sine',0.13); }
  else if(type==='mult'){ player.multT=MULT_DUR; burst(x,y,'#ffd24a',20,5); beep(750,0.14,'triangle',0.13); }
  else if(type==='ghost'){ player.ghostT=GHOST_DUR; burst(x,y,'#ffffff',20,5); beep(450,0.16,'sine',0.13); }
  score+=10*(diffCfg.scoreMult||1); shake=6; vibrate(15);
}

function bumpCombo(){
  const c=document.getElementById('combo');
  c.style.transform='scale(1.4)'; setTimeout(()=>c.style.transform='scale(1)',110);
}

// Değişmeyen alanlara yazmayı atlamak için son yazılan değerleri önbelleğe
// alır — her karede (60/sn) unconditional DOM yazımı yerine, sadece
// gerçekten değişen elemanlar güncellenir (davranış aynı, gereksiz
// reflow/style recalculation önlenir).
const _hud = {score:null, combo:null, level:null, lives:null, isTime:null, timer:null, pw:null, flash:null, wallet:null};
function updateHud(){
  if(_hud.score!==score){ document.getElementById('scoreHud').textContent=score; _hud.score=score; }
  const comboText='x'+combo;
  if(_hud.combo!==comboText){ document.getElementById('combo').textContent=comboText; _hud.combo=comboText; }
  if(_hud.level!==level){ document.getElementById('levelHud').textContent=level; _hud.level=level; }
  const livesText = mode==='zen' ? '∞' : (lives>0 ? icon('heart').repeat(lives) : '');
  if(_hud.lives!==livesText){ document.getElementById('lives').innerHTML=livesText; _hud.lives=livesText; }
  const isTime = mode==='time';
  if(_hud.isTime!==isTime){
    document.getElementById('timerLbl').style.display = isTime?'block':'none';
    document.getElementById('timerHud').style.display = isTime?'block':'none';
    document.getElementById('levelLbl').style.display = isTime?'none':'block';
    document.getElementById('levelHud').style.display = isTime?'none':'block';
    _hud.isTime=isTime;
  }
  if(isTime){
    const timerText=Math.ceil(timeLeft)+'s';
    if(_hud.timer!==timerText){ document.getElementById('timerHud').textContent=timerText; _hud.timer=timerText; }
  }
  let html='';
  if(player.shield) html+=`<div class="pwchip">${icon('shield')}</div>`;
  if(player.slowT>0) html+=chip('clock', player.slowT/SLOW_DUR);
  if(player.magnetT>0) html+=chip('magnet', player.magnetT/MAGNET_DUR);
  if(player.freezeT>0) html+=chip('hourglass', player.freezeT/FREEZE_DUR);
  if(player.multT>0) html+=chip('coin', player.multT/MULT_DUR);
  if(player.ghostT>0) html+=chip('ghost', player.ghostT/GHOST_DUR);
  if(_hud.pw!==html){ document.getElementById('pw').innerHTML=html; _hud.pw=html; }
  const flashOpacity = levelFlashT>0 ? Math.min(1, levelFlashT/20) : 0;
  if(_hud.flash!==flashOpacity){ document.getElementById('levelFlash').style.opacity=flashOpacity; _hud.flash=flashOpacity; }
  const wallet = stats.stardust||0;
  if(_hud.wallet!==wallet){ document.getElementById('walletHud').textContent=wallet; _hud.wallet=wallet; }
}
function chip(iconKey,frac){ return `<div class="pwchip">${icon(iconKey)}<div class="pwbar"><i style="width:${Math.max(0,frac)*100}%"></i></div></div>`; }
