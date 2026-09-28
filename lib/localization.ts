import { headers } from 'next/headers';
import type { RegionKey } from '@/data/catalog';

const EUROPE=new Set(['AL','AD','AT','BY','BE','BA','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IS','IE','IT','XK','LV','LI','LT','LU','MT','MD','MC','ME','NL','MK','NO','PL','PT','SM','RS','SK','SI','ES','SE','CH','UA','GB','VA']);

export type SiteLanguage='ro'|'en';

export async function getRequestContext(){
 const h=await headers();
 const country=(h.get('x-vercel-ip-country')||h.get('cf-ipcountry')||'').toUpperCase();
 const language:SiteLanguage=country==='RO'?'ro':'en';
 let region:RegionKey='eu';
 if(country==='RO') region='ro';
 else if(country==='US') region='us';
 else if(country && !EUROPE.has(country)) region='us';
 const currency=region==='ro'?'RON':region==='eu'?'EUR':'USD';
 return {country,region,currency,language};
}

export function formatPrice(price:{ro:number;eu:number;us:number},region:RegionKey){
 if(region==='ro') return `${price.ro} RON`;
 if(region==='eu') return `€${price.eu}`;
 return `$${price.us}`;
}

export const navCopy={
 ro:{shop:'Magazin',gifts:'Cadouri',family:'Arhiva Familiei',bundles:'Pachete',story:'Poveste',faq:'Întrebări',search:'Caută',cart:'Coș'},
 en:{shop:'Shop',gifts:'Gifts',family:'Family Archive',bundles:'Bundles',story:'Our story',faq:'FAQ',search:'Search',cart:'Cart'}
};
