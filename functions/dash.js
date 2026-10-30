// Admin paneli "Raporlar" verisi: Beat Orbit + Pasla için Google Ads (kampanya +
// reklam grubu), AdMob (Android / iOS gelir, ₺), Google Play (mağaza sayfası,
// yorumlar, günlük yükleme raporu) ve App Store (sürüm durumu, yorumlar).
// Ek kütüphane yok: her şey fetch + Google OAuth yenileme anahtarı + Apple JWT.
//
// collectDash(S) → panelin okuduğu nesne. S (anahtarlar) bulutta Secret
// Manager'daki DASH_SECRETS'tan, bilgisayarda
// Otomasyonlar/pasla-play-reports-mcp/secrets/ dosyalarından gelir.
// SADECE OKUR: hiçbir hesapta değişiklik yapmaz.
const { createPrivateKey, sign } = require("node:crypto");
const { gunzipSync } = require("node:zlib");

const APPS = [
  { name: "Beat Orbit", pkg: "com.motomotok.neonyorunge", campaign: "24394184560", ios: "6817908576" },
  { name: "Pasla", pkg: "com.ajankelime.game", campaign: "24219313563", ios: "6818055363" },
];
const ADS_STATUS = { ENABLED: "açık", PAUSED: "duraklatıldı", REMOVED: "kaldırıldı" };

async function collectDash(S) {
  const errors = [];
  const safe = async (label, fn) => { try { return await fn(); } catch (e) { errors.push(`${label}: ${String((e && e.message) || e).slice(0, 200)}`); return null; } };

  // ---- Tarihler (Türkiye saati) ----
  const trDate = (d) => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(d);
  const shift = (s, n) => { const d = new Date(s + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
  const TODAY = trDate(new Date()), YESTERDAY = shift(TODAY, -1), D7 = shift(TODAY, -6), D30 = shift(TODAY, -29);
  const MONTH0 = TODAY.slice(0, 8) + "01", LASTMONTH1 = shift(MONTH0, -1), LASTMONTH0 = LASTMONTH1.slice(0, 8) + "01";
  const r2 = (x) => Math.round(x * 100) / 100;
  function periods(daily, fields) {
    const sum = (from, to) => { const o = {}; for (const f of fields) o[f] = 0; for (const r of daily) if (r.d >= from && r.d <= to) for (const f of fields) o[f] += r[f] || 0; for (const f of fields) o[f] = r2(o[f]); return o; };
    return { today: sum(TODAY, TODAY), yesterday: sum(YESTERDAY, YESTERDAY), d7: sum(D7, TODAY), d30: sum(D30, TODAY),
      month: sum(MONTH0, TODAY), lastMonth: sum(LASTMONTH0, LASTMONTH1), total: sum("2000-01-01", TODAY) };
  }

  // ---- Google erişim anahtarı (yenileme anahtarından) ----
  const tokens = {};
  async function gtoken(refresh) {
    if (tokens[refresh]) return tokens[refresh];
    const res = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ client_id: S.oauth.client_id, client_secret: S.oauth.client_secret, refresh_token: refresh, grant_type: "refresh_token" }) });
    const j = await res.json();
    if (!j.access_token) throw new Error("token: " + (j.error_description || j.error || res.status));
    return (tokens[refresh] = j.access_token);
  }
  async function gfetch(refresh, url, opts = {}) {
    const res = await fetch(url, { ...opts, headers: { authorization: "Bearer " + (await gtoken(refresh)), ...(opts.headers || {}) } });
    if (!res.ok) throw new Error(`${res.status} ${(await res.text()).slice(0, 200)}`);
    return res;
  }

  // ---- Google Ads ----
  async function adsQuery(query) {
    const cid = String(S.ads.customer_id).replace(/-/g, ""), out = [];
    let pageToken;
    do {
      const res = await gfetch(S.ads.refresh_token, `https://googleads.googleapis.com/v24/customers/${cid}/googleAds:search`, { method: "POST",
        headers: { "content-type": "application/json", "developer-token": S.ads.developer_token, "login-customer-id": String(S.ads.manager_customer_id).replace(/-/g, "") },
        body: JSON.stringify({ query, pageToken }) });
      const j = await res.json();
      out.push(...(j.results || [])); pageToken = j.nextPageToken;
    } while (pageToken);
    return out;
  }
  async function collectAds() {
    const out = [];
    for (const app of APPS) {
      const camp = await safe(`Ads ${app.name}`, async () => {
        const info = (await adsQuery(`SELECT campaign.name, campaign.status, campaign_budget.amount_micros FROM campaign WHERE campaign.id = ${app.campaign}`))[0];
        const rows = await adsQuery(`SELECT segments.date, ad_group.id, ad_group.name, ad_group.status, metrics.cost_micros, metrics.impressions, metrics.clicks, metrics.conversions
          FROM ad_group WHERE campaign.id = ${app.campaign} AND segments.date BETWEEN '2026-01-01' AND '${TODAY}'`);
        const byDay = new Map(), groups = new Map(), F = ["cost", "inst", "imp", "clk"];
        for (const x of rows) {
          const m = x.metrics || {};
          const r = { d: x.segments.date, cost: Number(m.costMicros || 0) / 1e6, inst: Number(m.conversions || 0), imp: Number(m.impressions || 0), clk: Number(m.clicks || 0) };
          const day = byDay.get(r.d) || { d: r.d, cost: 0, inst: 0, imp: 0, clk: 0 };
          for (const f of F) day[f] += r[f];
          byDay.set(r.d, day);
          const g = groups.get(x.adGroup.id) || { name: x.adGroup.name, status: ADS_STATUS[x.adGroup.status] || x.adGroup.status, daily: [] };
          g.daily.push(r); groups.set(x.adGroup.id, g);
        }
        const daily = [...byDay.values()].sort((a, b) => a.d.localeCompare(b.d)).map((r) => ({ ...r, cost: r2(r.cost), inst: r2(r.inst) }));
        return { app: app.name, id: app.campaign, name: info.campaign.name, status: ADS_STATUS[info.campaign.status] || info.campaign.status,
          budget: Number(info.campaignBudget.amountMicros) / 1e6, start: daily.length ? daily[0].d : null,
          p: periods(daily, F), daily: daily.filter((r) => r.d >= shift(TODAY, -59)),
          groups: [...groups.values()].map((g) => ({ name: g.name, status: g.status, p: periods(g.daily, F) })) };
      });
      if (camp) out.push(camp);
    }
    return out;
  }

  // ---- AdMob (₺) ----
  async function collectAdmob() {
    const acc = (await (await gfetch(S.admob_refresh, "https://admob.googleapis.com/v1/accounts")).json()).account[0].name;
    const toD = (s) => { const [year, month, day] = s.split("-").map(Number); return { year, month, day }; };
    const rep = await (await gfetch(S.admob_refresh, `https://admob.googleapis.com/v1/${acc}/networkReport:generate`, { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ reportSpec: { dateRange: { startDate: toD(LASTMONTH0), endDate: toD(TODAY) }, dimensions: ["DATE", "APP", "PLATFORM"],
        metrics: ["ESTIMATED_EARNINGS", "IMPRESSIONS", "AD_REQUESTS"], localizationSettings: { currencyCode: "TRY", languageCode: "tr-TR" } } }) })).json();
    const apps = new Map();
    for (const x of rep.filter((r) => r.row)) {
      const dv = x.row.dimensionValues || {}, mv = x.row.metricValues || {};
      const label = (dv.APP && (dv.APP.displayLabel || dv.APP.value)) || "?", plat = (dv.PLATFORM && (dv.PLATFORM.displayLabel || dv.PLATFORM.value)) || "?";
      const num = (v) => (!v ? 0 : v.microsValue !== undefined ? Number(v.microsValue) / 1e6 : Number(v.integerValue ?? v.doubleValue ?? 0));
      const d = String(dv.DATE.value), day = `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6)}`;
      const k = label + "|" + plat, a = apps.get(k) || { app: label, platform: plat, daily: [] };
      a.daily.push({ d: day, earn: num(mv.ESTIMATED_EARNINGS), imp: num(mv.IMPRESSIONS), req: num(mv.AD_REQUESTS) });
      apps.set(k, a);
    }
    return { currency: "TRY", apps: [...apps.values()].map((a) => {
      a.daily.sort((x, y) => x.d.localeCompare(y.d));
      return { app: a.app, platform: a.platform, p: periods(a.daily, ["earn", "imp", "req"]), daily: a.daily.filter((r) => r.d >= D30).map((r) => ({ d: r.d, earn: r2(r.earn), imp: r.imp })) };
    }) };
  }

  // ---- Google Play ----
  async function playStorePage(pkg) {
    const html = await (await fetch(`https://play.google.com/store/apps/details?id=${pkg}&hl=tr&gl=TR`, { headers: { "user-agent": "Mozilla/5.0", "accept-language": "tr-TR" } })).text();
    const installs = (html.match(/>([\d.,]+\s?(?:B|Mn|Myr)?\+)<\/div><div[^>]*>İndirme/) || [])[1] || null;
    const rating = (html.match(/Beş üzerinden ([\d,]+) yıldız/) || [])[1] || null;
    const ratingCount = (html.match(/>([\d.,]+\s?(?:B|Mn)?) yorum</) || [])[1] || null;
    return { installs, rating, ratingCount };
  }
  async function playReviews(pkg) {
    const j = await (await gfetch(S.play_refresh, `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${pkg}/reviews?maxResults=20&translationLanguage=tr`)).json();
    return (j.reviews || []).map((r) => {
      const c = ((r.comments || []).find((x) => x.userComment) || {}).userComment || {};
      const dev = (r.comments || []).find((x) => x.developerComment);
      return { star: c.starRating, text: (c.text || "").trim().slice(0, 500), author: r.authorName || "",
        date: c.lastModified && c.lastModified.seconds ? new Date(Number(c.lastModified.seconds) * 1000).toISOString().slice(0, 10) : null,
        ver: c.appVersionName || null, device: (c.deviceMetadata && c.deviceMetadata.productName) || null, replied: !!dev };
    });
  }
  function parseCsv(text) {
    const rows = []; let row = [], field = "", q = false;
    const src = text.replace(/\r\n?/g, "\n");
    for (let i = 0; i < src.length; i++) {
      const c = src[i];
      if (q) { if (c === '"') { if (src[i + 1] === '"') { field += '"'; i++; } else q = false; } else field += c; }
      else if (c === '"') q = true; else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; } else field += c;
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    const [h, ...rest] = rows.filter((r) => !(r.length === 1 && r[0] === ""));
    return h ? rest.map((r) => Object.fromEntries(h.map((k, i) => [k, r[i] ?? ""]))) : [];
  }
  async function readReport(path) {
    const res = await fetch(`https://storage.googleapis.com/storage/v1/b/${S.bucket}/o/${encodeURIComponent(path)}?alt=media`, { headers: { authorization: "Bearer " + (await gtoken(S.gcs_refresh)) } });
    if (res.status === 404) return [];   // o ayın raporu yok / henüz oluşmadı
    if (!res.ok) throw new Error(`${res.status} ${(await res.text()).slice(0, 150)}`);
    let buf = Buffer.from(await res.arrayBuffer());
    if (buf[0] === 0x1f && buf[1] === 0x8b) buf = gunzipSync(buf);
    const text = buf[0] === 0xff && buf[1] === 0xfe ? buf.toString("utf16le", 2) : buf[0] === 0xef && buf[1] === 0xbb ? buf.toString("utf8", 3) : buf.toString("utf8");
    return parseCsv(text);
  }
  async function playInstalls(pkg) {
    const daily = [];
    for (const m of [MONTH0, LASTMONTH0].map((x) => x.slice(0, 7).replace("-", ""))) {
      const rows = await safe(`Play rapor ${pkg} ${m}`, () => readReport(`stats/installs/installs_${pkg}_${m}_overview.csv`));
      for (const x of rows || []) daily.push({ d: x.Date, inst: Number(x["Daily User Installs"]) || 0, uninst: Number(x["Daily User Uninstalls"]) || 0, active: Number(x["Active Device Installs"]) || 0 });
    }
    return daily.sort((a, b) => a.d.localeCompare(b.d)).filter((r) => r.d >= D30);
  }
  async function collectPlay() {
    const out = [];
    for (const app of APPS) out.push({ app: app.name, pkg: app.pkg,
      store: await safe(`Play mağaza ${app.name}`, () => playStorePage(app.pkg)),
      reviews: (await safe(`Play yorum ${app.name}`, () => playReviews(app.pkg))) || [],
      daily: (await safe(`Play rapor ${app.name}`, () => playInstalls(app.pkg))) || [] });
    return out;
  }

  // ---- App Store ----
  let ascTok = null;
  function ascToken() {
    if (ascTok) return ascTok;
    const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url"), now = Math.floor(Date.now() / 1000);
    const data = b64({ alg: "ES256", kid: S.asc.keyId, typ: "JWT" }) + "." + b64({ iss: S.asc.issuerId, iat: now, exp: now + 900, aud: "appstoreconnect-v1" });
    return (ascTok = data + "." + sign("sha256", Buffer.from(data), { key: createPrivateKey(S.asc.p8), dsaEncoding: "ieee-p1363" }).toString("base64url"));
  }
  async function asc(path) {
    const res = await fetch("https://api.appstoreconnect.apple.com" + path, { headers: { authorization: "Bearer " + ascToken() } });
    if (!res.ok) throw new Error(`ASC ${res.status} ${(await res.text()).slice(0, 150)}`);
    return res.json();
  }
  async function collectIos() {
    const out = [];
    for (const app of APPS) {
      const st = await safe(`iOS durum ${app.name}`, () => asc(`/v1/apps/${app.ios}/appStoreVersions?limit=3&fields[appStoreVersions]=versionString,appStoreState`));
      const rv = await safe(`iOS yorum ${app.name}`, () => asc(`/v1/apps/${app.ios}/customerReviews?sort=-createdDate&limit=15&fields[customerReviews]=rating,title,body,reviewerNickname,createdDate,territory`));
      out.push({ app: app.name,
        versions: ((st && st.data) || []).map((v) => ({ v: v.attributes.versionString, state: v.attributes.appStoreState })),
        reviews: ((rv && rv.data) || []).map(({ attributes: r }) => ({ star: r.rating, title: r.title || "", text: (r.body || "").slice(0, 500), author: r.reviewerNickname || "", date: (r.createdDate || "").slice(0, 10), country: r.territory || "" })) });
    }
    return out;
  }

  const [ads, admob, play, ios] = await Promise.all([safe("Ads", collectAds), safe("AdMob", collectAdmob), safe("Play", collectPlay), safe("iOS", collectIos)]);
  return { at: new Date().toISOString(), today: TODAY, ads: ads || [], admob, play: play || [], ios: ios || [], errors };
}

module.exports = { collectDash };
