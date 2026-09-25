'use client';
import {useMemo,useState} from 'react';
import ProductCard from './ProductCard';
import type {Product,RegionKey} from '@/data/catalog';

function match(product:Product,filter:string){
 const f=filter.toLowerCase();
 if(f==='all') return true;
 const map:Record<string,string[]>={
  'recipes':['recipes'],'family':['family-memory'],'letters':['letters'],'rituals':['ritual'],'seasonal':['seasonal'],'gifts':['gift'],
  'journals':['journal'],'dream & symbol':['dream','symbol'],'cards':['cards'],'wallpapers':['wallpaper'],
  'planners':['planner'],'weekly':['weekly'],'home':['home'],'2027':['2027'],'undated':['undated'],'bundles':['bundle'],
  'family archives':['family-memory'],'grandparents':['grandparents'],'photographs':['photographs'],'voices':['voices'],'diaspora':['diaspora'],'wedding':['wedding'],'children':['children'],
  'calendars':['calendar'],'places':['places'],'heritage':['heritage'],'wall art':['wall-art']
 };
 const tags=map[f]||[f];
 return tags.some(tag=>product.tags.includes(tag)||(tag==='bundle'&&product.bundle));
}

export default function RoomShelf({products,filters,region}:{products:Product[];filters:readonly string[];region:RegionKey}){
 const [active,setActive]=useState('All');
 const visible=useMemo(()=>products.filter(p=>match(p,active)),[products,active]);
 return <><div className="filter-row room-subtabs">{filters.map(f=><button key={f} className={active===f?'filter-chip active':'filter-chip'} onClick={()=>setActive(f)}>{f}</button>)}</div><div className="product-grid product-grid--shop">{visible.map(p=><ProductCard key={p.slug} product={p} region={region}/>)}</div></>;
}
