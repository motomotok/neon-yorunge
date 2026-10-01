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
  const LEADERBOARD_ID_IOS = 'YOUR_IOS_LEADERBOARD_ID';
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
  function isNative() { return !!plugin(); }

  // Aynı plugin Android'de Google Play Games'e, iOS'ta Apple Game Center'a
  // bağlanıyor — ayarlardaki "Bağlan" girişinin hangi markayı göstereceğini
  // (kullanıcı özellikle Apple hesabına bağlanma deneyiminin doğru görünmesini
  // istedi) buradan belirliyoruz.
  function serviceName() {
    const p = window.Capacitor && window.Capacitor.getPlatform && window.Capacitor.getPlatform();
    return p === 'ios' ? 'Game Center' : 'Play Games';
  }

  function signIn() {
    const p = plugin();
    if (!p) return Promise.resolve(false);
    return p.signIn()
      .then(() => { signedIn = true; return true; })
      .catch(() => { signedIn = false; return false; });
  }

  function submitScore(score) {
    const p = plugin(), id = leaderboardId();
    if (!p || !signedIn || id === 'YOUR_LEADERBOARD_ID' || id === 'YOUR_IOS_LEADERBOARD_ID') return;
    p.submitScore({ leaderboardID: id, totalScoreAmount: Math.round(score) }).catch(() => {});
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
