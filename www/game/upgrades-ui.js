// Kalıcı yükseltmeler (roguelike meta-progression) ekranı. Veri/mantık
// (META_UPGRADES, upgradeLevel/upgradeBonus/nextUpgradeTier/buyUpgrade)
// data.js'de; burada sadece kartları çizip satın alma akışını bağlıyoruz.
// Desen shop-ui.js'deki renderBoostsShop()'un birebir aynısı — mevcut
// showPurchaseConfirm() onay diyaloğu doğrudan yeniden kullanılıyor.
function renderUpgrades(){
  const grid=document.getElementById('upgradesGrid'); if(!grid) return;
  grid.innerHTML='';
  Object.keys(META_UPGRADES).forEach(key=>{
    const track=META_UPGRADES[key], lvl=upgradeLevel(key), tier=nextUpgradeTier(key);
    const card=document.createElement('div'); card.className='shopCard boostCard';
    const curText = lvl>0 ? track.format(upgradeBonus(key)) : 'Henüz alınmadı';
    const nextText = tier
      ? `Sıradaki: ${track.format(tier.add)}`
      : 'TAVANA ULAŞILDI';
    const priceHtml = tier
      ? `<div class="price">${icon('coin')} ${tier.cost}</div>`
      : `<div class="price ok">${icon('check')} Maks</div>`;
    card.innerHTML = `<div class="boostIcon">${icon(track.icon)}</div>`
      +`<div class="cn">${track.name}</div>`
      +`<div class="bdesc">${lvl}/5 kademe · şu an: ${curText}<br>${nextText}</div>`
      +priceHtml;
    if(tier){
      card.addEventListener('click', ()=>{
        if((stats.stardust||0)<tier.cost){ queueToast('🪙 Yetersiz Yıldız Tozu'); beep(200,0.1,'square',0.1); return; }
        showPurchaseConfirm(track.icon, track.name, tier.cost, ()=>{
          if(buyUpgrade(key)){
            queueToast('✅ '+track.name+' yükseltildi!');
            beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
            renderUpgrades();
          }
        });
      });
    }
    grid.appendChild(card);
  });
}
