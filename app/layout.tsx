import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Nav } from '@/components/layout/Nav';
import { OutcomeTicker } from '@/components/layout/OutcomeTicker';
import { Footer } from '@/components/layout/Footer';
import { ChatProvider } from '@/components/chat/ChatProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const viewport: Viewport = {
  themeColor: '#3250f0',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tekguyz.com'),
  title: {
    default: 'TEKGUYZ — Professional Platforms, Portals & AI for Business',
    template: '%s · TEKGUYZ'
  },
  description: 'We build the digital platforms, secure portals, and AI systems that help South Florida businesses run better. No templates. No jargon. Just engineering that solves real problems.',
  keywords: ['engineering firm South Florida','AI web application development','custom software development','Next.js agency','React TypeScript development','business automation'],
  authors: [{ name: 'TEKGUYZ', url: 'https://tekguyz.com' }],
  appleWebApp: {
    title: 'TEKGUYZ',
    statusBarStyle: 'default',
    capable: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tekguyz.com',
    siteName: 'TEKGUYZ',
    title: 'TEKGUYZ — Professional Platforms, Portals & AI for Business',
    description: 'We build the digital platforms, secure portals, and AI systems that help South Florida businesses run better. No templates. No jargon. Just engineering that solves real problems.',
    images: [
      {
        url: 'https://tekguyz.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'TEKGUYZ — Professional Platforms, Portals & AI for Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEKGUYZ — Professional Platforms, Portals & AI for Business',
    description: 'We build the digital platforms, secure portals, and AI systems that help South Florida businesses run better. No templates. No jargon. Just engineering that solves real problems.',
    images: ['https://tekguyz.com/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tekguyz.com' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'dark';
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <Nav />
          <OutcomeTicker />
          <main id="main-content">{children}</main>
          <Footer />
          <ChatProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}