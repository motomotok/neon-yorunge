// Beat Orbit — Google/Apple ile giriş + bulut ilerleme kaydının oyun tarafı
// (düz <script>, esbuild ile paketlenmez). window.CloudAccount
// (firebase-bundle.js, src/cloud-account.js) üzerinden Firebase ile konuşur.
// Ağ yoksa / Firebase hazır değilse her şey sessizce no-op olur — oyun
// tamamen yerel veriyle çalışmaya devam eder.
//
// Akış: oyuncu Ayarlar'dan Google ya da Apple'ı bağlar → bu cihazdaki
// ilerleme (stats) buluta kaydedilir; sonra her oyun sonunda ve uygulama arka
// plana geçerken kendiliğinden güncellenir. Yeni bir telefonda aynı hesapla
// giriş yapılınca buluttaki ilerleme bulunur ve sorulur: "buluttakini yükle"
// ya da "bu cihazdakini kullan".
const ACCOUNT_LINK_ENABLED = true;
let _acct = {uid:null, providers:[], email:''};
let _lastSavedJson = '', _saving = false;

function cloudLinked(providerId){ return (_acct.providers||[]).includes(providerId); }
function isAccountLinked(){ return cloudLinked('google.com') || cloudLinked('apple.com'); }

async function initCloudSync(){
  if(!ACCOUNT_LINK_ENABLED){
    ['linkRow','acctLinkDesc','acctDeleteRow'].forEach(id=>{ const el=document.getElementById(id); if(el) el.style.display='none'; });
    return;
  }
  // Apple ile giriş yalnız iOS'ta ve web'de gösterilir (Android'de Google yeterli).
  const plat = window.Capacitor && Capacitor.getPlatform ? Capacitor.getPlatform() : 'web';
  const ac=document.getElementById('linkAppleCard'); if(ac && plat==='android') ac.style.display='none';
  if(!window.CloudAccount){ syncLinkButtons(); return; }
  try{ _acct = await CloudAccount.status(); }catch(e){}
  syncLinkButtons();
  if(isAccountLinked()) saveProgress();
}

// Buluta giden ilerleme: tüm stats, cihaza özel/geçici alanlar hariç.
const PROGRESS_SKIP = ['dsetCache','rewardLedger','installId','lastSeenTs'];
function progressSnapshot(){
  const o={};
  for(const k in stats) if(!PROGRESS_SKIP.includes(k)) o[k]=stats[k];
  o.__savedAt = Date.now();
  return o;
}
async function saveProgress(force){
  if(!window.CloudAccount || !isAccountLinked() || _saving) return false;
  const snap = progressSnapshot();
  const cmp = JSON.stringify(Object.assign({}, snap, {__savedAt:0}));
  if(!force && cmp===_lastSavedJson) return true;
  _saving=true;
  try{ await CloudAccount.saveProgress(JSON.stringify(snap)); _lastSavedJson=cmp; return true; }
  catch(e){ return false; }
  finally{ _saving=false; }
}
function restoreProgress(p){
  const keep={installId:stats.installId, lastSeenTs:stats.lastSeenTs};
  Object.keys(stats).forEach(k=>{ delete stats[k]; });
  Object.assign(stats, p, keep);
  delete stats.__savedAt;
  saveStats();
  location.reload();
}

let _linking = false;
async function linkAccount(which){
  if(!window.CloudAccount){ queueToast(t('account_link_err_toast')); return; }
  // Giriş sürerken ikinci dokunuş "boş tuş" gibi kalmasın: oyuncuya söyle.
  if(_linking){ queueToast(t('account_linking_busy')); return; }
  _linking = true;
  const btn=document.getElementById(which==='google' ? 'linkGoogleBtn' : 'linkAppleBtn');
  const label = btn ? btn.textContent : '';
  if(btn){ btn.disabled=true; btn.textContent=t('account_linking'); }
  let res;
  try{
    // Google penceresi bazen hiç dönmüyor: 45 sn sonra vazgeç, düğme kilitli kalmasın.
    res = await Promise.race([CloudAccount.link(which),
      new Promise(r=>setTimeout(()=>r({ok:false, error:'timeout'}), 45000))]);
  } catch(e){ res = {ok:false, error:String(e && (e.code||e.message) || e)}; }
  finally{ _linking=false; if(btn){ btn.disabled=false; btn.textContent=label; } }
  if(!res.ok){
    // Hata dönse bile Firebase'de bağlanmış olabilir (eskiden oyun ancak
    // yeniden açılınca "girişli" görünüyordu): gerçek durumu oku.
    try{ _acct = await CloudAccount.status(); }catch(e){}
    syncLinkButtons();
    if(isAccountLinked()){ await saveProgress(true); queueToast(t('account_linked_toast')); return; }
    if(window.CrashReport) CrashReport.log('account link failed: '+which+' '+res.error);
    if(!/popup-closed|cancel/i.test(res.error||'')) queueToast(t('account_link_err_toast')+' ('+String(res.error||'').replace(/^auth\//,'').slice(0,40)+')');
    return;
  }
  _acct = {uid:res.uid, providers:res.providers||[], email:''};
  try{ _acct = await CloudAccount.status(); }catch(e){}
  syncLinkButtons();
  // Bu hesap başka bir cihazda daha önce kullanıldıysa: buluttaki ilerleme.
  let cloud=null;
  if(res.switched){ try{ cloud = await CloudAccount.loadProgress(); }catch(e){} }
  let p=null; try{ p = cloud && cloud.progress ? JSON.parse(cloud.progress) : null; }catch(e){}
  if(p){
    const msg = t('account_restore_msg', {best:Number(p.best||0).toFixed(2), notes:p.notes||0, gems:p.gems||0});
    showDjConfirm(msg, ()=>restoreProgress(p), {yes:t('account_restore_yes'), no:t('account_restore_no')}, ()=>{ saveProgress(true); });
    return;
  }
  await saveProgress(true);
  queueToast(t('account_linked_toast'));
}

async function deleteCloudAccount(){
  if(!window.CloudAccount) return false;
  const res = await CloudAccount.deleteAccount();
  if(!res.ok) return false;
  try{ _acct = await CloudAccount.status(); }catch(e){ _acct={uid:null, providers:[], email:''}; }
  _lastSavedJson='';
  syncLinkButtons();
  return true;
}

function syncLinkButtons(){
  [['google','linkGoogleBtn','linkGoogleStatusText','Google'],['apple','linkAppleBtn','linkAppleStatusText','Apple']].forEach(([which, btnId, statusId, label])=>{
    const linked = cloudLinked(which==='google' ? 'google.com' : 'apple.com');
    const btn=document.getElementById(btnId); if(btn) btn.style.display = linked ? 'none' : '';
    const st=document.getElementById(statusId);
    if(st) st.innerHTML = icon(which==='google' ? 'gem' : 'gem')+' '+label+(linked ? ' <span style="color:#6fe08a">'+t('account_linked_badge')+'</span>' : '');
  });
  const delRow=document.getElementById('acctDeleteRow'); if(delRow) delRow.style.display = isAccountLinked() ? '' : 'none';
  const desc=document.getElementById('acctLinkDesc');
  if(desc) desc.textContent = isAccountLinked() ? t('account_saved_desc') : t('account_link_desc');
}

// Hiç giriş yapmamış oyuncuya iki kez (5. ve 25. oyunda) nazikçe hatırlatılır.
function maybeNudgeLogin(){
  if(!ACCOUNT_LINK_ENABLED || isAccountLinked() || tutorialActive) return;
  const g=stats.games||0, n=stats.loginNudges||0;
  if(!(n===0 && g>=5)) return;   // tek sefer (DJ Vinil daha az konuşsun)
  stats.loginNudges=n+1; saveStats();
  window._djNudgeAt=Date.now();
  setTimeout(()=>{ if(state==='over') showDjConfirm(t('account_nudge_msg'), ()=>goSettings(), {yes:t('account_nudge_yes'), no:t('btn_later')}); }, 1800);
}

document.addEventListener('visibilitychange', ()=>{
  if(document.hidden){ saveProgress(); return; }
  // Google/Apple penceresinden dönünce giriş durumunu tazele.
  if(ACCOUNT_LINK_ENABLED && window.CloudAccount && !_linking){
    CloudAccount.status().then(s=>{ _acct=s; syncLinkButtons(); }).catch(()=>{});
  }
});

window.CloudSync = {
  init: initCloudSync,
  onGameOver(){ saveProgress(); maybeNudgeLogin(); },
  linkGoogle(){ linkAccount('google'); },
  linkApple(){ linkAccount('apple'); },
  deleteAccount: deleteCloudAccount,
  isLinked: isAccountLinked,
};
