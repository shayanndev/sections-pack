import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Sectionary — React + Tailwind sections', description: '30 polished landing page sections, ready to copy.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
