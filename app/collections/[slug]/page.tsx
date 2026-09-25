import {redirect,notFound} from 'next/navigation';import {legacyCollectionToRoom} from '@/data/catalog';
export default async function LegacyCollection({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const room=legacyCollectionToRoom[slug];if(!room)notFound();redirect('/rooms/'+room);}
