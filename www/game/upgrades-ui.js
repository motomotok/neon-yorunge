// Kalıcı yükseltmeler (roguelike meta-progression) ekranı. Veri/mantık
// (META_UPGRADES, upgradeLevel/upgradeBonus/nextUpgradeTier/buyUpgrade)
// data.js'de; burada sadece kartları çizip satın alma akışını bağlıyoruz.
// Not: mağazadaki showPurchaseConfirm() onay diyaloğu KASITLI olarak
// kullanılmıyor — burası sık ziyaret edilen, "kasarak harca" ekranı,
// her satın almada ekstra bir onay adımı akışı gereksiz yavaşlatıyordu.
// Tek tıkla anında satın alınıyor.
function renderUpgrades(){
  const grid=document.getElementById('upgradesGrid'); if(!grid) return;
  grid.innerHTML='';
  Object.keys(META_UPGRADES).forEach(key=>{
    const track=META_UPGRADES[key], lvl=upgradeLevel(key), tier=nextUpgradeTier(key);
    const card=document.createElement('div'); card.className='shopCard boostCard'; card.dataset.key=key;
    const curText = lvl>0 ? track.format(upgradeBonus(key)) : t('upgrade_not_taken');
    const nextText = tier
      ? t('upgrade_next',{text:track.format(tier.add)})
      : t('upgrade_maxed');
    const priceHtml = tier
      ? `<div class="price">${icon('coin')} ${tier.cost}</div>`
      : `<div class="price ok">${icon('check')} ${t('upgrade_max_badge')}</div>`;
    card.innerHTML = `<div class="boostIcon">${icon(track.icon)}</div>`
      +`<div class="cn">${t(track.nameKey)}</div>`
      +`<div class="bdesc">${t('upgrade_tier_line',{lvl, cur:curText, next:nextText})}</div>`
      +priceHtml;
    if(tier){
      card.addEventListener('click', ()=>{
        if((stats.stardust||0)<tier.cost){ queueToast(t('insufficient_stardust_short')); beep(200,0.1,'square',0.1); return; }
        if(buyUpgrade(key)){
          queueToast(t('upgrade_bought_toast',{name:t(track.nameKey), lvl:lvl+1}));
          beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
          renderUpgrades();
          if(tutorialActive && typeof tutorialOnUpgradeBought==='function') tutorialOnUpgradeBought(key);
        }
      });
    }
    grid.appendChild(card);
  });
}
