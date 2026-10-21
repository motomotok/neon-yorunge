// Beat Orbit — Cloud Functions (Firebase projesi "sentaks", Blaze planı).
//
// stopBilling: harcama emniyet şalteri. Google Cloud'daki "Beat Orbit Stop"
// bütçesi (yalnız bu projeyi sayar) eşiğe her ulaştığında "billing-alerts"
// Pub/Sub konusuna mesaj yollar. Gerçekleşen maliyet bütçe tutarına ulaştıysa
// bu fonksiyon projenin faturalandırma bağlantısını keser → ücretli servisler
// durur, proje ücretsiz kotaya düşer (oyunun kendisi çalışmaya devam eder;
// sıralama/düello/bulut kaydı ödeme hesabı yeniden bağlanana kadar kısıtlı).
// Yeniden açmak: Firebase konsolu → sol alt "Spark" → Blaze'e tekrar geç.
//
// Aynı desen Pasla'da (ajan-kelime) var; ikisi bilerek ayrı: biri aşarsa
// yalnız o proje durur.
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
