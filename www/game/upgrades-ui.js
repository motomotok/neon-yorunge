// Kalıcı yükseltmeler (roguelike meta-progression) ekranı. Veri/mantık
// (META_UPGRADES, upgradeLevel/upgradeBonus/nextUpgradeTier/buyUpgrade)
// data.js'de; burada sadece kartları çizip satın alma akışını bağlıyoruz.
// Not: mağazadaki showPurchaseConfirm() onay diyaloğu KASITLI olarak
// kullanılmıyor — burası sık ziyaret edilen, "kasarak harca" ekranı,
// her satın almada ekstra bir onay adımı akışı gereksiz yavaşlatıyordu.
// Tek tıkla anında satın alınıyor.
let upgradeJustBoughtKey=null, upgradeJustBoughtTimer=null;
function renderUpgrades(){
  const grid=document.getElementById('upgradesGrid'); if(!grid) return;
  grid.innerHTML='';
  Object.keys(META_UPGRADES).forEach(key=>{
    const track=META_UPGRADES[key], lvl=upgradeLevel(key), tier=nextUpgradeTier(key);
    const justBought = key===upgradeJustBoughtKey;
    const card=document.createElement('div'); card.className='shopCard boostCard'+(justBought?' justBought':''); card.dataset.key=key;
    // upgradeBonus() Kademe (nota) + Çekirdek Ağacı (kalıcı) toplamını
    // birlikte döner — o yüzden Kademe hâlâ 0/8 olsa bile Çekirdek'ten
    // gelen kalıcı bonus varsa "henüz alınmadı" yerine gerçek değeri göster.
    const totalBonus = upgradeBonus(key);
    const curText = totalBonus>0 ? track.format(totalBonus) : t('upgrade_not_taken');
    // "Sonraki kademede" kademe artışını değil, alınca ulaşılacak TOPLAMI gösterir.
    const nextText = tier
      ? t('upgrade_next',{text:track.format(totalBonus+tier.add)})
      : t('upgrade_maxed');
    const priceHtml = tier
      ? `<div class="price">${icon('coin')} ${tier.cost}</div>`
      : `<div class="price ok">${icon('check')} ${t('upgrade_max_badge')}</div>`;
    card.innerHTML = `<div class="boostIcon">${icon(track.icon)}</div>`
      +`<div class="cn">${t(track.nameKey)}</div>`
      +`<div class="bdesc upDesc">${t(track.nameKey.replace('_name','_desc'))}</div>`
      +`<div class="bdesc">${t('upgrade_tier_line',{lvl, max:track.tiers.length, cur:curText, next:nextText})}</div>`
      +priceHtml
      +(justBought?`<span class="cardCheckBadge">${icon('check')}</span>`:'');
    if(tier){
      card.addEventListener('click', ()=>{
        if((stats.notes||0)<tier.cost){ queueToast(t('insufficient_stardust_short')); beep(200,0.1,'square',0.1); return; }
        if(buyUpgrade(key)){
          // Kademe kartları onaysız tek tıkla satın alınıyor — hızlı art arda
          // tıklanınca (bkz. kullanıcı geri bildirimi) toast kuyruğu bitmek
          // bilmeyen bir yazı akışına dönüşüyordu. Üstte metin yerine, kartın
          // kendisi birkaç saniyeliğine yeşile "patlayıp" küçük bir tik
          // gösteriyor — satın alındığı net, spam de imkansız (zamanlayıcı
          // her yeni satın almada sıfırlanıp en sonuncuya geçiyor).
          beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
          upgradeJustBoughtKey=key;
          clearTimeout(upgradeJustBoughtTimer);
          upgradeJustBoughtTimer=setTimeout(()=>{ upgradeJustBoughtKey=null; renderUpgrades(); }, 2400);
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
// Satın alma anında üstte metin göstermek yerine (bkz. spam geri bildirimi),
// az önce alınan düğümü birkaç saniyeliğine yeşil bir "pop" + küçük tikle
// işaretliyoruz — ikinci bir satın alma gelirse zamanlayıcı sıfırlanıp en
// son alınana geçiyor, asla üst üste binmiyor.
let coreJustBoughtId=null, coreJustBoughtTimer=null;
function renderUpgradesTab(){
  document.querySelectorAll('#upgradesTabs .stab').forEach(el=>el.classList.toggle('sel', el.dataset.uptab===upgradesTab));
  const g=document.getElementById('upgradesGrid'), c=document.getElementById('coreTreeWrap');
  const pw=document.getElementById('perkWrap'), hw=document.getElementById('heatWrap');
  if(g) g.style.display = upgradesTab==='tier' ? 'grid' : 'none';
  if(c) c.style.display = upgradesTab==='core' ? 'flex' : 'none';
  if(pw) pw.style.display = upgradesTab==='perk' ? 'block' : 'none';
  if(hw) hw.style.display = upgradesTab==='heat' ? 'block' : 'none';
  // Ağaç ekranı dikeyde ortalamak istediğimiz için (bkz. style.css
  // #coreTreeWrap flex:1) uzun açıklama metnini gizliyoruz — mekanik zaten
  // ağacın hemen üstündeki kısa satırda ve her düğümün kendi popup'ında.
  const subEl=document.getElementById('upgradesSubText');
  if(subEl){ subEl.style.display = upgradesTab==='tier' ? '' : 'none'; subEl.textContent = t('upgrades_sub'); }
  if(upgradesTab==='core') renderCoreTree();
  if(upgradesTab==='perk') renderPerks();
  if(upgradesTab==='heat') renderHeat();
}

// ---- Isı Mühürleri (bkz. data.js HEAT_SEALS) ----------------------------
// Alınmamış mühür Çekirdek fiyatını gösterir (dokun: al ve tak); alınmış mühür
// dokununca takılır/çıkarılır, takılıysa turuncu yanar. Üstteki gösterge
// toplam ısıyı ve puan çarpanını verir.
function renderHeat(){
  const grid=document.getElementById('heatGrid'); if(!grid) return;
  const sel=heatSelected(), mult=heatMultOf(sel);
  const lv=document.getElementById('heatLevelVal'); if(lv) lv.textContent=sel.length;
  const mv=document.getElementById('heatMultVal'); if(mv) mv.textContent='×'+mult.toFixed(2);
  const wrap=document.getElementById('heatWrap'); if(wrap) wrap.classList.toggle('hot', sel.length>0);
  grid.innerHTML='';
  HEAT_SEALS.forEach(s=>{
    const un=sealUnlocked(s), on=sealSelected(s.id);
    const card=document.createElement('div');
    card.className='shopCard boostCard heatCard'+(on?' equipped':'')+(un?'':' locked');
    const pct='+'+Math.round(s.bonus*100)+'%';
    const status = !un ? `<div class="price core">${icon('atom')} ${s.cost} <span class="sealBonus">· ${pct}</span></div>`
      : on ? `<div class="price on">${icon('flame')} ${pct} · ${t('heat_on')}</div>`
           : `<div class="price">${pct} · ${t('heat_off')}</div>`;
    card.innerHTML=`<div class="boostIcon">${icon(s.icon)}</div>`
      +`<div class="cn">${t('seal_'+s.id+'_name')}</div>`
      +`<div class="bdesc upDesc">${t('seal_'+s.id+'_desc')}</div>`+status;
    card.addEventListener('click', ()=>{
      if(!un){
        if(!buySeal(s.id)){ queueToast(t('core_insufficient_toast')); beep(200,0.1,'square',0.1); return; }
        beep(330,0.1,'sawtooth',0.07); beep(660,0.12,'triangle',0.1); beep(990,0.14,'sine',0.08);
        updatePrestigePreview(); renderHeat(); return;
      }
      toggleSeal(s.id);
      if(!on){ beep(330,0.1,'sawtooth',0.07); beep(660,0.12,'triangle',0.1); } else beep(400,0.08,'sine',0.1);
      renderHeat();
    });
    grid.appendChild(card);
  });
}

// ---- Süpernova Yetenekleri (bkz. data.js PERKS) -------------------------
// Alınmamış kart: çekirdek fiyatı, dokununca satın alınır. Alınmış kart:
// dokununca takılır/çıkarılır (yuva sınırı perkSlots()).
let perkJustId=null, perkJustTimer=null, perkTipTimer=null;
// Yuva çubuğu: PERK_SLOT_AT kadar gerçek yuva. Dolu yuva takılı yeteneği
// gösterir (dokun: çıkar), boş yuva "+" (aşağıdan bir yetenek seç), kilitli
// yuva kilit — üstüne gelince/dokununca nasıl açılacağı balonla yazar.
function renderPerkSlots(){
  const bar=document.getElementById('perkSlots'); if(!bar) return;
  const eq=stats.perksEquipped||[], open=perkSlots(), done=stats.totalPrestiges||0;
  bar.innerHTML='';
  PERK_SLOT_AT.forEach((need, i)=>{
    const el=document.createElement('button'); el.type='button';
    const id=eq[i], p=id && PERKS.find(x=>x.id===id);
    if(i>=open){
      el.className='perkSlot locked';
      el.innerHTML=`<span class="psIcon">${icon('lock')}</span><span class="psName">${t('perk_slot_locked')}</span>`
        +`<span class="slotTip">${t('perk_slot_locked_tip',{k:need, n:Math.min(done,need)})}</span>`;
      el.addEventListener('click', ()=>{
        bar.querySelectorAll('.perkSlot.showTip').forEach(x=>{ if(x!==el) x.classList.remove('showTip'); });
        el.classList.toggle('showTip'); beep(260,0.06,'square',0.07);
        clearTimeout(perkTipTimer); perkTipTimer=setTimeout(()=>el.classList.remove('showTip'), 2800);
      });
    } else if(p){
      el.className='perkSlot filled'+(id===perkJustId?' justFilled':'');
      el.innerHTML=`<span class="psIcon">${icon(p.icon)}</span><span class="psName">${t('perk_'+id+'_name')}</span>`
        +`<span class="slotTip">${t('perk_slot_unequip_tip')}</span>`;
      el.addEventListener('click', ()=>{ togglePerk(id); beep(400,0.08,'sine',0.1); renderPerks(); });
    } else {
      el.className='perkSlot empty';
      el.innerHTML=`<span class="psIcon">+</span><span class="psName">${t('perk_slot_empty')}</span>`
        +`<span class="slotTip">${t('perk_slot_empty_tip')}</span>`;
      el.addEventListener('click', ()=>{
        el.classList.add('showTip'); beep(500,0.05,'sine',0.08);
        clearTimeout(perkTipTimer); perkTipTimer=setTimeout(()=>el.classList.remove('showTip'), 2200);
        const g=document.getElementById('perkGrid'); if(g){ g.classList.remove('nudge'); void g.offsetWidth; g.classList.add('nudge'); }
      });
    }
    bar.appendChild(el);
  });
}
function renderPerks(){
  const grid=document.getElementById('perkGrid'); if(!grid) return;
  renderPerkSlots();
  grid.innerHTML='';
  PERKS.forEach(p=>{
    const owned=perkOwned(p.id), on=perkEquipped(p.id);
    const card=document.createElement('div');
    card.className='shopCard boostCard perkCard'+(on?' equipped':'')+(owned?'':' notOwned')+(p.id===perkJustId?' justBought':'');
    const status = !owned
      ? `<div class="price core">${icon('atom')} ${p.cost}</div>`
      : on ? `<div class="price ok">${icon('check')} ${t('perk_equipped')}</div>`
           : `<div class="price">${t('perk_tap_equip')}</div>`;
    card.innerHTML=`<div class="boostIcon">${icon(p.icon)}</div>`
      +`<div class="cn">${t('perk_'+p.id+'_name')}</div>`
      +`<div class="bdesc upDesc">${t('perk_'+p.id+'_desc')}</div>`+status;
    card.addEventListener('click', ()=>{
      if(!owned){
        if((stats.cores||0)<p.cost){ queueToast(t('core_insufficient_toast')); beep(200,0.1,'square',0.1); return; }
        if(buyPerk(p.id)){
          beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
          perkJustId=p.id; clearTimeout(perkJustTimer);
          perkJustTimer=setTimeout(()=>{ perkJustId=null; renderPerks(); }, 2400);
          updatePrestigePreview(); renderPerks();
        }
        return;
      }
      if(togglePerk(p.id)){
        beep(on?400:800,0.08,'sine',0.1);
        if(!on){ perkJustId=p.id; clearTimeout(perkJustTimer); perkJustTimer=setTimeout(()=>{ perkJustId=null; renderPerks(); }, 900); }
        renderPerks();
      }
      else { queueToast(t('perk_slots_full_toast')); beep(200,0.1,'square',0.1); }
    });
    grid.appendChild(card);
  });
}
const CORE_EFFECT_FORMAT = {
  hp:n=>'+'+n+' '+t('unit_hp'),
  coinPct:n=>'+'+pctText(n),
  boostDur:n=>'+'+pctText(n),
  multPower:n=>'+×'+(Math.round(n*100)/100),
  startCombo:n=>'+'+n+' '+t('unit_combo'),
  hazardSoften:n=>'-'+pctText(n)+' '+t('unit_hazard'),
  heartBoost:n=>'+'+pctText(n)+' '+t('unit_heart_chance'),
};
function coreEffectText(node){
  return Object.keys(node.effects).map(k=>CORE_EFFECT_FORMAT[k](node.effects[k])).join(' · ');
}
function coreEffectDesc(node){
  if(node.id==='core_root') return t('core_desc_root');
  if(node.id==='core_capstone') return t('core_desc_capstone');
  const k=Object.keys(node.effects)[0];
  return k ? t('core_desc_'+k) : '';
}

// Ağacın geometrisi: kök tam merkezde, 6 dal 60°'lik dilimlere yayılıyor,
// her dalın düğümleri kendi açısında artan yarıçaplarda ("dalın ucuna
// doğru") diziliyor — gerçek bir ağaç gibi kök->dal->uç. Tüm dalların en
// dış ucu ortak, kesikli bir "birleşme halkası"na değiyor, o halka da tek
// bir çizgiyle en altta capstone'a bağlanıyor; böylece "6 dalın hepsi
// birleşiyor" hissi, birbirini kesen 6 ayrı çizgi çizmeden veriliyor.
//
// Düğüm boyutu artık HER düğümde sabit değil, "kademe"ye göre değişiyor:
//   root   — her zaman sahip, gövde gibi sabit büyük.
//   owned  — zaten alınmış, orta boy (yeşil).
//   frontier — o dalda SIRADA alınabilecek TEK düğüm, büyük+nabız (kırmızı) —
//              gözün direkt gideceği yer burası.
//   hint   — frontier'dan sonraki, henüz sırası gelmemiş düğümler; küçük
//            birer nokta, tıklanmıyor, sadece "ileride buraya gidiyor" ipucu.
// Eskiden dalın TÜM düğümleri aynı boyuttaydı ve adım payı düğüm çapından
// küçüktü — bu da üst üste binmelerine yol açıyordu (bkz. topografi
// ölçümü). Artık her adımda GAP sabit kalıyor, boyut kademeye göre
// değiştiği için üst üste binme matematiksel olarak imkânsız: hint'ler
// küçük olduğu için sıkışık, frontier büyüdüğünde de önceki/sonraki adım
// otomatik olarak ondan uzaklaşıyor.
const CORE_CX=290, CORE_CY=250, CORE_VBW=580, CORE_VBH=610, CORE_RING_R=270;
const CORE_TIER_R = {root:22, owned:15, frontier:27, hint:7};
const CORE_GAP = 12;
function coreNodeTier(id){
  if(id==='core_root') return 'root';
  if(coreNodeOwned(id)) return 'owned';
  // Dallar KESİNLİKLE doğrusal bir zincir (her düğüm bir öncekini
  // gerektirir) — bu yüzden "sahip değilim ama ön koşulu tamam" durumu bir
  // dalda HER ZAMAN tam olarak tek bir düğümde doğru olur: frontier budur.
  return coreNodeReqMet(coreNode(id)) ? 'frontier' : 'hint';
}
function coreTreeLayout(){
  const nodes=[{id:'core_root', x:CORE_CX, y:CORE_CY, r:CORE_TIER_R.root, tier:'root'}];
  const lines=[];
  CORE_BRANCHES.forEach((branch,bi)=>{
    const angle = bi*60*Math.PI/180;
    let runningRadius=0, prevR=CORE_TIER_R.root, px=CORE_CX, py=CORE_CY;
    branch.ids.forEach(id=>{
      const tier = coreNodeTier(id);
      const r = CORE_TIER_R[tier];
      runningRadius += prevR + CORE_GAP + r;
      const x=CORE_CX+Math.cos(angle)*runningRadius, y=CORE_CY+Math.sin(angle)*runningRadius;
      nodes.push({id, x, y, r, tier});
      lines.push({x1:px,y1:py,x2:x,y2:y,to:id});
      px=x; py=y; prevR=r;
    });
  });
  const capTier = coreNodeTier('core_capstone');
  const capX=CORE_CX, capY=CORE_CY+CORE_RING_R+35;
  nodes.push({id:'core_capstone', x:capX, y:capY, r:CORE_TIER_R[capTier], tier:capTier});
  lines.push({x1:CORE_CX,y1:CORE_CY+CORE_RING_R,x2:capX,y2:capY,to:'core_capstone',ring:true});
  return {nodes, lines};
}
// Ağaç sabit en-boy oranlı (580/610); kısa ekranlarda (Safari çubukları,
// küçük iPhone'lar) kaydırma olmadan sığsın diye genişliği eldeki
// yüksekliğe göre küçültülür.
function fitCoreTree(){
  const stage=document.querySelector('#coreTreeWrap .coreTreeStage');
  const body=document.querySelector('#screen-upgrades .screenBody');
  if(!stage || !body || !body.clientHeight) return;
  const line=document.querySelector('#coreTreeWrap .coreProgressLine');
  const avail=body.clientHeight - (line ? line.offsetHeight : 0) - 12;
  const w=Math.max(220, Math.min(body.clientWidth, 380, avail*580/610));
  stage.style.width=w+'px';
}
window.addEventListener('resize', ()=>{ if(upgradesTab==='core') fitCoreTree(); });
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
  // Hint'ler tıklanabilir bir HTML buton değil, sadece bu katmandaki küçük
  // bir nokta — gereksiz yere ufak dokunma hedefleri çoğaltmamak için.
  nodes.forEach(n=>{ if(n.tier==='hint') svg += `<circle cx="${n.x}" cy="${n.y}" r="${n.r}" class="coreHintDot"/>`; });
  svg += '</svg>';

  let overlay = '';
  CORE_BRANCHES.forEach((branch,bi)=>{
    const angle = bi*60*Math.PI/180;
    const lx=CORE_CX+Math.cos(angle)*(CORE_RING_R-10), ly=CORE_CY+Math.sin(angle)*(CORE_RING_R-10);
    overlay += `<div class="coreBranchTag" style="left:${(lx/CORE_VBW*100).toFixed(2)}%;top:${(ly/CORE_VBH*100).toFixed(2)}%">${t(branch.labelKey)}</div>`;
  });
  nodes.forEach(n=>{
    if(n.tier==='hint') return;
    const node=coreNode(n.id);
    const stateCls = n.tier==='frontier' ? 'buyable frontier' : 'owned';
    const justBought = n.id===coreJustBoughtId;
    const wPct=(n.r*2/CORE_VBW*100).toFixed(2), hPct=(n.r*2/CORE_VBH*100).toFixed(2);
    overlay += `<button class="coreNodeBtn ${stateCls}${justBought?' justBought':''}" data-core-id="${n.id}" `
      +`style="left:${(n.x/CORE_VBW*100).toFixed(2)}%;top:${(n.y/CORE_VBH*100).toFixed(2)}%;width:${wPct}%;height:${hPct}%;">`
      +icon(node.icon)+(justBought?`<span class="coreNodeCheckBadge">${icon('check')}</span>`:'')+`</button>`;
  });

  wrap.innerHTML = `<div class="coreTreeStage">${svg}<div class="coreTreeNodes">${overlay}</div></div>`;
  fitCoreTree();
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
  document.getElementById('ciDesc').textContent=coreEffectDesc(node);
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
        beep(700,0.1,'sine',0.13); beep(1000,0.1,'triangle',0.12);
        coreJustBoughtId=id;
        clearTimeout(coreJustBoughtTimer);
        coreJustBoughtTimer=setTimeout(()=>{ coreJustBoughtId=null; renderCoreTree(); }, 2400);
        closeCoreInfo(); renderCoreTree(); updatePrestigePreview();
        if(tutorialActive && typeof tutorialOnCoreBought==='function') tutorialOnCoreBought(id);
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
    ? icon('atom')+' '+t('prestige_preview',{n:gain}).replace(/^⚛\s*/,'')
    : t('prestige_preview_zero');
  const walletEl=document.getElementById('upgradesCoreWallet'); if(walletEl) walletEl.textContent=stats.cores||0;
}
function attemptPrestige(){
  const gain=coresPreview();
  if(gain<=0){ queueToast(t('prestige_zero_toast')); beep(200,0.1,'square',0.1); return; }
  showPurchaseConfirm('replay', t('reset_progress_btn')+' — +'+gain+' ⚛', null, ()=>{
    const got=performPrestige();
    renderUpgrades(); renderCoreTree(); updatePrestigePreview(); renderPerks(); renderHeat();
    if(tutorialActive && typeof tutorialOnPrestige==='function') tutorialOnPrestige(got);
    beep(300,0.15,'square',0.12); beep(500,0.15,'triangle',0.1);
  }, t('reset_progress_confirm'));
}
