/* ============================================================
   Subject: P1 Maths — positions · numbers to 20 · odd & even
   (worksheets 1-2 of the P1 textbook)
   ============================================================ */
defineSubject('math',{
  label:'Maths Fun', icon:'🧮',
  tagline:'Positions · Numbers up to 20',
  cta:'Let\u2019s bake!',
  hello:'Let\u2019s count the treats! 🧁',
  report:'My Maths report card!',
  unit:'café maths challenges',
  certTitle:'🌟 Official Maths Star! 🌟',
  certText:n=>`finished all <b>${n}</b> café maths challenges with Cinnamoroll &amp; friends!<br>Milk only got to eat <b>3</b> cinnamon rolls because of you. 🍥🐶`,
});

/* ================= PAGE 2 · WS1 A · circle the correct answers ================= */
function buildP2(){
  const B2 = banner('icecream', WS1,
    'A. Cinnamoroll\u2019s friends are playing at the caf\u00e9 today \u2014 look carefully, then circle! 🎂');

  /* --- card p2a: three friends in a row --- */
  const [c0,c1,c2]=shuf(CHARS).slice(0,3);
  const figs=[c0,c1,c2].map(c=>`<div class="friend"><img src="${c.img}" alt="${c.name}"><span class="tag">${c.name}</span></div>`).join('');
  let h = `<div class="card" id="p2a">${cardHead('p2a','A','Caf\u00e9 cloud row \u2601',
    'A. Look at the pictures and circle the correct answers.')}`;
  h+=`<div class="scene"><div class="rowline">${figs}</div>
      <div class="scene-caption">Three friends sit on the fluffy cloud bench.</div></div>`;
  const LR=shuf([{v:'left',h:'left'},{v:'right',h:'right'}]);
  h+=`<div class="qline">1. ${nm(c0.name)} is on the ( ${choiceGroup('2a1',LR)} ).</div>`;
  h+=`<div class="qline">2. ${nm(c2.name)} is on the ( ${choiceGroup('2a2',LR)} ).</div>`;
  const BB=shuf([{v:'behind',h:'behind'},{v:'between',h:'between'}]);
  h+=`<div class="qline">3. ${nm(c1.name)} is ( ${choiceGroup('2a3',BB)} ) ${nm(c0.name)} and ${nm(c2.name)} .</div>`;
  h+=cardFoot('p2a')+`</div>`;
  G.cards['p2a']={check(){
    const card=$('#p2a'); hintHide('p2a');
    const a=selOf(card,'2a1'), b=selOf(card,'2a2'), c=selOf(card,'2a3');
    if(!a||!b||!c){ toast('Circle all three answers first 👆'); return; }
    if(a==='left'&&b==='right'&&c==='between'){ markAllOK(card); markDone(card); return; }
    S.no(); markChoices(card,'2a1','left'); markChoices(card,'2a2','right'); markChoices(card,'2a3','between');
    hint('p2a','Cinnamoroll tip: put your finger on the friend named in the question. '
      +'Left is near your left hand, right is near your right hand. The friend in the middle sits <b>between</b> the other two! ☁️');
  }};

  /* --- card p2b: café shelf over/under --- */
  const [e1,e2,e3]=shuf(CAFE_EMOJI).slice(0,3);
  let h2 = `<div class="card" id="p2b">${cardHead('p2b','A','Caf\u00e9 shelf 🍰',
    'A. Look at the pictures and circle the correct answers.')}`;
  h2+=`<div class="scene shelf"><span class="cafedoor">☕</span>
      <div class="shelf-row"><span class="shelf-item">${e1}</span><span class="shelf-item">${e2}</span></div>
      <div class="shelf-row"><span class="shelf-item" style="margin:0 auto">${e3}</span></div>
      <div class="scene-caption">Yummy treats on the caf\u00e9 shelves.</div></div>`;
  const UO=shuf([{v:'under',h:'under'},{v:'over',h:'over'}]);
  const OU=shuf([{v:'over',h:'over'},{v:'under',h:'under'}]);
  const IN=shuf([{v:'is',h:'is'},{v:'is not',h:'is not'}]);
  h2+=`<div class="qline">1. ${emojiSpan(e3)} is ( ${choiceGroup('2b1',UO)} ) ${emojiSpan(e2)} .</div>`;
  h2+=`<div class="qline">2. ${emojiSpan(e1)} is ( ${choiceGroup('2b2',OU)} ) ${emojiSpan(e3)} .</div>`;
  h2+=`<div class="qline">3. ${emojiSpan(e2)} ( ${choiceGroup('2b3',IN)} ) between ${emojiSpan(e1)} and ${emojiSpan(e3)} .</div>`;
  h2+=cardFoot('p2b')+`</div>`;
  G.cards['p2b']={check(){
    const card=$('#p2b'); hintHide('p2b');
    const a=selOf(card,'2b1'), b=selOf(card,'2b2'), c=selOf(card,'2b3');
    if(!a||!b||!c){ toast('Circle all three answers first 👆'); return; }
    if(a==='under'&&b==='over'&&c==='is not'){ markAllOK(card); markDone(card); return; }
    S.no(); markChoices(card,'2b1','under'); markChoices(card,'2b2','over'); markChoices(card,'2b3','is not');
    hint('p2b','Cinnamoroll tip: things on the TOP shelf are <b>over</b> \u2014 things on the BOTTOM shelf are <b>under</b>. '
      +'And look closely: is the top treat really sitting <b>between</b> the other two? 🍰');
  }};

  /* --- card p2c: running queue in front of / behind --- */
  const [p0,p1,p2,p3]=shuf(CHARS).slice(0,4);
  const run=[p0,p1,p2,p3].map(c=>`<div class="friend"><img class="flip" src="${c.img}" alt="${c.name}"><span class="tag">${c.name}</span></div>`).join('');
  let h3 = `<div class="card" id="p2c">${cardHead('p2c','A','Racing to the caf\u00e9! 🏃',
    'A. Look at the pictures and circle the correct answers.')}`;
  h3+=`<div class="scene"><div class="rowline">${run}
      <div class="door">🚪<small>Caf\u00e9</small></div></div>
      <div class="scene-caption">Everyone runs to the caf\u00e9 door. The one nearest the door is <b>in front</b>!</div></div>`;
  const FB=shuf([{v:'in front of',h:'in front of'},{v:'behind',h:'behind'}]);
  const IB=shuf([{v:'is',h:'is'},{v:'is not',h:'is not'}]);
  const PP=shuf([{v:p2.name,h:p2.name},{v:p0.name,h:p0.name}]);
  h3+=`<div class="qline">1. ${nm(p2.name)} is ( ${choiceGroup('2c1',FB)} ) ${nm(p3.name)} .</div>`;
  h3+=`<div class="qline">2. ${nm(p1.name)} is ( ${choiceGroup('2c2',shuf(FB))} ) ${nm(p0.name)} .</div>`;
  h3+=`<div class="qline">3. ( ${choiceGroup('2c3',PP)} ) is between ${nm(p1.name)} and ${nm(p3.name)} .</div>`;
  h3+=`<div class="qline">4. ${nm(p3.name)} ( ${choiceGroup('2c4',IB)} ) in front of ${nm(p2.name)} .</div>`;
  h3+=cardFoot('p2c')+`</div>`;
  G.cards['p2c']={check(){
    const card=$('#p2c'); hintHide('p2c');
    const a=selOf(card,'2c1'), b=selOf(card,'2c2'), c=selOf(card,'2c3'), d=selOf(card,'2c4');
    if(!a||!b||!c||!d){ toast('Circle all four answers first 👆'); return; }
    if(a==='behind'&&b==='in front of'&&c===p2.name&&d==='is'){ markAllOK(card); markDone(card); return; }
    S.no(); markChoices(card,'2c1','behind'); markChoices(card,'2c2','in front of');
    markChoices(card,'2c3',p2.name); markChoices(card,'2c4','is');
    hint('p2c','Cinnamoroll tip: the caf\u00e9 door is on the RIGHT. A friend closer to the door is <b>in front of</b> '
      +'a friend further away. Who is exactly in the middle of '+p1.name+' and '+p3.name+'? 🚪');
  }};
  return [{banner:B2,html:h},{banner:B2,html:h2},{banner:B2,html:h3}];
}

/* ================= PAGE 3 · WS1 B · tick the correct answer ================= */
function buildP3(){
  const row1=shuf(CAFE_EMOJI).slice(0,3), row2=shuf(CAFE_EMOJI.filter(e=>!row1.includes(e))).slice(0,3);
  const shelfRow=r=>`<div class="shelf-row">${r.map(e=>`<span class="shelf-item">${e}</span>`).join('')}</div>`;
  const t0=row1[0],t1=row1[1],t2=row1[2],b0=row2[0],b1=row2[1],b2=row2[2];
  const q1opts=shuf([
    {ok:1, h:`${emojiSpan(t1)} is between ${emojiSpan(t0)} and ${emojiSpan(t2)} .`},
    {ok:0, h:`${emojiSpan(t0)} is between ${emojiSpan(t1)} and ${emojiSpan(t2)} .`},
    {ok:0, h:`${emojiSpan(b0)} is between ${emojiSpan(b1)} and ${emojiSpan(b2)} .`},
    {ok:0, h:`${emojiSpan(b2)} is between ${emojiSpan(t0)} and ${emojiSpan(t1)} .`},
  ]);
  const q2opts=shuf([
    {ok:1, h:`${emojiSpan(b0)} is under ${emojiSpan(t0)} .`},
    {ok:1, h:`${emojiSpan(t1)} is over ${emojiSpan(b1)} .`},
    {ok:0, h:`${emojiSpan(b2)} is under ${emojiSpan(t1)} .`},
    {ok:0, h:`${emojiSpan(t2)} is over ${emojiSpan(b0)} .`},
  ]);
  const tickHTML=opts=>opts.map(o=>`<div class="tickrow" data-ok="${o.ok}"><span class="tickbox"></span>
    <span class="ticktext">${o.h}</span></div>`).join('');
  const B3 = banner('glasses', WS1,
    'B. Sniff sniff\u2026 which sentence is true? Put a \u2713 in the box! 👀');
  let h = `<div class="card" id="p3a">${cardHead('p3a','B','The caf\u00e9 display shelf ☕',
    "B. Look at the picture and put a '\u2713' in the \u25a1 next to the correct answer.")}`;
  h+=`<div class="scene shelf">${shelfRow(row1)}${shelfRow(row2)}
      <div class="scene-caption">Top shelf and bottom shelf of yummy treats.</div></div>`;
  h+=`<div class="qline">1.</div>${tickHTML(q1opts)}`;
  h+=`<div class="qline" style="margin-top:16px">2.</div>${tickHTML(q2opts)}`;
  h+=cardFoot('p3a')+`</div>`;
  G.cards['p3a']={check(){
    const card=$('#p3a'); hintHide('p3a');
    const rows=$$('.tickrow',card);
    const wrong=rows.filter(r=>{ const on=r.classList.contains('on'); const ok=r.dataset.ok==='1'; return on!==ok; });
    if(wrong.length===0 && rows.some(r=>r.classList.contains('on'))){ markAllOK(card); markDone(card); return; }
    S.no(); markTicks(card);
    hint('p3a','Cinnamoroll tip: point at each treat in the picture. In the top row, the MIDDLE treat is '
      +'<b>between</b> its two neighbours. For \u201cunder\u201d and \u201cover\u201d, check treats in the SAME column! 🍰');
  }};
  return [{banner:B3,html:h}];
}

/* ================= PAGE 4 · WS1 C · fill in the names (5 friends, 2 given) ================= */
function cluesHold(order,clues){ // kid semantics: front=greater idx (nearer door), behind=smaller idx;
  // "X is between Y and Z" is SYMMETRIC (like the school book) — order of Y/Z does not matter
  const idx={}; order.forEach((n,i)=>idx[n]=i);
  return clues.every(c=>{
    if(c.k==='between'){ const lo=Math.min(idx[c.b],idx[c.c]), hi=Math.max(idx[c.b],idx[c.c]);
      return idx[c.a]>lo && idx[c.a]<hi; }
    if(c.k==='front')   return idx[c.a]>idx[c.b];
    if(c.k==='behind')  return idx[c.a]<idx[c.b];
    if(c.k==='jfront')  return idx[c.a]===idx[c.b]+1;
    if(c.k==='jbehind') return idx[c.a]===idx[c.b]-1;
    return false; });
}
function perms(arr){ if(arr.length<=1)return [arr]; const out=[];
  arr.forEach((v,i)=>perms([...arr.slice(0,i),...arr.slice(i+1)]).forEach(p=>out.push([v,...p])));
  return out; }
const clueTxt=c=>
  c.k==='front'   ? `${nm(c.a)} is in front of ${nm(c.b)} .` :
  c.k==='behind'  ? `${nm(c.a)} is behind ${nm(c.b)} .` :
  c.k==='jfront'  ? `${nm(c.a)} is just in front of ${nm(c.b)} .` :
  c.k==='jbehind' ? `${nm(c.a)} is just behind ${nm(c.b)} .` :
                    `${nm(c.a)} is between ${nm(c.b)} and ${nm(c.c)} .`;
function buildP4(){
  /* FIVE friends queue up. TWO names are already filled in as anchors —
     the child uses the clues to place the remaining THREE (unique solution,
     brute-force verified over all 3! = 6 arrangements before serving). */
  const sol=shuf(CHARS);                       // index 4 = nearest door = front
  const anchorPos=shuf([0,1,2,3,4]).slice(0,2).sort((a,b)=>a-b);
  const anchorSet=new Set(anchorPos);
  const unknownPos=[0,1,2,3,4].filter(i=>!anchorSet.has(i));
  const unknownNames=unknownPos.map(i=>sol[i].name);
  const idx={}; sol.forEach((c,i)=>idx[c.name]=i);
  /* pool of TRUE statements about the real queue */
  const pool=[]; const names=CHARS.map(c=>c.name);
  for(const a of names) for(const b of names){ if(a===b)continue;
    const d=idx[a]-idx[b];
    if(d===1){ pool.push({k:'jfront',a,b}); pool.push({k:'front',a,b}); }
    else if(d>1) pool.push({k:'front',a,b});
    if(d===-1){ pool.push({k:'jbehind',a,b}); pool.push({k:'behind',a,b}); }
    else if(d<-1) pool.push({k:'behind',a,b}); }
  for(const x of names) for(const y of names) for(const z of names){
    if(new Set([x,y,z]).size<3)continue;
    if(idx[x]>idx[y]&&idx[x]<idx[z]) pool.push({k:'between',a:x,b:y,c:z}); }
  const touchesUnknown=c=>unknownNames.includes(c.a)||unknownNames.includes(c.b)
    ||(c.c&&unknownNames.includes(c.c));
  let cand=shuf(pool.filter(touchesUnknown)).concat(shuf(pool.filter(c=>!touchesUnknown(c))));
  const consistent=clues=>perms(unknownNames).filter(p=>{
    const order=sol.map((c,i)=>anchorSet.has(i)?c.name:p[unknownPos.indexOf(i)]);
    return cluesHold(order,clues); });
  const clues=[]; let cur=consistent(clues);   // starts at all 6 arrangements
  while(cur.length>1&&cand.length){
    let best=null,bestN=cur.length;
    for(const c of cand){ const n=consistent([...clues,c]).length;
      if(n<bestN){bestN=n;best=c;} }
    if(!best)break;
    clues.push(best); cand.splice(cand.indexOf(best),1); cur=consistent(clues); }
  if(clues.length===1){ const extra=cand[0]; if(extra)clues.push(extra); }
  /* --- render ---
     All 5 friends wear the SAME generic icon — kids cannot recognise names
     from the pictures, so they MUST read the positional clues! */
  const queueHTML=sol.map((c,i)=>{
    const tag=anchorSet.has(i)
      ? `<span class="tag nb given" data-name="${esc(c.name)}">${esc(c.name)}</span>`
      : `<span class="tag nb" data-slot="${i}">?</span>`;
    return `<div class="friend bub bub5">${tag}
      <img class="flip" src="${IMG.Q_CINNA}" alt="friend"></div>`; }).join('');
  const B4 = banner('partyhat', WS1,
    '★C. A queue for the yummy cinnamon rolls! Everyone looks the same — read the clues! 🎀');
  let h = `<div class="card" id="p4a">${cardHead('p4a','C','The cinnamon-roll queue 🍥','★C. Fill in the names according to the descriptions.',true)}`;
  h+=`<div class="scene"><div class="rowline">${queueHTML}
      <div class="door">🚪<small>Rolls!</small></div></div>
      <div class="qends"><span>⬅ back of the queue</span><span>front of the queue — nearest the door ➡</span></div>
      <div class="scene-caption">Oh my — all 5 friends look the same today! 🎭 You cannot tell them apart by picture, so read the clues carefully. Two names are already filled in — use them as anchors. Nearest the door 🚪 is <b>in front</b>.</div></div>`;
  clues.forEach((c,i)=>{ h+=`<div class="qline">${'abcd'[i]}. ${clueTxt(c)}</div>`; });
  h+=`<div class="chip-tray" id="nameBank"><div class="tray-label">Name bubbles — tap a name, then tap a ? bubble:</div>`
    +shuf(unknownNames).map(n=>`<button class="chip nchip" data-name="${esc(n)}" data-orig="${esc(n)}">${esc(n)}</button>`).join('')+`</div>`;
  h+=cardFoot('p4a')+`</div>`;
  G.cards['p4a']={check(){
    const card=$('#p4a'); hintHide('p4a');
    const slots=$$('.nb',card);
    if(slots.some(s=>!s.dataset.name)){ toast('Fill all 3 name bubbles first ☁️'); return; }
    const arrangement=slots.map(s=>s.dataset.name);
    if(cluesHold(arrangement,clues)){ markAllOK(card); markDone(card); return; }
    S.no(); slots.forEach((s,i)=>{ (s.dataset.name===sol[i].name)?markOK(s):markNO(s); });
    hint('p4a','Cinnamoroll tip: the two names already in the queue are your anchors! 🎀 '
      +'Start from a clue about a name you can SEE. The friend nearest the door 🚪 is <b>in front</b>, '
      +'the friend at the far end is at the <b>back</b>. Tap a filled bubble to empty it, then try again! ☁️');
  }};
  return [{banner:B4,html:h}];
}

/* ================= PAGE 5 · WS2 A · one-to-one link ================= */
function buildP5(){
  const [eA,eB]=pick([['🧁','🍩'],['🍪','🥞'],['🍫','🍓'],['🍰','🥐'],['🍎','🍬'],['☕','🧃']]);
  const nA=rnd(5,9); let nB=nA+pick([-3,-2,-1,1,2,3]); if(nB<4)nB=nA+3; if(nB>9)nB=nA-3; if(nB===nA)nB=nA-1;
  /* treats of BOTH kinds mixed all over one field — no left/right zones */
  const allP=scatterPos(nA+nB,4,95,6,90,12,15);
  const mixIdx=shuf(allP.map((_,i)=>i));
  const pL=mixIdx.slice(0,nA).map(i=>allP[i]), pR=mixIdx.slice(nA).map(i=>allP[i]);
  const itemL=pL.map((p,i)=>`<button class="link-item" style="position:absolute;left:${p[0]}%;top:${p[1]}%;transform:translate(-50%,-50%)" data-g="L" data-uid="L${i}">${eA}</button>`).join('');
  const itemR=pR.map((p,i)=>`<button class="link-item" style="position:absolute;left:${p[0]}%;top:${p[1]}%;transform:translate(-50%,-50%)" data-g="R" data-uid="R${i}">${eB}</button>`).join('');
  const diff=Math.abs(nA-nB), moreFirst=nA>nB;
  const B5=banner('rainbow', WS2+' (Counting Onwards and Backwards &amp; Odd and Even numbers)',
    'A. Link the treats one-to-one \u2014 which plate has more? 🔗');
  let h = `<div class="card" id="p5a">${cardHead('p5a','A','Link up the treats 🔗',
    'A. One-to-one, link up the objects. Then circle and write the answers.')}`;
  h+=`<div class="link-wrap"><div class="link-stage" id="stage5" style="height:430px">
      <svg></svg>${itemL}${itemR}</div>
      <div class="scene-caption">All the treats are mixed up together! Tap one treat, then one of the OTHER kind to link them. The kind with treats left over has more!</div></div>`;
  const MF=shuf([{v:'more',h:'more'},{v:'fewer',h:'fewer'}]);
  h+=`<div class="qline">1. There are ( ${choiceGroup('5a1',MF)} ) ${emojiSpan(eA)} .</div>`;
  const MF2=shuf([{v:'more',h:'more'},{v:'fewer',h:'fewer'}]);
  h+=`<div class="qline">2. <button class="blank blankslot" data-accept="num">&nbsp;</button> ( ${choiceGroup('5a2',MF2)} ) ${emojiSpan(eB)} than ${emojiSpan(eA)} .</div>`;
  h+=chipTray([diff-1,diff,diff+1,diff+2].filter(v=>v>0).map(String),'Number chips \u2014 tap a chip to write the number:');
  h+=cardFoot('p5a')+`</div>`;
  G.cards['p5a']={check(){
    const card=$('#p5a'); hintHide('p5a');
    const stage=$('#stage5'); const pairs=stage._pairs?stage._pairs.size:0;
    const need=Math.min(nA,nB);
    const b=$('.blank',card); const a=selOf(card,'5a1'), w=selOf(card,'5a2');
    if(pairs<need){ S.no(); hint('p5a','First link EVERY treat you can, one-to-one! The treats left without a partner '
      +'show you which plate has more. Keep tapping \u2014 you still need '+(need-pairs)+' more link(s). 🔗'); return; }
    if(!b.dataset.val){ toast('Write the missing number first ✏️'); return; }
    if(!a||!w){ toast('Circle both answers first 👆'); return; }
    const want1=moreFirst?'more':'fewer';
    const want2=nB>nA?'more':'fewer';
    if(a===want1&&w===want2&&+b.dataset.val===diff){ markAllOK(card); markDone(card); return; }
    S.no(); markChoices(card,'5a1',want1); markChoices(card,'5a2',want2); if(b.dataset.val){ (+b.dataset.val===diff)?markOK(b):markNO(b); }
    hint('p5a','Count the treats without a partner \u2014 that is your special number! '
      +`${eA} has ${nA}, ${eB} has ${nB}. So which word makes the sentence TRUE? 🍽️`);
  }};
  return [{banner:B5,html:h}];
}
/* ================= PAGE 6 · WS2 B · draw circles to compare ================= */
function buildP6(){
  const B6 = banner('wizard', WS2+' (Counting Onwards and Backwards &amp; Odd and Even numbers)',
    'B. Draw circles in the boxes to help you compare \u2014 just like a maths wizard! ◯');
  const PAIRS=[['🐟','🐠'],['🧁','🍩'],['🍭','🍪'],['🍰','🥐'],['🍓','🍇'],['☕','🧃']];
  const [eA,eB]=pick(PAIRS);

  /* --- p6a: unequal --- */
  const n=rnd(7,11); let m=n-pick([2,3,4,5]); if(m<3)m=n+pick([2,3]);
  const hi=Math.max(n,m), lo=Math.min(n,m);
  const bigger=n>m?eA:eB;
  /* boxes are ALWAYS MORE than the answer — kids must count, not fill-to-the-end */
  const tf=(cnt,lblSmall)=>{ const tot=cnt+rnd(2,5);
    return `<div class="tf-row" data-count="${cnt}">
    <span class="tf-label${lblSmall?' small':''}">${cnt}</span>
    <span class="tf-boxes">${'<button class="tf-box"></button>'.repeat(tot)}</span></div>`; };
  let h = `<div class="card" id="p6a">${cardHead('p6a','B','Compare the fishy friends 🐟',
    'B. Draw \u25ef in the boxes to help you compare. Then circle the answers.')}`;
  h+=`<div class="qline">1. ${n} ${emojiSpan(eA)} and ${m} ${emojiSpan(eB)} .</div>`;
  h+=tf(n)+'\n'+tf(m);
  const AB=shuf([{v:eA,h:emojiSpan(eA,true)},{v:eB,h:emojiSpan(eB,true)}]);
  h+=`<div class="qline">a. There are more ( ${choiceGroup('6a1',AB)} ).</div>`;
  const GS=shuf([{v:'greater',h:'greater'},{v:'smaller',h:'smaller'}]);
  const hiFirst=Math.random()<0.5;
  h+= hiFirst
    ? `<div class="qline">b. ${hi} is ( ${choiceGroup('6a2',GS)} ) than ${lo}.</div>`
    : `<div class="qline">b. ${lo} is ( ${choiceGroup('6a2',GS)} ) than ${hi}.</div>`;
  h+=`<div class="tip">Tap the dashed boxes to draw \u25ef \u2014 one circle for every treat! There are EXTRA boxes, so count carefully. 👀</div>`;
  h+=cardFoot('p6a')+`</div>`;
  G.cards['p6a']={check(){
    const card=$('#p6a'); hintHide('p6a');
    const rows=$$('.tf-row',card);
    const c1=$$('.tf-box.on',rows[0]).length, c2=$$('.tf-box.on',rows[1]).length;
    if(c1!==n||c2!==m){ S.no();
      (c1===n)?markOK(rows[0]):markNO(rows[0]); (c2===m)?markOK(rows[1]):markNO(rows[1]);
      hint('p6a',`Draw the circles first! Row 1 needs exactly <b>${n}</b> circles (you drew ${c1}), row 2 needs <b>${m}</b> (you drew ${c2}). ◯`); return; }
    const a=selOf(card,'6a1'), b=selOf(card,'6a2');
    if(!a||!b){ toast('Circle both answers first 👆'); return; }
    const wantB=hiFirst?'greater':'smaller';
    if(a===bigger&&b===wantB){ markAllOK(card); markDone(card); return; }
    S.no(); markChoices(card,'6a1',bigger); markChoices(card,'6a2',wantB);
    (c1===n)?markOK(rows[0]):markNO(rows[0]); (c2===m)?markOK(rows[1]):markNO(rows[1]);
    hint('p6a','Compare the two rows of circles \u2014 which row is LONGER? That treat has more! '
      +'And remember: the little number is <b>smaller</b>, the big number is <b>greater</b>. 🐠');
  }};

  /* --- p6b: dozen challenge (kids must KNOW a dozen=12, half=6 — no hints!) ★ ---
     ALL treat counts are RANDOM each build 🎲
     Q3: half a dozen + 1..5 → 7..11 · Q4: dozen + 1..5 → 13..17 · Q5 super: 1 dozen < N < 2 dozen → 13..23 */
  const [dA,dB]=pick(PAIRS);
  const supN=13+Math.floor(Math.random()*11), supMore=String(supN-12);
  const q3n=7+Math.floor(Math.random()*5), q3m=String(q3n-6);
  const q4n=13+Math.floor(Math.random()*5), q4m=String(q4n-12);
  const want=[String(q3n),q3m,String(q4n),q4m,supMore];
  const numOpts=(ans,lo,hi)=>{ const s=new Set([ans]);
    for(const v of shuf([...Array(hi-lo+1)].map((_,i)=>lo+i).filter(x=>x!==ans))){ if(s.size>=3)break; s.add(v); }
    return shuf([...s].map(v=>({v:String(v),h:String(v)}))); };
  const d12a=2+rnd(0,8), ans12=12-d12a; /* decompose a dozen: 12 = d12a + __ */
  const d6a=1+rnd(0,4), ans6=6-d6a;     /* decompose half a dozen: 6 = d6a + __ */
  let h2 = `<div class="card" id="p6b">${cardHead('p6b','B','Dozen challenge! 🎁',
    '★B. Count and complete the dozen challenge — do you know your dozen facts? 🎁',true)}`;
  h2+=`<div class="qline">1. A dozen is ( ${choiceGroup('6b1',shuf([{v:'12',h:'12'},{v:'6',h:'6'},{v:'10',h:'10'}]))} ) .</div>`;
  h2+=`<div class="qline">2. Half a dozen is ( ${choiceGroup('6b2',shuf([{v:'6',h:'6'},{v:'5',h:'5'},{v:'12',h:'12'}]))} ) .</div>`;
  h2+=`<div class="qline" style="margin-top:14px">3. Count the ${emojiSpan(dA)} !</div>${scatterHTML(dA,q3n,3)}`;
  h2+=`<div class="qline">There are <button class="blank blankslot">&nbsp;</button> ${emojiSpan(dA)} . That is half a dozen and <button class="blank blankslot">&nbsp;</button> more .</div>`;
  h2+=`<div class="qline" style="margin-top:14px">4. Count the ${emojiSpan(dB)} !</div>${scatterHTML(dB,q4n,4)}`;
  h2+=`<div class="qline">There are <button class="blank blankslot">&nbsp;</button> ${emojiSpan(dB)} . That is a dozen and <button class="blank blankslot">&nbsp;</button> more .</div>`;
  h2+=`<div class="qline" style="margin-top:14px">5. Fill in: 12 = ${d12a} + ( ${choiceGroup('6b3',numOpts(ans12,1,11))} ) .</div>`;
  h2+=`<div class="qline">6. Fill in: 6 = ${d6a} + ( ${choiceGroup('6b4',numOpts(ans6,1,5))} ) .</div>`;
  h2+=`<div class="qline">7. Half a dozen and half a dozen is ( ${choiceGroup('6b5',shuf([{v:'12',h:'12'},{v:'10',h:'10'},{v:'14',h:'14'}]))} ) .</div>`;
  h2+=`<div class="qline" style="margin-top:14px">8. Super challenge: <span class="doz-tile">${supN}</span> ${emojiSpan('🎁')} is a dozen and <button class="blank blankslot">&nbsp;</button> more .</div>`;
  const trayArr=[...want];
  for(const d of shuf(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'].filter(x=>!want.includes(x)))){ if(trayArr.length>=9)break; trayArr.push(d); }
  h2+=chipTray(trayArr,'Number chips — tap a chip, then a blank:',true);
  h2+=`<div class="tip">Use the number chips and count on carefully, one hop at a time! 🚀</div>`;
  h2+=cardFoot('p6b')+`</div>`;
  G.cards['p6b']={check(){
    const card=$('#p6b'); hintHide('p6b');
    const v1=selOf(card,'6b1'), v2=selOf(card,'6b2');
    const v3=selOf(card,'6b3'), v4=selOf(card,'6b4'), v5=selOf(card,'6b5');
    if(!v1||!v2||!v3||!v4||!v5){ toast('Circle ALL the answers first 👆'); return; }
    const bl=$$('.blankslot',card);
    if(bl.some(s=>!s.dataset.val)){ toast('Fill all 5 number blanks first ✏️'); return; }
    if(bl.every((s,i)=>s.dataset.val===want[i])&&v1==='12'&&v2==='6'
      &&v3===String(ans12)&&v4===String(ans6)&&v5==='12'){ markAllOK(card); markDone(card); return; }
    S.no(); markChoices(card,'6b1','12'); markChoices(card,'6b2','6');
    markChoices(card,'6b3',String(ans12)); markChoices(card,'6b4',String(ans6)); markChoices(card,'6b5','12');
    bl.forEach((s,i)=>{ (s.dataset.val===want[i])?markOK(s):markNO(s); });
    hint('p6b','Count the treats one by one! “Half a dozen” and “a dozen” are special numbers you know — '
      +'count on from the first number to reach 12 (or 6), and half a dozen + half a dozen makes a dozen. 🎁');
  }};
  return [{banner:B6,html:h},{banner:B6,html:h2}];
}

/* ================= PAGE 7 · WS2 C · counting trains ================= */
function wagonRow(nums,blanks){ // nums: full sequence; blanks: Set of indices
  let cells=`<span class="trainnoza"></span>`;
  nums.forEach((v,i)=>{ if(blanks.has(i)){ cells+=`<button class="wagon blank blankslot" data-idx="${i}">&nbsp;</button>`; }
    else cells+=`<span class="wagon">${v}</span>`; });
  return cells+`<span class="arrow">➡</span>`;
}
function buildP7(){
  const B7 = banner('balloons', WS2+' (Counting Onwards and Backwards &amp; Odd and Even numbers)',
    'C. Jumping number trains — onwards &amp; backwards, from short hops to LONG jumps! 🚂');
  const instr='C. Write the suitable numbers and circle the answers.';
  let hA,hB,hC,hD;

  /* --- p7a: "I start from A and jump onwards to B" — length 4-8, 1-3 blanks --- */
  {
    const L=rnd(4,8); const a=rnd(2,19-(L-1));
    const seq=Array.from({length:L},(_,i)=>a+i);
    const nBl=rnd(1,Math.min(3,L-2));
    const bpos=shuf(Array.from({length:L-2},(_,i)=>i+1)).slice(0,nBl).sort((x,y)=>x-y);
    const blanks=new Set(bpos);
    const cls=L>=7?' mid':'';
    hA=`<div class="card" id="p7a">${cardHead('p7a','C','Jump onwards! 🐶',instr)}`;
    hA+=`<div class="speech">🐶 I start from <b>${a}</b> and jump onwards to <b>${seq[L-1]}</b>.</div>`;
    hA+=`<div class="train${cls}">${wagonRow(seq,blanks)}</div>`;
    const chips=[...bpos.map(i=>seq[i]), a, seq[L-1], a-1, seq[L-1]+1, a+2].filter(v=>v>0);
    hA+=chipTray(chips.map(String),'Number chips:');
    hA+=cardFoot('p7a')+`</div>`;
    G.cards['p7a']={check(){
      const card=$('#p7a'); hintHide('p7a');
      const ws=$$('.wagon.blank',card);
      if(!ws.every(w=>w.dataset.val)){ toast('Fill every empty wagon first 🚂'); return; }
      if(bpos.every((bi,k)=>+ws[k].dataset.val===seq[bi])){ markAllOK(card); markDone(card); return; }
      S.no(); ws.forEach((w,k)=>{ (+w.dataset.val===seq[bpos[k]])?markOK(w):markNO(w); });
      hint('p7a',`Jumping ONWARDS means one MORE each hop: ${a} → ${a+1} → ${a+2}… all the way to ${seq[L-1]}! 🐶`);
    }};
  }
  /* --- p7b: jump backwards, length 4-8, 1-3 blanks --- */
  {
    const L=rnd(4,8); const a=rnd(L,20);
    const seq=Array.from({length:L},(_,i)=>a-i);
    const nBl=rnd(1,Math.min(3,L-2));
    const bpos=shuf(Array.from({length:L-2},(_,i)=>i+1)).slice(0,nBl).sort((x,y)=>x-y);
    const blanks=new Set(bpos);
    const cls=L>=7?' mid':'';
    hB=`<div class="card" id="p7b">${cardHead('p7b','C','Jump backwards! 🐱',instr)}`;
    hB+=`<div class="speech">🐱 I start from <b>${a}</b> and jump backwards to <b>${seq[L-1]}</b>.</div>`;
    hB+=`<div class="train${cls}">${wagonRow(seq,blanks)}</div>`;
    const chips=[...bpos.map(i=>seq[i]), a, seq[L-1], a+1, seq[L-1]-1, a-2].filter(v=>v>0);
    hB+=chipTray(chips.map(String),'Number chips:');
    hB+=cardFoot('p7b')+`</div>`;
    G.cards['p7b']={check(){
      const card=$('#p7b'); hintHide('p7b');
      const ws=$$('.wagon.blank',card);
      if(!ws.every(w=>w.dataset.val)){ toast('Fill every empty wagon first 🚂'); return; }
      if(bpos.every((bi,k)=>+ws[k].dataset.val===seq[bi])){ markAllOK(card); markDone(card); return; }
      S.no(); ws.forEach((w,k)=>{ (+w.dataset.val===seq[bpos[k]])?markOK(w):markNO(w); });
      hint('p7b',`Jumping BACKWARDS means one LESS each hop: ${a} → ${a-1} → ${a-2}… all the way down to ${seq[L-1]}! 🐱`);
    }};
  }
  /* --- p7c: "I jump from A to B in order" — comma list 4-10, 2 blanks + direction choice --- */
  {
    const L=rnd(4,10); const back=Math.random()<0.5;
    const a=back?rnd(L,20):rnd(2,20-(L-1));
    const seq=Array.from({length:L},(_,i)=>back?a-i:a+i);
    const bpos=shuf(Array.from({length:L-2},(_,i)=>i+1)).slice(0,2).sort((x,y)=>x-y);
    const blanks=new Set(bpos);
    const list=seq.map((v,i)=>blanks.has(i)
      ?`<button class="blank blankslot" data-idx="${i}">&nbsp;</button>`
      :`<span class="gnum">${v}</span>`).join(' , ');
    hC=`<div class="card" id="p7c">${cardHead('p7c','C','Jump in order — which way? 🐰',instr)}`;
    hC+=`<div class="speech">🐰 I jump from <b>${seq[0]}</b> to <b>${seq[L-1]}</b> in order.</div>`;
    hC+=`<div class="qline" style="display:block;font-size:21px">${list}</div>`;
    const OB=shuf([{v:'onwards',h:'onwards'},{v:'backwards',h:'backwards'}]);
    hC+=`<div class="qline">This is counting ( ${choiceGroup('7c1',OB)} ).</div>`;
    const chips=[...bpos.map(i=>seq[i]), seq[0], seq[L-1], seq[0]+1, seq[L-1]-1].filter(v=>v>0);
    hC+=chipTray(chips.map(String),'Number chips:');
    hC+=cardFoot('p7c')+`</div>`;
    G.cards['p7c']={check(){
      const card=$('#p7c'); hintHide('p7c');
      const ws=$$('.blankslot',card);
      if(!ws.every(w=>w.dataset.val)){ toast('Write both missing numbers first ✏️'); return; }
      const v=selOf(card,'7c1'); if(!v){ toast('Circle onwards or backwards 👆'); return; }
      const want=back?'backwards':'onwards';
      if(bpos.every((bi,k)=>+ws[k].dataset.val===seq[bi])&&v===want){ markAllOK(card); markDone(card); return; }
      S.no(); ws.forEach(w=>{ (+w.dataset.val===seq[+w.dataset.idx])?markOK(w):markNO(w); });
      markChoices(card,'7c1',want);
      hint('p7c',`Start at ${seq[0]} and hop in ones: the numbers go ${back?'DOWN, down, down — backwards!':'UP, up, up — onwards!'} `+
        `${back?seq[0]+' → '+(seq[0]-1)+' → …':seq[0]+' → '+(seq[0]+1)+' → …'} 🐰`);
    }};
  }
  /* --- p7d: star jump — longer trains, bigger numbers (cross 20!), 2-3 blanks --- */
  {
    const L=rnd(5,9); const back=Math.random()<0.5;
    const a=back?rnd(25,48):rnd(16,44);
    const seq=Array.from({length:L},(_,i)=>back?a-i:a+i);
    const nBl=rnd(2,3);
    const bpos=shuf(Array.from({length:L-2},(_,i)=>i+1)).slice(0,nBl).sort((x,y)=>x-y);
    const blanks=new Set(bpos);
    const cls=L>=8?' tight':(L===7?' mid':'');
    hD=`<div class="card" id="p7d">${cardHead('p7d','C','Star jump: BIG numbers! 🐿️',instr,true)}`;
    hD+=`<div class="speech">🐿️ I start from <b>${a}</b> and jump ${back?'backwards':'onwards'} to <b>${seq[L-1]}</b>.</div>`;
    hD+=`<div class="train${cls}">${wagonRow(seq,blanks)}</div>`;
    hD+=`<div class="qline">This is counting ${back?'backwards':'onwards'}.</div>`;
    const chips=[...bpos.map(i=>seq[i]), a, seq[L-1], bpos.map(i=>seq[i]-1), bpos.map(i=>seq[i]+1)].flat().filter(v=>v>0);
    hD+=chipTray(chips.map(String),'Number chips:');
    hD+=cardFoot('p7d')+`</div>`;
    G.cards['p7d']={check(){
      const card=$('#p7d'); hintHide('p7d');
      const ws=$$('.wagon.blank',card);
      if(!ws.every(w=>w.dataset.val)){ toast('Fill all the star wagons ⭐'); return; }
      if(bpos.every((bi,k)=>+ws[k].dataset.val===seq[bi])){ markAllOK(card); markDone(card); return; }
      S.no(); ws.forEach((w,k)=>{ (+w.dataset.val===seq[bpos[k]])?markOK(w):markNO(w); });
      hint('p7d',`Count in ones ${back?'backwards from':'onwards from'} ${a}: one ${back?'less':'more'} each hop. Watch out — this long train jumps right past <b>20</b>! ⭐`);
    }};
  }
  return [{banner:B7,html:hA},{banner:B7,html:hB},{banner:B7,html:hC},{banner:B7,html:hD}];
}
/* ================= PAGE 8 · WS2 D · odd and even ================= */
function buildP8(){
  const B8 = banner('angel', WS2+' (Counting Onwards and Backwards &amp; Odd and Even numbers)',
    'D. Count the treats, sniff out ODD and EVEN, and solve the detective cases! ⚖️');
  const instr='D. Fill in the blanks and circle the answers.';
  const POOL=['🥛','🧇','🍪','🍓','🧁','🍬','🍊','🍩','☕','🍇'];
  const [e1,e2,e3]=shuf(POOL).slice(0,3);
  /* easy → medium → super challenge (up to 20, like the school book!) */
  const n1=rnd(5,8), n2=rnd(10,14), n3=rnd(15,20);
  let h = `<div class="card" id="p8a">${cardHead('p8a','D','Count &amp; sniff! 👃','D. Count the treats, write the numbers, then circle odd / even — from easy peasy to super challenge!',false)}`;
  h+=`<div class="qline">1. Easy peasy:</div>${scatterHTML(e1,n1,1)}`;
  h+=`<div class="qline">There are <button class="blank blankslot">&nbsp;</button> ${emojiSpan(e1)} . This is an ( ${choiceGroup('8a1',shuf([{v:'odd',h:'odd'},{v:'even',h:'even'}]))} ) number.</div>`;
  h+=`<div class="qline" style="margin-top:16px">2. Medium:</div>${scatterHTML(e2,n2,2)}`;
  h+=`<div class="qline">There are <button class="blank blankslot">&nbsp;</button> ${emojiSpan(e2)} . This is an ( ${choiceGroup('8a2',shuf([{v:'odd',h:'odd'},{v:'even',h:'even'}]))} ) number.</div>`;
  h+=`<div class="qline" style="margin-top:16px">3. Super challenge:</div>${scatterHTML(e3,n3,3)}`;
  h+=`<div class="qline">There are <button class="blank blankslot">&nbsp;</button> ${emojiSpan(e3)} . This is an ( ${choiceGroup('8a3',shuf([{v:'odd',h:'odd'},{v:'even',h:'even'}]))} ) number.</div>`;
  const MORE=shuf([{v:'1',h:emojiSpan(e1,true)},{v:'2',h:emojiSpan(e2,true)},{v:'3',h:emojiSpan(e3,true)}]);
  const maxIdx=n1>=n2&&n1>=n3?'1':(n2>=n3?'2':'3');
  h+=`<div class="cmpbox"><div class="qline">4. There are more ( ${choiceGroup('8a4',MORE)} ).</div></div>`;
  const chips=[n1,n2,n3,n1+1,n2-1,n3+1].filter(v=>v>0);
  h+=chipTray(chips.map(String),'Number chips — tap a chip, then a blank:');
  h+=cardFoot('p8a')+`</div>`;
  G.cards['p8a']={check(){
    const card=$('#p8a'); hintHide('p8a');
    const bl=$$('.blankslot',card);
    if(bl.some(s=>!s.dataset.val)){ toast('Write all 3 numbers first ✏️'); return; }
    const v1=selOf(card,'8a1'), v2=selOf(card,'8a2'), v3=selOf(card,'8a3'), v4=selOf(card,'8a4');
    if(!v1||!v2||!v3||!v4){ toast('Circle all the answers first 👆'); return; }
    const ok=+bl[0].dataset.val===n1&&+bl[1].dataset.val===n2&&+bl[2].dataset.val===n3
      &&v1===(n1%2?'odd':'even')&&v2===(n2%2?'odd':'even')&&v3===(n3%2?'odd':'even')
      &&v4===maxIdx;
    if(ok){ markAllOK(card); markDone(card); return; }
    S.no(); bl.forEach((s,i)=>{ const want=[n1,n2,n3][i]; (+s.dataset.val===want)?markOK(s):markNO(s); });
    markChoices(card,'8a1',n1%2?'odd':'even'); markChoices(card,'8a2',n2%2?'odd':'even');
    markChoices(card,'8a3',n3%2?'odd':'even'); markChoices(card,'8a4',maxIdx);
    hint('p8a','Tap every treat to count it — the green ✓ marks help you not count twice! '
      +'Even numbers make perfect PAIRS (👯 2, 4, 6…); odd numbers always leave one lonely treat without a partner. For the big pile, count in groups of 5! 🐶');
  }};

  /* --- star add --- */
  const eA=pick(['🍊','🍓','🧁','🍪']);
  const nB=rnd(8,11); const kB=rnd(2,4); const resB=nB+kB; G._kB=kB;
  let h2=`<div class="card" id="p8b">${cardHead('p8b','D','Star bake-off: add more! ⭐',instr,true)}`;
  h2+=`<div class="qline">★ 5. After adding some ${emojiSpan(eA)} according to the instruction given, the number of ${emojiSpan(eA)} becomes ( ${choiceGroup('8b1',shuf([{v:'odd',h:'odd'},{v:'even',h:'even'}]))} ).</div>`;
  h2+=`<div class="speech">Add ${kB} more.</div>`;
  h2+=`<div class="muffin-tray" id="trayB">${Array.from({length:nB},()=>`<button class="muffin" data-o="1">${eA}</button>`).join('')}</div>`;
  h2+=`<div class="muffin-tray added" id="trayB2"><div class="tray-label">Your added ${eA} appear here \u2193 (tap one to take it back)</div></div>`;
  h2+=`<button class="add-btn" id="addB">➕ Add one ${eA}</button>`;
  h2+=cardFoot('p8b')+`</div>`;
  G.cards['p8b']={check(){
    const card=$('#p8b'); hintHide('p8b');
    const added=$$('.muffin[data-o="0"]',card).length;
    const v=selOf(card,'8b1');
    if(!v){ toast('Circle odd or even first 👆'); return; }
    if(added!==kB){ S.no(); markNO($('#trayB2',card));
      hint('p8b',`The instruction says \u201cAdd ${kB} more.\u201d You added ${added}. Tap ➕ until you have added exactly ${kB}! 🧁`); return; }
    if(v===(resB%2?'odd':'even')){ markAllOK(card); markDone(card); return; }
    S.no(); markChoices(card,'8b1',resB%2?'odd':'even'); markOK($('#trayB2',card));
    hint('p8b',`Now ${nB} + ${kB} = ${resB}. Make pairs of two\u2026 is there a lonely one left without a partner? 🍊`);
  }};

  /* --- star take away --- */
  const eC=pick(['🍐','🍓','🍪','🧁']);
  const nC=rnd(9,12); const kC=rnd(2,4); const resC=nC-kC;
  let h3=`<div class="card" id="p8c">${cardHead('p8c','D','Star snack time: take away! ⭐',instr,true)}`;
  h3+=`<div class="qline">★ 6. After taking away some ${emojiSpan(eC)} according to the instruction given, the number of ${emojiSpan(eC)} becomes ( ${choiceGroup('8c1',shuf([{v:'odd',h:'odd'},{v:'even',h:'even'}]))} ).</div>`;
  h3+=`<div class="speech">Take away ${kC} of them.</div>`;
  h3+=`<div class="muffin-tray" id="trayC">${Array.from({length:nC},()=>`<button class="muffin pear" data-o="1">${eC}</button>`).join('')}</div>`;
  h3+=`<div class="tip">Tap a treat to take it away. Tap again if you change your mind! 🐽</div>`;
  h3+=cardFoot('p8c')+`</div>`;
  G.cards['p8c']={check(){
    const card=$('#p8c'); hintHide('p8c');
    const removed=$$('.pear.removed',card).length;
    const v=selOf(card,'8c1');
    if(!v){ toast('Circle odd or even first 👆'); return; }
    if(removed!==kC){ S.no(); markNO($('#trayC',card));
      hint('p8c',`The instruction says \u201cTake away ${kC} of them.\u201d You took away ${removed}. 🍐`); return; }
    if(v===(resC%2?'odd':'even')){ markAllOK(card); markDone(card); return; }
    S.no(); markChoices(card,'8c1',resC%2?'odd':'even'); markOK($('#trayC',card));
    hint('p8c',`Now ${nC} \u2212 ${kC} = ${resC}. Make pairs of two\u2026 odd or even? 🍐`);
  }};

  /* --- p8d: detective — circle ALL the evens + odd one out (new school-book types) --- */
  const EV=[2,4,6,8,10,12,14,16,18,20], OD=[1,3,5,7,9,11,13,15,17,19];
  const evPick=shuf(EV).slice(0,4), odPick=shuf(OD).slice(0,3);
  const tiles1=shuf([...evPick,...odPick]);
  const diffIsOdd=Math.random()<0.5;
  const samePick=shuf(diffIsOdd?EV:OD).slice(0,4);
  const diffV=pick(diffIsOdd?OD:EV);
  const tiles2=shuf([...samePick,diffV]);
  let h4=`<div class="card" id="p8d">${cardHead('p8d','D','Odd &amp; even detective! 🔍','D. Circle all the even numbers, then find the number that is different from the others!')}`;
  h4+=`<div class="qline">7. Circle all the even numbers below.</div>`;
  h4+=`<div class="numtiles" data-mode="multi">`+tiles1.map(v=>`<button class="numtile" data-v="${v}">${v}</button>`).join('')+`</div>`;
  h4+=`<div class="qline" style="margin-top:16px">8. Which number below is different from the others? Circle it.</div>`;
  h4+=`<div class="numtiles" data-mode="single">`+tiles2.map(v=>`<button class="numtile" data-v="${v}">${v}</button>`).join('')+`</div>`;
  h4+=`<div class="tip">Detective notebook: even numbers up to 20 are 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 — they make perfect pairs! Odd numbers always leave one out. 🔍</div>`;
  h4+=cardFoot('p8d')+`</div>`;
  G.cards['p8d']={check(){
    const card=$('#p8d'); hintHide('p8d');
    const g1=$$('.numtile',$('.numtiles[data-mode="multi"]',card));
    const sel1=g1.filter(t=>t.classList.contains('sel'));
    if(sel1.length===0){ toast('Circle the even numbers first 👆'); return; }
    const g2=$$('.numtile',$('.numtiles[data-mode="single"]',card));
    const sel2=g2.filter(t=>t.classList.contains('sel'));
    if(sel2.length===0){ toast('Circle the odd one out 👆'); return; }
    const bad1=sel1.filter(t=>+t.dataset.v%2!==0).length
      +g1.filter(t=>+t.dataset.v%2===0&&!t.classList.contains('sel')).length;
    const ok2=+sel2[0].dataset.v===diffV;
    if(bad1===0&&ok2){ markAllOK(card); markDone(card); return; }
    S.no();
    g1.forEach(t=>{ const ev=+t.dataset.v%2===0, sel=t.classList.contains('sel');
      if(sel&&ev)markOK(t); else if(sel)markNO(t); else if(ev)markMISS(t); });
    g2.forEach(t=>{ if(+t.dataset.v===diffV)markOK(t); else if(t.classList.contains('sel'))markNO(t); });
    hint('p8d',(bad1?'Some circled numbers are NOT even (or an even one is missing)! ':'')
      +'For question 8, look at all 5 numbers: four of them make perfect pairs (even) — the LONELY one that does not fit is different! '+(diffIsOdd?`${diffV} is the only odd number!`:`${diffV} is the only even number!`)+' 🔍');
  }};
  return [{banner:B8,html:h},{banner:B8,html:h2},{banner:B8,html:h3},{banner:B8,html:h4}];
}

/* ===== add / take away interactions (p8b star tray, p8c muffins) ===== */
document.addEventListener('click',e=>{ const btn=e.target.closest('#addB'); if(!btn)return;
  const card=$('#p8b'); const added=$$('.muffin[data-o="0"]',card).length;
  if(added>=(G._kB||3)+6){ toast('Wow, a mountain of treats! 😅 That is plenty.'); return; }
  S.pop(); const m=document.createElement('button'); m.className='muffin'; m.dataset.o='0';
  m.textContent=$('#trayB .muffin') ? $('#trayB .muffin').textContent : '🧁';
  $('#trayB2').appendChild(m); });
document.addEventListener('click',e=>{ const m=e.target.closest('.muffin'); if(!m)return;
  const card=m.closest('.card'); if(!card)return;
  if(card.id==='p8b'&&m.dataset.o==='0'){ S.tap(); m.remove(); }
  if(card.id==='p8c'&&m.dataset.o==='1'){ S.tap(); m.classList.toggle('removed'); } });

/* ===== module registration (order = page order) ===== */
defineModule('math',{title:'WS1 A · circle the correct answers',          build:buildP2});
defineModule('math',{title:'WS1 B · tick the correct answer',             build:buildP3});
defineModule('math',{title:'WS1 C · fill in the names',                   build:buildP4});
defineModule('math',{title:'WS2 A · one-to-one link',                     build:buildP5});
defineModule('math',{title:'WS2 B · draw circles to compare',             build:buildP6});
defineModule('math',{title:'WS2 C · counting trains',                     build:buildP7});
defineModule('math',{title:'WS2 D · odd and even',                        build:buildP8});
