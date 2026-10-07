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
//
// NOT: Burada BİLEREK Cloud Functions yok (ücretsiz Spark planında kalmak
// için) — bootstrap/syncState doğrudan Firestore okuma/yazma. Bu yüzden
// hiçbir ödül (elmas vb.) bu dosyadan verilmiyor: istemci kendi belgesine
// istediğini yazabildiği için sunucu tarafı doğrulama olmadan verilecek
// her ödül sahtelenebilir. Bu katman SADECE "satın alımların/sezon biletin
// cihaz değiştirince kaybolmasın" yedekleme amaçlı — bugün zaten
// localStorage'ı değiştirebilen bir kullanıcının elinden daha fazlasını
// almıyor, sadece cihazlar arası taşınabilirlik ekliyor.
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
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
const db = getFirestore(app);

const isNative = () => Capacitor.isNativePlatform();

const authListeners = [];
let currentUser = null;
let lastAppleAuthCode = null; // hesap silme sırasında Apple token'ını iptal etmek için

FirebaseAuthentication.addListener('authStateChange', (change) => {
  currentUser = change.user || null;
  authListeners.forEach(fn => { try { fn(currentUser); } catch (e) {} });
});

// Boot'ta SADECE daha önce oturum açılmış mı diye bakar — yeni bir anonim
// kullanıcı OLUŞTURMAZ. Böylece hiç hesap bağlamayan oyuncular için Firebase'e
// hiçbir veri gönderilmez (bkz. privacy.html — "hesap bağlamazsan hiçbir şey
// sunucuya gitmez" iddiası artık kodla birebir örtüşüyor).
async function getExistingUser() {
  const { user } = await FirebaseAuthentication.getCurrentUser();
  currentUser = user || null;
  return currentUser;
}

// Sadece "Hesabımı bağla" akışı tetikler — linkWithX() çağrısı için önce bir
// (anonim) oturum gerekiyor.
async function ensureSignedIn() {
  const { user } = await FirebaseAuthentication.getCurrentUser();
  if (user) { currentUser = user; return user; }
  const res = await FirebaseAuthentication.signInAnonymously();
  currentUser = res.user;
  return currentUser;
}

function userRef() {
  if (!currentUser) throw new Error('not_signed_in');
  return doc(db, 'users', currentUser.uid);
}

async function bootstrap() {
  const snap = await getDoc(userRef());
  const data = snap.exists() ? snap.data() : {};
  return {
    gems: data.gems || 0,
    lifetimeGems: data.lifetimeGems || 0,
    owned: data.owned || { themes: [], skins: [] },
    seasonPassActive: !!data.seasonPassActive,
    linkedProviders: data.linkedProviders || [],
  };
}

async function syncState(d) {
  d = d || {};
  const patch = {};
  if (typeof d.gems === 'number' && isFinite(d.gems)) patch.gems = Math.max(0, Math.floor(d.gems));
  if (typeof d.lifetimeGems === 'number' && isFinite(d.lifetimeGems)) patch.lifetimeGems = Math.max(0, Math.floor(d.lifetimeGems));
  if (d.owned && typeof d.owned === 'object') {
    patch.owned = {
      themes: Array.isArray(d.owned.themes) ? d.owned.themes.slice(0, 200) : [],
      skins: Array.isArray(d.owned.skins) ? d.owned.skins.slice(0, 200) : [],
    };
  }
  if (typeof d.seasonPassActive === 'boolean') patch.seasonPassActive = d.seasonPassActive;
  await setDoc(userRef(), patch, { merge: true });
  return { ok: true };
}

async function linkProvider(which) {
  try {
    await ensureSignedIn();
    const linkFn = which === 'google' ? FirebaseAuthentication.linkWithGoogle : FirebaseAuthentication.linkWithApple;
    const res = await linkFn();
    if (which === 'apple' && res && res.credential && res.credential.authorizationCode) {
      lastAppleAuthCode = res.credential.authorizationCode;
    }
  } catch (e) {
    // Bu Google/Apple hesabı DAHA ÖNCE başka bir cihazda bağlanmışsa, link
    // isteği "zaten kullanımda" hatasıyla reddedilir — bu aslında beklenen
    // "cihaz değiştirdim" senaryosu. Çözüm: anonim hesaba linklemeyi bırakıp
    // doğrudan o sağlayıcıyla GİRİŞ yap — bu, önceki cihazdaki bulut profiline
    // (elmas/kozmetik/sezon bileti) erişimi geri verir.
    const msg = ((e && e.code) || '') + ' ' + ((e && e.message) || '');
    const alreadyLinkedElsewhere = /credential-already-in-use|account-exists-with-different-credential/i.test(msg);
    if (!alreadyLinkedElsewhere) return { ok: false, error: (e && e.message) || String(e) };
    try {
      const signFn = which === 'google' ? FirebaseAuthentication.signInWithGoogle : FirebaseAuthentication.signInWithApple;
      const res2 = await signFn();
      if (which === 'apple' && res2 && res2.credential && res2.credential.authorizationCode) {
        lastAppleAuthCode = res2.credential.authorizationCode;
      }
    } catch (e2) {
      return { ok: false, error: (e2 && e2.message) || String(e2) };
    }
  }
  const { user } = await FirebaseAuthentication.getCurrentUser();
  currentUser = user;
  const providerId = which === 'google' ? 'google.com' : 'apple.com';
  const ref = userRef();
  const snap = await getDoc(ref);
  const linked = (snap.exists() && snap.data().linkedProviders) || [];
  if (!linked.includes(providerId)) linked.push(providerId);
  await setDoc(ref, { linkedProviders: linked }, { merge: true });
  return { ok: true, linkedProviders: linked, restoredFromCloud: snap.exists() };
}

// Ayarlar → "Hesabımı Sil". Apple'ın 5.1.1(v) kuralı: hesap bağlamayı
// destekleyen uygulamalar silmeyi de UYGULAMA İÇİNDEN başlatabilmeli.
// Firestore belgesi + Firebase Auth kullanıcısı silinir; Apple ile son
// girişten (bu oturumda) bir authorizationCode varsa token da iptal edilir
// (uygulama kapatılıp yeniden açıldıktan günler sonra silinirse bu token
// artık elde yok — bu durumda sadece hesap/veri silinir, ki asıl istenen de
// budur; token'ın server tarafında ayrıca iptali App Store'un katı zorunluluğu
// değil, "mümkünse yapılmalı" tavsiyesidir).
async function deleteAccount() {
  try {
    const { user } = await FirebaseAuthentication.getCurrentUser();
    if (!user) return { ok: true }; // zaten hesap yok
    currentUser = user;
    try { await deleteDoc(userRef()); } catch (e) {}
    if (lastAppleAuthCode) {
      try { await FirebaseAuthentication.revokeAccessToken({ token: lastAppleAuthCode }); } catch (e) {}
      lastAppleAuthCode = null;
    }
    await FirebaseAuthentication.deleteUser();
    currentUser = null;
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e && e.message) || String(e) };
  }
}

window.CloudAccount = {
  isNative,
  ensureSignedIn,
  getExistingUser,
  getUser: () => currentUser,
  onAuthChange(fn) { authListeners.push(fn); },
  bootstrap,
  syncState,
  linkGoogle: () => linkProvider('google'),
  linkApple: () => linkProvider('apple'),
  deleteAccount,
};
