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
// Hesap köprüsü (cloud-account.js) aynı oturumu kullanır.
export { auth, ensureUser };
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

// ---- Düello kayıtları (bkz. www/game/duel.js) ----
// duels/{uid}: her oyuncunun EN SON tamamladığı düello maçı (tek belge —
// her yeni maç bir öncekinin üzerine yazılır). Böylece depo oyuncu sayısıyla
// sınırlı kalır (~7 KB × oyuncu), silme/temizlik gerekmez, ve havuz kendiliğinden
// hep taze olur. b = MMR kovası (mmr/100); eşleşme kendi kovası ±1'deki EN YENİ
// 25 kaydı okur (dizin: b ASC, t DESC). Firestore iç içe dizi saklamadığı için
// örnekler düz diziye açılır: s = [t, puan, can, kalkan, t, puan, ...].
const duels = () => collection(db(), 'duels');
const duelBucket = (mmr) => Math.max(0, Math.min(40, Math.floor(mmr / 100)));
async function duelUpload(g) {
  const u = await ensureUser();
  const s = []; (g.samples || []).forEach((x) => s.push(+x[0], +x[1], +x[2], +x[3]));
  await setDoc(doc(duels(), u.uid), {
    v: 2, seed: g.seed | 0, name: g.name, mmr: Math.round(g.mmr), b: duelBucket(g.mmr), d: g.d | 0, lp: g.lp | 0,
    theme: String(g.theme || '').slice(0, 24), skin: String(g.skin || '').slice(0, 24),
    perks: (g.perks || []).slice(0, 3), s, a: (g.attacks || []).slice(0, 40), died: g.died == null ? null : +g.died,
    score: +g.score || 0, t: serverTimestamp(),
  });
  return u.uid;
}
async function duelFind(mmr) {
  const b = duelBucket(mmr);
  const snap = await getDocs(query(duels(), where('b', 'in', [b - 1, b, b + 1]), orderBy('t', 'desc'), limit(25)));
  return snap.docs.map((d) => {
    const x = d.data(), samples = [];
    for (let i = 0; i + 3 < (x.s || []).length; i += 4) samples.push([x.s[i], x.s[i + 1], x.s[i + 2], x.s[i + 3]]);
    return { uid: d.id, name: String(x.name || ''), mmr: +x.mmr || 1000, d: x.d | 0, lp: x.lp | 0, seed: x.seed | 0, samples,
      attacks: x.a || [], died: x.died == null ? null : +x.died, perks: x.perks || [], theme: x.theme, skin: x.skin,
      at: x.t && x.t.toMillis ? x.t.toMillis() : 0 };
  }).filter((g) => g.samples.length > 10);
}
window.DuelCloud = {
  upload: (g) => withTimeout(duelUpload(g), 9000),
  find: (mmr) => withTimeout(duelFind(mmr), 7000),
};

window.DailySetCloud = {
  submit: (day, name, total, runs) => withTimeout(submit(day, name, total, runs), 9000),
  top: (day, n) => withTimeout(top(day, n), 7000),
  countAbove: (day, total) => withTimeout(countAbove(day, total), 7000),
  uid: () => withTimeout(uid(), 5000).catch(() => null),
};
