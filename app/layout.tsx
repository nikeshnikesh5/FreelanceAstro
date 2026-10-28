import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anamika – Astro science consultant',
  description: 'Astrology readings and practical guidance with Consultant Anamika.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
