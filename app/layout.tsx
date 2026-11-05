import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anamika Consultants | Vedic Astro Science & Life Guidance',
  description:
    'Traditional Vedic astro science, manual chart reading and practical life guidance from Anamika Consultants. Appointment-based consultations by phone, online or in Electronic City.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
