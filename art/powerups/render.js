// Takviye/can ikonlarını üretir: node art/powerups/render.js -> www/img/items/pw_*.png (çizim kodu: draw.html)
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim()+'/playwright');
const fs=require('fs');
(async()=>{ const b=await chromium.launch(); const p=await b.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+__dirname+'/draw.html'); await p.waitForFunction(()=>window.DONE);
const icons=await p.evaluate(()=>window.ICONS);
for(const [k,v] of Object.entries(icons)) fs.writeFileSync(__dirname+'/../../www/img/items/pw_'+k+'.png', Buffer.from(v.split(',')[1],'base64'));
console.log(Object.keys(icons).join(','), errs.join('|')||'ok'); await b.close(); })();
