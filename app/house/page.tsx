import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import Ornament from '@/components/Ornament';

export const metadata = {
  title: 'The House',
  description: 'Enter Casa Vetrei: four rooms for restoration, mystery, structure and cultural memory.',
};

const rooms = [
  {
    number: 'I',
    key: 'quiet',
    name: 'The Quiet Room',
    collection: 'Emotional / Healing',
    href: '/collections/emotional-healing',
    invitation: 'Come here when everything has been too loud.',
    objects: 'Journals · reflection pages · small rituals',
  },
  {
    number: 'II',
    key: 'midnight',
    name: 'The Midnight Room',
    collection: 'Dark / Mystical / Fantasy',
    href: '/collections/dark-mystical-fantasy',
    invitation: 'For the thoughts that only arrive after the rest of the house sleeps.',
    objects: 'Ritual journals · nocturne editions · symbolic art',
  },
  {
    number: 'III',
    key: 'worktable',
    name: 'The Worktable',
    collection: 'Productivity / Clean',
    href: '/collections/productivity-clean',
    invitation: 'A clear surface. A pencil. Enough order to begin.',
    objects: 'Planners · weekly systems · gentle discipline',
  },
  {
    number: 'IV',
    key: 'ancestral',
    name: 'The Ancestral Room',
    collection: 'European Culture',
    href: '/collections/european-culture',
    invitation: 'Where place, inherited beauty and the memory of making things by hand remain visible.',
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
          <h1>Enter by the room<br />you need today.</h1>
          <p>La Vatra is organised like a house rather than a department store. Each room holds a different kind of object, mood and attention.</p>
          <div className="house-key" aria-hidden="true"><span>✦</span><i /></div>
        </div>
      </section>

      <section className="house-plan">
        <div className="shell">
          <div className="house-plan-intro">
            <span>THE FLOOR PLAN</span>
            <p>You do not have to know what product you are looking for. Start with the room that feels closest.</p>
          </div>
          <div className="room-grid">
            {rooms.map((room) => (
              <Link href={room.href} key={room.key} className={`room-card room-card--${room.key}`}>
                <div className="room-door" aria-hidden="true">
                  <span>{room.number}</span>
                  <div className="door-mark">✦</div>
                  <i />
                </div>
                <div className="room-copy">
                  <span className="room-collection">{room.collection}</span>
                  <h2>{room.name}</h2>
                  <p>{room.invitation}</p>
                  <small>{room.objects}</small>
                  <b>Enter the room →</b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="house-threshold">
        <div className="shell house-threshold-grid">
          <div>
            <p className="eyebrow">At the threshold</p>
            <h2>Nothing in the house is only decoration.</h2>
          </div>
          <div>
            <p>Objects are chosen for what they help you do: remember, organise, write, notice, recover, keep or pass forward.</p>
            <p>The cultural references are treated the same way. They are part of the material language of La Vatra, not costume laid over a generic product.</p>
            <Link className="text-link" href="/symbols">Open the Cabinet of Symbols <span>→</span></Link>
          </div>
        </div>
        <Ornament />
      </section>
      <Newsletter />
    </>
  );
}
