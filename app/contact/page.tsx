import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return <section className="page-hero contact-page"><div className="shell contact-grid"><div><p className="eyebrow">Contact</p><h1>Leave a note by the hearth.</h1><p>Questions about a file, printing, a future collaboration or a La Vatra product? Write to us and we’ll keep the conversation human.</p><div className="contact-details"><span>Brand email</span><strong>hello@lavatra.example</strong><small>Replace with your final address before launch.</small></div></div><ContactForm /></div></section>;
}
