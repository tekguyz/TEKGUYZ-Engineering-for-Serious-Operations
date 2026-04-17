'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Github } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] pb-8 pt-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[30%_15%_15%_40%]">
          {/* Left Column */}
          <div>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  router.push('/');
                }
              }}
              className="group transition-opacity hover:opacity-80"
              aria-label="TEKGUYZ Home"
            >
              <Logo size={40} />
            </Link>
            <p className="mt-2 text-[var(--text-sm)] text-[var(--color-text-muted)]">
              We build the digital tools that local businesses depend on.
            </p>
            <a
              href="https://github.com/tekguyz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
              aria-label="Visit TEKGUYZ GitHub repository"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Center Column */}
          <div>
            <Eyebrow layer="authority">Navigate</Eyebrow>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/#work"
                className="link-underline w-max text-[var(--text-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              >
                Work
              </Link>
              <Link
                href="/#services"
                className="link-underline w-max text-[var(--text-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              >
                Services
              </Link>
              <Link
                href="/#contact"
                className="link-underline w-max text-[var(--text-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal Column */}
          <div>
            <Eyebrow layer="authority">Legal</Eyebrow>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/privacy"
                className="link-underline w-max text-[var(--text-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              >
                Privacy
              </Link>
              <Link
                href="/legal"
                className="link-underline w-max text-[var(--text-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              >
                Legal
              </Link>
            </nav>
          </div>

          {/* Right Column */}
          <div>
            <Eyebrow layer="conversion">Start a Project</Eyebrow>
            <div className="mt-4 flex flex-col gap-4">
              <div className="text-[var(--text-base)] font-medium text-[var(--color-text-primary)]">
                hello@tekguyz.com
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]"></span>
                </div>
                <span className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">
                  Open to new projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-5 sm:flex-row">
          <div className="text-[var(--text-xs)] text-[var(--color-text-muted)]">
            © 2026 TEKGUYZ. All rights reserved.
          </div>
          <div className="text-[var(--text-xs)] text-[var(--color-text-muted)]">
            Built with Next.js · Deployed on Netlify
          </div>
        </div>
      </div>
    </footer>
  );
}
