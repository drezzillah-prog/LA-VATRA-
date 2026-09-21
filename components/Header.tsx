'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['Home', '/'],
  ['Shop', '/shop'],
  ['Our story', '/about'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="La Vatra home">
          <span className="wordmark-flame" aria-hidden="true">✦</span>
          <span>LA VATRA</span>
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          <span /> <span />
        </button>
        <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="nav-cta" href="/shop" onClick={() => setOpen(false)}>Enter the shop</Link>
        </nav>
      </div>
    </header>
  );
}
