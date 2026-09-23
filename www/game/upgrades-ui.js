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
    // upgradeBonus() Kademe (stardust) + Çekirdek Ağacı (kalıcı) toplamını
    // birlikte döner — o yüzden Kademe hâlâ 0/8 olsa bile Çekirdek'ten
    // gelen kalıcı bonus varsa "henüz alınmadı" yerine gerçek değeri göster.
    const totalBonus = upgradeBonus(key);
    const curText = totalBonus>0 ? track.format(totalBonus) : t('upgrade_not_taken');
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
  updatePrestigePreview();
}

// ---- Çekirdek Ağacı (prestij) ------------------------------------------
let upgradesTab='tier';
function renderUpgradesTab(){
  document.querySelectorAll('#upgradesTabs .stab').forEach(el=>el.classList.toggle('sel', el.dataset.uptab===upgradesTab));
  const g=document.getElementById('upgradesGrid'), c=document.getElementById('coreTreeWrap');
  if(g) g.style.display = upgradesTab==='tier' ? 'grid' : 'none';
  if(c) c.style.display = upgradesTab==='core' ? 'block' : 'none';
  const subEl=document.getElementById('upgradesSubText');
  if(subEl) subEl.textContent = upgradesTab==='core' ? t('core_tree_sub') : t('upgrades_sub');
  if(upgradesTab==='core') renderCoreTree();
}
const CORE_EFFECT_FORMAT = {
  hp:n=>'+'+n+' '+t('unit_hp'),
  coinPct:n=>'+%'+(Math.round(n*1000)/10),
  boostDur:n=>'+%'+(Math.round(n*1000)/10),
  multPower:n=>'+×'+(Math.round(n*100)/100),
  startCombo:n=>'+'+n+' '+t('unit_combo'),
  hazardSoften:n=>'-%'+(Math.round(n*1000)/10)+' '+t('unit_hazard'),
};
function coreEffectText(node){
  return Object.keys(node.effects).map(k=>CORE_EFFECT_FORMAT[k](node.effects[k])).join(' · ');
}
function coreNodeCardHtml(node){
  const owned=coreNodeOwned(node.id), reqMet=coreNodeReqMet(node);
  const locked = !owned && !reqMet;
  const cls='shopCard boostCard coreNode'+(owned?' equipped':'')+(locked?' locked':'');
  let priceHtml;
  if(owned) priceHtml=`<div class="price ok">${icon('check')} ${t('owned_badge')}</div>`;
  else if(locked) priceHtml=`<div class="price lockreq">${icon('lock')} ${icon('atom')} ${node.cost}</div>`;
  else priceHtml=`<div class="price">${icon('atom')} ${node.cost}</div>`;
  return `<div class="${cls}" data-core-id="${node.id}">`
    +`<div class="boostIcon">${icon(node.icon)}</div>`
    +`<div class="cn">${t(node.nameKey)}</div>`
    +`<div class="bdesc">${coreEffectText(node)||'&nbsp;'}</div>`
    +priceHtml
    +`</div>`;
}
function onCoreNodeClick(id){
  const node=coreNode(id);
  if(coreNodeOwned(id)) return;
  if(!coreNodeReqMet(node)){ queueToast(t('core_locked_toast')); beep(200,0.1,'square',0.1); return; }
  if((stats.cores||0)<node.cost){ queueToast(t('core_insufficient_toast')); beep(200,0.1,'square',0.1); return; }
  if(buyCoreNode(id)){
    queueToast(icon('atom')+' '+t('core_node_bought_toast',{name:t(node.nameKey)}));
    beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
    renderCoreTree();
  }
}
function renderCoreTree(){
  const wrap=document.getElementById('coreTree'); if(!wrap) return;
  const owned=(stats.coreUnlocked||[]).length, total=CORE_TREE.length;
  const progEl=document.getElementById('coreProgressText'); if(progEl) progEl.textContent=owned+'/'+total;
  const root=coreNode('core_root'), capstone=coreNode('core_capstone');
  let html = `<div class="coreRootNode">${coreNodeCardHtml(root)}</div><div class="coreBranchRow">`;
  CORE_BRANCHES.forEach(branch=>{
    html+=`<div class="coreBranch"><div class="coreBranchLabel">${t(branch.labelKey)}</div>`;
    branch.ids.forEach(id=>{ html+=coreNodeCardHtml(coreNode(id)); });
    html+='</div>';
  });
  html+='</div>'+`<div class="coreCapstoneWrap">${coreNodeCardHtml(capstone)}</div>`;
  wrap.innerHTML=html;
  wrap.querySelectorAll('[data-core-id]').forEach(el=>{
    el.addEventListener('click', ()=>onCoreNodeClick(el.dataset.coreId));
  });
}
function updatePrestigePreview(){
  const el=document.getElementById('prestigePreviewText'); if(!el) return;
  const gain=coresPreview();
  el.innerHTML = gain>0
    ? icon('atom')+' '+t('prestige_preview',{n:gain})
    : t('prestige_preview_zero');
  const walletEl=document.getElementById('upgradesCoreWallet'); if(walletEl) walletEl.textContent=stats.cores||0;
}
function attemptPrestige(){
  const gain=coresPreview();
  if(gain<=0){ queueToast(t('prestige_zero_toast')); beep(200,0.1,'square',0.1); return; }
  showPurchaseConfirm('replay', t('reset_progress_btn')+' — +'+gain+' ⚛', null, ()=>{
    const got=performPrestige();
    renderUpgrades(); renderCoreTree(); updatePrestigePreview();
    queueToast(icon('atom')+' '+t('prestige_done_toast',{n:got}));
    beep(300,0.15,'square',0.12); beep(500,0.15,'triangle',0.1);
  }, t('reset_progress_confirm'));
}
