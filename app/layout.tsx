import './globals.css';
import type { Metadata } from 'next';
import { SITE_URL } from '../config/free-sections';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Sectionary — 30 React + Tailwind Landing Page Sections',
  description: 'Preview 30 polished React and Tailwind CSS landing-page sections and five complete templates. Copy four sections free or unlock the full pack.',
  openGraph: {
    title: 'Sectionary — React + Tailwind Section Pack',
    description: '30 responsive sections, five page templates, live themes, and copy-ready React code.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Sectionary',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Sectionary React and Tailwind landing-page section pack' }],
  },
  twitter: { card: 'summary_large_image', title: 'Sectionary — React + Tailwind Section Pack', description: '30 responsive sections and five complete page templates.', images: ['/opengraph-image'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
