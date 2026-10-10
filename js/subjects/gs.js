/* ============================================================
   Subject: P1 General Studies — Amazing Feelings (My Body)
   (worksheets 1-2 + reading article: body parts, five senses,
    postures, clean habits, fun facts)
   ============================================================ */
defineSubject('gs',{
  label:'General Studies', icon:'🙋',
  tagline:'My Body · Senses · Postures · Clean Habits · Fun Facts',
  cta:'Let\u2019s explore!',
  hello:'Let\u2019s explore your amazing body! 🙋',
  report:'My Body Explorer report card!',
  unit:'body adventures',
  certTitle:'🌟 Body Explorer Certificate! 🌟',
  certText:n=>`explored the <b>amazing human body</b> with Cinnamoroll &amp; friends!<br>`
    +`You labelled the body parts, solved the five-senses mysteries, matched the sense organs, `
    +`sit and stand with <b>good postures</b>, and keep yourself <b>clean and healthy</b>! 👀👂👃👅✋🧼`,
});

/* ================= PAGE 9 · GS1 · label the body parts ================= */
const GSWS='General Studies Worksheet 1 · Topic: Amazing Feelings (My Body)';
const BODY_WORDS=['head','eyes','ears','nose','tongue','skin','arm','leg','trunk'];
const ORGANS=['eyes','ears','nose','tongue','skin'];
/* label slots: k=word, t=top(%) of scene, s=side; leader lines: viewBox 0 0 100 88 */
const GS_SLOTS=[
  {k:'head',  t:7.3, s:'L'},{k:'trunk',t:47.7,s:'L'},{k:'skin',t:61.3,s:'L'},{k:'leg',t:81.2,s:'L'},
  {k:'eyes',  t:9.5, s:'R'},{k:'ears', t:23.1,s:'R'},{k:'nose',t:39.0,s:'R'},
  {k:'arm',   t:55.0,s:'R'},{k:'tongue',t:70.9,s:'R'}];
const GS_LINES=[[23,10,43,9],[23,45.6,41,47.6],[23,57.6,33.3,55.4],[23,75,44.9,74.8],
  [77,12,56.6,25.8],[77,23.9,67.4,25.2],[77,38,51.2,29.9],[77,52,72.8,39],[77,66,54,33.2]];
const GS_GIRL=`<svg class="gs-svg" viewBox="0 0 100 88" preserveAspectRatio="none" aria-hidden="true">
  <ellipse cx="50" cy="84.2" rx="17" ry="1.7" fill="#2E86C1" opacity=".12"/>
  <circle cx="30.5" cy="17" r="7" fill="#2F2A33"/>
  <circle cx="69.5" cy="17" r="7" fill="#2F2A33"/>
  <ellipse cx="27.6" cy="10.2" rx="2.8" ry="2" fill="#4A8FE0" transform="rotate(-22 27.6 10.2)"/>
  <ellipse cx="31.6" cy="9.2" rx="2.8" ry="2" fill="#5FA8EF" transform="rotate(18 31.6 9.2)"/>
  <ellipse cx="72.4" cy="10.2" rx="2.8" ry="2" fill="#5FA8EF" transform="rotate(22 72.4 10.2)"/>
  <ellipse cx="68.4" cy="9.2" rx="2.8" ry="2" fill="#4A8FE0" transform="rotate(-18 68.4 9.2)"/>
  <circle cx="34.6" cy="25" r="2.6" fill="#FFE8CF" stroke="#4A3B32" stroke-width=".7"/>
  <circle cx="65.4" cy="25" r="2.6" fill="#FFE8CF" stroke="#4A3B32" stroke-width=".7"/>
  <circle cx="50" cy="22.5" r="14" fill="#FFE8CF" stroke="#4A3B32" stroke-width="1.1"/>
  <path d="M35 22 A15 15 0 0 1 50 7.5 A15 15 0 0 1 65 22 Q62.2 25.6 59.4 22 Q56.6 25.6 53.8 22 Q51 25.6 48.2 22 Q45.4 25.6 42.6 22 Q39.8 25.6 37 22 L35 22 Z" fill="#2F2A33"/>
  <circle cx="44.5" cy="26.4" r="1.9" fill="#2B2430"/>
  <circle cx="55.5" cy="26.4" r="1.9" fill="#2B2430"/>
  <circle cx="45.1" cy="25.7" r=".6" fill="#fff"/>
  <circle cx="56.1" cy="25.7" r=".6" fill="#fff"/>
  <ellipse cx="40.8" cy="30" rx="2.4" ry="1.5" fill="#FFB9C1" opacity=".8"/>
  <ellipse cx="59.2" cy="30" rx="2.4" ry="1.5" fill="#FFB9C1" opacity=".8"/>
  <path d="M49.4 29.6 Q50 30.6 50.6 29.6" fill="none" stroke="#D99B7A" stroke-width=".8" stroke-linecap="round"/>
  <path d="M46.5 32.2 Q50 36.4 53.5 32.2 Z" fill="#B8442F"/>
  <ellipse cx="50" cy="34.1" rx="1.9" ry="1.1" fill="#FF97A8"/>
  <rect x="48.4" y="35.5" width="3.2" height="4" fill="#FFE8CF"/>
  <path d="M40 39 Q50 37.4 60 39 L58.5 56 Q50 57.6 41.5 56 Z" fill="#FFFFFF" stroke="#4A3B32" stroke-width="1.1"/>
  <path d="M46 39 L50 45.5 L54 39 Q50 41.2 46 39 Z" fill="#3B6FD4"/>
  <rect x="49.1" y="44.6" width="1.8" height="5.4" rx=".8" fill="#3B6FD4"/>
  <path d="M38.8 43.5 L34.8 52.5" stroke="#4A3B32" stroke-width="4.1" stroke-linecap="round" fill="none"/>
  <path d="M38.8 43.5 L34.8 52.5" stroke="#FFE8CF" stroke-width="2.8" stroke-linecap="round" fill="none"/>
  <circle cx="34.4" cy="54.2" r="2.1" fill="#FFE8CF" stroke="#4A3B32" stroke-width=".8"/>
  <path d="M61.2 43 L73.5 38.2" stroke="#4A3B32" stroke-width="4.1" stroke-linecap="round" fill="none"/>
  <path d="M61.2 43 L73.5 38.2" stroke="#FFE8CF" stroke-width="2.8" stroke-linecap="round" fill="none"/>
  <circle cx="74.8" cy="37.6" r="2.2" fill="#FFE8CF" stroke="#4A3B32" stroke-width=".8"/>
  <circle cx="40.5" cy="41" r="3.6" fill="#FFFFFF" stroke="#4A3B32" stroke-width="1"/>
  <circle cx="59.5" cy="41" r="3.6" fill="#FFFFFF" stroke="#4A3B32" stroke-width="1"/>
  <path d="M41.5 56 L58.5 56 L63 70.5 L37 70.5 Z" fill="#3B6FD4" stroke="#4A3B32" stroke-width="1.1"/>
  <path d="M45 56.8 L43.5 70 M50 56.8 L50 70 M55 56.8 L56.5 70" stroke="#2C56A8" stroke-width=".8" fill="none"/>
  <rect x="45" y="70.5" width="3.2" height="6.2" fill="#FFE8CF" stroke="#4A3B32" stroke-width=".7"/>
  <rect x="51.8" y="70.5" width="3.2" height="6.2" fill="#FFE8CF" stroke="#4A3B32" stroke-width=".7"/>
  <rect x="44.7" y="76.6" width="3.8" height="3" fill="#FFFFFF" stroke="#B9D4EA" stroke-width=".6"/>
  <rect x="51.5" y="76.6" width="3.8" height="3" fill="#FFFFFF" stroke="#B9D4EA" stroke-width=".6"/>
  <rect x="44" y="79.6" width="4.6" height="3.4" rx="1.6" fill="#33384A"/>
  <rect x="51.4" y="79.6" width="4.6" height="3.4" rx="1.6" fill="#33384A"/>
  <!--LINES-->
</svg>`;
function buildP9(){
  const lines=GS_LINES.map(l=>`<path class="gs-line" d="M${l[0]} ${l[1]} L${l[2]} ${l[3]}"/>`).join('')
    +GS_LINES.map(l=>`<circle cx="${l[2]}" cy="${l[3]}" r="1.1" fill="#F76FA0" stroke="#fff" stroke-width=".35"/>`).join('');
  const slots=GS_SLOTS.map(o=>`<button class="blankslot gs-slot" style="top:${o.t}%;${o.s==='L'?'left:1.5%':'left:77.5%'}" data-key="${o.k}">&nbsp;</button>`).join('');
  const B9 = banner('unicorn', GSWS,
    '★A. Wow — a new school friend! Use the words from the box to label her body parts and sense organs. 🎀');
  let h = `<div class="card" id="p9a">${cardHead('p9a','A','My amazing body! 🙋',
    'A. Use the words from the box to label the body parts and sense organs.',true)}`;
  h+=`<div class="gs-scene">${GS_GIRL.replace('<!--LINES-->',lines)}
      <img class="gs-deco" src="${DECO.partyhat}" alt="Cinnamoroll">${slots}</div>
      <div class="scene-caption">Follow the pink lines! Tap a word from the word box, then tap the matching label box. Tap a filled box to hear the word again 🔈</div>`;
  h+=chipTray(BODY_WORDS,'Word box — tap a word, then tap the matching label box:');
  h+=cardFoot('p9a')+`</div>`;
  G.cards['p9a']={check(){
    const card=$('#p9a'); hintHide('p9a');
    const slots=$$('.blankslot',card);
    if(slots.some(s=>!s.dataset.val)){ toast('Fill all 9 label boxes first ☁️'); return; }
    const bad=slots.filter(s=>s.dataset.val!==s.dataset.key);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); slots.forEach(s=>{ (s.dataset.val===s.dataset.key)?markOK(s):markNO(s); });
    hint('p9a','Cinnamoroll tip: <b>eyes, ears, nose, tongue, skin</b> are the five SENSE organs — they tell you about the world! '
      +'You see with your eyes, hear with your ears, smell with your nose, taste with your tongue, and touch with your skin. '
      +'The <b>trunk</b> is the middle part of the body, between the head and the legs. 🙋');
  }};
  return [{banner:B9,html:h}];
}

/* ================= PAGE 10 · GS2 · five senses ================= */
function buildP10(){
  const B10 = banner('rainbow', GSWS,
    'B &amp; C. Five senses detective work — see, hear, smell, taste, touch! 🔎');
  /* --- p10a: which sense organ do you use? --- */
  const SENSES=[
    {q:'see a yummy cupcake', a:'eyes',   e:'🧁'},
    {q:'hear a happy song',   a:'ears',   e:'🎵'},
    {q:'smell a cinnamon roll', a:'nose', e:'🍥'},
    {q:'taste a sweet cake',  a:'tongue', e:'🍰'},
    {q:'feel the warm sun',   a:'skin',   e:'☀️'},
  ];
  let h = `<div class="card" id="p10a">${cardHead('p10a','B','Sense detectives! 🕵️',
    'B. Which sense organ do you use? Circle the correct answer.')}`;
  SENSES.forEach((s,i)=>{
    const decoys=shuf(ORGANS.filter(w=>w!==s.a)).slice(0,2);
    const opts=shuf([{v:s.a,h:s.a},...decoys.map(w=>({v:w,h:w}))]);
    h+=`<div class="qline">${i+1}. ${emojiSpan(s.e)} You ${s.q} with your ( ${choiceGroup('10a'+(i+1),opts)} ).</div>`;
  });
  h+=cardFoot('p10a')+`</div>`;
  G.cards['p10a']={check(){
    const card=$('#p10a'); hintHide('p10a');
    const missing=SENSES.some((s,i)=>!selOf(card,'10a'+(i+1)));
    if(missing){ toast('Circle all five answers first 👆'); return; }
    const ok=SENSES.every((s,i)=>selOf(card,'10a'+(i+1))===s.a);
    if(ok){ markAllOK(card); markDone(card); return; }
    S.no(); SENSES.forEach((s,i)=>markChoices(card,'10a'+(i+1),s.a));
    hint('p10a','Cinnamoroll tip: sing it like a little song! 🎵 '
      +'<b>see → eyes, hear → ears, smell → nose, taste → tongue, touch → skin.</b> '
      +'Which question does not match the song?');
  }};

  /* --- p10b: tick the sense organs --- */
  const NOTORG=shuf(['arm','leg','trunk','head']).slice(0,3);
  const rows=shuf([...ORGANS.map(w=>({w,ok:1})),...NOTORG.map(w=>({w,ok:0}))]);
  let h2 = `<div class="card" id="p10b">${cardHead('p10b','C','Sense organ check! ✅',
    'C. Put a \u2713 in the \u25a1 next to the SENSE organs. Leave the others empty!')}`;
  h2+=rows.map(r=>`<div class="tickrow" data-ok="${r.ok}"><span class="tickbox"></span>
    <span class="ticktext">${r.w}</span></div>`).join('');
  h2+=cardFoot('p10b')+`</div>`;
  G.cards['p10b']={check(){
    const card=$('#p10b'); hintHide('p10b');
    const rs=$$('.tickrow',card);
    const wrong=rs.filter(r=>{ const on=r.classList.contains('on'); const ok=r.dataset.ok==='1'; return on!==ok; });
    if(wrong.length===0 && rs.some(r=>r.classList.contains('on'))){ markAllOK(card); markDone(card); return; }
    S.no(); markTicks(card);
    hint('p10b','Cinnamoroll tip: there are exactly <b>5</b> sense organs — eyes, ears, nose, tongue and skin. '
      +'Arms and legs help you MOVE, they are not sense organs! 🙋');
  }};
  return [{banner:B10,html:h},{banner:B10,html:h2}];
}

/* ================= PAGE 11 · GS3 · amazing feelings (match / choose / judge) ================= */
const CG2=(a,b)=>shuf([{v:a,h:a},{v:b,h:b}]);
function buildP11(){
  const B11 = banner('rainbow','Unit 1 · Know Yourself — Amazing Feelings',
    'A–C. More sense detective work — match the letters, circle the answers, judge the habits! 👀👂👃👅✋');
  /* --- p11a: matching — which sense organ does each person mainly use? --- */
  const items=shuf([
    {t:'The shirt is soft.',a:'E'},
    {t:'It tastes sweet.',a:'C'},
    {t:'The flowers smell nice.',a:'D'},
    {t:'I read my favourite book.',a:'A'},
    {t:'I listen to music.',a:'B'}]);
  let h=`<div class="card" id="p11a">${cardHead('p11a','A','Which sense organ? 🔎',
    'A. Matching — look at what the friends are doing. Which sense organ does each person mainly use? Write the correct letter in the □.',true)}`;
  h+=items.map((it,i)=>`<div class="qline">${i+1}. <span class="say">“${it.t}”</span>
      <button class="blank blankslot" data-ans="${it.a}">&nbsp;</button></div>`).join('');
  const ORG=[['A','Eyes','👀'],['B','Ears','👂'],['C','Tongue','👅'],['D','Nose','👃'],['E','Skin','✋']];
  h+=`<div class="chip-tray"><div class="tray-label">Letter box — tap a letter, then tap the matching □. Tap a filled □ to hear it again 🔈</div>`+
    shuf(ORG).map(o=>`<button class="chip letchip" data-v="${o[0]}"><b>${o[0]}</b> ${o[2]} ${o[1]}</button>`).join('')+`</div>`;
  h+=cardFoot('p11a')+`</div>`;
  G.cards['p11a']={check(){
    const card=$('#p11a'); hintHide('p11a');
    const slots=$$('.blankslot',card);
    if(slots.some(s=>!s.dataset.val)){ toast('Write a letter in every □ first ☁️'); return; }
    const bad=slots.filter(s=>s.dataset.val!==s.dataset.ans);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); slots.forEach(s=>{ (s.dataset.val===s.dataset.ans)?markOK(s):markNO(s); });
    hint('p11a','Cinnamoroll tip: SOFT shirt → <b>skin</b> (E), SWEET taste → <b>tongue</b> (C), FLOWERS → <b>nose</b> (D), '
      +'READING → <b>eyes</b> (A), MUSIC → <b>ears</b> (B). Match the action word to the sense organ! 🔎');
  }};

  /* --- p11b: choosing — circle the correct answers --- */
  let h2=`<div class="card" id="p11b">${cardHead('p11b','B','Circle the correct answers ⭕',
    'B. Choosing — circle the correct answers.',true)}`;
  h2+=`<div class="qline">1. I have two ( ${choiceGroup('11b1',CG2('heads','arms'))} ) and a ( ${choiceGroup('11b1b',CG2('trunk','leg'))} ).</div>`;
  h2+=`<div class="qline">2. I can ( ${choiceGroup('11b2',CG2('smell','hear'))} ) a banana. 🍌</div>`;
  h2+=`<div class="qline">3. I can feel that a table is ( ${choiceGroup('11b3',CG2('brown','hard'))} ). 🪑</div>`;
  h2+=`<div class="qline">4. I can taste that an apple is ( ${choiceGroup('11b4',CG2('red','sweet'))} ). 🍎</div>`;
  h2+=`<div class="qline">5. I can see that the wall is ( ${choiceGroup('11b5',CG2('high','loud'))} ). 🧱</div>`;
  h2+=cardFoot('p11b')+`</div>`;
  G.cards['p11b']={check(){
    const card=$('#p11b'); hintHide('p11b');
    const ans={ '11b1':'arms', '11b1b':'leg', '11b2':'smell', '11b3':'hard', '11b4':'sweet', '11b5':'high' };
    const missing=Object.keys(ans).some(q=>!selOf(card,q));
    if(missing){ toast('Circle an answer in every line first 👆'); return; }
    const bad=Object.keys(ans).filter(q=>selOf(card,q)!==ans[q]);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); Object.keys(ans).forEach(q=>markChoices(card,q,ans[q]));
    hint('p11b','Cinnamoroll tip: two <b>arms</b> and a <b>leg</b>; you <b>smell</b> a banana, a table feels <b>hard</b>, '
      +'an apple tastes <b>sweet</b>, and a wall is <b>high</b> (loud is for sounds, not for walls!). 🙋');
  }};

  /* --- p11c: judging — do they protect their sense organs? --- */
  const J=shuf([
    {t:'My eyes are tired, but I want to keep reading.',ok:false},
    {t:'Let me take a rest.',ok:true},
    {t:'I want to turn up the music. The louder the better!',ok:false},
    {t:'I should clear the water in my ears.',ok:true},
    {t:'I clean my nose gently with a tissue.',ok:true},
    {t:'I pick my nose to clean it.',ok:false},
    {t:'I put on sunscreen at the beach.',ok:true},
    {t:'I watch TV very, very close because it is fun.',ok:false}]).slice(0,6);
  let h3=`<div class="card" id="p11c">${cardHead('p11c','C','Protect your sense organs! 🛡️',
    'C. Judging — do these children protect their sense organs? Choose GREEN if they do, RED if they do not.',true)}`;
  h3+=J.map((it,i)=>`<div class="jrow" data-ok="${it.ok?1:0}"><span class="stext">${i+1}. ${it.t}</span>
      <span class="choices"><button class="choice" data-v="y">🟢 Green</button><button class="choice" data-v="n">🔴 Red</button></span></div>`).join('');
  h3+=`<div class="tip">Choose 🟢 GREEN if the child protects their sense organs, or 🔴 RED if not.</div>`;
  h3+=cardFoot('p11c')+`</div>`;
  G.cards['p11c']={check(){
    const card=$('#p11c'); hintHide('p11c');
    const rows=$$('.jrow',card);
    if(rows.some((r,i)=>!selOf(card,`11c${i}`))){ toast('Choose GREEN or RED for every line first 🟢🔴'); return; }
    const bad=rows.filter((r,i)=>(selOf(card,`11c${i}`)==='y')!==(r.dataset.ok==='1'));
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); rows.forEach((r,i)=>{ markChoices(card,`11c${i}`, r.dataset.ok==='1'?'y':'n'); });
    hint('p11c','Cinnamoroll tip: GREEN = protecting! Resting tired eyes, clearing water from your ears, using a tissue and putting on sunscreen all PROTECT your organs. '
      +'Reading with tired eyes, very loud music, watching TV too close and picking your nose do NOT! 🛡️');
  }};
  return [{banner:B11,html:h},{banner:B11,html:h2},{banner:B11,html:h3}];
}

/* ================= PAGE 12 · GS4 · good postures ================= */
function buildP12(){
  const B12 = banner('unicorn','Unit 1 · Know Yourself — Good Postures',
    'A–D. Sit, stand and walk tall — just like Cinnamoroll flies! 🎒');
  /* --- p12a: judging — good posture? tick or cross --- */
  const P=shuf([
    {t:'Bending the back while walking',ok:false},
    {t:'Slouching on the sofa to read',ok:false},
    {t:'Lying on the desk while writing',ok:false},
    {t:'Walking tall with the school bag on the back',ok:true},
    {t:'Sitting straight to use the computer',ok:true},
    {t:'Bending the neck low over the phone',ok:false}]).slice(0,4);
  let h=`<div class="card" id="p12a">${cardHead('p12a','A','Good posture check! 🎯',
    'A. Judging — do these people have good postures? Choose ✓ for good posture, ✗ for poor posture.',true)}`;
  h+=`<div class="postgrid">`+P.map((it,i)=>`<div class="postcard" data-ok="${it.ok?1:0}">
      <span class="ptxt">${it.t}</span>
      <span class="choices pch" data-q="12a${i}"><button class="choice" data-v="y">✓</button><button class="choice" data-v="n">✗</button></span></div>`).join('')+`</div>`;
  h+=`<div class="tip">Choose ✓ if the posture is good, or ✗ if it is poor.</div>`;
  h+=cardFoot('p12a')+`</div>`;
  G.cards['p12a']={check(){
    const card=$('#p12a'); hintHide('p12a');
    const pcs=$$('.postcard',card);
    if(pcs.some((c,i)=>!selOf(card,`12a${i}`))){ toast('Choose ✓ or ✗ for every picture first 👆'); return; }
    const bad=pcs.filter((c,i)=>(selOf(card,`12a${i}`)==='y')!==(c.dataset.ok==='1'));
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); pcs.forEach((c,i)=>{ markChoices(card,`12a${i}`, c.dataset.ok==='1'?'y':'n'); });
    hint('p12a','Cinnamoroll tip: good posture = back <b>straight</b>, head and chest <b>up</b>! '
      +'Bending, slouching and lying on the desk are all ✗. Fly tall and proud like Cinnamoroll! ☁️');
  }};

  /* --- p12b: fill in the blanks (sit, stand, walk) --- */
  let h2=`<div class="card" id="p12b">${cardHead('p12b','B','How should we sit, stand and walk? 🪑',
    'B. Fill in the blanks — write the correct answers on the ______.',true)}`;
  h2+=`<div class="qline">1. When we sit, stand or walk, we should keep our backs <button class="blank blankslot" data-ans="straight">&nbsp;</button> .</div>`;
  h2+=`<div class="qline">2. When we walk, we should keep our heads and chests <button class="blank blankslot" data-ans="up">&nbsp;</button> , with our arms moving naturally.</div>`;
  h2+=`<div class="qline">3. When we sit, we should keep our feet <button class="blank blankslot" data-ans="flat">&nbsp;</button> on the floor.</div>`;
  h2+=chipTray(['flat','straight','down','up'],'Word box — tap a word, then tap the ______. One word is a trick!');
  h2+=cardFoot('p12b')+`</div>`;
  G.cards['p12b']={check(){
    const card=$('#p12b'); hintHide('p12b');
    const slots=$$('.blankslot',card);
    if(slots.some(s=>!s.dataset.val)){ toast('Fill every ______ first ☁️'); return; }
    const bad=slots.filter(s=>s.dataset.val!==s.dataset.ans);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); slots.forEach(s=>{ (s.dataset.val===s.dataset.ans)?markOK(s):markNO(s); });
    hint('p12b','Cinnamoroll tip: backs <b>straight</b>, heads and chests <b>up</b>, feet <b>flat</b> on the floor. '
      +'"Down" is the trick word — nothing goes down when we stand tall! ☁️');
  }};

  /* --- p12c: choosing — using the computer --- */
  let h3=`<div class="card" id="p12c">${cardHead('p12c','C','Using the computer 💻',
    'C. Choosing — how should we use the computer? Circle the correct answers.',true)}`;
  h3+=`<div class="pcmp">
    <div class="pcard"><span class="pic">🧑‍💻✨</span><b>Picture A</b><small>sitting straight, screen at eye level, feet flat</small></div>
    <div class="pcard"><span class="pic">🧑‍💻🙇</span><b>Picture B</b><small>slouching and bending low to the screen</small></div></div>`;
  h3+=`<div class="qline">1. Picture ( ${choiceGroup('12c1',CG2('A','B'))} ) shows the correct posture for using the computer.</div>`;
  h3+=`<div class="qline">2. When we use the keyboard or the mouse, we should keep our ( ${choiceGroup('12c2',CG2('wrists','shoulders'))} ) flat.</div>`;
  h3+=`<div class="qline">3. We should keep our eyes at least ( ${choiceGroup('12c3',CG2('30','50'))} ) cm away from the screen.</div>`;
  h3+=cardFoot('p12c')+`</div>`;
  G.cards['p12c']={check(){
    const card=$('#p12c'); hintHide('p12c');
    const ans={'12c1':'A','12c2':'wrists','12c3':'50'};
    const missing=Object.keys(ans).some(q=>!selOf(card,q));
    if(missing){ toast('Circle an answer in every line first 👆'); return; }
    const bad=Object.keys(ans).filter(q=>selOf(card,q)!==ans[q]);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); Object.keys(ans).forEach(q=>markChoices(card,q,ans[q]));
    hint('p12c','Cinnamoroll tip: picture <b>A</b> shows the correct posture — wrists <b>flat</b> on the desk, '
      +'and eyes at least <b>50</b> cm away from the screen. That is about one big arm length! 📏');
  }};

  /* --- p12d: case study — Mandy and the heavy bag --- */
  let h4=`<div class="card" id="p12d">${cardHead('p12d','D','Case study — Mandy and the heavy bag 🎒',
    'D. Case study — study the case and put a ✓ in the correct □.',true)}`;
  h4+=`<div class="case-scene">🎒 Mandy packs <b>ALL</b> her books into her school bag every morning. On the way to school her back bends forward — she cannot stand up straight! 😫</div>`;
  h4+=`<div class="qq">1. Why does Mandy not stand up straight when she walks?</div>`;
  h4+=`<div class="qgroup">
    <div class="tickrow" data-ok="0"><span class="tickbox"></span><span class="ticktext">A. She walks too fast.</span></div>
    <div class="tickrow" data-ok="1"><span class="tickbox"></span><span class="ticktext">B. Her school bag is too heavy.</span></div></div>`;
  h4+=`<div class="qq">2. What should Mandy do to get ready for school?</div>`;
  h4+=`<div class="qgroup">
    <div class="tickrow" data-ok="0"><span class="tickbox"></span><span class="ticktext">A. Clean her school bag every day.</span></div>
    <div class="tickrow" data-ok="0"><span class="tickbox"></span><span class="ticktext">B. Not bring her textbooks.</span></div>
    <div class="tickrow" data-ok="1"><span class="tickbox"></span><span class="ticktext">C. Pack her school bag every day.</span></div>
    <div class="tickrow" data-ok="0"><span class="tickbox"></span><span class="ticktext">D. Not bring her homework.</span></div></div>`;
  h4+=cardFoot('p12d')+`</div>`;
  G.cards['p12d']={check(){
    const card=$('#p12d'); hintHide('p12d');
    const gs=$$('.qgroup',card);
    if(gs.some(g=>!$('.tickrow.on',g))){ toast('Put a ✓ in the correct □ for BOTH questions ☁️'); return; }
    const wrong=$$('.tickrow.on',card).filter(r=>r.dataset.ok!=='1');
    if(wrong.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); markTicks(card);
    hint('p12d','Cinnamoroll tip: Mandy bends because her bag is <b>too heavy</b>. She should <b>pack her school bag every day</b> — '
      +'only bring the books she needs. Never leave your textbooks or homework at home! 🎒');
  }};
  return [{banner:B12,html:h},{banner:B12,html:h2},{banner:B12,html:h3},{banner:B12,html:h4}];
}

/* ================= PAGE 13 · GS5 · keep yourself clean ================= */
function buildP13(){
  const B13 = banner('macaron','Unit 1 · Know Yourself — Keep Yourself Clean',
    'A–C. Scrub-a-dub-dub! Clean habits keep us strong and healthy. 🧼');
  /* --- p13a: fill in the blanks --- */
  let h=`<div class="card" id="p13a">${cardHead('p13a','A','Keep yourself clean! 🛁',
    'A. Fill in the blanks — how should we keep ourselves clean? Write the correct answers on the ______.',true)}`;
  h+=`<div class="qline">1. Wash the <button class="blank blankslot" data-ans="hair">&nbsp;</button> often to keep it clean.</div>`;
  h+=`<div class="qline">2. Have a <button class="blank blankslot" data-ans="shower">&nbsp;</button> and put on clean <button class="blank blankslot" data-ans="clothes">&nbsp;</button> every day.</div>`;
  h+=`<div class="qline">3. Wash the <button class="blank blankslot" data-ans="face">&nbsp;</button> and brush the <button class="blank blankslot" data-ans="teeth">&nbsp;</button> once in the morning and once before going to bed.</div>`;
  h+=`<div class="qline">4. Cut the <button class="blank blankslot" data-ans="nails">&nbsp;</button> regularly.</div>`;
  h+=`<div class="qline">5. The above good habits can keep us <button class="blank blankslot" data-ans="healthy">&nbsp;</button> .</div>`;
  h+=chipTray(['teeth','nails','face','healthy','hair','clothes','shower'],'Word box — tap a word, then tap the ______:');
  h+=cardFoot('p13a')+`</div>`;
  G.cards['p13a']={check(){
    const card=$('#p13a'); hintHide('p13a');
    const slots=$$('.blankslot',card);
    if(slots.some(s=>!s.dataset.val)){ toast('Fill every ______ first ☁️'); return; }
    const bad=slots.filter(s=>s.dataset.val!==s.dataset.ans);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); slots.forEach(s=>{ (s.dataset.val===s.dataset.ans)?markOK(s):markNO(s); });
    hint('p13a','Cinnamoroll tip: wash the <b>hair</b>, have a <b>shower</b>, put on clean <b>clothes</b>, wash the <b>face</b>, brush the <b>teeth</b>, cut the <b>nails</b> — '
      +'and all these good habits keep us <b>healthy</b>! 🧼');
  }};

  /* --- p13b: choosing — clean or change every day? --- */
  const TH=shuf([
    {e:'🩲',t:'Underwear and vest',ok:1},
    {e:'🎒',t:'School bag',ok:0},
    {e:'🧦',t:'Socks',ok:1},
    {e:'🍼',t:'Water bottle',ok:1},
    {e:'🛏️',t:'Pillow',ok:0},
    {e:'🧺',t:'Towel',ok:0}]);
  let h2=`<div class="card" id="p13b">${cardHead('p13b','B','Every day, or not? 📅',
    'B. Choosing — what items should we clean or change every day? Tap the items. (There is more than one answer!)',true)}`;
  h2+=`<div class="things">`+TH.map(it=>`<button class="thing" data-ok="${it.ok}"><span class="ico">${it.e}</span>${it.t}</button>`).join('')+`</div>`;
  h2+=cardFoot('p13b')+`</div>`;
  G.cards['p13b']={check(){
    const card=$('#p13b'); hintHide('p13b');
    if(!$('.thing.on',card)){ toast('Tap the items we clean or change every day 👆'); return; }
    const bad=$$('.thing.on',card).filter(t=>t.dataset.ok!=='1');
    const missed=$$('.thing',card).filter(t=>t.dataset.ok==='1'&&!t.classList.contains('on'));
    if(bad.length===0&&missed.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); $$('.thing',card).forEach(t=>{ const on=t.classList.contains('on'), ok=t.dataset.ok==='1';
      (on&&ok)?markOK(t):(on?markNO(t):(ok?markMISS(t):null)); });
    hint('p13b','Cinnamoroll tip: change your <b>underwear and vest</b> and your <b>socks</b> every day, and wash your <b>water bottle</b> every day too! '
      +'School bags, pillows and towels are cleaned when they are dirty — not every day. 🧼');
  }};

  /* --- p13c: case study — Larry's hands --- */
  let h3=`<div class="card" id="p13c">${cardHead('p13c','C','Case study — Larry\u2019s hands 🍪',
    'C. Case study — does Larry have good habits? Put a ✓ in the correct □. (There can be more than one answer.)',true)}`;
  h3+=`<div class="case-scene">🍪 Larry says: “My hands look clean. I don't need to wash them!” Then he picks up a biscuit and eats it. 😋</div>`;
  h3+=`<div class="qq">1. Does Larry keep his hands clean?</div>`;
  h3+=`<div class="qline">( ${choiceGroup('13c1',shuf([{v:'Yes',h:'Yes 🙌'},{v:'No',h:'No 🙅'}]))} )</div>`;
  h3+=`<div class="qq">2. When should he wash his hands? Tick ALL the correct answers!</div>`;
  h3+=`<div class="qgroup">
    <div class="tickrow" data-ok="0"><span class="tickbox"></span><span class="ticktext">A. Before going to the toilet</span></div>
    <div class="tickrow" data-ok="1"><span class="tickbox"></span><span class="ticktext">B. Before eating</span></div>
    <div class="tickrow" data-ok="1"><span class="tickbox"></span><span class="ticktext">C. After going to the toilet</span></div>
    <div class="tickrow" data-ok="1"><span class="tickbox"></span><span class="ticktext">D. After touching something dirty</span></div></div>`;
  h3+=cardFoot('p13c')+`</div>`;
  G.cards['p13c']={check(){
    const card=$('#p13c'); hintHide('p13c');
    if(selOf(card,'13c1')!=='No'){ S.no(); markChoices(card,'13c1','No'); toast('Think again: hands that LOOK clean can still have germs! 🦠'); return; }
    const g=$('.qgroup',card);
    const ons=$$('.tickrow.on',g);
    const wrong=ons.filter(r=>r.dataset.ok!=='1');
    const missed=$$('.tickrow[data-ok="1"]',g).filter(r=>!r.classList.contains('on'));
    if(wrong.length===0&&missed.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); markTicks(card);
    hint('p13c','Cinnamoroll tip: wash your hands <b>before eating</b>, <b>after going to the toilet</b> and <b>after touching something dirty</b>. '
      +'Hands can look clean but still have germs — wash, wash, wash! 🧼');
  }};
  return [{banner:B13,html:h},{banner:B13,html:h2},{banner:B13,html:h3}];
}

/* ================= PAGE 14 · GS6 · unit 1 revision ================= */
function buildP14(){
  const B14 = banner('partyhat','Unit 1 · Know Yourself — Revision',
    'A–D. Unit 1 revision — show Cinnamoroll everything you have learned! 🌟');
  /* --- p14a: fill in the blanks --- */
  let h=`<div class="card" id="p14a">${cardHead('p14a','B','Fill in the blanks ✏️',
    'B. Fill in the blanks — write the correct answers on the ______.',true)}`;
  h+=`<div class="qline">1. We should have good postures to keep the <button class="blank blankslot" data-ans="backbone">&nbsp;</button> in shape.</div>`;
  h+=`<div class="qline">2. To stay healthy, we should keep ourselves <button class="blank blankslot" data-ans="clean">&nbsp;</button> .</div>`;
  h+=`<div class="qline">3. We should wash our hands before eating, after going to the <button class="blank blankslot" data-ans="toilet">&nbsp;</button> or touching something <button class="blank blankslot" data-ans="dirty">&nbsp;</button> .</div>`;
  h+=chipTray(['clean','toilet','backbone','shower','dirty'],'Word box — tap a word, then tap the ______. One word is extra!');
  h+=cardFoot('p14a')+`</div>`;
  G.cards['p14a']={check(){
    const card=$('#p14a'); hintHide('p14a');
    const slots=$$('.blankslot',card);
    if(slots.some(s=>!s.dataset.val)){ toast('Fill every ______ first ☁️'); return; }
    const bad=slots.filter(s=>s.dataset.val!==s.dataset.ans);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); slots.forEach(s=>{ (s.dataset.val===s.dataset.ans)?markOK(s):markNO(s); });
    hint('p14a','Cinnamoroll tip: good postures keep the <b>backbone</b> in shape; keep ourselves <b>clean</b>; '
      +'wash hands before eating, after the <b>toilet</b> and after touching something <b>dirty</b>. "Shower" is the extra word! 🚿');
  }};

  /* --- p14b: matching — walking vs using the computer (letters may repeat) --- */
  const LET=[
    {l:'A',t:'Keep the back straight.'},
    {l:'B',t:'Put the feet flat on the floor.'},
    {l:'C',t:'Keep the wrist flat.'},
    {l:'D',t:'Move the arms naturally.'},
    {l:'E',t:'Keep the head and chest up.'}];
  const rowOf=(it,ok)=>`<div class="tickrow letrow" data-l="${it.l}" data-ok="${ok?1:0}">
    <span class="lbadge">${it.l}</span><span class="ticktext">${it.t}</span><span class="tickbox"></span></div>`;
  let h2=`<div class="card" id="p14b">${cardHead('p14b','C','Walk tall, type smart! 🚶💻',
    'C. Matching — how should we walk and use the computer? Tick the letters in each box. (The letters can be used more than once.)',true)}`;
  h2+=`<div class="mgroup" id="mgWalk"><div class="mtitle">🚶 Walking</div>
    <div class="msub">Tick ALL the letters that show how we should walk:</div>
    ${LET.map(it=>rowOf(it,['A','D','E'].includes(it.l))).join('')}</div>`;
  h2+=`<div class="mgroup" id="mgComp"><div class="mtitle">💻 Using the computer</div>
    <div class="msub">Tick ALL the letters that show how we should use the computer:</div>
    ${LET.map(it=>rowOf(it,['A','B','C'].includes(it.l))).join('')}</div>`;
  h2+=cardFoot('p14b')+`</div>`;
  G.cards['p14b']={check(){
    const card=$('#p14b'); hintHide('p14b');
    const groups=$$('.mgroup',card);
    if(groups.some(g=>!$('.tickrow.on',g))){ toast('Tick the letters in BOTH boxes first ☁️'); return; }
    const wantMap={mgWalk:['A','D','E'],mgComp:['A','B','C']};
    const bad=[];
    groups.forEach(g=>{ const want=wantMap[g.id];
      $$('.tickrow',g).forEach(r=>{ if(r.classList.contains('on')!==want.includes(r.dataset.l)) bad.push(r); }); });
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); bad.forEach(r=>{ r.classList.contains('on')?markNO(r):markMISS(r); });
    groups.forEach(g=>{ const want=wantMap[g.id];
      $$('.tickrow.on',g).forEach(r=>{ if(!bad.includes(r))markOK(r); }); });
    hint('p14b','Cinnamoroll tip: WALKING → A (back straight), D (arms move naturally), E (head and chest up). '
      +'COMPUTER → A (back straight), B (feet flat on the floor), C (wrist flat). The letters can be used more than once! ✨');
  }};

  /* --- p14c: short question — pick the picture, pick the words --- */
  const PARTS=[{v:'eyes',h:'👀'},{v:'ears',h:'👂'},{v:'nose',h:'👃'},{v:'tongue',h:'👅'},{v:'hands',h:'✋'}];
  const USES=[{v:'see',h:'see'},{v:'hear',h:'hear'},{v:'smell',h:'smell'},{v:'taste',h:'taste'},{v:'touch',h:'touch'}];
  const PAIRM={eyes:'see',ears:'hear',nose:'smell',tongue:'taste',hands:'touch'};
  let h3=`<div class="card" id="p14c">${cardHead('p14c','D','Short question — pick and tell! 🙋',
    'D. Short question — choose the picture, then choose the words to complete the sentence.',true)}`;
  h3+=`<div class="qline">1. Choose a picture: ( ${choiceGroup('14cP',shuf(PARTS))} ) .</div>`;
  h3+=`<div class="qline">2. I use my picture to ( ${choiceGroup('14cU',shuf(USES))} ) .</div>`;
  h3+=`<div class="tip">Each body part has its own superpower — pick the action that matches YOUR picture! 🙋</div>`;
  h3+=cardFoot('p14c')+`</div>`;
  G.cards['p14c']={check(){
    const card=$('#p14c'); hintHide('p14c');
    const p=selOf(card,'14cP'), u=selOf(card,'14cU');
    if(!p||!u){ toast('Choose a picture AND an action first 👆'); return; }
    if(PAIRM[p]===u){ markAllOK(card); markDone(card); mascotCheer(`You use your ${p} to ${u} — wonderful! 🌟`); return; }
    S.no(); markChoices(card,'14cP',Object.keys(PAIRM).find(k=>PAIRM[k]===u)); markChoices(card,'14cU',PAIRM[p]);
    hint('p14c','Match the picture to its superpower: eyes <b>see</b>, ears <b>hear</b>, nose <b>smells</b>, tongue <b>tastes</b>, hands <b>touch</b>. Pick the action that goes with YOUR picture! 🙋');
  }};
  return [{banner:B14,html:h},{banner:B14,html:h2},{banner:B14,html:h3}];
}

/* ================= PAGE 15 · GS7 · fun facts about the human body ================= */
function buildP15(){
  const B15 = banner('balloons','Reading Article · Fun Facts About the Human Body',
    'A–B. Your body is AMAZING! Read the fun facts, then answer the questions. 🧠❤️🦴');
  const FACTS=[
    ['🧠','Your brain weighs about 3 pounds.'],
    ['❤️','Your heart beats about 100,000 times a day.'],
    ['🦴','An adult body has 206 bones.'],
    ['👀','Your eyes can see about 10 million different colors.'],
    ['🧴','Your skin is the largest organ in your body.'],
    ['👃','Your nose can remember about 50,000 different smells.']];
  /* --- p15a: read the facts, then multiple-choice --- */
  const MCQ=[
    {q:'15a1',want:'Skin',text:'1. Which part of your body is the largest organ?',
     opts:[{v:'Heart',h:'Heart'},{v:'Skin',h:'Skin'},{v:'Brain',h:'Brain'},{v:'Nose',h:'Nose'}]},
    {q:'15a2',want:'206',text:'2. How many bones does an adult have in their body?',
     opts:[{v:'106',h:'106 bones'},{v:'206',h:'206 bones'},{v:'306',h:'306 bones'},{v:'406',h:'406 bones'}]},
    {q:'15a3',want:'Tongue',text:'3. Which sense organ do you use to taste food?',
     opts:[{v:'Nose',h:'Nose'},{v:'Teeth',h:'Teeth'},{v:'Tongue',h:'Tongue'},{v:'Ears',h:'Ears'}]}];
  let h=`<div class="card" id="p15a">${cardHead('p15a','A','Fun body facts — read and choose! 🧠',
    'A. Read the fun facts, then circle the correct answer for each question.',true)}`;
  h+=`<div class="facts">`+FACTS.map(f=>`<div class="fact">${f[0]} ${f[1]}</div>`).join('')+`</div>`;
  h+=MCQ.map(m=>`<div class="qq">${m.text}</div><div class="qline">( ${choiceGroup(m.q,shuf(m.opts))} )</div>`).join('');
  h+=cardFoot('p15a')+`</div>`;
  G.cards['p15a']={check(){
    const card=$('#p15a'); hintHide('p15a');
    for(const m of MCQ){ if(!selOf(card,m.q)){ toast('Choose an answer for EVERY question first 👆'); return; } }
    const bad=MCQ.filter(m=>selOf(card,m.q)!==m.want);
    if(bad.length===0){ markAllOK(card); markDone(card);
      mascotCheer('Your body is AMAZING — and so are YOU! 🌟'); return; }
    S.no(); MCQ.forEach(m=>markChoices(card,m.q,m.want));
    hint('p15a','Cinnamoroll tip: the <b>skin</b> is the largest organ, an adult has <b>206</b> bones, '
      +'and you taste food with your <b>tongue</b>! Re-read the fun facts above. 📖');
  }};

  /* --- p15b: circle the correct answer --- */
  let h2=`<div class="card" id="p15b">${cardHead('p15b','B','Fun body facts — think! ❤️',
    'B. Circle the correct answer. (Your heart works even while you sleep — wow!)',true)}`;
  h2+=`<div class="qq">1. Does your heart stop beating and take a rest when you are asleep at night?</div>`;
  h2+=`<div class="qline">( ${choiceGroup('15b1',shuf([{v:'Yes',h:'Yes 😴'},{v:'No',h:'No 🏃'}]))} )</div>`;
  h2+=`<div class="qq">2. Compare your fingerprints with your classmates\u2019 fingerprints. What will you notice?</div>`;
  h2+=`<div class="qline">They look ( ${choiceGroup('15b2',shuf([{v:'same',h:'the same'},{v:'different',h:'different'}]))} ) , because everyone\u2019s fingerprint is unique.</div>`;
  h2+=cardFoot('p15b')+`</div>`;
  G.cards['p15b']={check(){
    const card=$('#p15b'); hintHide('p15b');
    const want={'15b1':'No','15b2':'different'};
    for(const q in want){ if(!selOf(card,q)){ toast('Choose an answer for BOTH questions first 👆'); return; } }
    const bad=Object.keys(want).filter(q=>selOf(card,q)!==want[q]);
    if(bad.length===0){ markAllOK(card); markDone(card);
      mascotCheer('Your heart never rests — and YOU are one of a kind! 🌟'); return; }
    S.no(); for(const q in want)markChoices(card,q,want[q]);
    hint('p15b','Cinnamoroll tip: your heart beats day and night — it <b>never</b> takes a rest, even when you sleep! ❤️ '
      +'Everyone\u2019s fingerprints look <b>different</b> — that is why they can tell people apart. 🖐️');
  }};
  return [{banner:B15,html:h},{banner:B15,html:h2}];
}

/* ================= PAGE 16 · GS8 · worksheet 2 — good postures ================= */
function buildP16(){
  const B16 = banner('glasses','General Studies Worksheet 2 · Good Postures',
    'A–D. Sit tall, stand tall — let\u2019s check everyone\u2019s postures! 🧍📺');
  /* --- p16a: good or bad posture (√ / X) --- */
  const POST=[
    {e:'🧍‍♀️',t:'Mia stands up straight and tall.',ok:'good'},
    {e:'📚',t:'Tom carries a tower of heavy books — his back is bent.',ok:'bad'},
    {e:'📞',t:'Ann writes with her head down and holds the phone with her shoulder.',ok:'bad'},
    {e:'🛏️',t:'Lee sleeps all curled up on his tummy.',ok:'bad'},
    {e:'🎒',t:'Sam\u2019s school bag is too heavy — he bends under it.',ok:'bad'},
    {e:'📖',t:'Nora lies on her tummy to read her book.',ok:'bad'}];
  let h=`<div class="card" id="p16a">${cardHead('p16a','A','Good posture or bad posture? 🧍',
    'A. Does the child have good posture or bad posture? Put a ✓ for good posture or a ✗ for bad posture.',true)}`;
  h+=POST.map((p,i)=>`<div class="qline">${i+1}. ${p.e} ${p.t} ( ${choiceGroup('16a'+(i+1),[{v:'good',h:'✓ good'},{v:'bad',h:'✗ bad'}])} )</div>`).join('');
  h+=cardFoot('p16a')+`</div>`;
  G.cards['p16a']={check(){
    const card=$('#p16a'); hintHide('p16a');
    const want={}; POST.forEach((p,i)=>want['16a'+(i+1)]=p.ok);
    for(const q in want){ if(!selOf(card,q)){ toast('Choose ✓ or ✗ for EVERY child first 👆'); return; } }
    const bad=Object.keys(want).filter(q=>selOf(card,q)!==want[q]);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); for(const q in want)markChoices(card,q,want[q]);
    hint('p16a','Cinnamoroll tip: only Mia has a <b>good</b> posture — standing straight and tall. '
      +'Bending under heavy books 📚, head down while writing 📞, sleeping curled on the tummy 🛏️, '
      +'a too-heavy school bag 🎒 and reading on the tummy 📖 are all <b>bad</b> postures! ✗');
  }};

  /* --- p16b: matching — TV postures --- */
  const TVROW=[{e:'👀',t:'Eyes',key:'eyes'},{e:'🦴',t:'Back',key:'back'},
    {e:'😊',t:'Head',key:'head'},{e:'🦶',t:'Feet',key:'feet'}];
  const TVOPT=[
    {v:'eyes',h:'Keep them the same level with the TV'},
    {v:'back',h:'Keep it straight and supported'},
    {v:'head',h:'Keep it up'},
    {v:'feet',h:'Keep them flat on the floor'},
    {v:'down',h:'Keep them down'}];
  let h2=`<div class="card" id="p16b">${cardHead('p16b','B','TV time, tall and comfy! 📺',
    'B. How should we keep good posture when watching TV? Choose the correct answer for each body part. (One answer is extra!)',true)}`;
  h2+=TVROW.map(r=>`<div class="qline"><b>${r.e} ${r.t}</b> → ( ${choiceGroup('16b-'+r.key,shuf(TVOPT))} )</div>`).join('');
  h2+=cardFoot('p16b')+`</div>`;
  G.cards['p16b']={check(){
    const card=$('#p16b'); hintHide('p16b');
    const want={'16b-eyes':'eyes','16b-back':'back','16b-head':'head','16b-feet':'feet'};
    for(const q in want){ if(!selOf(card,q)){ toast('Choose an answer for EVERY body part first 👆'); return; } }
    const bad=Object.keys(want).filter(q=>selOf(card,q)!==want[q]);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); for(const q in want)markChoices(card,q,want[q]);
    hint('p16b','Cinnamoroll tip: when watching TV keep your <b>eyes</b> the same level with the TV, your <b>back</b> straight and supported, '
      +'your <b>head</b> up, and your <b>feet</b> flat on the floor. "Keep them down" is the extra answer! 📺');
  }};

  /* --- p16c: compare sitting postures A vs B --- */
  const CMP=[
    {part:'Back',a:'bent',b:'straight',opts:[{v:'straight',h:'Straight'},{v:'bent',h:'Bent'}]},
    {part:'Feet',a:'crossed',b:'flat',opts:[{v:'flat',h:'Flat'},{v:'crossed',h:'Crossed'}]},
    {part:'Head',a:'down',b:'up',opts:[{v:'up',h:'Up'},{v:'down',h:'Down'}]},
    {part:'Chest',a:'down',b:'up',opts:[{v:'up',h:'Up'},{v:'down',h:'Down'}]}];
  let h3=`<div class="card" id="p16c">${cardHead('p16c','C','Compare: who sits well? 🪑',
    'C. Compare the sitting posture of Picture A and Picture B. Choose the correct answer for each body part.',true)}`;
  h3+=`<div class="case-scene">🖼️ Picture A: Ann writes with her head down low, back bent, legs crossed. 😖<br>🖼️ Picture B: Ben sits tall — back straight, feet flat. 😊</div>`;
  h3+=CMP.map((c,i)=>`<div class="qline"><b>${c.part}</b> — A: ( ${choiceGroup('16c'+i+'a',shuf(c.opts))} ) B: ( ${choiceGroup('16c'+i+'b',shuf(c.opts))} )</div>`).join('');
  h3+=cardFoot('p16c')+`</div>`;
  G.cards['p16c']={check(){
    const card=$('#p16c'); hintHide('p16c');
    const want={}; CMP.forEach((c,i)=>{ want['16c'+i+'a']=c.a; want['16c'+i+'b']=c.b; });
    for(const q in want){ if(!selOf(card,q)){ toast('Choose an answer for A and B in EVERY row first 👆'); return; } }
    const bad=Object.keys(want).filter(q=>selOf(card,q)!==want[q]);
    if(bad.length===0){ markAllOK(card); markDone(card);
      mascotCheer('Picture B sits like a star — back straight, feet flat, head and chest up! 🌟'); return; }
    S.no(); for(const q in want)markChoices(card,q,want[q]);
    hint('p16c','Cinnamoroll tip: Picture A — back <b>bent</b>, feet <b>crossed</b>, head <b>down</b>, chest <b>down</b>. '
      +'Picture B — back <b>straight</b>, feet <b>flat</b>, head <b>up</b>, chest <b>up</b>. Sit like Picture B! 🪑');
  }};

  /* --- p16d: fill in the blanks --- */
  let h4=`<div class="card" id="p16d">${cardHead('p16d','D','Protect your backbone ✏️',
    'D. Fill in the blanks — write the correct answers on the ______.',true)}`;
  h4+=`<div class="qline">1. To protect the <button class="blank blankslot" data-ans="backbone">&nbsp;</button> , we should have good posture when we sit, stand, and walk.</div>`;
  h4+=`<div class="qline">2. We should keep the back <button class="blank blankslot" data-ans="straight">&nbsp;</button> when we sit, stand, and walk.</div>`;
  h4+=`<div class="qline">3. We should also have <button class="blank blankslot" data-ans="good posture">&nbsp;</button> when we read, use the computer, carry the school bag, and pick up and carry things.</div>`;
  h4+=chipTray(['backbone','straight','good posture','curved','junk food'],'Word box — tap a word, then tap the ______. Some words are extra!');
  h4+=cardFoot('p16d')+`</div>`;
  G.cards['p16d']={check(){
    const card=$('#p16d'); hintHide('p16d');
    const slots=$$('.blankslot',card);
    if(slots.some(s=>!s.dataset.val)){ toast('Fill every ______ first ☁️'); return; }
    const bad=slots.filter(s=>s.dataset.val!==s.dataset.ans);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); slots.forEach(s=>{ (s.dataset.val===s.dataset.ans)?markOK(s):markNO(s); });
    hint('p16d','Cinnamoroll tip: protect the <b>backbone</b>! Keep the back <b>straight</b> when we sit, stand and walk, '
      +'and always have a <b>good posture</b> when we read, use the computer, carry the school bag, and pick up and carry things. 🎒');
  }};
  return [{banner:B16,html:h},{banner:B16,html:h2},{banner:B16,html:h3},{banner:B16,html:h4}];
}

/* ================= PAGE 17 · GS9 · my body & sense organs ================= */
function buildP17(){
  const B17 = banner('unicorn','Unit 1 · Know Yourself — My Body & Sense Organs',
    'A–D. Body parts, sense organs, and how to protect them! 🙋👀👂👃👅✋');
  /* --- p17a: uses of the sense organs --- */
  const SENSES=[{v:'see',h:'A. See'},{v:'hear',h:'B. Hear'},{v:'smell',h:'C. Smell'},{v:'taste',h:'D. Taste'},{v:'touch',h:'E. Touch'}];
  const SCEN=[
    {e:'🍟',t:'Ken eats a box of potato chips.',key:'taste'},
    {e:'🐶',t:'May strokes the soft, furry dog.',key:'touch'},
    {e:'📱',t:'Ann looks at pictures on the tablet.',key:'see'},
    {e:'🎧',t:'Tim listens to music with his headphones.',key:'hear'},
    {e:'💐',t:'Jo smells the pretty flowers.',key:'smell'}];
  let h=`<div class="card" id="p17a">${cardHead('p17a','A','What are the uses of the sense organs? 👀',
    'A. What are the uses of the sense organs? Choose the letter of the correct answer for each picture.',true)}`;
  h+=SCEN.map((s,i)=>`<div class="qline">${i+1}. ${s.e} ${s.t} ( ${choiceGroup('17a'+(i+1),SENSES)} )</div>`).join('');
  h+=cardFoot('p17a')+`</div>`;
  G.cards['p17a']={check(){
    const card=$('#p17a'); hintHide('p17a');
    const want={}; SCEN.forEach((s,i)=>want['17a'+(i+1)]=s.key);
    for(const q in want){ if(!selOf(card,q)){ toast('Choose a letter for EVERY picture first 👆'); return; } }
    const bad=Object.keys(want).filter(q=>selOf(card,q)!==want[q]);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); for(const q in want)markChoices(card,q,want[q]);
    hint('p17a','Cinnamoroll tip: eyes <b>see</b> (A), ears <b>hear</b> (B), nose <b>smells</b> (C), tongue <b>tastes</b> (D), '
      +'and skin <b>touches</b> (E). Chips → D, the dog → E, the tablet → A, music → B, flowers → C! 🙋');
  }};

  /* --- p17b: protecting the sense organs (√ / X) --- */
  const PROTECT=[
    {e:'🧴',t:'May puts on sun cream at the beach.',ok:'good'},
    {e:'🥗',t:'Ben eats his fruit and vegetables.',ok:'good'},
    {e:'✏️',t:'Ken puts his dirty pencil in his mouth.',ok:'bad'},
    {e:'😴',t:'Ann sleeps with very loud music on her headphones.',ok:'bad'},
    {e:'🚧',t:'Tom watches the loud drilling up close — he does not cover his ears.',ok:'bad'}];
  let h2=`<div class="card" id="p17b">${cardHead('p17b','B','Protect your sense organs! 🛡️',
    'B. Are the children protecting their sense organs? Put a ✓ for yes or a ✗ for no.',true)}`;
  h2+=PROTECT.map((p,i)=>`<div class="qline">${i+1}. ${p.e} ${p.t} ( ${choiceGroup('17b'+(i+1),[{v:'good',h:'✓ yes'},{v:'bad',h:'✗ no'}])} )</div>`).join('');
  h2+=cardFoot('p17b')+`</div>`;
  G.cards['p17b']={check(){
    const card=$('#p17b'); hintHide('p17b');
    const want={}; PROTECT.forEach((p,i)=>want['17b'+(i+1)]=p.ok);
    for(const q in want){ if(!selOf(card,q)){ toast('Choose ✓ or ✗ for EVERY child first 👆'); return; } }
    const bad=Object.keys(want).filter(q=>selOf(card,q)!==want[q]);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); for(const q in want)markChoices(card,q,want[q]);
    hint('p17b','Cinnamoroll tip: sun cream protects the skin and healthy food keeps the body strong — <b>✓ ✓</b>. '
      +'But dirty things in the mouth, very loud music on headphones, and loud drilling without covering the ears can hurt our sense organs — <b>✗ ✗ ✗</b>!');
  }};

  /* --- p17c: which part is mainly moving? --- */
  const MOPT=[{v:'head',h:'Head'},{v:'trunk',h:'Trunk'},{v:'arm',h:'Arm'},{v:'leg',h:'Leg'}];
  const MOVE=[
    {e:'👋',t:'Waving "hello"!',key:'arm'},
    {e:'🤸',t:'Bending backwards like a rainbow.',key:'trunk'},
    {e:'🙂',t:'Shaking the head to say "no".',key:'head'},
    {e:'⚽',t:'Kicking the football.',key:'leg'}];
  let h3=`<div class="card" id="p17c">${cardHead('p17c','C','Which part is mainly moving? 🤸',
    'C. Which part of the body are the children mainly moving? Circle the correct answer.',true)}`;
  h3+=MOVE.map((m,i)=>`<div class="qline">${i+1}. ${m.e} ${m.t} ( ${choiceGroup('17c'+(i+1),shuf(MOPT))} )</div>`).join('');
  h3+=cardFoot('p17c')+`</div>`;
  G.cards['p17c']={check(){
    const card=$('#p17c'); hintHide('p17c');
    const want={}; MOVE.forEach((m,i)=>want['17c'+(i+1)]=m.key);
    for(const q in want){ if(!selOf(card,q)){ toast('Choose an answer for EVERY child first 👆'); return; } }
    const bad=Object.keys(want).filter(q=>selOf(card,q)!==want[q]);
    if(bad.length===0){ markAllOK(card); markDone(card); return; }
    S.no(); for(const q in want)markChoices(card,q,want[q]);
    hint('p17c','Cinnamoroll tip: waving moves the <b>arm</b> 👋, bending backwards moves the <b>trunk</b> 🤸, '
      +'shaking "no" moves the <b>head</b> 🙂, and kicking the ball moves the <b>leg</b> ⚽!');
  }};

  /* --- p17d: fill in the blanks --- */
  let h4=`<div class="card" id="p17d">${cardHead('p17d','D','My amazing body — fill in! ✏️',
    'D. Fill in the blanks — write the correct answers on the ______.',true)}`;
  h4+=`<div class="qline">1. I have a <button class="blank blankslot" data-ans="head">&nbsp;</button> , a <button class="blank blankslot" data-ans="trunk">&nbsp;</button> , two <button class="blank blankslot" data-ans="arms">&nbsp;</button> and two <button class="blank blankslot" data-ans="legs">&nbsp;</button> .</div>`;
  h4+=`<div class="qline">2. I can <button class="blank blankslot" data-ans="sense">&nbsp;</button> things around me with my eyes, ears, nose, tongue and skin.</div>`;
  h4+=`<div class="qline">3. I should take <button class="blank blankslot" data-ans="care">&nbsp;</button> of my body.</div>`;
  h4+=chipTray(['head','trunk','arms','legs','sense','care','fingers','soap'],'Word box — tap a word, then tap the ______. Some words are extra!');
  h4+=cardFoot('p17d')+`</div>`;
  G.cards['p17d']={check(){
    const card=$('#p17d'); hintHide('p17d');
    const slots=$$('.blankslot',card);
    if(slots.some(s=>!s.dataset.val)){ toast('Fill every ______ first ☁️'); return; }
    const bad=slots.filter(s=>s.dataset.val!==s.dataset.ans);
    if(bad.length===0){ markAllOK(card); markDone(card);
      mascotCheer('Head, trunk, arms and legs — take good care of your amazing body! 🌟'); return; }
    S.no(); slots.forEach(s=>{ (s.dataset.val===s.dataset.ans)?markOK(s):markNO(s); });
    hint('p17d','Cinnamoroll tip: I have a <b>head</b>, a <b>trunk</b>, two <b>arms</b> and two <b>legs</b>. '
      +'I can <b>sense</b> things with my eyes, ears, nose, tongue and skin — so I should take <b>care</b> of my body! 💖');
  }};
  return [{banner:B17,html:h},{banner:B17,html:h2},{banner:B17,html:h3},{banner:B17,html:h4}];
}

/* ===== module registration (order = page order) ===== */
defineModule('gs',{title:'WS1 A · label the body parts',                  build:buildP9});
defineModule('gs',{title:'WS1 B · five senses',                           build:buildP10});
defineModule('gs',{title:'WS1 C · amazing feelings',                      build:buildP11});
defineModule('gs',{title:'WS1 D · good postures',                         build:buildP12});
defineModule('gs',{title:'WS1 E · keep yourself clean',                   build:buildP13});
defineModule('gs',{title:'WS1 F · unit 1 revision',                       build:buildP14});
defineModule('gs',{title:'Reading · fun facts about the human body',      build:buildP15});
defineModule('gs',{title:'WS2 · good postures',                           build:buildP16});
defineModule('gs',{title:'WS2 · my body & sense organs',                  build:buildP17});
