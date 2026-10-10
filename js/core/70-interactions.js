/* ================= generic interactions (delegated, subject-agnostic) =================
   Choice groups, blanks+chips, tick rows, tiles, judges, things, draw pad,
   name bubbles, tap-to-hear, link stages. ================== */
/* ================= generic interactions ================= */
/* choice groups */
document.addEventListener('click',e=>{ const b=e.target.closest('.choice'); if(!b)return;
  S.tap(); const g=b.closest('.choices'); const was=b.classList.contains('sel');
  $$('.choice',g).forEach(c=>c.classList.remove('sel'));
  if(!was)b.classList.add('sel'); });

/* blanks + chips (numbers & words) */
document.addEventListener('click',e=>{ const b=e.target.closest('.blankslot'); if(!b)return;
  S.tap(); const card=b.closest('.card');
  $$('.blankslot',card).forEach(x=>{ if(x!==b)x.classList.remove('sel'); });
  if(b.dataset.val){ delete b.dataset.val; b.textContent=''; b.classList.remove('filled');
    const chip=$$('.chip',card).find(c=>c.dataset.v===b.dataset.oldv); if(chip)chip.classList.remove('used');
  } else { b.classList.add('sel'); } });
document.addEventListener('click',e=>{ const ch=e.target.closest('.chip'); if(!ch)return;
  const card=ch.closest('.card'); S.pop();
  const slots=$$('.blankslot',card);
  const armed=$('.blankslot.sel',card) || slots.find(b=>!b.dataset.val);
  if(!armed)return;
  if(armed.dataset.val){ const old=$$('.chip',card).find(c=>c.dataset.v===armed.dataset.val); if(old)old.classList.remove('used'); }
  armed.dataset.val=ch.dataset.v; armed.dataset.oldv=ch.dataset.v; armed.textContent=ch.dataset.v;
  armed.classList.add('filled'); armed.classList.remove('sel');
  ch.classList.add('used');
  const nxt=slots.find(b=>!b.dataset.val); if(nxt)nxt.classList.add('sel'); });

/* tick rows */
document.addEventListener('click',e=>{ const t=e.target.closest('.tickrow'); if(!t)return;
  S.tap(); t.classList.toggle('on'); });

/* number tiles (circle the evens / odd one out) */
document.addEventListener('click',e=>{ const t=e.target.closest('.numtile'); if(!t)return;
  const box=t.closest('.numtiles'); S.tap();
  if(box&&box.dataset.mode==='single'){ $$('.numtile',box).forEach(x=>x.classList.remove('sel')); t.classList.add('sel'); }
  else t.classList.toggle('sel'); });

/* judge circles (GS): j-col = colour green/red, j-sym = tick/cross — cycle empty → yes → no */
document.addEventListener('click',e=>{ const j=e.target.closest('.judge'); if(!j)return;
  S.tap(); const st=j.dataset.st==='y'?'n':(j.dataset.st==='n'?'':'y');
  j.dataset.st=st; j.classList.toggle('y',st==='y'); j.classList.toggle('n',st==='n'); });

/* daily-item tiles (GS clean-or-change) */
document.addEventListener('click',e=>{ const t=e.target.closest('.thing'); if(!t)return;
  S.pop(); t.classList.toggle('on'); });

/* draw pad: colour swatches + clear button */
document.addEventListener('click',e=>{ const s=e.target.closest('.swatch'); if(!s)return;
  S.tap(); const card=s.closest('.card'); $$('.swatch',card).forEach(x=>x.classList.remove('sel'));
  s.classList.add('sel'); const cv=$('canvas',card); if(cv)cv._color=s.dataset.c; });
document.addEventListener('click',e=>{ const c=e.target.closest('.clear-draw'); if(!c)return;
  S.whoosh(); const card=c.closest('.card'); const cv=$('canvas',card); if(!cv)return;
  cv.getContext('2d').clearRect(0,0,cv.width,cv.height); cv._ink=0; });

/* draw pad engine — finger drawing on the canvas (re-initialised on New Qs) */
function initDrawPad(cv){ if(!cv||cv._pad)return; cv._pad=1;
  const ctx=cv.getContext('2d'); ctx.lineWidth=7; ctx.lineCap='round'; ctx.lineJoin='round';
  let drawing=false, last=null;
  const pos=e=>{ const r=cv.getBoundingClientRect();
    return {x:(e.clientX-r.left)*cv.width/r.width, y:(e.clientY-r.top)*cv.height/r.height}; };
  cv.addEventListener('pointerdown',e=>{ e.preventDefault(); drawing=true; last=pos(e);
    cv._ink=(cv._ink||0)+1; ctx.strokeStyle=cv._color||'#3B6FD4';
    try{cv.setPointerCapture(e.pointerId);}catch(_){}
    ctx.beginPath(); ctx.moveTo(last.x,last.y); ctx.lineTo(last.x+.1,last.y+.1); ctx.stroke(); S.pop(); });
  cv.addEventListener('pointermove',e=>{ if(!drawing)return; const p=pos(e);
    ctx.beginPath(); ctx.moveTo(last.x,last.y); ctx.lineTo(p.x,p.y); ctx.stroke(); last=p; });
  ['pointerup','pointercancel'].forEach(ev=>cv.addEventListener(ev,()=>{drawing=false;})); }

/* ten-frame boxes */
document.addEventListener('click',e=>{ const b=e.target.closest('.tf-box'); if(!b)return;
  S.tap(); b.classList.toggle('on'); });

/* count items */
document.addEventListener('click',e=>{ const c=e.target.closest('.count-item'); if(!c)return;
  S.pop(); c.classList.toggle('counted'); });

/* name bubbles (queue) */
let armedName=null;
document.addEventListener('click',e=>{ const ch=e.target.closest('.nchip'); if(!ch)return;
  S.tap(); if(ch.classList.contains('used'))return;
  $$('.nchip').forEach(c=>c.classList.remove('armed'));
  armedName=ch; ch.classList.add('armed'); toast('Now tap a name bubble ☁️',1600); });
document.addEventListener('click',e=>{ const b=e.target.closest('.nb'); if(!b)return;
  if(b.classList.contains('given'))return;
  if(armedName){ if(b.dataset.name){ const old=$$('.nchip').find(c=>c.dataset.name===b.dataset.name);
      if(old){old.classList.remove('used'); old.textContent=old.dataset.orig;} }
    b.dataset.name=armedName.dataset.name; b.textContent=armedName.dataset.name; b.classList.add('full');
    armedName.classList.add('used'); armedName.classList.remove('armed'); armedName=null;
    S.ding();
  } else if(b.dataset.name){ const old=$$('.nchip').find(c=>c.dataset.name===b.dataset.name);
    if(old){old.classList.remove('used');} b.dataset.name=''; b.textContent='?'; b.classList.remove('full');
    S.tap();
  } else { toast('Pick a name from the tray first 👆',1600); } });

/* hear a filled-in word again (labels, numbers) — capture phase, reads BEFORE the tap clears it */
document.addEventListener('click',e=>{
  const lb=e.target.closest('.blankslot'); if(!lb||!lb.dataset.val)return;
  if('speechSynthesis' in window&&!muted){ if(!VOICE)pickVoice();
    speechSynthesis.cancel(); speakUtter(lb,emojify(lb.dataset.val),++readSeq); }
},true);

/* tap any words to hear them 🔈 */
document.addEventListener('click',e=>{
  if(e.target.closest('button, input, a, select, .tickrow, .nb'))return;
  const t=e.target.closest('.qline, .card-instr, .scene-caption, .speech, .tip, .hint, .tray-label, .page-banner .pb-t span, .stext, .ptxt, .qq, .case-scene, .legend, .mgroup .msub');
  if(!t)return; S.tap(); speak(t); });
/* per-card "Read to me" — reads the whole card: questions AND answer options */
document.addEventListener('click',e=>{ const b=e.target.closest('.read-btn'); if(!b)return;
  S.tap(); const card=b.closest('.card'); if(card)speakCard(card); });

/* link stages (delegated, supports several per page) */
function itemCenter(el,stage){ const s=stage.getBoundingClientRect(), r=el.getBoundingClientRect();
  return {x:r.left-s.left+r.width/2, y:r.top-s.top+r.height/2}; }
document.addEventListener('click',e=>{ const it=e.target.closest('.link-item'); if(!it)return;
  const stage=it.closest('.link-stage'); S.tap(); const id=it.dataset.uid;
  const pairs=stage._pairs||(stage._pairs=new Map()); let pending=stage._pending;
  if(pending===it){ pending.classList.remove('pending'); stage._pending=null; return; }
  if(it.classList.contains('linked')){ // unlink
    for(const [k,p] of pairs){ if(k===id||p.r===id){
      const a=stage.querySelector(`[data-uid="${k}"]`), b=stage.querySelector(`[data-uid="${p.r}"]`);
      a.classList.remove('linked'); b.classList.remove('linked');
      if(p.line)p.line.remove(); pairs.delete(k); break; } }
    redraw(stage); return; }
  if(!pending){ pending=it; it.classList.add('pending'); stage._pending=pending; return; }
  if(pending.dataset.g===it.dataset.g){ pending.classList.remove('pending'); pending=it; it.classList.add('pending'); stage._pending=it; return; }
  const a=pending; a.classList.remove('pending'); stage._pending=null;
  const line=document.createElementNS('http://www.w3.org/2000/svg','line');
  line.setAttribute('stroke','#F76FA0'); line.setAttribute('stroke-width','5');
  line.setAttribute('stroke-linecap','round');
  stage.querySelector('svg').appendChild(line);
  pairs.set(a.dataset.g==='L'?a.dataset.uid:it.dataset.uid, {r:a.dataset.g==='L'?it.dataset.uid:a.dataset.uid, line});
  a.classList.add('linked'); it.classList.add('linked');
  redraw(stage); S.sparkle(); burstAt(it,4); });
function redraw(stage){ const svg=stage.querySelector('svg');
  const pairs=stage._pairs||new Map();
  pairs.forEach((p,k)=>{ const a=stage.querySelector(`[data-uid="${k}"]`), b=stage.querySelector(`[data-uid="${p.r}"]`);
    if(!a||!b)return; const c1=itemCenter(a,stage), c2=itemCenter(b,stage);
    p.line.setAttribute('x1',c1.x); p.line.setAttribute('y1',c1.y);
    p.line.setAttribute('x2',c2.x); p.line.setAttribute('y2',c2.y); }); }
window.addEventListener('resize',()=>$$('.link-stage').forEach(redraw));
window.addEventListener('scroll',()=>$$('.link-stage').forEach(redraw),{passive:true});
