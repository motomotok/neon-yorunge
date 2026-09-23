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
  if(c) c.style.display = upgradesTab==='core' ? 'flex' : 'none';
  // Ağaç ekranı dikeyde ortalamak istediğimiz için (bkz. style.css
  // #coreTreeWrap flex:1) uzun açıklama metnini gizliyoruz — mekanik zaten
  // ağacın hemen üstündeki kısa satırda ve her düğümün kendi popup'ında.
  const subEl=document.getElementById('upgradesSubText');
  if(subEl){ subEl.style.display = upgradesTab==='core' ? 'none' : ''; subEl.textContent = t('upgrades_sub'); }
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

// Ağacın geometrisi: kök tam merkezde, 6 dal 60°'lik dilimlere yayılıyor,
// her dalın düğümleri kendi açısında artan yarıçaplarda ("dalın ucuna
// doğru") diziliyor — gerçek bir ağaç gibi kök->dal->uç. Tüm dalların en
// dış ucu ortak, kesikli bir "birleşme halkası"na değiyor, o halka da tek
// bir çizgiyle en altta capstone'a bağlanıyor; böylece "6 dalın hepsi
// birleşiyor" hissi, birbirini kesen 6 ayrı çizgi çizmeden veriliyor.
const CORE_CX=200, CORE_CY=200, CORE_VBW=400, CORE_VBH=480, CORE_RING_R=205;
const CORE_RADII5=[50,85,115,145,175], CORE_RADII3=[80,128,175];
let _coreLayoutCache=null;
function coreTreeLayout(){
  if(_coreLayoutCache) return _coreLayoutCache;
  const nodes=[{id:'core_root', x:CORE_CX, y:CORE_CY, r:24}];
  const lines=[];
  CORE_BRANCHES.forEach((branch,bi)=>{
    const angle = bi*60*Math.PI/180;
    const radii = branch.ids.length===5 ? CORE_RADII5 : CORE_RADII3;
    let px=CORE_CX, py=CORE_CY;
    branch.ids.forEach((id,ni)=>{
      const rr=radii[ni];
      const x=CORE_CX+Math.cos(angle)*rr, y=CORE_CY+Math.sin(angle)*rr;
      nodes.push({id, x, y, r:17});
      lines.push({x1:px,y1:py,x2:x,y2:y,to:id});
      px=x; py=y;
    });
  });
  const capX=CORE_CX, capY=CORE_CY+CORE_RING_R+35;
  nodes.push({id:'core_capstone', x:capX, y:capY, r:22});
  lines.push({x1:CORE_CX,y1:CORE_CY+CORE_RING_R,x2:capX,y2:capY,to:'core_capstone',ring:true});
  return (_coreLayoutCache={nodes, lines});
}
function renderCoreTree(){
  const wrap=document.getElementById('coreTree'); if(!wrap) return;
  const ownedCount=(stats.coreUnlocked||[]).length, total=CORE_TREE.length;
  const progEl=document.getElementById('coreProgressText'); if(progEl) progEl.textContent=ownedCount+'/'+total;
  const {nodes, lines} = coreTreeLayout();

  let svg = `<svg class="coreTreeSvg" viewBox="0 0 ${CORE_VBW} ${CORE_VBH}">`
    +`<circle cx="${CORE_CX}" cy="${CORE_CY}" r="${CORE_RING_R}" class="coreRing"/>`;
  lines.forEach(l=>{
    svg += `<line x1="${l.x1}" y1="${l.y1}" x2="${l.x2}" y2="${l.y2}" class="coreLine${coreNodeOwned(l.to)?' on':''}"/>`;
  });
  svg += '</svg>';

  let overlay = '';
  CORE_BRANCHES.forEach((branch,bi)=>{
    const angle = bi*60*Math.PI/180;
    const lx=CORE_CX+Math.cos(angle)*(CORE_RING_R-12), ly=CORE_CY+Math.sin(angle)*(CORE_RING_R-12);
    overlay += `<div class="coreBranchTag" style="left:${(lx/CORE_VBW*100).toFixed(2)}%;top:${(ly/CORE_VBH*100).toFixed(2)}%">${t(branch.labelKey)}</div>`;
  });
  nodes.forEach(n=>{
    const node=coreNode(n.id);
    const owned=coreNodeOwned(n.id), reqMet=coreNodeReqMet(node);
    const stateCls = owned?'owned':(reqMet?'buyable':'locked');
    const kindCls = n.id==='core_root'?' root':(n.id==='core_capstone'?' capstone':'');
    const wPct=(n.r*2/CORE_VBW*100).toFixed(2), hPct=(n.r*2/CORE_VBH*100).toFixed(2);
    overlay += `<button class="coreNodeBtn ${stateCls}${kindCls}" data-core-id="${n.id}" `
      +`style="left:${(n.x/CORE_VBW*100).toFixed(2)}%;top:${(n.y/CORE_VBH*100).toFixed(2)}%;width:${wPct}%;height:${hPct}%;">`
      +icon(node.icon)+`</button>`;
  });

  wrap.innerHTML = `<div class="coreTreeStage">${svg}<div class="coreTreeNodes">${overlay}</div></div>`;
  wrap.querySelectorAll('[data-core-id]').forEach(el=>{
    el.addEventListener('click', ()=>openCoreInfo(el.dataset.coreId));
  });
}

// Düğüme dokununca büyüteç: isim + etki + durum (sahip/kilitli/fiyat) tek
// bir popup'ta — ağaçtaki her yuvarlak sadece ikonunu gösterir, metin
// yalnızca burada.
function openCoreInfo(id){
  const node=coreNode(id);
  const owned=coreNodeOwned(id), reqMet=coreNodeReqMet(node);
  document.getElementById('ciIcon').innerHTML=icon(node.icon);
  document.getElementById('ciName').textContent=t(node.nameKey);
  document.getElementById('ciEffect').textContent=coreEffectText(node);
  const statusEl=document.getElementById('ciStatus');
  const actionBtn=document.getElementById('ciActionBtn');
  actionBtn.onclick=null;
  if(owned){
    statusEl.innerHTML=icon('check')+' '+t('owned_badge'); statusEl.style.color='#6fe28a';
    actionBtn.style.display='none';
  } else if(!reqMet){
    statusEl.innerHTML=icon('lock')+' '+t('core_locked_status'); statusEl.style.color='#8f97b5';
    actionBtn.style.display='none';
  } else {
    statusEl.innerHTML=icon('atom')+' '+node.cost; statusEl.style.color='#7fe8ff';
    actionBtn.style.display='inline-block';
    actionBtn.innerHTML=icon('check')+' '+t('btn_yes');
    actionBtn.onclick=()=>{
      if(buyCoreNode(id)){
        queueToast(icon('atom')+' '+t('core_node_bought_toast',{name:t(node.nameKey)}));
        beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
        closeCoreInfo(); renderCoreTree(); updatePrestigePreview();
      } else {
        queueToast(t('core_insufficient_toast')); beep(200,0.1,'square',0.1);
      }
    };
  }
  document.getElementById('coreInfoOverlay').style.display='flex';
  beep(500,0.05,'sine',0.08);
}
function closeCoreInfo(){ document.getElementById('coreInfoOverlay').style.display='none'; }
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
