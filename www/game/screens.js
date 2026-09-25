// Ekran/durum makinesi: menü ↔ mod seç ↔ mağaza ↔ oyun ↔ duraklat ↔
// oyun-sonu geçişleri. Oyun sonu reklamı (interstitial) burada tetiklenir.
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  if(id){ const el=document.getElementById('screen-'+id); if(el) el.classList.add('active'); }
  const overlayEl=document.getElementById('overlay');
  overlayEl.classList.toggle('hidden', !id);
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
function goHowto(){ state='howto'; setHud(false); showScreen('howto'); }
function goSettings(){ state='settings'; setHud(false); showScreen('settings'); syncSettings(); }
function goStats(){ state='stats'; setHud(false); showScreen('stats'); syncStats(); }
function goMode(){ state='mode'; setHud(false); showScreen('mode'); refreshDailyStatus(); renderBoostRow(); }
function goShop(){ state='shop'; setHud(false); showScreen('shop'); ensureDailyDeal(); refreshWallet(); renderDealBanner(); renderShopTab(); syncAdButtons(); }
function goBattlepass(){ state='battlepass'; setHud(false); showScreen('battlepass'); renderBattlepass(); }
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
function resumeGame(){ if(state!=='pause') return; state='play'; showScreen(null); }

let adGamesLeft = null;
function rollAdInterval(){ return 2 + Math.floor(Math.random()*2); } // 2 ya da 3 oyun

function gameOver(reason){
  state='over';
  const runScore=score, elapsedSec=elapsed/60;
  newRecord = runScore>stats.best;
  const beatenRival = (stats.rivalScore>0 && runScore>=stats.rivalScore) ? stats.rivalName : null;
  stats.best=Math.max(stats.best, runScore);
  stats.stars += session.stars; stats.games++; stats.maxLevel=Math.max(stats.maxLevel, level);
  addToLeaderboard(runScore);
  if(mode==='daily'){ stats.dailyDate=todayStr(); stats.dailyDone=true; stats.dailyScore=runScore; stats.dailyCount=(stats.dailyCount||0)+1; }
  ensureTodayQuest();
  const q=currentQuest();
  if(!stats.questDone && q.check(session,{elapsedSec, level})){
    stats.questDone=true; queueToast(t('toast_quest_done',{text:t(q.textKey)}));
  }
  checkAchievements({runScore, level, session, mode, elapsedSec});
  const scoreBonus = Math.round(Math.floor(runScore/12)*weekendMult()*(1+upgradeBonus('coinPct')));
  // Zen modunda ("sonsuz mod") ne parçacık toplama ne de bu bonus cüzdana
  // yansır — risk almadan sınırsız kasmayı önlemek için (bkz. engine.js'de
  // parçacık toplama).
  if(mode!=='zen') addStardust(scoreBonus);
  ensureSeason();
  // Bölen 8'den 40'a çıkarıldı: eskiden 2 oyunda 5. kademeye varılabiliyordu
  // (aşırı hızlı), artık ~2 oyunda 2. kademeye, ~10-12 oyunda 5. kademeye
  // ulaşılacak şekilde (bkz. SEASON_TIERS'teki yorum).
  stats.seasonXp += Math.max(1, Math.floor(runScore/40));
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
  document.getElementById('overStats').textContent=t('over_stats_line',{n:stats.games, reason:reasonText, best:stats.best.toFixed(2), level, melody:melodyText});
  document.getElementById('recordBadge').innerHTML = newRecord ? `<span class="badge">${icon('trophy')} ${t('new_record_badge')}</span>` : '';
  if(mode==='zen'){
    document.getElementById('coinsEarned').innerHTML = `${icon('moon')} ${t('zen_no_stardust')}`;
  } else {
    const totalEarned = session.coins + scoreBonus;
    document.getElementById('coinsEarned').innerHTML = `${icon('coin')} +${totalEarned} <span style="opacity:.6;font-size:12px">${t('coins_earned_detail',{pickups:session.coins, bonus:scoreBonus})}</span>`;
  }
  setHud(false); showScreen('over'); syncAdButtons();
  beep(200,0.3,'sine',0.12);
  if(!stats.premiumNoAds){
    if(adGamesLeft===null) adGamesLeft=rollAdInterval();
    adGamesLeft--;
    if(adGamesLeft<=0){
      adGamesLeft=rollAdInterval();
      setTimeout(()=>{ Ads.showInterstitial(); }, 700);
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
