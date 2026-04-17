import { ImageResponse } from 'next/og'

export const alt = 'TEKGUYZ — Engineering for Serious Operations'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default async function Image() {
  const brandBlue = '#3250f0'
  const darkBg = '#0A0A14'
  const pillColor = '#A78BFA'
  const line2Color = '#818CF8'

  // 1. THIS IS THE FIX: Fetch the font so the Edge runtime doesn't crash
  const fontData = await fetch(
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGkyMZhrib2Bg-4.ttf'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: darkBg,
          padding: '60px 80px',
          color: '#FFFFFF',
          position: 'relative',
        }}
      >
        {/* Right side (35%): Faded text */}
        <div
          style={{
            position: 'absolute',
            right: '-100px',
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            fontSize: '220px',
            fontWeight: 900,
            color: 'rgba(255, 255, 255, 0.04)',
            display: 'flex',
          }}
        >
          TEKGUYZ
        </div>

        {/* Logo at Top Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '60px' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <polygon points="12 2, 21 7, 21 17, 12 22, 3 17, 3 7" stroke={brandBlue} strokeWidth="2" />
            <polyline points="9 10, 6 12, 9 14" stroke={brandBlue} strokeWidth="1.5" />
            <polyline points="15 10, 18 12, 15 14" stroke={brandBlue} strokeWidth="1.5" />
            <line x1="10" y1="17" x2="14" y2="17" stroke={brandBlue} strokeWidth="2" />
          </svg>
          <div style={{ display: 'flex', fontSize: '28px', fontWeight: 900, letterSpacing: '0.2em' }}>
            TEKGUYZ
          </div>
        </div>

        {/* Main Content Area (65%) */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '65%', flex: 1, justifyContent: 'center', gap: '32px' }}>
          
          {/* Availability Pill */}
          <div style={{ display: 'flex', padding: '8px 20px', borderRadius: '9999px', backgroundColor: 'rgba(167, 139, 250, 0.1)', border: `1px solid ${pillColor}`, width: 'fit-content' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: pillColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              SOUTH FLORIDA ENGINEERING FIRM
            </span>
          </div>

          {/* Headlines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '54px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.1, display: 'flex' }}>
              We engineer the systems
            </div>
            <div style={{ fontSize: '54px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.1, color: line2Color, display: 'flex' }}>
              that serious operations run on.
            </div>
          </div>

          {/* Stats */}
          <div style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.45)', fontWeight: 500, display: 'flex' }}>
            23 Live Systems · 5+ Years · South Florida
          </div>

          {/* Stack Badges */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {['React', 'Next.js', 'TypeScript', 'Supabase', 'Gemini AI'].map((tech) => (
              <div key={tech} style={{ padding: '6px 12px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '12px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', display: 'flex' }}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
        <div style={{ position: 'absolute', bottom: '40px', left: '80px', right: '80px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px', fontSize: '14px', fontWeight: 600 }}>
          <div style={{ color: 'rgba(255, 255, 255, 0.3)', display: 'flex' }}>tekguyz.com</div>
          <div style={{ color: 'rgba(255, 255, 255, 0.2)', display: 'flex' }}>Built with Next.js · Deployed on Netlify</div>
        </div>
      </div>
    ),
    { 
      ...size,
      // 2. THIS IS THE SECOND HALF OF THE FIX: Pass the font to Satori
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
          weight: 800,
        },
      ],
    }
  )
}