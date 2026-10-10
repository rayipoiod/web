/* ================= audio: kid-rich WebAudio SFX, tap-to-hear TTS, café waltz ================= */
/* ================= sound (kid-rich WebAudio) ================= */
let AC=null, muted=localStorage.getItem('cm_mute')==='1',
    musicOn=localStorage.getItem('cm_music')==='1';
function ac(){ if(!AC){ try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){} } if(AC&&AC.state==='suspended')AC.resume(); return AC; }
function tone(f,t=0.12,type='sine',g=0.12,when=0,f2=null){ const c=ac(); if(!c||muted)return;
  const o=c.createOscillator(),v=c.createGain(); o.type=type;
  const s=c.currentTime+when; o.frequency.setValueAtTime(f,s);
  if(f2)o.frequency.exponentialRampToValueAtTime(f2,s+t);
  o.connect(v); v.connect(c.destination);
  v.gain.setValueAtTime(0.0001,s); v.gain.exponentialRampToValueAtTime(g,s+0.015);
  v.gain.exponentialRampToValueAtTime(0.0001,s+t);
  o.start(s); o.stop(s+t+0.02); }
function noise(t=0.25,g=0.05,when=0){ const c=ac(); if(!c||muted)return;
  const len=Math.floor(c.sampleRate*t), buf=c.createBuffer(1,len,c.sampleRate), d=buf.getChannelData(0);
  for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);
  const src=c.createBufferSource(); src.buffer=buf;
  const f=c.createBiquadFilter(); f.type='bandpass'; f.frequency.value=950; f.Q.value=0.7;
  const v=c.createGain(); v.gain.value=g;
  src.connect(f); f.connect(v); v.connect(c.destination); src.start(c.currentTime+when); }
const S={
  tap(){tone(620,0.07,'triangle',0.08);},
  pop(){tone(760,0.09,'triangle',0.1); tone(980,0.08,'triangle',0.08,0.06);},
  sparkle(){[880,1175,1568,2093].forEach((f,i)=>tone(f,0.1,'sine',0.06,i*0.055));},
  whoosh(){noise(0.3,0.045); tone(520,0.24,'sine',0.05,0,170);},
  ding(){tone(1319,0.28,'sine',0.09); tone(1760,0.34,'sine',0.06,0.08);},
  no(){tone(311,0.22,'sine',0.1,0,150); tone(233,0.2,'triangle',0.05,0.08); mascotOops();},
  yay(){[523,659,784,1047].forEach((f,i)=>tone(f,0.14,'triangle',0.1,i*0.09));
    tone(1319,0.34,'sine',0.05,0.38);},
  tada(){[[523,659,784],[587,740,880],[659,784,1047],[784,988,1175]].forEach((ch,i)=>
      ch.forEach(f=>tone(f,0.34,'triangle',0.07,i*0.16)));
    tone(1568,0.5,'sine',0.06,0.66); noise(0.5,0.035,0.66);},
  /* big all-correct reward fanfare */
  fanfare(){ [523,659,784,1047].forEach((f,i)=>tone(f,0.16,'triangle',0.11,i*0.07));
    [1047,1319,1568].forEach(f=>tone(f,0.55,'triangle',0.05,0.5));
    tone(2093,0.45,'sine',0.05,0.62); noise(0.5,0.032,0.55); },
};

/* ================= read aloud 🔈 (tap the words to hear them) ================= */
const EMOJI_WORD=[[/(🧁)/g,'cupcake'],[/(🍩)/g,'doughnut'],[/(🍪)/g,'cookie'],[/(🥞)/g,'pancake'],
  [/(🍓)/g,'strawberry'],[/(🍫)/g,'chocolate'],[/(🍬)/g,'sweet'],[/(🍰|🎂)/g,'cake'],[/(🥐)/g,'croissant'],
  [/(☕)/g,'tea'],[/(🧃)/g,'juice'],[/(🍎)/g,'apple'],[/(🥛|🍼)/g,'milk'],[/(🍊)/g,'orange'],[/(🍐)/g,'pear'],
  [/(🐟|🐠)/g,'fish'],[/(🍇)/g,'grapes'],[/(🍭)/g,'lollipop'],[/(🧇)/g,'waffle'],[/(⭐|🌟)/g,'star'],
  [/(☁️|☁)/g,'cloud'],[/(🚪)/g,'door'],[/(🎀)/g,'ribbon'],[/(🍥)/g,'cinnamon roll'],[/(🐶)/g,'puppy'],
  [/(👯)/g,'pairs'],[/(🔗)/g,'link'],[/(🐽|🐷)/g,'sniff'],[/(✨)/g,'sparkle'],[/(🎉)/g,'hooray'],
  [/(💙|❤)/g,'heart'],[/(🐾)/g,'paw'],[/(⚖️|⚖)/g,'scales'],[/(◯|○)/g,'circle'],[/(➕)/g,'add'],[/(👍)/g,'thumbs up'],
  [/(👀)/g,'look'],[/(🏃)/g,'running'],[/(🎈)/g,'balloon'],[/(🧙)/g,'magic'],[/(🌈)/g,'rainbow'],[/(🎉)/g,'hooray']];
const STRIP_EMOJI=/[\u203C-\u3299\u{1F000}-\u{1FAFF}\u{FE0F}\u{200D}\u2B00-\u2BFF\u2600-\u27BF\u2190-\u21FF]/gu;
function emojify(t){ EMOJI_WORD.forEach(([r,w])=>{ t=t.replace(r,' '+w+' '); });
  return t.replace(STRIP_EMOJI,' ').replace(/\s+/g,' ').trim(); }
let VOICE=null, readingEl=null, readSeq=0;
function pickVoice(){ if(!('speechSynthesis' in window))return;
  try{ const vs=speechSynthesis.getVoices();
    VOICE=vs.find(v=>/en(-|_)US/i.test(v.lang)&&/Google US|Samantha|Zira|Aria|Jenny/i.test(v.name))
      ||vs.find(v=>/^en/i.test(v.lang))||null; }catch(e){} }
if('speechSynthesis' in window){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }
function spokenText(el){ const c=el.cloneNode(true);
  $$('.choices',c).forEach(g=>{ const t=$$('.choice',g).map(b=>b.textContent.trim()).join(' or ');
    g.replaceWith(document.createTextNode(' '+t+' ')); });
  $$('.blankslot',c).forEach(b=>b.replaceWith(document.createTextNode(' '+(b.dataset.val||'blank')+' ')));
  $$('.nb',c).forEach(b=>b.replaceWith(document.createTextNode(' '+(b.dataset.name||'who is it')+' ')));
  return emojify(c.textContent); }
function stopReading(){ readSeq++; if('speechSynthesis' in window)speechSynthesis.cancel();
  $$('.reading').forEach(x=>x.classList.remove('reading')); readingEl=null; }
function speakUtter(el,txt,tok){ el.classList.add('reading');
  const u=new SpeechSynthesisUtterance(txt);
  u.lang='en-US'; if(VOICE)u.voice=VOICE; u.rate=.85; u.pitch=1.05; u.volume=1;
  const done=()=>{ if(tok===readSeq)el.classList.remove('reading'); };
  u.onend=done; u.onerror=done;
  setTimeout(done, Math.max(2800, txt.length*95));
  speechSynthesis.speak(u); }
function speak(el){ if(!('speechSynthesis' in window)){ toast('Reading needs a newer browser 🙈'); return; }
  if(muted){ toast('Sound is off — tap the 🔊 button first! 🔇',2200); return; }
  if(!VOICE)pickVoice(); speechSynthesis.cancel(); readSeq++;
  if(readingEl===el){ $$('.reading').forEach(x=>x.classList.remove('reading')); readingEl=null; return; }
  $$('.reading').forEach(x=>x.classList.remove('reading')); readingEl=el;
  const txt=spokenText(el); if(txt)speakUtter(el,txt,readSeq); }
function speakCard(card){ if(!('speechSynthesis' in window)){ toast('Reading needs a newer browser 🙈'); return; }
  if(muted){ toast('Sound is off — tap the 🔊 button first! 🔇',2200); return; }
  if(!VOICE)pickVoice(); speechSynthesis.cancel();
  const myTok=++readSeq; $$('.reading').forEach(x=>x.classList.remove('reading')); readingEl=null;
  const sel='.card-top b, .card-instr, .scene-caption, .tip, .qline, .tickrow .ticktext, .speech, .tray-label, .stext, .ptxt, .qq, .case-scene, .legend, .mgroup .msub, .inpline';
  const parts=[];
  $$(sel,card).forEach(el=>{ const s=el.textContent.trim();
    if(el.classList.contains('qline')&&/^\d+\.$/.test(s))return;
    const txt=spokenText(el); if(txt)parts.push({el,txt}); });
  let delay=80;
  parts.forEach(({el,txt})=>{ const d=Math.max(1500,txt.length*90);
    setTimeout(()=>{ if(myTok!==readSeq)return;
      $$('.reading').forEach(x=>x.classList.remove('reading')); speakUtter(el,txt,myTok); },delay);
    delay+=d; }); }
const muteBtn=$('#muteBtn');
function paintMute(){ muteBtn.textContent=muted?'🔇':'🔊'; }
/* --- Cinnamoroll café waltz 🎵 (music-box melody + waltz bass + pah-pah chords + shakers) --- */
const mFreq=m=>440*Math.pow(2,(m-69)/12);
const CHORDS={ C:{b:48,t:[64,67,72]}, Am:{b:45,t:[64,69,72],mi:1}, F:{b:53,t:[65,69,72]},
               G:{b:55,t:[62,67,71]}, G7:{b:55,t:[65,67,71]}, Dm:{b:50,t:[65,69,74],mi:1} };
/* 16 bars in 3/4 — A section then B section; each bar: [chord, [[beat,dur,midi],...]] */
const SONG=[
 ['C',[[0,1,76],[1,1,79],[2,1,84]]],         ['Am',[[0,.5,84],[.5,.5,83],[1,2,81]]],
 ['F',[[0,1,81],[1,1,79],[2,1,77]]],         ['G',[[0,.5,79],[.5,.5,81],[1,1,83],[2,1,74]]],
 ['C',[[0,1,76],[1,1,79],[2,1,84]]],         ['Am',[[0,.5,84],[.5,.5,86],[1,1,88],[2,1,84]]],
 ['F',[[0,1,77],[1,1,76],[2,1,74]]],         ['C',[[0,2.5,72],[2.5,.5,76]]],
 ['F',[[0,1,81],[1,1,84],[2,.5,81],[2.5,.5,79]]], ['C',[[0,1,79],[1,1,76],[2,1,79]]],
 ['Dm',[[0,1,77],[1,1,81],[2,.5,77],[2.5,.5,76]]], ['G',[[0,1,74],[1,1,76],[2,.5,74],[2.5,.5,71]]],
 ['F',[[0,1,81],[1,1,84],[2,1,86]]],         ['C',[[0,1,84],[1,1,79],[2,1,76]]],
 ['G7',[[0,1,74],[1,.5,76],[1.5,.5,77],[2,1,79]]], ['C',[[0,.5,76],[.5,.5,74],[1,2,72]]] ];
const SPB=60/100; /* seconds per beat at 100 bpm */
let mGain=null, mTimer=null, mBar=0, mNextT=0;
function musicBus(c){ if(!mGain){ mGain=c.createGain(); mGain.gain.value=0.0001;
  mGain.connect(c.destination); } return mGain; }
function mBell(c,t,f,g,dur){ const bus=musicBus(c); /* dreamy music-box bell */
  [[1,'triangle',1],[2,'sine',.3],[3.01,'sine',.09]].forEach(([m,ty,a])=>{
    const o=c.createOscillator(),v=c.createGain(); o.type=ty; o.frequency.value=f*m;
    v.gain.setValueAtTime(0.0001,t); v.gain.exponentialRampToValueAtTime(Math.max(g*a,0.0002),t+.012);
    v.gain.exponentialRampToValueAtTime(0.0001,t+(m===1?dur:dur*.5));
    o.connect(v); v.connect(bus); o.start(t); o.stop(t+dur+.05); }); }
function mBass(c,t,f,g){ const bus=musicBus(c); /* warm round waltz bass */
  const o=c.createOscillator(),o2=c.createOscillator(),v=c.createGain(),v2=c.createGain();
  o.type='sine'; o.frequency.value=f; o2.type='triangle'; o2.frequency.value=f; v2.gain.value=.35;
  o.connect(v); o2.connect(v2); v2.connect(v); v.connect(bus);
  v.gain.setValueAtTime(0.0001,t); v.gain.exponentialRampToValueAtTime(g,t+.02);
  v.gain.exponentialRampToValueAtTime(0.0001,t+.85);
  o.start(t); o.stop(t+.9); o2.start(t); o2.stop(t+.9); }
function mPluck(c,t,mi){ const bus=musicBus(c); /* soft chord pah-pah */
  const o=c.createOscillator(),v=c.createGain(); o.type='triangle'; o.frequency.value=mFreq(mi);
  o.connect(v); v.connect(bus);
  v.gain.setValueAtTime(0.0001,t); v.gain.exponentialRampToValueAtTime(.02,t+.01);
  v.gain.exponentialRampToValueAtTime(0.0001,t+.32); o.start(t); o.stop(t+.38); }
function mShk(c,t,g){ const bus=musicBus(c); /* tiny shaker tick */
  const len=Math.floor(c.sampleRate*.05), buf=c.createBuffer(1,len,c.sampleRate), d=buf.getChannelData(0);
  for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);
  const s=c.createBufferSource(); s.buffer=buf;
  const f=c.createBiquadFilter(); f.type='highpass'; f.frequency.value=6000;
  const v=c.createGain(); v.gain.value=g; s.connect(f); f.connect(v); v.connect(bus); s.start(t); }
function mScheduleBar(c,t,bar){ const idx=bar%SONG.length, cd=CHORDS[SONG[idx][0]], mel=SONG[idx][1];
  const hum=.9+Math.random()*.2;
  mel.forEach(([bt,du,mi])=>mBell(c,t+bt*SPB+Math.random()*.01,mFreq(mi),.05*hum,
    Math.max(.55,du*SPB*1.4+.45)));
  /* B section sparkles: echo the high notes an octave up, extra dreamy */
  if(idx>=8)mel.forEach(([bt,,mi])=>{ if(mi>=84)mBell(c,t+bt*SPB,mFreq(mi+12),.016,.6); });
  /* oom-pah-pah: root, fifth, then third or fifth */
  mBass(c,t,mFreq(cd.b),.07); mBass(c,t+SPB,mFreq(cd.b+7),.045);
  mBass(c,t+2*SPB,mFreq(cd.b+(bar%2?(cd.mi?3:4):7)),.045);
  [1,2].forEach(b=>cd.t.slice(1).forEach(mi=>mPluck(c,t+b*SPB,mi)));
  mShk(c,t,.006); mShk(c,t+SPB,.012); mShk(c,t+2*SPB,.012);
  /* end-of-loop twinkle */
  if(idx===15)[84,88,91].forEach((mi,i)=>mBell(c,t+(2+i*.33)*SPB,mFreq(mi),.035,.8));
  window.MBARS=(window.MBARS||0)+1; }
function mTick(){ const c=ac(); if(!c||muted||!musicOn)return;
  while(mNextT<c.currentTime+.8){ mScheduleBar(c,mNextT,mBar); mBar++; mNextT+=3*SPB; } }
function startMusic(){ const c=ac(); if(!c||mTimer)return;
  mBar=0; mNextT=c.currentTime+.08;
  const bus=musicBus(c); bus.gain.cancelScheduledValues(c.currentTime);
  bus.gain.setValueAtTime(Math.max(bus.gain.value,0.0001),c.currentTime);
  bus.gain.linearRampToValueAtTime(.9,c.currentTime+.6);
  mTick(); mTimer=setInterval(mTick,140); }
function stopMusic(){ if(mTimer){clearInterval(mTimer); mTimer=null;}
  if(AC&&mGain){ mGain.gain.cancelScheduledValues(AC.currentTime);
    mGain.gain.setValueAtTime(Math.max(mGain.gain.value,0.0001),AC.currentTime);
    mGain.gain.linearRampToValueAtTime(0.0001,AC.currentTime+.35); } }
const musicBtn=$('#musicBtn');
function paintMusic(){ musicBtn.classList.toggle('music-off',!musicOn); }
muteBtn.addEventListener('click',()=>{ muted=!muted; localStorage.setItem('cm_mute',muted?'1':'0');
  paintMute(); if(muted){stopMusic();} else {S.tap(); if(musicOn)startMusic();} });
musicBtn.addEventListener('click',()=>{ musicOn=!musicOn; localStorage.setItem('cm_music',musicOn?'1':'0');
  paintMusic(); if(musicOn){startMusic(); S.sparkle(); toast("Cinnamoroll's café waltz ☁️🎵");}
  else {stopMusic(); S.tap();} });
paintMute(); paintMusic(); if(musicOn)startMusic();
