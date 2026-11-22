import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Professional AV, Display & Signage Solutions | Global Presentation',
  description: 'Integrated technology solutions for enterprises, education, healthcare and institutions — from project planning and procurement to installation and commissioning.',
};

export default function HomePage() {
  return <HomeClient />;
}
