'use client';
import Link from 'next/link';
import {useState} from 'react';

type SiteLanguage='ro'|'en'|'fr'|'de'|'it';
const navCopy={
 ro:{shop:'Magazin',gifts:'Cadouri',family:'Arhiva Familiei',bundles:'Bundles',story:'Poveste',faq:'FAQ',search:'Caută',cart:'Coș'},
 en:{shop:'Shop',gifts:'Gifts',family:'Family Archive',bundles:'Bundles',story:'Our story',faq:'FAQ',search:'Search',cart:'Cart'},
 fr:{shop:'Boutique',gifts:'Cadeaux',family:'Archives de famille',bundles:'Collections',story:'Notre histoire',faq:'FAQ',search:'Rechercher',cart:'Panier'},
 de:{shop:'Shop',gifts:'Geschenke',family:'Familienarchiv',bundles:'Bundles',story:'Unsere Geschichte',faq:'FAQ',search:'Suche',cart:'Warenkorb'},
 it:{shop:'Negozio',gifts:'Regali',family:'Archivio di famiglia',bundles:'Bundle',story:'La nostra storia',faq:'FAQ',search:'Cerca',cart:'Carrello'}
};

export default function Header({language,regionLabel}:{language:SiteLanguage;regionLabel:string}){
 const [open,setOpen]=useState(false);
 const c=navCopy[language];
 const links=[[c.shop,'/shop'],[c.gifts,'/gifts'],[c.family,'/family-archive'],[c.bundles,'/bundles'],[c.story,'/about'],[c.faq,'/faq']] as const;
 return <header className="site-header"><div className="shell header-inner">
  <Link className="wordmark" href="/" onClick={()=>setOpen(false)} aria-label="La Vatra home"><span className="wordmark-flame">✦</span><span>LA VATRA</span></Link>
  <button className="menu-button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label="Toggle navigation"><span/><span/></button>
  <nav className={open?'nav nav--open':'nav'} aria-label="Main navigation">
   {links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}
   <Link href="/shop?focus=search" onClick={()=>setOpen(false)}>{c.search}</Link>
   <span className="region-pill" title="Commercial region is detected automatically">{regionLabel}</span>
   <span className="cart-soon" title="Checkout connection is coming next">{c.cart}<small>soon</small></span>
  </nav>
 </div></header>;
}
