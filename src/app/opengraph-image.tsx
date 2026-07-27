import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Anmol Sharma — Autonomous AI Platforms & Duplex Voice Systems';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: '#2563eb',
            }}
          />
          <span
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: '#2563eb',
              letterSpacing: '-0.5px',
            }}
          >
            ANMOL SHARMA
          </span>
        </div>
        <h1
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-1.5px',
          }}
        >
          Architecting Autonomous AI Platforms &amp; Duplex Voice Systems
        </h1>
        <p
          style={{
            fontSize: 28,
            color: '#475569',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          Production-grade agentic platforms, sub-150ms speech pipelines, and edge intelligence.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
