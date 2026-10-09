// Geri dönüş hatırlatmaları (yerel bildirim; köprü: notify-bundle.js →
// window.NativeNotify). Sunucu yok: bildirimler telefonda önceden kurulur.
//
// Kurallar (kullanıcıyla kararlaştırıldı):
// - Günde EN FAZLA 1 bildirim, yalnız 10:00-21:59 arası; oyuncunun genelde
//   oynadığı saate yakın (stats.notifHour, oyun başladıkça güncellenir).
// - Uygulama her açılışta ve her arka plana geçişte liste baştan kurulur:
//   o gün oynayan oyuncunun eski bildirimleri kendiliğinden iptal olur.
// - 14 gün sonrasına bildirim yok (hiç dönmeyen oyuncu rahatsız edilmez).
// - İzni önce DJ Vinil sorar; "Evet" denirse telefonun izin penceresi açılır
//   (iOS'ta bu pencere bir kez çıkabildiği için boşa harcanmaz). "Sonra"
//   denirse en fazla 2 kez daha, en az 5 gün arayla, günlük ödül alınınca sorulur.
const NOTIFY_PLAN = [
  {d:1, kind:'daily'}, {d:2, kind:'music'}, {d:3, kind:'miss'}, {d:5, kind:'music'},
  {d:7, kind:'miss'}, {d:10, kind:'music'}, {d:14, kind:'last'},
];
const NOTIFY_ASK_MAX = 3, NOTIFY_ASK_GAP_DAYS = 5;

function notifyNative(){ return !!(window.NativeNotify && NativeNotify.isNative()); }

// Oyuncunun oynadığı saat: yumuşak ortalama (gece oynayana gece bildirim gitmez,
// 10-21 arasına sıkıştırılır).
function notifyRecordPlayHour(){
  const h = new Date().getHours();
  stats.notifHour = (typeof stats.notifHour==='number') ? Math.round(stats.notifHour*0.7 + h*0.3) : h;
}

function notifyBuildPlan(){
  const now = new Date(), out = [];
  const hour = Math.max(10, Math.min(21, typeof stats.notifHour==='number' ? stats.notifHour : 19));
  let musicI = 0, missI = 0, weekendUsed = false;
  NOTIFY_PLAN.forEach((p, i)=>{
    const at = new Date(now.getFullYear(), now.getMonth(), now.getDate() + p.d, hour, 15);
    let title = 'Beat Orbit', body;
    if(p.kind==='daily'){
      title = t('notif_daily_title');
      body = (stats.loginStreak||0) >= 2 ? t('notif_streak_body',{n:(stats.loginStreak||0)+1}) : t('notif_daily_body');
    } else if(p.kind==='music'){
      // Cuma-pazar günlerine denk gelen ilk davet hafta sonu bonusunu duyurur
      // (oyunda zaten var: weekendMult, data.js).
      if(!weekendUsed && [5,6,0].includes(at.getDay())){ weekendUsed = true; body = t('notif_weekend'); }
      else body = t('notif_music_'+(1 + (musicI++ % 3)));
    } else if(p.kind==='miss'){ title = t('notif_title_dj'); body = t('notif_miss_'+(1 + (missI++ % 2))); }
    else { title = t('notif_title_dj'); body = t('notif_last'); }
    out.push({id: 100 + i, title, body, at});
  });
  return out;
}

async function notifyReschedule(){
  if(!notifyNative()) return;
  const perm = await NativeNotify.permission();
  const on = cfg.notify !== false && perm === 'granted';
  await NativeNotify.replaceAll(on ? notifyBuildPlan() : []);
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
  showPurchaseConfirm('music', t('notif_title_dj'), null, async ()=>{
    const r = await NativeNotify.request();
    if(r === 'granted'){ cfg.notify = true; saveCfg(); queueToast(t('notif_on_toast')); notifyReschedule(); }
    syncNotifySetting();
  }, t('notif_ask'));
  // Simge yerine DJ Vinil'in kendisi.
  const ic = document.getElementById('pcIcon');
  if(ic) ic.innerHTML = '<img src="img/dj_vinil.png" alt="" style="width:64px;height:64px;border-radius:50%;box-shadow:0 0 0 2px #c9a46a">';
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
