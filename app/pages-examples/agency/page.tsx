import type { Metadata } from 'next';
import { CTAMinimal, FAQSplit, FeaturesCards, FooterNewsletter, HeroEditorial, LogoCloudCards, NavbarCentered, PricingDark, TestimonialsSpotlight } from '../../../components/sections';

export const metadata: Metadata = { title: 'Agency Landing Page | Sectionary Example', description: 'A complete creative-agency landing page assembled from Sectionary components.' };

export default function AgencyExamplePage() {
  return <main data-theme="rose" className="min-h-screen bg-canvas text-ink">
    <NavbarCentered />
    <HeroEditorial />
    <LogoCloudCards />
    <FeaturesCards />
    <TestimonialsSpotlight />
    <PricingDark />
    <FAQSplit />
    <CTAMinimal />
    <FooterNewsletter />
  </main>;
}
