import Link from 'next/link';
import Ornament from './Ornament';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <Ornament />
        <div className="footer-grid">
          <div>
            <div className="footer-mark">LA VATRA</div>
            <p>Objects for inner life, everyday ritual and cultural memory.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/house">Casa Vetrei · The House</Link>
            <Link href="/shop">Shop collections</Link>
            <Link href="/symbols">Cabinet of Symbols</Link>
            <Link href="/about">Our story</Link>
          </div>
          <div>
            <h3>Keep close</h3>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <a href="#newsletter">Newsletter</a>
            <span className="social-placeholder">Instagram · Pinterest · Etsy</span>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} La Vatra</span>
          <span>Made with memory, not nostalgia.</span>
        </div>
      </div>
    </footer>
  );
}
