/* ================= pages: one card per page, nav, timers, report card, cert ================= */
const PAGE_CARDS={}; const CARD_PAGE={}; const CARD_TITLE={}; const STATS_PAGE={}; const CARD_STREAM={};
let pageSeq=1;

/* ===== per-subject & per-question timers + wrong counts ===== */
function freshT(){ return {start:null, acc:0, frozen:false, card:{}, seg:null, wrong:{}, tries:{}}; }
const TMAP={}; const Tof=st=>TMAP[st]||(TMAP[st]=freshT());
function resetTimers(){ for(const k in TMAP)delete TMAP[k]; paintTimer(); }
function modMs(st){ const t=Tof(st); return t.acc+((t.start&&!t.frozen)?Date.now()-t.start:0); }
function fmtT(ms){ const s=Math.max(0,Math.floor(ms/1000)); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); }
function closeSeg(st){ const t=Tof(st); if(t.seg){ t.card[t.seg.id]=(t.card[t.seg.id]||0)+(Date.now()-t.seg.t0); t.seg=null; } }
function openSeg(st,n){ const t=Tof(st); closeSeg(st);
  const id=(PAGE_CARDS[n]||[])[0]; if(!id)return;
  const el=$('#'+id); if(el&&!el.classList.contains('done')) t.seg={id,t0:Date.now()}; }
function pauseMod(st){ const t=Tof(st); closeSeg(st); if(t.start&&!t.frozen){ t.acc+=Date.now()-t.start; t.start=null; } }
function resumeMod(st){ const t=Tof(st); if(!t.frozen&&t.start==null) t.start=Date.now(); }
function freezeMod(st){ const t=Tof(st); closeSeg(st);
  if(t.start&&!t.frozen){ t.acc+=Date.now()-t.start; } t.start=null; t.frozen=true; }
function paintTimer(){ const p=$('#timerPill'); if(!p)return;
  if(!G.stream){ p.style.display='none'; return; }
  p.style.display=''; p.textContent='⏱ '+fmtT(modMs(G.stream)); }
setInterval(paintTimer,500);

/* ===== stars / progress ===== */
const totalStars=()=>Object.values(SUBJECTS).reduce((a,s)=>a+s.cards.length,0);
const doneStars=()=>Object.values(SUBJECTS).reduce((a,s)=>a+(G.done[s.id]||0),0);
function paintStars(){ $('#starPill').textContent=G.stream
  ? `⭐ ${G.done[G.stream]||0}/${SUBJECTS[G.stream].cards.length}`
  : `⭐ ${doneStars()}/${totalStars()}`; }
function starFly(card){ const r=card.getBoundingClientRect(); const s=document.createElement('span');
  s.className='starfly'; s.textContent='⭐ +1';
  s.style.left=Math.max(10,r.left+r.width/2-36)+'px'; s.style.top=Math.max(8,r.top+6)+'px';
  document.body.appendChild(s); setTimeout(()=>s.remove(),1350); }
function markDone(card){ if(card.classList.contains('done'))return;
  card.classList.add('done','win'); setTimeout(()=>card.classList.remove('win'),1450);
  const st=CARD_STREAM[card.id]||G.stream||Object.keys(SUBJECTS)[0];
  closeSeg(st);
  G.done[st]=(G.done[st]||0)+1; paintStars();
  const pill=$('#starPill'); pill.classList.remove('bump'); void pill.offsetWidth; pill.classList.add('bump');
  S.fanfare(); burstAt($('.check-btn',card)||card,16);
  const r=card.getBoundingClientRect();
  burst(r.left+40+Math.random()*Math.max(r.width-80,60), r.top+18, 16);
  setTimeout(()=>{ if(!document.body.contains(card))return;
    const r2=card.getBoundingClientRect(); burst(r2.left+r2.width*0.5, r2.top+12, 14); },300);
  starFly(card); mascotCheer(praise()); paintDots(); paintTimer();
  const list=SUBJECTS[st].pages, pi=list.indexOf(CARD_PAGE[card.id]);
  if(G.done[st]>=SUBJECTS[st].cards.length){
    freezeMod(st);
    setTimeout(()=>{ if(G.stream===st) go(STATS_PAGE[st]); },2000);
    setTimeout(()=>{ if(G.stream===st&&G.page===STATS_PAGE[st]) showCert(st); },5600); }
  else if(pi>-1&&pi<list.length-1){
    setTimeout(()=>{ if(G.stream===st&&G.page===CARD_PAGE[card.id]){ S.whoosh(); go(list[pi+1]); } },1800); } }

/* ===== page navigation ===== */
function go(n){ if(G.stream)closeSeg(G.stream); G.page=n;
  $$('.page').forEach(p=>p.classList.remove('active'));
  $('#pg'+n).classList.add('active');
  const list=G.stream?SUBJECTS[G.stream].pages:[1];
  $('#prevBtn').disabled=!G.stream||n===list[0];
  $('#nextBtn').disabled=!G.stream||n===list[list.length-1];
  $('#homeBtn').disabled=!G.stream;
  if(G.stream){ openSeg(G.stream,n); if(STATS_PAGE[G.stream]===n)renderStats(G.stream); }
  paintDots(); paintTimer(); window.scrollTo({top:0,behavior:'smooth'}); }
function goHome(){ if(G.stream){ closeSeg(G.stream); pauseMod(G.stream); }
  S.whoosh(); G.stream=null; G.page=1;
  $$('.page').forEach(p=>p.classList.remove('active'));
  $('#pg1').classList.add('active');
  $('#prevBtn').disabled=true; $('#nextBtn').disabled=true; $('#homeBtn').disabled=true;
  rollHero(); paintStars(); paintDots(); paintTimer(); window.scrollTo({top:0,behavior:'smooth'}); }
function startStream(st){ G.stream=st; resumeMod(st); paintStars(); paintDots(); go(SUBJECTS[st].pages[0]);
  mascotCheer(SUBJECTS[st].hello); }
$('#prevBtn').addEventListener('click',()=>{ if(!G.stream)return; S.whoosh();
  const list=SUBJECTS[G.stream].pages, i=list.indexOf(G.page);
  go(list[Math.max(0,i-1)]); });
$('#nextBtn').addEventListener('click',()=>{ if(!G.stream)return; S.whoosh();
  const list=SUBJECTS[G.stream].pages, i=list.indexOf(G.page);
  go(list[Math.min(list.length-1,i+1)]); });
$('#homeBtn').addEventListener('click',()=>{ goHome(); });

/* ===== report card (stats page) ===== */
function statsShell(st){ const m=SUBJECTS[st];
  return `<div class="card" id="stats-${st}">${cardHead('stats-'+st,'🏆',m.report+' 📊',
    `You finished ALL ${m.cards.length} ${m.unit}!`
      +' Here is how you did — every question, your time and your tries.',false)}
    <div class="stats-hero" id="statsHero-${st}"></div>
    <div class="stat-rows" id="statRows-${st}"></div>
    <div class="stat-total" id="statTotal-${st}"></div>
    <div class="btnrow"><button class="read-btn" id="statRead-${st}">🔈 Read to me</button>
      <button class="check-btn" id="certBtn-${st}">🏆 Get your certificate!</button>
      <button class="read-btn" id="againBtn-${st}">🔁 Play again</button></div></div>`; }
function renderStats(st){ const t=Tof(st); const m=SUBJECTS[st]; const ids=m.cards;
  const rows=ids.map(id=>{ const ms=t.card[id]||0; const tr=t.tries[id]||0; const wr=t.wrong[id]||0;
    const badge= wr? `✘ ${wr} wrong tr${wr>1?'ies':'y'}` : (tr>1? `✓ solved (${tr} checks)` : '✓ first try!');
    return `<div class="stat-row stext" data-go="${CARD_PAGE[id]||''}" title="Tap to open this question"><span class="sn">${CARD_TITLE[id]||id}</span>
      <span class="sw ${wr?'retry':'good'}">${badge}</span>
      <span class="st">⏱ ${fmtT(ms)}</span></div>`; }).join('');
  $('#statRows-'+st).innerHTML=rows;
  const wrTot=ids.reduce((a,id)=>a+(t.wrong[id]||0),0);
  const retried=ids.filter(id=>(t.wrong[id]||0)>0).length;
  const hero= wrTot===0 ? '🌟 PERFECT! Every answer right on the first try! 🌟'
    : `💪 You fixed <b>${wrTot}</b> wrong answer${wrTot>1?'s':''} across <b>${retried}</b> question${retried>1?'s':''} — great job not giving up!`;
  $('#statsHero-'+st).innerHTML='🧁 '+hero;
  $('#statTotal-'+st).innerHTML=
    `<span class="tpill blue">⏱ Whole module: ${fmtT(modMs(st))}</span>
     <span class="tpill">⭐ Stars: ${G.done[st]}/${ids.length}</span>
     <span class="tpill pink">✘ Wrong answers: ${wrTot}</span>
     <span class="tpill pink">🔁 Needed a 2nd try: ${retried}</span>`; }

/* ===== certificate (per subject) ===== */
function showCert(st){ st=st||G.stream||Object.keys(SUBJECTS)[0]; S.tada();
  const m=SUBJECTS[st];
  $('#certName').textContent=($('#kidName').value||'My friend');
  $('#certTitle').textContent=m.certTitle;
  $('#certText').innerHTML=m.certText(m.cards.length);
  $('#cert').classList.add('show');
  let t=0; const iv=setInterval(()=>{ burst(80+Math.random()*(innerWidth-160), 120+Math.random()*260, 10);
    if(++t>7)clearInterval(iv); }, 350); }
$('#certClose').addEventListener('click',()=>{ $('#cert').classList.remove('show'); S.tap(); });

/* ===== build one .page per question card, in subject order ===== */
function mkPages(st,groups){ const pages=[];
  groups.flat().forEach(sec=>{ pageSeq++;
    const div=document.createElement('section'); div.className='page dyn'; div.id='pg'+pageSeq;
    div.innerHTML=sec.banner+sec.html; $('#pages').appendChild(div);
    pages.push(pageSeq);
    const cid=$('.card',div).id; PAGE_CARDS[pageSeq]=[cid]; CARD_PAGE[cid]=pageSeq; CARD_STREAM[cid]=st;
    SUBJECTS[st].cards.push(cid);
    const tb=$('.card-top b',div); CARD_TITLE[cid]=tb?tb.textContent:cid; });
  pageSeq++;
  const sdiv=document.createElement('section'); sdiv.className='page dyn'; sdiv.id='pg'+pageSeq;
  sdiv.innerHTML=statsShell(st); $('#pages').appendChild(sdiv);
  STATS_PAGE[st]=pageSeq; pages.push(pageSeq);
  return pages; }

function paintDots(){ const box=$('#dots');
  if(!G.stream){ box.innerHTML='<div class="home-tip">👆 Choose your adventure above! ☁️</div>'; return; }
  box.innerHTML=SUBJECTS[G.stream].pages.map(n=>{
    const ids=PAGE_CARDS[n]||[];
    if(!ids.length)return `<div class="dot stat${n===G.page?' on':''}" data-p="${n}" title="My report card">📊</div>`;
    const done=ids.every(id=>{ const c=$('#'+id); return c&&c.classList.contains('done'); });
    return `<div class="dot${n===G.page?' on':''}${done?' done':''}" data-p="${n}"></div>`; }).join('');
  $$('#dots .dot').forEach(d=>d.addEventListener('click',()=>{S.tap();go(+d.dataset.p);})); }

function buildAll(){
  G.cards={}; armedName=null; resetTimers();
  for(const st in SUBJECTS){ G.done[st]=0; SUBJECTS[st].cards=[]; }
  for(const k in PAGE_CARDS)delete PAGE_CARDS[k];
  for(const k in CARD_PAGE)delete CARD_PAGE[k];
  for(const k in CARD_TITLE)delete CARD_TITLE[k];
  for(const k in CARD_STREAM)delete CARD_STREAM[k];
  $$('.page.dyn').forEach(p=>p.remove()); pageSeq=1;
  for(const st in SUBJECTS)
    SUBJECTS[st].pages=mkPages(st, SUBJECTS[st].modules.map(m=>m.build()));
  const dc=$('#drawCv'); if(dc)initDrawPad(dc);
  $$('.page').forEach(p=>$$('.card',p).forEach(c=>c.classList.remove('done')));
  paintDots(); paintStars(); paintTimer();
}

/* ===== check buttons — count tries and wrong answers (S.no fired) ===== */
let _noFlag=false;
{ const _no=S.no.bind(S); S.no=(...a)=>{ _noFlag=true; return _no(...a); }; }
document.addEventListener('click',e=>{ const b=e.target.closest('.check-btn'); if(!b)return;
  const id=b.dataset.check; if(!id)return;
  const fn=G.cards[id]&&G.cards[id].check; if(!fn)return;
  const st=CARD_STREAM[id]||G.stream; if(st)Tof(st).tries[id]=(Tof(st).tries[id]||0)+1;
  _noFlag=false; fn();
  if(_noFlag&&st){ Tof(st).wrong[id]=(Tof(st).wrong[id]||0)+1; paintTimer(); } });

/* ===== stats / certificate / again buttons (any subject) ===== */
document.addEventListener('click',e=>{ const b=e.target.closest('[id^="certBtn-"]'); if(!b)return;
  S.tada(); showCert(b.id.slice('certBtn-'.length)); });
document.addEventListener('click',e=>{ const b=e.target.closest('[id^="againBtn-"]'); if(!b)return;
  const st=b.id.slice('againBtn-'.length); buildAll(); startStream(st); });
document.addEventListener('click',e=>{ const r=e.target.closest('.stat-row[data-go]'); if(!r||!r.dataset.go)return;
  S.tap(); go(+r.dataset.go); });
