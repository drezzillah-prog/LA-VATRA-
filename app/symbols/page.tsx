import Link from 'next/link';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: 'Cabinet of Symbols',
  description: 'The materials, shapes and recurring visual language behind La Vatra.',
};

const symbols = [
  {
    mark: '✦',
    name: 'The ember',
    source: 'hearth / light',
    text: 'Our smallest recurring mark. It stands for a point of warmth kept alive — less a logo than a quiet reminder that the center of the house is still lit.',
    used: 'Brand marks · dividers · evening mode',
  },
  {
    mark: '◇',
    name: 'The woven diamond',
    source: 'textile geometry',
    text: 'A geometric rhythm inspired by the discipline of woven and embroidered surfaces. At La Vatra it becomes structure: borders, grids, repetition and balance.',
    used: 'Borders · planner systems · cultural editions',
  },
  {
    mark: '✣',
    name: 'The rosette',
    source: 'carving / ornament',
    text: 'A radial form that appears naturally in our carved and printed visual language. We use it as a meeting point between domestic craft and graphic order.',
    used: 'Covers · seals · collection marks',
  },
  {
    mark: '⌂',
    name: 'The threshold',
    source: 'house / gate / entry',
    text: 'Doors, gates and arches matter because La Vatra is built around entering, returning and belonging. The threshold is where one world changes into another.',
    used: 'Casa Vetrei · page transitions · framing',
  },
  {
    mark: '❦',
    name: 'The branch',
    source: 'botanical memory',
    text: 'Leaves, stems and seed forms soften the geometry. They bring season, growth and the feeling of something tended rather than manufactured.',
    used: 'Healing editions · seasonal pages · paper goods',
  },
  {
    mark: '≈',
    name: 'The horizon',
    source: 'Dobrogea / Black Sea',
    text: 'A long line, a little weather and a great deal of space. The sea enters La Vatra as atmosphere rather than nautical decoration.',
    used: 'Wallpapers · summer editions · visual pauses',
  },
  {
    mark: '⋮',
    name: 'The grain',
    source: 'paper / wood / time',
    text: 'Perfectly smooth surfaces feel anonymous to us. Grain gives digital work a memory of touch: paper fiber, worn ink, carved wood, surfaces that seem to have lived.',
    used: 'Backgrounds · mockups · editorial panels',
  },
  {
    mark: '⌁',
    name: 'The thread',
    source: 'continuity / making',
    text: 'A line that continues is one of the simplest ideas behind the brand: what is inherited can be carried forward without being frozen in place.',
    used: 'Dividers · storytelling · heritage collections',
  },
] as const;

export default function SymbolsPage() {
  return (
    <>
      <section className="symbols-hero">
        <div className="shell symbols-hero-grid">
          <div>
            <p className="eyebrow">Cabinet of Symbols</p>
            <h1>The marks we keep returning to.</h1>
          </div>
          <div>
            <p>This is not a dictionary of universal meanings. It is La Vatra’s own cabinet: the shapes, materials and visual traces that repeatedly inform the work.</p>
            <small>Context over costume. Inspiration over imitation.</small>
          </div>
        </div>
      </section>

      <section className="symbol-cabinet">
        <div className="shell symbol-grid-list">
          {symbols.map((symbol, index) => (
            <article className="symbol-drawer" key={symbol.name}>
              <div className="symbol-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="symbol-mark" aria-hidden="true">{symbol.mark}</div>
              <div className="symbol-copy">
                <span>{symbol.source}</span>
                <h2>{symbol.name}</h2>
                <p>{symbol.text}</p>
                <small>{symbol.used}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="symbols-note">
        <div className="shell symbols-note-grid">
          <div><p className="eyebrow">From symbol to object</p><h2>The reference should disappear into the design.</h2></div>
          <div><p>A La Vatra product should never need a costume to prove that it has roots. The influence can live in proportion, repetition, material, color, pacing and the way a page is framed.</p><Link className="text-link" href="/shop">See the objects <span>→</span></Link></div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
