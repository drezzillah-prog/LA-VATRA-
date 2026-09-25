'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const rooms=[
 {name:'CUHNIA',sub:'Bucătăria',href:'/rooms/cuhnia'},
 {name:'IATACUL',sub:'Dormitorul',href:'/rooms/iatacul'},
 {name:'CĂMARA',sub:'Rânduiala casei',href:'/rooms/camara'},
 {name:'CASA MARE',sub:'Odaia familiei',href:'/rooms/casa-mare'},
 {name:'ȘURA',sub:'Anotimp & loc',href:'/rooms/sura'}
];

export default function RoomNav(){
 const pathname=usePathname();
 return <nav className="room-strip" aria-label="Odaile Casei"><div className="shell room-strip-inner">
  <span className="room-strip-title">ODAILE CASEI</span>
  <div className="room-strip-scroll">{rooms.map(room=>{
   const active=pathname===room.href;
   return <Link key={room.href} href={room.href} className={active?'room-tab room-tab--active':'room-tab'}><strong>{room.name}</strong><small>{room.sub}</small></Link>
  })}</div>
 </div></nav>;
}
