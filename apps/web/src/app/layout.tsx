import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { ModeToggle, ThemeProvider } from 'ui';

export const metadata: Metadata = {
  title: 'Koworker - The best coworking space in the world',
  description: 'Koworker is the best coworking space in the world',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
