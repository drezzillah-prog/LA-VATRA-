import Link from 'next/link';
import HouseRooms from '@/components/HouseRooms';
import Newsletter from '@/components/Newsletter';
import Ornament from '@/components/Ornament';

export const metadata = {
  title: 'Casa Vetrei',
  description: 'Bucătăria, dormitorul, cămara și hambarul — patru odăi, patru intrări în La Vatra.',
};

export default function HousePage() {
  return (
    <>
      <section className="house-hero house-hero--new">
        <div className="shell house-hero-inner">
          <p className="eyebrow">Casa Vetrei · The House</p>
          <h1>Intră.<br />Ușile sunt deschise.</h1>
          <p>O casă obișnuită, nu patru concepte abstracte. Fiecare odaie duce spre o familie de obiecte La Vatra.</p>
        </div>
      </section>

      <section className="house-plan house-plan--new">
        <div className="shell">
          <div className="house-plan-intro">
            <span>ODAILE CASEI</span>
            <p>Bucătărie. Dormitor. Cămară. Hambar. Alege unde intri.</p>
          </div>
          <HouseRooms />
        </div>
      </section>

      <section className="house-threshold house-threshold--new">
        <div className="shell house-threshold-grid">
          <div><p className="eyebrow">La prag</p><h2>Casa vine înaintea categoriei.</h2></div>
          <div>
            <p>Journals can sit on a kitchen table. Dark notebooks can wait beside a bed. Planning belongs with shelves, provisions and lists. Seasonal culture belongs where the year is stored and remembered.</p>
            <p>That is why La Vatra is organised as a household rather than as four ecommerce tabs.</p>
            <Link className="text-link" href="/symbols">Deschide Cabinetul de Simboluri <span>→</span></Link>
          </div>
        </div>
        <Ornament />
      </section>
      <Newsletter />
    </>
  );
}
