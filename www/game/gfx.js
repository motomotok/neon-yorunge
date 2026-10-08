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
      // Tüm shader'lar şimdi (açılış logosu dururken) derlensin; oyunda ilk
      // notada/ilk tehlikede takılma olmasın. En fazla 4 sn beklenir.
      const styleKey=(cfg.theme||'')+'|'+(cfg.colorblind?1:0);
      return Promise.race([Render3D.warm ? Render3D.warm(styleKey) : null, new Promise(r=>setTimeout(r,4000))]);
    })
    .then(()=>{
      if(_gfx3dState!=='loading') return; // bu arada başarısız olduysa
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
  resize(); // 2D'ye düşünce canvas tekrar tam çözünürlükte çizilsin
  // Bağlam kaybı (Android'de arka plana geçince sık) geçicidir: bu oturumda 2D'ye
  // düşülür ama tercih kaydedilmez, bir sonraki açılışta 3D yeniden denenir.
  // Kalıcı hatalarda (WebGL yok, paket yüklenemedi) klasik moda geçilip kaydedilir.
  if(reason==='context-lost'){
    const c3=document.getElementById('game3d'); if(c3) c3.style.display='none';
    return;
  }
  cfg.gfx='classic'; saveCfg();
  const c3=document.getElementById('game3d'); if(c3) c3.style.display='none';
  if(typeof queueToast==='function') queueToast(t('gfx_unsupported_toast'));
  if(typeof syncGfxSettings==='function') syncGfxSettings();
}

function setGfxMode(on){
  cfg.gfx = on ? '3d' : 'classic'; saveCfg();
  if(on && _gfx3dState==='failed') _gfx3dState='off'; // kullanıcı yeniden denemek isterse
  resize(); syncGfxMode(); syncGfxSettings();
}
// Kalite: 'auto' (cihaza/FPS'e göre) ya da sabit 'low'|'medium'|'high'.
function setGfxQuality(q){
  cfg.gfxQuality=q; saveCfg();
  if(window.Render3D && _gfx3dState==='ready') Render3D.setQuality(q);
  syncGfxSettings();
}
// Otomatik modda o an fiilen kullanılan seviye (3D hazır değilse null).
function gfxLiveQuality(){
  return (window.Render3D && _gfx3dState==='ready' && Render3D.info) ? Render3D.info().quality : null;
}
function syncGfxSettings(){
  const sw=document.getElementById('gfxSw'); if(sw) sw.classList.toggle('on', cfg.gfx==='3d');
  const auto=(cfg.gfxQuality||'auto')==='auto';
  const live=gfxLiveQuality();
  const cur = auto ? live : cfg.gfxQuality;
  const as=document.getElementById('gfxAutoSw'); if(as) as.classList.toggle('on', auto);
  document.querySelectorAll('#gfxQSeg .gfxQOpt').forEach(b=>{
    b.classList.toggle('sel', b.dataset.q===cur);
    b.classList.toggle('autoPick', auto && b.dataset.q===cur);
    b.dataset.auto = t('gfx_q_auto_tag');
  });
  const hint=document.getElementById('gfxQHint');
  if(hint) hint.textContent = cfg.gfx!=='3d' ? t('gfx_q_hint_off') : auto ? t('gfx_q_hint_auto') : t('gfx_q_hint_manual');
  const qr=document.getElementById('gfxQRow'); if(qr) qr.classList.toggle('disabled', cfg.gfx!=='3d');
}

// Render3D'ye her karede gönderilen salt-okunur anlık görüntü. Tek nesne
// yeniden kullanılır (her karede yeni nesne üretip GC baskısı yaratmasın).
const _frame3d = {};
let _perfReportTick = 0;
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
  if(state==='menu' && (++_menuAnchorTick % 12)===1) syncMenuAnchors();
  // ~10 sn'de bir: hangi GPU'da hangi seviye/FPS ile oynandığı çökme
  // raporlarına eklensin (zorlanan cihazları gerçek veriden görmek için).
  if(window.CrashReport && (++_perfReportTick % 600)===1){
    const i=Render3D.info();
    CrashReport.setKey('gpu', i.gpu||'?'); CrashReport.setKey('gfx_quality', i.quality+(i.preference==='auto'?' (auto)':''));
    CrashReport.setKey('fps', i.fps); CrashReport.setKey('render_dpr', i.dpr);
  }
  // Ayarlar açıkken otomatik kalite değişirse işaretli seviye güncellensin.
  if(state==='settings' && (++_menuAnchorTick % 30)===0) syncGfxSettings();
}

// Ana menüde "Reklamsız Premium" şeridi pikap kolu (iğne) ile plağın üst
// kenarının tam ortasına oturur; ikisini de kapatmaz. Konum 3D sahneden
// okunur, böylece her telefon ekran oranında doğru yerde durur. 3D yoksa
// (klasik çizim) şerit varsayılan yerinde kalır.
let _menuAnchorTick=0;
function syncMenuAnchors(){
  const row=document.querySelector('#screen-menu .menuTopRow'); if(!row) return;
  const chip=document.getElementById('premiumCard'); const cr=chip ? chip.getBoundingClientRect() : row.getBoundingClientRect();
  const a = gfx3dActive() && Render3D.menuAnchors ? Render3D.menuAnchors(cr.left-6, cr.right+6) : null;
  const cur = parseFloat(row.dataset.dy||'0'), curX = parseFloat(row.dataset.dx||'0');
  let dy = 0, dx = 0;
  if(a && isFinite(a.recordTop)){
    const rect=row.getBoundingClientRect(), h=rect.height, natTop=rect.top-cur;
    if(!isFinite(a.armBottom)) a.armBottom = natTop;      // kol şeridin hizasında değilse
    const corner=document.querySelector('#screen-menu .menuCorner');
    const minTop = corner ? corner.getBoundingClientRect().bottom+6 : natTop;
    const want = (a.armBottom + a.recordTop)/2 - h/2;
    dy = Math.round(Math.max(minTop, want) - natTop);
    // Kolun sağdaki ayağına değiyorsa şerit biraz sola kayar.
    if(isFinite(a.baseLeft)){ const natRight = cr.right - curX; dx = Math.round(Math.max(8 - (cr.left - curX), Math.min(0, a.baseLeft - 8 - natRight))); }
  }
  if(Math.abs(dy-cur) >= 1 || Math.abs(dx-curX) >= 1){
    row.dataset.dy=dy; row.dataset.dx=dx;
    row.style.transform = (dy||dx) ? `translate(${dx}px,${dy}px)` : '';
  }
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
  if(ITEM_IMG[type]) return imgReady(ITEM_IMG[type]);   // can ve takviyeler
  return true;
}
