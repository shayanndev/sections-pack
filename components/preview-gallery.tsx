'use client';

import { useEffect, useRef, useState } from 'react';
import * as Sections from './sections';

type Entry = { name: keyof typeof Sections; category: string; code: string };

function ResponsivePreview({ name, device }: { name: string; device: 'desktop'|'mobile' }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const mobileViewportHeight = 780;
  const [height, setHeight] = useState(device === 'mobile' ? mobileViewportHeight : 360);

  useEffect(() => {
    const iframe = frame.current;
    if (!iframe) return;
    let observer: ResizeObserver | undefined;
    setHeight(device === 'mobile' ? mobileViewportHeight : 360);

    const measure = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;
      const root = doc.body.querySelector<HTMLElement>('section, header, footer');
      if (!root) return;
      const update = () => {
        const nextHeight = Math.ceil(root.getBoundingClientRect().height);
        if (nextHeight > 0) {
          setHeight(device === 'mobile' ? Math.min(nextHeight, mobileViewportHeight) : nextHeight);
        }
      };
      update();
      observer?.disconnect();
      observer = new ResizeObserver(update);
      observer.observe(root);
    };

    iframe.addEventListener('load', measure);
    if (iframe.contentDocument?.readyState === 'complete') measure();
    return () => { iframe.removeEventListener('load', measure); observer?.disconnect(); };
  }, [name, device]);

  return <iframe ref={frame} src={`/preview/${name}`} title={`${name} ${device} preview`} scrolling={device === 'mobile' ? 'auto' : 'no'} className="block w-full border-0 bg-white" style={{height}}/>;
}

export default function PreviewGallery({ entries }: { entries: Entry[] }) {
  const [device, setDevice] = useState<'desktop'|'mobile'>('desktop');
  const [copied, setCopied] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(entries.map(x => x.category)))];
  const visible = filter === 'All' ? entries : entries.filter(x => x.category === filter);

  async function copy(name: string, code: string) {
    await navigator.clipboard.writeText(code);
    setCopied(name);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return <main className="min-h-screen bg-zinc-100">
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
        <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 font-black text-white">S</span><div><h1 className="font-black leading-none">Sectionary</h1><p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-400">React + Tailwind</p></div></div>
        <div className="flex rounded-lg bg-zinc-100 p-1"><button aria-label="Desktop preview" onClick={()=>setDevice('desktop')} className={`rounded-md px-3 py-2 text-xs font-bold ${device==='desktop'?'bg-white shadow-sm':'text-zinc-500'}`}>▰ <span className="hidden sm:inline">Desktop</span></button><button aria-label="Mobile preview" onClick={()=>setDevice('mobile')} className={`rounded-md px-3 py-2 text-xs font-bold ${device==='mobile'?'bg-white shadow-sm':'text-zinc-500'}`}>▯ <span className="hidden sm:inline">Mobile</span></button></div>
      </div>
    </header>
    <div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6">
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-sm font-bold text-indigo-600">30 COPY-READY SECTIONS</p><h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Build the page you pictured.</h2><p className="mt-3 max-w-2xl text-zinc-500">Polished, responsive landing page sections. No component kits, no custom dependencies—just React and Tailwind.</p></div><div className="flex max-w-full gap-2 overflow-x-auto pb-2">{categories.map(x=><button key={x} onClick={()=>setFilter(x)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${filter===x?'bg-zinc-950 text-white':'border border-zinc-200 bg-white'}`}>{x}</button>)}</div></div>
      <div className="space-y-12">{visible.map(({name,category,code},index)=>{ return <article key={name} id={name} className="scroll-mt-24"><div className="mb-3 flex items-center justify-between gap-3"><div className="min-w-0"><span className="mr-2 font-mono text-xs text-zinc-400 sm:mr-3">{String(index+1).padStart(2,'0')}</span><span className="text-sm font-bold sm:text-base">{name.replace(/([a-z])([A-Z])/g,'$1 $2')}</span><span className="ml-3 hidden rounded-full bg-zinc-200 px-2 py-1 text-[10px] font-bold uppercase text-zinc-500 sm:inline">{category}</span></div><button onClick={()=>copy(name,code)} className="shrink-0 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-bold shadow-sm transition hover:border-zinc-400">{copied===name?'✓ Copied':'Copy code'}</button></div><div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-200 p-2 shadow-sm"><div className={`mx-auto overflow-hidden rounded-xl bg-white transition-[width] duration-300 ${device==='mobile'?'w-[390px] max-w-full':'w-full'}`}><ResponsivePreview name={name} device={device}/></div></div></article>})}</div>
    </div>
  </main>;
}
