// Panel → Raporlar → "Oyuncu yolculuğu" (Beat Orbit): reklamdan/mağazadan gelen
// yeni oyuncular gerçekten oynadı mı, ne kadar, nerede bıraktı.
// Kaynak: players/{uid} özetleri (oyun yazar, bkz. www/game/telemetry.js).
// Okuma: yalnız son 31 günde görünen oyuncular (yenile başına o kadar okuma).
// Kohort = oyuncu belgesinin oluşturulduğu gün (Türkiye saati) ≈ ilk açılış.
const DAY = 86400000;

async function collectFunnel(db) {
  const trDate = (ms) => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(new Date(ms));
  const now = Date.now(), TODAY = trDate(now), YESTERDAY = trDate(now - DAY);
  const D7 = trDate(now - 6 * DAY), D30 = trDate(now - 29 * DAY);
  const snap = await db.collection("players").where("lastSeen", ">=", new Date(now - 31 * DAY)).get();
  const players = [];
  for (const doc of snap.docs) {
    const p = doc.data(), created = doc.createTime.toMillis(), d = trDate(created);
    if (d < D30) continue;
    const last = p.lastSeen ? p.lastSeen.toMillis() : created;
    const tracked = typeof p.ft === "number" && p.ft !== 99;   // 2.76.1+ ilk deneyim adımları
    const runs = typeof p.runs === "number" ? p.runs : Math.max(0, (p.games || 0) - 1);   // eski sürümde öğretici 1 oyun sayılıyordu
    players.push({ d, plat: p.plat || "?", ver: p.ver || "", mins: p.mins || 0, runs, ft: tracked ? p.ft : null,
      returned: typeof p.days === "number" ? p.days >= 2 : last - created >= 20 * 3600000 });
  }
  const med = (a) => { if (!a.length) return 0; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
  const r1 = (x) => Math.round(x * 10) / 10;
  function cohort(from, to) {
    const c = players.filter((p) => p.d >= from && p.d <= to), n = c.length, cnt = (f) => c.filter(f).length;
    const tr = c.filter((p) => p.ft !== null);
    // Hiç gerçek oyun bitirmeyenler (yeni sürüm): en son nerede kaldılar?
    const stuck = {}; for (const p of tr) if (p.runs < 1) stuck[p.ft] = (stuck[p.ft] || 0) + 1;
    const plat = {}; for (const p of c) { const k = p.plat; plat[k] = plat[k] || { n: 0, played: 0 }; plat[k].n++; if (p.runs >= 1) plat[k].played++; }
    return { opened: n, played1: cnt((p) => p.runs >= 1), played3: cnt((p) => p.runs >= 3), played5: cnt((p) => p.runs >= 5), played10: cnt((p) => p.runs >= 10),
      returned: cnt((p) => p.returned), avgMins: n ? r1(c.reduce((s, p) => s + p.mins, 0) / n) : 0, medMins: med(c.map((p) => p.mins)),
      avgRuns: n ? r1(c.reduce((s, p) => s + p.runs, 0) / n) : 0, medRuns: med(c.map((p) => p.runs)),
      tracked: tr.length, tutDone: tr.filter((p) => p.ft >= 4).length, stuck, plat };
  }
  return { today: cohort(TODAY, TODAY), yesterday: cohort(YESTERDAY, YESTERDAY), d7: cohort(D7, TODAY), d30: cohort(D30, TODAY), reads: snap.size };
}

module.exports = { collectFunnel };
