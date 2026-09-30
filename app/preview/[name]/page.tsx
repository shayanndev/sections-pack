import { notFound } from 'next/navigation';
import * as Sections from '../../../components/sections';

export default async function SectionPreview({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const Component = Sections[name as keyof typeof Sections];
  if (!Component) notFound();
  return <Component/>;
}
