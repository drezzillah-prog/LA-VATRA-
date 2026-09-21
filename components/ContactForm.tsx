'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row"><label>Name<input required name="name" /></label><label>Email<input required type="email" name="email" /></label></div>
      <label>What can we help with?<select name="topic" defaultValue=""><option value="" disabled>Choose a subject</option><option>Product question</option><option>Printing & files</option><option>Collaboration</option><option>Wholesale / future physical products</option><option>Other</option></select></label>
      <label>Message<textarea required name="message" rows={7} /></label>
      <button className="button button--dark" type="submit">Send your note</button>
      {sent && <p className="form-note" role="status">Your note is ready. Connect this form to your preferred email service before launch.</p>}
    </form>
  );
}
