import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Noviteq Brand Hub',
  description: 'The complete identity system and brand creation toolkit for Noviteq Solutions.',
  openGraph: {
    title: 'Noviteq Brand Hub',
    description: 'Clarity, built in. The complete Noviteq identity system and creation toolkit.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Noviteq Brand Hub — Clarity, built in.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noviteq Brand Hub',
    description: 'Clarity, built in. The complete Noviteq identity system and creation toolkit.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
