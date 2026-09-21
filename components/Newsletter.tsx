'use client';

import { FormEvent, useState } from 'react';

export default function Newsletter() {
  const [message, setMessage] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('You are at the threshold. Newsletter delivery will open with the shop.');
  }
  return (
    <section className="newsletter" id="newsletter">
      <div className="shell newsletter-inner">
        <div>
          <p className="eyebrow">Join the circle</p>
          <h2>Letters from the hearth.</h2>
          <p>New collections, seasonal stories, printable gifts and quiet notes on craft, memory and the things we choose to carry forward.</p>
        </div>
        <form onSubmit={submit} className="newsletter-form">
          <label htmlFor="newsletter-email">Email address</label>
          <div><input required id="newsletter-email" type="email" placeholder="you@example.com" /><button type="submit">Keep me close</button></div>
          {message && <p className="form-note" role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}
