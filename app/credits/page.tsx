export const metadata = { title: 'Image credits' };

export default function CreditsPage() {
  return (
    <section className="section credits-page">
      <div className="shell narrow">
        <p className="eyebrow">La Vatra</p>
        <h1>Image credits</h1>
        <p>Photographic room backgrounds are used as cultural reference imagery under their respective Wikimedia Commons licenses.</p>
        <ul className="credits-list">
          <li><strong>Bucătăria:</strong> “RO B Village Museum Fundu Moldovei household summer kitchen.jpg”, Andrei Stroe, Wikimedia Commons, CC BY-SA.</li>
          <li><strong>Dormitorul:</strong> “Romanian farmhouse bedroom (8053014190).jpg”, Thomas Quine, Wikimedia Commons, CC BY 2.0.</li>
          <li><strong>Cămara:</strong> “RO B Village Museum Suici household stable and storage room.jpg”, Andrei Stroe, Wikimedia Commons, CC BY-SA.</li>
          <li><strong>Hambarul:</strong> “Racovita (Sibiu) - SURA.jpg”, Asybaris01, Wikimedia Commons, CC BY 3.0.</li>
        </ul>
      </div>
    </section>
  );
}
