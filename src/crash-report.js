// Oyun kodundaki (WebView içindeki) yakalanmamış JS hatalarını Firebase
// Crashlytics'e "non-fatal" olarak gönderir. Native çökmeleri Crashlytics
// zaten kendisi yakalıyor; bu dosya uygulama açık kalıp oyunun donduğu /
// bir butonun çalışmadığı durumları görünür kılmak için.
// esbuild ile www/crash-bundle.js olarak paketlenir (npm run build:crash)
// ve index.html'de diğer tüm script'lerden ÖNCE yüklenir.
import { Capacitor } from '@capacitor/core';
import { FirebaseCrashlytics } from '@capacitor-firebase/crashlytics';

const MAX_REPORTS_PER_SESSION = 20;
const seen = new Set();
let sent = 0;

// V8 ("at fn (url:12:5)") ve WebKit ("fn@url:12:5") yığın satırlarını
// Crashlytics'in beklediği çerçevelere çevirir.
function parseStack(stack) {
  const frames = [];
  for (const line of String(stack || '').split('\n')) {
    const m = line.match(/at (?:(.+?) \()?(.+?):(\d+):\d+\)?$/) || line.match(/^(.*?)@(.+?):(\d+):\d+$/);
    if (m) frames.push({ functionName: (m[1] || '<anonymous>').trim(), fileName: m[2].replace(/^.*\/\/[^/]+/, ''), lineNumber: +m[3] });
    if (frames.length >= 30) break;
  }
  return frames;
}

function report(message, error) {
  if (sent >= MAX_REPORTS_PER_SESSION) return;
  const key = message + '|' + ((error && error.stack) || '').split('\n')[1];
  if (seen.has(key)) return;
  seen.add(key); sent++;
  const stacktrace = parseStack(error && error.stack);
  FirebaseCrashlytics.recordException(stacktrace.length ? { message, stacktrace } : { message }).catch(() => {});
}

if (Capacitor.isNativePlatform()) {
  window.addEventListener('error', (e) => {
    report(String(e.message || 'Script error'), e.error);
  });
  window.addEventListener('unhandledrejection', (e) => {
    const r = e.reason;
    report('Unhandled promise rejection: ' + String((r && r.message) || r), r instanceof Error ? r : null);
  });
}

window.CrashReport = {
  // Oyun sürümünü raporlara ekler (main.js açılışta çağırır).
  setVersion(v) {
    if (Capacitor.isNativePlatform()) FirebaseCrashlytics.setCustomKey({ key: 'game_version', value: String(v), type: 'string' }).catch(() => {});
  },
  setKey(key, value) {
    if (!Capacitor.isNativePlatform()) return;
    const type = typeof value === 'number' ? (Number.isInteger(value) ? 'long' : 'double') : 'string';
    FirebaseCrashlytics.setCustomKey({ key: String(key), value: type === 'string' ? String(value) : value, type }).catch(() => {});
  },
  log(msg) {
    if (Capacitor.isNativePlatform()) FirebaseCrashlytics.log({ message: String(msg) }).catch(() => {});
  },
};
