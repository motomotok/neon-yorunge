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
  // Google Play'in yayın öncesi test robotları (yazılımla çizen sahte GPU,
  // emülatör) gerçek oyuncu değil: huniyi bozuyorlardı (öğreticide "çıkan",
  // 1-6 FPS'li "OnePlus8Pro"lar). Sayılmaz, yalnız adetleri gösterilir.
  const isBot = (p) => /SwiftShader|Emulator|llvmpipe/i.test(p.gpu || "") || /^sdk_gphone/i.test(p.dev || "") || (p.dev === "OnePlus8Pro" && !p.gpu);
  const bots = { today: 0, yesterday: 0, d7: 0, d30: 0 };
  for (const doc of snap.docs) {
    const p = doc.data(), created = doc.createTime.toMillis(), d = trDate(created);
    if (d < D30) continue;
    if (isBot(p)) { bots.d30++; if (d >= D7) bots.d7++; if (d === TODAY) bots.today++; if (d === YESTERDAY) bots.yesterday++; continue; }
    const last = p.lastSeen ? p.lastSeen.toMillis() : created;
    const tracked = typeof p.ft === "number" && p.ft !== 99;   // 2.76.1+ ilk deneyim adımları
    const runs = typeof p.runs === "number" ? p.runs : Math.max(0, (p.games || 0) - 1);   // eski sürümde öğretici 1 oyun sayılıyordu
    players.push({ d, plat: p.plat || "?", ver: p.ver || "", mins: p.mins || 0, runs, ft: tracked ? p.ft : null,
      fps: p.fps || 0, mfps: p.mfps || 0, dev: p.dev || "", gpu: p.gpu || "", q: p.q || "", ram: p.ram || 0, boot: p.boot || 0,
      scr: p.scr || "", on: p.on === true, opens: p.opens || 0, r1s: p.r1s || 0, r1sc: p.r1sc || 0, r1h: p.r1h || 0, r1k: p.r1k || "",
      r1rv: p.r1rv || 0, r1os: p.r1os || 0, r1ob: p.r1ob || "", r1fh: p.r1fh, r1h10: p.r1h10,
      sg: p.sg, s1t: p.s1t || 0, msn: p.msn || 0, msl: p.msl || 0,
      np: p.np, tti: p.tti || 0, src: p.src || "", nsh: p.nsh || 0, nop: p.nop || 0, rd: p.rd || 0, lc: p.lc || 0, fb: p.fb || 0, g3: p.g3 || 0, rv: p.rv || 0, dof: p.dof || 0,
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
      next: tally(fr.filter((p) => p.r1ob).map((p) => p.r1ob)),
      medFirstHit: med(fr.filter((p) => typeof p.r1fh === "number").map((p) => p.r1fh)), medHits10: med(fr.filter((p) => typeof p.r1h10 === "number").map((p) => p.r1h10)),
      fhN: fr.filter((p) => typeof p.r1fh === "number").length, medOver: med(fr.filter((p) => p.r1os).map((p) => p.r1os)),
      quitN: quit.length, quit: tally(quit.map((p) => p.scr)), opensN: op.length, reopened: op.filter((p) => p.opens >= 2).length };
    // İlk iki şarkı ve görevler (2.77.0+): sg yazan sürümdeki yeni oyuncular.
    const sp = c.filter((p) => typeof p.sg === "number" && (p.s1t > 0 || p.sg > 0));
    const song = { n: sp.length, s1: sp.filter((p) => p.sg >= 1).length, s2: sp.filter((p) => p.sg >= 2).length,
      medTries: med(sp.filter((p) => p.sg >= 1).map((p) => p.s1t)), ms1: sp.filter((p) => p.msn >= 1).length,
      ms3: sp.filter((p) => p.msn >= 3).length, medMs: med(sp.map((p) => p.msn)), quit: tally(sp.filter((p) => !p.on && p.runs <= 2).map((p) => p.scr || "?")) };
    // Geri dönüş (2.78.0+): bugün gelenler henüz dönemeyeceği için sayılmaz.
    const rp = c.filter((p) => typeof p.np === "number"), el = rp.filter((p) => p.d < TODAY);
    const grp = (a) => ({ n: a.length, played: a.filter((p) => p.runs >= 1).length, d1: a.filter((p) => p.rd === 1).length, back: a.filter((p) => p.rd >= 1).length, claim: a.filter((p) => p.lc >= 1).length });
    const nat = rp.filter((p) => p.plat !== "web");
    const ret = { fb: [1, 2, 3, 4].map((v) => rp.filter((p) => p.fb === v).length), g3: rp.filter((p) => p.g3 === 2).length, g3Promised: rp.filter((p) => p.g3 >= 1).length,
      rv: rp.filter((p) => p.rv === 1).length, dofShown: rp.filter((p) => p.dof >= 1).length, dofYes: rp.filter((p) => p.dof === 2).length,
      n: rp.length, all: grp(el), ad: grp(el.filter((p) => p.src === "ad")), org: grp(el.filter((p) => p.src === "org")),
      other: grp(el.filter((p) => !p.src)), medTti: r1(med(rp.filter((p) => p.tti).map((p) => p.tti / 10))),
      notif: { n: nat.length, asked: nat.filter((p) => p.np >= 1).length, ok: nat.filter((p) => p.np === 2).length, denied: nat.filter((p) => p.np === 3).length, no: nat.filter((p) => p.np === 4).length,
        shown: nat.reduce((s, p) => s + p.nsh, 0), opens: nat.reduce((s, p) => s + p.nop, 0), openers: nat.filter((p) => p.nop > 0).length } };
    return { perf, first, song, ret, opened: n, played1: cnt((p) => p.runs >= 1), played3: cnt((p) => p.runs >= 3), played5: cnt((p) => p.runs >= 5), played10: cnt((p) => p.runs >= 10),
      returned: cnt((p) => p.returned), avgMins: n ? r1(c.reduce((s, p) => s + p.mins, 0) / n) : 0, medMins: med(c.map((p) => p.mins)),
      avgRuns: n ? r1(c.reduce((s, p) => s + p.runs, 0) / n) : 0, medRuns: med(c.map((p) => p.runs)),
      tracked: tr.length, tutDone: tr.filter((p) => p.ft >= 4).length, stuck, plat };
  }
  const out = { today: cohort(TODAY, TODAY), yesterday: cohort(YESTERDAY, YESTERDAY), d7: cohort(D7, TODAY), d30: cohort(D30, TODAY), reads: snap.size };
  for (const k of Object.keys(bots)) out[k].bots = bots[k];
  return out;
}

module.exports = { collectFunnel };
