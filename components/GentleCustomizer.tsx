"use client";

import {useEffect,useMemo,useState} from 'react';

type Item={id:string;category:string;ro:string;en:string};

const categories=[
 {id:'planning',ro:'Planificare & timp',en:'Planning & time'},
 {id:'focus',ro:'Obiective & focus',en:'Goals & focus'},
 {id:'home',ro:'Casă & administrare',en:'Home & admin'},
 {id:'money',ro:'Bani & cumpărături',en:'Money & shopping'},
 {id:'care',ro:'Îngrijire & sănătate',en:'Care & health'},
 {id:'food',ro:'Mese, rețete & tradiții',en:'Meals, recipes & traditions'},
 {id:'family',ro:'Familie & memorie',en:'Family & memory'},
 {id:'life',ro:'Drumuri, cultură & timp pentru mine',en:'Travel, culture & me-time'},
 {id:'review',ro:'Revizuire & reflecție',en:'Review & reflection'}
];

const items:Item[]=[
 {id:'year-view',category:'planning',ro:'Vedere anuală 2027',en:'2027 year at a glance'},
 {id:'important-dates',category:'planning',ro:'Date importante',en:'Important dates'},
 {id:'year-todo',category:'planning',ro:'Lucruri de făcut anul acesta',en:'Things to do this year'},
 {id:'month-plan',category:'planning',ro:'Planul lunii',en:'Monthly plan'},
 {id:'month-calendar',category:'planning',ro:'Calendar lunar',en:'Monthly calendar'},
 {id:'week-plan',category:'planning',ro:'Plan săptămânal',en:'Weekly plan'},
 {id:'week-priorities',category:'planning',ro:'Prioritățile săptămânii',en:'Weekly priorities'},
 {id:'general-todo',category:'planning',ro:'Listă generală de făcut',en:'Master to-do list'},

 {id:'personal-goals',category:'focus',ro:'Obiective personale',en:'Personal goals'},
 {id:'work-goals',category:'focus',ro:'Obiective profesionale / studiu',en:'Work / study goals'},
 {id:'quarter-focus',category:'focus',ro:'Focus trimestrial',en:'Quarterly focus'},
 {id:'project-map',category:'focus',ro:'Harta proiectelor',en:'Project map'},
 {id:'next-steps',category:'focus',ro:'Următorii pași',en:'Next steps'},
 {id:'habit-tracker',category:'focus',ro:'Urmărirea obiceiurilor',en:'Habit tracker'},
 {id:'deep-work',category:'focus',ro:'Timp pentru lucru concentrat',en:'Deep work planner'},
 {id:'brain-dump',category:'focus',ro:'Brain dump',en:'Brain dump'},

 {id:'home-routine',category:'home',ro:'Rutina casei',en:'Home routine'},
 {id:'cleaning',category:'home',ro:'Curățenie pe zone',en:'Cleaning by zone'},
 {id:'maintenance',category:'home',ro:'Întreținerea casei',en:'Home maintenance'},
 {id:'last-time',category:'home',ro:'Ultima dată când am…',en:'Last time I…'},
 {id:'where-put',category:'home',ro:'Unde am pus…',en:'Where did I put…'},
 {id:'borrowed',category:'home',ro:'Lucruri împrumutate / date mai departe',en:'Borrowed / lent items'},
 {id:'documents',category:'home',ro:'Documente & date de expirare',en:'Documents & expiry dates'},
 {id:'subscriptions',category:'home',ro:'Abonamente & reînnoiri',en:'Subscriptions & renewals'},

 {id:'monthly-budget',category:'money',ro:'Buget lunar',en:'Monthly budget'},
 {id:'bills',category:'money',ro:'Facturi recurente',en:'Recurring bills'},
 {id:'savings',category:'money',ro:'Economii & obiective financiare',en:'Savings & financial goals'},
 {id:'shopping-list',category:'money',ro:'Listă de cumpărături',en:'Shopping list'},
 {id:'price-watch',category:'money',ro:'Lucruri de urmărit la preț',en:'Price watch list'},
 {id:'wish-list',category:'money',ro:'Wishlist utilă',en:'Useful wishlist'},
 {id:'gifts-budget',category:'money',ro:'Cadouri & buget pentru cadouri',en:'Gift planning & budget'},
 {id:'no-buy',category:'money',ro:'De cumpărat mai târziu / nu acum',en:'Buy later / not now'},

 {id:'meds',category:'care',ro:'Urmărirea medicamentelor',en:'Medication tracker'},
 {id:'meds-refill',category:'care',ro:'Rețete, refill-uri & medicamente de cumpărat',en:'Refills & medication to buy'},
 {id:'appointments',category:'care',ro:'Programări medicale',en:'Medical appointments'},
 {id:'symptom-notes',category:'care',ro:'Notițe pentru consultații',en:'Appointment notes'},
 {id:'water',category:'care',ro:'Hidratare',en:'Hydration tracker'},
 {id:'sleep',category:'care',ro:'Somn & odihnă',en:'Sleep & rest'},
 {id:'movement',category:'care',ro:'Mișcare & activitate',en:'Movement & activity'},
 {id:'self-care',category:'care',ro:'Îngrijire personală',en:'Self-care routine'},

 {id:'meal-plan',category:'food',ro:'Planul meselor',en:'Meal plan'},
 {id:'recipes-try',category:'food',ro:'Rețete de încercat',en:'Recipes to try'},
 {id:'family-recipes',category:'food',ro:'Rețete de familie',en:'Family recipes'},
 {id:'pantry',category:'food',ro:'Cămară & stocuri',en:'Pantry inventory'},
 {id:'freezer',category:'food',ro:'Congelator: ce avem deja',en:'Freezer inventory'},
 {id:'seasonal-food',category:'food',ro:'Mâncare de sezon',en:'Seasonal food'},
 {id:'traditions',category:'food',ro:'Tradiții & sărbători',en:'Traditions & celebrations'},
 {id:'holiday-menu',category:'food',ro:'Meniuri pentru sărbători și musafiri',en:'Holiday & guest menus'},

 {id:'birthdays',category:'family',ro:'Zile de naștere & aniversări',en:'Birthdays & anniversaries'},
 {id:'keep-touch',category:'family',ro:'Oameni cu care vreau să țin legătura',en:'People to keep in touch with'},
 {id:'family-moments',category:'family',ro:'Momente de familie de păstrat',en:'Family moments to remember'},
 {id:'photos',category:'family',ro:'Fotografii de printat / organizat',en:'Photos to print / organise'},
 {id:'family-questions',category:'family',ro:'Întrebări pentru părinți & bunici',en:'Questions for parents & grandparents'},
 {id:'family-places',category:'family',ro:'Locuri importante pentru familie',en:'Important family places'},
 {id:'family-stories',category:'family',ro:'Povești pe care nu vreau să le uit',en:'Stories I do not want to forget'},
 {id:'family-gifts',category:'family',ro:'Idei de cadouri pentru cei dragi',en:'Gift ideas for loved ones'},

 {id:'bucket-list',category:'life',ro:'Bucket list',en:'Bucket list'},
 {id:'travel',category:'life',ro:'Călătorii & escapade',en:'Travel & getaways'},
 {id:'nearby',category:'life',ro:'Locuri de explorat aproape de casă',en:'Places to explore near home'},
 {id:'books',category:'life',ro:'Cărți de citit',en:'Books to read'},
 {id:'films',category:'life',ro:'Filme & seriale',en:'Films & series'},
 {id:'music',category:'life',ro:'Muzică, concerte & spectacole',en:'Music, concerts & shows'},
 {id:'learning',category:'life',ro:'Lucruri pe care vreau să le învăț',en:'Things I want to learn'},
 {id:'creative',category:'life',ro:'Idei creative & proiecte personale',en:'Creative ideas & personal projects'},

 {id:'quarter-review',category:'review',ro:'Revizuire trimestrială',en:'Quarterly review'},
 {id:'year-review',category:'review',ro:'Retrospectiva anului',en:'Year review'},
 {id:'month-review',category:'review',ro:'Ce a mers bine luna aceasta',en:'What went well this month'},
 {id:'lessons',category:'review',ro:'Ce am învățat',en:'What I learned'},
 {id:'gratitude',category:'review',ro:'Recunoștință',en:'Gratitude'},
 {id:'rest-list',category:'review',ro:'Lucruri care mă ajută să mă odihnesc',en:'Things that help me rest'},
 {id:'stop-start',category:'review',ro:'Mai mult / mai puțin / deloc',en:'More / less / stop'},
 {id:'future-note',category:'review',ro:'Notă pentru mine de mai târziu',en:'Note to my future self'}
];

const defaultSelection=[
 'year-view','important-dates','year-todo','personal-goals','work-goals',
 'month-plan','month-calendar','week-plan','week-priorities','general-todo',
 'habit-tracker','monthly-budget','brain-dump','quarter-review','year-review'
];

export default function GentleCustomizer({ro}:{ro:boolean}){
 const [active,setActive]=useState('all');
 const [selected,setSelected]=useState<string[]>(defaultSelection);
 const limit=15;

 useEffect(()=>{
  try{
   const saved=window.localStorage.getItem('la-vatra-gentle-selection');
   if(saved){const parsed=JSON.parse(saved);if(Array.isArray(parsed)&&parsed.length===limit)setSelected(parsed);}
  }catch{}
 },[]);

 useEffect(()=>{
  try{window.localStorage.setItem('la-vatra-gentle-selection',JSON.stringify(selected));}catch{}
 },[selected]);

 const visible=useMemo(()=>active==='all'?items:items.filter(i=>i.category===active),[active]);

 function toggle(id:string){
  setSelected(current=>{
   if(current.includes(id)) return current.filter(x=>x!==id);
   if(current.length>=limit) return current;
   return [...current,id];
  });
 }

 return <div className="gentle-customizer">
  <div className="gentle-customizer-top">
   <div>
    <p className="eyebrow">{ro?'CATALOGUL COMPLET · 72 OPȚIUNI':'FULL CATALOGUE · 72 OPTIONS'}</p>
    <h2>{ro?'Alege exact 15 pagini pentru ediția ta.':'Choose exactly 15 pages for your edition.'}</h2>
    <p>{ro?'Poți combina liber pagini din orice categorie. Ediția finală are întotdeauna 15 componente — nici mai multe, nici mai puține.':'Mix freely across categories. Your final edition always contains exactly 15 components — no more, no less.'}</p>
   </div>
   <div className={"gentle-counter "+(selected.length===limit?'gentle-counter--full':'')}>
    <strong>{selected.length}<span>/{limit}</span></strong>
    <small>{selected.length===limit?(ro?'EDIȚIA ESTE COMPLETĂ':'EDITION COMPLETE'):(ro?`MAI ALEGI ${limit-selected.length}`:`CHOOSE ${limit-selected.length} MORE`)}</small>
   </div>
  </div>

  <div className="gentle-category-tabs" role="tablist" aria-label={ro?'Categorii':'Categories'}>
   <button className={active==='all'?'active':''} onClick={()=>setActive('all')}>{ro?'Toate':'All'}</button>
   {categories.map(c=><button key={c.id} className={active===c.id?'active':''} onClick={()=>setActive(c.id)}>{ro?c.ro:c.en}</button>)}
  </div>

  <div className="gentle-option-grid">
   {visible.map(item=>{
    const checked=selected.includes(item.id);
    const locked=!checked&&selected.length>=limit;
    return <button key={item.id} type="button" className={"gentle-option "+(checked?'gentle-option--selected ':'')+(locked?'gentle-option--locked':'')} onClick={()=>toggle(item.id)} aria-pressed={checked} disabled={locked}>
     <span className="gentle-check">{checked?'✓':'+'}</span>
     <span>{ro?item.ro:item.en}</span>
    </button>;
   })}
  </div>

  <div className="gentle-selection-summary">
   <div>
    <p className="eyebrow">{ro?'EDIȚIA TA · 15 PAGINI':'YOUR EDITION · 15 PAGES'}</p>
    <h3>{ro?'Selecția ta':'Your selection'}</h3>
   </div>
   <ol>
    {selected.map(id=>{const item=items.find(x=>x.id===id)!;return <li key={id}>{ro?item.ro:item.en}</li>})}
   </ol>
   <p className="gentle-save-note">{ro?'Selecția se păstrează automat pe acest dispozitiv.':'Your selection is saved automatically on this device.'}</p>
  </div>
 </div>;
}
