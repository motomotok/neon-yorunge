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
      fps: p.fps || 0, mfps: p.mfps || 0, dev: p.dev || "", gpu: p.gpu || "", q: p.q || "", ram: p.ram || 0, boot: p.boot || 0,
      scr: p.scr || "", on: p.on === true, opens: p.opens || 0, r1s: p.r1s || 0, r1sc: p.r1sc || 0, r1h: p.r1h || 0, r1k: p.r1k || "",
      r1rv: p.r1rv || 0, r1os: p.r1os || 0, r1ob: p.r1ob || "",
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
    // Telefon ve akıcılık (2.76.2+): oyunda FPS yoksa menü FPS'i kullanılır.
    const pf = c.filter((p) => p.fps || p.mfps), fpsOf = (p) => p.fps || p.mfps;
    const band = (lo, hi) => { const b = pf.filter((p) => fpsOf(p) >= lo && fpsOf(p) < hi); return { n: b.length, played: b.filter((p) => p.runs >= 1).length }; };
    const lowRam = pf.filter((p) => p.ram && p.ram <= 3), boots = pf.filter((p) => p.boot).map((p) => p.boot / 10);
    const devs = pf.slice().sort((a, b) => fpsOf(a) - fpsOf(b)).slice(0, 25).map((p) => ({ dev: p.dev, gpu: p.gpu, ram: p.ram, fps: p.fps, mfps: p.mfps, q: p.q, boot: p.boot / 10, runs: p.runs, mins: p.mins, ft: p.ft }));
    const perf = { measured: pf.length, smooth: band(45, 999), mid: band(30, 45), slow: band(0, 30),
      lowRam: { n: lowRam.length, played: lowRam.filter((p) => p.runs >= 1).length }, medBoot: r1(med(boots)), devs };
    // İlk gerçek oyun ve çıkış anı (2.76.3+).
    const tally = (a) => { const o = {}; for (const k of a) o[k] = (o[k] || 0) + 1; return o; };
    const fr = c.filter((p) => p.r1s > 0), quit = c.filter((p) => p.scr && !p.on && p.runs <= 1), op = c.filter((p) => p.opens);
    const first = { n: fr.length, medSec: med(fr.map((p) => p.r1s)), medHits: med(fr.map((p) => p.r1h)), medScore: med(fr.map((p) => p.r1sc)),
      killers: tally(fr.map((p) => p.r1k || "?")), revOffered: fr.filter((p) => p.r1rv >= 1).length, revUsed: fr.filter((p) => p.r1rv === 2).length,
      next: tally(fr.filter((p) => p.r1ob).map((p) => p.r1ob)), medOver: med(fr.filter((p) => p.r1os).map((p) => p.r1os)),
      quitN: quit.length, quit: tally(quit.map((p) => p.scr)), opensN: op.length, reopened: op.filter((p) => p.opens >= 2).length };
    return { perf, first, opened: n, played1: cnt((p) => p.runs >= 1), played3: cnt((p) => p.runs >= 3), played5: cnt((p) => p.runs >= 5), played10: cnt((p) => p.runs >= 10),
      returned: cnt((p) => p.returned), avgMins: n ? r1(c.reduce((s, p) => s + p.mins, 0) / n) : 0, medMins: med(c.map((p) => p.mins)),
      avgRuns: n ? r1(c.reduce((s, p) => s + p.runs, 0) / n) : 0, medRuns: med(c.map((p) => p.runs)),
      tracked: tr.length, tutDone: tr.filter((p) => p.ft >= 4).length, stuck, plat };
  }
  return { today: cohort(TODAY, TODAY), yesterday: cohort(YESTERDAY, YESTERDAY), d7: cohort(D7, TODAY), d30: cohort(D30, TODAY), reads: snap.size };
}

module.exports = { collectFunnel };
