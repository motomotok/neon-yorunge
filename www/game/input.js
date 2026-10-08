// Tüm DOM olay bağlamaları (butonlar, dokunma/klavye girişi) ve erişilebilirlik
// sınıflarının uygulanması. Yeni bir buton eklerken listener'ı buraya ekle.
let pendingMode='classic';
document.querySelectorAll('.modeCard').forEach(el=>{
  el.addEventListener('click', ()=>{
    pendingMode=el.dataset.mode;
    document.querySelectorAll('.modeCard').forEach(x=>x.classList.toggle('sel', x===el));
    beep(500,0.06,'sine',0.1); refreshDailyStatus();
  });
});
document.getElementById('modeStartBtn').addEventListener('click', ()=>startGame(pendingMode));

document.querySelectorAll('#shopTabs .stab').forEach(el=>{
  el.addEventListener('click', ()=>{ shopTab=el.dataset.tab; renderShopTab(); });
});
document.querySelectorAll('#statsTabs .stab').forEach(el=>{
  el.addEventListener('click', ()=>{ statsTab=el.dataset.statTab; renderStatsTab(); beep(500,0.05,'sine',0.08); });
});
document.querySelectorAll('#upgradesTabs .stab').forEach(el=>{
  el.addEventListener('click', ()=>{ upgradesTab=el.dataset.uptab; renderUpgradesTab(); beep(500,0.05,'sine',0.08); });
});

document.querySelectorAll('[data-go]').forEach(b=>{
  b.addEventListener('click', e=>{ e.stopPropagation();
    const g=b.dataset.go;
    // Tutorial sırasında bir sonraki adımın beklediği hedeften başka bir
    // yere gidilmesini engeller (ör. Yetenekler'e dokunması beklenirken
    // Ana Menü'ye tıklanması) — script'in dışına çıkılamaz.
    if(tutorialActive && typeof tutorialExpectedNav==='function'){
      const expected=tutorialExpectedNav();
      if(expected && g!==expected){ if(typeof tutorialNudge==='function') tutorialNudge(); return; }
    }
    if(g==='mode') goMode();
    else if(g==='quickstart'){
      // Tutorial zaten sürüyorsa asla baştan başlatma (eskiden son adımda
      // BAŞLA'ya basılınca tutorial yeniden başlıyordu).
      if(tutorialActive) return;
      const go=()=>{ if(!stats.tutorialDone && typeof startTutorial==='function') startTutorial(); else startGame('classic','normal'); };
      go();
    }
    else if(g==='menu') goMenu();
    else if(g==='howto') goHowto();
    else if(g==='settings') goSettings();
    else if(g==='stats') goStats();
    else if(g==='shop') goShop();
    else if(g==='battlepass') goBattlepass();
    else if(g==='loginstreak') goLoginStreak();
    else if(g==='upgrades') goUpgrades();
    else if(g==='language') goLanguage();
  });
});
document.getElementById('retryBtn').addEventListener('click', e=>{ e.stopPropagation(); startGame(); });
document.getElementById('shareBtn').addEventListener('click', e=>{ e.stopPropagation(); shareScore(); });
document.getElementById('watchAdCoinsBtn').addEventListener('click', e=>{ e.stopPropagation(); watchAdForCoins(); });
document.getElementById('watchAdCoinsShopBtn').addEventListener('click', e=>{ e.stopPropagation(); watchAdForCoins(); });
document.getElementById('reviveWatchBtn').addEventListener('click', e=>{ e.stopPropagation(); acceptRevive(); });
document.getElementById('reviveSkipBtn').addEventListener('click', e=>{ e.stopPropagation(); declineRevive(); });
document.getElementById('resumeBtn').addEventListener('click', e=>{ e.stopPropagation(); resumeGame(); });
document.getElementById('zenFinishBtn').addEventListener('click', e=>{ e.stopPropagation(); gameOver('zen'); });
document.getElementById('pauseBtn').addEventListener('click', e=>{ e.stopPropagation(); pauseGame(); });
document.getElementById('tutorialSkipBtn').addEventListener('click', e=>{ e.stopPropagation(); if(typeof tutorialAskSkip==='function') tutorialAskSkip(); });
document.getElementById('soundSw').addEventListener('click', ()=>{ cfg.sound=!cfg.sound; saveCfg(); syncSettings(); if(cfg.sound) beep(700,0.08,'sine',0.12); });
document.getElementById('pauseSoundSw').addEventListener('click', ()=>{ cfg.sound=!cfg.sound; saveCfg(); syncSettings(); if(cfg.sound) beep(700,0.08,'sine',0.12); });
document.querySelector('#screen-pause .toggle').addEventListener('click', e=>{
  if(e.target.classList.contains('sw')) return;
  e.stopPropagation();
  document.getElementById('pauseSoundSw').click();
});
// Müzik sesi: sürüklerken anında duyulur, bırakınca kaydedilir. Müzik
// kapalıyken ses açılırsa müzik de açılır (oyuncunun niyeti belli).
document.querySelectorAll('.musicVol').forEach(el=>{
  el.addEventListener('input', ()=>{
    cfg.musicVol = el.value/100;
    if(!cfg.music && cfg.musicVol>0){ cfg.music = true; syncSettings(); }
    syncMusicVol(); if(typeof Music!=='undefined') Music.setVolume();
  });
  el.addEventListener('change', ()=>saveCfg());
  el.addEventListener('click', e=>e.stopPropagation());
});
document.getElementById('musicSw').addEventListener('click', ()=>{ cfg.music=!cfg.music; saveCfg(); syncSettings(); beep(600,0.06,'sine',0.1); });
document.getElementById('gfxSw').addEventListener('click', ()=>{ setGfxMode(cfg.gfx!=='3d'); beep(600,0.06,'sine',0.1); });
document.getElementById('gfxAutoRow').addEventListener('click', e=>{ e.preventDefault(); e.stopPropagation();
  setGfxQuality((cfg.gfxQuality||'auto')==='auto' ? (gfxLiveQuality()||'medium') : 'auto'); beep(600,0.06,'sine',0.1); });
document.querySelectorAll('#gfxQSeg .gfxQOpt').forEach(b=>b.addEventListener('click', e=>{ e.stopPropagation();
  setGfxQuality(b.dataset.q); beep(550,0.05,'sine',0.08); }));
document.getElementById('bigSw').addEventListener('click', ()=>{ cfg.bigButtons=!cfg.bigButtons; saveCfg(); applyAccessibility(); syncSettings(); beep(600,0.06,'sine',0.1); });
document.getElementById('handSw').addEventListener('click', ()=>{ cfg.leftHand=!cfg.leftHand; saveCfg(); applyAccessibility(); syncSettings(); beep(600,0.06,'sine',0.1); });
document.getElementById('cbSw').addEventListener('click', ()=>{ cfg.colorblind=!cfg.colorblind; saveCfg(); syncSettings(); beep(600,0.06,'sine',0.1); });
// Switch küçültüldüğü için dokunma alanı dar kalmasın diye tüm satır
// tıklanabilir — tıklama zaten switch'in üzerindeyse (çift tetiklemeyi
// önlemek için) dokunmuyoruz, switch'in kendi dinleyicisi yeterli.
document.querySelectorAll('.toggleGrid .toggle').forEach(row=>{
  row.addEventListener('click', e=>{
    if(e.target.classList.contains('sw')) return;
    const sw=row.querySelector('.sw'); if(sw) sw.click();
  });
});
document.getElementById('resetProgressBtn').addEventListener('click', ()=>{ attemptPrestige(); });
document.getElementById('settingsInfoBtn').addEventListener('click', e=>{ e.stopPropagation();
  document.getElementById('settingsInfoOverlay').style.display='flex'; beep(500,0.05,'sine',0.08);
});
document.getElementById('settingsInfoCloseBtn').addEventListener('click', e=>{ e.stopPropagation();
  document.getElementById('settingsInfoOverlay').style.display='none';
});
document.getElementById('settingsInfoOverlay').addEventListener('click', e=>{
  if(e.target.id==='settingsInfoOverlay') document.getElementById('settingsInfoOverlay').style.display='none';
});
document.getElementById('ciCloseBtn').addEventListener('click', e=>{ e.stopPropagation(); closeCoreInfo(); });
document.getElementById('coreInfoOverlay').addEventListener('click', e=>{
  if(e.target.id==='coreInfoOverlay') closeCoreInfo();
});
document.getElementById('pcYesBtn').addEventListener('click', e=>{ e.stopPropagation();
  const cb=pendingPurchase; hidePurchaseConfirm(); if(cb) cb();
});
document.getElementById('pcNoBtn').addEventListener('click', e=>{ e.stopPropagation(); hidePurchaseConfirm(true); beep(300,0.06,'sine',0.08); });
document.getElementById('purchaseConfirmOverlay').addEventListener('click', e=>{
  if(e.target.id==='purchaseConfirmOverlay') hidePurchaseConfirm(true);
});
document.getElementById('premiumBuyBtn').addEventListener('click', e=>{ e.stopPropagation();
  if(window.Premium && Premium.isNative()){ Premium.purchase(); }
  else { queueToast(t('toast_premium_native_only')); }
});
document.getElementById('seasonPassBuyBtn').addEventListener('click', e=>{ e.stopPropagation();
  if(window.SeasonPass && SeasonPass.isNative()){ SeasonPass.purchase(); }
  else { queueToast(t('seasonpass_native_only_toast')); }
});
document.getElementById('playGamesBtn').addEventListener('click', e=>{ e.stopPropagation();
  if(!window.PlayGames || !PlayGames.isNative()){ queueToast(t('toast_playgames_native_only')); return; }
  if(PlayGames.signedIn){ PlayGames.showLeaderboard(); return; }
  PlayGames.signIn().then(ok=>{ syncPlayGamesUI(); if(ok) queueToast(t('toast_playgames_connected')); else queueToast(t('toast_playgames_failed')); });
});
document.getElementById('linkGoogleBtn').addEventListener('click', e=>{ e.stopPropagation(); if(window.CloudSync) CloudSync.linkGoogle(); });
document.getElementById('linkAppleBtn').addEventListener('click', e=>{ e.stopPropagation(); if(window.CloudSync) CloudSync.linkApple(); });
document.getElementById('deleteAccountBtn').addEventListener('click', async e=>{
  e.stopPropagation();
  if(!window.CloudSync) return;
  if(!window.confirm(t('account_delete_confirm'))) return;
  const btn = e.currentTarget; btn.disabled = true;
  const ok = await CloudSync.deleteAccount();
  btn.disabled = false;
  queueToast(t(ok ? 'account_deleted_toast' : 'account_link_err_toast'));
});
document.getElementById('globalLeaderboardBtn').addEventListener('click', e=>{ e.stopPropagation();
  if(!window.PlayGames || !PlayGames.isNative()){ queueToast(t('toast_playgames_native_only')); return; }
  if(PlayGames.signedIn){ PlayGames.showLeaderboard(); return; }
  PlayGames.signIn().then(ok=>{ syncPlayGamesUI(); if(ok) PlayGames.showLeaderboard(); else queueToast(t('toast_playgames_failed')); });
});
// iOS/Android uygulamasında window.open(yerel sayfa) hiçbir şey açmaz
// (Capacitor yeni pencereyi sistem tarayıcısına yollar, o da capacitor://
// adresini açamaz) — native'de sayfanın yayındaki kopyası Safari'de açılır.
function openDocPage(page){
  const native = window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform();
  window.open(native ? 'https://paslagame.com.tr/'+page : page, '_blank');
}
document.getElementById('privacyBtn').addEventListener('click', e=>{ e.stopPropagation(); openDocPage('privacy.html'); });
document.getElementById('licensesBtn').addEventListener('click', e=>{ e.stopPropagation(); openDocPage('licenses.html'); });
document.getElementById('adConsentBtn').addEventListener('click', e=>{ e.stopPropagation(); Ads.showPrivacyOptions(); });
document.getElementById('legalBtn').addEventListener('click', e=>{ e.stopPropagation(); showLegalPopup(); });
document.getElementById('infoPopupCloseBtn').addEventListener('click', e=>{ e.stopPropagation(); hideLegalPopup(); });
document.getElementById('infoPopupOverlay').addEventListener('click', e=>{
  if(e.target.id==='infoPopupOverlay') hideLegalPopup();
});

function applyAccessibility(){
  document.body.classList.toggle('big-ui', cfg.bigButtons);
  document.body.classList.toggle('left-hand', cfg.leftHand);
}

window.addEventListener('pointerdown', e=>{
  if(e.target.closest('button, .theme, .sw, .modeCard, .diffChip, .skinDot, .shopCard, .stab')) return;
  if(state==='play'){ e.preventDefault(); tap(e.clientX); }
}, {passive:false});
window.addEventListener('keydown', e=>{
  if(e.repeat){ if(e.code==='Space') e.preventDefault(); return; }   // basılı tutmak art arda halka değiştirmesin
  if(e.code==='ArrowRight' || e.code==='KeyD'){
    if(state==='play') tap(W);
  } else if(e.code==='ArrowLeft' || e.code==='KeyA'){
    if(state==='play') tap(0);
  } else if(e.code==='Space'){
    e.preventDefault();
    // Ok tuşları tap() üzerinden geçtiği için tutorial'ın kendi koruması
    // (tutorialTapAllowed) zaten devrede; ama SPACE/P/Escape doğrudan
    // startGame()/goMode()/pauseGame() çağırıyor — bunlar tutorial'ın
    // dispatcher korumasından geçmiyor, script dışına çıkılabilir
    // (ör. oyun-sonu adımında SPACE'e basılırsa gerçek bir oyun başlardı).
    if(tutorialActive) return;
    if(state==='menu') goMode();
    else if(state==='over') startGame();
    else if(state==='pause') resumeGame();
  } else if(e.code==='KeyP' || e.code==='Escape'){
    if(tutorialActive) return;
    if(state==='play') pauseGame(); else if(state==='pause') resumeGame();
  }
});
window.addEventListener('resize', ()=>{ resize(); initStars(); });

if('serviceWorker' in navigator && location.protocol==='https:'){
  window.addEventListener('load', ()=>{ navigator.serviceWorker.register('sw.js').catch(()=>{}); });
  // Not: yeni service worker devreye girince sayfa artık otomatik YENİLENMEZ.
  // Eskiden yenileniyordu ve açılış animasyonu (bazen oyun başladıktan sonra)
  // ikinci kez oynuyordu. SW zaten "önce ağ" çalıştığı için dosyalar her
  // açılışta günceldir; yeni sürüm en geç bir sonraki açılışta tam devrededir.
}
async function clearAppCache(){
  try{
    if('serviceWorker' in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r=>r.unregister()));
    }
    if(window.caches){
      const keys=await caches.keys();
      await Promise.all(keys.map(k=>caches.delete(k)));
    }
    queueToast(icon('check')+' '+t('cache_cleared_toast'));
    setTimeout(()=>location.reload(true), 400);
  }catch(e){
    queueToast(t('cache_clear_failed_toast'));
  }
}
document.getElementById('clearCacheBtn').addEventListener('click', e=>{ e.stopPropagation(); clearAppCache(); });
// iOS (App Store 3.1.1) kalıcı satın alımlar için zorunlu: reklamsız paket ve
// penalar cihaz değişince/yeniden yüklemede geri gelir.
document.getElementById('restorePurchasesBtn').addEventListener('click', e=>{
  e.stopPropagation();
  if(window.Premium && Premium.isNative()){ Premium.restore(); queueToast(t('restore_started_toast')); }
  else queueToast(t('restore_web_toast'));
});
