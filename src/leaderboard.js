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

// ---- Global Sıralama (Klasik mod) ----
// lb/{board}/scores/{uid}: board = 'all' (tüm zamanlar) ya da 'w2026-43'
// (haftalık, pazartesi 00:00 TR'de yenilenir). Oyuncu yalnız kendi belgesini,
// yalnız rekor kırınca yazar; skor yalnız artabilir (bkz. firestore.rules).
// Okuma maliyeti (Firebase ücretsiz kota): ilk 10 + "kaçıncıyım" sayımı
// (≈1 okuma / 1000 kayıt) + hemen üstümdeki kişi = ekran başına ~12 okuma.
const lbScores = (board) => collection(db(), 'lb', board, 'scores');
async function gbSubmit(board, name, score, heat) {
  const u = await ensureUser();
  await setDoc(doc(db(), 'lb', board, 'scores', u.uid), { name, score, heat, ts: serverTimestamp() });
  return u.uid;
}
async function gbTop(board, n) {
  const snap = await getDocs(query(lbScores(board), orderBy('score', 'desc'), limit(n)));
  return snap.docs.map((d) => ({ uid: d.id, name: String(d.data().name || ''), score: +d.data().score || 0, heat: +d.data().heat || 0 }));
}
async function gbRank(board, score) {
  const snap = await getCountFromServer(query(lbScores(board), where('score', '>', score)));
  return snap.data().count + 1;
}
async function gbAbove(board, score) {
  const snap = await getDocs(query(lbScores(board), where('score', '>', score), orderBy('score', 'asc'), limit(1)));
  const d = snap.docs[0];
  return d ? { uid: d.id, name: String(d.data().name || ''), score: +d.data().score || 0 } : null;
}
window.GlobalBoard = {
  submit: (board, name, score, heat) => withTimeout(gbSubmit(board, name, score, heat), 9000),
  top: (board, n) => withTimeout(gbTop(board, n), 7000),
  rank: (board, score) => withTimeout(gbRank(board, score), 7000),
  above: (board, score) => withTimeout(gbAbove(board, score), 7000),
};

window.DailySetCloud = {
  submit: (day, name, total, runs) => withTimeout(submit(day, name, total, runs), 9000),
  top: (day, n) => withTimeout(top(day, n), 7000),
  countAbove: (day, total) => withTimeout(countAbove(day, total), 7000),
  uid: () => withTimeout(uid(), 5000).catch(() => null),
};
