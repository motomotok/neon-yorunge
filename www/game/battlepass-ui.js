// Sezon Bileti (Battle-Pass) ekranının DOM render'ı — ilerleme çubuğu,
// kademe listesi (ücretsiz/ücretli claim butonları) ve Sezon Bileti IAP
// durum senkronizasyonu. Veri modeli data.js'de (ensureSeason, SEASON_TIERS,
// claimSeasonTier).
function syncSeasonPassUI(price){
  const txt=document.getElementById('seasonPassStatusText');
  const btn=document.getElementById('seasonPassBuyBtn');
  if(!txt || !btn) return;
  const card=document.getElementById('seasonPassCard'); if(card) card.classList.toggle('active', !!stats.seasonPremium);
  if(stats.seasonPremium){
    txt.innerHTML='<b>'+t('bp_premium')+'</b>'+t('seasonpass_active');
    btn.style.display='none';
  } else {
    txt.innerHTML='<b>'+t('bp_premium')+'</b>'+t('seasonpass_promo');
    btn.style.display='inline-block';
    btn.innerHTML=icon('ticket')+' '+t('seasonpass_buy_btn',{price:price || (window.SeasonPass ? SeasonPass.FALLBACK_PRICE_TEXT : '29 TL')});
  }
}

// Ödül hattı: ortada numaralı plak düğümleri (ulaşıldıysa yanar, aralarındaki
// oluk XP'ye göre dolar), solda ücretsiz, sağda premium (altın) ödül. Alınabilir
// ödüller nabız atar ve "AL" rozeti taşır; ekran ilk alınabilir/sıradaki
// kademeye kendiliğinden kaydırılır.
function renderBattlepass(){
  ensureSeason();
  const s = activeSeason();
  const daysLeft = Math.max(0, s.days - seasonDayIndex(s.start, gameNow()));
  const xp = stats.seasonXp;
  document.getElementById('seasonXpLine').textContent = t('season_xp_line',{xp, name:t(s.nameKey), days:daysLeft});
  document.getElementById('bpSeasonName').textContent = t(s.nameKey);
  document.getElementById('bpDays').innerHTML = icon('clock')+' '+t('bp_days_left',{n:daysLeft});
  let reachedN = 0; SEASON_TIERS.forEach(tr=>{ if(xp>=tr.xp) reachedN++; });
  document.getElementById('bpTierNow').textContent = reachedN;
  const next = SEASON_TIERS[reachedN], prevXp = reachedN>0 ? SEASON_TIERS[reachedN-1].xp : 0;
  const frac = next ? Math.max(0, Math.min(1, (xp-prevXp)/(next.xp-prevXp))) : 1;
  document.getElementById('bpBarFill').style.width = (frac*100).toFixed(1)+'%';
  document.getElementById('bpBarTxt').textContent = next ? `${xp} / ${next.xp} XP` : `${xp} XP`;
  document.getElementById('bpNextLine').textContent = next ? t('bp_next_xp',{n:next.xp-xp, tier:reachedN+1}) : t('bp_all_done');
  syncSeasonPassUI();

  const wrap=document.getElementById('battlepassTiers'); wrap.innerHTML='';
  let focusEl=null;
  const chip=(i, tier, track)=>{
    const prem = track==='premium';
    const amount = prem ? tier.premium : tier.free;
    const claimed = (prem ? stats.seasonClaimedPremium : stats.seasonClaimedFree).includes(i);
    const reached = xp >= tier.xp;
    const locked = prem && !stats.seasonPremium;
    const st = claimed ? 'claimed' : (reached && !locked) ? 'claimable' : 'locked';
    const b=document.createElement('button');
    b.className = 'bpReward '+track+' '+st;
    const extra = prem && tier.cosmeticSlot ? `<span class="bpCos">${icon('palette')}</span>` : '';
    const lockIc = locked ? icon('ticket') : icon('lock');
    b.innerHTML = `<span class="bpAmt">${icon('coin')} ${amount}</span>${extra}`
      + (st==='claimed' ? `<span class="bpState ok">${icon('check')}</span>`
        : st==='claimable' ? `<span class="bpState go">${t('bp_claim')}</span>`
        : `<span class="bpState lk">${lockIc}</span>`);
    if(st==='claimable'){
      b.addEventListener('click', ()=>{ if(claimSeasonTier(i, track)){ renderBattlepass(); if(typeof syncLoginStreakDock==='function') syncLoginStreakDock(); } });
      if(!focusEl) focusEl=b;
    } else b.disabled = true;
    return b;
  };
  SEASON_TIERS.forEach((tier,i)=>{
    const reached = xp >= tier.xp;
    const row=document.createElement('div');
    row.className='bpRow'+(reached?' reached':'')+(i===reachedN?' current':'');
    const node=document.createElement('div');
    node.className='bpNode';
    // Bu düğümün üstündeki oluk: önceki kademeden buna ilerleme oranı.
    const pXp = i>0 ? SEASON_TIERS[i-1].xp : 0;
    const segFrac = Math.max(0, Math.min(1, (xp-pXp)/(tier.xp-pXp)));
    node.innerHTML = `<span class="bpRail"><i style="height:${(segFrac*100).toFixed(0)}%"></i></span><span class="bpDiscN"><b>${i+1}</b></span><small>${tier.xp} XP</small>`;
    row.appendChild(chip(i, tier, 'free'));
    row.appendChild(node);
    row.appendChild(chip(i, tier, 'premium'));
    wrap.appendChild(row);
    if(!focusEl && i===reachedN) focusEl=row;
  });
  // Alınabilir ödüle (yoksa sıradaki kademeye) kaydır.
  const body=wrap.closest('.screenBody');
  if(body && focusEl) requestAnimationFrame(()=>{
    const r=focusEl.getBoundingClientRect(), br=body.getBoundingClientRect();
    body.scrollTop = Math.max(0, body.scrollTop + (r.top-br.top) - br.height*0.3);
  });
}
