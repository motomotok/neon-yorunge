// Ayarlar / mağaza / istatistik ekranlarının DOM render'ı ve satın alma
// mantığı. Oyun fiziğine dokunmaz, sadece data.js'deki kataloglar ile
// #screen-* elemanlarını senkronize eder.
function syncSettings(){
  document.getElementById('soundSw').classList.toggle('on', cfg.sound);
  const pauseSw=document.getElementById('pauseSoundSw'); if(pauseSw) pauseSw.classList.toggle('on', cfg.sound);
  document.getElementById('musicSw').classList.toggle('on', !!cfg.music);
  document.getElementById('bigSw').classList.toggle('on', cfg.bigButtons);
  document.getElementById('handSw').classList.toggle('on', cfg.leftHand);
  document.getElementById('cbSw').classList.toggle('on', cfg.colorblind);
  syncGfxSettings();
  renderThemeGrid();
  document.querySelectorAll('.theme').forEach(el=>el.classList.toggle('sel', el.dataset.key===cfg.theme));
  renderSkins();
  syncPremiumUI();
  syncPlayGamesUI();
}
function syncPlayGamesUI(){
  const card=document.getElementById('playGamesCard');
  const txt=document.getElementById('playGamesStatusText');
  const btn=document.getElementById('playGamesBtn');
  const row=document.getElementById('acctRow');
  if(!card || !btn) return;
  if(!window.PlayGames || !PlayGames.isNative()){
    card.style.display='none';
    if(row) row.classList.add('single');
    return;
  }
  card.style.display='flex';
  if(row) row.classList.remove('single');
  if(PlayGames.signedIn){ txt.innerHTML=icon('check')+' '+t('playgames_connected'); btn.textContent=t('playgames_leaderboard_btn'); }
  else { txt.innerHTML=icon('trophy')+' '+PlayGames.serviceName(); btn.textContent=t('playgames_connect'); }
}
// Satın alma butonları YALNIZ mağaza ürünü gerçekten döndürdüğünde (canlı
// fiyat geldiğinde) görünür. Ürün App Store Connect / Play Console'da yoksa
// buton "var ama hiçbir şey yapmıyor" olur — App Review bunu 2.1'den reddeder.
let _premiumLivePrice = null;
function syncPremiumUI(price){
  if(price) _premiumLivePrice = price;
  const txt=document.getElementById('premiumStatusText');
  const btn=document.getElementById('premiumBuyBtn');
  const chip=document.getElementById('premiumCard');
  if(!txt || !btn) return;
  // visibility (display değil): gfx.js menü yerleşimi chip'in konumunu okuyor.
  if(chip) chip.style.visibility = (stats.premiumNoAds || _premiumLivePrice) ? '' : 'hidden';
  if(stats.premiumNoAds){
    txt.innerHTML=icon('check')+' '+t('premium_active_short');
    btn.style.display='none';
  } else {
    txt.innerHTML=icon('gem')+' '+t('premium_label');
    btn.style.display = _premiumLivePrice ? 'inline-block' : 'none';
    btn.textContent=_premiumLivePrice || '';
  }
  syncRestoreBtn();
}
function syncRestoreBtn(){
  const b=document.getElementById('restorePurchasesBtn');
  if(b) b.style.display = (_premiumLivePrice || (typeof _seasonPassLivePrice!=='undefined' && _seasonPassLivePrice)) ? '' : 'none';
}
function showLegalPopup(){ document.getElementById('infoPopupOverlay').style.display='flex'; beep(500,0.05,'sine',0.08); }
function hideLegalPopup(){ document.getElementById('infoPopupOverlay').style.display='none'; }

let statsTab='ach';
function renderStatsTab(){
  document.querySelectorAll('#statsTabs .stab').forEach(t=>t.classList.toggle('sel', t.dataset.statTab===statsTab));
  document.getElementById('achCard').style.display = statsTab==='ach' ? 'block' : 'none';
  document.getElementById('lbCard').style.display = statsTab==='lb' ? 'block' : 'none';
  document.getElementById('leagueCard').style.display = statsTab==='league' ? 'block' : 'none';
}
// En iyi skora göre ödül plağı (müzik endüstrisindeki satış ödülleri gibi).
const STAT_AWARDS = [
  {min:0,    key:'award_demo',     cls:'demo'},
  {min:100,  key:'award_bronze',   cls:'bronze'},
  {min:250,  key:'award_silver',   cls:'silver'},
  {min:500,  key:'award_gold',     cls:'gold'},
  {min:1000, key:'award_platinum', cls:'platinum'},
  {min:2500, key:'award_diamond',  cls:'diamond'},
];
function syncStats(){
  document.getElementById('stBest').textContent=stats.best.toFixed(2);
  let ai=0; STAT_AWARDS.forEach((a,i)=>{ if(stats.best>=a.min) ai=i; });
  const aw=STAT_AWARDS[ai], nx=STAT_AWARDS[ai+1];
  const hero=document.getElementById('stHero');
  STAT_AWARDS.forEach(a=>hero.classList.remove('aw-'+a.cls)); hero.classList.add('aw-'+aw.cls);
  document.getElementById('stAwardName').textContent=t(aw.key);
  document.getElementById('stNextAward').textContent = nx ? t('stat_next_award',{name:t(nx.key), n:Math.ceil(nx.min-stats.best)}) : t('stat_max_award');
  document.getElementById('stStars').textContent=stats.stars;
  document.getElementById('stGames').textContent=stats.games;
  document.getElementById('stLevel').textContent=stats.maxLevel;
  renderAchievements();
  renderLeaderboard();
  renderRivalLeague();
  syncGlobalLeaderboardHint();
  renderStatsTab();
}
// Game Center/Play Games API'si (@openforge/capacitor-game-connect) bize
// liderlik tablosunun ham verisini vermiyor, sadece Apple/Google'ın KENDİ
// ilk-100 + senin sıran + arkadaşların'ı içeren native ekranını açan bir
// metot (showLeaderboard) veriyor — kendi özel tasarımımızda bir liste
// çizmek için bir backend/sunucu gerekir (bu projede yok). Bu yüzden en
// doğru/gerçek çözüm: o native ekrana BURADAN tek dokunuşla gitmek.
function syncGlobalLeaderboardHint(){
  const hint=document.getElementById('globalLeaderboardHint'); if(!hint) return;
  if(window.PlayGames && PlayGames.isNative()) hint.textContent = t('global_leaderboard_hint',{name:PlayGames.serviceName()});
  else hint.textContent = t('toast_playgames_native_only');
}
function renderRivalLeague(){
  const el=document.getElementById('leagueList'); if(!el) return;
  ensureRivalLeague();
  // Her rakip için en iyi skorunla aradaki mesafe bir ilerleme çubuğu;
  // henüz geçilmemiş ilk rakip "sıradaki hedef" olarak vurgulanır.
  let nextMarked=false;
  el.innerHTML = stats.rivalLeague.map(r=>{
    const beaten = stats.best>=r.score;
    const isNext = !beaten && !nextMarked; if(isNext) nextMarked=true;
    const rn = cfg.lang==='tr' ? turkishAccusative(r.name) : r.name;
    const pct = Math.max(0, Math.min(100, stats.best/r.score*100));
    return `<div class="rvRow${beaten?' beaten':''}${isNext?' next':''}">
      <div class="rvTop"><span class="rvName">${beaten?icon('check'):icon('target')} ${t('rival_beat_row',{name:rn})}</span><span class="rvScore">${r.score.toFixed(2)}</span></div>
      <div class="rvBar"><div class="rvFill" style="width:${pct.toFixed(1)}%"></div></div>
      ${isNext?`<div class="rvNextTag">${t('rival_next')}</div>`:''}
    </div>`;
  }).join('');
}
// Ayarlar'daki pena seçici kaldırıldı (penalar mağazadan seçiliyor); ızgara
// yoksa sessizce çık.
function renderSkins(){
  const grid=document.getElementById('skinGrid'); if(!grid) return; grid.innerHTML='';
  SKINS.forEach(sk=>{
    const unlocked=isUnlockedItem('skins', sk);
    const d=document.createElement('div');
    d.className='skinDot'+(cfg.skin===sk.id?' sel':'')+(unlocked?'':' locked');
    // Orb'lar vektörle (renkli daire) çizilirdi; pena'lar gerçek görsel —
    // arkaplan rengi yerine küçük bir <img> konuyor (bkz. .skinDot img CSS).
    d.innerHTML = `<img src="${sk.img}" alt="">`;
    d.title=t(sk.nameKey);
    d.addEventListener('click', ()=>onShopCardClick('skins', sk));
    grid.appendChild(d);
  });
}
function renderAchievements(){
  const grid=document.getElementById('achGrid'); grid.innerHTML='';
  let count=0;
  ACHIEVEMENTS.forEach(a=>{
    const unlocked=stats.unlocked.includes(a.id); if(unlocked) count++;
    const d=document.createElement('div');
    d.className='achItem'+(unlocked?' unlocked':'');
    d.title=t(a.descKey);
    d.innerHTML=`<div class="achDisc"><div class="ic">${icon(a.icon)}</div></div><div class="achName">${t(a.nameKey)}</div>`;
    d.addEventListener('click', ()=>showAchTooltip(d, a, unlocked));
    grid.appendChild(d);
  });
  document.getElementById('achCount').textContent=count;
  document.getElementById('achTotal').textContent=ACHIEVEMENTS.length;
  const bar=document.getElementById('achBarFill'); if(bar) bar.style.width=(count/ACHIEVEMENTS.length*100).toFixed(1)+'%';
}
let achTooltipTimer=null;
function showAchTooltip(targetEl, a, unlocked){
  const el=document.getElementById('achTooltip'); if(!el) return;
  clearTimeout(achTooltipTimer);
  const rect=targetEl.getBoundingClientRect();
  el.style.left=(rect.left+rect.width/2)+'px';
  el.style.top=rect.top+'px';
  const statusLine=(unlocked?'✅ '+t('ach_status_unlocked'):'🔒 '+t('core_locked_status'))+' · +'+a.reward+' '+icon('coin');
  el.innerHTML=`<b>${t(a.nameKey)}</b>${t(a.descKey)}<span class="rw">${statusLine}</span>`;
  el.classList.add('show');
  achTooltipTimer=setTimeout(()=>el.classList.remove('show'), 3800);
}
// Kullanıcı birden fazla başarıma hızlı hızlı bakmak isteyebilir — 3.8sn'nin
// dolmasını beklemek yerine, açık balonken ekranda başka BİR YERE (başka bir
// ikon değil) dokununca balon anında kaybolsun. Başka bir ikona basılması bu
// dinleyiciyi tetiklese de closest('.achItem') onu es geçiyor, o tıklamayı
// zaten kendi click handler'ı yeni balonu açmak için kullanıyor.
document.addEventListener('pointerdown', (e)=>{
  const tip=document.getElementById('achTooltip');
  if(!tip || !tip.classList.contains('show')) return;
  if(e.target.closest && e.target.closest('.achItem')) return;
  clearTimeout(achTooltipTimer);
  tip.classList.remove('show');
});
function renderLeaderboard(){
  const el=document.getElementById('lbList');
  if(!stats.leaderboard.length){ el.innerHTML=`<div class="row"><span class="k">${t('no_records')}</span></div>`; return; }
  // Müzik listesi gibi: büyük sıra numarası, minik plak, tarih · mod, skor.
  el.innerHTML = stats.leaderboard.map((e,i)=>`<div class="lbRow${i===0?' top':''}"><span class="lbRank">${i+1}</span><span class="lbDisc"></span><span class="lbMeta">${e.date} · ${modeLabel(e.mode)}</span><span class="lbScore">${e.score.toFixed(2)}</span></div>`).join('');
}
function refreshDailyStatus(){
  const td=todayStr();
  const done = stats.dailyDate===td && stats.dailyDone;
  document.getElementById('dailyStatus').textContent = done ? t('mode_daily_played',{score:stats.dailyScore.toFixed(2)}) : t('mode_daily_desc');
}

function refreshWallet(){
  const v = stats.notes||0;
  ['walletHud','shopWallet','menuWallet','upgradesWallet'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.textContent=v;
  });
  const g = stats.gems||0;
  ['shopGemWallet','menuGemWallet'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.textContent=g;
  });
}

function getEquipped(category){
  if(category==='themes') return cfg.theme;
  if(category==='skins') return cfg.skin;
  if(category==='trails') return cfg.trail;
  if(category==='suns') return cfg.sun;
  if(category==='rings') return cfg.ringStyle;
}
function setEquipped(category, id){
  if(category==='themes'){ applyTheme(id); return; }
  if(category==='skins') cfg.skin=id;
  else if(category==='trails') cfg.trail=id;
  else if(category==='suns') cfg.sun=id;
  else if(category==='rings') cfg.ringStyle=id;
  saveCfg();
}
function purchase(category, item){
  if(item.gate.type!=='coin') return false;
  const price = effectivePrice(category, item);
  if(stats.notes < price){
    queueToast(t('insufficient_stardust',{n:price-stats.notes}));
    beep(200,0.12,'square',0.1); return false;
  }
  stats.notes -= price;
  stats.owned[category].push(item.id);
  saveStats(); refreshWallet();
  queueToast(t('purchased_toast',{name:t(item.nameKey)}));
  beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
  return true;
}
// Elmas (premium para birimi) ile satın alma — purchase()'ın elmas eşdeğeri.
// gemPrice ayrı parametre: 'gem' gate'lerde item.gate.price, 'coin_or_gem'
// gate'lerde item.gate.gemPrice kullanılır (çağıran taraf belirler).
function purchaseWithGems(category, item, gemPrice){
  if(stats.gems < gemPrice){
    queueToast(t('insufficient_gems',{n:gemPrice-stats.gems}));
    beep(200,0.12,'square',0.1); return false;
  }
  stats.gems -= gemPrice;
  stats.owned[category].push(item.id);
  saveStats(); refreshWallet();
  queueToast(t('purchased_toast',{name:t(item.nameKey)}));
  beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
  return true;
}
function renderDealBanner(){
  const el=document.getElementById('dealBanner'); if(!el) return;
  const deal=activeDeal();
  el.innerHTML = deal ? (icon('flame')+' '+t('deal_banner',{name:t(deal.item.nameKey), pct:Math.round(DEAL_DISCOUNT*100)})) : '';
}
// Ana menüdeki "Günün Olayı" şeridi — mağazayı hiç açmadan bugün ne
// olduğunu gösterir (indirim / ×2 nota / ×2 Sezon XP).
function syncEventBanner(){
  const chip=document.getElementById('menuEventChip'); if(!chip) return;
  const iconEl=document.getElementById('menuEventIcon'), textEl=document.getElementById('menuEventText');
  if(stats.eventType==='notes2x'){
    chip.style.display='flex'; chip.className='menuEventChip evNotes';
    iconEl.innerHTML=icon('coin'); textEl.textContent=t('event_banner_stardust2x');
  } else if(stats.eventType==='xp2x'){
    chip.style.display='flex'; chip.className='menuEventChip evXp';
    iconEl.innerHTML=icon('ticket'); textEl.textContent=t('event_banner_xp2x');
  } else {
    const deal=activeDeal();
    if(deal){
      chip.style.display='flex'; chip.className='menuEventChip evDeal';
      iconEl.innerHTML=icon('flame');
      textEl.textContent=t('event_banner_deal',{name:t(deal.item.nameKey), pct:Math.round(DEAL_DISCOUNT*100)});
    } else { chip.style.display='none'; }
  }
}
// 14 Günlük Giriş Serisi — ödül artık otomatik verilmiyor, kullanıcı ana
// menüdeki ışıklı "Seri" butonuna basıp bu ekranı açmalı ve BUGÜNÜN
// kartına dokunmalı (bkz. claimLoginReward). Diğer 13 kart, kilitli olsa
// bile, "gün gün ne geliyor" görünsün diye gerçek ikon+etiketiyle önizleniyor
// (kullanıcı talebi) — sadece kart soluk/tıklanamaz kalıyor, içerik gizlenmiyor.
function loginRewardIconLabel(r){
  if(r.type==='notes') return {ic:icon('coin'), label:'+'+r.amount};
  if(r.type==='boost'){ const b=BOOSTS.find(x=>x.id===r.id); return {ic:icon(b?b.icon:'shield'), label:'×'+r.amount}; }
  if(r.type==='cosmetic') return {ic:icon('gift'), label:t('login_gift_badge')};
  return {ic:icon('gem'), label:t('login_special_badge')}; // skin (final gün)
}
function loginRewardDesc(r){
  if(r.type==='notes') return t('login_toast_stardust',{amount:r.amount});
  if(r.type==='boost'){ const b=BOOSTS.find(x=>x.id===r.id); return t('login_toast_boost',{amount:r.amount, name:b?t(b.nameKey):''}); }
  if(r.type==='cosmetic') return t('login_toast_cosmetic',{name:t(cosmeticItemName(r.cat,r.id))});
  return t('login_toast_skin');
}
function cosmeticItemName(cat, id){
  const list = cat==='trails'?TRAILS : cat==='rings'?RINGSTYLES : cat==='suns'?SUNS : SKINS;
  const item = list.find(i=>i.id===id);
  return item ? item.nameKey : '';
}
// Ödülün büyük görseli (plak etiketinde) ve adı.
function loginRewardHero(r){
  if(r.type==='notes') return {ic:`<img src="img/items/coin.png" alt="">`, amt:'+'+r.amount, name:t('login_toast_stardust',{amount:r.amount}).replace(/^[^:：]*[:：]\s*/,'')};
  if(r.type==='boost'){ const b=BOOSTS.find(x=>x.id===r.id); return {ic:icon(b?b.icon:'shield'), amt:'×'+r.amount, name:(b?t(b.nameKey):'')+' ×'+r.amount}; }
  if(r.type==='cosmetic') return {ic:icon('gift'), amt:'', name:t(cosmeticItemName(r.cat,r.id))};
  const sk=SKINS.find(x=>x.id===r.id);
  return {ic:sk&&sk.img?`<img src="${sk.img}" alt="">`:icon('gem'), amt:'', name:t(sk?sk.nameKey:'login_special_badge')};
}
let _lsTimer=null;
function renderLoginStreakScreen(){
  const A=document.getElementById('lsSideA'), B=document.getElementById('lsSideB'); if(!A||!B) return;
  const N=LOGIN_STREAK_REWARDS.length, todayDay=loginCycleDay(), claimed=loginRewardClaimedToday();
  const r=LOGIN_STREAK_REWARDS[todayDay-1], hero=loginRewardHero(r);
  document.getElementById('lsChip').innerHTML=icon('flame')+' '+t('login_streak_chip',{n:Math.max(1,stats.loginStreak||1)});
  document.getElementById('lsRewardIc').innerHTML=claimed?icon('check'):hero.ic;
  document.getElementById('lsRewardAmt').textContent=claimed?'':hero.amt;
  document.getElementById('lsTodayCap').textContent=claimed?t('login_claimed_today'):t('login_today_reward')+' · '+t('login_day_of_seven',{n:todayDay,total:N});
  document.getElementById('lsRewardName').textContent=claimed?'':hero.name;
  const wrap=document.getElementById('lsDiscWrap');
  wrap.classList.toggle('ready',!claimed); wrap.classList.toggle('done',claimed);
  const done = todayDay-1+(claimed?1:0);
  const fg=document.getElementById('lsRingFg'), C=2*Math.PI*56;
  fg.style.strokeDasharray=C; fg.style.strokeDashoffset=C*(1-done/N);
  document.getElementById('lsClaimBtn').style.display=claimed?'none':'';
  updateLoginNext();
  clearInterval(_lsTimer);
  if(claimed) _lsTimer=setInterval(()=>{ if(state!=='loginstreak'){ clearInterval(_lsTimer); return; } updateLoginNext(); },1000);
  A.innerHTML=''; B.innerHTML='';
  LOGIN_STREAK_REWARDS.forEach((rw,i)=>{
    const d=i+1;
    const st = (d<todayDay || (d===todayDay && claimed)) ? 'claimed' : d===todayDay ? 'today' : 'locked';
    const {ic,label}=loginRewardIconLabel(rw);
    const el=document.createElement('div');
    el.className='lsDay '+st+(d%7===0?' milestone':'');
    el.innerHTML=`<div class="lsDayNum">${d}</div><div class="lsMini"><span>${st==='claimed'?icon('check'):ic}</span></div><div class="lsDayLbl">${label}</div>`;
    if(st==='today') el.addEventListener('click', claimLoginFromScreen);
    else el.addEventListener('click', ()=>showLoginTip(el, d, rw, st));
    (d<=7?A:B).appendChild(el);
  });
}
// Takvimdeki bir güne dokununca üstünde küçük bir balon: o günün ödülü ne?
// Kozmetik hediyeler günü gelene kadar sürpriz kalır.
let _lsTipT=null;
function showLoginTip(el, day, r, st){
  let tip=document.getElementById('lsTip');
  if(!tip){ tip=document.createElement('div'); tip.id='lsTip'; tip.className='lsTip'; document.body.appendChild(tip); }
  const surprise = r.type==='cosmetic' && st!=='claimed';
  const txt = surprise ? t('login_tip_surprise') : loginRewardHero(r).name;
  tip.innerHTML=`<b>${t('login_tip_day',{n:day})}</b><span></span>`;
  tip.querySelector('span').textContent=txt;
  const b=el.querySelector('.lsMini').getBoundingClientRect(), cx=b.left+b.width/2;
  tip.style.display='block';
  const hw=tip.offsetWidth/2, x=Math.max(hw+8, Math.min(window.innerWidth-hw-8, cx));
  tip.style.left=x+'px'; tip.style.top=(b.top-8)+'px';
  tip.style.setProperty('--ax', Math.max(-hw+16, Math.min(hw-16, cx-x))+'px'); tip.style.animation='none'; void tip.offsetWidth; tip.style.animation='';
  document.querySelectorAll('.lsDay.peek').forEach(e=>e.classList.remove('peek')); el.classList.add('peek');
  beep(520,0.04,'sine',0.06);
  clearTimeout(_lsTipT); _lsTipT=setTimeout(hideLoginTip, 2600);
}
function hideLoginTip(){
  const tip=document.getElementById('lsTip'); if(tip) tip.style.display='none';
  document.querySelectorAll('.lsDay.peek').forEach(e=>e.classList.remove('peek'));
}
document.addEventListener('pointerdown', e=>{ if(!e.target.closest || !e.target.closest('.lsDay')) hideLoginTip(); });
function updateLoginNext(){
  const el=document.getElementById('lsNext'); if(!el) return;
  if(!loginRewardClaimedToday()){ el.textContent=''; return; }
  const now=gameNow(), mid=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
  const s=Math.max(0,Math.floor((mid-now)/1000)), hh=String(Math.floor(s/3600)).padStart(2,'0'), mm=String(Math.floor(s%3600/60)).padStart(2,'0'), ss=String(s%60).padStart(2,'0');
  el.textContent=t('login_next_in',{t:`${hh}:${mm}:${ss}`});
}
function claimLoginFromScreen(){
  const result=claimLoginReward(); if(!result) return;
  const wrap=document.getElementById('lsDiscWrap');
  wrap.classList.add('claiming');
  queueToast(icon('gift')+' '+loginRewardDesc(result.reward));
  beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12); beep(1300,0.12,'sine',0.1);
  syncLoginStreakDock();
  setTimeout(()=>{ wrap.classList.remove('claiming'); renderLoginStreakScreen(); }, 900);
}
document.getElementById('lsClaimBtn').addEventListener('click', e=>{ e.stopPropagation(); claimLoginFromScreen(); });
// Nasıl Oynanır ekranındaki ikonlar artık boş renkli daireler değil,
// render.js'teki drawItem()'ın çizdiği GERÇEK oyun-içi şekiller (üçgen/
// kare/beşgen/altıgen/yıldız siluetleri) — ama TAMAMEN AYRI, kendi küçük
// canvas'larına çiziliyor. Ana oyun render döngüsüne (ctx/render.js) hiç
// dokunmuyor, bu yüzden gameplay'i bozma riski yok; sadece görsel dilin
// birebir aynısını küçük ölçekte tekrarlıyor.
const HOWTO_ICON_SHAPES = {
  star:        {kind:'itemImg', key:'note'},
  diamond:     {kind:'itemImg', key:'clef'},
  particle:    {kind:'itemImg', key:'coin'},
  heartItem:   {kind:'itemImg', key:'heart'},
  pwShield:    {kind:'itemImg', key:'shield'},
  pwSlow:      {kind:'itemImg', key:'slow'},
  pwMagnet:    {kind:'itemImg', key:'magnet'},
  pwMult:      {kind:'itemImg', key:'mult'},
  hazard:      {kind:'img', monster:'glitch_red'},
  hazardJump:  {kind:'img', monster:'glitch_blue'},
  hazardBomb:  {kind:'img', monster:'glitch_green'},
  hazardPull:  {kind:'img', monster:'glitch_yellow'},
  hazardTwin:  {kind:'img', monster:'glitch_purple'},
  hazardPulse: {kind:'img', monster:'glitch_orange'},
  hazardCreep: {kind:'img', monster:'glitch_pink'},
};
function drawHowtoIconShape(ctx2, type, size){
  const cfgS = HOWTO_ICON_SHAPES[type]; if(!cfgS) return;
  const cx=size/2, cy=size/2, R=size*0.3;
  ctx2.clearRect(0,0,size,size);
  if(cfgS.kind==='note'){
    ctx2.save(); ctx2.translate(cx,cy);
    ctx2.fillStyle=cfgS.color;
    ctx2.beginPath(); ctx2.ellipse(0,R*0.05,R*0.95,R*0.72,-0.32,0,7); ctx2.fill();
    ctx2.strokeStyle=cfgS.color; ctx2.lineWidth=Math.max(1.4,R*0.26); ctx2.lineCap='round';
    ctx2.beginPath(); ctx2.moveTo(R*0.78,-R*0.15); ctx2.lineTo(R*0.78,-R*2.0); ctx2.stroke();
    ctx2.restore();
  } else if(cfgS.kind==='diamond'){
    // Oyun içiyle aynı sol anahtarı (render.js drawTrebleClef).
    drawTrebleClef(ctx2, cx, cy, size*0.86, cfgS.color);
  } else if(cfgS.kind==='coin'){
    ctx2.fillStyle='#2a1a10'; ctx2.beginPath(); ctx2.arc(cx,cy,R,0,7); ctx2.fill();
    ctx2.strokeStyle='rgba(255,255,255,.18)'; ctx2.lineWidth=1;
    ctx2.beginPath(); ctx2.arc(cx,cy,R*0.8,0,7); ctx2.stroke();
    ctx2.fillStyle='#ffb454'; ctx2.beginPath(); ctx2.arc(cx,cy,R*0.58,0,7); ctx2.fill();
    ctx2.fillStyle='#c47a1f'; ctx2.beginPath(); ctx2.arc(cx,cy,R*0.3,0,7); ctx2.fill();
    ctx2.fillStyle='#0a0604'; ctx2.beginPath(); ctx2.arc(cx,cy,R*0.1,0,7); ctx2.fill();
  } else if(cfgS.kind==='heart'){
    const r=R*1.15;
    ctx2.save(); ctx2.translate(cx,cy); ctx2.fillStyle=cfgS.color;
    ctx2.beginPath();
    ctx2.moveTo(0,r*0.32);
    ctx2.bezierCurveTo(0,-r*0.28, -r*1.05,-r*0.28, -r*1.05,r*0.32);
    ctx2.bezierCurveTo(-r*1.05,r*0.82, -r*0.35,r*1.05, 0,r*1.35);
    ctx2.bezierCurveTo(r*0.35,r*1.05, r*1.05,r*0.82, r*1.05,r*0.32);
    ctx2.bezierCurveTo(r*1.05,-r*0.28, 0,-r*0.28, 0,r*0.32);
    ctx2.closePath(); ctx2.fill();
    ctx2.restore();
  } else if(cfgS.kind==='poly'){
    const rr = (cfgS.big ? R*1.5 : R)*1.12;
    ctx2.fillStyle=cfgS.color; ctx2.beginPath();
    for(let i=0;i<cfgS.sides;i++){
      const a=cfgS.rot+i*Math.PI*2/cfgS.sides;
      const xx=cx+Math.cos(a)*rr, yy=cy+Math.sin(a)*rr;
      i?ctx2.lineTo(xx,yy):ctx2.moveTo(xx,yy);
    }
    ctx2.closePath(); ctx2.fill();
  } else if(cfgS.kind==='spike'){
    const outer=R*cfgS.outer, inner=R*cfgS.inner, pts=cfgS.pts;
    ctx2.fillStyle=cfgS.color; ctx2.beginPath();
    for(let i=0;i<pts*2;i++){
      const rr=i%2?inner:outer; const a=i*Math.PI/pts-Math.PI/2;
      const xx=cx+Math.cos(a)*rr, yy=cy+Math.sin(a)*rr;
      i?ctx2.lineTo(xx,yy):ctx2.moveTo(xx,yy);
    }
    ctx2.closePath(); ctx2.fill();
  } else if(cfgS.kind==='img'){
    const img = MONSTER_IMG[cfgS.monster];
    if(img && img.complete && img.naturalWidth>0) ctx2.drawImage(img, cx-R*1.6, cy-R*1.6, R*3.2, R*3.2);
  } else if(cfgS.kind==='itemImg'){
    const img = ITEM_IMG[cfgS.key];
    if(imgReady(img)) ctx2.drawImage(img, cx-R*1.5, cy-R*1.5, R*3, R*3);
  }
}
function renderHowtoIcons(){
  document.querySelectorAll('.howtoIcon').forEach(cv=>{
    drawHowtoIconShape(cv.getContext('2d'), cv.dataset.type, cv.width);
  });
}
// Ana menü rozetleri (Clash Royale tarzı): alınacak bir şey varsa butonun
// köşesinde kırmızı rozet — oyuncu orada bekleyen bir ödül olduğunu anlasın.
function setDockBadge(btn, text){
  if(!btn) return;
  let b=btn.querySelector('.nBadge');
  if(!text){ if(b) b.remove(); btn.classList.remove('hasReward'); return; }
  if(!b){ b=document.createElement('span'); b.className='nBadge'; btn.appendChild(b); }
  if(b.textContent!==String(text)){ b.textContent=text; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
  b.classList.toggle('txt', typeof text==='string' && text.length>2);
  btn.classList.add('hasReward');
}
function syncLoginStreakDock(){
  setDockBadge(document.getElementById('loginStreakDockBtn'), loginRewardClaimedToday() ? null : t('badge_claim'));
  const n = typeof seasonClaimableCount==='function' ? seasonClaimableCount() : 0;
  setDockBadge(document.getElementById('seasonDockBtn'), n>0 ? String(n) : null);
}

let pendingPurchase = null;
// price=null olursa fiyat satırı gizlenir ve varsayılan "Satın almak
// istiyor musun?" yerine `message` kullanılır — bu diyalog satın almanın
// yanı sıra genel "emin misin?" onayları için de (bkz. resetProgression)
// kullanılabilsin diye.
function showPurchaseConfirm(iconKey, name, price, onYes, message, priceIcon){
  pendingPurchase = onYes;
  document.getElementById('pcIcon').innerHTML = icon(iconKey);
  document.getElementById('pcName').textContent = name;
  document.getElementById('pcMessage').textContent = message || t('purchase_confirm_default');
  const priceEl=document.getElementById('pcPrice');
  if(price==null){ priceEl.style.display='none'; }
  else { priceEl.style.display='block'; priceEl.innerHTML = icon(priceIcon||'coin')+' '+price; }
  document.getElementById('purchaseConfirmOverlay').style.display = 'flex';
}
function hidePurchaseConfirm(){
  document.getElementById('purchaseConfirmOverlay').style.display = 'none';
  pendingPurchase = null;
}

// Elmas paketlerinin (gerçek para, IAP) canlı fiyatı — gem-shop.js'in
// register() çağrısındaki onPriceReady callback'i (main.js) burayı doldurur.
// Mağaza kurulmadan/tarayıcıda hep boş kalır, kartlar fallbackPrice gösterir.
const _gemLivePrices = {};
function setGemLivePrice(productId, price){ _gemLivePrices[productId]=price; syncGemTab(); syncShopIfOpen(); }
// Elmas sekmesi yalnız mağaza en az bir elmas paketini döndürdüyse görünür
// (bkz. syncPremiumUI'deki App Review notu).
function syncGemTab(){
  const tab=document.querySelector('#shopTabs .stab[data-tab="gems"]');
  const any=Object.keys(_gemLivePrices).length>0;
  if(tab) tab.style.display = any ? '' : 'none';
  if(!any && typeof shopTab!=='undefined' && shopTab==='gems') shopTab='themes';
}
// Elmasla satın alma onayı — 'gem' gate'ler İÇİN kart tıklaması bunu çağırır;
// 'coin_or_gem' gate'ler için ise kartın kendi içindeki ayrı "Elmas" rozeti
// (bkz. renderShopGrid/renderThemeGrid) stopPropagation ile doğrudan bunu
// tetikler — ana kart tıklaması o durumda Nota fiyatını kullanmaya devam eder.
function confirmGemPurchase(category, item, gemPrice){
  showPurchaseConfirm('palette', t(item.nameKey), gemPrice, ()=>{
    if(purchaseWithGems(category,item,gemPrice)) setEquipped(category, item.id);
    renderSkins(); renderThemeGrid(); syncShopIfOpen();
  }, null, 'gem');
}
function onShopCardClick(category, item){
  const unlocked = isUnlockedItem(category, item);
  if(!unlocked){
    if(item.gate.type==='coin' || item.gate.type==='coin_or_gem'){
      showPurchaseConfirm('palette', t(item.nameKey), effectivePrice(category,item), ()=>{
        if(purchase(category,item)) setEquipped(category, item.id);
        renderSkins(); renderThemeGrid(); syncShopIfOpen();
      });
    } else if(item.gate.type==='gem'){
      confirmGemPurchase(category, item, item.gate.price);
    } else if(item.gate.type==='seasonpass'){
      queueToast(t('locked_seasonpass_toast',{name:t(item.nameKey)}));
      beep(200,0.1,'square',0.1);
    } else if(item.gate.type==='streak'){
      queueToast(t('locked_streak_toast',{name:t(item.nameKey)}));
      beep(200,0.1,'square',0.1);
    } else {
      const ach=ACHIEVEMENTS.find(a=>a.id===item.gate.id);
      queueToast(t('locked_achievement_toast',{name:t(item.nameKey), desc:ach?t(ach.descKey):''}));
      beep(200,0.1,'square',0.1);
    }
  } else {
    setEquipped(category, item.id);
    // Zaten sahip olunan bir kozmetiği tekrar takarken (en sık yapılan işlem,
    // örn. izler arasında gezinme) tüm #shopGrid'i yıkıp yeniden kurmuyoruz —
    // bu, kaydırma sırasında kartların anlık "kayması"na yol açıyordu. Sadece
    // etkilenen kartların rozetini/sınıfını güncelliyoruz.
    if(category==='skins') renderSkins();
    if(category==='themes') renderThemeGrid();
    updateEquippedBadges(category);
  }
}
function syncShopIfOpen(){ if(state==='shop') renderShopTab(); }
// #shopGrid'i baştan kurmadan sadece "takılı" rozetini günceller — halihazırda
// sahip olunan bir kozmetiği tekrar seçerken (mağaza açıkken) tüm kartları
// yıkıp yeniden oluşturmanın kaydırma pozisyonunda/yerleşiminde yarattığı
// görsel "kayma"yı önler. Kilit/fiyat durumu değişmiyorsa (satın alma değil,
// sahip olunanı takma) bu yeterli.
function updateEquippedBadges(category){
  if(state!=='shop' || shopTab!==category) return;
  const equippedId=getEquipped(category);
  document.querySelectorAll('#shopGrid .shopCard').forEach(card=>{
    if(card.classList.contains('locked')) return;
    const isEq = card.dataset.id===equippedId;
    card.classList.toggle('equipped', isEq);
    const priceEl=card.querySelector('.price');
    if(priceEl) priceEl.innerHTML = isEq ? `${icon('check')} ${t('equipped_badge')}` : t('owned_badge');
  });
}

let shopTab='themes';
function shopItemsFor(cat){
  let items;
  if(cat==='themes') items = Object.keys(THEMES).map(k=>Object.assign({id:k}, THEMES[k]));
  else if(cat==='skins') items = SKINS;
  else if(cat==='trails') items = TRAILS;
  else if(cat==='suns') items = SUNS;
  else if(cat==='rings') items = RINGSTYLES;
  else return [];
  // Geçmiş/gelecek sezonların kozmetikleri, o an sahip olunmuyorsa listeden
  // tamamen kalkar — bir sezon kaçırıldıysa ödülü bir daha kimse göremez/
  // alamaz, bu da erken oynayanlar için kalıcı bir nadirlik yaratır.
  const curSeason = activeSeason().id;
  return items.filter(it=> it.gate.type!=='seasonpass' || it.gate.season===curSeason || isUnlockedItem(cat,it));
}
function swatchHtml(category, item){
  if(category==='themes'){
    return `<div class="themeLabelPreview"><img src="${themeLabelSrc(item.id)}" alt=""></div><div class="swatch" style="justify-content:center">${['star','gold','peril','player'].map(k=>`<span style="background:${item[k]}"></span>`).join('')}</div>`;
  }
  if(category==='skins'){
    return `<div class="skinPreview penaPreview"><img src="${item.img}" alt=""></div>`;
  }
  if(category==='trails'){
    return `<div class="trailPreview">${[0,1,2,3,4].map(i=>`<i style="${trailDotStyle(item.id,i)}"></i>`).join('')}</div>`;
  }
  if(category==='suns') return `<div class="sunPreview ${item.id}"></div>`;
  if(category==='rings') return `<div class="ringPreview ${item.id}"></div>`;
  return '';
}
function trailDotStyle(id,i){
  const op=1-i*0.16;
  if(id==='pixel') return `background:var(--accent-2,#a97bff);opacity:${op};border-radius:2px;width:${9-i}px;height:${9-i}px;`;
  if(id==='rainbow') return `background:hsl(${i*60},85%,65%);opacity:${op};border-radius:50%;width:${9-i}px;height:${9-i}px;`;
  if(id==='sparkle') return `background:#fff;opacity:${op*(i%2?0.5:1)};border-radius:50%;width:${6+((i*7)%5)}px;height:${6+((i*7)%5)}px;`;
  if(id==='comet') return `background:linear-gradient(90deg,var(--accent-2,#a97bff),transparent);opacity:${op};width:${16-i*2}px;height:6px;border-radius:4px;`;
  if(id==='ribbon') return `background:var(--accent-2,#a97bff);opacity:${op};border-radius:50%;width:${8-i}px;height:${8-i}px;transform:translateY(${(i%2?4:-4)}px);`;
  if(id==='quantum') return `background:${i%2?'#7fe8ff':'var(--accent-2,#a97bff)'};opacity:${op};border-radius:50%;width:${9-i}px;height:${9-i}px;`;
  if(id==='phantom') return `background:#eaf2ff;opacity:${op*0.5};border-radius:50%;width:${10-i}px;height:${10-i}px;`;
  if(id==='season1_trail') return `background:${i%2?'#fff6c8':'#54e0ff'};opacity:${op};border-radius:50%;width:${9-i}px;height:${9-i}px;box-shadow:0 0 4px currentColor;`;
  if(id==='season2_trail') return `background:hsl(${28+i*6},95%,${Math.max(35,60-i*4)}%);opacity:${op};border-radius:50%;width:${9-i}px;height:${9-i}px;`;
  return `background:var(--accent-2,#a97bff);opacity:${op};border-radius:50%;width:${9-i}px;height:${9-i}px;`;
}
function renderShopGrid(category){
  const grid=document.getElementById('shopGrid'); grid.innerHTML='';
  shopItemsFor(category).forEach(item=>{
    const unlocked=isUnlockedItem(category,item);
    const equipped=getEquipped(category)===item.id;
    const card=document.createElement('div');
    card.className='shopCard'+(equipped?' equipped':'')+(!unlocked?' locked':'');
    card.dataset.id=item.id;
    let priceHtml;
    if(!unlocked && item.gate.type==='coin'){
      const isDeal = category===stats.dealCategory && item.id===stats.dealId;
      priceHtml = isDeal
        ? `<div class="price">${icon('flame')} <s style="opacity:.6">${item.gate.price}</s> ${icon('coin')} ${effectivePrice(category,item)}</div>`
        : `<div class="price">${icon('coin')} ${item.gate.price}</div>`;
    }
    else if(!unlocked && item.gate.type==='achievement'){
      const ach=ACHIEVEMENTS.find(a=>a.id===item.gate.id);
      priceHtml=`<div class="price lockreq">${icon('lock')} ${ach?t(ach.nameKey):''}</div>`;
    } else if(!unlocked && item.gate.type==='seasonpass'){
      const sName = SEASONS.find(s=>s.id===item.gate.season);
      priceHtml=`<div class="price lockreq">${icon('ticket')} ${sName?t('season_reward_badge',{name:t(sName.nameKey)}):t('season_reward_generic')}</div>`;
    } else if(!unlocked && item.gate.type==='streak'){
      priceHtml=`<div class="price lockreq">${icon('calendar')} ${t('streak_reward_badge')}</div>`;
    } else if(!unlocked && item.gate.type==='gem'){
      // Pena'lar artık doğrudan IAP değil, Elmas (premium para birimi) ile
      // satılıyor — bkz. gem-shop.js'teki elmas paketleri.
      priceHtml=`<div class="price gemPrice">${icon('gem')} ${item.gate.price}</div>`;
    } else if(!unlocked && item.gate.type==='coin_or_gem'){
      // İki ayrı ödeme yolu: Nota (kartın geneli, mevcut 'coin' davranışıyla
      // aynı) VEYA Elmas (bu küçük rozete özel, stopPropagation ile kartın
      // genel Nota akışını tetiklemeden doğrudan elmasla satın alır).
      const isDeal = category===stats.dealCategory && item.id===stats.dealId;
      const coinSpan = isDeal
        ? `${icon('flame')} <s style="opacity:.6">${item.gate.price}</s> ${icon('coin')} ${effectivePrice(category,item)}`
        : `${icon('coin')} ${item.gate.price}`;
      priceHtml=`<div class="price priceDual"><span class="priceOpt">${coinSpan}</span><span class="priceOpt priceOptGem">${icon('gem')} ${item.gate.gemPrice}</span></div>`;
    } else if(equipped) priceHtml=`<div class="price ok">${icon('check')} ${t('equipped_badge')}</div>`;
    else priceHtml=`<div class="price ok">${t('owned_badge')}</div>`;
    card.innerHTML = swatchHtml(category,item)+`<div class="cn">${t(item.nameKey)}</div>`+priceHtml;
    card.addEventListener('click', ()=>onShopCardClick(category,item));
    if(!unlocked && item.gate.type==='coin_or_gem'){
      const gemBtn = card.querySelector('.priceOptGem');
      if(gemBtn) gemBtn.addEventListener('click', (e)=>{ e.stopPropagation(); confirmGemPurchase(category, item, item.gate.gemPrice); });
    }
    grid.appendChild(card);
  });
}
function renderBoostsShop(){
  const grid=document.getElementById('shopGrid'); grid.innerHTML='';
  BOOSTS.forEach(b=>{
    const owned=stats.boosts[b.id]||0;
    const card=document.createElement('div'); card.className='shopCard boostCard';
    card.innerHTML = `<div class="boostIcon">${icon(b.icon)}</div><div class="cn">${t(b.nameKey)}</div><div class="bdesc">${t(b.descKey)}</div><div class="price">${icon('coin')} ${b.price}</div><div class="ownedTag">${t('inventory_label',{n:owned})}</div>`;
    card.addEventListener('click', ()=>{
      if(stats.notes<b.price){ queueToast(t('insufficient_stardust_short')); beep(200,0.1,'square',0.1); return; }
      showPurchaseConfirm(b.icon, t(b.nameKey), b.price, ()=>{
        stats.notes-=b.price; stats.boosts[b.id]=(stats.boosts[b.id]||0)+1; saveStats(); refreshWallet();
        queueToast(t('boost_bought_toast',{name:t(b.nameKey)})); beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
        renderBoostsShop();
      });
    });
    grid.appendChild(card);
  });
}
// Elmas paketleri: coin/skins/trails/themes'in aksine "sahiplik/kuşanma"
// kavramı yok — tüketilebilir IAP, her tıklama native mağaza diyaloğunu
// açar (bkz. gem-shop.js). boostCard'larla aynı mantık (satın al, biriktir).
function renderGemShop(){
  const grid=document.getElementById('shopGrid'); grid.innerHTML='';
  const products = ((window.GemShop && GemShop.PRODUCTS) || []).filter(p=>_gemLivePrices[p.id]);
  products.forEach(p=>{
    const priceText = _gemLivePrices[p.id];
    const card=document.createElement('div'); card.className='shopCard gemPackCard';
    card.innerHTML = `<div class="boostIcon">${icon('gem')}</div><div class="cn">${p.amount} ${t('currency_gem_name')}</div><div class="price iapPrice">${priceText}</div>`;
    card.addEventListener('click', ()=>{
      if(window.GemShop && GemShop.isNative()) GemShop.purchase(p.id);
      else queueToast(t('iap_unavailable_toast'));
    });
    grid.appendChild(card);
  });
}
function renderShopTab(){
  document.querySelectorAll('#shopTabs .stab').forEach(t2=>t2.classList.toggle('sel', t2.dataset.tab===shopTab));
  if(shopTab==='boosts') renderBoostsShop();
  else if(shopTab==='gems') renderGemShop();
  else renderShopGrid(shopTab);
}
function renderBoostRow(){
  const row=document.getElementById('boostRow'); if(!row) return;
  row.innerHTML='';
  const noneChip=document.createElement('div');
  noneChip.className='diffChip'+(!pendingBoost?' sel':'');
  noneChip.textContent=t('boost_none');
  noneChip.addEventListener('click', ()=>{ pendingBoost=null; renderBoostRow(); });
  row.appendChild(noneChip);
  BOOSTS.forEach(b=>{
    const owned=stats.boosts[b.id]||0;
    if(owned<=0) return;
    const chip=document.createElement('div');
    chip.className='diffChip'+(pendingBoost===b.id?' sel':'');
    chip.textContent=b.icon+' '+t(b.nameKey)+' ×'+owned;
    chip.addEventListener('click', ()=>{ pendingBoost=b.id; renderBoostRow(); });
    row.appendChild(chip);
  });
}

async function shareScore(){
  const text=t('share_text',{score});
  const url='https://paslagame.com.tr/'; // native'de location.href capacitor://localhost olur
  if(navigator.share){
    try{ await navigator.share({title:'Beat Orbit', text, url}); }catch(e){}
  } else if(navigator.clipboard){
    try{ await navigator.clipboard.writeText(text+' '+url); queueToast(t('toast_share_copied')); }catch(e){ queueToast(t('toast_share_copy_failed')); }
  } else queueToast(t('toast_share_unsupported'));
}

function renderThemeGrid(){
  const grid=document.getElementById('themeGrid'); grid.innerHTML='';
  Object.keys(THEMES).forEach(key=>{
    const th=THEMES[key];
    const item = Object.assign({id:key}, th);
    const unlocked = isUnlockedItem('themes', item);
    const d=document.createElement('div'); d.className='theme'+(!unlocked?' locked':'')+(key===cfg.theme?' sel':''); d.dataset.key=key;
    const themeIsDeal = !unlocked && stats.dealCategory==='themes' && stats.dealId===key;
    let priceTag = '';
    if(!unlocked && th.gate.type==='gem'){
      priceTag = `<div class="price" style="font-size:10.5px;color:#ffd28a;margin-top:2px">${icon('gem')} ${th.gate.price}</div>`;
    } else if(!unlocked && th.gate.type==='coin_or_gem'){
      const coinSpan = themeIsDeal
        ? `${icon('flame')} <s style="opacity:.6">${th.gate.price}</s> ${icon('coin')} ${effectivePrice('themes',item)}`
        : `${icon('coin')} ${th.gate.price}`;
      priceTag = `<div class="price priceDual" style="font-size:10.5px;color:#ffd28a;margin-top:2px"><span class="priceOpt">${coinSpan}</span><span class="priceOpt priceOptGem">${icon('gem')} ${th.gate.gemPrice}</span></div>`;
    } else if(!unlocked && th.gate.type==='coin'){
      priceTag = themeIsDeal
        ? `<div class="price" style="font-size:10.5px;color:#ffd28a;margin-top:2px">${icon('flame')} <s style="opacity:.6">${th.gate.price}</s> ${icon('coin')} ${effectivePrice('themes',item)}</div>`
        : `<div class="price" style="font-size:10.5px;color:#ffd28a;margin-top:2px">${icon('coin')} ${th.gate.price}</div>`;
    }
    d.innerHTML=`<div class="themeLabelPreview"><img src="${themeLabelSrc(key)}" alt=""></div><div class="swatch"><span style="background:${th.star}"></span><span style="background:${th.gold}"></span><span style="background:${th.peril}"></span><span style="background:${th.player}"></span></div><div class="tn">${t(th.nameKey)}</div><div class="tsel">${t('theme_selected')}</div>${priceTag}`;
    d.addEventListener('click', ()=>onShopCardClick('themes', item));
    if(!unlocked && th.gate.type==='coin_or_gem'){
      const gemBtn = d.querySelector('.priceOptGem');
      if(gemBtn) gemBtn.addEventListener('click', (e)=>{ e.stopPropagation(); confirmGemPurchase('themes', item, th.gate.gemPrice); });
    }
    grid.appendChild(d);
  });
}
