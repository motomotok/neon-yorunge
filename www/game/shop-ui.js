// Ayarlar / mağaza / istatistik ekranlarının DOM render'ı ve satın alma
// mantığı. Oyun fiziğine dokunmaz, sadece data.js'deki kataloglar ile
// #screen-* elemanlarını senkronize eder.
function syncSettings(){
  document.getElementById('soundSw').classList.toggle('on', cfg.sound);
  document.getElementById('bigSw').classList.toggle('on', cfg.bigButtons);
  document.getElementById('handSw').classList.toggle('on', cfg.leftHand);
  document.getElementById('cbSw').classList.toggle('on', cfg.colorblind);
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
  else { txt.innerHTML=icon('trophy')+' '+t('playgames_label'); btn.textContent=t('playgames_connect'); }
}
function syncPremiumUI(price){
  const txt=document.getElementById('premiumStatusText');
  const btn=document.getElementById('premiumBuyBtn');
  if(!txt || !btn) return;
  if(stats.premiumNoAds){
    txt.innerHTML=icon('check')+' '+t('premium_active_short');
    btn.style.display='none';
  } else {
    txt.innerHTML=icon('gem')+' '+t('premium_label');
    btn.style.display='inline-block';
    btn.textContent=price || (window.Premium ? Premium.FALLBACK_PRICE_TEXT : '49 TL');
  }
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
function syncStats(){
  document.getElementById('stBest').textContent=stats.best;
  document.getElementById('stStars').textContent=stats.stars;
  document.getElementById('stGames').textContent=stats.games;
  document.getElementById('stLevel').textContent=stats.maxLevel;
  renderAchievements();
  renderLeaderboard();
  renderRivalLeague();
  renderStatsTab();
}
function renderRivalLeague(){
  const el=document.getElementById('leagueList'); if(!el) return;
  ensureRivalLeague();
  el.innerHTML = stats.rivalLeague.map(r=>{
    const beaten = stats.best>=r.score;
    const rn = cfg.lang==='tr' ? turkishAccusative(r.name) : r.name;
    return `<div class="row" style="${beaten?'opacity:.55':''}">
      <span class="k">${beaten?icon('check'):icon('target')} ${t('rival_beat_row',{name:rn})}</span>
      <span class="v">${r.score}</span>
    </div>`;
  }).join('');
}
function renderSkins(){
  const grid=document.getElementById('skinGrid'); grid.innerHTML='';
  SKINS.forEach(sk=>{
    const unlocked=isUnlockedItem('skins', sk);
    const d=document.createElement('div');
    d.className='skinDot'+(cfg.skin===sk.id?' sel':'')+(unlocked?'':' locked');
    d.style.background = sk.rainbow ? 'conic-gradient(from 0deg,#ff5e5e,#ffd24a,#5efc82,#54e0ff,#a97bff,#ff5e5e)' : sk.color;
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
    d.innerHTML=`<div class="ic">${icon(a.icon)}</div><div>${t(a.nameKey)}</div>`;
    grid.appendChild(d);
  });
  document.getElementById('achCount').textContent=count;
}
function renderLeaderboard(){
  const el=document.getElementById('lbList');
  if(!stats.leaderboard.length){ el.innerHTML=`<div class="row"><span class="k">${t('no_records')}</span></div>`; return; }
  el.innerHTML = stats.leaderboard.map(e=>`<div class="row"><span class="k">${e.date} · ${modeLabel(e.mode)}</span><span class="v">${e.score}</span></div>`).join('');
}
function refreshDailyStatus(){
  const td=todayStr();
  const done = stats.dailyDate===td && stats.dailyDone;
  document.getElementById('dailyStatus').textContent = done ? t('mode_daily_played',{score:stats.dailyScore}) : t('mode_daily_desc');
}

function refreshWallet(){
  const v = stats.stardust||0;
  ['walletHud','shopWallet','menuWallet','upgradesWallet'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.textContent=v;
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
  if(stats.stardust < price){
    queueToast(t('insufficient_stardust',{n:price-stats.stardust}));
    beep(200,0.12,'square',0.1); return false;
  }
  stats.stardust -= price;
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

let pendingPurchase = null;
// price=null olursa fiyat satırı gizlenir ve varsayılan "Satın almak
// istiyor musun?" yerine `message` kullanılır — bu diyalog satın almanın
// yanı sıra genel "emin misin?" onayları için de (bkz. resetProgression)
// kullanılabilsin diye.
function showPurchaseConfirm(iconKey, name, price, onYes, message){
  pendingPurchase = onYes;
  document.getElementById('pcIcon').innerHTML = icon(iconKey);
  document.getElementById('pcName').textContent = name;
  document.getElementById('pcMessage').textContent = message || t('purchase_confirm_default');
  const priceEl=document.getElementById('pcPrice');
  if(price==null){ priceEl.style.display='none'; }
  else { priceEl.style.display='block'; priceEl.innerHTML = icon('coin')+' '+price; }
  document.getElementById('purchaseConfirmOverlay').style.display = 'flex';
  beep(500,0.05,'sine',0.08);
}
function hidePurchaseConfirm(){
  document.getElementById('purchaseConfirmOverlay').style.display = 'none';
  pendingPurchase = null;
}

function onShopCardClick(category, item){
  const unlocked = isUnlockedItem(category, item);
  if(!unlocked){
    if(item.gate.type==='coin'){
      showPurchaseConfirm('palette', t(item.nameKey), effectivePrice(category,item), ()=>{
        if(purchase(category,item)) setEquipped(category, item.id);
        renderSkins(); renderThemeGrid(); syncShopIfOpen();
      });
    } else if(item.gate.type==='seasonpass'){
      queueToast(t('locked_seasonpass_toast',{name:t(item.nameKey)}));
      beep(200,0.1,'square',0.1);
    } else {
      const ach=ACHIEVEMENTS.find(a=>a.id===item.gate.id);
      queueToast(t('locked_achievement_toast',{name:t(item.nameKey), desc:ach?t(ach.descKey):''}));
      beep(200,0.1,'square',0.1);
    }
  } else {
    setEquipped(category, item.id);
    beep(600,0.06,'sine',0.1);
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
    return `<div class="swatch" style="justify-content:center">${['star','gold','peril','player'].map(k=>`<span style="background:${item[k]}"></span>`).join('')}</div>`;
  }
  if(category==='skins'){
    const bg = item.rainbow ? 'conic-gradient(from 0deg,#ff5e5e,#ffd24a,#5efc82,#54e0ff,#a97bff,#ff5e5e)' : item.color;
    return `<div class="skinPreview" style="background:${bg}"></div>`;
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
    } else if(equipped) priceHtml=`<div class="price ok">${icon('check')} ${t('equipped_badge')}</div>`;
    else priceHtml=`<div class="price ok">${t('owned_badge')}</div>`;
    card.innerHTML = swatchHtml(category,item)+`<div class="cn">${t(item.nameKey)}</div>`+priceHtml;
    card.addEventListener('click', ()=>onShopCardClick(category,item));
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
      if(stats.stardust<b.price){ queueToast(t('insufficient_stardust_short')); beep(200,0.1,'square',0.1); return; }
      showPurchaseConfirm(b.icon, t(b.nameKey), b.price, ()=>{
        stats.stardust-=b.price; stats.boosts[b.id]=(stats.boosts[b.id]||0)+1; saveStats(); refreshWallet();
        queueToast(t('boost_bought_toast',{name:t(b.nameKey)})); beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
        renderBoostsShop();
      });
    });
    grid.appendChild(card);
  });
}
function renderShopTab(){
  document.querySelectorAll('.stab').forEach(t2=>t2.classList.toggle('sel', t2.dataset.tab===shopTab));
  if(shopTab==='boosts') renderBoostsShop(); else renderShopGrid(shopTab);
}
function renderBoostRow(){
  const row=document.getElementById('boostRow'); if(!row) return;
  row.innerHTML='';
  const noneChip=document.createElement('div');
  noneChip.className='diffChip'+(!pendingBoost?' sel':'');
  noneChip.textContent=t('boost_none');
  noneChip.addEventListener('click', ()=>{ pendingBoost=null; renderBoostRow(); beep(400,0.05,'sine',0.08); });
  row.appendChild(noneChip);
  BOOSTS.forEach(b=>{
    const owned=stats.boosts[b.id]||0;
    if(owned<=0) return;
    const chip=document.createElement('div');
    chip.className='diffChip'+(pendingBoost===b.id?' sel':'');
    chip.textContent=b.icon+' '+t(b.nameKey)+' ×'+owned;
    chip.addEventListener('click', ()=>{ pendingBoost=b.id; renderBoostRow(); beep(400,0.05,'sine',0.08); });
    row.appendChild(chip);
  });
}

async function shareScore(){
  const text=t('share_text',{score});
  if(navigator.share){
    try{ await navigator.share({title:'Neon Yörünge', text, url:location.href}); }catch(e){}
  } else if(navigator.clipboard){
    try{ await navigator.clipboard.writeText(text+' '+location.href); queueToast(t('toast_share_copied')); }catch(e){ queueToast(t('toast_share_copy_failed')); }
  } else queueToast(t('toast_share_unsupported'));
}

function renderThemeGrid(){
  const grid=document.getElementById('themeGrid'); grid.innerHTML='';
  Object.keys(THEMES).forEach(key=>{
    const th=THEMES[key];
    const item = Object.assign({id:key}, th);
    const unlocked = isUnlockedItem('themes', item);
    const d=document.createElement('div'); d.className='theme'+(!unlocked?' locked':''); d.dataset.key=key;
    const themeIsDeal = !unlocked && stats.dealCategory==='themes' && stats.dealId===key;
    const priceTag = !unlocked
      ? (themeIsDeal
        ? `<div class="price" style="font-size:10.5px;color:#ffd28a;margin-top:2px">${icon('flame')} <s style="opacity:.6">${th.gate.price}</s> ${icon('coin')} ${effectivePrice('themes',item)}</div>`
        : `<div class="price" style="font-size:10.5px;color:#ffd28a;margin-top:2px">${icon('coin')} ${th.gate.price}</div>`)
      : '';
    d.innerHTML=`<div class="swatch"><span style="background:${th.star}"></span><span style="background:${th.gold}"></span><span style="background:${th.peril}"></span><span style="background:${th.player}"></span></div><div class="tn">${t(th.nameKey)}</div>${priceTag}`;
    d.addEventListener('click', ()=>onShopCardClick('themes', item));
    grid.appendChild(d);
  });
}
