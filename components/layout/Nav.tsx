'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Logo } from '@/components/ui/Logo';

import { useScrollThreshold } from '@/hooks/useScrollThreshold';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useEscapeKey } from '@/hooks/useEscapeKey';

import { DesktopNav } from './nav/DesktopNav';
import { MobileMenu } from './nav/MobileMenu';
import { ThemeToggle } from './nav/ThemeToggle';

const LINKS = [
  { name: 'Work', href: '/#work', id: 'work' },
  { name: 'Services', href: '/#services', id: 'services' },
  { name: 'Contact', href: '/#contact', id: 'contact' },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const scrolled = useScrollThreshold(60);
  const activeSection = useActiveSection(LINKS.map(l => l.id));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useEscapeKey(() => setMobileMenuOpen(false), mobileMenuOpen);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-200 ease-in-out',
          scrolled
            ? 'border-b border-[var(--color-border)] bg-[var(--color-bg-transparent)] backdrop-blur-[24px] saturate-180'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            onClick={scrollToTop}
            className="group transition-opacity hover:opacity-80"
            aria-label="TEKGUYZ Home"
          >
            <Logo size={32} />
          </Link>

          {/* Center Zone (Desktop) */}
          <DesktopNav links={LINKS} activeSection={activeSection} />

          {/* Right Zone */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <MagneticButton>
              <Link
                href="/#contact"
                className="hidden items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-brand)] px-[18px] py-[8px] text-[var(--text-sm)] font-semibold text-white transition-all duration-150 hover:-translate-y-[1px] hover:bg-[var(--color-brand-hover)] lg:flex"
              >
                Start a Project
              </Link>
            </MagneticButton>

            <button
              className="flex h-9 w-9 cursor-pointer items-center justify-center text-[var(--color-text-primary)] lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        links={LINKS} 
        scrollToTop={scrollToTop} 
      />
    </>
  );
}
