import Newsletter from '@/components/Newsletter';

export const metadata = { title: 'FAQ' };

const faqs = [
  ['Are La Vatra products physical or digital?', 'La Vatra launches with digital and printable products. Each product page states exactly what is included. Physical editions may be added later and will be clearly marked.'],
  ['How do I receive my files?', 'Digital files will be delivered through the connected shop system after purchase. Before public launch, this website will be linked to the final commerce and delivery flow.'],
  ['Can I print the files at home?', 'Yes, where a product is marked printable. Product pages list the supported sizes. For richer paper, larger art or precise trimming, a local print shop may give the best result.'],
  ['Can I resize a printable?', 'Use the supplied size whenever possible. Some printers can scale proportionally, but changing aspect ratio can crop borders or alter the intended composition.'],
  ['What does personal use mean?', 'Your purchase is for your own personal use. You may print copies for yourself, but may not resell, redistribute, upload or commercially reproduce the files.'],
  ['Will La Vatra make physical products?', 'That is part of the longer vision. Paper goods, crafted objects and special physical editions can eventually join the digital collections without changing the core brand world.'],
  ['Will there be more European culture collections?', 'Yes. Romanian and Eastern European memory remain central, while future work can explore specific regional stories and thoughtful cultural parallels across Europe.'],
];

export default function FAQPage() { return <><section className="page-hero page-hero--faq"><div className="shell narrow"><p className="eyebrow">FAQ</p><h1>Useful answers, kept simple.</h1><p>Files, printing, personal use and what happens when La Vatra grows beyond digital editions.</p></div></section><section className="section"><div className="shell faq-list">{faqs.map(([q,a], i) => <details key={q} open={i === 0}><summary><span>{String(i+1).padStart(2,'0')}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section><Newsletter /></>; }
