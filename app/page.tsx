import Link from 'next/link';
import HouseRooms from '@/components/HouseRooms';
import NeedFinder from '@/components/NeedFinder';
import Newsletter from '@/components/Newsletter';
import Ornament from '@/components/Ornament';
import ProductCard from '@/components/ProductCard';
import VisualPanel from '@/components/VisualPanel';
import { products } from '@/data/catalog';

export default function Home() {
  const featured = products.filter((product) => product.featured).slice(0, 4);
  return (
    <>
      <section className="hero hero--new">
        <div className="shell hero-grid hero-grid--new">
          <div className="hero-copy">
            <p className="eyebrow">La Vatra · România / Europa de Est</p>
            <h1>O casă pentru<br /><em>lucruri de păstrat.</em></h1>
            <p className="hero-lead">Digital and printable objects shaped by Romanian domestic memory, Eastern European colour, useful ritual and the feeling of things kept close to home.</p>
            <div className="button-row">
              <Link className="button button--dark" href="/house">Intră în Casa Vetrei</Link>
              <Link className="button button--ghost" href="/shop">Vezi toate produsele</Link>
            </div>
          </div>
          <div className="hero-house-mini" aria-hidden="true">
            <div className="painted-gable">
              <span>LA VATRA</span>
              <b>✣</b>
              <i />
              <small>VATRA · CASĂ · MEMORIE</small>
            </div>
          </div>
        </div>
        <div className="hero-folk-band" aria-hidden="true"><i /><b>◆</b><i /><b>✣</b><i /><b>◆</b><i /></div>
      </section>

      <section className="house-entry section">
        <div className="shell">
          <div className="section-heading split">
            <div><p className="eyebrow">Odaile casei</p><h2>Nu alegi un tab. Intri într-o odaie.</h2></div>
            <p>Bucătăria, dormitorul, cămara și hambarul sunt intrările reale în colecțiile La Vatra.</p>
          </div>
          <HouseRooms />
        </div>
      </section>

      <section className="section philosophy philosophy--new">
        <div className="shell narrow center">
          <p className="eyebrow">Alb de var · cobalt · lut ars · vișiniu · nuc</p>
          <h2>Mai puțin „rustic”. Mai mult acasă.</h2>
          <p className="large-copy">The visual language comes from limewashed walls, painted blue details, fired clay, dark carved wood, woven red geometry, old paper and Black Sea weather — not from generic earthy lifestyle colours.</p>
          <Ornament />
        </div>
      </section>

      <section className="need-section">
        <div className="shell">
          <div className="section-heading split">
            <div><p className="eyebrow">Dacă nu știi în ce odaie</p><h2>Spune-ne de ce ai nevoie.</h2></div>
            <p>We will send you toward a room and an object, not toward a generic category filter.</p>
          </div>
          <NeedFinder />
        </div>
      </section>

      <section className="section signature-section">
        <div className="shell signature-grid">
          <div className="signature-visual">
            <div className="planner-stack planner-stack--back" />
            <div className="planner-stack planner-stack--mid" />
            <div className="planner-cover"><span>LA VATRA</span><h3>Gentle<br />Discipline</h3><p>PLANNER</p><div className="cover-symbol">✦</div><small>Structure without severity.</small></div>
          </div>
          <div className="signature-copy">
            <p className="eyebrow">Obiect de semnătură</p>
            <h2>Gentle Discipline Planner</h2>
            <p className="large-copy">A planner built around one simple belief: structure should help you return to your life, not punish you for living it.</p>
            <ul className="tick-list"><li>Calm weekly structure</li><li>Energy-aware planning</li><li>Reflection without guilt</li><li>Printable + tablet-friendly formats</li></ul>
            <Link className="text-link" href="/product/gentle-discipline-planner">Descoperă plannerul <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section featured-products">
        <div className="shell">
          <div className="section-heading split"><div><p className="eyebrow">Pe raft acum</p><h2>Obiecte din casă.</h2></div><Link className="text-link" href="/shop">Vezi toate produsele <span>→</span></Link></div>
          <div className="product-grid">{featured.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </div>
      </section>

      <section className="meaning-section">
        <div className="shell meaning-grid">
          <div className="meaning-word"><span>LA</span><strong>VATRĂ</strong><small>substantiv · română</small></div>
          <div className="meaning-copy"><p className="eyebrow">Numele</p><h2>Mai mult decât foc.</h2><p>Vatra is the hearth, but also the place around which a household gathers: warmth, food, return, work, story and continuity.</p><p>La Vatra uses that domestic idea as the architecture of the brand itself.</p><Link className="text-link" href="/about">Povestea numelui <span>→</span></Link></div>
        </div>
      </section>

      <section className="section story-section">
        <div className="shell">
          <div className="section-heading center narrow"><p className="eyebrow">Memorie / Meșteșug / Loc</p><h2>Urme, nu costume.</h2></div>
          <div className="story-panels"><VisualPanel label="01 · MEMORIE" title="Paper, handwriting, inherited objects" variant="paper" /><VisualPanel label="02 · MEȘTEȘUG" title="Embroidery, carving, repetition by hand" variant="wood" /><VisualPanel label="03 · LOC" title="House, landscape, ritual, return" variant="sea" /></div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
