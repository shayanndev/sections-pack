import type { Metadata } from 'next';
import { CTAGradient, FAQDark, FeaturesBento, FeaturesSteps, FooterMega, HeroAurora, LogoCloudMono, NavbarPill, PricingSimple } from '../../../components/sections';

export const metadata: Metadata = { title: 'Mobile App Landing Page | Sectionary Example', description: 'A complete mobile-app landing page assembled from Sectionary components.' };

export default function MobileAppExamplePage() {
  return <main data-theme="emerald" className="min-h-screen bg-canvas text-ink">
    <NavbarPill />
    <HeroAurora />
    <LogoCloudMono />
    <FeaturesSteps />
    <FeaturesBento />
    <PricingSimple />
    <FAQDark />
    <CTAGradient />
    <FooterMega />
  </main>;
}
