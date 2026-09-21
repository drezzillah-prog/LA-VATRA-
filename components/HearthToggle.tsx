'use client';

import { useEffect, useState } from 'react';

type HearthMode = 'day' | 'evening';

export default function HearthToggle() {
  const [mode, setMode] = useState<HearthMode>('day');

  useEffect(() => {
    const stored = window.localStorage.getItem('la-vatra-hearth');
    const initial: HearthMode = stored === 'evening' ? 'evening' : 'day';
    setMode(initial);
    document.documentElement.dataset.hearth = initial;
  }, []);

  function toggle() {
    const next: HearthMode = mode === 'day' ? 'evening' : 'day';
    setMode(next);
    document.documentElement.dataset.hearth = next;
    window.localStorage.setItem('la-vatra-hearth', next);
  }

  return (
    <button
      type="button"
      className={mode === 'evening' ? 'hearth-toggle hearth-toggle--lit' : 'hearth-toggle'}
      onClick={toggle}
      aria-pressed={mode === 'evening'}
      title={mode === 'day' ? 'Light the Vatra' : 'Return to daylight'}
    >
      <span className="hearth-flame" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12.2 2.4c.7 3.6-2.8 4.7-2.1 8.1.3 1.4 1.5 2.1 2.7 1.3 1.3-.9 1.6-2.7 1.3-4.2 2.8 2 4.2 4.6 3.6 7.6-.6 3.2-3 5.4-5.8 5.4-3.5 0-6.2-2.6-6.2-6.2 0-4.2 2.8-7.1 6.5-12Z" />
        </svg>
      </span>
      <span>{mode === 'day' ? 'Light the Vatra' : 'Daylight'}</span>
    </button>
  );
}
