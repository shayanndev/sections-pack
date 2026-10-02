import { ImageResponse } from 'next/og';

export const alt = 'Sectionary React and Tailwind landing-page section pack';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, color: '#ffffff', background: 'linear-gradient(135deg, #09090b 0%, #312e81 55%, #c026d3 100%)', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 30, fontWeight: 800 }}><div style={{ width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 14, background: '#4f46e5' }}>S</div>Sectionary</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}><div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 900, letterSpacing: '-0.05em', maxWidth: 980 }}>Build the page you pictured.</div><div style={{ marginTop: 28, fontSize: 28, color: '#e4e4e7' }}>30 React + Tailwind sections · 5 complete page templates</div></div>
      <div style={{ display: 'flex', gap: 16, fontSize: 22 }}><span style={{ padding: '12px 20px', borderRadius: 999, background: '#ffffff', color: '#18181b', fontWeight: 700 }}>4 sections free</span><span style={{ padding: '12px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,.35)' }}>Responsive · Accessible · Themeable</span></div>
    </div>,
    size,
  );
}
