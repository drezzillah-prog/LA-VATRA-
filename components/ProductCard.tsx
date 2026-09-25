'use client';
import Link from 'next/link';
import type { Product,RegionKey } from '@/data/catalog';

function price(product:Product,region:RegionKey){return region==='ro'?product.price.ro+' RON':region==='eu'?'€'+product.price.eu:'$'+product.price.us}

export default function ProductCard({product,region}:{product:Product;region:RegionKey}){
 return <Link href={'/product/'+product.slug} className={'product-card product-card--'+product.collection}>
  <div className="product-visual" aria-hidden="true"><div className="paper-object"><span>{product.bundle?'LA VATRA · LIBRARY':product.featured?'LA VATRA · SIGNATURE':'LA VATRA'}</span><b>{product.title}</b><small>{product.subtitle}</small></div></div>
  <div className="product-card-copy">
   <div className="badge-row"><span className="product-badge">{product.badge}</span>{product.isNew&&<span className="new-badge">NEW</span>}</div>
   <h3>{product.title}</h3><p>{product.subtitle}</p>
   <div className="single-price">{price(product,region)}</div>
   <div className="product-foot"><span>{product.type}</span><b>View →</b></div>
  </div>
 </Link>;
}
