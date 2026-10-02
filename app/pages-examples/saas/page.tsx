import type { Metadata } from 'next';
import { CTAInline, FAQAccordion, FeaturesBento, FooterMega, HeroDashboard, LogoCloudMono, NavbarClassic, PricingToggle, TestimonialsGrid } from '../../../components/sections';

export const metadata: Metadata = { title: 'SaaS Landing Page | Sectionary Example', description: 'A complete SaaS landing page assembled from Sectionary components.' };

export default function SaaSExamplePage() {
  return <main data-theme="indigo" className="min-h-screen bg-canvas text-ink">
    <NavbarClassic />
    <HeroDashboard />
    <LogoCloudMono />
    <FeaturesBento />
    <PricingToggle />
    <TestimonialsGrid />
    <FAQAccordion />
    <CTAInline />
    <FooterMega />
  </main>;
}
