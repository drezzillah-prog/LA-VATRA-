export type CollectionKey = 'healing' | 'mystical' | 'productivity' | 'culture';

export const collections = [
  {
    slug: 'emotional-healing',
    key: 'healing' as CollectionKey,
    number: 'I',
    eyebrow: 'Soft rituals for returning to yourself',
    title: 'Emotional / Healing',
    shortTitle: 'Emotional',
    description:
      'Tender journals, reflective pages and printable rituals for quieter days, inner repair and the small work of coming home to yourself.',
    mood: 'Soft · reflective · restorative',
    quote: 'Not every return is a grand arrival. Some begin with one quiet page.',
  },
  {
    slug: 'dark-mystical-fantasy',
    key: 'mystical' as CollectionKey,
    number: 'II',
    eyebrow: 'For midnight minds and symbolic worlds',
    title: 'Dark / Mystical / Fantasy',
    shortTitle: 'Mystical',
    description:
      'Moody planners, ritual journals and atmospheric art where old symbols, imagined archives and elegant darkness meet.',
    mood: 'Moody · ritualistic · symbolic',
    quote: 'For the hours when the house is quiet and the inner world grows louder.',
  },
  {
    slug: 'productivity-clean',
    key: 'productivity' as CollectionKey,
    number: 'III',
    eyebrow: 'Structure without severity',
    title: 'Productivity / Clean',
    shortTitle: 'Productivity',
    description:
      'Calm systems for planning, focus and gentle discipline — clean enough to think in, warm enough to live with.',
    mood: 'Clear · structured · calm',
    quote: 'Order can be kind. Discipline can leave room for breath.',
  },
  {
    slug: 'european-culture',
    key: 'culture' as CollectionKey,
    number: 'IV',
    eyebrow: 'Memory made visible',
    title: 'European Culture',
    shortTitle: 'Culture',
    description:
      'Illustrated calendars, prints and paper goods rooted in Romanian and Eastern European memory, craft, landscape and regional beauty.',
    mood: 'Rooted · artistic · heritage-rich',
    quote: 'What we inherit is not static. It lives each time we choose to carry it forward.',
  },
];

export const products = [
  {
    slug: 'gentle-discipline-planner',
    collection: 'productivity' as CollectionKey,
    featured: true,
    title: 'Gentle Discipline Planner',
    subtitle: 'A quieter way to keep promises to yourself.',
    type: 'Digital planner · Printable PDF',
    badge: 'Signature edition',
    description:
      'A refined planning system for people who want consistency without self-punishment. Gentle Discipline pairs weekly structure with reflection, realistic pacing and space to begin again.',
    included: [
      'Year-at-a-glance and seasonal intention pages',
      'Monthly planning and gentle reset spreads',
      'Weekly focus, priorities and energy-aware planning',
      'Habit and rhythm trackers designed without pressure',
      'Reflection pages for progress, friction and return',
      'Printable and tablet-friendly PDF files',
    ],
    idealFor: 'Thoughtful planners, recovering perfectionists, creative professionals and anyone building steadier routines.',
    formats: 'PDF · A4 · A5 · US Letter · tablet-friendly edition',
  },
  {
    slug: 'quiet-return-journal',
    collection: 'healing' as CollectionKey,
    featured: true,
    title: 'Quiet Return Journal',
    subtitle: 'Pages for the days when healing needs less noise.',
    type: 'Printable journal',
    badge: 'Emotional / Healing',
    description:
      'A gentle guided journal built around rest, memory, self-trust and the subtle practice of noticing what is changing inside you.',
    included: ['32 guided reflection pages', 'Undated check-ins', 'Grounding prompts', 'Printable A4 + A5 files'],
    idealFor: 'Slow mornings, reflective evenings, transitions and personal rituals.',
    formats: 'PDF · A4 · A5',
  },
  {
    slug: 'nocturne-ritual-journal',
    collection: 'mystical' as CollectionKey,
    featured: true,
    title: 'Nocturne Ritual Journal',
    subtitle: 'An archive for symbols, dreams and midnight thoughts.',
    type: 'Digital + printable journal',
    badge: 'Dark / Mystical',
    description:
      'An atmospheric journal for dream notes, symbolic reflection, seasonal rituals and personal mythology — dramatic, elegant and intentionally restrained.',
    included: ['Dream log', 'Symbol index', 'Ritual notes', 'Seasonal reflection pages', 'Printable and tablet PDF'],
    idealFor: 'Writers, dreamers, fantasy lovers and collectors of beautiful dark stationery.',
    formats: 'PDF · A4 · A5 · tablet-friendly edition',
  },
  {
    slug: 'clear-days-weekly',
    collection: 'productivity' as CollectionKey,
    featured: false,
    title: 'Clear Days Weekly',
    subtitle: 'A clean weekly desk system with room to breathe.',
    type: 'Printable planner pad',
    badge: 'Productivity / Clean',
    description:
      'Minimal weekly planning pages with priorities, appointments, open space and a simple end-of-week reset.',
    included: ['Weekly spread', 'Priority map', 'Notes page', 'A4 + US Letter files'],
    idealFor: 'People who want clarity without a complex productivity system.',
    formats: 'PDF · A4 · US Letter',
  },
  {
    slug: 'fireside-heritage-calendar',
    collection: 'culture' as CollectionKey,
    featured: true,
    title: 'Fireside Heritage Calendar',
    subtitle: 'Twelve months of landscape, symbol and old-world warmth.',
    type: 'Printable calendar',
    badge: 'European Culture',
    description:
      'A story-led calendar inspired by Romanian seasonal rhythms, embroidery geometry, carved wood, old houses, Black Sea air and the beauty of regional memory.',
    included: ['12 illustrated month pages', 'Seasonal notes', 'Decorative cover', 'Home-print and print-shop versions'],
    idealFor: 'Homes, studios, heritage lovers and anyone who wants culture to feel lived rather than displayed.',
    formats: 'PDF · A4 · A3',
  },
  {
    slug: 'old-europe-wallpaper-set',
    collection: 'culture' as CollectionKey,
    featured: false,
    title: 'Old Europe Wallpaper Set',
    subtitle: 'Quiet architecture, old paper and a little weather in the walls.',
    type: 'Digital wallpaper set',
    badge: 'European Culture',
    description:
      'A device wallpaper collection drawing from regional architecture, faded ink, botanical details and the mood of inherited places.',
    included: ['Phone wallpapers', 'Desktop wallpapers', 'Light + dark variants', 'High-resolution files'],
    idealFor: 'Anyone who wants everyday screens to feel less generic and more personal.',
    formats: 'PNG · phone + desktop sizes',
  },
];

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
