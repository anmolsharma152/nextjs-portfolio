import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';
import './globals.css';

// Components
import Navigation from '@/components/Navigation';
import { Toaster } from '@/components/ui/Toaster';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Anmol Sharma — Autonomous AI Platforms & Duplex Voice Systems',
  description:
    'Engineering production-grade agentic platforms, sub-150ms voice pipelines, and edge intelligence daemons.',
  metadataBase: new URL('https://anmolsharma152.vercel.app'),
  other: {
    'msapplication-TileColor': '#2563eb',
  },
  openGraph: {
    title: 'Anmol Sharma — Autonomous AI Platforms & Duplex Voice Systems',
    description:
      'Engineering production-grade agentic platforms, sub-150ms voice pipelines, and edge intelligence daemons.',
    url: 'https://anmolsharma152.vercel.app',
    siteName: 'Anmol Sharma',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anmol Sharma — Autonomous AI Platforms & Duplex Voice Systems',
    description:
      'Engineering production-grade agentic platforms, sub-150ms voice pipelines, and edge intelligence daemons.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anmol Sharma',
  url: 'https://anmolsharma152.vercel.app',
  sameAs: ['https://github.com/anmolsharma152', 'https://www.linkedin.com/in/anmolsharma152/'],
  jobTitle: 'AI Systems Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Independent R&D',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Agentic RAG',
    'LangGraph',
    'Low-Latency Voice Systems',
    'WebAssembly',
    'FastAPI',
    'Python',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`light ${inter.variable} ${jakarta.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
