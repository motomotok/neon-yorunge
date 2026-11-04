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
  document.getElementById('questLine').textContent=t('quest_line',{text:t(q.textKey)})+(stats.questDone?' ✅':' (+'+QUEST_GEMS+' 💎)');
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
  if(_menuBootDone) setTimeout(dailyWelcome, 500);
}
let _menuBootDone=false;
function goHowto(){ state='howto'; setHud(false); showScreen('howto'); renderHowtoIcons(); }
function goSettings(){ state='settings'; setHud(false); showScreen('settings'); syncSettings(); themeStripToSel(); }
// Tema şeridi yana kayar: seçili tema görünür yerde açılsın.
function themeStripToSel(){
  const g=document.getElementById('themeGrid'), s=g && g.querySelector('.theme.sel'); if(!s) return;
  const gr=g.getBoundingClientRect(), sr=s.getBoundingClientRect();
  g.scrollLeft += (sr.left+sr.width/2) - (gr.left+gr.width/2);
}
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
  if(typeof guideCheckUpgrades==='function') guideCheckUpgrades();
}

// Oyunda iki oyun var: OYNA (her oyun rastgele harita; günün en iyi 3 oyunu
// ödüllü günlük sıralamaya — bkz. dailyset.js —, her oyun Global Sıralama'ya)
// ve Düello. Eski modlar
// (Klasik/Zaman/Zen) ve oyun öncesi takviyeler 2.69'da kaldırıldı.
function startGame(m,d){
  if(typeof guideActive!=='undefined' && guideActive==='up') guideEnd();
  notifyRecordPlayHour();
  m = m==='duel' ? 'duel' : 'daily';
  if(AC && AC.state!=='running') acResume();
  // Zorluk seçimi yok: tek, dengeli (normal) zorluk.
  mode=m; diffKey='normal';
  diffCfg = m==='daily' ? warmupCfg(DIFF[diffKey], warmupLevel()) : DIFF[diffKey];
  // Normal oyun: rastgele harita; sonucu günlük sıralamaya yazılır (oyunun
  // başladığı güne). Kalıcı yetenekler, Süpernova ve Isı geçerli.
  let dsetDay=null;
  if(mode==='daily'){
    dsetDay = dsetEnsureDay().day;
    if(typeof telemetryFt==='function') telemetryFt(5);
    rngFn = Math.random;
  } else if(mode==='duel' && duelMatch){
    rngFn = mulberry32(duelMatch.seed);   // iki oyuncu aynı haritada
    metaOff = true;
  } else rngFn = Math.random;
  pendingBoost=null; activeBoost=null;
  if(mode==='daily') missionsEnsure();
  resetGame(); state='play'; setHud(true); showScreen(null); showTutorialHint();
  if(dsetDay) session.dsetDay = dsetDay;
  beep(440,0.1,'sine',0.12);
  // İlk iki şarkı: başlık kartı (şarkı no + plağın adı).
  if(session.song){
    if(session.song.n===1) stats.song1Tries=(stats.song1Tries||0)+1;
    showFlash(t('song_flash',{n:session.song.n}), 150, t('song_flash_sub',{name:t(T.nameKey), s:SONG_SECS[session.song.n]}), 'song');
  }
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

// Oyun sonu reklamı (2.75.9): ilk AD_FREE_RUNS oyunda hiç reklam yok, sonra
// 5 oyunda 2 reklam — aralık sırayla 2 ve 3 oyun (ör. 5., 8., 10., 13., 15.).
// İlk 10 oyunda en fazla 3 reklam. Sayaç kalıcı (stats.adRunsLeft).
const AD_FREE_RUNS = 3, AD_MIN_GAP_MS = 60000;

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
  if(mode==='daily' && !tutorialActive){
    stats.scoreRuns=(stats.scoreRuns||0)+1;
    if(typeof telemetryRun==='function') telemetryRun(elapsedSec, runScore);
    if(typeof telemetryFt==='function') telemetryFt(6);
    if(stats.scoreRuns>=5 && typeof trackEvent==='function') trackEvent('run_5', true);
    missionsRunEnd();
  }
  // İlk iki şarkı (bkz. data.js songNext): Şarkı 1 kazanılınca ikinci plak
  // hediye; Şarkı 2 tek denemedir (kazanırsa +nota); sonra sonsuz mod.
  const song = (mode==='daily' && !tutorialActive) ? session.song : null;
  const songWin = !!(song && song.done);
  if(song){
    if(song.n===1 && songWin){
      stats.songStage=1;
      if(!stats.owned.themes.includes(SONG_GIFT_THEME)) stats.owned.themes.push(SONG_GIFT_THEME);
      if(typeof trackEvent==='function') trackEvent('song1_done', true);
    } else if(song.n===2){
      stats.songStage=2;
      if(songWin) addNotes(SONG2_NOTES);
    }
    if((stats.scoreRuns||0) >= SONG_MAX_RUNS && stats.songStage<2) stats.songStage=2;
  }
  if(mode==='daily'){
    stats.dailyDate=todayStr(); stats.dailyScore=runScore; stats.dailyCount=(stats.dailyCount||0)+1;
    dsetRes = dsetRecordRun(session.dsetDay || dsetDayKey(), runScore);
  }
  ensureTodayQuest();
  const q=currentQuest();
  if(ranked && !stats.questDone && q.check(session,{elapsedSec, level})){
    stats.questDone=true; addGems(QUEST_GEMS);
    queueToast(t('toast_quest_done',{text:t(q.textKey)})+' +'+QUEST_GEMS+' '+icon('gem'));
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
  if(ranked) addSeasonXp(seasonXpForRun(runScore));
  ensureRival();
  saveStats();
  if(typeof telemetryRunEnd==='function') telemetryRunEnd();
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
  document.getElementById('recordBadge').innerHTML = (songWin && song.n===2 ? `<span class="badge song">${icon('music')} ${t('song_done_badge',{n:SONG2_NOTES})}</span> ` : '')
    + (newRecord ? `<span class="badge">${icon('trophy')} ${t('new_record_badge')}</span>` : '')
    + (session.heatLevel>0 ? ` <span class="badge heat">${icon('flame')} ${t('heat_badge',{n:session.heatLevel, m:session.heatMult.toFixed(2)})}</span>` : '');
  document.getElementById('nextGoalLine').textContent = song && song.n===1 && !songWin ? t('song1_lost_goal',{name:t(THEMES[SONG_GIFT_THEME].nameKey)})
    : song && song.n===2 ? t('song_endless_line')
    : mode==='daily' ? dsetOverText(dsetRes) : nextGoalLineText(runScore, newRecord);
  renderMissionsCard();
  renderTomorrowLine();
  // İlk oyunlarda oyun sonu sade: yeni oyuncunun önünde Tekrar ve görevler dışında seçenek kalabalığı olmasın.
  document.getElementById('screen-over').classList.toggle('overSimple', mode==='daily' && !tutorialActive && (stats.scoreRuns||0)<OVER_SIMPLE_RUNS);
  document.getElementById('dsetOverBtn').style.display = mode==='daily' ? '' : 'none';
  if(mode==='zen'){
    document.getElementById('coinsEarned').innerHTML = `${icon('moon')} ${t('zen_no_stardust')}`;
  } else {
    const totalEarned = session.coins + scoreBonus;
    document.getElementById('coinsEarned').innerHTML = `${icon('coin')} +${totalEarned} <span style="opacity:.6;font-size:12px">${t('coins_earned_detail',{pickups:session.coins, bonus:scoreBonus})}</span>`;
  }
  setHud(false); syncAdButtons();
  if(song && song.n===1 && songWin){ showSongWin(runScore); return; }
  showScreen('over');
  beep(200,0.3,'sine',0.12);
  // Bu oyunda zaten reklam izleyip devam ettiyse oyun sonunda ikinci bir
  // reklam çıkmaz (test geri bildirimi: tek "devam" için art arda 3 reklam).
  if(!stats.premiumNoAds && !tutorialActive && (stats.scoreRuns||0) > AD_FREE_RUNS){
    let showAd = false;
    if(stats.adRunsLeft==null){ stats.adRunsLeft=2; stats.adNextGap=3; }
    stats.adRunsLeft--;
    if(stats.adRunsLeft<=0 && !session.watchedReviveAd && Date.now()-(window._lastInterAt||0) >= AD_MIN_GAP_MS){
      showAd = true;
      stats.adRunsLeft = stats.adNextGap||2; stats.adNextGap = stats.adRunsLeft===2 ? 3 : 2;
    } else if(stats.adRunsLeft<0) stats.adRunsLeft=0;   // bekleyen reklam bir sonraki oyuna kalır
    saveStats();
    // Oyuncu bu arada "Tekrar"a bastıysa reklam yeni oyunun ortasında açılmasın.
    if(showAd) setTimeout(()=>{ if(state==='over'){ window._lastInterAt=Date.now(); Ads.showInterstitial(); } }, 700);
  }
  if(tutorialActive && typeof tutorialOnGameOver==='function') tutorialOnGameOver();
  else if(typeof guideCheckOver==='function') guideCheckOver();
  const happy = (songWin && song.n===2) || (newRecord && (stats.scoreRuns||0)>=REVIEW_MIN_RUNS);
  if(!tutorialActive) setTimeout(()=>overPrompt(happy), 1800);
}

// Şarkı 1 bitti: oyun sonu yerine kutlama + ikinci plak hediyesi. "Çal" yeni
// plağı takar ve Şarkı 2'yi hemen başlatır (müzik ve dünya birlikte değişir);
// "Sonra" normal oyun sonu ekranına geçer (görevler, Tekrar).
function showSongWin(runScore){
  const gift=THEMES[SONG_GIFT_THEME], name=t(gift.nameKey);
  document.getElementById('swSong').textContent = t(T.nameKey);
  document.getElementById('swScore').textContent = runScore.toFixed(2);
  document.getElementById('swNotes').innerHTML = document.getElementById('coinsEarned').innerHTML;
  document.getElementById('swRecImg').src = themeLabelSrc(SONG_GIFT_THEME);
  document.getElementById('swRecord').style.setProperty('--rec', gift.bg1);
  document.getElementById('swRecord').style.setProperty('--glow', gift.star);
  document.getElementById('swName').textContent = name;
  document.getElementById('swDesc').textContent = t('songwin_desc',{name});
  document.getElementById('swPlayLbl').textContent = t('songwin_play',{name});
  showScreen('songwin');
  if(typeof Music!=='undefined' && Music.preload) Music.preload(THEME_MUSIC[SONG_GIFT_THEME]);
  beep(660,0.15,'triangle',0.12); setTimeout(()=>beep(990,0.25,'sine',0.11),160);
  setTimeout(()=>overPrompt(false), 2600);
}
function songPlayNext(){
  if(state!=='over') return;
  applyTheme(SONG_GIFT_THEME);
  startGame('daily');
}
function songWinLater(){
  if(state!=='over') return;
  showScreen('over'); beep(200,0.3,'sine',0.12);
}

// Oyun sonunda yarının somut ödülü: oyuncu çıkarken geri gelmek için bir sebep görsün.
// Yalnız ilk iki hafta; sonrasında oyuncu seriyi zaten biliyor.
// Üçüncü plak (stats.song3 = {s:1 söz verildi · 2 verildi, d:söz günü, k:tema}): söz ilk
// oyun sonunda verilir, ertesi gün veya sonraki ilk gelişte menüde hediye edilir.
const SONG3_THEMES = ['urbansounds', 'lofichillhop', 'steamfunk', 'cybercircuit'];
const OVER_SIMPLE_RUNS = 3, REVIEW_MIN_RUNS = 5, FEEDBACK_RUNS = 3;
function renderTomorrowLine(){
  const el=document.getElementById('tmrLine'); if(!el) return;
  if(tutorialActive || (stats.activeDays||1)>14){ el.style.display='none'; return; }
  if(!stats.song3){
    const k=SONG3_THEMES.find(x=>!stats.owned.themes.includes(x));
    if(k){ stats.song3={s:1, d:todayStr(), k}; saveStats(); }
  }
  const s3=stats.song3;
  const r=LOGIN_STREAK_REWARDS[Math.max(1,stats.loginStreak||1)%LOGIN_STREAK_REWARDS.length], reward=loginRewardHero(r).name;
  el.innerHTML=icon('gift')+' '+(s3 && s3.s===1 && s3.d===todayStr()
    ? t('tomorrow_song',{name:t(THEMES[s3.k].nameKey), reward:reward.replace(/^\+\s*/,'')}) : t('tomorrow_line',{reward}));
  el.style.display='';
}
function song3Due(){ const s=stats.song3; return !!(s && s.s===1 && s.d<todayStr()); }
function song3Give(after){
  const s=stats.song3; s.s=2;
  if(!stats.owned.themes.includes(s.k)) stats.owned.themes.push(s.k);
  saveStats();
  const name=t(THEMES[s.k].nameKey);
  if(typeof Music!=='undefined' && Music.preload) Music.preload(THEME_MUSIC[s.k]);
  showDjConfirm(t('song3_ready',{name}), ()=>{ applyTheme(s.k); startGame('daily'); }, {yes:t('song3_play'), no:t('btn_later')}, after);
}
// Günün ilk menüsü: sözü verilen plak, sonra günlük ödül ekranı (ilk 7 gün). Ödül yalnız
// rozetle dururken oyuncu "yarın gel" sözünün karşılığını görmeden geçip gidebiliyordu.
function dailyWelcome(){
  if(state!=='menu' || tutorialActive || guideActive || !stats.tutorialDone) return false;
  const ov=document.getElementById('purchaseConfirmOverlay');
  if(ov && getComputedStyle(ov).display!=='none') return false;
  if(song3Due()){ song3Give(()=>setTimeout(dailyWelcome, 300)); return true; }
  if(!loginRewardClaimedToday() && stats.lsAutoDate!==todayStr() && (stats.scoreRuns||0)>=1 && (stats.activeDays||1)<=7){
    stats.lsAutoDate=todayStr(); saveStats(); goLoginStreak(); return true;
  }
  return false;
}
// Oyun sonunda en fazla BİR soru, sırayla: bildirim izni → mağaza puanı (mutlu an) →
// tek dokunuşluk geri bildirim → düello önerisi.
async function overPrompt(happy){
  if(state!=='over' || guideActive || tutorialActive) return;
  const ov=document.getElementById('purchaseConfirmOverlay');
  if((ov && getComputedStyle(ov).display!=='none') || (window.Ads && Ads.isShowing && Ads.isShowing())) return;
  if(typeof notifyMaybeAsk==='function' && await notifyMaybeAsk('run')) return;
  if(state!=='over') return;
  if(happy && !stats.rvAsked && window.Telemetry && Telemetry.askReview){ stats.rvAsked=1; saveStats(); Telemetry.askReview(); return; }
  if(!stats.fbAsked && (stats.scoreRuns||0)>=FEEDBACK_RUNS){ feedbackShow(); return; }
  if(!stats.duelOffered && duelUnlocked() && songNext()===0 && !(stats.duel && stats.duel.games>0)){
    stats.duelOffered=1; saveStats();
    showDjConfirm(t('duel_offer'), ()=>{
      stats.duelOffered=2; saveStats();
      if(!stats.guideDuelDone){ guideActive='duel'; guideStep='menu'; }
      goDuel();
      if(guideActive==='duel') guideOnNav('duel');
    }, {yes:t('duel_offer_yes'), no:t('btn_later')});
  }
}
// Tek dokunuşluk geri bildirim: stats.fb 1 zor · 2 sıkıcı · 3 karışık · 4 güzel (0 cevap yok).
function feedbackShow(){
  stats.fbAsked=true; saveStats();
  const ov=document.getElementById('fbOverlay');
  document.getElementById('fbQ').textContent=t('fb_q');
  ['hard','boring','confusing','good'].forEach((k,i)=>{
    const b=document.getElementById('fbBtn'+(i+1));
    b.textContent=t('fb_'+k);
    b.onclick=()=>{ stats.fb=i+1; saveStats(); ov.style.display='none'; queueToast(t('fb_thanks')); beep(700,0.06,'sine',0.1); };
  });
  const skip=document.getElementById('fbSkip');
  skip.textContent=t('btn_later');
  skip.onclick=()=>{ ov.style.display='none'; };
  ov.style.display='flex';
}
// Oyun sonu ekranındaki görev kartı (bkz. data.js MISSION_POOL): bu oyunda
// biten görev parlar ve notasını gösterir; set bittiyse bonus satırı.
function renderMissionsCard(){
  const el=document.getElementById('msCard'); if(!el) return;
  const ms=stats.mset;
  if(!ms || mode!=='daily' || tutorialActive){ el.style.display='none'; return; }
  el.style.display='';
  const fresh=(session && session.msNew) || [], r=missionReward(ms.lv);
  const done=ms.list.filter(m=>m.done).length;
  let h=`<div class="msHead"><span>${icon('target')} ${t('ms_title',{n:ms.lv})}</span><b>${done}/3</b></div>`;
  for(const m of ms.list){
    // Oyun bitti: bu oyunun değeri missionsRunEnd'de zaten eklendi.
    const p=m.done ? m.tg : MISSION_POOL[m.id].scope==='total' ? m.acc : m.best, frac=Math.min(1, p/m.tg), isNew=fresh.includes(m.id);
    h+=`<div class="msRow${m.done?' done':''}${isNew?' new':''}"><i class="msIc">${icon(m.done?'check':MISSION_POOL[m.id].icon)}</i>`
      +`<span class="msTxt">${missionText(m)}</span>`
      +(m.done ? `<b class="msVal">${isNew?'+'+r+' '+icon('coin'):icon('check')}</b>`
        : `<span class="msBar"><i style="transform:scaleX(${frac})"></i></span><b class="msVal">${Math.min(p,m.tg)}/${m.tg}</b>`)+`</div>`;
  }
  if(ms.paid) h+=`<div class="msSet">${icon('trophy')} ${t('ms_set_line',{g:MISSION_SET_GEMS})} ${icon('gem')}</div>`;
  else h+=`<div class="msFoot">${t('ms_reward_line',{n:r})} ${icon('coin')}</div>`;
  el.innerHTML=h;
}

function addToLeaderboard(scoreVal){
  stats.leaderboard.push({score:scoreVal, date:todayStr(), mode, heat:(session && session.heatLevel)||0});
  stats.leaderboard.sort((a,b)=>b.score-a.score);
  stats.leaderboard = stats.leaderboard.slice(0,5);
  saveStats();
}
