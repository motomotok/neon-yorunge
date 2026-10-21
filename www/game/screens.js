// Ekran/durum makinesi: menü ↔ mod seç ↔ mağaza ↔ oyun ↔ duraklat ↔
// oyun-sonu geçişleri. Oyun sonu reklamı (interstitial) burada tetiklenir.
function showScreen(id){
  if(typeof hideLoginTip==='function') hideLoginTip();
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  if(id){ const el=document.getElementById('screen-'+id); if(el) el.classList.add('active'); }
  const overlayEl=document.getElementById('overlay');
  overlayEl.classList.toggle('hidden', !id);
  const achTip=document.getElementById('achTooltip'); if(achTip) achTip.classList.remove('show');
  // Ana menü hariç her ekranda karartma normal (okunaklı); ana menüde
  // arkadaki dönen yörünge görünsün diye çok hafif — "canlı menü".
  overlayEl.classList.toggle('live', id==='menu');
  requestAnimationFrame(()=>updateScrollCues());
}
// "Aşağıda daha fazlası var" göstergesi: kaydırılabilen ekran gövdesinin
// altında içerik kaldıkça yumuşak bir solma + zıplayan ok görünür; dibe
// gelince kaybolur. Oka dokunmak bir sayfa aşağı kaydırır.
function updateScrollCues(){
  const sc=document.querySelector('.screen.active'); if(!sc) return;
  const sb=sc.querySelector('.screenBody'); if(!sb) return;
  let cue=sc.querySelector(':scope > .scrollCue');
  if(!cue){
    cue=document.createElement('button'); cue.className='scrollCue'; cue.setAttribute('aria-label','scroll');
    cue.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
    cue.addEventListener('click', e=>{ e.stopPropagation(); sb.scrollBy({top:sb.clientHeight*0.7, behavior:'smooth'}); });
    sc.appendChild(cue);
  }
  if(!sb._cueBound){ sb._cueBound=true; sb.addEventListener('scroll', ()=>updateScrollCues(), {passive:true}); }
  const more = sb.scrollHeight - sb.scrollTop - sb.clientHeight > 12;
  sc.classList.toggle('moreBelow', more);
  cue.style.top = (sb.offsetTop + sb.clientHeight - 40)+'px';
  cue.classList.toggle('show', more);
}
// İçerik sekmeyle/yeniden çizimle değişebilir — görünür ekranı hafifçe izle.
setInterval(()=>{ if(document.querySelector('.screen.active')) updateScrollCues(); }, 500);
window.addEventListener('resize', ()=>updateScrollCues());
function setHud(on){ document.getElementById('hud').classList.toggle('show', on);
  document.getElementById('hint').style.display = on?'block':'none';
  if(!on) clearPlayOverlays(); }
// Oyundan çıkınca (oyun sonu, ana menü, mod ekranı…) oyun içi geçici
// yazı/animasyonlar menüye taşmasın: "SEVİYE 5" flaşı, başlangıçtaki
// sol/sağ parmak-izi ipuçları ve devam geri sayımı temizlenir.
function clearPlayOverlays(){
  clearTimeout(tutorialHideTimer);
  const th=document.getElementById('tutorialHint'); if(th) th.classList.remove('show');
  levelFlashT=0;
  const lf=document.getElementById('levelFlash'); if(lf) lf.style.opacity=0;
  if(typeof _hud!=='undefined') _hud.flash=0;
  if(typeof cancelResumeCountdown==='function') cancelResumeCountdown();
  if(typeof hideRiskFx==='function') hideRiskFx();
  if(typeof hideIntroCard==='function') hideIntroCard();
  if(typeof duelAbort==='function' && state!=='over') duelAbort();
}

// Her oyun başlangıcında 5 saniyeliğine sol/sağ dokunma bölgelerini
// gösteren yanıp sönen parmak-izi ipuçları — yeni oyuncu kontrolleri
// ilk bakışta anlasın diye (bkz. style.css'teki tutBlink/tutRipple, süre
// kısaldığı için daha hızlı yanıp sönecek şekilde hızlandırıldı).
let tutorialHideTimer=null;
function showTutorialHint(){
  const el=document.getElementById('tutorialHint'); if(!el) return;
  clearTimeout(tutorialHideTimer);
  el.classList.add('show');
  tutorialHideTimer=setTimeout(()=>el.classList.remove('show'), 5000);
}

// Kademeler dolduysa "Yetenekler" butonunun altındaki etiket Süpernova'ya
// davet eder (recycle'ın zamanı geldiğini oyuncuya açıkça söyler).
function syncSupernovaTag(){
  const el=document.querySelector('#screen-menu .menuUpgradeTag'); if(!el) return;
  const gain = allTiersMaxed() ? coresPreview() : 0;
  el.classList.toggle('supernova', gain>0);
  el.textContent = gain>0 ? t('menu_supernova_tag',{n:gain}) : t('menu_upgrade_tag');
}
function goMenu(){ state='menu'; setHud(false); showScreen('menu');
  if(typeof syncDuelLock==='function') syncDuelLock();
  if(typeof guideCheckMenu==='function') guideCheckMenu();
  if(stats.boostRefund>0 && stats.tutorialDone){ queueToast(t('boost_refund_toast',{n:stats.boostRefund})); stats.boostRefund=0; saveStats(); }
  ensureDailyEvent(); syncEventBanner(); syncLoginStreakDock(); syncSupernovaTag();
  // Denge 2 iadesi (bkz. data.js): bir kez söylenir.
  if(stats.balanceV2Refund){ const r=stats.balanceV2Refund; stats.balanceV2Refund=null; saveStats();
    setTimeout(()=>queueToast(t('balance_refund_toast',{notes:r.notes||0, cores:r.cores||0})), 1200); }
  document.getElementById('menuBest').textContent=t('menu_best',{n:stats.best.toFixed(2)});
  // Roguelike hissini güçlendiren iki kalıcı gösterge: "karakter seviyesi"
  // (6 yükseltme hattının toplam kademesi) ve deneme sayacı.
  document.getElementById('powerLevelLine').textContent='⚡ '+totalPowerLevel()+'/'+Object.values(META_UPGRADES).reduce((n,u)=>n+u.tiers.length,0);
  document.getElementById('runCountLine').textContent=t('run_count_line',{n:stats.games+1});
  ensureTodayQuest(); const q=currentQuest();
  document.getElementById('questLine').textContent=t('quest_line',{text:t(q.textKey)})+(stats.questDone?' ✅':'');
  ensureRival();
  // Türkçe hâl eki (turkishAccusative) sadece 'tr' dilinde geçerli bir gramer
  // kuralı — diğer dillerde düz isim kullanılıyor (bkz. i18n mimarisi).
  const rivalName = cfg.lang==='tr' ? turkishAccusative(stats.rivalName) : stats.rivalName;
  document.getElementById('rivalLine').textContent=t('rival_line',{name:rivalName, score:stats.rivalScore.toFixed(2)});
  const streakEl=document.getElementById('streakLine');
  if(streakEl){
    let txt=t('streak_line',{n:stats.loginStreak});
    if(weekendMult()>1) txt+='  ·  '+t('weekend_bonus_suffix');
    streakEl.textContent=txt;
  }
  refreshWallet();
  syncDsetChip();
  // Uygulama açıkken gece yarısı geçtiyse dünkü setin ödülü menüye dönünce
  // verilir (açılıştaki ilk kontrol main.js'te, güncelleme sorusundan sonra).
  if(_menuBootDone && stats.dsetPending) setTimeout(()=>{ if(state==='menu') dsetClaimPending(); }, 600);
  if(tutorialActive && typeof tutorialOnNav==='function') tutorialOnNav('menu');
}
let _menuBootDone=false;
function goHowto(){ state='howto'; setHud(false); showScreen('howto'); renderHowtoIcons(); }
function goSettings(){ state='settings'; setHud(false); showScreen('settings'); syncSettings(); }
function syncSettingsName(){ const el=document.getElementById('setNameVal'); if(el) el.textContent = stats.playerName || t('name_none'); }
function goStats(){ state='stats'; setHud(false); showScreen('stats'); syncStats(); }
function goMode(){ goRanking('today'); }   // eski Modlar ekranı kaldırıldı
// Mağaza her açılışta Temalar sekmesiyle ve en üstten başlar (son kalınan
// sekmeyi hatırlamaz).
function goShop(){ state='shop'; setHud(false); showScreen('shop'); shopTab='themes';
  ensureDailyEvent(); refreshWallet(); renderDealBanner(); renderShopTab(); syncAdButtons();
  const sb=document.querySelector('#screen-shop .screenBody'); if(sb) sb.scrollTop=0; }
function goBattlepass(){ state='battlepass'; setHud(false); showScreen('battlepass'); renderBattlepass(); }
function goLoginStreak(){ state='loginstreak'; setHud(false); showScreen('loginstreak'); renderLoginStreakScreen(); }
function goLanguage(){ state='language'; setHud(false); showScreen('language'); if(typeof syncLangDockButton==='function') syncLangDockButton(); }
function goUpgrades(){ state='upgrades'; setHud(false); showScreen('upgrades'); refreshWallet(); renderUpgrades(); renderUpgradesTab();
  const pb=document.getElementById('upPlayBtn'); if(pb) pb.style.display = tutorialActive ? 'none' : '';
  if(tutorialActive && typeof tutorialOnNav==='function') tutorialOnNav('upgrades');
}

// Oyunda iki oyun var: OYNA (her oyun rastgele harita; günün en iyi 3 oyunu
// ödüllü günlük sıralamaya — bkz. dailyset.js —, her oyun Global Sıralama'ya)
// ve Düello. Eski modlar
// (Klasik/Zaman/Zen) ve oyun öncesi takviyeler 2.69'da kaldırıldı.
function startGame(m,d){
  notifyRecordPlayHour();
  m = m==='duel' ? 'duel' : 'daily';
  if(AC && AC.state!=='running') acResume();
  // Zorluk seçimi yok: tek, dengeli (normal) zorluk.
  mode=m; diffKey='normal';
  diffCfg = DIFF[diffKey];
  // Normal oyun: rastgele harita; sonucu günlük sıralamaya yazılır (oyunun
  // başladığı güne). Kalıcı yetenekler, Süpernova ve Isı geçerli.
  let dsetDay=null;
  if(mode==='daily'){
    dsetDay = dsetEnsureDay().day;
    rngFn = Math.random;
  } else if(mode==='duel' && duelMatch){
    rngFn = mulberry32(duelMatch.seed);   // iki oyuncu aynı haritada
    metaOff = true;
  } else rngFn = Math.random;
  pendingBoost=null; activeBoost=null;
  resetGame(); state='play'; setHud(true); showScreen(null); showTutorialHint();
  if(dsetDay) session.dsetDay = dsetDay;
  beep(440,0.1,'sine',0.12);
  // En az bir kalıcı yükseltme alınmışsa, deneme başında kısa bir "güç
  // özeti" — oyuncu kasarak kazandığı gücü her denemede hissetsin.
  if(mode!=='zen' && mode!=='duel' && totalPowerLevel()>0){
    queueToast(t('run_start_power',{n:stats.games+1, hp:maxHp}));
  }
  // Isı mühürleri açıksa oyuncu baştan bilsin (puan çarpanı + zorluk).
  if(session.heatLevel>0) queueToast(icon('flame')+' '+t('heat_run_toast',{n:session.heatLevel, m:session.heatMult.toFixed(2)}));
}
function pauseGame(){ if(state!=='play') return; state='pause'; showScreen('pause');
  document.getElementById('zenFinishBtn').style.display = mode==='zen' ? 'block' : 'none';
  const pauseSw=document.getElementById('pauseSoundSw'); if(pauseSw) pauseSw.classList.toggle('on', cfg.sound);
  syncMusicVol(); }
// Devam: oyuncu doğrudan bir tehlikenin içine düşmesin diye kısa 3-2-1
// geri sayım; bu sırada oyun duraklatılmış kalır.
let _resumeCd=null;
function resumeGame(){
  if(state!=='pause' || _resumeCd) return;
  showScreen(null);
  let el=document.getElementById('resumeCount');
  if(!el){ el=document.createElement('div'); el.id='resumeCount'; document.body.appendChild(el); }
  let n=3;
  const tick=()=>{
    if(n<=0){ el.className=''; _resumeCd=null; if(state==='pause') state='play'; return; }
    el.textContent=n; el.className=''; void el.offsetWidth; el.className='show';
    beep(n===1?660:440,0.08,'sine',0.08);
    n--; _resumeCd=setTimeout(tick, 550);
  };
  tick();
}
function cancelResumeCountdown(){
  if(!_resumeCd) return false;
  clearTimeout(_resumeCd); _resumeCd=null;
  const el=document.getElementById('resumeCount'); if(el) el.className='';
  return true;
}
// Uygulama arka plana geçince (telefon çaldı, uygulama değişti) oyun
// otomatik duraklar; geri sayım sürüyorsa iptal edilip duraklatma ekranı döner.
function autoPause(){
  if(cancelResumeCountdown() && state==='pause'){ showScreen('pause'); return; }
  if(state==='play' && !tutorialActive) pauseGame();
}
document.addEventListener('visibilitychange', ()=>{ if(document.hidden) autoPause(); });
window.addEventListener('pagehide', autoPause);
try{
  const capApp = window.Capacitor && Capacitor.Plugins && Capacitor.Plugins.App;
  if(capApp && capApp.addListener) capApp.addListener('pause', autoPause);
}catch(e){}

let adGamesLeft = null;
const LONG_RUN_FRAMES = 45*60; // 45 sn ve üstü oyun "uzun" sayılır
const SHORT_RUN_AD_CHANCE = 0.2; // kısa oyunlardan sonra yalnız %20 ihtimalle
function rollAdInterval(){ return 2 + Math.floor(Math.random()*2); } // 2 ya da 3 oyun

// Bitiş ekranında TEK, dinamik bir "bir sonraki hedef" satırı — en motive
// edici olanı otomatik seçer: rekor çok yakınsa ("yakın ıskalama" hissi en
// güçlü motivasyon), değilse sıradaki boss dalgasına kalan puanı, o da
// uzaksa en ucuz hâlâ kilitli kozmetiğin kaç notayla açılacağını
// gösterir. Hiçbiri anlamlıysa boş döner (satır min-height ile zaten yer
// ayırdığı için boş olması başka hiçbir şeyi kaydırmaz/kapatmaz).
function nextGoalLineText(runScore, newRecord){
  if(mode==='zen') return '';
  if(!newRecord){
    const recordRemain = stats.best - runScore;
    if(recordRemain>0 && recordRemain<=Math.max(50, runScore*0.15)) return t('over_goal_record',{n:Math.ceil(recordRemain)});
  }
  const cheapest = nearestCheapCosmetic();
  if(cheapest){
    const need = cheapest.item.gate.price - (stats.notes||0);
    if(need>0) return t('over_goal_cosmetic',{n:need, name:t(cheapest.item.nameKey)});
  }
  return '';
}
function nearestCheapCosmetic(){
  let best=null;
  for(const cat in DEAL_CATEGORIES){
    DEAL_CATEGORIES[cat]().forEach(item=>{
      if(item.gate.type==='coin' && !isUnlockedItem(cat,item)){
        if(!best || item.gate.price<best.item.gate.price) best={cat, item};
      }
    });
  }
  return best;
}
function gameOver(reason){
  if(mode==='duel' && typeof duelGameOver==='function'){ duelGameOver(reason); return; }
  state='over';
  const runScore=score, elapsedSec=elapsed/60;
  // Zen (tehlikesiz, sınırsız kombo) ilerleme sistemlerinden ayrı tutulur:
  // rekor, liderlik, rakip, sezon XP'si, görev ve skor başarımları sayılmaz
  // (risksiz kasma açığı). Zen'in kendi rekoru stats.zenBest'te.
  const ranked = mode!=='zen';
  if(ranked) newRecord = runScore>stats.best;
  else { newRecord = runScore>(stats.zenBest||0); stats.zenBest=Math.max(stats.zenBest||0, runScore); }
  const beatenRival = (ranked && stats.rivalScore>0 && runScore>=stats.rivalScore) ? stats.rivalName : null;
  if(ranked) stats.best=Math.max(stats.best, runScore);
  stats.stars += session.stars; stats.games++; if(ranked) stats.maxLevel=Math.max(stats.maxLevel, level);
  if(ranked) addToLeaderboard(runScore);
  // Global Sıralama: Klasik + Günün Seti (bkz. ranking.js).
  if((mode==='classic' || mode==='daily') && !tutorialActive && typeof rkOnRun==='function') rkOnRun(runScore, session.heatLevel||0);
  let dsetRes=null;
  if(mode==='daily' && !tutorialActive) stats.scoreRuns=(stats.scoreRuns||0)+1;
  if(mode==='daily'){
    stats.dailyDate=todayStr(); stats.dailyScore=runScore; stats.dailyCount=(stats.dailyCount||0)+1;
    dsetRes = dsetRecordRun(session.dsetDay || dsetDayKey(), runScore);
  }
  ensureTodayQuest();
  const q=currentQuest();
  if(ranked && !stats.questDone && q.check(session,{elapsedSec, level})){
    stats.questDone=true; queueToast(t('toast_quest_done',{text:t(q.textKey)}));
  }
  // Zen'de yalnız skora bağlı olmayan başarımlar (ör. Zen Ustası) açılabilir.
  checkAchievements(ranked ? {runScore, level, session, mode, elapsedSec}
    : {runScore:0, level:0, session:{...session, streakMax:0, shieldSaved:false}, mode, elapsedSec});
  const scoreBonus = endScoreBonus(runScore);
  // Zen modunda ("sonsuz mod") ne parçacık toplama ne de bu bonus cüzdana
  // yansır — risk almadan sınırsız kasmayı önlemek için (bkz. engine.js'de
  // parçacık toplama).
  if(mode!=='zen') addNotes(scoreBonus);
  ensureSeason();
  // Bölen 8'den 40'a çıkarıldı: eskiden 2 oyunda 5. kademeye varılabiliyordu
  // (aşırı hızlı), artık ~2 oyunda 2. kademeye, ~10-12 oyunda 5. kademeye
  // ulaşılacak şekilde (bkz. SEASON_TIERS'teki yorum).
  if(ranked) addSeasonXp(Math.max(1, Math.floor(runScore/40)));
  ensureRival();
  saveStats();
  if(window.CloudSync) CloudSync.onGameOver();
  if(typeof maybeNudgeShop==='function') maybeNudgeShop();
  if(mode!=='zen' && window.PlayGames && PlayGames.isNative() && PlayGames.signedIn) PlayGames.submitScore(runScore);
  if(beatenRival){
    const beatenName = cfg.lang==='tr' ? turkishAccusative(beatenRival) : beatenRival;
    queueToast(t('toast_rival_beaten',{name:beatenName, name2:stats.rivalName, score:stats.rivalScore}));
  }
  let reasonText='';
  if(reason==='time') reasonText=t('reason_time');
  else if(reason==='zen') reasonText=t('reason_zen');
  document.getElementById('finalScore').textContent=runScore.toFixed(2);
  const melodyOctave=Math.floor(session.streakMax/MELODY_SCALE.length);
  const melodyText = melodyOctave>0 ? t('melody_octave',{n:melodyOctave}) : '';
  document.getElementById('overStats').textContent=t('over_stats_line',{n:stats.games, reason:reasonText, best:(ranked ? stats.best : (stats.zenBest||0)).toFixed(2), level, melody:melodyText});
  document.getElementById('recordBadge').innerHTML = (newRecord ? `<span class="badge">${icon('trophy')} ${t('new_record_badge')}</span>` : '')
    + (session.heatLevel>0 ? ` <span class="badge heat">${icon('flame')} ${t('heat_badge',{n:session.heatLevel, m:session.heatMult.toFixed(2)})}</span>` : '');
  document.getElementById('nextGoalLine').textContent = mode==='daily' ? dsetOverText(dsetRes) : nextGoalLineText(runScore, newRecord);
  document.getElementById('dsetOverBtn').style.display = mode==='daily' ? '' : 'none';
  if(mode==='zen'){
    document.getElementById('coinsEarned').innerHTML = `${icon('moon')} ${t('zen_no_stardust')}`;
  } else {
    const totalEarned = session.coins + scoreBonus;
    document.getElementById('coinsEarned').innerHTML = `${icon('coin')} +${totalEarned} <span style="opacity:.6;font-size:12px">${t('coins_earned_detail',{pickups:session.coins, bonus:scoreBonus})}</span>`;
  }
  setHud(false); showScreen('over'); syncAdButtons();
  beep(200,0.3,'sine',0.12);
  // Oyun sonu reklamı: uzun oyunlarda (45 sn+) 2-3 oyunda bir; hemen düşülen
  // kısa denemelerde yalnız %20 ihtimalle (test geri bildirimi: kısa
  // oyunlarda sürekli reklam oyuncuyu kaçırıyordu). Sayaç uzun oyunlarındır.
  // elapsed kare cinsinden (60 = 1 sn).
  const longRun = elapsed >= LONG_RUN_FRAMES;
  // Bu oyunda zaten reklam izleyip devam ettiyse oyun sonunda ikinci bir
  // reklam çıkmaz (test geri bildirimi: tek "devam" için art arda 3 reklam).
  if(!stats.premiumNoAds && !tutorialActive && !session.watchedReviveAd){
    let showAd = false;
    if(longRun){
      if(adGamesLeft===null) adGamesLeft=rollAdInterval();
      adGamesLeft--;
      if(adGamesLeft<=0){ adGamesLeft=rollAdInterval(); showAd = true; }
    } else showAd = Math.random() < SHORT_RUN_AD_CHANCE;
    // Oyuncu bu arada "Tekrar"a bastıysa reklam yeni oyunun ortasında açılmasın.
    if(showAd) setTimeout(()=>{ if(state==='over'){ window._lastInterAt=Date.now(); Ads.showInterstitial(); } }, 700);
  }
  if(tutorialActive && typeof tutorialOnGameOver==='function') tutorialOnGameOver();
}

function addToLeaderboard(scoreVal){
  stats.leaderboard.push({score:scoreVal, date:todayStr(), mode, heat:(session && session.heatLevel)||0});
  stats.leaderboard.sort((a,b)=>b.score-a.score);
  stats.leaderboard = stats.leaderboard.slice(0,5);
  saveStats();
}
