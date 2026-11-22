import { Metadata } from 'next';

const SITE_NAME = 'Global Presentation';
const SITE_URL = 'https://globalpresentation.in'; // [VERIFY] Update with actual domain
const DEFAULT_DESCRIPTION =
  'Professional Audio Visual, Display & Signage solutions for government, defence, education, institutional and enterprise environments. Based in Jaipur, Rajasthan.';

interface SeoParams {
  title: string;
  description?: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
}

export function generateMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = [],
  path = '',
  ogImage,
}: SeoParams): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  const defaultKeywords = [
    'Audio Visual Solutions Jaipur',
    'AV Solutions Jaipur',
    'Display Solutions Jaipur',
    'Digital Signage Jaipur',
    'Government AV Solutions India',
    'AV Integrator Jaipur',
    'LED Video Wall Jaipur',
    'Video Conferencing Solutions Jaipur',
    'Smart Classroom Solutions Jaipur',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: SITE_NAME }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
      // [VERIFY] Update with confirmed address
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    knowsAbout: [
      'Audio Visual Solutions',
      'Display Solutions',
      'Digital Signage',
      'Video Conferencing',
      'LED Video Walls',
      'Smart Classroom Solutions',
      'AV Integration',
      'Government Technology Solutions',
    ],
  };
}
