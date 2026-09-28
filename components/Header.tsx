'use client';
import Link from 'next/link';
import {useState} from 'react';
import BrandMark from './BrandMark';

type SiteLanguage='ro'|'en';
const navCopy={
 ro:{shop:'Magazin',gifts:'Cadouri',family:'Arhiva Familiei',bundles:'Pachete',story:'Poveste',faq:'Întrebări',search:'Caută',cart:'Coș'},
 en:{shop:'Shop',gifts:'Gifts',family:'Family Archive',bundles:'Bundles',story:'Our story',faq:'FAQ',search:'Search',cart:'Cart'}
};

export default function Header({language}:{language:SiteLanguage}){
 const [open,setOpen]=useState(false);
 const c=navCopy[language];
 const links=[[c.shop,'/shop'],[c.gifts,'/gifts'],[c.family,'/family-archive'],[c.bundles,'/bundles'],[c.story,'/about'],[c.faq,'/faq']] as const;
 return <header className="site-header"><div className="shell header-inner">
  <Link className="wordmark wordmark--floral" href="/" onClick={()=>setOpen(false)} aria-label="La Vatra home"><BrandMark compact/><span>LA VATRA</span></Link>
  <button className="menu-button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label="Toggle navigation"><span/><span/></button>
  <nav className={open?'nav nav--open':'nav'} aria-label="Main navigation">
   {links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}
   <Link href="/shop?focus=search" onClick={()=>setOpen(false)}>{c.search}</Link>
   <span className="cart-soon" title="Checkout connection is coming next">{c.cart}<small>soon</small></span>
  </nav>
 </div></header>;
}
