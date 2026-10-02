export const FREE_SECTION_IDS = [
  'HeroAurora',
  'PricingSimple',
  'FAQAccordion',
  'CTAGradient',
] as const;

export type FreeSectionId = (typeof FREE_SECTION_IDS)[number];

export const GUMROAD_URL = process.env.NEXT_PUBLIC_GUMROAD_URL ?? 'https://gumroad.com/l/sections-pack';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sections-pack.vercel.app';
export const TOTAL_SECTIONS = 30;

export function isFreeSection(id: string): id is FreeSectionId {
  return FREE_SECTION_IDS.includes(id as FreeSectionId);
}
