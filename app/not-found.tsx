'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { weightedEntry } from '@/lib/motion';
import { Eyebrow } from '@/components/ui/Eyebrow';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)] px-6 text-center">
      <div 
        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none font-[900] text-[var(--layer-authority-bg)]"
        style={{ fontSize: 'clamp(8rem, 20vw, 14rem)' }}
      >
        404
      </div>
      
      <motion.div
        variants={weightedEntry}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <Eyebrow layer="authority">You found it.</Eyebrow>
        <h1 className="mt-4 text-[var(--text-4xl)] font-[800] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)] md:text-[var(--text-5xl)]">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-[400px] text-[var(--text-base)] text-[var(--color-text-secondary)]">
          But the work does. Head back and take a look.
        </p>
        
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-brand)] px-5 py-3 text-[var(--text-sm)] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[var(--color-brand-hover)] hover:shadow-[var(--shadow-sm)]"
          >
            Back to TEKGUYZ
          </Link>
          <Link 
            href="/#work"
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border-strong)] bg-transparent px-5 py-3 text-[var(--text-sm)] font-semibold text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-bg-secondary)]"
          >
            See Our Work
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
