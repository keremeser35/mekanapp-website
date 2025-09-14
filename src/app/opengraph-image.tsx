import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #9333ea 100%)',
          color: '#fff',
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 28,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 56, fontWeight: 800 }}>mekanapp</div>
        </div>
        <div style={{ fontSize: 36, fontWeight: 700 }}>Dijital Loyalty Platformu</div>
        <div style={{ fontSize: 24, marginTop: 12, opacity: 0.9 }}>
          Şans çarkı • QR menü • Analytics
        </div>
      </div>
    ),
    size,
  )
}
