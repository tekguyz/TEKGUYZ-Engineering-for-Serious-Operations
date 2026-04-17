'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Experiment, ExperimentTag, experiments } from '@/lib/experiments';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { scaleIn, stagger, viewport } from '@/lib/motion';
import { cn } from '@/lib/utils';

const TAG_COLORS: Record<ExperimentTag, { bg: string; text: string }> = {
  'AI Tool': { bg: 'var(--color-tag-ai-bg)', text: 'var(--color-tag-ai-text)' },
  'Mental Health': { bg: 'var(--color-tag-mental-bg)', text: 'var(--color-tag-mental-text)' },
  'Automation': { bg: 'var(--layer-conversion-bg)', text: 'var(--layer-conversion-text)' },
  'Translation': { bg: 'var(--color-tag-translation-bg)', text: 'var(--color-tag-translation-text)' },
  'Verification': { bg: 'var(--layer-authority-bg)', text: 'var(--layer-authority-text)' },
  'Workspace': { bg: 'var(--color-tag-workspace-bg)', text: 'var(--color-tag-workspace-text)' },
};

const GRID_SPANS: Record<string, string> = {
  'RevenueGuard': 'col-span-12 md:col-span-4',
  'LiveStrong': 'col-span-12 md:col-span-4',
  'Agency Dashboard': 'col-span-12 md:col-span-4',
};

export function RDLab() {
  return (
    <SectionWrapper id="experiments" layer="evidence" className="py-24">
      <div className="mb-12 max-w-[520px]">
        <Eyebrow layer="evidence">R&D Lab</Eyebrow>
        <h2 className="mb-4 text-[var(--text-4xl)] font-[800] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
          Testing what is possible.
        </h2>
        <p className="text-[var(--text-base)] text-[var(--color-text-secondary)]">
          Sometimes we build things just to solve a problem or learn something new.
        </p>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-12 gap-[1px] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-border)]"
      >
        {experiments.map((experiment) => {
          const colors = TAG_COLORS[experiment.tag] || TAG_COLORS['Workspace'];
          const span = GRID_SPANS[experiment.name] || 'col-span-12';

          return (
            <motion.div
              key={experiment.name}
              variants={scaleIn}
              className={cn(
                'group relative flex min-h-[160px] flex-col justify-between bg-[var(--color-bg)] p-6 transition-colors duration-150 hover:bg-[var(--color-bg-secondary)]',
                span
              )}
            >
              <div className="flex items-start justify-between">
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: colors.bg,
                    color: colors.text,
                  }}
                >
                  {experiment.tag}
                </span>
                <div className="flex items-center gap-1.5">
                  {experiment.status !== 'Archived' && (
                    <div
                      className={cn('h-1.5 w-1.5 rounded-full', {
                        'bg-[var(--color-success)]': experiment.status === 'Active',
                        'bg-[var(--color-text-muted)]': experiment.status === 'Prototype',
                      })}
                    />
                  )}
                  <span className="text-[10px] font-medium text-[var(--color-text-muted)]">
                    {experiment.status}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-[var(--text-base)] font-semibold text-[var(--color-text-primary)]">
                  {experiment.name}
                </h3>
                <p className="mt-1 text-[var(--text-xs)] leading-[1.6] text-[var(--color-text-secondary)]">
                  {experiment.description}
                </p>
              </div>

              <div className="mt-4 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] text-[var(--color-text-muted)]">
                  {experiment.stack.join(' · ')}
                </span>
                <a
                  href={experiment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-brand)]"
                  aria-label={`View live site for ${experiment.name}`}
                >
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
