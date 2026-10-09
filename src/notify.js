// Yerel bildirim köprüsü (Capacitor Local Notifications). Hangi bildirimin
// ne zaman gideceğine oyun tarafı karar verir (www/game/notify.js); bu dosya
// yalnızca izin + zamanlama + iptal işlerini native eklentiye taşır.
// esbuild ile www/notify-bundle.js olarak paketlenir (npm run build:notify).
// Web'de hepsi sessizce hiçbir şey yapmaz.
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const isNative = () => Capacitor.isNativePlatform();
const CHANNEL = 'beat_orbit_reminders';
let channelReady = null;

function ensureChannel() {
  if (Capacitor.getPlatform() !== 'android') return Promise.resolve();
  if (!channelReady) {
    channelReady = LocalNotifications.createChannel({
      id: CHANNEL, name: 'Beat Orbit', description: 'Daily reward and streak reminders',
      importance: 3, visibility: 1,
    }).catch(() => {});
  }
  return channelReady;
}

// 'granted' | 'denied' | 'prompt' | 'prompt-with-rationale' | 'unsupported'
async function permission() {
  if (!isNative()) return 'unsupported';
  try { return (await LocalNotifications.checkPermissions()).display; } catch (e) { return 'unsupported'; }
}

async function request() {
  if (!isNative()) return 'unsupported';
  try { return (await LocalNotifications.requestPermissions()).display; } catch (e) { return 'denied'; }
}

// items: [{id, title, body, at: Date}] — önce bizim bekleyen tüm bildirimler
// iptal edilir, sonra liste baştan kurulur (her uygulama kapanışında).
async function replaceAll(items) {
  if (!isNative()) return;
  try {
    const pending = await LocalNotifications.getPending();
    if (pending.notifications.length) {
      await LocalNotifications.cancel({ notifications: pending.notifications.map((n) => ({ id: n.id })) });
    }
    if (!items.length) return;
    await ensureChannel();
    await LocalNotifications.schedule({
      notifications: items.map((n) => ({
        id: n.id, title: n.title, body: n.body,
        schedule: { at: n.at, allowWhileIdle: true },
        channelId: CHANNEL, smallIcon: 'ic_stat_notify', iconColor: '#FFCF7A',
      })),
    });
  } catch (e) {
    if (window.CrashReport) window.CrashReport.log('notify schedule failed: ' + (e && e.message));
  }
}

window.NativeNotify = { isNative, permission, request, replaceAll };
