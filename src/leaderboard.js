// Günün Seti skor tablosu — Firestore köprüsü (cloud-account.js içinden
// paketlenir → www/firebase-bundle.js). Oyun tarafı: game/dailyset.js.
//
// Oyuncu Firebase JS SDK'nın kendi ANONİM oturumuyla girer (native eklenti
// oturumu JS SDK'ya aktarılmadığı için onu kullanmıyoruz, bkz. cloud-sync.js
// notu). Herkes yalnız kendi skor belgesini yazabilir; toplam yalnız artabilir
// (bkz. firestore.rules). Ad, oyunun ürettiği takma addır (serbest metin yok).
// Oturum yalnız oyuncu Günün Seti'nde bir oyun bitirince açılır.
import { getApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc, getDocs, collection, query, orderBy, limit, where,
  getCountFromServer, serverTimestamp,
} from 'firebase/firestore';
import { getAuth, initializeAuth, indexedDBLocalPersistence, signInAnonymously } from 'firebase/auth';
import { Capacitor } from '@capacitor/core';

let _auth = null;
// Native WebView'de getAuth() yönlendirme/pop-up çözücüsü için gizli bir iframe
// açmaya çalışıp (iOS capacitor://) takılabiliyor; orada yalnız kalıcılıkla kurulur.
function auth() {
  if (_auth) return _auth;
  const app = getApp();
  if (Capacitor.isNativePlatform()) {
    try { _auth = initializeAuth(app, { persistence: indexedDBLocalPersistence }); }
    catch (e) { _auth = getAuth(app); }
  } else _auth = getAuth(app);
  return _auth;
}
async function ensureUser() {
  const a = auth();
  await a.authStateReady();
  if (a.currentUser) return a.currentUser;
  return (await signInAnonymously(a)).user;
}
const db = () => getFirestore(getApp());
const scores = (day) => collection(db(), 'dset', day, 'scores');
const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);

async function submit(day, name, total, runs) {
  const u = await ensureUser();
  await setDoc(doc(db(), 'dset', day, 'scores', u.uid), { name, total, runs, ts: serverTimestamp() });
  return u.uid;
}
async function top(day, n) {
  const snap = await getDocs(query(scores(day), orderBy('total', 'desc'), limit(n)));
  return snap.docs.map((d) => ({ uid: d.id, name: String(d.data().name || ''), total: +d.data().total || 0 }));
}
async function countAbove(day, total) {
  const snap = await getCountFromServer(query(scores(day), where('total', '>', total)));
  return snap.data().count;
}
// Daha önce oturum açılmışsa uid; açılmamışsa null (yeni oturum AÇMAZ).
async function uid() {
  const a = auth();
  await a.authStateReady();
  return a.currentUser ? a.currentUser.uid : null;
}

window.DailySetCloud = {
  submit: (day, name, total, runs) => withTimeout(submit(day, name, total, runs), 9000),
  top: (day, n) => withTimeout(top(day, n), 7000),
  countAbove: (day, total) => withTimeout(countAbove(day, total), 7000),
  uid: () => withTimeout(uid(), 5000).catch(() => null),
};
