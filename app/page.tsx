import fs from 'node:fs';
import path from 'node:path';
import PreviewGallery from '../components/preview-gallery';
import * as Sections from '../components/sections';

const catalog: Array<[keyof typeof Sections, string]> = [
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
  const source = fs.readFileSync(path.join(process.cwd(),'components','sections.tsx'),'utf8');
  const entries = catalog.map(([name,category]) => {
    const start = source.indexOf(`export function ${name}()`);
    const next = source.indexOf('\nexport function ', start + 1);
    const code = source.slice(start, next === -1 ? source.length : next).trim();
    return { name, category, code };
  });
  return <PreviewGallery entries={entries}/>;
}
