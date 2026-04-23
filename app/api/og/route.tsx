import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Black Diamond Cleaning Solutions'
  const subtitle =
    searchParams.get('subtitle') ?? 'Professional House Cleaning in PA & NY'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#0B1220',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 80px',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Diagonal accent shape */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '420px',
            height: '420px',
            backgroundColor: '#1E6FD9',
            opacity: 0.12,
            transform: 'rotate(45deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
            width: '200px',
            height: '200px',
            backgroundColor: '#1E6FD9',
            opacity: 0.08,
            transform: 'rotate(45deg)',
          }}
        />

        {/* Top: logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', zIndex: 1 }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#1E6FD9',
              transform: 'rotate(45deg)',
              borderRadius: '4px',
            }}
          />
          <span
            style={{
              color: '#1E6FD9',
              fontSize: '16px',
              fontWeight: 'bold',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Black Diamond Cleaning Solutions LLC
          </span>
        </div>

        {/* Center: main text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1 }}>
          <div
            style={{
              width: '72px',
              height: '5px',
              backgroundColor: '#1E6FD9',
              borderRadius: '3px',
            }}
          />
          <h1
            style={{
              color: 'white',
              fontSize: title.length > 40 ? '52px' : '64px',
              fontWeight: 'bold',
              lineHeight: '1.1',
              margin: 0,
              maxWidth: '900px',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: '26px',
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '20px',
              color: 'rgba(255,255,255,0.55)',
              fontSize: '16px',
              alignItems: 'center',
            }}
          >
            <span>⭐ 4.9 Google Rating</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
            <span>Licensed &amp; Insured</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
            <span>PA &amp; NY</span>
          </div>
          <div
            style={{
              backgroundColor: '#1E6FD9',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            (215) 650-3101
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
