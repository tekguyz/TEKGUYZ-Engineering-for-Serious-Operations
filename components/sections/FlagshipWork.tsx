'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/projects';
import { weightedEntry, viewport } from '@/lib/motion';

export function FlagshipWork() {
  const scrollToClients = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('clients');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="work" layer="evidence" className="pt-20 md:pt-[15vh] lg:pt-[18vh] pb-24">
      {/* Section Header */}
      <motion.div
        variants={weightedEntry}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mb-16"
      >
        <Eyebrow layer="evidence">Selected Work</Eyebrow>
        <h2 className="max-w-[640px] text-[var(--text-4xl)] font-[700] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
          Three systems that show how we work.
        </h2>
      </motion.div>

      {/* Project Rows */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            variants={weightedEntry}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 items-start gap-10 border-b border-[var(--color-border)] py-16 md:grid-cols-[180px_1fr_300px]"
          >
            {/* Column 1 — Index */}
            <div className="flex flex-col items-start">
              <div className="text-[clamp(3.5rem,7vw,5.5rem)] font-[900] leading-none tracking-[-0.05em] text-[var(--layer-evidence-border)] [font-variant-numeric:tabular-nums]">
                {project.number}
              </div>
              <Badge variant="evidence" className="mt-4">
                {project.status}
              </Badge>
              <div className="mt-2 text-[var(--text-xs)] tracking-[var(--tracking-wide)] text-[var(--color-text-muted)]">
                {project.stack.join(' · ')}
              </div>
            </div>

            {/* Column 2 — Content */}
            <div className="flex flex-col">
              <h3 className="text-[var(--text-3xl)] font-[700] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                {project.name}
              </h3>
              <p className="mt-3 max-w-[56ch] text-[var(--text-base)] italic text-[var(--color-text-secondary)]">
                &quot;{project.thesis}&quot;
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="h-[6px] w-[6px] rounded-full"
                  style={{ backgroundColor: project.accentOKLCH }}
                />
                <span className="text-[var(--text-sm)] text-[var(--color-text-muted)]">
                  {project.outcome.heading}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="ghost" size="sm" asChild>
                  <a 
                    href={`/projects/${project.slug}`}
                    aria-label={`Read case study for ${project.name}`}
                  >
                    Read More →
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View live site for ${project.name}`}
                  >
                    View Live Site ↗
                  </a>
                </Button>
              </div>
            </div>

            {/* Column 3 — Architecture Diagram */}
            <a
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-all duration-200 hover:-translate-y-[2px]"
              style={{ borderTop: `3px solid ${project.accentOKLCH}` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = project.accentOKLCH;
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              <div className="flex flex-col items-center">
                {project.archDiagram.nodes.map((node, i) => (
                  <React.Fragment key={i}>
                    <div className="rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-bg)] px-[12px] py-[4px] text-center text-[var(--text-xs)] text-[var(--color-text-secondary)]">
                      {node}
                    </div>
                    {i < project.archDiagram.nodes.length - 1 && (
                      <div className="h-[16px] w-[1px] bg-[var(--color-border)]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">
                {project.archDiagram.flow}
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Section Footer */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/#clients"
          className="group flex flex-col items-center gap-2 text-[var(--text-sm)] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          <span>View all 23 deployed systems</span>
          <span
            className="animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            ↓
          </span>
        </Link>
      </div>
    </SectionWrapper>
  );
}
