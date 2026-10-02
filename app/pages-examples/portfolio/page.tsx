import type { Metadata } from 'next';
import { CTAInline, FeaturesList, FooterCompact, HeroMinimal, LogoCloudMono, NavbarPill, TestimonialsWall } from '../../../components/sections';

export const metadata: Metadata = { title: 'Portfolio Landing Page | Sectionary Example', description: 'A complete portfolio landing page assembled from Sectionary components.' };

export default function PortfolioExamplePage() {
  return <main data-theme="mono" className="min-h-screen bg-canvas text-ink">
    <NavbarPill />
    <HeroMinimal />
    <LogoCloudMono />
    <FeaturesList />
    <TestimonialsWall />
    <CTAInline />
    <FooterCompact />
  </main>;
}
