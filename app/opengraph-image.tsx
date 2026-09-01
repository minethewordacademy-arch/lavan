import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', height: '100%', width: '100%', backgroundColor: '#113F58', color: '#ffffff', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: 60, fontWeight: 'bold' }}>
        <span>Lavan Solar Systems</span>
        <span style={{ color: '#C59833', fontSize: 30 }}>Powered by the Sun. Perfected by Lavan.</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}