'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GUMROAD_URL, TOTAL_SECTIONS } from '../config/free-sections';

type Entry = { name: string; category: string; code: string; locked: boolean };
type ThemeName = 'indigo' | 'emerald' | 'rose' | 'mono';
type ColorMode = 'light' | 'dark';

function ResponsivePreview({ name, device, theme, mode }: { name: string; device: 'desktop' | 'mobile'; theme: ThemeName; mode: ColorMode }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const mobileViewportHeight = 780;
  const [height, setHeight] = useState(device === 'mobile' ? mobileViewportHeight : 360);

  useEffect(() => {
    const iframe = frame.current;
    if (!iframe) return;
    let observer: ResizeObserver | undefined;
    setHeight(device === 'mobile' ? mobileViewportHeight : 360);

    const measure = () => {
      const root = iframe.contentDocument?.body.querySelector<HTMLElement>('section, header, footer');
      if (!root) return;
      const update = () => {
        const nextHeight = Math.ceil(root.getBoundingClientRect().height);
        if (nextHeight > 0) setHeight(device === 'mobile' ? Math.min(nextHeight, mobileViewportHeight) : nextHeight);
      };
      update();
      observer?.disconnect();
      observer = new ResizeObserver(update);
      observer.observe(root);
    };

    iframe.addEventListener('load', measure);
    if (iframe.contentDocument?.readyState === 'complete') measure();
    return () => { iframe.removeEventListener('load', measure); observer?.disconnect(); };
  }, [name, device, theme, mode]);

  return <iframe ref={frame} src={`/preview/${name}?theme=${theme}&mode=${mode}`} title={`${name} ${device} preview`} scrolling={device === 'mobile' ? 'auto' : 'no'} className="block w-full border-0 bg-surface" style={{ height }} />;
}

export default function PreviewGallery({ entries, demoMode }: { entries: Entry[]; demoMode: boolean }) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');
  const [theme, setTheme] = useState<ThemeName>('indigo');
  const [mode, setMode] = useState<ColorMode>('light');
  const categories = ['All', ...Array.from(new Set(entries.map((entry) => entry.category)))];
  const visible = filter === 'All' ? entries : entries.filter((entry) => entry.category === filter);

  async function copy(name: string, code: string) {
    await navigator.clipboard.writeText(code);
    setCopied(name);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return <main data-theme={theme} className={`${mode === 'dark' ? 'dark' : ''} min-h-screen bg-surface-muted text-ink`}>
    <div className="sticky top-0 z-50">
    {demoMode && <aside className="flex min-h-12 items-center justify-center gap-3 bg-inverse px-4 py-2 text-center text-xs font-semibold text-inverse-text sm:text-sm"><span>4 free sections to copy. Full pack: {TOTAL_SECTIONS} sections + 5 page templates, $24</span><a href={GUMROAD_URL} target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-brand px-4 py-2 font-bold text-on-brand">Get the full pack</a></aside>}
    <header className="border-b border-line bg-surface/90 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3"><span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand font-black text-on-brand">S</span><div><h1 className="font-black leading-none">Sectionary</h1><p className="mt-1 text-[10px] uppercase tracking-widest text-subtle">React + Tailwind</p></div></div>
        <div className="flex items-center gap-2">
          <label className="sr-only" htmlFor="theme-select">Theme preset</label>
          <select id="theme-select" value={theme} onChange={(event) => setTheme(event.target.value as ThemeName)} className="rounded-theme border border-line bg-surface px-3 py-2 text-xs font-bold text-ink"><option value="indigo">Indigo</option><option value="emerald">Emerald</option><option value="rose">Rose</option><option value="mono">Mono</option></select>
          <button type="button" aria-label={`Use ${mode === 'light' ? 'dark' : 'light'} mode`} onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className="rounded-theme border border-line bg-surface px-3 py-2 text-xs font-bold">{mode === 'light' ? 'Dark' : 'Light'}</button>
          <div className="hidden rounded-lg bg-surface-muted p-1 sm:flex"><button type="button" aria-label="Desktop preview" onClick={() => setDevice('desktop')} className={`rounded-md px-3 py-2 text-xs font-bold ${device === 'desktop' ? 'bg-surface shadow-sm' : 'text-muted'}`}>Desktop</button><button type="button" aria-label="Mobile preview" onClick={() => setDevice('mobile')} className={`rounded-md px-3 py-2 text-xs font-bold ${device === 'mobile' ? 'bg-surface shadow-sm' : 'text-muted'}`}>Mobile</button></div>
        </div>
      </div>
    </header>
    </div>
    <div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6">
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-sm font-bold text-brand">30 COPY-READY SECTIONS</p><h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Build the page you pictured.</h2><p className="mt-3 max-w-2xl text-muted">Polished, responsive landing page sections. No component kits, no custom dependencies—just React and Tailwind.</p></div><div className="flex max-w-full gap-2 overflow-x-auto pb-2" role="navigation" aria-label="Section categories">{categories.map((category) => <button type="button" key={category} onClick={() => setFilter(category)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${filter === category ? 'bg-brand text-on-brand' : 'border border-line bg-surface'}`}>{category}</button>)}</div></div>
      <div className="space-y-12">{visible.map(({ name, category, code, locked }, index) => <article key={name} id={name} className="scroll-mt-36"><div className="mb-3 flex items-center justify-between gap-3"><div className="min-w-0"><span className="mr-2 font-mono text-xs text-subtle sm:mr-3">{String(index + 1).padStart(2, '0')}</span><span className="text-sm font-bold sm:text-base">{name.replace(/([a-z])([A-Z])/g, '$1 $2')}</span><span className="ml-3 hidden rounded-full bg-line px-2 py-1 text-[10px] font-bold uppercase text-muted sm:inline">{category}</span></div>{locked ? <a href={GUMROAD_URL} target="_blank" rel="noreferrer" className="shrink-0 rounded-lg bg-brand px-3 py-2 text-xs font-bold text-on-brand shadow-sm transition hover:bg-brand-strong">Unlock the full pack</a> : <button type="button" onClick={() => copy(name, code)} className="shrink-0 rounded-lg border border-line bg-surface px-3 py-2 text-xs font-bold shadow-sm transition hover:border-brand">{copied === name ? 'Copied' : 'Copy code'}</button>}</div><div className="overflow-x-auto rounded-2xl border border-line bg-line p-2 shadow-sm"><div className={`relative mx-auto overflow-hidden rounded-xl bg-surface transition-[width] duration-300 ${device === 'mobile' ? 'w-[390px] max-w-full' : 'w-full'}`}>{locked ? <div className="relative aspect-video w-full overflow-hidden"><Image src={`/previews/${name}.png`} alt={`${name.replace(/([a-z])([A-Z])/g, '$1 $2')} section preview`} fill sizes="(max-width: 640px) 390px, 100vw" className="object-cover object-top" /></div> : <ResponsivePreview name={name} device={device} theme={theme} mode={mode} />}</div></div></article>)}</div>
    </div>
  </main>;
}
