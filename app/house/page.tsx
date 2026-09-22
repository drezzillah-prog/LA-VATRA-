import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'Casa Vetrei',
  description: 'Bucătăria, dormitorul, cămara și hambarul — odăile La Vatra.',
};

const rooms = [
  { room:'Bucătăria', en:'The Kitchen', href:'/collections/emotional-healing', cls:'kitchen', text:'Jurnale, reflecție și ritualuri mici, într-o bucătărie românească luminată cald.' },
  { room:'Dormitorul', en:'The Bedroom', href:'/collections/dark-mystical-fantasy', cls:'bedroom', text:'Jurnale nocturne, simboluri și obiecte pentru orele liniștite.' },
  { room:'Cămara', en:'The Pantry', href:'/collections/productivity-clean', cls:'pantry', text:'Plannere, liste și structură practică, printre rafturi și lucruri puse în ordine.' },
  { room:'Hambarul', en:'The Barn', href:'/collections/european-culture', cls:'barn', text:'Calendare, ediții de patrimoniu și obiecte legate de anotimpuri și memorie.' },
] as const;

export default function HousePage() {
  return (
    <>
      <section className="house-intro-real">
        <div className="shell">
          <p className="eyebrow">Casa Vetrei</p>
          <h1>Patru odăi.<br/>O singură casă.</h1>
          <p>Alege odaia din bara de sus sau intră prin una dintre ușile de mai jos.</p>
        </div>
      </section>

      <section className="room-door-grid">
        {rooms.map((room) => (
          <Link href={room.href} key={room.room} className={`room-door-card room-door-card--${room.cls}`}>
            <div className="room-door-shade" />
            <div className="room-door-copy">
              <small>{room.en}</small>
              <h2>{room.room}</h2>
              <p>{room.text}</p>
              <b>Intră în odaie →</b>
            </div>
          </Link>
        ))}
      </section>
      <Newsletter />
    </>
  );
}
