import Ornament from '@/components/Ornament';
import VisualPanel from '@/components/VisualPanel';
import Newsletter from '@/components/Newsletter';

export const metadata = { title: 'Our story' };

export default function AboutPage() {
  return <>
    <section className="page-hero page-hero--about"><div className="shell narrow"><p className="eyebrow">Our story</p><h1>A brand built around the place we return to.</h1><p>La Vatra began with a word that holds an entire world: hearth, home, continuity, warmth, ancestry and the quiet center of everyday life.</p></div></section>
    <section className="section"><div className="shell editorial-grid"><div><p className="eyebrow">Why La Vatra exists</p><h2>We wanted meaning to be useful.</h2></div><div className="prose"><p>There are beautiful things that ask nothing of us, and useful things that carry no feeling at all. La Vatra lives in the space between them.</p><p>We create planners, journals, calendars, printable bundles, art and digital objects that are meant to be used — but also to feel like they belong to a larger inner landscape.</p><p>The work is shaped by Romanian and Eastern European cultural memory: geometric embroidery, carved wood, old paper, rural architecture, the Black Sea, seasonal habits, religious and folk spaces, domestic rituals and the way homes collect traces over time.</p></div></div></section>
    <section className="section section--ink"><div className="shell quote-grid"><div><p className="eyebrow">A cultural position</p><h2>Heritage is not a museum label.</h2></div><blockquote>It is a vocabulary we can still speak — carefully, intelligently, beautifully — without flattening it into folklore.</blockquote></div></section>
    <section className="section"><div className="shell story-panels story-panels--about"><VisualPanel label="MATERIAL" title="Paper grain, cloth, wood, ink" variant="paper" /><VisualPanel label="PLACE" title="Maramureș, Dobrogea, old Europe" variant="sea" /><VisualPanel label="SYMBOL" title="Embroidery, botany, ritual marks" variant="wood" /></div></section>
    <section className="section"><div className="shell editorial-grid"><div><p className="eyebrow">Beyond Romania</p><h2>Regional memory has cousins.</h2></div><div className="prose"><p>Romanian traditions do not exist in isolation. Across Eastern and Central Europe, motifs, domestic craft, seasonal rituals and architectural forms echo one another while remaining locally distinct.</p><p>La Vatra makes room for those resonances — including Poland, Bulgaria and the broader European cultural landscape — while keeping specificity and respect at the center.</p><Ornament compact /></div></div></section>
    <section className="values-band"><div className="shell values-grid"><div><span>01</span><h3>Beauty</h3><p>Atmosphere matters.</p></div><div><span>02</span><h3>Function</h3><p>Every object earns its place.</p></div><div><span>03</span><h3>Identity</h3><p>Design can carry memory.</p></div><div><span>04</span><h3>Continuity</h3><p>Old forms can become living ones.</p></div></div></section>
    <Newsletter />
  </>;
}
