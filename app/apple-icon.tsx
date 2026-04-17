import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
  const brandBlue = '#3250f0'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A14',
        }}
      >
        <svg width="150" height="150" viewBox="0 0 24 24" fill="none">
          <polygon 
            points="12 2, 21 7, 21 17, 12 22, 3 17, 3 7" 
            stroke={brandBlue} 
            strokeWidth="2" 
            strokeLinejoin="round"
          />
          <polyline 
            points="9 10, 6 12, 9 14" 
            stroke={brandBlue} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <polyline 
            points="15 10, 18 12, 15 14" 
            stroke={brandBlue} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <line 
            x1="10" 
            y1="17" 
            x2="14" 
            y2="17" 
            stroke={brandBlue} 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}