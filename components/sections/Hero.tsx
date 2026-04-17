'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { stagger, wordReveal, weightedEntry, fadeIn } from '@/lib/motion';

export function Hero() {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scrollHeight = useTransform(scrollY, [0, 10], [36, 0]);

  const line1 = 'We engineer the systems'.split(' ');
  const line2 = 'that serious operations run on.'.split(' ');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-bg)]">
      {/* TEKGUYZ Watermark - Pushed up to clear the reveal section */}
      <div
        className="pointer-events-none absolute bottom-[10vh] lg:bottom-[25vh] -right-8 z-0 hidden select-none text-[clamp(5rem,13vw,10rem)] font-[900] tracking-[-0.05em] text-[var(--layer-authority-bg)] md:block"
        aria-hidden="true"
      >
        TEKGUYZ
      </div>

      {/* Gradient Dissolve Mask */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[200px]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-bg) 100%)',
        }}
      />

      {/* Scroll Indicator - Switched to absolute and pushed up to clear the reveal */}
      <motion.div
        className="absolute bottom-[15vh] lg:bottom-[30vh] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ opacity: scrollOpacity }}
      >
        <span className="hidden md:block text-[var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">
          Scroll
        </span>
        <motion.div
          className="w-[1.5px] bg-[var(--layer-authority)] animate-blink-slide"
          style={{ height: scrollHeight }}
        >
          <div
            className="h-full w-full bg-[var(--layer-authority)]"
          />
        </motion.div>
      </motion.div>

      {/* Hero Content Block */}
      <div className="relative z-30 mx-auto w-full max-w-[1200px] px-4 pt-[12vh] sm:px-6">
        <div className="max-w-[680px]">
          {/* Authority Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-[var(--layer-authority-border)] bg-[var(--layer-authority-bg)] px-[14px] py-[6px]"
          >
            <div
              className="h-2 w-2 rounded-full bg-[var(--layer-authority)] animate-pulse"
            />
            <span className="text-[var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--layer-authority-text)]">
              South Florida Engineering Firm
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2"
          >
            <div className="flex flex-wrap gap-x-[0.3em] text-[var(--text-5xl)] font-[700] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
              {line1.map((word, i) => (
                <motion.span key={`l1-${i}`} custom={i} variants={wordReveal} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </div>
            <div
              className="flex flex-wrap gap-x-[0.3em] text-[var(--text-5xl)] font-[800] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)]"
              style={{
                background: 'linear-gradient(135deg, var(--layer-authority) 0%, var(--color-accent) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {line2.map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  custom={i + line1.length}
                  variants={wordReveal}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={weightedEntry}
            initial="hidden"
            animate="visible"
            custom={0.6} // Delay relative to headline completion
            className="mt-6 max-w-full text-[var(--text-lg)] leading-[var(--leading-loose)] text-[var(--color-text-secondary)] md:max-w-[520px]"
          >
            We build the digital tools that local businesses depend on—from secure customer portals to automated systems that handle your repetitive work.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            variants={weightedEntry}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton>
              <Button variant="primary" size="lg" onClick={() => scrollTo('work')} className="w-full sm:w-auto">
                See Our Work →
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="lg" onClick={() => scrollTo('contact')} className="w-full sm:w-auto">
                Start a Project
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Inline Stats Row */}
          <motion.div
            variants={weightedEntry}
            initial="hidden"
            animate="visible"
            custom={1.0}
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]"
          >
            <span>23 Live Platforms</span>
            <span aria-hidden="true">·</span>
            <span>5+ Years Building</span>
            <span aria-hidden="true">·</span>
            <span>Local & Remote Partners</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}