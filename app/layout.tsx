import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Video Generation Capability',
  description: 'Clarity on AI video generation limits and practical alternatives.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-midnight text-slate-100 min-h-screen`}>{children}</body>
    </html>
  );
}
