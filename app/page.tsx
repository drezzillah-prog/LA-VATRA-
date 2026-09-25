import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import {products,rooms} from '@/data/catalog';
import {getRequestContext} from '@/lib/localization';

const intents=[
 ['My grandmother’s recipes','grandmothers-kitchen'],['The house I grew up in','house-we-came-from'],['The words only our family uses','words-we-dont-want-to-lose'],['The people in our old photographs','who-is-in-this-photograph'],['My grandparents’ stories','ask-your-grandparents'],['Their voices','family-voice-archive'],['How our family moved','roots-and-routes'],['What home means when I live far away','letters-from-home'],['The things we inherited','objects-we-kept'],['A calmer way to plan my life','gentle-discipline-planner']
];

export default async function Home(){
 const {region}=await getRequestContext();
 const featured=products.filter(p=>p.bestseller).slice(0,6);
 return <>
  <section className="lv-hero"><div className="lv-hero-shade"/><div className="shell lv-hero-copy"><p className="eyebrow">LA VATRA · FAMILY MEMORY · HOME · RITUAL</p><h1>Some things are too important to leave only in someone’s memory.</h1><p>La Vatra creates journals, archives and objects for the recipes, homes, words, photographs and family stories we mean to preserve — but rarely know where to begin.</p><div className="button-row"><Link className="button button--light" href="/family-archive">Start your family archive</Link><Link className="button button--outline-light" href="/house">Enter Casa Vetrei</Link></div><small>Made for memory. Designed to be used.</small></div></section>

  <section className="section room-entry-section"><div className="shell"><div className="section-heading split"><div><p className="eyebrow">Casa Vetrei</p><h2>Five rooms. Five ways to begin.</h2></div><p>The house is the navigation. Choose the room that feels closest to what you want to keep.</p></div><div className="five-room-grid">{rooms.map(r=><Link href={'/rooms/'+r.slug} key={r.key} className={'room-photo-card room-photo-card--'+r.key} style={{backgroundImage:`url("${r.photo}")`}}><span/><div><small>{r.modern}</small><h3>{r.title}</h3><p>{r.kicker}</p><b>Enter →</b></div></Link>)}</div></div></section>

  <section className="section intent-section"><div className="shell"><div className="section-heading center narrow"><p className="eyebrow">Start with the thing that matters</p><h2>What do you want to keep?</h2><p>Start with the thing you would be saddest to forget.</p></div><div className="intent-grid">{intents.map(([label,slug])=><Link key={slug} href={'/product/'+slug} className="intent-card"><span>✦</span><strong>{label}</strong><b>Find the object →</b></Link>)}</div></div></section>

  <section className="section flagship-split"><div className="shell flagship-grid"><div className="flagship-panel flagship-planner"><p className="eyebrow">Signature object</p><h2>Gentle Discipline Planner 2027</h2><p>Structure should help you return to your life, not punish you for living it.</p><Link className="text-link" href="/product/gentle-discipline-planner">Explore the planner <span>→</span></Link></div><div className="flagship-panel flagship-family"><p className="eyebrow">The heart of Casa Mare</p><h2>The Family Archive</h2><p>The people you love already carry an archive. Most of it has never been written down.</p><Link className="text-link" href="/product/the-family-archive">Begin the archive <span>→</span></Link></div></div></section>

  <section className="section featured-products"><div className="shell"><div className="section-heading split"><div><p className="eyebrow">Bestsellers & signatures</p><h2>Objects worth beginning with.</h2></div><Link className="text-link" href="/shop">See the full shop <span>→</span></Link></div><div className="product-grid">{featured.map(p=><ProductCard key={p.slug} product={p} region={region}/>)}</div></div></section>

  <section className="gift-home"><div className="shell gift-home-grid"><div><p className="eyebrow">Gift finder</p><h2>Give them something nobody else could have filled in for them.</h2><p>For Mum · For Dad · For Grandparents · For Someone Abroad · For a Wedding · For Christmas · For a New Home</p><Link className="button button--dark" href="/gifts">Find a meaningful gift</Link></div><div className="gift-quote">“The stories she thinks everybody already knows.”</div></div></section>

  <section className="section bundle-home"><div className="shell"><div className="section-heading split"><div><p className="eyebrow">The libraries</p><h2>When one object is not enough.</h2></div><Link className="text-link" href="/bundles">See all bundles <span>→</span></Link></div><div className="bundle-cards">{products.filter(p=>p.bundle).map(p=><ProductCard key={p.slug} product={p} region={region}/>)}</div></div></section>

  <section className="one-page-section"><div className="shell one-page-grid"><div><p className="eyebrow">Try one page</p><h2>Keep one memory today.</h2><p>Start with one prompt from The Family Archive: <strong>A story I don’t want us to forget.</strong></p></div><div className="sample-page"><span>LA VATRA · SAMPLE PAGE</span><h3>A story I don’t want us to forget</h3><p>Who told it? Where did it happen? What detail would be easiest to lose?</p><a href="#newsletter" className="button button--dark">Send me the page</a></div></div></section>
  <Newsletter/>
 </>;
}
