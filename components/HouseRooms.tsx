import Link from 'next/link';

const rooms = [
  {
    key: 'kitchen',
    ro: 'Bucătăria',
    en: 'The Kitchen',
    href: '/collections/emotional-healing',
    collection: 'Emotional / Healing',
    note: 'Journals, reflection, small rituals',
  },
  {
    key: 'bedroom',
    ro: 'Dormitorul',
    en: 'The Bedroom',
    href: '/collections/dark-mystical-fantasy',
    collection: 'Dark / Mystical / Fantasy',
    note: 'Dreams, symbols, nocturne editions',
  },
  {
    key: 'pantry',
    ro: 'Cămara',
    en: 'The Pantry',
    href: '/collections/productivity-clean',
    collection: 'Productivity / Clean',
    note: 'Planners, lists, practical order',
  },
  {
    key: 'barn',
    ro: 'Hambarul',
    en: 'The Barn',
    href: '/collections/european-culture',
    collection: 'European Culture',
    note: 'Seasons, memory, heritage editions',
  },
] as const;

export default function HouseRooms({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'vatra-house vatra-house--compact' : 'vatra-house'}>
      <div className="vatra-house-roof" aria-hidden="true">
        <span className="roof-mark">✣</span>
      </div>
      <div className="vatra-house-wall">
        {rooms.map((room) => (
          <Link href={room.href} key={room.key} className={`vatra-room vatra-room--${room.key}`}>
            <div className="vatra-room-scene" aria-hidden="true">
              <span className="beam beam--a" />
              <span className="beam beam--b" />
              <span className="room-object room-object--main" />
              <span className="room-object room-object--a" />
              <span className="room-object room-object--b" />
              <span className="room-object room-object--c" />
            </div>
            <div className="vatra-room-label">
              <small>{room.collection}</small>
              <strong>{room.ro}</strong>
              <em>{room.en}</em>
              {!compact && <span>{room.note}</span>}
            </div>
          </Link>
        ))}
      </div>
      <div className="vatra-house-foundation" aria-hidden="true">
        <span>CASA VETREI</span>
        <i />
        <b>ROMÂNIA · EUROPA DE EST</b>
      </div>
    </div>
  );
}
