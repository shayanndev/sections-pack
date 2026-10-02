import fs from 'node:fs';
import path from 'node:path';
import PreviewGallery from '../components/preview-gallery';
import { isFreeSection } from '../config/free-sections';

const catalog: Array<[string, string]> = [
  ['HeroAurora','Heroes'],['HeroEditorial','Heroes'],['HeroDashboard','Heroes'],['HeroSplit','Heroes'],['HeroMinimal','Heroes'],
  ['FeaturesBento','Features'],['FeaturesCards','Features'],['FeaturesSteps','Features'],['FeaturesList','Features'],
  ['PricingSimple','Pricing'],['PricingDark','Pricing'],['PricingComparison','Pricing'],['PricingToggle','Pricing'],
  ['TestimonialsSpotlight','Testimonials'],['TestimonialsGrid','Testimonials'],['TestimonialsWall','Testimonials'],
  ['FAQAccordion','FAQ'],['FAQSplit','FAQ'],['FAQDark','FAQ'],
  ['CTAGradient','CTA'],['CTAInline','CTA'],['CTAMinimal','CTA'],
  ['FooterMega','Footers'],['FooterNewsletter','Footers'],['FooterCompact','Footers'],
  ['NavbarClassic','Navbars'],['NavbarCentered','Navbars'],['NavbarPill','Navbars'],
  ['LogoCloudMono','Logo Clouds'],['LogoCloudCards','Logo Clouds']
];

export default function Page() {
  const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';
  const source = fs.readFileSync(path.join(process.cwd(),'components','sections.tsx'),'utf8');
  const entries = catalog.map(([name,category]) => {
    const canCopy = !demoMode || isFreeSection(name);
    const start = canCopy ? source.indexOf(`export interface ${name}Props`) : -1;
    const next = canCopy ? source.indexOf('\nexport interface ', start + 1) : -1;
    const code = canCopy ? source.slice(start, next === -1 ? source.length : next).trim() : '';
    return { name, category, code, locked: demoMode && !isFreeSection(name) };
  });
  return <PreviewGallery entries={entries} demoMode={demoMode}/>;
}
