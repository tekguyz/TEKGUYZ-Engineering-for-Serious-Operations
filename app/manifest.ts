import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TEKGUYZ — Engineering for Serious Operations',
    short_name: 'TEKGUYZ',
    description: 'South Florida engineering firm. We build systems serious operations run on.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A14',
    theme_color: '#3250f0',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}