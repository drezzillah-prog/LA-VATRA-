import Link from 'next/link';
import CollectionCard from '@/components/CollectionCard';
import Newsletter from '@/components/Newsletter';
import Ornament from '@/components/Ornament';
import ProductCard from '@/components/ProductCard';
import VisualPanel from '@/components/VisualPanel';
import { collections, products } from '@/data/catalog';

export default function Home() {
  const featured = products.filter((product) => product.featured).slice(0, 4);
  return (
    <>
      <section className="hero">
        <div className="hero-texture" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Born from the idea of the hearth</p>
            <h1>Things to keep<br /><em>close to the fire.</em></h1>
            <p className="hero-lead">La Vatra creates digital and printable objects for inner life, everyday ritual and cultural memory — made with the warmth of home and the clarity of modern design.</p>
            <div className="button-row"><Link className="button button--dark" href="/shop">Explore the collections</Link><Link className="button button--ghost" href="/about">Read our story</Link></div>
          </div>
          <div className="hero-object" aria-hidden="true">
            <div className="arch arch-back" />
            <div className="arch arch-main"><span>LA VATRA</span><b>✦</b><small>MEMORY · RITUAL · BELONGING</small></div>
            <div className="embroidered-line" />
          </div>
        </div>
        <div className="hero-note shell"><span>VATRA /ˈva.trə/</span><p>hearth · home-fire · the place a household gathers around</p></div>
      </section>

      <section className="section philosophy">
        <div className="shell narrow center">
          <p className="eyebrow">A living brand, not a costume</p>
          <h2>Heritage can be quiet, useful and alive.</h2>
          <p className="large-copy">We are interested in the feeling behind inherited things: the carved edge of a wooden gate, embroidery repeated by hand, paper kept in a drawer, a Black Sea horizon, the hush inside an old church, the practical tenderness of a well-used notebook.</p>
          <Ornament />
        </div>
      </section>

      <section className="section collection-section">
        <div className="shell">
          <div className="section-heading split"><div><p className="eyebrow">Four worlds, one hearth</p><h2>Choose the room you need.</h2></div><p>Different moods. One visual language: thoughtful, tactile, culturally grounded and made to be lived with.</p></div>
          <div className="collection-grid">{collections.map((collection) => <CollectionCard key={collection.slug} collection={collection} />)}</div>
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
            <p className="eyebrow">Signature product</p>
            <h2>Gentle Discipline Planner</h2>
            <p className="large-copy">A planner built around one simple belief: structure should help you return to your life, not make you feel punished for living it.</p>
            <ul className="tick-list"><li>Calm weekly structure</li><li>Energy-aware planning</li><li>Reflection without guilt</li><li>Printable + tablet-friendly formats</li></ul>
            <Link className="text-link" href="/product/gentle-discipline-planner">Discover the planner <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section featured-products">
        <div className="shell"><div className="section-heading split"><div><p className="eyebrow">Made to be kept</p><h2>Featured from the Vatra.</h2></div><Link className="text-link" href="/shop">View all products <span>→</span></Link></div><div className="product-grid">{featured.map((product) => <ProductCard key={product.slug} product={product} />)}</div></div>
      </section>

      <section className="meaning-section">
        <div className="shell meaning-grid">
          <div className="meaning-word"><span>LA</span><strong>VATRĂ</strong><small>noun · Romanian</small></div>
          <div className="meaning-copy"><p className="eyebrow">The name</p><h2>More than a fireplace.</h2><p>In Romanian, <em>vatră</em> is the hearth — but the word carries more than flame. It suggests the center of a home, the place of return, continuity, food, story and belonging.</p><p>La Vatra takes that feeling into a modern brand world. Not nostalgia for a frozen past, but a living relationship with what shapes us.</p><Link className="text-link" href="/about">Why we chose the name <span>→</span></Link></div>
        </div>
      </section>

      <section className="section story-section">
        <div className="shell"><div className="section-heading center narrow"><p className="eyebrow">Memory / Craft / Belonging</p><h2>A visual language built from traces.</h2></div><div className="story-panels"><VisualPanel label="01 · MEMORY" title="Paper, handwriting, inherited objects" variant="paper" /><VisualPanel label="02 · CRAFT" title="Embroidery, carving, repetition by hand" variant="wood" /><VisualPanel label="03 · BELONGING" title="House, landscape, ritual, return" variant="sea" /></div></div>
      </section>

      <section className="section difference-section">
        <div className="shell"><div className="section-heading split"><div><p className="eyebrow">Why La Vatra is different</p><h2>Culture without cliché. Beauty without emptiness.</h2></div><p>Every collection is designed to carry emotional or practical meaning — not just an aesthetic.</p></div><div className="difference-grid"><article><span>01</span><h3>Rooted, not touristy</h3><p>Regional references appear through material, rhythm, symbol and atmosphere — never as costume.</p></article><article><span>02</span><h3>Poetry with a purpose</h3><p>A beautiful page still has a job to do: guide, soothe, organize, remember or inspire.</p></article><article><span>03</span><h3>Old-world warmth, modern use</h3><p>Print-ready, digital-first and designed for contemporary homes, tablets, desks and routines.</p></article><article><span>04</span><h3>A world that can grow</h3><p>Digital today; physical paper goods, objects and crafted editions can join the hearth tomorrow.</p></article></div></div>
      </section>

      <section className="testimonial-section"><div className="shell narrow center"><p className="eyebrow">From the circle</p><blockquote>“The kind of object you keep because it feels personal before you have even written in it.”</blockquote><p className="testimonial-note">Community stories will live here as La Vatra grows.</p></div></section>
      <Newsletter />
    </>
  );
}
