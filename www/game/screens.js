// Ekran/durum makinesi: menü ↔ mod seç ↔ mağaza ↔ oyun ↔ duraklat ↔
// oyun-sonu geçişleri. Oyun sonu reklamı (interstitial) burada tetiklenir.
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  if(id){ const el=document.getElementById('screen-'+id); if(el) el.classList.add('active'); }
  const overlayEl=document.getElementById('overlay');
  overlayEl.classList.toggle('hidden', !id);
  const achTip=document.getElementById('achTooltip'); if(achTip) achTip.classList.remove('show');
  // Ana menü hariç her ekranda karartma normal (okunaklı); ana menüde
  // arkadaki dönen yörünge görünsün diye çok hafif — "canlı menü".
  overlayEl.classList.toggle('live', id==='menu');
}
function setHud(on){ document.getElementById('hud').classList.toggle('show', on);
  document.getElementById('hint').style.display = on?'block':'none'; }

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

function goMenu(){ state='menu'; setHud(false); showScreen('menu');
  ensureDailyEvent(); syncEventBanner(); syncLoginStreakDock();
  document.getElementById('menuBest').textContent=t('menu_best',{n:stats.best.toFixed(2)});
  // Roguelike hissini güçlendiren iki kalıcı gösterge: "karakter seviyesi"
  // (6 yükseltme hattının toplam kademesi) ve deneme sayacı.
  document.getElementById('powerLevelLine').textContent='⚡ '+totalPowerLevel()+'/48';
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
  if(tutorialActive && typeof tutorialOnNav==='function') tutorialOnNav('menu');
}
function goHowto(){ state='howto'; setHud(false); showScreen('howto'); renderHowtoIcons(); }
function goSettings(){ state='settings'; setHud(false); showScreen('settings'); syncSettings(); }
function goStats(){ state='stats'; setHud(false); showScreen('stats'); syncStats(); }
function goMode(){ state='mode'; setHud(false); showScreen('mode'); refreshDailyStatus(); renderBoostRow(); }
function goShop(){ state='shop'; setHud(false); showScreen('shop'); ensureDailyEvent(); refreshWallet(); renderDealBanner(); renderShopTab(); syncAdButtons(); }
function goBattlepass(){ state='battlepass'; setHud(false); showScreen('battlepass'); renderBattlepass(); }
function goLoginStreak(){ state='loginstreak'; setHud(false); showScreen('loginstreak'); renderLoginStreakScreen(); }
function goLanguage(){ state='language'; setHud(false); showScreen('language'); if(typeof syncLangDockButton==='function') syncLangDockButton(); }
function goUpgrades(){ state='upgrades'; setHud(false); showScreen('upgrades'); refreshWallet(); renderUpgrades(); renderUpgradesTab();
  if(tutorialActive && typeof tutorialOnNav==='function') tutorialOnNav('upgrades');
}

function startGame(m,d){
  m = m || mode; d = d || diffKey;
  if(AC && AC.state==='suspended') AC.resume();
  mode=m; diffKey = (mode==='daily') ? 'normal' : d;
  diffCfg = DIFF[diffKey];
  if(mode==='daily'){
    const td=todayStr();
    if(stats.dailyDate===td && stats.dailyDone){ queueToast(t('toast_daily_done')); goMode(); return; }
    // Günün tek denemesi başlarken harcanır: yarıda bırakıp (Ana Menü /
    // uygulamayı kapatma) tekrar denemek mümkün olmasın.
    stats.dailyDate=td; stats.dailyDone=true; stats.dailyScore=0; saveStats();
    rngFn = mulberry32(dateSeed());
  } else rngFn = Math.random;
  if(pendingBoost && (stats.boosts[pendingBoost]||0)>0){
    stats.boosts[pendingBoost]--; saveStats(); activeBoost=pendingBoost;
  }
  pendingBoost=null;
  resetGame(); state='play'; setHud(true); showScreen(null); showTutorialHint();
  beep(440,0.1,'sine',0.12);
  // En az bir kalıcı yükseltme alınmışsa, deneme başında kısa bir "güç
  // özeti" — oyuncu kasarak kazandığı gücü her denemede hissetsin.
  if(mode!=='zen' && totalPowerLevel()>0){
    queueToast(t('run_start_power',{n:stats.games+1, hp:maxHp}));
  }
}
function pauseGame(){ if(state!=='play') return; state='pause'; showScreen('pause');
  document.getElementById('zenFinishBtn').style.display = mode==='zen' ? 'block' : 'none'; }
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
  const bossRemain = bossStageFor(bossNextIndex).score - runScore;
  if(bossRemain>0) return t('over_goal_boss',{n:Math.ceil(bossRemain)});
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
  if(mode==='daily'){ stats.dailyDate=todayStr(); stats.dailyDone=true; stats.dailyScore=runScore; stats.dailyCount=(stats.dailyCount||0)+1; }
  ensureTodayQuest();
  const q=currentQuest();
  if(ranked && !stats.questDone && q.check(session,{elapsedSec, level})){
    stats.questDone=true; queueToast(t('toast_quest_done',{text:t(q.textKey)}));
  }
  // Zen'de yalnız skora bağlı olmayan başarımlar (ör. Zen Ustası) açılabilir.
  checkAchievements(ranked ? {runScore, level, session, mode, elapsedSec}
    : {runScore:0, level:0, session:{...session, streakMax:0, shieldSaved:false}, mode, elapsedSec});
  const scoreBonus = Math.round(Math.floor(runScore/12)*weekendMult()*(1+upgradeBonus('coinPct')));
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
  document.getElementById('recordBadge').innerHTML = newRecord ? `<span class="badge">${icon('trophy')} ${t('new_record_badge')}</span>` : '';
  document.getElementById('nextGoalLine').textContent = nextGoalLineText(runScore, newRecord);
  if(mode==='zen'){
    document.getElementById('coinsEarned').innerHTML = `${icon('moon')} ${t('zen_no_stardust')}`;
  } else {
    const totalEarned = session.coins + scoreBonus;
    document.getElementById('coinsEarned').innerHTML = `${icon('coin')} +${totalEarned} <span style="opacity:.6;font-size:12px">${t('coins_earned_detail',{pickups:session.coins, bonus:scoreBonus})}</span>`;
  }
  setHud(false); showScreen('over'); syncAdButtons();
  beep(200,0.3,'sine',0.12);
  if(!stats.premiumNoAds && !tutorialActive){
    if(adGamesLeft===null) adGamesLeft=rollAdInterval();
    adGamesLeft--;
    if(adGamesLeft<=0){
      adGamesLeft=rollAdInterval();
      // Oyuncu bu arada "Tekrar"a bastıysa reklam yeni oyunun ortasında açılmasın.
      setTimeout(()=>{ if(state==='over') Ads.showInterstitial(); }, 700);
    }
  }
  if(tutorialActive && typeof tutorialOnGameOver==='function') tutorialOnGameOver();
}

function addToLeaderboard(scoreVal){
  stats.leaderboard.push({score:scoreVal, date:todayStr(), mode});
  stats.leaderboard.sort((a,b)=>b.score-a.score);
  stats.leaderboard = stats.leaderboard.slice(0,5);
  saveStats();
}
