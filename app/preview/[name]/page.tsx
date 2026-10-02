import { notFound } from 'next/navigation';
import * as Sections from '../../../components/sections';
import { isFreeSection } from '../../../config/free-sections';

export default async function SectionPreview({ params, searchParams }: { params: Promise<{ name: string }>; searchParams: Promise<{ theme?: string; mode?: string }> }) {
  const { name } = await params;
  if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true' && !isFreeSection(name)) notFound();
  const query = await searchParams;
  const Component = Sections[name as keyof typeof Sections];
  if (!Component) notFound();
  const theme = ['indigo', 'emerald', 'rose', 'mono'].includes(query.theme ?? '') ? query.theme : 'indigo';
  return <div data-theme={theme} className={query.mode === 'dark' ? 'dark' : ''}><Component /></div>;
}
