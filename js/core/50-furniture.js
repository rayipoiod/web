/* ================= question furniture: card shell, choices, chips, marking ================= */
/* ================= page furniture ================= */
function banner(imgKey,title,sub){ return `<div class="page-banner"><img src="${DECO[imgKey]}" alt="">
  <div class="pb-t"><b>${title}</b><span>${sub}</span></div></div>`; }
function cardHead(id,letter,title,instr,star){ return `<div class="card-top">
  ${star?'<span class="star-mark">★</span>':''}<span class="ex-letter">${letter}</span>
  <b>${title}</b><span class="done-badge">Yummy! ✓</span></div>
  <div class="card-instr">${instr}</div>`; }
function cardFoot(id){ return `<div class="btnrow">
  <button class="read-btn" data-read="${id}">🔈 Read to me</button>
  <button class="check-btn" data-check="${id}">Check my answers ✓</button></div>
  <div class="hint" id="hint-${id}"></div>`; }
function nm(c){ return `<span class="nm">${c}</span>`; }
function choiceGroup(q,opts){ return `<span class="choices" data-q="${q}">`+opts.map(o=>
  `<button class="choice" data-v="${o.v}">${o.h}</button>`).join('')+`</span>`; }
function selOf(card,q){ const g=$(`.choices[data-q="${q}"]`,card); const s=$('.choice.sel',g);
  return s?s.dataset.v:null; }
function chipTray(vals,label,keepDupes){ const u=keepDupes?[...vals]:[...new Set(vals)];
  return `<div class="chip-tray"><div class="tray-label">${label}</div>`+
    shuf(u).map(v=>`<button class="chip" data-v="${esc(v)}">${esc(v)}</button>`).join('')+`</div>`; }
function scatterHTML(e,n,seed){ let pts=''; const cols=Math.min(5,Math.max(3,Math.ceil(Math.sqrt(n*1.4))));
  const rows=Math.ceil(n/cols);
  for(let i=0;i<n;i++){ const c=i%cols, r=Math.floor(i/cols);
    const x=12+c*(76/Math.max(cols-1,1))+(r%2?4:-4)+(Math.random()*10-5);
    const y=14+r*(72/Math.max(rows-1,1))+(Math.random()*8-4);
    const rot=Math.floor(Math.random()*50)-25;
    pts+=`<button class="count-item" style="left:${x}%;top:${y}%;transform:translate(-50%,-50%) rotate(${rot}deg)">${e}</button>`; }
  return `<div class="count-stage">${pts}</div>`; }
/* random non-overlapping scatter (percent coords) for the link-up field */
function scatterPos(n,xMin,xMax,yMin,yMax,minDX,minDY){ const pts=[]; let guard=0;
  while(pts.length<n&&guard++<600){
    const x=xMin+Math.random()*(xMax-xMin), y=yMin+Math.random()*(yMax-yMin);
    if(pts.every(p=>Math.abs(p[0]-x)>minDX||Math.abs(p[1]-y)>minDY)) pts.push([x,y]); }
  let i=0; while(pts.length<n){ pts.push([xMin+Math.random()*(xMax-xMin), yMin+(yMax-yMin)*((i+.5)/n)]); i++; }
  return pts; }
function hint(cardId,msg){ const h=$('#hint-'+cardId); h.innerHTML=msg; h.style.display='block';
  h.classList.remove('shake'); void h.offsetWidth; h.classList.add('shake'); }
function hintHide(id){ const h=$('#hint-'+id); if(h){h.style.display='none';} }

/* ===== answer marking: green = correct, red = wrong, amber dashed = missed ===== */
function markOK(el){ if(el){ el.classList.add('ans-ok'); el.classList.remove('ans-no','ans-miss'); } }
function markNO(el){ if(el){ el.classList.add('ans-no'); el.classList.remove('ans-ok','ans-miss'); } }
function markMISS(el){ if(el){ el.classList.add('ans-miss'); el.classList.remove('ans-ok','ans-no'); } }
function clearMarks(card){ $$('.ans-ok,.ans-no,.ans-miss',card)
  .forEach(e=>e.classList.remove('ans-ok','ans-no','ans-miss')); }
function markChoices(card,q,want){ const g=$(`.choices[data-q="${q}"]`,card); if(!g)return;
  const sel=$('.choice.sel',g);
  $$('.choice',g).forEach(c=>{ if(c.dataset.v===want)markOK(c); else if(c===sel)markNO(c); }); }
function markTicks(card){ $$('.tickrow',card).forEach(r=>{ const on=r.classList.contains('on');
  if(on&&r.dataset.ok==='1')markOK(r); else if(on)markNO(r); else if(r.dataset.ok==='1')markMISS(r); }); }
function markAllOK(card){
  $$('.choice.sel',card).forEach(c=>markOK(c));
  $$('.blankslot',card).forEach(s=>{ if(s.dataset.val)markOK(s); });
  $$('.tickrow.on',card).forEach(r=>markOK(r));
  $$('.judge',card).forEach(j=>{ if(j.dataset.st)markOK(j); });
  $$('.thing.on',card).forEach(t=>markOK(t));
  $$('.numtile.sel',card).forEach(t=>markOK(t));
  $$('.nb.full',card).forEach(b=>markOK(b)); }
/* any new tap inside a card wipes the old marks, so the next check is fresh */
document.addEventListener('pointerdown',e=>{ const c=e.target.closest('.card'); if(c)clearMarks(c); },true);

const WS1='Mathematics Worksheet 1 · Topic: Positions';
const WS2='Mathematics Worksheet 2 · Numbers Up to 20';
const CAFE_EMOJI=['🧁','🍩','🍪','🥞','🍓','🍫','🍬','🍰','🥐','☕','🧃','🍎'];
