import Link from 'next/link';
import {notFound} from 'next/navigation';
import Newsletter from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import {getProduct,products,rooms} from '@/data/catalog';
import {getRequestContext,formatPrice} from '@/lib/localization';

export function generateStaticParams(){return products.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=getProduct(slug);return {title:p?.title||'Product'};}

const gentleGallery=[
 {src:'/products/gentle-discipline/01-approved-cover.webp',ro:'Copertă aprobată',en:'Approved cover'},
 {src:'/products/gentle-discipline/02-approved-interior.webp',ro:'Interior aprobat',en:'Approved interior'},
 {src:'/products/gentle-discipline/03-approved-styles.jpg',ro:'Alte stiluri aprobate',en:'More approved styles'}
];

const gentleIncludedRo=[
 'Vedere anuală 2027','Date importante','Lucruri de făcut anul acesta','Obiective personale',
 'Obiective profesionale / studiu','Planul lunii','Calendar lunar','Plan săptămânal',
 'Prioritățile săptămânii','Listă generală de făcut','Urmărirea obiceiurilor',
 'Buget lunar','Brain dump','Revizuire trimestrială','Retrospectiva anului'
];

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const product=getProduct(slug); if(!product)notFound();
 const {region,language}=await getRequestContext();
 const ro=language==='ro';
 const room=rooms.find(r=>r.key===product.room)!;
 const related=products.filter(p=>p.room===product.room&&p.slug!==product.slug).slice(0,3);
 const gentle=product.slug==='gentle-discipline-planner';
 const displayTitle=gentle&&ro?'Planificator Gentle Discipline 2027':product.title;
 const displaySubtitle=gentle&&ro?'Structură fără severitate, pentru anul 2027.':product.subtitle;
 const displayDescription=gentle&&ro
  ?'Un sistem de planificare pentru un an mai așezat: suficientă structură ca să știi încotro mergi, fără să transformi fiecare zi într-o probă de productivitate.'
  :product.description;
 const included=gentle&&ro?gentleIncludedRo:product.included;
 const ui=ro?{
  price:'PREȚUL TĂU',format:'Format',buy:'Adaugă la vatră',soon:'Plata va fi conectată în etapa următoare',
  micro:'Produs digital · Prețul este stabilit automat pentru regiunea ta.',
  inside:'În această ediție',receive:'Ce primești.',made:'Pentru cine',room:'Odaie',
  know:'Bine de știut',knowText:'Conceput pentru uz personal. Formatele de print și compatibilitatea digitală sunt indicate mai sus.',
  complete:'Completează odaia',more:'Mai sunt lucruri de păstrat aici.',
  styles:'Stiluri de copertă și pagini disponibile',
  styleText:'Aceste imagini prezintă direcțiile vizuale aprobate. Calendarul livrat la cumpărare este verificat separat pentru date și text.',
  customTitle:'Îl vrei mai aproape de tine?',
  customText:'Îți place această ediție, dar ai vrea să înlocuiești câteva pagini cu altele? Se poate. Anumite pagini pot fi schimbate la cerere cu pagini din celelalte ediții Gentle Discipline.',
  preview:'LA VATRA · PREVIEW'
 }:{
  price:'YOUR REGIONAL PRICE',format:'Format',buy:'Add to your hearth',soon:'Checkout connection coming next',
  micro:'Digital product · Your regional price is detected automatically.',
  inside:'Inside the edition',receive:'What you receive.',made:'Made for',room:'Room',
  know:'Good to know',knowText:'Designed for personal use. Print sizes and digital compatibility are listed above.',
  complete:'Complete the room',more:'There is still more to keep here.',
  styles:'Available cover & page styles',
  styleText:'These images show approved visual directions. The calendar delivered with purchase is separately verified for dates and text.',
  customTitle:'Want to make it more yours?',
  customText:'Like this edition, but want to replace a few pages? You can. Selected pages can be swapped for pages from the other Gentle Discipline editions on request.',
  preview:'LA VATRA · PREVIEW'
 };

 return <>
  <section className={'product-detail-hero product-detail-hero--'+product.collection}>
   <div className="shell product-detail-grid">
    <div className="gallery">
     {gentle ? <>
      <div className="planner-gallery-heading"><p className="eyebrow">{ui.preview}</p><h2>{ui.styles}</h2></div>
      <div className="planner-preview-main">
       <img src={gentleGallery[0].src} alt={ro?gentleGallery[0].ro:gentleGallery[0].en}/>
       <span>{ui.preview}</span>
      </div>
      <div className="planner-preview-grid">
       {gentleGallery.slice(1).map(item=><figure key={item.src}>
        <div><img src={item.src} alt={ro?item.ro:item.en}/><span>{ui.preview}</span></div>
        <figcaption>{ro?item.ro:item.en}</figcaption>
       </figure>)}
      </div>
      <p className="planner-preview-note">{ui.styleText}</p>
     </> : <>
      <div className="gallery-main"><div className="large-paper-object"><span>LA VATRA</span><h1>{product.title}</h1><p>{product.subtitle}</p><small>{product.type}</small></div></div>
      <div className="preview-strip">{product.included.slice(0,3).map((item,i)=><div key={item}><small>PREVIEW {i+1}</small><b>{item}</b></div>)}</div>
     </>}
    </div>
    <div className="product-info">
     <span className="product-badge">{product.badge}</span>
     <h1>{displayTitle}</h1>
     <p className="product-subtitle">{displaySubtitle}</p><p>{displayDescription}</p>
     <div className="local-price"><small>{ui.price}</small><strong>{formatPrice(product.price,region)}</strong></div>
     <div className="product-spec"><span>{ui.format}</span><strong>{product.formats}</strong></div>
     <button className="button button--dark product-buy">{ui.buy}<small>{ui.soon}</small></button>
     <p className="microcopy">{ui.micro}</p>
    </div>
   </div>
  </section>

  <section className="section">
   <div className="shell product-story-grid">
    <div><p className="eyebrow">{ui.inside}</p><h2>{ui.receive}</h2><ul className="included-list">{included.map(item=><li key={item}>{item}</li>)}</ul></div>
    <div className="ideal-card">
     <p className="eyebrow">{ui.made}</p><p>{gentle&&ro?'Pentru cei care vor să-și organizeze anul fără să-și transforme viața într-o listă nesfârșită de obligații.':product.idealFor}</p>
     <hr/><p className="eyebrow">{ui.room}</p><p><Link href={'/rooms/'+room.slug}>{room.title} · {room.modern}</Link></p>
     <hr/><p className="eyebrow">{ui.know}</p><p>{ui.knowText}</p>
     {gentle&&<><hr/><p className="eyebrow">{ui.customTitle}</p><p>{ui.customText}</p></>}
    </div>
   </div>
  </section>

  <section className="section related-section"><div className="shell">
   <div className="section-heading"><p className="eyebrow">{ui.complete}</p><h2>{ui.more}</h2></div>
   <div className="product-grid related-grid">{related.map(item=><ProductCard key={item.slug} product={item} region={region}/>)}</div>
  </div></section>
  <Newsletter/>
 </>;
}
