/* ================= boot: cover, home buttons, init ================= */
$('#logoImg').src=IMG.Q_CINNA;
const HEROES=[IMG.COVER,IMG.HERO_STAR,IMG.HERO_BALLOON,IMG.HERO_CAFE,IMG.HERO_CAKE,IMG.KITTY];
function rollHero(){ $('#heroImg').src=pick(HEROES); }
rollHero();
$('#macaronImg').src=IMG.MACARON;
$('#partyImg').src=IMG.PARTY;
const nameIn=$('#kidName');
nameIn.value=localStorage.getItem('cm_name')||'Rachel';
nameIn.addEventListener('input',()=>localStorage.setItem('cm_name',nameIn.value));
const ord=n=>n+(n%10===1&&n%100!==11?'st':n%10===2&&n%100!==12?'nd':n%10===3&&n%100!==13?'rd':'th');
const MON=['January','February','March','April','May','June','July','August','September','October','November','December'];
const now=new Date();
$('#kidDate').value=`${ord(now.getDate())} ${MON[now.getMonth()]} ${now.getFullYear()}`;

/* cover buttons — generated from the subject registry (see js/core/40-registry.js) */
buildAll();
$('#streamRow').innerHTML=Object.values(SUBJECTS).map(s=>
  `<button class="stream-btn ${s.cls||s.id}" data-subject="${s.id}">
    <span class="s-ico">${s.icon}</span><b>${s.label}</b>
    <small>${s.tagline}<br>${s.cards.length} questions · ${s.cards.length} stars ⭐ · one per page!</small>
    <span class="go">${s.cta} ➜</span></button>`).join('');
document.addEventListener('click',e=>{ const b=e.target.closest('.stream-btn'); if(!b)return;
  S.tada(); burstAt(b,22); startStream(b.dataset.subject);
  setTimeout(()=>toast('Tip: tap any words to hear Cinnamoroll read them aloud! 🔈',3400),1100); });

/* Hello Kitty buddy — waves hello now and then, cover included */
setInterval(()=>{ const k=$('#kitty'); if(!k)return;
  k.classList.remove('wave'); void k.offsetWidth; k.classList.add('wave');
  setTimeout(()=>k.classList.remove('wave'),800); },7000);

$('#shufBtn').addEventListener('click',()=>{ buildAll(); S.sparkle(); mascotCheer('Fresh questions served! 🧁✨');
  paintStars(); if(G.stream)go(G.page); });
paintDots();
