import type {Metadata} from 'next';
import './globals.css';import './experience.css';import './eastern.css';import './reborn.css';import './rooms-real.css';import './final-vatra.css';
import Header from '@/components/Header';import Footer from '@/components/Footer';import RoomNav from '@/components/RoomNav';
import {getRequestContext} from '@/lib/localization';

export const metadata:Metadata={title:{default:'La Vatra — Keep it while someone still remembers',template:'%s — La Vatra'},description:'Family memory archives, journals, planners and printable objects rooted in Romanian and Eastern European cultural memory.'};

export default async function RootLayout({children}:{children:React.ReactNode}){
 const ctx=await getRequestContext();
 const regionLabel=ctx.region==='ro'?'RO · RON':ctx.region==='eu'?'EU · EUR':'US/INTL · USD';
 return <html lang={ctx.language} suppressHydrationWarning><body><Header language={ctx.language} regionLabel={regionLabel}/><RoomNav/><main>{children}</main><Footer/></body></html>;
}
