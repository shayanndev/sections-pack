# Sectionary

Sectionary is a production-ready library of 30 responsive React and Tailwind CSS landing-page sections. It includes five complete page recipes, four live theme presets, light and dark modes, copy-ready source, and an interactive Next.js preview browser.

## What is included

- 5 heroes
- 4 feature sections
- 4 pricing sections
- 3 testimonial sections
- 3 FAQ sections
- 3 call-to-action sections
- 3 footers
- 3 navbars
- 2 logo clouds
- 5 complete page examples: SaaS, Agency, Portfolio, Mobile App, and Product Launch
- Indigo, Emerald, Rose, and Mono theme presets
- Light and dark color modes
- TypeScript props, responsive layouts, and accessible focus states

## Three-minute quick start

Requirements: Node.js 20 or newer and npm.

```bash
git clone https://github.com/shayanndev/sections-pack.git
cd sections-pack
npm install
npm run dev
```

Open `http://localhost:3000`. Use the category controls to browse sections, switch themes or color mode in the toolbar, and select **Copy code** on any section.

Useful routes:

- `/` — section browser
- `/pages-examples/saas`
- `/pages-examples/agency`
- `/pages-examples/portfolio`
- `/pages-examples/mobile-app`
- `/pages-examples/product-launch`

## Copy a section into an existing Next.js project

1. Confirm Tailwind CSS scans the folder where the component will live.
2. Copy the selected component and its adjacent `Props` interface from `components/sections.tsx` into a new `.tsx` file.
3. Copy the semantic color, font, and radius variables from `app/globals.css` into your global stylesheet.
4. Copy the semantic `theme.extend` entries from `tailwind.config.ts` into your Tailwind configuration.
5. Import and render the component.

```tsx
import { HeroAurora } from '@/components/HeroAurora';

export default function HomePage() {
  return <HeroAurora className="border-b border-line" />;
}
```

The sections do not import one another or rely on a component framework. Their only styling dependency is Tailwind CSS.

## Change the theme

All brand values live in `app/globals.css`. Apply one preset to a page wrapper:

```tsx
export default function Page() {
  return <main data-theme="emerald" className="bg-canvas text-ink">
    {/* sections */}
  </main>;
}
```

Available presets are `indigo`, `emerald`, `rose`, and `mono`. Add `className="dark"` to the same wrapper for dark mode.

To create a brand preset, duplicate one `[data-theme='…']` block in `app/globals.css` and change only its CSS variable values. Do not replace semantic classes such as `bg-brand`, `text-ink`, or `border-line` inside components.

## Deploy to Vercel

1. Push the project to a Git provider supported by Vercel.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as **Next.js**.
4. Leave the build command as `npm run build` and deploy.

For a CLI deployment:

```bash
npx vercel
```

Before release, run:

```bash
npm run lint
npm run build
```

## Documentation

- [Section catalog](./SECTIONS.md)
- [AI prompt guide](./AI-PROMPT-GUIDE.md)
- [License](./LICENSE.md)
- [Changelog](./CHANGELOG.md)
