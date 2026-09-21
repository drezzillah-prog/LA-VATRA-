import Link from 'next/link';
import type { CollectionKey } from '@/data/catalog';

export default function CollectionCard({ collection }: { collection: { slug: string; key: CollectionKey; number: string; eyebrow: string; title: string; description: string; mood: string } }) {
  return (
    <Link href={`/collections/${collection.slug}`} className={`collection-card collection-card--${collection.key}`}>
      <div className="collection-art" aria-hidden="true">
        <span className="collection-number">{collection.number}</span>
        <div className="symbol-grid"><i /><i /><i /><i /><i /></div>
      </div>
      <div className="collection-copy">
        <p className="eyebrow">{collection.eyebrow}</p>
        <h3>{collection.title}</h3>
        <p>{collection.description}</p>
        <div className="card-meta"><span>{collection.mood}</span><b>Explore →</b></div>
      </div>
    </Link>
  );
}
