import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import { collections, getCollection, products } from '@/data/catalog';

export function generateStaticParams() { return collections.map(({ slug }) => ({ slug })); }

const roomByKey = {
  healing: {
    room: 'Bucătăria',
    english: 'The Kitchen',
    kicker: 'Masa, soba, lumina caldă și lucrurile lăsate la îndemână.',
    photo: 'kitchen',
  },
  mystical: {
    room: 'Dormitorul',
    english: 'The Bedroom',
    kicker: 'Lemn, țesături, liniște și lucrurile păstrate lângă pat.',
    photo: 'bedroom',
  },
  productivity: {
    room: 'Cămara',
    english: 'The Pantry',
    kicker: 'Rafturi, provizii, ordine practică și loc pentru fiecare lucru.',
    photo: 'pantry',
  },
  culture: {
    room: 'Hambarul',
    english: 'The Barn',
    kicker: 'Grinzi, anotimpuri, recoltă și memoria lucrurilor păstrate peste an.',
    photo: 'barn',
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: 'La Vatra' };
  const room = roomByKey[collection.key];
  return { title: `${room.room} — ${collection.title}` };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const collectionProducts = products.filter((product) => product.collection === collection.key);
  const room = roomByKey[collection.key];

  return <>
    <section className={`real-room-hero real-room-hero--${room.photo}`}>
      <div className="real-room-overlay" />
      <div className="shell real-room-copy">
        <p className="eyebrow">{collection.title}</p>
        <h1>{room.room}</h1>
        <span className="real-room-english">{room.english}</span>
        <p className="real-room-kicker">{room.kicker}</p>
        <div className="real-room-mood">{collection.mood}</div>
      </div>
      <div className="photo-credit-mini">Imagine de referință: colecții etnografice românești · Wikimedia Commons</div>
    </section>

    <section className="section room-products-section">
      <div className="shell">
        <div className="section-heading split">
          <div><p className="eyebrow">Pe rafturile odăii</p><h2>{collection.title}</h2></div>
          <p>{collection.description}</p>
        </div>
        <div className="product-grid product-grid--shop">
          {collectionProducts.length ? collectionProducts.map((product) => <ProductCard key={product.slug} product={product} />) : <p>New editions are being prepared for this room.</p>}
        </div>
      </div>
    </section>
    <Newsletter />
  </>;
}
