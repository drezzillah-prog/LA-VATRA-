'use client';
import {useMemo,useState} from 'react';
import ProductCard from './ProductCard';
import type {Product,RegionKey,RoomKey} from '@/data/catalog';

const top=[
 ['All','all'],['New','new'],['Bestsellers','best'],['Gifts','gift'],['Family Memory','family'],['Planners','planner'],['Seasonal','seasonal'],['Bundles','bundle']
] as const;
const roomTabs:[string,RoomKey|'all'][]=[['All rooms','all'],['Cuhnia','cuhnia'],['Iatacul','iatacul'],['Cămara','camara'],['Casa Mare','casa-mare'],['Șura','sura']];

export default function ShopBrowser({products,region}:{products:Product[];region:RegionKey}){
 const [focus,setFocus]=useState('all'); const [room,setRoom]=useState<RoomKey|'all'>('all'); const [query,setQuery]=useState(''); const [sort,setSort]=useState('featured');
 const visible=useMemo(()=>{
  let list=products.filter(p=>room==='all'||p.room===room);
  if(focus==='new') list=list.filter(p=>p.isNew);
  if(focus==='best') list=list.filter(p=>p.bestseller);
  if(focus==='gift') list=list.filter(p=>p.tags.includes('gift'));
  if(focus==='family') list=list.filter(p=>p.tags.includes('family-memory'));
  if(focus==='planner') list=list.filter(p=>p.tags.includes('planner'));
  if(focus==='seasonal') list=list.filter(p=>p.tags.includes('seasonal'));
  if(focus==='bundle') list=list.filter(p=>p.bundle);
  if(query.trim()){const q=query.toLowerCase();list=list.filter(p=>(p.title+' '+p.subtitle+' '+p.tags.join(' ')).toLowerCase().includes(q))}
  const price=(p:Product)=>p.price[region];
  return [...list].sort((a,b)=>sort==='price-low'?price(a)-price(b):sort==='price-high'?price(b)-price(a):sort==='new'?Number(b.isNew)-Number(a.isNew):Number(b.featured)-Number(a.featured));
 },[products,region,focus,room,query,sort]);
 return <div className="shop-browser">
  <div className="filter-row filter-row--primary">{top.map(([label,key])=><button key={key} onClick={()=>setFocus(key)} className={focus===key?'filter-chip active':'filter-chip'}>{label}</button>)}</div>
  <div className="filter-row filter-row--rooms">{roomTabs.map(([label,key])=><button key={key} onClick={()=>setRoom(key)} className={room===key?'filter-chip room active':'filter-chip room'}>{label}</button>)}</div>
  <div className="shop-tools"><label className="shop-search"><span>Search</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="grandma, diaspora, planner, photographs…"/></label><label className="shop-sort"><span>Sort</span><select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="new">Newest</option><option value="price-low">Price · low to high</option><option value="price-high">Price · high to low</option></select></label><b>{visible.length} objects</b></div>
  <div className="product-grid product-grid--shop">{visible.map(p=><ProductCard key={p.slug} product={p} region={region}/>)}</div>
 </div>;
}
