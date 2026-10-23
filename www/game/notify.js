// Geri dönüş hatırlatmaları (yerel bildirim; köprü: notify-bundle.js →
// window.NativeNotify). Sunucu yok: bildirimler telefonda önceden kurulur.
//
// Kurallar (kullanıcıyla kararlaştırıldı, 23.10.2026: "haftada en fazla 1"):
// - İki bildirim arasında EN AZ 7 GÜN (son gerçekten gösterilenden sayılır).
// - Telefonda aynı anda en fazla 1 bekleyen bildirim.
// - Oyuncu son oynadıktan 2 gün sonra; düzenli oynayan hiç bildirim görmez
//   (her açılış/arka plana geçişte bekleyen bildirim yeniden kurulur ve ileri kayar).
// - Bırakan oyuncuya en fazla 3 bildirim (haftada 1), sonra sessizlik.
// - Yalnız 10:00-21:59 arası, oyuncunun genelde oynadığı saate yakın
//   (stats.notifHour, oyun başladıkça güncellenir).
// - İzni önce DJ Vinil sorar; "Evet" denirse telefonun izin penceresi açılır
//   (iOS'ta bu pencere bir kez çıkabildiği için boşa harcanmaz). "Sonra"
//   denirse en fazla 2 kez daha, en az 5 gün arayla, günlük ödül alınınca sorulur.
const NOTIFY_PLAN = ['music', 'miss', 'last'];   // son oyundan sonraki 1., 2., 3. bildirim
const NOTIFY_AFTER_DAYS = 2, NOTIFY_GAP_DAYS = 7, NOTIFY_ID = 100;
const NOTIFY_ASK_MAX = 3, NOTIFY_ASK_GAP_DAYS = 5;
const DAY_MS = 86400000;

function notifyNative(){ return !!(window.NativeNotify && NativeNotify.isNative()); }

// Oyuncunun oynadığı saat: yumuşak ortalama (gece oynayana gece bildirim gitmez,
// 10-21 arasına sıkıştırılır).
function notifyRecordPlayHour(){
  const h = new Date().getHours();
  stats.notifHour = (typeof stats.notifHour==='number') ? Math.round(stats.notifHour*0.7 + h*0.3) : h;
}

// Saat ayarı: verilen günün oyuncu saatine (10-21 arası) yerleştirir.
function notifyAtHour(ms){
  const hour = Math.max(10, Math.min(21, typeof stats.notifHour==='number' ? stats.notifHour : 19));
  const d = new Date(ms); return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, 15);
}

// stats.notif = {at:[ms…], sent, n}:
//   at   = telefonda kurulu bekleyen bildirimlerin zamanları,
//   sent = son gösterilen bildirimin zamanı, n = son oyundan beri gösterilen sayı.
// Kurulu zamanı geçmiş olanlar gösterilmiş sayılır. Oyuncu uygulamadayken n
// sıfırlanır. Oyun kapalıyken yeniden kurulamayacağı için kalan bildirimler
// (en fazla 3) aralarında 7'şer gün olacak şekilde birlikte kurulur.
function notifyBuildPlan(){
  const now = Date.now(), s = stats.notif || {};
  const fired = (Array.isArray(s.at) ? s.at : []).filter(x => x <= now);
  if(fired.length){ s.sent = Math.max(s.sent||0, ...fired); s.n = (s.n||0) + fired.length; }
  if(!document.hidden) s.n = 0;                       // oyuncu şu an oyunda
  s.at = []; stats.notif = s;
  let at = notifyAtHour(now + NOTIFY_AFTER_DAYS*DAY_MS).getTime();
  if(s.sent) at = Math.max(at, notifyAtHour(s.sent + NOTIFY_GAP_DAYS*DAY_MS).getTime());
  if(at <= now + 3600000) at = notifyAtHour(now + DAY_MS).getTime();
  const out = [];
  for(let k = s.n||0; k < NOTIFY_PLAN.length; k++, at = notifyAtHour(at + NOTIFY_GAP_DAYS*DAY_MS).getTime()){
    const kind = NOTIFY_PLAN[k], when = new Date(at);
    let title = 'Beat Orbit', body;
    if(kind==='music'){
      // Cuma-pazara denk gelirse hafta sonu bonusunu duyurur (weekendMult, data.js).
      body = [5,6,0].includes(when.getDay()) ? t('notif_weekend') : t('notif_music_'+(1 + Math.floor(Math.random()*3)));
    } else if(kind==='miss'){ title = t('notif_title_dj'); body = t('notif_miss_'+(1 + Math.floor(Math.random()*2))); }
    else { title = t('notif_title_dj'); body = t('notif_last'); }
    out.push({id: NOTIFY_ID + k, title, body, at: when});
    s.at.push(at);
  }
  return out;
}

async function notifyReschedule(){
  if(!notifyNative()) return;
  const perm = await NativeNotify.permission();
  const on = cfg.notify !== false && perm === 'granted';
  const plan = on ? notifyBuildPlan() : [];
  if(!on && stats.notif) stats.notif.at = [];
  saveStats();
  await NativeNotify.replaceAll(plan);
}

// DJ Vinil'in sorusu. trigger: 'launch' (ilk açılış) | 'streak' (günlük ödül alındı).
async function notifyMaybeAsk(trigger){
  if(!notifyNative() || tutorialActive) return;
  const perm = await NativeNotify.permission();
  if(perm === 'granted' || perm === 'denied' || perm === 'unsupported') return;
  const a = stats.notifAsk || {count:0, last:''};
  if(a.count >= NOTIFY_ASK_MAX) return;
  if(trigger==='launch' && a.count > 0) return;
  if(trigger==='streak' && (a.count === 0 || (a.last && daysBetweenStr(a.last, todayStr()) < NOTIFY_ASK_GAP_DAYS))) return;
  stats.notifAsk = {count: a.count + 1, last: todayStr()}; saveStats();
  showDjConfirm(t('notif_ask'), async ()=>{
    const r = await NativeNotify.request();
    if(r === 'granted'){ cfg.notify = true; saveCfg(); queueToast(t('notif_on_toast')); notifyReschedule(); }
    syncNotifySetting();
  });
}

// Ayarlar > Bildirimler: açmak izin ister (gerekirse), kapatmak bekleyenleri siler.
async function toggleNotifySetting(){
  if(!notifyNative()) return;
  const want = cfg.notify === false;
  if(want){
    let perm = await NativeNotify.permission();
    if(perm !== 'granted' && perm !== 'denied') perm = await NativeNotify.request();
    if(perm !== 'granted'){ queueToast(t('notif_denied_hint')); cfg.notify = false; saveCfg(); syncNotifySetting(); return; }
  }
  cfg.notify = want; saveCfg(); syncNotifySetting(); notifyReschedule();
}
async function syncNotifySetting(){
  const row = document.getElementById('notifyRow'); if(!row) return;
  if(!notifyNative()){ row.style.display = 'none'; return; }
  row.style.display = '';
  const perm = await NativeNotify.permission();
  document.getElementById('notifySw').classList.toggle('on', cfg.notify !== false && perm === 'granted');
}

document.addEventListener('visibilitychange', ()=>{ if(document.hidden) notifyReschedule(); });
