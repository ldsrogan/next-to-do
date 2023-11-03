import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/ui/global.scss';

export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next To Do List',
  description: 'Simple to do app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
