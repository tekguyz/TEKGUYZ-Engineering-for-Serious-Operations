import { ImageResponse } from 'next/og';
import { projects } from '@/lib/projects';

export const runtime = 'edge';

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <div style={{ height: '100%', width: '100%', display: 'flex', backgroundColor: '#0A0A0A', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
          Project Not Found
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  const accentColor = project.accentHex;
  const darkBg = '#0A0A0A';

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
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Huge Faded Project Number */}
        <div
          style={{
            position: 'absolute',
            right: '-40px',
            top: '-40px',
            fontSize: '500px',
            fontWeight: 900,
            color: accentColor,
            opacity: 0.05,
            lineHeight: 1,
          }}
        >
          {project.number}
        </div>

        {/* Top Label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              border: `1px solid ${accentColor}`,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              fontSize: '14px',
              fontWeight: 700,
              color: accentColor,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Project {project.number}
          </div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Flagship Case Study
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, justifyContent: 'center' }}>
          <h1
            style={{
              fontSize: '84px',
              fontWeight: 800,
              margin: 0,
              letterSpacing: '-3px',
              lineHeight: 1,
              color: accentColor,
            }}
          >
            {project.name}
          </h1>
          <p
            style={{
              fontSize: '32px',
              fontWeight: 500,
              margin: 0,
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            {project.tagline}
          </p>
          
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            {project.stack.map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Branding */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Institutional Engineering
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: 'white', letterSpacing: '0.05em' }}>
              TEKGUYZ.COM
            </div>
          </div>

          {/* Small Glowing Hex-Sigil */}
          <div style={{ display: 'flex', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: accentColor,
                filter: 'blur(30px)',
                opacity: 0.3,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: accentColor }}
            >
              <path
                d="M7 2h10l5 10-5 10H7l-5-10 5-10z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <polyline
                points="7,10 9,12 7,14"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="17,10 15,12 17,14"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="10"
                y1="17"
                x2="14"
                y2="17"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
