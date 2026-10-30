// Beat Orbit — Cloud Functions (Firebase projesi "sentaks", Blaze planı).
//
// stopBilling: harcama emniyet şalteri. Google Cloud'daki "Beat Orbit Stop"
// bütçesi (sentaks + ajan-kelime TOPLAMINI sayar, ₺1000) eşiğe her ulaştığında "billing-alerts"
// Pub/Sub konusuna mesaj yollar. Gerçekleşen maliyet bütçe tutarına ulaştıysa
// bu fonksiyon projenin faturalandırma bağlantısını keser → ücretli servisler
// durur, proje ücretsiz kotaya düşer (oyunun kendisi çalışmaya devam eder;
// sıralama/düello/bulut kaydı ödeme hesabı yeniden bağlanana kadar kısıtlı).
// Yeniden açmak: Firebase konsolu → sol alt "Spark" → Blaze'e tekrar geç.
//
// Aynı desen Pasla'da (ajan-kelime) var. 27.10: iki bütçe de iki projenin
// toplamını sayıyor; toplam ₺1000'e ulaşınca ikisi de kendi projesini durdurur.
//
// Gerekli yetki (bir kez, Google Cloud → IAM): fonksiyonun hizmet hesabına
// (PROJE_NUMARASI-compute@developer.gserviceaccount.com) bu projede
// "Project Billing Manager" (roles/billing.projectManager) rolü.
const { onMessagePublished } = require("firebase-functions/v2/pubsub");
const { logger } = require("firebase-functions");
const { CloudBillingClient } = require("@google-cloud/billing");

const billing = new CloudBillingClient();

exports.stopBilling = onMessagePublished({ topic: "billing-alerts", region: "europe-west1" }, async (event) => {
  let data;
  try {
    data = event.data.message.json;
  } catch (e) {
    logger.error("Bütçe mesajı JSON değil", e);
    return;
  }
  const cost = Number(data && data.costAmount);
  const budget = Number(data && data.budgetAmount);
  logger.info(`Bütçe bildirimi: maliyet ${cost}, bütçe ${budget}, ad "${data && data.budgetDisplayName}"`);
  if (!(budget > 0) || !(cost >= budget)) return;

  const projectId = process.env.GCLOUD_PROJECT || JSON.parse(process.env.FIREBASE_CONFIG || "{}").projectId;
  const name = `projects/${projectId}`;
  try {
    const [info] = await billing.getProjectBillingInfo({ name });
    if (!info.billingEnabled) { logger.info(`${name} faturalandırması zaten kapalı.`); return; }
    logger.warn(`DİKKAT: maliyet bütçeyi aştı (${cost} >= ${budget}). ${name} faturalandırması kapatılıyor…`);
    await billing.updateProjectBillingInfo({ name, projectBillingInfo: { billingAccountName: "" } });
    logger.warn("Faturalandırma kapatıldı.");
  } catch (e) {
    logger.error("Faturalandırma kapatılamadı (IAM yetkisi eksik olabilir)", e);
  }
});

// refreshDash: admin panelinde "Yenile" (Raporlar). Google Ads / AdMob / Play /
// App Store verisini o an çeker (functions/dash.js) ve dash/main'e yazar.
// Yalnız admin (Google ile girmiş, doğrulanmış aliaslan625@gmail.com) çağırabilir;
// art arda basılırsa 60 sn içinde ikinci kez toplamaz (maliyet/kota koruması).
// Anahtarlar Secret Manager'da: DASH_SECRETS (bkz. Otomasyonlar/
// pasla-play-reports-mcp/scripts/dash-collect.mjs --secret-file).
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const { collectDash } = require("./dash");
const { collectFunnel } = require("./funnel");
const DASH_SECRETS = defineSecret("DASH_SECRETS");
if (!admin.apps.length) admin.initializeApp();

exports.refreshDash = onCall({ region: "europe-west1", secrets: [DASH_SECRETS], timeoutSeconds: 120, memory: "256MiB", maxInstances: 1 }, async (req) => {
  const t = (req.auth && req.auth.token) || {};
  if (t.email !== "aliaslan625@gmail.com" || !t.email_verified || !t.firebase || t.firebase.sign_in_provider !== "google.com") {
    throw new HttpsError("permission-denied", "Yalnız admin.");
  }
  const ref = admin.firestore().doc("dash/main");
  const prev = await ref.get();
  const prevAt = prev.exists && prev.get("at") ? prev.get("at").toMillis() : 0;
  if (Date.now() - prevAt < 60000) return { ok: true, cached: true };
  const dash = await collectDash(JSON.parse(DASH_SECRETS.value()));
  // Bir kaynak bu sefer çekilemezse (izin/kota) panel boş kalmasın: son bilinen değer korunur.
  if (!dash.paslaFunnel && prev.exists) {
    try { const old = JSON.parse(prev.get("json")); if (old.paslaFunnel) { dash.paslaFunnel = old.paslaFunnel; dash.paslaFunnelAt = old.paslaFunnelAt || old.at; } } catch (e) {}
  }
  try { dash.funnel = await collectFunnel(admin.firestore()); }
  catch (e) { dash.errors.push("Oyuncu yolculuğu: " + String(e.message || e).slice(0, 200)); }
  await ref.set({ json: JSON.stringify(dash), at: admin.firestore.Timestamp.fromDate(new Date(dash.at)) });
  logger.info(`dash yenilendi, hata ${dash.errors.length}`);
  return { ok: true, errors: dash.errors.length };
});
