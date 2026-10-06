// Beat Orbit — bulut hesap köprüsü (KAYNAK dosya, esbuild ile
// www/firebase-bundle.js olarak paketlenir, npm run build:cloud).
// Oyunun geri kalanıyla (game/*.js, düz <script> dosyaları) global
// `window.CloudAccount` üzerinden konuşur — bkz. game/cloud-sync.js
// (gerçek oyun mantığı/stats birleştirme orada, burası sadece ince bir
// Firebase sarmalayıcı).
//
// Google/Apple girişi BİLEREK native eklenti (@capacitor-firebase/authentication)
// ile yapılıyor, Firebase JS SDK'nın signInWithPopup'ı DEĞİL — Google,
// uygulama-içi WebView'lerden gelen OAuth girişlerini güvenlik gereği
// reddediyor ("disallowed_useragent"). Native eklenti native tarayıcı/
// sistem akışını kullanır ve oturumu otomatik olarak buradaki Firebase JS
// SDK örneğiyle senkronize eder (capacitor.config.json'da skipNativeAuth
// ayarlanmadığı sürece varsayılan budur).
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { Capacitor } from '@capacitor/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

const firebaseConfig = {
  apiKey: "AIzaSyDo3EeLjVneHCimdQszQQAiYo0CuSxFqBg",
  authDomain: "sentaks.firebaseapp.com",
  projectId: "sentaks",
  storageBucket: "sentaks.firebasestorage.app",
  messagingSenderId: "905630422658",
  appId: "1:905630422658:web:446ea151ae3b523e17069b",
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, 'europe-west1');

const isNative = () => Capacitor.isNativePlatform();

const authListeners = [];
let currentUser = null;

FirebaseAuthentication.addListener('authStateChange', (change) => {
  currentUser = change.user || null;
  authListeners.forEach(fn => { try { fn(currentUser); } catch (e) {} });
});

async function ensureSignedIn() {
  const { user } = await FirebaseAuthentication.getCurrentUser();
  if (user) { currentUser = user; return user; }
  const res = await FirebaseAuthentication.signInAnonymously();
  currentUser = res.user;
  return currentUser;
}

function call(name, data) {
  return httpsCallable(functions, name)(data || {}).then(r => r.data);
}

async function linkProvider(which) {
  try {
    const fn = which === 'google' ? FirebaseAuthentication.linkWithGoogle : FirebaseAuthentication.linkWithApple;
    await fn();
    const providerId = which === 'google' ? 'google.com' : 'apple.com';
    const bonus = await call('claimLinkBonus', { provider: providerId });
    return { ok: true, granted: !!bonus.granted, amount: bonus.amount || 0 };
  } catch (e) {
    return { ok: false, error: (e && e.message) || String(e) };
  }
}

window.CloudAccount = {
  isNative,
  ensureSignedIn,
  getUser: () => currentUser,
  onAuthChange(fn) { authListeners.push(fn); },
  bootstrap: () => call('bootstrap'),
  syncState: (data) => call('syncState', data),
  linkGoogle: () => linkProvider('google'),
  linkApple: () => linkProvider('apple'),
  redeemReferralCode: (code) => call('redeemReferralCode', { code }),
  claimReferralMilestone: () => call('claimReferralMilestone'),
};
