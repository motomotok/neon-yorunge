// Grafik modu yöneticisi: klasik (Canvas 2D, render.js) ile 3D (WebGL,
// render3d-bundle.js) arasında geçiş. 3D paketi (~700 KB) sadece 3D mod
// açıldığında tembel yüklenir — klasik modda hiç indirilmez.
// render.js'den SONRA, input.js'den ÖNCE yüklenir.
//
// Test kısayolu: adres çubuğuna ?gfx=3d (ya da ?gfx=classic) eklemek modu
// kalıcı olarak değiştirir.
let _gfx3dState = 'off'; // off | loading | ready | failed
const GFX_QUALITIES = ['auto','low','medium','high'];

(function applyGfxUrlOverride(){
  try{
    const q = new URLSearchParams(location.search).get('gfx');
    if(q==='3d' || q==='classic'){ cfg.gfx = q; saveCfg(); }
  }catch(e){}
})();

function gfx3dActive(){ return cfg.gfx==='3d' && _gfx3dState==='ready'; }

function _loadScriptOnce(src){
  return new Promise((resolve, reject)=>{
    const s=document.createElement('script');
    s.src=src+'?v='+GAME_VERSION; s.onload=resolve; s.onerror=()=>reject(new Error(src));
    document.head.appendChild(s);
  });
}

function syncGfxMode(){
  const c3=document.getElementById('game3d');
  if(cfg.gfx!=='3d'){ if(c3) c3.style.display='none'; return; }
  if(_gfx3dState==='ready'){ c3.style.display='block'; return; }
  if(_gfx3dState==='loading' || _gfx3dState==='failed') return;
  _gfx3dState='loading';
  // Manifest yoksa/bozuksa da 3D çalışsın (tüm slotlar klasik görsele düşer).
  _loadScriptOnce('assets3d/manifest.js').catch(()=>{})
    .then(()=>_loadScriptOnce('render3d-bundle.js'))
    .then(()=>{
      const ok = window.Render3D && Render3D.init({
        canvas:c3, manifest:window.ASSETS3D||{}, quality:cfg.gfxQuality||'auto',
        hooks:{paintItem:paintItem3D}, onFail:gfx3dFailed,
      });
      if(!ok) throw new Error('init');
      _gfx3dState='ready';
      syncGfxMode();
    })
    .catch(e=>gfx3dFailed(e && e.message));
}

// WebGL yoksa, paket yüklenemezse ya da GPU bağlamı kaybolursa: sessizce
// klasik moda dön, oyuncuya bir kez haber ver.
function gfx3dFailed(reason){
  console.warn('[gfx] 3D devre dışı:', reason);
  _gfx3dState='failed';
  cfg.gfx='classic'; saveCfg();
  const c3=document.getElementById('game3d'); if(c3) c3.style.display='none';
  if(typeof queueToast==='function') queueToast(t('gfx_unsupported_toast'));
  if(typeof syncGfxSettings==='function') syncGfxSettings();
}

function setGfxMode(on){
  cfg.gfx = on ? '3d' : 'classic'; saveCfg();
  if(on && _gfx3dState==='failed') _gfx3dState='off'; // kullanıcı yeniden denemek isterse
  syncGfxMode(); syncGfxSettings();
}
function cycleGfxQuality(){
  const i=GFX_QUALITIES.indexOf(cfg.gfxQuality||'auto');
  cfg.gfxQuality=GFX_QUALITIES[(i+1)%GFX_QUALITIES.length]; saveCfg();
  if(window.Render3D && _gfx3dState==='ready') Render3D.setQuality(cfg.gfxQuality);
  syncGfxSettings();
}
function syncGfxSettings(){
  const sw=document.getElementById('gfxSw'); if(sw) sw.classList.toggle('on', cfg.gfx==='3d');
  const qb=document.getElementById('gfxQBtn'); if(qb) qb.textContent=t('gfx_q_'+(cfg.gfxQuality||'auto'));
  const qr=document.getElementById('gfxQRow'); if(qr) qr.classList.toggle('disabled', cfg.gfx!=='3d');
}

// Render3D'ye her karede gönderilen salt-okunur anlık görüntü. Tek nesne
// yeniden kullanılır (her karede yeni nesne üretip GC baskısı yaratmasın).
const _frame3d = {};
function renderFrame3D(dt){
  const f=_frame3d;
  f.dt=dt; f.W=W; f.H=H; f.base=Math.min(W,H); f.CX=CX; f.CY=CY; f.RINGS=RINGS; f.PLAYER_R=PLAYER_R;
  f.state=state; f.inGame=!!GAME_STATES[state]; f.inMenu=!!MENU_STATES[state];
  f.player=player; f.items=items; f.particles=particles; f.shake=shake; f.flash=flash;
  f.bossIntensity=(GAME_STATES[state] && bossTelegraph) ? bossTelegraphIntensity(bossTelegraph.t) : 0;
  f.bossPh=(GAME_STATES[state] && bossTelegraph) ? bossTelegraphPhases(bossTelegraph.t) : null;
  f.notes=session ? session.stars : 0;
  f.theme=T; f.themeKey=cfg.theme; f.ringStyle=cfg.ringStyle; f.trail=cfg.trail; f.skin=cfg.skin;
  f.skinImg=penaImg(); f.playerColor=playerColor(); f.colorblind=cfg.colorblind; f.easeOut=easeOut;
  try{ Render3D.render(f); }
  catch(e){ gfx3dFailed(e && e.message); }
}

// Manifest'te görseli verilmeyen öğe tipleri için klasik 2D çizimi (render.js
// drawItem) bir canvas'a basar; Render3D bunu doku olarak kullanır. Canavar
// PNG'si henüz yüklenmediyse false döner ve birkaç kare sonra tekrar denenir.
function paintItem3D(type, cnv){
  const S=cnv.width, R=S/(2*2.6);
  const g=cnv.getContext('2d');
  g.clearRect(0,0,S,S);
  const prev=ctx; ctx=g;
  try{ drawItem(S/2, S/2, type, R/(PLAYER_R*0.95), 0, null); }
  finally{ ctx=prev; }
  if(isHazardType(type) || type==='hazardTwinDecoy') return imgReady(MONSTER_IMG[HAZARD_IMG_KEY[type]]);
  if(type==='star') return imgReady(ITEM_IMG.note);
  if(type==='coin') return imgReady(ITEM_IMG.coin);
  if(type==='diamond') return imgReady(ITEM_IMG.clef);
  return true;
}
