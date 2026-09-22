'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const rooms = [
  { label: 'Bucătăria', sub: 'Kitchen', href: '/collections/emotional-healing' },
  { label: 'Dormitorul', sub: 'Bedroom', href: '/collections/dark-mystical-fantasy' },
  { label: 'Cămara', sub: 'Pantry', href: '/collections/productivity-clean' },
  { label: 'Hambarul', sub: 'Barn', href: '/collections/european-culture' },
] as const;

export default function RoomNav() {
  const pathname = usePathname();
  return (
    <nav className="room-strip" aria-label="Odaile Casei">
      <div className="shell room-strip-inner">
        <span className="room-strip-title">ODAILE CASEI</span>
        <div className="room-strip-scroll">
          {rooms.map((room) => {
            const active = pathname === room.href;
            return (
              <Link key={room.href} href={room.href} className={active ? 'room-tab room-tab--active' : 'room-tab'}>
                <strong>{room.label}</strong>
                <small>{room.sub}</small>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
