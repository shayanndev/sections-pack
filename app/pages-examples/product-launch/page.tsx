import type { Metadata } from 'next';
import { CTAInline, FAQAccordion, FeaturesCards, FooterCompact, HeroSplit, LogoCloudCards, NavbarClassic, PricingComparison, TestimonialsSpotlight } from '../../../components/sections';

export const metadata: Metadata = { title: 'Product Launch Landing Page | Sectionary Example', description: 'A complete product-launch landing page assembled from Sectionary components.' };

export default function ProductLaunchExamplePage() {
  return <main data-theme="rose" className="min-h-screen bg-canvas text-ink">
    <NavbarClassic />
    <HeroSplit />
    <LogoCloudCards />
    <FeaturesCards />
    <PricingComparison />
    <TestimonialsSpotlight />
    <FAQAccordion />
    <CTAInline />
    <FooterCompact />
  </main>;
}
