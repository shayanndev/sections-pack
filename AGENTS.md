# AGENTS.md

Instructions for AI coding tools working in this repository, including Cursor, Claude, Antigravity, Codex, and similar assistants.

## Project overview

Sectionary is a Next.js 16 and Tailwind CSS 3 component product. It contains 30 standalone landing-page sections, an interactive preview browser, five complete example pages, and product documentation.

## Folder structure

- `app/page.tsx` — loads section source and renders the main preview browser.
- `app/globals.css` — the single source of truth for all brand, color, typography, and radius tokens.
- `app/preview/[name]/page.tsx` — isolated iframe renderer used by the preview browser.
- `app/pages-examples/*/page.tsx` — complete landing pages composed only from existing sections.
- `components/sections.tsx` — all standalone section components and their prop interfaces.
- `components/preview-gallery.tsx` — preview controls, category filters, theme switcher, and responsive frames.
- `docs/` — setup, catalog, license, changelog, and AI prompt documentation.
- `tailwind.config.ts` — semantic Tailwind utilities mapped to CSS variables.

## Theming rules

1. Always use semantic theme utilities such as `bg-brand`, `text-ink`, `bg-surface`, `text-muted`, and `border-line`.
2. Never add Tailwind palette classes such as `bg-blue-600`, `text-zinc-900`, or `border-slate-200` inside a section.
3. Never add raw hex, RGB, HSL, or named brand colors inside a section.
4. Add or change brand values only in `app/globals.css`.
5. Preserve all four presets: `indigo`, `emerald`, `rose`, and `mono`.
6. Verify changes in both light and dark mode.
7. Use `text-on-brand` on solid brand backgrounds and tokenized inverse colors for deliberately dark compositions.

## Component conventions

1. Keep every section standalone. A section must not import another section or an internal UI component.
2. Use TypeScript and export a named `Props` interface immediately before each component.
3. Keep sensible default content so rendering a component without props produces a complete section.
4. Accept `className?: string` and append it to the root `section`, `header`, or `footer` element.
5. Preserve semantic HTML: `nav` for navigation, headings in logical order, `button` for actions, and native `details`/`summary` for FAQs.
6. Add accessible labels to inputs and icon-only controls. Preserve visible focus states.
7. Design mobile-first and verify at 360px, 768px, and 1280px.
8. Do not install a component library or runtime styling dependency.
9. Do not rewrite an existing section’s visual concept unless explicitly requested.
10. Run `npm run lint` and `npm run build` before declaring work complete.

## Example prompts

1. “Add the `PricingToggle` section to my page and match my brand colors by creating a new theme preset in `app/globals.css`.”
2. “Compose a conversion-focused SaaS page using only existing Sectionary components. Keep every section standalone and use the Indigo preset.”
3. “Customize `HeroEditorial` for a design agency while preserving its layout, semantic tokens, responsive behavior, and accessible heading structure.”
4. “Add one optional typed prop to `TestimonialsGrid` for a page-specific class name, keeping its built-in content as the default.”
5. “Audit this section at 360px, 768px, and 1280px and fix only responsive issues without changing the design.”

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
