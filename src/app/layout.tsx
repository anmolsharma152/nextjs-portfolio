import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

// Components
import Navigation from '@/components/Navigation';
import { Toaster } from '@/components/ui/Toaster';
import { ThemeProvider } from '@/context/ThemeContext';

// Load Inter font with specific subsets
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Anmol Sharma',
  description: 'Portfolio of Anmol Sharma, Data Scientist and Machine Learning Engineer',
  metadataBase: new URL('https://anmolsharma152.vercel.app'),
  other: {
    'msapplication-TileColor': '#3b82f6',
  },
  openGraph: {
    title: 'Anmol Sharma | Portfolio',
    description: 'Portfolio of Anmol Sharma, Data Scientist and Machine Learning Engineer',
    url: 'https://anmolsharma152.vercel.app',
    siteName: 'Anmol Sharma',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anmol Sharma | Portfolio',
    description: 'Portfolio of Anmol Sharma, Data Scientist and Machine Learning Engineer',
  },
};

// Apply the font variable to the HTML element
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
