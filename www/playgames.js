// Google Play Games Services köprüsü. @openforge/capacitor-game-connect
// modern @CapacitorPlugin API kullandığı için native ortamda plugin proxy'si
// Capacitor'ün kendi native köprüsü tarafından window.Capacitor.Plugins altına
// otomatik enjekte edilir — ads.js/premium.js'ten farklı olarak esbuild bundle
// gerekmez (import edilen tek şey string/sayı parametreli düz metotlar,
// özel enum/sınıf yok).
(function () {
  // Play Console → Play Games Services → Leaderboards'tan alınacak gerçek ID
  // buraya girilmeli (bkz. MOBILE_APP.md). Girilmeden submitScore/showLeaderboard
  // sessizce başarısız olur, oyunu bozmaz. Bu plugin aynı API'yi Android'de
  // Google Play Games'e, iOS'ta Apple Game Center'a yönlendiriyor — ama
  // her mağazanın kendi (App Store Connect / Play Console'da AYRI AYRI
  // oluşturulan) leaderboard ID'si olduğu için iki sabit gerekiyor.
  const LEADERBOARD_ID_ANDROID = 'YOUR_LEADERBOARD_ID';
  const LEADERBOARD_ID_IOS = 'en_iyi_skor';
  function leaderboardId() {
    const p = window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform();
    return p === 'ios' ? LEADERBOARD_ID_IOS : LEADERBOARD_ID_ANDROID;
  }

  let signedIn = false;

  function plugin() {
    return (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform() && window.Capacitor.Plugins)
      ? window.Capacitor.Plugins.CapacitorGameConnect
      : null;
  }
  // Android'de Play Games projesi henüz kurulmadıysa (strings.xml'deki
  // game_services_project_id ve LEADERBOARD_ID_ANDROID hâlâ yer tutucu) hiç
  // dokunma: yanlış APP_ID ile Games SDK'ya giriş isteği göndermek hata
  // verir/çökebilir. Kurulunca LEADERBOARD_ID_ANDROID'i doldurmak yeterli.
  function configured() {
    const p = window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform();
    return p !== 'android' || LEADERBOARD_ID_ANDROID !== 'YOUR_LEADERBOARD_ID';
  }
  function isNative() { return !!plugin() && configured(); }

  // Aynı plugin Android'de Google Play Games'e, iOS'ta Apple Game Center'a
  // bağlanıyor — ayarlardaki "Bağlan" girişinin hangi markayı göstereceğini
  // (kullanıcı özellikle Apple hesabına bağlanma deneyiminin doğru görünmesini
  // istedi) buradan belirliyoruz.
  function serviceName() {
    const p = window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform();
    return p === 'ios' ? 'Game Center' : 'Play Games';
  }

  function signIn() {
    const p = isNative() ? plugin() : null;
    if (!p) return Promise.resolve(false);
    return p.signIn()
      .then(() => { signedIn = true; return true; })
      .catch(() => { signedIn = false; return false; });
  }

  // Game Center / Play Games skorları alt yapıda HER ZAMAN tam sayı (64-bit
  // integer) olarak saklanır — App Store Connect'te "Decimal (Fixed Point),
  // 2 basamak" seçilince Apple gönderilen tam sayıyı otomatik 100'e bölüp
  // gösteriyor (ör. 123456 gönderirsen ekranda 1234.56 görünür). Oyunun
  // kendi skoru xxxx.yy (2 ondalık) olduğu için buraya ×100 ölçeklenmiş hali
  // gönderiliyor — Play Console'daki leaderboard de aynı "2 ondalık basamak"
  // formatıyla kurulmalı ki iki platform da tutarlı görünsün.
  function submitScore(score) {
    const p = plugin(), id = leaderboardId();
    if (!p || !signedIn || id === 'YOUR_LEADERBOARD_ID' || id === 'YOUR_IOS_LEADERBOARD_ID') return;
    p.submitScore({ leaderboardID: id, totalScoreAmount: Math.round(score * 100) }).catch(() => {});
  }

  function showLeaderboard() {
    const p = plugin(), id = leaderboardId();
    if (!p || id === 'YOUR_LEADERBOARD_ID' || id === 'YOUR_IOS_LEADERBOARD_ID') {
      if (window.queueToast) queueToast('🏆 Skor tablosu henüz ayarlanmadı.');
      return;
    }
    p.showLeaderboard({ leaderboardID: id }).catch(() => {});
  }

  window.PlayGames = {
    isNative,
    signIn,
    submitScore,
    showLeaderboard,
    serviceName,
    get signedIn() { return signedIn; },
  };
})();
