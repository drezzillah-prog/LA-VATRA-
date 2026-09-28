import ProductCard from '@/components/ProductCard';
import {products} from '@/data/catalog';
import {getRequestContext} from '@/lib/localization';

const copy={
 ro:{
  eyebrow:'Cadouri',
  headline:'Cele mai frumoase daruri sunt cele care păstrează ceva din noi.',
  intro:'Pentru povești, glasuri, rețete și locuri care merită păstrate aproape.',
  groups:[
   ['Pentru mamă','Poveștile pe care le spune de parcă le-ai fi știut dintotdeauna.'],
   ['Pentru tată','Locurile prin care a trecut, obiectele pe care le-a păstrat și fotografiile în care încă locuiește câte o poveste.'],
   ['Pentru bunici','Întrebările pe care, într-o zi, ne-am dori să le fi pus mai devreme.'],
   ['Pentru cineva plecat departe','Un colț de acasă pentru lucrurile care au călătorit cu el, chiar și nevăzute.'],
   ['Pentru o nuntă','Două familii, două șiruri de povești și o casă nouă în care încep să se întâlnească.'],
   ['Pentru Crăciun','Un dar pe care familia îl va mai deschide, filă cu filă, și la Crăciunul viitor.'],
   ['Pentru o casă nouă','O casă nouă cu loc pentru amintirile celor care au fost acasă înaintea ei.']
  ],
  objects:'Daruri care rămân',
  objectsSub:'Alese nu ca să ocupe un raft, ci ca să păstreze ceva.',
  cta:'Vezi darul'
 },
 en:{
  eyebrow:'Gifts',
  headline:'The loveliest gifts are the ones that keep a piece of us.',
  intro:'For the stories, voices, recipes, and places worth keeping close.',
  groups:[
   ['For Mum','The stories she tells as if you had always known them.'],
   ['For Dad','The places he passed through, the objects he kept, and the photographs that still hold a story.'],
   ['For Grandparents','The questions we may one day wish we had asked sooner.'],
   ['For Someone Abroad','A small piece of home for the things that travelled with them, even when unseen.'],
   ['For a Wedding','Two families, two lines of stories, and a new home where they begin to meet.'],
   ['For Christmas','A gift the family can keep opening, page by page, even next Christmas.'],
   ['For a New Home','A new house with room for the memories of the homes that came before it.']
  ],
  objects:'Gifts that stay',
  objectsSub:'Chosen not to fill a shelf, but to keep something worth remembering.',
  cta:'See the gift'
 }
} as const;

export const metadata={title:'Gifts'};

export default async function Gifts(){
 const {region,language}=await getRequestContext();
 const c=copy[language];
 const giftProducts=products.filter(p=>p.tags.includes('gift')).slice(0,12);
 return <>
  <section className="special-hero gifts-hero"><div className="shell">
   <p className="eyebrow">{c.eyebrow}</p>
   <h1>{c.headline}</h1>
   <p>{c.intro}</p>
  </div></section>
  <section className="section"><div className="shell gift-reasons">
   {c.groups.map(([a,b])=><article key={a}><h2>{a}</h2><p>{b}</p></article>)}
  </div></section>
  <section className="section"><div className="shell">
   <div className="section-heading"><p className="eyebrow">{c.eyebrow}</p><h2>{c.objects}</h2><p>{c.objectsSub}</p></div>
   <div className="product-grid">{giftProducts.map(p=><ProductCard key={p.slug} product={p} region={region}/>)}</div>
  </div></section>
 </>;
}
