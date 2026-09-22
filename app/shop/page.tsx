import CollectionCard from '@/components/CollectionCard';
import ProductCard from '@/components/ProductCard';
import NeedFinder from '@/components/NeedFinder';
import Newsletter from '@/components/Newsletter';
import { collections, products } from '@/data/catalog';

export const metadata = { title: 'Shop & collections' };

export default function ShopPage() {
  return <>
    <section className="page-hero page-hero--shop"><div className="shell"><div className="page-hero-split"><div><p className="eyebrow">Shop La Vatra</p><h1>Intră prin odăile casei.</h1></div><p>Bucătăria, dormitorul, cămara și hambarul duc spre colecțiile La Vatra. Produsele rămân digitale și printable, dar casa este felul în care le descoperi.</p></div></div></section>
    <section className="section need-shop-section"><div className="shell"><div className="section-heading split"><div><p className="eyebrow">Not sure where to begin?</p><h2>Tell the Vatra what you need.</h2></div><p>Choose the mood first. Product type can come later.</p></div><NeedFinder compact /></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">Odaile casei</p><h2>Patru odăi. Patru rafturi de lucruri.</h2></div><div className="collection-grid collection-grid--shop">{collections.map((collection) => <CollectionCard key={collection.slug} collection={collection} />)}</div></div></section>
    <section className="section shop-products"><div className="shell"><div className="section-heading split"><div><p className="eyebrow">The current shelf</p><h2>Digital & printable editions.</h2></div><p>Built to download now and ready to grow into physical editions later.</p></div><div className="product-grid product-grid--shop">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div></div></section>
    <Newsletter />
  </>;
}
