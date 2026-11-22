import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Global Presentation | Professional AV, Display & Signage Solutions',
    template: '%s | Global Presentation',
  },
  description:
    'Professional Audio Visual, Display and Signage solutions for government, defence, education, institutional and enterprise environments. Based in Jaipur, Rajasthan.',
  keywords: [
    'Audio Visual Solutions Jaipur',
    'AV Solutions Jaipur',
    'AV Integrator Jaipur',
    'Display Solutions Jaipur',
    'LED Video Wall Jaipur',
    'Digital Signage Jaipur',
    'Video Conferencing Solutions Jaipur',
    'Smart Classroom Solutions Jaipur',
    'Government AV Solutions India',
  ],
  authors: [{ name: 'Global Presentation' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/brand/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
