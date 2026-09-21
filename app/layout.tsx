import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import './experience.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: { default: 'La Vatra — Objects for inner life & cultural memory', template: '%s — La Vatra' },
  description: 'Poetic digital and printable products rooted in warmth, ritual, Romanian and Eastern European cultural memory.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${display.variable} ${body.variable}`}><Header /><main>{children}</main><Footer /></body></html>;
}
