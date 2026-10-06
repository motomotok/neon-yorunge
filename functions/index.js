// Beat Orbit — bulut hesap sistemi (Firebase Cloud Functions, 2. nesil).
//
// Buradaki fonksiyonlar istemciden (www/game/cloud-account.js üzerinden)
// httpsCallable ile çağrılır. Elmas KAZANDIRAN her işlem (hesap bağlama
// bonusu, davet ödülü) kasıtlı olarak SADECE burada, sunucu tarafında
// doğrulanıp admin.firestore() increment() ile yazılır — istemci "şu kadar
// elmas kazandım" diye bir sayı GÖNDEREMEZ, sadece bir olay (link/redeem)
// tetikler ve sunucu kendi kayıtlarına bakarak hak edip etmediğine karar
// verir. syncState ise tam tersine istemciden gelen sayıları doğrudan
// yazar ama SADECE yedekleme/cihazlar-arası-geri-yükleme amaçlıdır,
// ödül mantığı asla syncState'teki değerlere güvenmez.
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

setGlobalOptions({ region: 'europe-west1', maxInstances: 10 });

const LINK_BONUS_GEMS = 10;
const LINK_PROVIDERS = ['google.com', 'apple.com'];

const REFERRAL_BONUS_GEMS = 20;
const REFERRAL_LIFETIME_CAP = 10; // bir hesabın ömür boyu ödül alabileceği davet sayısı
const REFERRAL_MIN_GAMES = 3;     // davet edilenin ödülü tetiklemesi için oynaması gereken minimum tur

const REFERRAL_CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // 0/O, 1/I/L gibi karışabilecek karakterler çıkarıldı

function requireAuth(request) {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Giriş gerekli.');
  return request.auth.uid;
}

function userRef(uid) { return db.collection('users').doc(uid); }

function randomCode() {
  let s = '';
  for (let i = 0; i < 6; i++) s += REFERRAL_CODE_ALPHABET[Math.floor(Math.random() * REFERRAL_CODE_ALPHABET.length)];
  return s;
}

// ---- bootstrap: ilk açılışta (ve her cihaz değişiminde) çağrılır.
// Kullanıcı dokümanı yoksa oluşturur, referral kodu yoksa üretir, güncel
// bulut durumunu döner — istemci bunu kendi local verisiyle karşılaştırıp
// "hangisi daha ileride" diye birleştirir (bkz. cloud-account.js restoreIfNeeded).
exports.bootstrap = onCall(async (request) => {
  const uid = requireAuth(request);
  const ref = userRef(uid);

  const result = await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    let data = snap.exists ? snap.data() : null;
    if (!data) {
      data = {
        gems: 0, lifetimeGems: 0,
        owned: { themes: [], skins: [] },
        seasonPassActive: false,
        games: 0, tutorialDone: false,
        linkBonusClaimed: {},
        linkedProviders: [],
        referralCode: null,
        referredBy: null,
        referralMilestoneClaimed: false,
        referralCount: 0,
        createdAt: FieldValue.serverTimestamp(),
      };
      tx.set(ref, data);
    }
    return data;
  });

  // Referral kodu yoksa ayrı bir adımda üret (transaction dışında, çünkü
  // çakışma kontrolü için referralCodes koleksiyonuna da yazmak gerekiyor).
  let code = result.referralCode;
  if (!code) {
    for (let tries = 0; tries < 8 && !code; tries++) {
      const candidate = randomCode();
      const codeRef = db.collection('referralCodes').doc(candidate);
      const ok = await db.runTransaction(async (tx) => {
        const codeSnap = await tx.get(codeRef);
        if (codeSnap.exists) return false;
        tx.set(codeRef, { uid, createdAt: FieldValue.serverTimestamp() });
        tx.update(ref, { referralCode: candidate });
        return true;
      });
      if (ok) code = candidate;
    }
  }

  return {
    gems: result.gems || 0,
    owned: result.owned || { themes: [], skins: [] },
    seasonPassActive: !!result.seasonPassActive,
    linkedProviders: result.linkedProviders || [],
    referralCode: code || null,
    referredBy: result.referredBy || null,
  };
});

// ---- syncState: istemci periyodik olarak kendi local durumunu buraya
// yedekler (cihaz değişince geri yüklenebilsin diye). Bu fonksiyon elmas
// KAZANDIRMAZ, sadece verilen alanları yazar.
exports.syncState = onCall(async (request) => {
  const uid = requireAuth(request);
  const d = request.data || {};
  const patch = { lastSyncAt: FieldValue.serverTimestamp() };
  if (typeof d.gems === 'number' && isFinite(d.gems)) patch.gems = Math.max(0, Math.floor(d.gems));
  if (typeof d.lifetimeGems === 'number' && isFinite(d.lifetimeGems)) patch.lifetimeGems = Math.max(0, Math.floor(d.lifetimeGems));
  if (d.owned && typeof d.owned === 'object') {
    patch.owned = {
      themes: Array.isArray(d.owned.themes) ? d.owned.themes.slice(0, 200) : [],
      skins: Array.isArray(d.owned.skins) ? d.owned.skins.slice(0, 200) : [],
    };
  }
  if (typeof d.seasonPassActive === 'boolean') patch.seasonPassActive = d.seasonPassActive;
  if (typeof d.games === 'number' && isFinite(d.games)) patch.games = Math.max(0, Math.floor(d.games));
  if (typeof d.tutorialDone === 'boolean') patch.tutorialDone = d.tutorialDone;
  await userRef(uid).set(patch, { merge: true });
  return { ok: true };
});

// ---- claimLinkBonus: Google/Apple hesabı bağlanınca bir kez çağrılır.
// Sunucu, Admin SDK ile kullanıcının GERÇEKTEN o sağlayıcıyı bağlamış
// olduğunu doğrular (istemcinin "bağladım" demesi yetmez) ve aynı
// sağlayıcı için ikinci kez ödül vermez.
exports.claimLinkBonus = onCall(async (request) => {
  const uid = requireAuth(request);
  const provider = request.data && request.data.provider;
  if (!LINK_PROVIDERS.includes(provider)) {
    throw new HttpsError('invalid-argument', 'Geçersiz sağlayıcı.');
  }

  const authUser = await admin.auth().getUser(uid);
  const linkedIds = (authUser.providerData || []).map(p => p.providerId);
  if (!linkedIds.includes(provider)) {
    throw new HttpsError('failed-precondition', 'Bu sağlayıcı hesabına bağlı değil.');
  }

  const ref = userRef(uid);
  const outcome = await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : {};
    const claimed = (data.linkBonusClaimed || {})[provider];
    if (claimed) return { granted: false };
    tx.set(ref, {
      gems: FieldValue.increment(LINK_BONUS_GEMS),
      lifetimeGems: FieldValue.increment(LINK_BONUS_GEMS),
      linkBonusClaimed: Object.assign({}, data.linkBonusClaimed || {}, { [provider]: true }),
      linkedProviders: FieldValue.arrayUnion(provider),
    }, { merge: true });
    return { granted: true };
  });

  return outcome.granted
    ? { granted: true, amount: LINK_BONUS_GEMS }
    : { granted: false, reason: 'already_claimed' };
});

// ---- redeemReferralCode: yeni oyuncu, davet edenin kodunu bir kez girer.
// Henüz elmas VERMEZ — sadece "kim tarafından davet edildi" bilgisini
// kaydeder. Gerçek ödül, davet edilen kişi gerçekten oynadığında
// claimReferralMilestone ile (davet edeni için) tetiklenir.
exports.redeemReferralCode = onCall(async (request) => {
  const uid = requireAuth(request);
  const rawCode = (request.data && request.data.code || '').toString().toUpperCase().trim();
  if (!rawCode) throw new HttpsError('invalid-argument', 'Kod boş olamaz.');

  const codeSnap = await db.collection('referralCodes').doc(rawCode).get();
  if (!codeSnap.exists) throw new HttpsError('not-found', 'Kod bulunamadı.');
  const inviterUid = codeSnap.data().uid;
  if (inviterUid === uid) throw new HttpsError('failed-precondition', 'Kendi kodunu kullanamazsın.');

  const ref = userRef(uid);
  const result = await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : {};
    if (data.referredBy) return { ok: false, reason: 'already_redeemed' };
    tx.set(ref, { referredBy: inviterUid, referralRedeemedAt: FieldValue.serverTimestamp() }, { merge: true });
    return { ok: true };
  });
  return result;
});

// ---- claimReferralMilestone: davet edilen oyuncu yeterince oynadığında
// (en az REFERRAL_MIN_GAMES tur + tutorial bitmiş + en az bir hesap
// sağlayıcısı bağlı) KENDİSİ çağırır; ama ödülü DAVET EDEN alır. Uygunluk
// kontrolü, istemcinin o an gönderdiği hiçbir değere değil, sunucudaki
// (syncState ile en son yazılmış) kayıtlı duruma bakarak yapılır.
exports.claimReferralMilestone = onCall(async (request) => {
  const uid = requireAuth(request);
  const ref = userRef(uid);
  const snap = await ref.get();
  if (!snap.exists) throw new HttpsError('failed-precondition', 'Profil yok.');
  const data = snap.data();

  if (!data.referredBy) return { granted: false, reason: 'no_referrer' };
  if (data.referralMilestoneClaimed) return { granted: false, reason: 'already_claimed' };
  if ((data.linkedProviders || []).length < 1) return { granted: false, reason: 'not_linked' };
  if (!data.tutorialDone) return { granted: false, reason: 'not_eligible' };
  if ((data.games || 0) < REFERRAL_MIN_GAMES) return { granted: false, reason: 'not_eligible' };

  const inviterRef = userRef(data.referredBy);
  const outcome = await db.runTransaction(async (tx) => {
    const [meSnap, inviterSnap] = await Promise.all([tx.get(ref), tx.get(inviterRef)]);
    const me = meSnap.data();
    if (!me || me.referralMilestoneClaimed) return { granted: false };
    const inviter = inviterSnap.exists ? inviterSnap.data() : null;
    if (!inviter) return { granted: false };
    if ((inviter.referralCount || 0) >= REFERRAL_LIFETIME_CAP) {
      // Davet eden tavana ulaşmış: davet edilen taraf yine de "işaretli" kalsın
      // (tekrar tekrar denemesin) ama ödül verilmez.
      tx.set(ref, { referralMilestoneClaimed: true }, { merge: true });
      return { granted: false, reason: 'inviter_cap_reached' };
    }
    tx.set(ref, { referralMilestoneClaimed: true }, { merge: true });
    tx.set(inviterRef, {
      gems: FieldValue.increment(REFERRAL_BONUS_GEMS),
      lifetimeGems: FieldValue.increment(REFERRAL_BONUS_GEMS),
      referralCount: FieldValue.increment(1),
    }, { merge: true });
    return { granted: true };
  });

  return outcome.granted
    ? { granted: true, amount: REFERRAL_BONUS_GEMS }
    : { granted: false, reason: outcome.reason || 'unknown' };
});
