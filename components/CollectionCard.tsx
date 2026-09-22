import Link from 'next/link';
import type { CollectionKey } from '@/data/catalog';

const rooms: Record<CollectionKey, { ro: string; en: string; enter: string }> = {
  healing: { ro: 'Bucătăria', en: 'The Kitchen', enter: 'Intră în bucătărie' },
  mystical: { ro: 'Dormitorul', en: 'The Bedroom', enter: 'Intră în dormitor' },
  productivity: { ro: 'Cămara', en: 'The Pantry', enter: 'Intră în cămară' },
  culture: { ro: 'Hambarul', en: 'The Barn', enter: 'Intră în hambar' },
};

export default function CollectionCard({ collection }: { collection: { slug: string; key: CollectionKey; number: string; eyebrow: string; title: string; description: string; mood: string } }) {
  const room = rooms[collection.key];

  return (
    <Link href={`/collections/${collection.slug}`} className={`collection-card collection-card--${collection.key} room-collection-card`}>
      <div className="collection-art room-scene room-scene--mini" aria-hidden="true">
        <span className="room-number">{collection.number}</span>
        <i className="scene-main" />
        <i className="scene-detail scene-detail--a" />
        <i className="scene-detail scene-detail--b" />
        <i className="scene-detail scene-detail--c" />
      </div>
      <div className="collection-copy">
        <p className="eyebrow">{collection.title}</p>
        <h3>{room.ro}</h3>
        <em className="room-translation">{room.en}</em>
        <p>{collection.description}</p>
        <div className="card-meta"><span>{collection.mood}</span><b>{room.enter} →</b></div>
      </div>
    </Link>
  );
}
