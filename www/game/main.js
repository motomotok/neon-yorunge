// Bootstrap: tüm modüller yüklendikten sonra tek seferlik başlatma çağrıları.
// Bu dosya her zaman script sırasının EN SONUNDA yer almalı.
hydrateIcons();
document.getElementById('versionTag').textContent = 'v'+GAME_VERSION;
if(window.CrashReport) CrashReport.setVersion(GAME_VERSION);
// İlk kurulumda (hiç kayıtlı ayar yoksa) cihaz dilini desteklenen 15 dilden
// biriyle eşleştirmeyi dene — eşleşme yoksa (veya zaten bir kayıt varsa)
// varsayılan 'tr' korunur, mevcut kullanıcıların dili sessizce değişmez.
if(!localStorage.getItem('beatOrbitCfg')){
  const devLang = (navigator.language||'').slice(0,2).toLowerCase();
  if(LANGUAGES.some(l=>l.code===devLang)){ cfg.lang=devLang; saveCfg(); }
}
const achTotalEl=document.getElementById('achTotal'); if(achTotalEl) achTotalEl.textContent=ACHIEVEMENTS.length;
renderLangGrid();
applyLanguage();
resize(); initStars(); applyTheme(cfg.theme); applyAccessibility(); ensureTodayQuest(); ensureDailyEvent();
handleDailyReturn();
resetGame(); renderThemeGrid(); goMenu();
// cfg.gfx==='3d' ise 3D paketi burada tembel yüklenir (bkz. gfx.js). Açılış
// logosunun animasyonu ana iş parçacığında oynuyor; 3D kurulumu/derlemesi onu
// dondurmasın diye animasyon bitince (~1.9 sn) başlar — logo o sırada durur.
// Reklam SDK'sı da (kendi betiklerini aynı iş parçacığında çalıştırır) logodan sonra.
const _splashUp = !!document.getElementById('splash');
setTimeout(syncGfxMode, _splashUp ? 1900 : 0);
setTimeout(()=>Ads.init(), _splashUp ? 3200 : 0);
// Bildirimler: eski planı iptal edip yeniden kur (oyuncu şu an burada);
// izin hiç sorulmadıysa DJ Vinil menüde bir kez sorar.
// Önce güncelleme kontrolü: yeni sürüm varsa DJ Vinil onu söyler ve aynı
// açılışta ikinci bir soru (bildirim izni) sorulmaz.
setTimeout(async ()=>{
  const askedUpdate = await updateMaybePrompt();
  notifyReschedule();
  if(!askedUpdate && state==='menu') notifyMaybeAsk('launch');
}, _splashUp ? 4800 : 1500);
syncAdButtons();
// Satın alma butonları mağaza fiyatı gelene kadar gizli başlar (bkz. syncPremiumUI).
syncPremiumUI(); syncSeasonPassUI(); syncGemTab();
setInterval(()=>{ if(state!=='play') syncAdButtons(); }, 1000); // "Reklam İzle" butonlarındaki bekleme geri sayımını canlı tutar
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
  if(window.GemShop){
    GemShop.register(
      (productId, amount)=>{
        stats.gems=(stats.gems||0)+amount; stats.lifetimeGems=(stats.lifetimeGems||0)+amount;
        saveStats(); refreshWallet();
        queueToast(t('gems_purchased_toast',{n:amount}));
        syncShopIfOpen();
      },
      (productId, price)=>{ setGemLivePrice(productId, price); }
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
if(window.CloudSync) CloudSync.init();
requestAnimationFrame(loop);
