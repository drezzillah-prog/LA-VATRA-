import Link from 'next/link';
import { notFound } from 'next/navigation';
import Newsletter from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import { getProduct, products } from '@/data/catalog';

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProduct(slug); return { title: product?.title || 'Product' }; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = getProduct(slug); if (!product) notFound();
  const related = products.filter((item) => item.collection === product.collection && item.slug !== product.slug).slice(0, 2);
  return <>
    <section className={`product-detail-hero product-detail-hero--${product.collection}`}>
      <div className="shell product-detail-grid">
        <div className="gallery"><div className="gallery-main"><div className="large-paper-object"><span>LA VATRA</span><h1>{product.title}</h1><p>{product.subtitle}</p><small>{product.type}</small></div></div><div className="gallery-thumbs"><div>Cover</div><div>Inside</div><div>Detail</div></div></div>
        <div className="product-info">
          <span className="product-badge">{product.badge}</span><h1>{product.title}</h1><p className="product-subtitle">{product.subtitle}</p><p>{product.description}</p>
          <div className="regional-price regional-price--large"><div><small>ROMÂNIA</small><b>{product.price.ro} RON</b></div><div><small>EUROPA</small><b>€{product.price.eu}</b></div><div><small>SUA</small><b>${product.price.us}</b></div></div>
          <div className="product-spec"><span>Format</span><strong>{product.formats}</strong></div>
          <button className="button button--dark product-buy">Add to your hearth <small>Shop connection coming next</small></button>
          <p className="microcopy">Digital product · Regional retail prices shown above · No physical item is shipped unless explicitly stated.</p>
        </div>
      </div>
    </section>
    <section className="section"><div className="shell product-story-grid"><div><p className="eyebrow">Inside the edition</p><h2>What you receive.</h2><ul className="included-list">{product.included.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="ideal-card"><p className="eyebrow">Made for</p><p>{product.idealFor}</p><hr /><p className="eyebrow">Good to know</p><p>Designed for personal use. Files are prepared to stay clear and elegant across supported print sizes and digital devices.</p><Link href="/faq" className="text-link">Read the FAQ <span>→</span></Link></div></div></section>
    {related.length > 0 && <section className="section related-section"><div className="shell"><div className="section-heading"><p className="eyebrow">Same room, different object</p><h2>You may also like.</h2></div><div className="product-grid related-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></div></section>}
    <Newsletter />
  </>;
}