// Beat Orbit — bulut hesap köprüsü (KAYNAK dosya, esbuild ile
// www/firebase-bundle.js olarak paketlenir, npm run build:cloud).
// Oyunun geri kalanıyla (game/*.js, düz <script> dosyaları) global
// `window.CloudAccount` üzerinden konuşur — bkz. game/cloud-sync.js.
//
// Kimlik: oyunun TEK oturumu Firebase JS SDK'nın oturumudur (leaderboard.js
// auth()). Oyuncu Günün Seti/Sıralama/Düello'ya ilk katkısında anonim bir
// hesap alır. "Google/Apple ile giriş", o anonim hesaba Google/Apple kimliğini
// BAĞLAR (linkWithCredential) — uid değişmez, skorlar/isim/düello kayıtları
// aynı hesapta kalır. Aynı Google/Apple hesabı başka bir cihazda zaten
// bağlıysa o hesaba geçilir (cihaz değiştirme) ve buluttaki ilerleme sorulur.
//
// Neden böyle: native eklentinin kendi oturumu JS SDK'ya aktarılmıyordu
// (eski sürümde giriş bu yüzden hiç çalışmadı). Artık eklenti yalnız
// Google/Apple'dan kimlik belgesi (idToken) almak için kullanılır
// (skipNativeAuth), oturumu JS SDK açar. Web'de Firebase pop-up'ı kullanılır.
//
// İlerleme (stats) users/{uid}.progress alanında JSON metni olarak saklanır;
// yalnız hesabın sahibi okuyup yazabilir (firestore.rules users/{uid}).
// Cloud Functions YOK (ücretsiz Spark planı) — bu bir yedekleme/taşıma
// deposudur, sunucu doğrulaması yapmaz.
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import {
  GoogleAuthProvider, OAuthProvider, linkWithCredential, linkWithPopup, signInWithCredential,
  deleteUser, signInAnonymously, revokeAccessToken,
} from 'firebase/auth';
import { Capacitor } from '@capacitor/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { auth, ensureUser } from './leaderboard.js'; // + Günün Seti / Sıralama / Düello köprüleri

const firebaseConfig = {
  apiKey: "AIzaSyDo3EeLjVneHCimdQszQQAiYo0CuSxFqBg",
  authDomain: "sentaks.firebaseapp.com",
  projectId: "sentaks",
  storageBucket: "sentaks.firebasestorage.app",
  messagingSenderId: "905630422658",
  appId: "1:905630422658:web:446ea151ae3b523e17069b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const isNative = () => Capacitor.isNativePlatform();
let lastAppleAuthCode = null; // hesap silerken Apple token'ını iptal etmek için

const providersOf = (u) => ((u && u.providerData) || []).map((p) => p.providerId);
const inUse = (e) => /credential-already-in-use|account-exists-with-different-credential|email-already-in-use/i.test(((e && e.code) || '') + ' ' + ((e && e.message) || ''));

// Mevcut oturum (yeni anonim hesap AÇMAZ).
async function status() {
  const a = auth();
  await a.authStateReady();
  const u = a.currentUser;
  const p = u && (u.providerData || []).find((x) => x.providerId === 'google.com' || x.providerId === 'apple.com');
  return { uid: u ? u.uid : null, providers: providersOf(u), email: (p && p.email) || '' };
}

// Native: eklentiden yalnız kimlik belgesi alınır, oturumu JS SDK açar.
async function nativeCredential(which) {
  if (which === 'google') {
    const r = await FirebaseAuthentication.signInWithGoogle({ skipNativeAuth: true });
    const c = (r && r.credential) || {};
    return GoogleAuthProvider.credential(c.idToken || null, c.accessToken || null);
  }
  const r = await FirebaseAuthentication.signInWithApple({ skipNativeAuth: true });
  const c = (r && r.credential) || {};
  lastAppleAuthCode = c.authorizationCode || null;
  return new OAuthProvider('apple.com').credential({ idToken: c.idToken, rawNonce: c.nonce });
}
function credFromError(which, e) {
  return which === 'google' ? GoogleAuthProvider.credentialFromError(e) : OAuthProvider.credentialFromError(e);
}

// Google/Apple'ı bağla. Dönen switched=true: bu kimlik başka bir cihazda zaten
// bağlıydı, o hesaba geçildi (oyun buluttaki ilerlemeyi sorar).
async function link(which) {
  const a = auth();
  let before = null;
  try {
    const user = await ensureUser();
    before = user.uid;
    if (isNative()) {
      const cred = await nativeCredential(which);
      try { await linkWithCredential(user, cred); }
      catch (e) { if (!inUse(e)) throw e; await signInWithCredential(a, credFromError(which, e) || cred); }
    } else {
      const prov = which === 'google' ? new GoogleAuthProvider() : new OAuthProvider('apple.com');
      if (which === 'apple') { prov.addScope('email'); prov.addScope('name'); }
      try { await linkWithPopup(user, prov); }
      catch (e) {
        if (!inUse(e)) throw e;
        const cred = credFromError(which, e);
        if (!cred) throw e;
        await signInWithCredential(a, cred);
      }
    }
  } catch (e) {
    return { ok: false, error: (e && (e.code || e.message)) || String(e) };
  }
  const u = a.currentUser;
  return { ok: true, switched: !!(u && before && u.uid !== before), uid: u ? u.uid : null, providers: providersOf(u) };
}

const userRef = (uid) => doc(db, 'users', uid);
async function saveProgress(json) {
  const s = await status();
  if (!s.uid) throw new Error('not_signed_in');
  await setDoc(userRef(s.uid), { progress: String(json), savedAt: serverTimestamp(), pv: 1 }, { merge: true });
  return true;
}
async function loadProgress() {
  const s = await status();
  if (!s.uid) return null;
  const snap = await getDoc(userRef(s.uid));
  if (!snap.exists()) return null;
  const d = snap.data();
  return typeof d.progress === 'string' ? { progress: d.progress, savedAt: d.savedAt && d.savedAt.toMillis ? d.savedAt.toMillis() : 0 } : null;
}

// Ayarlar → "Hesabımı Sil" (Apple 5.1.1(v): giriş sunan uygulama silmeyi de
// uygulama içinden sunmalı). Bulut ilerlemesi + Firebase kullanıcısı silinir,
// cihazda yeni bir anonim hesapla devam edilir. Firebase uzun süre önce
// giriş yapılmışsa yeniden giriş isteyebilir (requires-recent-login).
async function deleteAccount() {
  try {
    const a = auth();
    await a.authStateReady();
    const u = a.currentUser;
    if (!u) return { ok: true };
    try { await deleteDoc(userRef(u.uid)); } catch (e) {}
    if (lastAppleAuthCode) { try { await revokeAccessToken(a, lastAppleAuthCode); } catch (e) {} lastAppleAuthCode = null; }
    await deleteUser(u);
    try { await signInAnonymously(a); } catch (e) {}
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e && (e.code || e.message)) || String(e) };
  }
}

window.CloudAccount = {
  isNative,
  status,
  link,
  saveProgress,
  loadProgress,
  deleteAccount,
};
