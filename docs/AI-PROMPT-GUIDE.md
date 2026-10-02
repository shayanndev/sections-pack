# AI prompt guide

These prompts are written for coding assistants that can read and edit your project. Replace bracketed text with your details. Ask the assistant to read `AGENTS.md` before making changes.

## 1. Match your brand

```text
Read AGENTS.md. Create a new theme preset called [brand-name] using primary [color], accent [color], and a [warm/cool/neutral] surface palette. Change only the CSS variables in app/globals.css. Keep sufficient contrast in light and dark mode and do not add hard-coded colors to components.
```

## 2. Build a SaaS page

```text
Read AGENTS.md. Build a complete SaaS landing page using only the existing Sectionary components. Include a navbar, hero, logo cloud, features, pricing, testimonials, FAQ, CTA, and footer. Use the [theme] preset and do not create new section components.
```

## 3. Add pricing to an existing page

```text
Read AGENTS.md. Add PricingToggle below [existing section] on [route]. Preserve the existing page theme and spacing. Do not modify the pricing section design or introduce non-token colors.
```

## 4. Rewrite content for an industry

```text
Read AGENTS.md. Adapt the copy in [component name] for a [industry] company whose audience is [audience]. Keep the current markup, layout, theme utilities, responsive behavior, and approximate text lengths.
```

## 5. Create a campaign page

```text
Read AGENTS.md. Compose a focused product-launch page from existing sections only. Use one navbar, HeroSplit, one logo cloud, one features section, social proof, one CTA, and one footer. Use the Rose theme and keep the page concise.
```

## 6. Improve mobile behavior

```text
Read AGENTS.md. Audit [component or route] at 360px, 768px, and 1280px. Fix overflow, cramped spacing, tap-target, and text-wrapping issues without changing the established design. Run lint and build afterward.
```

## 7. Add typed customization

```text
Read AGENTS.md. Add optional typed props to [component] for [headline, description, CTA label, and CTA URL]. Keep the current content as defaults, keep the component standalone, and preserve its existing visual design.
```

## 8. Accessibility review

```text
Read AGENTS.md. Audit [component or route] for semantic headings, keyboard access, visible focus, form labels, contrast, and screen-reader names. Fix confirmed issues only and keep the visual design intact.
```

## 9. Create a dark-first page

```text
Read AGENTS.md. Create a new page route from existing sections and render it in dark mode with the [preset] theme. Choose section combinations that transition cleanly, and use only semantic theme tokens.
```

## 10. Prepare for deployment

```text
Read AGENTS.md. Audit the project for a Vercel production deployment. Check metadata, routes, TypeScript, ESLint, build output, and accidental secrets. Fix only verified issues, then run npm run lint and npm run build and summarize the result.
```

## Prompt-writing tips

- Name the exact component or route whenever possible.
- State whether copy, layout, theme, or behavior may change.
- Tell the assistant to preserve semantic tokens and standalone components.
- Include the three supported review widths: 360px, 768px, and 1280px.
- End implementation requests with “Run `npm run lint` and `npm run build`.”
