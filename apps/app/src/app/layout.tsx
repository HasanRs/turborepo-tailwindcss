import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Lightbulb, MoonIcon } from 'lucide-react';
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic' to create Client Components
import { Button } from '@/components/ui/button';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/ToggleLightButton'), // Import your Client Component
  { ssr: false } // Set ssr to false to make it a Client Component
);

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='dark:bg-primary relative sticky top-0 z-10 py-2 backdrop-blur backdrop-filter dark:text-white'>
          <div className='container mx-auto flex items-center justify-end px-4'>
            <div className='flex items-center space-x-4'>
              {/* Use DynamicComponentWithNoSSR instead of Button */}
              <DynamicComponentWithNoSSR />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
