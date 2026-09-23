import Link from 'next/link';
import type { CollectionKey, RegionalPrice } from '@/data/catalog';

export default function ProductCard({ product }: { product: { slug: string; collection: CollectionKey; title: string; subtitle: string; type: string; badge: string; price: RegionalPrice; featured?: boolean } }) {
  return (
    <Link href={`/product/${product.slug}`} className={`product-card product-card--${product.collection}`}>
      <div className="product-visual" aria-hidden="true">
        <div className="paper-object">
          <span>{product.featured ? 'LA VATRA · SIGNATURE' : 'LA VATRA'}</span>
          <b>{product.title}</b>
          <small>{product.subtitle}</small>
        </div>
      </div>
      <div className="product-card-copy">
        <span className="product-badge">{product.badge}</span>
        <h3>{product.title}</h3>
        <p>{product.subtitle}</p>
        <div className="regional-price"><b>{product.price.ro} RON</b><span>€{product.price.eu}</span><span>${product.price.us}</span></div>
        <div className="product-foot"><span>{product.type}</span><b>View →</b></div>
      </div>
    </Link>
  );
}