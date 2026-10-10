/* ================= tiny helpers + toast / praise / confetti / mascot ================= */
/* ================= tiny helpers ================= */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=arr=>arr[Math.floor(Math.random()*arr.length)];
const shuf=arr=>{const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a;};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const emojiSpan=(e,big)=>`<span class="emoji${big?' big':''}">${e}</span>`;

/* ================= toast / praise / confetti ================= */
const toastEl=$('#toast'); let toastT=null;
function toast(msg,ms=2500){ toastEl.textContent=msg; toastEl.classList.add('show');
  clearTimeout(toastT); toastT=setTimeout(()=>toastEl.classList.remove('show'),ms); }
const PRAISE=["Pawsome! 🐾","Espresso-lutely right! ☕","Chiffon-tastic! 🎉","You're on a roll… a cinnamon roll! 🌀",
  "Mocha is SO proud! 🎀","Sweet as frosting! 🧁","Milk says WOW! 🍼","Cinnamon-tacular! ⭐",
  "Super duper! 🌟","You did it, superstar! 🏆","Cloud nine! ☁️💙"];
const praise=()=>PRAISE[Math.floor(Math.random()*PRAISE.length)];
const NUDGE=["Oops! Milk may have nibbled that answer 🍼 Try again!","Almost! Cinnamoroll believes in you ☁️",
  "Hmm, count again with Cinnamoroll 🐶","Not quite — take a yummy breath 🧁","So close! One more look 👀"];
const nudge=()=>NUDGE[Math.floor(Math.random()*NUDGE.length)];
const CONF=['⭐','✨','☁️','🧁','💙','🎉','🍬','🍥'];
function burst(x,y,n=16){ for(let i=0;i<n;i++){ const p=document.createElement('span'); p.className='cp';
  p.textContent=CONF[Math.floor(Math.random()*CONF.length)];
  p.style.left=(x-20+Math.random()*40)+'px'; p.style.top=(y-10+Math.random()*20)+'px';
  document.body.appendChild(p); setTimeout(()=>p.remove(),1600); } }
function burstAt(el,n=16){ const r=el.getBoundingClientRect(); burst(r.left+r.width/2, r.top+r.height/2, n); }

/* ================= mascot buddy (cheers / Oops) ================= */
const mascot=$('#mascot'), mascotSay=$('#mascotSay');
$('#mascotImg').src=IMG.Q_CINNA;
let sayT=null;
function mascotSpeak(msg,ms=2400){ if(!mascotSay)return; mascotSay.innerHTML=msg;
  mascotSay.classList.add('show'); clearTimeout(sayT);
  sayT=setTimeout(()=>mascotSay.classList.remove('show'),ms); }
function mascotCheer(msg){ if(!mascot)return; mascot.classList.remove('oops');
  void mascot.offsetWidth; mascot.classList.add('cheer'); mascotSpeak(msg);
  setTimeout(()=>mascot.classList.remove('cheer'),1100); }
function mascotOops(){ if(!mascot)return; mascot.classList.remove('cheer');
  void mascot.offsetWidth; mascot.classList.add('oops');
  setTimeout(()=>mascot.classList.remove('oops'),1000); }
