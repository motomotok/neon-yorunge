// Beat Orbit — oyuncu özeti, hata kaydı ve hediye kutusu (KAYNAK dosya,
// cloud-account.js içinden paketlenir → www/firebase-bundle.js).
// Oyun tarafı: www/game/telemetry.js. Admin paneli: admin/index.html.
//
// players/{uid}  — oyuncunun anonim özeti (skor, oyun sayısı, dakika, rank,
//                  bugünkü oyun/dakika, son görülme). Her oyuncu için yazılır
//                  (oyun hizmeti; Pasla'daki gibi). 12 ay açmayan silinir.
// errors/{id}    — oyun kodundaki yakalanmamış hatalar (Crashlytics'e ek
//                  olarak; panelde ve Claude'un okuyabileceği yerde dursun).
// gifts/{uid}/items/{id} — admin panelinden gönderilen hediyeler (elmas,
//                  nota, reklamsız). Oyuncu açılışta alır, "alındı" işaretler.
// Okuma yetkisi yalnız admin hesabında (firestore.rules isAdmin()).
import { getApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc, deleteDoc, addDoc, updateDoc, getDocs,
  collection, query, where, serverTimestamp,
} from 'firebase/firestore';
import { Capacitor } from '@capacitor/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import { auth, ensureUser } from './leaderboard.js';

const db = () => getFirestore(getApp());
const plat = () => (Capacitor.getPlatform ? Capacitor.getPlatform() : 'web');
const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);

// create=false: hesap yoksa yenisini AÇMAZ (izin vermemiş oyuncu için).
async function user(create) {
  const a = auth();
  await a.authStateReady();
  if (a.currentUser) return a.currentUser;
  return create ? ensureUser() : null;
}

const str = (v, n) => String(v == null ? '' : v).slice(0, n);
const int = (v, max) => Math.max(0, Math.min(max, Math.floor(+v || 0)));

async function beat(s) {
  const u = await user(true);
  await setDoc(doc(db(), 'players', u.uid), {
    name: str(s.name, 16), ver: str(s.ver, 12), lang: str(s.lang, 5), plat: str(plat(), 8),
    games: int(s.games, 1e7), best: int(s.best, 2e6), mins: int(s.mins, 1e7),
    mmr: int(s.mmr, 4000), tier: str(s.tier, 16), duels: int(s.duels, 1e6),
    gems: int(s.gems, 1e7), notes: int(s.notes, 1e9), lvl: int(s.lvl, 1e4),
    linked: !!s.linked, noads: !!s.noads, pass: !!s.pass, on: s.on !== false,
    since: int(s.since, 1e13), day: str(s.day, 10), dayGames: int(s.dayGames, 1e5), dayMins: int(s.dayMins, 1440),
    ft: int(s.ft, 200), runs: int(s.runs, 1e7), days: int(s.days, 1e5),
    fps: int(s.fps, 240), mfps: int(s.mfps, 240), dev: str(s.dev, 32), gpu: str(s.gpu, 48), q: str(s.q, 8),
    ram: int(s.ram, 64), boot: int(s.boot, 3000),
    lastSeen: serverTimestamp(),
  }, { merge: true });
  return u.uid;
}

// İzin geri alındı / hesap silindi: özet belgesi kalkar.
async function forget() {
  const u = await user(false);
  if (u) await deleteDoc(doc(db(), 'players', u.uid));
}

// Hata kaydı: oturum başına en fazla 10, aynı hata bir kez.
const MAX_ERR = 10;
const seen = new Set();
let errSent = 0;
async function sendError(e) {
  const msg = str(e && e.message, 300) || 'Error';
  const key = msg + '|' + str(e && e.stack, 2000).split('\n')[1];
  if (seen.has(key) || errSent >= MAX_ERR) return;
  seen.add(key); errSent++;
  const u = await user(true);
  await addDoc(collection(db(), 'errors'), {
    msg, stack: str(e && e.stack, 3000), ver: str(window.__boVer, 12), plat: str(plat(), 8),
    uid: u.uid, scr: str(e && e.screen, 20), ua: str(navigator.userAgent, 200), ts: serverTimestamp(),
  });
}
// crash-bundle.js (önce yüklenir) hataları window.__boErr kuyruğuna atar.
function flushErrors() {
  const q = window.__boErr || [];
  while (q.length) sendError(q.shift()).catch(() => {});
}

async function gifts() {
  const u = await user(false);
  if (!u) return [];
  const s = await getDocs(query(collection(db(), 'gifts', u.uid, 'items'), where('claimed', '==', false)));
  return s.docs.map((d) => Object.assign({ id: d.id }, d.data()));
}
async function claimGift(id) {
  const u = await user(false);
  await updateDoc(doc(db(), 'gifts', u.uid, 'items', id), { claimed: true, claimedAt: serverTimestamp() });
}
async function uid() { const u = await user(false); return u ? u.uid : null; }

// Firebase Analytics (yalnız telefonda): Google Ads'in reklamı kurulumdan sonraki
// davranışa göre (eğitimi bitirdi, 5. oyun, düello) optimize edebilmesi için.
// AndroidManifest'te varsayılan KAPALI; oyuncu KVKK'da istatistik iznini verince açılır.
async function analyticsEnabled(on) {
  if (!Capacitor.isNativePlatform()) return;
  await FirebaseAnalytics.setEnabled({ enabled: !!on });
}
async function logEvent(name, params) {
  if (!Capacitor.isNativePlatform()) return;
  await FirebaseAnalytics.logEvent({ name, params: params || {} });
}

window.Telemetry = {
  beat: (s) => withTimeout(beat(s), 9000),
  forget: () => withTimeout(forget(), 9000),
  gifts: () => withTimeout(gifts(), 9000),
  claimGift: (id) => withTimeout(claimGift(id), 9000),
  uid: () => withTimeout(uid(), 5000).catch(() => null),
  analyticsEnabled: (on) => analyticsEnabled(on).catch(() => {}),
  logEvent: (name, params) => logEvent(name, params).catch(() => {}),
  flushErrors,
};
flushErrors();
