import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import Ornament from '@/components/Ornament';

export const metadata = {
  title: 'Casa Vetrei',
  description: 'Enter Casa Vetrei through four ordinary rooms: the kitchen, bedroom, pantry and barn.',
};

const rooms = [
  {
    number: 'I',
    key: 'kitchen',
    ro: 'Bucătăria',
    en: 'The Kitchen',
    collection: 'Emotional / Healing',
    href: '/collections/emotional-healing',
    invitation: 'The warmest room in the house: a table, a stove, something simmering, a notebook left open between ordinary things.',
    objects: 'Journals · reflection pages · gentle rituals',
  },
  {
    number: 'II',
    key: 'bedroom',
    ro: 'Dormitorul',
    en: 'The Bedroom',
    collection: 'Dark / Mystical / Fantasy',
    href: '/collections/dark-mystical-fantasy',
    invitation: 'Curtains drawn, embroidered linen, the last candle still awake. A room for dreams, symbols and thoughts kept after dark.',
    objects: 'Ritual journals · nocturne editions · symbolic art',
  },
  {
    number: 'III',
    key: 'pantry',
    ro: 'Cămara',
    en: 'The Pantry',
    collection: 'Productivity / Clean',
    href: '/collections/productivity-clean',
    invitation: 'Shelves, labels, provisions, everything in its place. Not perfection — simply knowing where things belong.',
    objects: 'Planners · weekly systems · practical pages',
  },
  {
    number: 'IV',
    key: 'barn',
    ro: 'Hambarul',
    en: 'The Barn',
    collection: 'European Culture',
    href: '/collections/european-culture',
    invitation: 'Timber, grain, seasons and things stored because they will matter again. The part of the household that remembers the year.',
    objects: 'Calendars · prints · heritage editions · wallpapers',
  },
] as const;

export default function HousePage() {
  return (
    <>
      <section className="house-hero">
        <div className="house-hero-grain" aria-hidden="true" />
        <div className="shell house-hero-inner">
          <p className="eyebrow">Casa Vetrei · The House</p>
          <h1>Intră în casă.<br />Alege o odaie.</h1>
          <p>Not four abstract moods and not four shop tabs. A kitchen, a bedroom, a pantry and a barn — ordinary rooms, used and lived in.</p>
          <div className="house-key" aria-hidden="true"><span>✦</span><i /></div>
        </div>
      </section>

      <section className="house-plan">
        <div className="shell">
          <div className="house-plan-intro">
            <span>ODAILE CASEI · THE ROOMS</span>
            <p>Walk in as you would in an old house: by the room, not by the product category.</p>
          </div>

          <div className="room-grid room-grid--lived-in">
            {rooms.map((room) => (
              <Link href={room.href} key={room.key} className={`room-card room-card--${room.key}`}>
                <div className="room-scene" aria-hidden="true">
                  <span className="room-number">{room.number}</span>
                  <i className="scene-main" />
                  <i className="scene-detail scene-detail--a" />
                  <i className="scene-detail scene-detail--b" />
                  <i className="scene-detail scene-detail--c" />
                </div>

                <div className="room-copy">
                  <span className="room-collection">{room.collection}</span>
                  <h2>{room.ro}</h2>
                  <em className="room-translation">{room.en}</em>
                  <p>{room.invitation}</p>
                  <small>{room.objects}</small>
                  <b>Intră în odaie →</b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="house-threshold">
        <div className="shell house-threshold-grid">
          <div>
            <p className="eyebrow">La prag · At the threshold</p>
            <h2>A house is made from use, not decoration.</h2>
          </div>
          <div>
            <p>La Vatra treats objects the same way. A journal is something left on the table. A planner belongs near the provisions and lists. A calendar follows the seasons. A dark notebook waits beside the bed.</p>
            <p>Romanian and Eastern European references appear through materials, rhythm, colour and domestic memory — never as costume laid over a generic shop.</p>
            <Link className="text-link" href="/symbols">Open the Cabinet of Symbols <span>→</span></Link>
          </div>
        </div>
        <Ornament />
      </section>

      <Newsletter />
    </>
  );
}
