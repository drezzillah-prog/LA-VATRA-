export type CollectionKey='healing'|'mystical'|'productivity'|'culture';
export type RoomKey='cuhnia'|'iatacul'|'camara'|'casa-mare'|'sura';
export type RegionKey='ro'|'eu'|'us';
export type RegionalPrice={ro:number;eu:number;us:number};
export type Product={
 slug:string;room:RoomKey;collection:CollectionKey;featured:boolean;bestseller:boolean;isNew:boolean;bundle:boolean;
 title:string;subtitle:string;type:string;badge:string;description:string;included:string[];idealFor:string;formats:string;
 price:RegionalPrice;tags:string[];
};

export const rooms=[
  {"key":"cuhnia","slug":"cuhnia","title":"CUHNIA","modern":"Bucătăria","english":"The Kitchen","kicker":"Aici se păstrează gusturi, gesturi și vorbele spuse la masă.","intro":"Recipes tell us what people ate. The marks in the margins, the strange measurements and the stories told while cooking tell us who they were.","photo":"https://commons.wikimedia.org/wiki/Special:FilePath/RO%20B%20Village%20Museum%20Fundu%20Moldovei%20household%20summer%20kitchen.jpg?width=2200","filters":["All","Recipes","Family","Letters","Rituals","Seasonal","Gifts"]},
  {"key":"iatacul","slug":"iatacul","title":"IATACUL","modern":"Dormitorul","english":"The Bedroom","kicker":"Aici se țin visele, gândurile și lucrurile pe care nu le spunem oricui.","intro":"For the pages written after the rest of the house has gone quiet.","photo":"https://commons.wikimedia.org/wiki/Special:FilePath/Romanian%20farmhouse%20bedroom%20%288053014190%29.jpg?width=2200","filters":["All","Journals","Dream & symbol","Letters","Cards","Wallpapers"]},
  {"key":"camara","slug":"camara","title":"CĂMARA","modern":"Rânduiala casei","english":"The Pantry","kicker":"Aici rânduiala nu e rigidă; e felul în care viața respiră mai ușor.","intro":"Plans, lists, provisions and everyday systems — enough structure to know where things belong, never enough to make life feel mechanical.","photo":"https://commons.wikimedia.org/wiki/Special:FilePath/RO%20B%20Village%20Museum%20Suici%20household%20stable%20and%20storage%20room.jpg?width=2200","filters":["All","Planners","Weekly","Home","2027","Undated","Bundles"]},
  {"key":"casa-mare","slug":"casa-mare","title":"CASA MARE","modern":"Odaia familiei","english":"The Great Room","kicker":"Aici intră poveștile pe care o familie nu ar trebui să le piardă.","intro":"Names. Voices. Homes. Journeys. Photographs. Recipes. The tiny details everybody assumes somebody else will remember.","photo":"https://commons.wikimedia.org/wiki/Special:FilePath/Casa%20mare.jpg?width=2200","filters":["All","Family archives","Grandparents","Photographs","Voices","Diaspora","Wedding","Children","Bundles"]},
  {"key":"sura","slug":"sura","title":"ȘURA","modern":"Anotimp & loc","english":"The Barn","kicker":"Aici se adună anotimpurile, locurile și lucrurile care țin de pământ și timp.","intro":"Calendars, landscapes, villages, old streets and the visual memory of Eastern Europe.","photo":"https://commons.wikimedia.org/wiki/Special:FilePath/Racovita%20%28Sibiu%29%20-%20SURA.jpg?width=2200","filters":["All","Calendars","Places","Heritage","Wall art","Wallpapers","Seasonal"]}
] as const;

export const products:Product[]=[
  {
    slug:"gentle-discipline-planner",
    room:"camara" as RoomKey,
    collection:"productivity" as CollectionKey,
    featured:true, bestseller:true, isNew:false, bundle:false,
    title:"Gentle Discipline Planner 2027", subtitle:"Structure without severity, dated for 2027.", type:"Digital planner · Printable PDF", badge:"Signature edition",
    description:"A refined planning system for people who want consistency without self-punishment, with monthly, weekly and reflection pages.",
    included:["Year-at-a-glance and seasonal intention pages","Monthly planning and gentle reset spreads","Weekly focus, priorities and energy-aware planning","Habit and rhythm trackers","Reflection pages","Printable and tablet-friendly files"],
    idealFor:"Thoughtful planners, recovering perfectionists and creative professionals.", formats:"PDF · A4 · A5 · US Letter · tablet-friendly",
    price:{"ro":109,"eu":32,"us":38}, tags:["planner","2027","weekly"]
  },
  {
    slug:"gentle-discipline-undated",
    room:"camara" as RoomKey,
    collection:"productivity" as CollectionKey,
    featured:true, bestseller:false, isNew:false, bundle:false,
    title:"Gentle Discipline — Undated", subtitle:"The signature system, without a calendar deadline.", type:"Digital planner · Printable PDF", badge:"Signature evergreen",
    description:"An evergreen version of Gentle Discipline for buyers who want the system without a dated year.",
    included:["Undated monthly spreads","Weekly planning pages","Energy-aware planning","Reflection pages","Multiple print sizes","Tablet-friendly PDF"],
    idealFor:"Anyone who wants flexible structure all year round.", formats:"PDF · A4 · A5 · US Letter · tablet-friendly",
    price:{"ro":89,"eu":26,"us":32}, tags:["planner","undated","weekly"]
  },
  {
    slug:"clear-days-weekly",
    room:"camara" as RoomKey,
    collection:"productivity" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Clear Days Weekly System", subtitle:"A clean weekly desk system with room to breathe.", type:"Weekly planner kit", badge:"Productivity / Clean",
    description:"Minimal weekly planning pages with priorities, appointments, open space and a simple end-of-week reset.",
    included:["Weekly spread","Priority map","Notes page","Reset page","A4 + US Letter files"],
    idealFor:"People who want clarity without a complex productivity system.", formats:"PDF · A4 · US Letter",
    price:{"ro":49,"eu":15,"us":18}, tags:["weekly","planner"]
  },
  {
    slug:"household-ledger",
    room:"camara" as RoomKey,
    collection:"productivity" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Household Ledger & Seasonal Home Planner", subtitle:"A practical home system for things that repeat.", type:"Printable home system", badge:"Productivity / Clean",
    description:"A warm but practical home planner for inventory, seasonal tasks, pantry lists, repairs, hosting and recurring routines.",
    included:["Household inventory","Seasonal task lists","Pantry pages","Repairs and maintenance","Hosting notes","Recurring routines"],
    idealFor:"Homes that need structure without turning life into a spreadsheet.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":79,"eu":23,"us":29}, tags:["home","seasonal","planner"]
  },
  {
    slug:"quiet-return-journal",
    room:"cuhnia" as RoomKey,
    collection:"healing" as CollectionKey,
    featured:true, bestseller:false, isNew:false, bundle:false,
    title:"Quiet Return Journal", subtitle:"Pages for the days when healing needs less noise.", type:"Printable journal", badge:"Emotional / Healing",
    description:"A gentle guided journal built around rest, memory, self-trust and the subtle practice of noticing what is changing inside you.",
    included:["32 guided reflection pages","Undated check-ins","Grounding prompts","Printable A4 + A5 files"],
    idealFor:"Slow mornings, reflective evenings, transitions and personal rituals.", formats:"PDF · A4 · A5",
    price:{"ro":69,"eu":19,"us":24}, tags:["journal","ritual"]
  },
  {
    slug:"family-recipe-archive",
    room:"cuhnia" as RoomKey,
    collection:"healing" as CollectionKey,
    featured:true, bestseller:true, isNew:false, bundle:false,
    title:"Family Recipe Archive", subtitle:"Keep the recipe and the story that belongs to it.", type:"Editable + printable archive", badge:"Cuhnia",
    description:"A family recipe archive designed to preserve dishes together with the people, places and occasions around them.",
    included:["Recipe pages","Who taught it","Story behind the dish","Seasonal meals","Photo pages","Family index"],
    idealFor:"Families, gift-givers and anyone preserving food memory.", formats:"PDF · printable + editable",
    price:{"ro":89,"eu":26,"us":32}, tags:["recipes","family-memory","gift"]
  },
  {
    slug:"home-ritual-cards",
    room:"cuhnia" as RoomKey,
    collection:"healing" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Home Ritual Cards", subtitle:"Small rituals for ordinary days.", type:"Printable card set", badge:"Cuhnia",
    description:"A set of small, usable prompts for home rituals, seasonal resets, quiet moments and reflective routines.",
    included:["24–36 ritual cards","Seasonal prompts","Reset cards","Home moments","Print-ready sheets"],
    idealFor:"People who like tangible prompts without a full journal.", formats:"PDF · card sheets",
    price:{"ro":39,"eu":12,"us":15}, tags:["ritual","cards"]
  },
  {
    slug:"letters-to-keep",
    room:"cuhnia" as RoomKey,
    collection:"healing" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Letters to Keep", subtitle:"Write what should not disappear.", type:"Guided journal", badge:"Cuhnia",
    description:"A guided letter journal for writing to people, places, homes and versions of yourself that deserve to be remembered.",
    included:["Letters to future self","Letters to parents and grandparents","Letters to home","Letters to places","Memory prompts"],
    idealFor:"Reflective writers and meaningful gifts.", formats:"PDF · A4 · A5",
    price:{"ro":59,"eu":17,"us":21}, tags:["letters","gift","family-memory"]
  },
  {
    slug:"letters-from-home",
    room:"cuhnia" as RoomKey,
    collection:"healing" as CollectionKey,
    featured:true, bestseller:true, isNew:true, bundle:false,
    title:"Letters From Home — Diaspora Journal", subtitle:"For the distance between where you live and where home still lives in you.", type:"Guided diaspora journal", badge:"Diaspora",
    description:"A journal for people living away from home: what is missed, what is carried, what changes, and what should be passed forward.",
    included:["What I miss","Words from home","People and places","Food and objects","What I want my children to know","Return pages"],
    idealFor:"Romanian and Eastern European diaspora, mixed families and second-generation readers.", formats:"PDF · A4 · A5 · tablet-friendly",
    price:{"ro":79,"eu":24,"us":29}, tags:["diaspora","letters","family-memory","gift"]
  },
  {
    slug:"grandmothers-kitchen",
    room:"cuhnia" as RoomKey,
    collection:"healing" as CollectionKey,
    featured:true, bestseller:true, isNew:true, bundle:false,
    title:"Grandmother’s Kitchen Archive", subtitle:"Recipes, phrases, gestures and the table around them.", type:"Guided family archive", badge:"Kitchen archive",
    description:"More than recipes: a guided archive for the way a grandmother cooked, spoke, measured, hosted and remembered.",
    included:["Recipes","Measurements by eye","Kitchen phrases","Utensils","Holiday tables","People at the table","Photo pages"],
    idealFor:"Family gifts, heritage preservation and diaspora households.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":99,"eu":29,"us":36}, tags:["recipes","grandparents","family-memory","gift"]
  },
  {
    slug:"words-we-dont-want-to-lose",
    room:"cuhnia" as RoomKey,
    collection:"healing" as CollectionKey,
    featured:false, bestseller:true, isNew:true, bundle:false,
    title:"Words We Don’t Want to Lose", subtitle:"A keepsake for family phrases, dialect and words that belong to home.", type:"Language keepsake", badge:"Family language",
    description:"A guided keepsake for regionalisms, family expressions, nicknames, sayings and translations for the next generation.",
    included:["Family phrases","Regional words","Nicknames","Sayings","Who used it","Meaning and translation","Memory pages"],
    idealFor:"Diaspora families, multilingual homes and language lovers.", formats:"PDF · A4 · A5",
    price:{"ro":69,"eu":21,"us":26}, tags:["family-memory","diaspora","gift"]
  },
  {
    slug:"christmas-at-home-archive",
    room:"cuhnia" as RoomKey,
    collection:"healing" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"Christmas at Home Archive", subtitle:"Keep the traditions your family repeats every winter.", type:"Seasonal family archive", badge:"Seasonal · Christmas",
    description:"A guided Christmas archive for recipes, ornaments, traditions, photographs, people, places and the small rituals that make the season belong to your family.",
    included:["Family traditions","Christmas recipes","Ornaments and objects","Photo pages","People at the table","Stories from past Christmases","What we want to keep"],
    idealFor:"Families, diaspora households and meaningful seasonal gifts.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":69,"eu":21,"us":26}, tags:["seasonal","christmas","family-memory","gift"]
  },
  {
    slug:"easter-at-home-archive",
    room:"cuhnia" as RoomKey,
    collection:"healing" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"Easter at Home Archive", subtitle:"Keep the rituals, table and stories that return each spring.", type:"Seasonal family archive", badge:"Seasonal · Easter",
    description:"A guided Easter archive for food, customs, family photographs, objects, places and the rituals repeated across generations.",
    included:["Easter table","Recipes","Family customs","Objects and symbols","Photo pages","People and places","What changed and what remained"],
    idealFor:"Families, heritage lovers and diaspora households.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":69,"eu":21,"us":26}, tags:["seasonal","easter","family-memory","gift"]
  },
  {
    slug:"nocturne-ritual-journal",
    room:"iatacul" as RoomKey,
    collection:"mystical" as CollectionKey,
    featured:true, bestseller:true, isNew:false, bundle:false,
    title:"Nocturne Ritual Journal", subtitle:"An archive for symbols, dreams and midnight thoughts.", type:"Digital + printable journal", badge:"Dark / Mystical",
    description:"An atmospheric journal for dream notes, symbolic reflection, seasonal rituals and personal mythology.",
    included:["Dream log","Symbol index","Ritual notes","Seasonal reflection pages","Printable and tablet PDF"],
    idealFor:"Writers, dreamers, fantasy lovers and collectors of beautiful dark stationery.", formats:"PDF · A4 · A5 · tablet-friendly",
    price:{"ro":79,"eu":22,"us":27}, tags:["journal","dream","symbol"]
  },
  {
    slug:"dream-symbol-journal",
    room:"iatacul" as RoomKey,
    collection:"mystical" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Dream & Symbol Journal", subtitle:"Follow the images that keep returning.", type:"Guided journal", badge:"Iatacul",
    description:"A structured journal for dreams, recurring motifs, personal symbols, moods, seasons and interpretation notes.",
    included:["Dream capture","Recurring motifs","Personal symbol index","Mood and season","Interpretation notes"],
    idealFor:"Dream journalers, writers and symbolic thinkers.", formats:"PDF · A4 · A5",
    price:{"ro":69,"eu":19,"us":24}, tags:["journal","dream","symbol"]
  },
  {
    slug:"midnight-reflection-cards",
    room:"iatacul" as RoomKey,
    collection:"mystical" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Midnight Reflection Cards", subtitle:"Questions for the hours when the house goes quiet.", type:"Printable card set", badge:"Iatacul",
    description:"A dark, elegant prompt deck for late-night reflection, intuition, boundaries and difficult feelings.",
    included:["Reflection prompts","Boundary prompts","Intuition cards","Quiet-decision cards","Print-ready sheets"],
    idealFor:"Night journaling and small reflective rituals.", formats:"PDF · card sheets",
    price:{"ro":39,"eu":12,"us":15}, tags:["cards","reflection"]
  },
  {
    slug:"dark-folk-wallpaper-set",
    room:"iatacul" as RoomKey,
    collection:"mystical" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Dark Folk Wallpaper Set", subtitle:"Folk geometry after dusk.", type:"40 digital wallpapers", badge:"Iatacul",
    description:"A light/dusk and dark wallpaper collection using restrained folk geometry and nocturne atmosphere.",
    included:["20 light/dusk wallpapers","20 dark wallpapers","Phone sizes","Tablet sizes","Desktop sizes"],
    idealFor:"Anyone who wants a dark La Vatra atmosphere on everyday screens.", formats:"PNG · phone + tablet + desktop",
    price:{"ro":49,"eu":15,"us":18}, tags:["wallpaper","dark"]
  },
  {
    slug:"heirloom-letters",
    room:"iatacul" as RoomKey,
    collection:"mystical" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"Heirloom Letters", subtitle:"Open-when letters for people you love now and later.", type:"Premium letter set", badge:"New · Letters",
    description:"A guided set of letters for children, partners, parents and future generations — written now, opened at meaningful moments later.",
    included:["Open-when prompts","Letters for milestones","Family letters","Future-self letters","Dedication pages","Gift-ready cover"],
    idealFor:"Families, parents, partners and anyone creating a meaningful future gift.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":89,"eu":26,"us":32}, tags:["letters","gift","family-memory"]
  },
  {
    slug:"the-family-archive",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:true, bestseller:true, isNew:false, bundle:false,
    title:"The Family Archive", subtitle:"Keep the people, places and things that made a family.", type:"Large guided archive", badge:"Premium · Heirloom",
    description:"A comprehensive guided family archive for preserving people, places, phrases, recipes, photographs, objects, teachings, songs and homes.",
    included:["Our people","Our places","Words only we say","Recipes","Photographs","Grandparents’ teachings","Objects we kept","Songs","The house we came from","What the next generation should know"],
    idealFor:"Families, diaspora households and meaningful gifts.", formats:"PDF · A4 · A5 · US Letter · tablet-friendly",
    price:{"ro":169,"eu":44,"us":54}, tags:["family-memory","grandparents","gift"]
  },
  {
    slug:"house-we-came-from",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:true, bestseller:true, isNew:true, bundle:false,
    title:"The House We Came From", subtitle:"Archive the rooms before memory rearranges them.", type:"Guided home archive", badge:"Heirloom",
    description:"A guided album-journal for preserving a family house: rooms, objects, smells, yard, neighbours, photographs and what changed.",
    included:["Room-by-room memory","Objects","Smells and sounds","The yard","Neighbours","Photo pages","What changed","What remains"],
    idealFor:"Families, diaspora buyers and gifts for parents or grandparents.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":119,"eu":34,"us":42}, tags:["family-memory","home","diaspora","gift"]
  },
  {
    slug:"roots-and-routes",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:true, bestseller:true, isNew:true, bundle:false,
    title:"Roots & Routes — Family Migration Archive", subtitle:"Map how your family moved through villages, cities and countries.", type:"Guided migration archive", badge:"Family history",
    description:"A visual family migration journal combining routes, places, dates, reasons for moving and the stories carried between them.",
    included:["Family route maps","Origin places","Moves and migrations","Reasons and circumstances","Languages","Documents","Stories carried forward"],
    idealFor:"Diaspora families, genealogy beginners and mixed-nationality households.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":129,"eu":36,"us":45}, tags:["family-memory","diaspora","migration","gift"]
  },
  {
    slug:"ask-your-grandparents",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"Ask Your Grandparents — Interview Kit", subtitle:"150 questions worth asking while they can still answer them.", type:"Guided interview kit", badge:"New · Grandparents",
    description:"A structured interview kit designed to help families record childhood, work, love, hardship, traditions, places, people and the details that rarely enter official family history.",
    included:["150 interview questions","Photo prompts","Timeline pages","Follow-up questions","Recording notes","Conversation tips"],
    idealFor:"Grandchildren, parents, diaspora families and anyone beginning a family archive.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":59,"eu":18,"us":22}, tags:["family-memory","grandparents","gift"]
  },
  {
    slug:"family-voice-archive",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"The Family Voice Archive", subtitle:"Keep the voice as well as the story.", type:"Audio preservation guide", badge:"New · Voices",
    description:"A practical guide for recording family voices, interviewing relatives, naming files, indexing recordings and preserving the context around each conversation.",
    included:["Recording guide","Interview plans","File naming system","Audio index","Consent notes","Story prompts","Archive checklist"],
    idealFor:"Families who want to preserve voices, accents, laughter and stories — not just written facts.", formats:"PDF guide + printable index sheets",
    price:{"ro":99,"eu":29,"us":36}, tags:["family-memory","voices","grandparents"]
  },
  {
    slug:"objects-we-kept",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"Objects We Kept", subtitle:"The object is rarely the valuable part. The story is.", type:"Photographic heirloom catalogue", badge:"New · Objects",
    description:"A guided photographic catalogue for inherited objects: what they are, who owned them, where they came from and why nobody wanted to throw them away.",
    included:["Object photo pages","Ownership history","Material and maker notes","Story prompts","Condition notes","Who should inherit it"],
    idealFor:"Families, collectors and anyone with drawers or cupboards full of unexplained heirlooms.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":79,"eu":24,"us":29}, tags:["family-memory","objects","gift"]
  },
  {
    slug:"who-is-in-this-photograph",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"Who Is In This Photograph?", subtitle:"Name them now.", type:"Old-photo identification kit", badge:"New · Photographs",
    description:"A practical kit for identifying old family photographs before names, dates and relationships disappear from living memory.",
    included:["Who is pictured","Where and when","Relationship map","What we know","Who can confirm","Back-of-photo notes","Digitisation checklist"],
    idealFor:"Families sorting inherited photo boxes, albums and digital scans.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":59,"eu":18,"us":22}, tags:["family-memory","photographs","grandparents"]
  },
  {
    slug:"before-you-were-born",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"Before You Were Born, This Was Home", subtitle:"A family place-book for children and grandchildren.", type:"Heritage book for the next generation", badge:"New · Legacy",
    description:"A guided book for explaining the home, neighbourhood, village or country that shaped a family before younger generations were born.",
    included:["Where we lived","What the house looked like","Daily life","Family places","Photographs","Maps","Words and customs","What changed"],
    idealFor:"Parents, grandparents and diaspora families passing place-memory to children.", formats:"PDF · A4 · US Letter · tablet-friendly",
    price:{"ro":129,"eu":36,"us":45}, tags:["family-memory","children","diaspora","gift"]
  },
  {
    slug:"365-questions-family",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"365 Questions for Our Family", subtitle:"One question a day. One year of things worth knowing.", type:"Year-long family prompt book", badge:"New · Family prompts",
    description:"A year of questions that move from easy memories to family traditions, values, turning points, places, relationships and the small details people rarely think to record.",
    included:["365 questions","Monthly themes","Family conversation pages","Favourite answers","Photo prompts","Year-end reflection"],
    idealFor:"Families, couples, parents, grandparents and group gifting.", formats:"PDF · A4 · A5 · tablet-friendly",
    price:{"ro":99,"eu":29,"us":36}, tags:["family-memory","gift","questions"]
  },
  {
    slug:"wedding-family-archive",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"The Wedding Family Archive", subtitle:"Two people. Two family histories arriving in the same room.", type:"Wedding heritage archive", badge:"New · Wedding",
    description:"A wedding archive focused not on planning the event, but on the two family histories meeting through photographs, traditions, recipes, names, stories and inherited objects.",
    included:["Both family stories","Family trees","Wedding traditions","Recipes","Objects and heirlooms","Photo pages","Letters from family","What we carry forward"],
    idealFor:"Couples, parents and wedding gift-givers who want something more lasting than a planner.", formats:"PDF · A4 · US Letter · tablet-friendly",
    price:{"ro":149,"eu":44,"us":54}, tags:["family-memory","wedding","gift"]
  },
  {
    slug:"heirloom-library-bundle",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:true, bestseller:false, isNew:false, bundle:true,
    title:"La Vatra Heirloom Library Bundle", subtitle:"The La Vatra library for planning, memory and home.", type:"Premium digital bundle", badge:"Flagship bundle",
    description:"A premium library combining signature planning, family memory, seasonal culture and selected journals and visual sets.",
    included:["Gentle Discipline Planner","The Family Archive","Year at the Hearth","Selected journals","Wall art bonus","Wallpaper bonus"],
    idealFor:"Buyers who want a broad La Vatra library in one purchase.", formats:"Multi-file digital bundle",
    price:{"ro":299,"eu":79,"us":89}, tags:["bundle","family-memory","planner","gift"]
  },
  {
    slug:"ancestral-home-bundle",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:true, bestseller:false, isNew:false, bundle:true,
    title:"The Ancestral Home Bundle", subtitle:"Four archives for preserving where a family came from.", type:"Premium heritage bundle", badge:"Flagship bundle",
    description:"A premium family-history bundle combining The Family Archive, The House We Came From, Grandmother’s Kitchen Archive and Roots & Routes.",
    included:["The Family Archive","The House We Came From","Grandmother’s Kitchen Archive","Roots & Routes","Bonus family phrase pages","Gift-ready cover set"],
    idealFor:"Diaspora families, milestone gifts, parents, grandparents and anyone preserving a family story.", formats:"Multi-file digital bundle",
    price:{"ro":329,"eu":89,"us":99}, tags:["bundle","family-memory","diaspora","gift"]
  },
  {
    slug:"complete-family-memory-library",
    room:"casa-mare" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:true, bestseller:true, isNew:true, bundle:true,
    title:"The Complete Family Memory Library", subtitle:"The complete system for preserving a family before details disappear.", type:"Mega family preservation library", badge:"New · Ultimate bundle",
    description:"The largest La Vatra family-memory collection: archives for people, houses, migration, voices, photographs, objects, grandparents, recipes and the next generation.",
    included:["The Family Archive","The House We Came From","Roots & Routes","Ask Your Grandparents","The Family Voice Archive","Objects We Kept","Who Is In This Photograph?","Grandmother’s Kitchen Archive","Bonus interview and gift pages"],
    idealFor:"Families who want one complete preservation system rather than buying archive pieces separately.", formats:"Multi-file digital library",
    price:{"ro":449,"eu":119,"us":129}, tags:["bundle","family-memory","grandparents","gift"]
  },
  {
    slug:"fireside-heritage-calendar",
    room:"sura" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:true, bestseller:true, isNew:false, bundle:false,
    title:"Fireside Heritage Calendar 2027", subtitle:"Twelve months of landscape, symbol and old-world warmth.", type:"Printable calendar", badge:"European Culture",
    description:"A story-led calendar inspired by Romanian seasonal rhythms, embroidery geometry, carved wood, old houses and Black Sea air.",
    included:["12 illustrated month pages","Monthly rule","Seasonal notes","Decorative cover","Multiple print sizes"],
    idealFor:"Homes, studios and heritage lovers.", formats:"PDF · A4 · A3",
    price:{"ro":59,"eu":18,"us":22}, tags:["calendar","seasonal","heritage"]
  },
  {
    slug:"year-at-the-hearth",
    room:"sura" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:true, bestseller:false, isNew:false, bundle:false,
    title:"Year at the Hearth 2027", subtitle:"A whole year gathered around the hearth.", type:"Calendar + seasonal journal", badge:"Premium annual",
    description:"A richer annual object combining calendar, monthly rules, seasonal reflections, rituals and end-of-year gathering pages.",
    included:["12-month calendar","Monthly rules","Seasonal pages","Reflection pages","Ritual pages","End-of-year gathering"],
    idealFor:"Buyers who want a keepsake year rather than a simple calendar.", formats:"PDF · multiple sizes",
    price:{"ro":119,"eu":34,"us":42}, tags:["calendar","seasonal","heritage"]
  },
  {
    slug:"eastern-europe-travel-journal",
    room:"sura" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Eastern Europe Travel Journal", subtitle:"Travel by place, texture, language and memory.", type:"Guided travel journal", badge:"European Culture",
    description:"A travel journal for cities, villages, food, architecture, local words, objects, stories, routes and memory.",
    included:["Place pages","Food notes","Architecture","Local words","Objects and stories","Routes","Memory pages"],
    idealFor:"Travellers who want more than checklist tourism.", formats:"PDF · A4 · A5",
    price:{"ro":79,"eu":23,"us":29}, tags:["places","travel","heritage"]
  },
  {
    slug:"romanian-hearth-wall-art",
    room:"sura" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Romanian Hearth Wall Art Set", subtitle:"A small wall of symbols, rhythm and home.", type:"6–8 printable artworks", badge:"Romanian Hearth Editions",
    description:"A coordinated wall-art set using embroidery rhythm, carved geometry, old paper and hearth symbolism.",
    included:["6–8 coordinated artworks","Multiple print ratios","High-resolution files","Light and dark variants"],
    idealFor:"Home offices, reading corners and thoughtful gifts.", formats:"PNG + PDF · multiple ratios",
    price:{"ro":59,"eu":18,"us":23}, tags:["wall-art","heritage","gift"]
  },
  {
    slug:"old-europe-wallpaper-set",
    room:"sura" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Old Europe Wallpaper Set", subtitle:"Quiet architecture, old paper and a little weather in the walls.", type:"40 digital wallpapers", badge:"European Culture",
    description:"A device wallpaper collection drawing from regional architecture, faded ink, botanical details and inherited places.",
    included:["Phone wallpapers","Desktop wallpapers","Light + dark variants","High-resolution files"],
    idealFor:"Anyone who wants everyday screens to feel less generic and more personal.", formats:"PNG · phone + desktop",
    price:{"ro":39,"eu":12,"us":15}, tags:["wallpaper","heritage"]
  },
  {
    slug:"dobrogea-black-sea-wallpapers",
    room:"sura" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:false, bundle:false,
    title:"Dobrogea / Black Sea Wallpaper Set", subtitle:"Wind, horizon, stone and the particular light of the Black Sea.", type:"40 digital wallpapers", badge:"Dobrogea edition",
    description:"A wallpaper set built from Black Sea horizon, Dobrogea light, stone, sand, faded blue and restrained regional motifs.",
    included:["Phone wallpapers","Tablet wallpapers","Desktop wallpapers","Light + dark variants"],
    idealFor:"People who carry the Black Sea with them.", formats:"PNG · phone + tablet + desktop",
    price:{"ro":39,"eu":12,"us":15}, tags:["wallpaper","places","heritage"]
  },
  {
    slug:"my-village-city-memory-atlas",
    room:"sura" as RoomKey,
    collection:"culture" as CollectionKey,
    featured:false, bestseller:false, isNew:true, bundle:false,
    title:"My Village / My City Memory Atlas", subtitle:"Map the places that disappeared before the memory does.", type:"Personal place-memory atlas", badge:"New · Places",
    description:"A guided atlas for streets, shops, neighbours, schools, routes, landmarks and ordinary places that shaped a life but may no longer exist in the same form.",
    included:["Street maps","Favourite places","Shops and buildings","Neighbours","School routes","Then and now","Photo pages","What disappeared"],
    idealFor:"Families, local-history lovers and diaspora buyers preserving a hometown.", formats:"PDF · A4 · A5 · US Letter",
    price:{"ro":99,"eu":29,"us":36}, tags:["places","heritage","diaspora","family-memory"]
  }
];

export const legacyCollectionToRoom:Record<string,RoomKey>={
 'emotional-healing':'cuhnia','dark-mystical-fantasy':'iatacul','productivity-clean':'camara','european-culture':'sura'
};

export function getRoom(slug:string){return rooms.find(room=>room.slug===slug);}
export function getProduct(slug:string){return products.find(product=>product.slug===slug);}
export function productsForRoom(room:RoomKey){return products.filter(product=>product.room===room);}
