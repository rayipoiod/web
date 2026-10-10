/* ============================================================
   Subject & module registry — THE growth point of the app.
   ------------------------------------------------------------
   A "subject" is one cover-page stream: it gets its own star
   counter, report card, certificate and timer.
   A "module" is one worksheet page-group; build() returns an
   array of [{banner, html}, ...] — one entry per question card
   (each card needs id="pXXa" and a G.cards[id].check()).
   Choice groups inside a card MUST carry data-q="<cardid-suffix>".

   To add a subject/grade later (e.g. P2 English):
     1. js/subjects/english.js:
        defineSubject('eng-p2', { label, icon, tagline, cta, cls,
          report, unit, certTitle, certText(n), hello });
        defineModule('eng-p2', { title:'...', build:buildE1 });
        (+ a .stream-btn.eng-p2 colour block in css/subjects.css)
     2. add <script src="js/subjects/english.js"></script> to
        index.html before js/90-boot.js.
   Nothing else needs to change: cover buttons, stars, nav dots,
   timers, report card and certificate are all generated.
   ============================================================ */

const SUBJECTS={};
function defineSubject(id,meta){ SUBJECTS[id]=Object.assign({id,cards:[],pages:[],modules:[]},meta); }
function defineModule(subjectId,mod){ SUBJECTS[subjectId].modules.push(mod); }

/* global app state: current stream, current page, per-card check fns, star counts */
const G={stream:null, page:1, cards:{}, done:{}};
