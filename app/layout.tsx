import type { Metadata } from 'next';
import { Forum, Literata } from 'next/font/google';
import './globals.css';
import './experience.css';
import './eastern.css';
import './reborn.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Forum({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  weight: '400',
});

const body = Literata({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: { default: 'La Vatra — Objects for inner life & cultural memory', template: '%s — La Vatra' },
  description: 'Poetic digital and printable products rooted in warmth, ritual, Romanian and Eastern European cultural memory.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${display.variable} ${body.variable}`}><Header /><main>{children}</main><Footer /></body></html>;
}
