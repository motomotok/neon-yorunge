// Bootstrap: tüm modüller yüklendikten sonra tek seferlik başlatma çağrıları.
// Bu dosya her zaman script sırasının EN SONUNDA yer almalı.
hydrateIcons();
document.getElementById('versionTag').textContent = 'v'+GAME_VERSION;
// İlk kurulumda (hiç kayıtlı ayar yoksa) cihaz dilini desteklenen 15 dilden
// biriyle eşleştirmeyi dene — eşleşme yoksa (veya zaten bir kayıt varsa)
// varsayılan 'tr' korunur, mevcut kullanıcıların dili sessizce değişmez.
if(!localStorage.getItem('neonYorungeCfg')){
  const devLang = (navigator.language||'').slice(0,2).toLowerCase();
  if(LANGUAGES.some(l=>l.code===devLang)){ cfg.lang=devLang; saveCfg(); }
}
const achTotalEl=document.getElementById('achTotal'); if(achTotalEl) achTotalEl.textContent=ACHIEVEMENTS.length;
renderLangGrid();
applyLanguage();
resize(); initStars(); applyTheme(cfg.theme); applyAccessibility(); ensureTodayQuest(); handleDailyReturn(); resetGame(); renderThemeGrid(); goMenu();
Ads.init();
syncAdButtons();
setInterval(syncAdButtons, 1000); // "Reklam İzle" butonlarındaki bekleme geri sayımını canlı tutar
if(window.PlayGames && PlayGames.isNative()){
  PlayGames.signIn().then(()=>{ syncPlayGamesUI(); });
}
// iOS'ta cordova-plugin-purchase'ın window.CdvPurchase'ı enjekte etmesi
// Android'e göre daha GEÇ olabiliyor — bu script çalıştığı anda henüz hazır
// değilse register()/initialize() sessizce no-op olup bir daha hiç
// tekrarlanmıyordu; buton görünüşte "var ama hiçbir şey yapmıyor" hâline
// geliyordu (CdvPurchase tıklama anına kadar belirmiş oluyor ama ürün hiç
// kayıt edilmemiş oluyordu). Bu yüzden kurulumu bir fonksiyona alıp hem
// hemen hem de Cordova'nın standart "deviceready" olayında tekrar deniyoruz.
let _iapInitDone = false;
function initIAP(){
  if(_iapInitDone || !(window.CdvPurchase && window.CdvPurchase.store)) return;
  _iapInitDone = true;
  if(window.Premium){
    Premium.register(
      ()=>{ if(!stats.premiumNoAds){ stats.premiumNoAds=true; saveStats(); queueToast(t('toast_premium_active')); } syncPremiumUI(); },
      (price)=>{ syncPremiumUI(price); }
    );
  }
  if(window.SeasonPass){
    SeasonPass.register(
      ()=>{ ensureSeason(); stats.seasonPremium=true; saveStats(); queueToast(t('toast_seasonpass_active')); syncSeasonPassUI(); },
      (price)=>{ syncSeasonPassUI(price); }
    );
  }
  // Hangi mağazada çalıştığımızı Capacitor'e sor — premium.js/season-pass.js'teki
  // storePlatform() ile aynı ayrım (bkz. oradaki not).
  const nativePlatform = window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform();
  const storePlatform = nativePlatform==='ios' ? window.CdvPurchase.Platform.APPLE_APPSTORE : window.CdvPurchase.Platform.GOOGLE_PLAY;
  window.CdvPurchase.store.initialize([storePlatform]).catch(()=>{});
}
initIAP();
document.addEventListener('deviceready', initIAP);
requestAnimationFrame(loop);
