# Section catalog

Every component is exported from `components/sections.tsx`. Each export has a standalone TypeScript interface and accepts `className?: string`, defaulting to an empty string. Content shown in the preview is the built-in default content.

| Component | Category | Props | Preview notes |
|---|---|---|---|
| `HeroAurora` | Hero | `HeroAuroraProps` | Dark aurora treatment; centered actions stack at 360px. |
| `HeroEditorial` | Hero | `HeroEditorialProps` | Editorial split; artwork moves below copy on smaller screens. |
| `HeroDashboard` | Hero | `HeroDashboardProps` | SaaS hero with responsive dashboard mockup. |
| `HeroSplit` | Hero | `HeroSplitProps` | Bold split composition; becomes a vertical layout below desktop. |
| `HeroMinimal` | Hero | `HeroMinimalProps` | Minimal finance hero with responsive metric grid. |
| `FeaturesBento` | Features | `FeaturesBentoProps` | Dark bento grid; featured cards span columns from tablet upward. |
| `FeaturesCards` | Features | `FeaturesCardsProps` | Three editorial cards; one column at 360px. |
| `FeaturesSteps` | Features | `FeaturesStepsProps` | Three-step flow; connector appears at tablet width. |
| `FeaturesList` | Features | `FeaturesListProps` | Visual-and-list split; stacks before desktop. |
| `PricingSimple` | Pricing | `PricingSimpleProps` | Three pricing cards; highlighted middle tier. |
| `PricingDark` | Pricing | `PricingDarkProps` | Two-tier inverse pricing panel. |
| `PricingComparison` | Pricing | `PricingComparisonProps` | Comparison table with horizontal scrolling on narrow screens. |
| `PricingToggle` | Pricing | `PricingToggleProps` | Three tiers with annual/monthly visual selector. |
| `TestimonialsSpotlight` | Testimonials | `TestimonialsSpotlightProps` | Large single quote optimized for campaign pages. |
| `TestimonialsGrid` | Testimonials | `TestimonialsGridProps` | Three customer cards; featured center card. |
| `TestimonialsWall` | Testimonials | `TestimonialsWallProps` | Four compact quotes in an inverse grid. |
| `FAQAccordion` | FAQ | `FAQAccordionProps` | Native keyboard-accessible `details` accordions. |
| `FAQSplit` | FAQ | `FAQSplitProps` | Editorial intro beside a six-question grid. |
| `FAQDark` | FAQ | `FAQDarkProps` | Compact inverse accordion with contact action. |
| `CTAGradient` | CTA | `CTAGradientProps` | Rounded gradient campaign banner. |
| `CTAInline` | CTA | `CTAInlineProps` | Inline email capture; controls stack at 360px. |
| `CTAMinimal` | CTA | `CTAMinimalProps` | Minimal inverse statement and text action. |
| `FooterMega` | Footer | `FooterMegaProps` | Multi-column product footer; links collapse responsively. |
| `FooterNewsletter` | Footer | `FooterNewsletterProps` | Editorial newsletter form and link columns. |
| `FooterCompact` | Footer | `FooterCompactProps` | Compact single-row footer that stacks on mobile. |
| `NavbarClassic` | Navbar | `NavbarClassicProps` | Product navigation; secondary links hide below tablet. |
| `NavbarCentered` | Navbar | `NavbarCenteredProps` | Centered editorial brand navigation. |
| `NavbarPill` | Navbar | `NavbarPillProps` | Floating pill navigation with mobile-safe primary action. |
| `LogoCloudMono` | Logo cloud | `LogoCloudMonoProps` | Text-based monochrome logo grid. |
| `LogoCloudCards` | Logo cloud | `LogoCloudCardsProps` | Inverse logo cards from two to six columns. |

## Shared prop pattern

```ts
export interface HeroAuroraProps {
  className?: string;
}
```

Use `className` for layout context such as a border, anchor scroll margin, or page-specific spacing. Keep brand colors semantic and controlled by the page theme.
