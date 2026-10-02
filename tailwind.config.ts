import type { Config } from 'tailwindcss';
export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'rgb(var(--color-primary) / <alpha-value>)',
        'brand-strong': 'rgb(var(--color-primary-strong) / <alpha-value>)',
        'brand-soft': 'rgb(var(--color-primary-soft) / <alpha-value>)',
        'on-brand': 'rgb(var(--color-on-primary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-soft': 'rgb(var(--color-accent-soft) / <alpha-value>)',
        canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-muted': 'rgb(var(--color-surface-muted) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        subtle: 'rgb(var(--color-subtle) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        inverse: 'rgb(var(--color-inverse) / <alpha-value>)',
        'inverse-text': 'rgb(var(--color-inverse-text) / <alpha-value>)',
        'inverse-muted': 'rgb(var(--color-inverse-muted) / <alpha-value>)',
        'inverse-line': 'rgb(var(--color-inverse-line) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        theme: 'var(--radius)',
      },
    },
  },
  plugins: [],
} satisfies Config;
