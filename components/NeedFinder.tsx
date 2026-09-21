'use client';

import Link from 'next/link';
import { useState } from 'react';

const needs = [
  {
    id: 'begin-again',
    label: 'I need to begin again',
    title: 'Start softly.',
    text: 'Choose something that gives shape to a new beginning without demanding a perfect one.',
    product: 'Quiet Return Journal',
    href: '/product/quiet-return-journal',
    room: 'The Quiet Room',
  },
  {
    id: 'structure',
    label: 'I need structure',
    title: 'Let order be kind.',
    text: 'A little architecture for your days — enough to hold your plans, not squeeze the life out of them.',
    product: 'Gentle Discipline Planner',
    href: '/product/gentle-discipline-planner',
    room: 'The Worktable',
  },
  {
    id: 'thoughts',
    label: 'I need somewhere for my thoughts',
    title: 'Give the inner noise a page.',
    text: 'A place to write before you decide what anything means.',
    product: 'Quiet Return Journal',
    href: '/product/quiet-return-journal',
    room: 'The Quiet Room',
  },
  {
    id: 'dark',
    label: 'I want something dark',
    title: 'Stay after midnight.',
    text: 'For symbols, dreams and the part of imagination that prefers candlelight to fluorescent certainty.',
    product: 'Nocturne Ritual Journal',
    href: '/product/nocturne-ritual-journal',
    room: 'The Midnight Room',
  },
  {
    id: 'home',
    label: 'I miss home',
    title: 'Keep a piece of place close.',
    text: 'Landscape, inherited detail and cultural memory translated into something you can live with every day.',
    product: 'Fireside Heritage Calendar',
    href: '/product/fireside-heritage-calendar',
    room: 'The Ancestral Room',
  },
  {
    id: 'clarity',
    label: 'My week is a mess',
    title: 'Clear the table.',
    text: 'No life overhaul. Just a clean week, visible priorities and enough white space to think.',
    product: 'Clear Days Weekly',
    href: '/product/clear-days-weekly',
    room: 'The Worktable',
  },
  {
    id: 'beauty',
    label: 'I just want something beautiful',
    title: 'That is reason enough.',
    text: 'Not everything has to fix you. Some things can simply make the everyday feel more yours.',
    product: 'Old Europe Wallpaper Set',
    href: '/product/old-europe-wallpaper-set',
    room: 'The Ancestral Room',
  },
] as const;

export default function NeedFinder({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(needs[0]);
  return (
    <div className={compact ? 'need-finder need-finder--compact' : 'need-finder'}>
      <div className="need-options" role="list" aria-label="Choose what you need today">
        {needs.map((need) => (
          <button
            type="button"
            key={need.id}
            className={active.id === need.id ? 'need-chip need-chip--active' : 'need-chip'}
            onClick={() => setActive(need)}
            aria-pressed={active.id === need.id}
          >
            {need.label}
          </button>
        ))}
      </div>
      <div className="need-result" aria-live="polite">
        <div>
          <span className="need-room">{active.room}</span>
          <h3>{active.title}</h3>
          <p>{active.text}</p>
        </div>
        <Link href={active.href} className="need-product">
          <span>Suggested from the hearth</span>
          <strong>{active.product}</strong>
          <b>Open it →</b>
        </Link>
      </div>
    </div>
  );
}
