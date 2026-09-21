import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import { collections, getCollection, products } from '@/data/catalog';

export function generateStaticParams() { return collections.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const collection = getCollection(slug); return { title: collection?.title || 'Collection' };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const collection = getCollection(slug); if (!collection) notFound();
  const collectionProducts = products.filter((product) => product.collection === collection.key);
  return <>
    <section className={`collection-hero collection-hero--${collection.key}`}><div className="shell collection-hero-grid"><div><p className="eyebrow">Collection {collection.number}</p><h1>{collection.title}</h1><p className="collection-lead">{collection.description}</p><div className="collection-mood">{collection.mood}</div></div><div className="collection-manifesto"><span>{collection.number}</span><blockquote>{collection.quote}</blockquote></div></div></section>
    <section className="section"><div className="shell"><div className="section-heading split"><div><p className="eyebrow">From this collection</p><h2>Objects for this particular mood.</h2></div><p>Each edition keeps the same La Vatra attention to material, emotional tone and practical use.</p></div><div className="product-grid product-grid--shop">{collectionProducts.length ? collectionProducts.map((product) => <ProductCard key={product.slug} product={product} />) : <p>New editions are being prepared for this collection.</p>}</div></div></section>
    <Newsletter />
  </>;
}
