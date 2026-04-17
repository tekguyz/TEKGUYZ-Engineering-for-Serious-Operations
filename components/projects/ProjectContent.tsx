'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/lib/projects';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArchDiagram } from '@/components/projects/ArchDiagram';
import { weightedEntry, scaleIn, stagger, viewport } from '@/lib/motion';

export function ProjectContent({ project, nextProject }: { project: Project; nextProject: Project }) {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    // Force navigation to the root to ensure reliability
    router.push('/');
  };

  return (
    <div className="flex flex-col pt-[60px]">
      {/* ZONE 1 — Project Hero Band */}
      <div
        className="relative flex min-h-[42vh] w-full items-center"
        style={{
          backgroundColor: project.accentOKLCH.replace(')', ' / 0.06)'),
          borderBottom: `1px solid ${project.accentOKLCH.replace(')', ' / 0.18)')}`,
        }}
      >
        <SectionWrapper layer="none" className="max-w-[880px] py-16">
          <button
            onClick={handleBack}
            className="mb-8 text-[var(--text-sm)] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-brand)]"
          >
            ← All Work
          </button>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[var(--text-xl)] font-[900] text-[var(--color-text-primary)]">
              {project.number}
            </span>
            <Badge variant="evidence">{project.status}</Badge>
          </div>
          <motion.h1
            variants={weightedEntry}
            initial="hidden"
            animate="visible"
            className="text-[var(--text-5xl)] font-[800] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]"
          >
            {project.name}
          </motion.h1>
          <p className="mt-4 text-[var(--text-xl)] italic text-[var(--color-text-secondary)]">
            {project.tagline}
          </p>
          <p className="mt-6 max-w-[64ch] text-[var(--text-base)] text-[var(--color-text-secondary)]">
            {project.thesis}
          </p>
          <div className="mt-8">
            <Button variant="primary" asChild>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View live site for ${project.name}`}
              >
                Visit Live Site ↗
              </a>
            </Button>
          </div>
        </SectionWrapper>
      </div>

      {/* ZONE 2 — Meta Bar */}
      <div className="w-full border-b border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-6">
        <SectionWrapper layer="none" className="max-w-[880px]">
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-0">
            <div className="flex flex-col gap-1 md:border-r md:border-[var(--color-border)] md:px-8 first:md:pl-0 last:md:border-0">
              <span className="text-[var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">
                Built With
              </span>
              <span className="text-[var(--text-base)] font-semibold text-[var(--color-text-primary)]">
                {project.stack.join(' · ')}
              </span>
            </div>
            <div className="flex flex-col gap-1 md:border-r md:border-[var(--color-border)] md:px-8 last:md:border-0">
              <span className="text-[var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">
                Category
              </span>
              <span className="text-[var(--text-base)] font-semibold text-[var(--color-text-primary)]">
                Engineering
              </span>
            </div>
            <div className="flex flex-col gap-1 md:border-r md:border-[var(--color-border)] md:px-8 last:md:border-0">
              <span className="text-[var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">
                Year
              </span>
              <span className="text-[var(--text-base)] font-semibold text-[var(--color-text-primary)]">
                {project.year}
              </span>
            </div>
            <div className="flex flex-col gap-1 md:px-8 last:md:pr-0">
              <span className="text-[var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">
                Status
              </span>
              <span className="text-[var(--text-base)] font-semibold text-[var(--color-text-primary)]">
                {project.status}
              </span>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* ZONE 3 — Architecture Diagram */}
      <SectionWrapper layer="evidence" className="py-20">
        <div className="mx-auto max-w-[880px]">
          <Eyebrow layer="evidence">Operational Plan</Eyebrow>
          <h2 className="mb-12 text-[var(--text-4xl)] font-[700] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
            The technical blueprint.
          </h2>
          <div className="w-full overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-8 shadow-[var(--shadow-sm)]">
            <ArchDiagram project={project} />
          </div>
        </div>
      </SectionWrapper>

      {/* ZONE 4 — Case Study Body */}
      <div className="mx-auto w-full max-w-[720px] px-4 py-[5rem] sm:px-6">
        <motion.div variants={weightedEntry} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16">
          <Eyebrow layer="evidence">The Problem</Eyebrow>
          <h2 className="mb-4 text-[var(--text-3xl)] font-[700] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
            {project.challenge.heading}
          </h2>
          <p className="text-[var(--text-lg)] leading-[var(--leading-loose)] text-[var(--color-text-secondary)]">
            {project.challenge.body}
          </p>
        </motion.div>

        <motion.div variants={weightedEntry} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16">
          <Eyebrow layer="evidence">What we built</Eyebrow>
          <h2 className="mb-4 text-[var(--text-3xl)] font-[700] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
            {project.solution.heading}
          </h2>
          <p className="text-[var(--text-lg)] leading-[var(--leading-loose)] text-[var(--color-text-secondary)]">
            {project.solution.body}
          </p>
        </motion.div>

        <motion.div variants={weightedEntry} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16">
          <Eyebrow layer="evidence">The Result</Eyebrow>
          <h2 className="mb-4 text-[var(--text-3xl)] font-[700] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
            {project.outcome.heading}
          </h2>
          <p className="text-[var(--text-lg)] leading-[var(--leading-loose)] text-[var(--color-text-secondary)]">
            {project.outcome.body}
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16">
          <Eyebrow layer="evidence">Proven Results</Eyebrow>
          <div className="mt-6 flex flex-col">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="flex items-center gap-4 border-b border-[var(--color-border)] py-4 last:border-0"
              >
                <div
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: project.accentOKLCH }}
                />
                <span className="text-[var(--text-base)] text-[var(--color-text-primary)]">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={weightedEntry} initial="hidden" whileInView="visible" viewport={viewport}>
          <Eyebrow layer="evidence">Tools used</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <Badge key={i} variant="evidence">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ZONE 5 — Next Project Teaser */}
      <Link
        href={`/projects/${nextProject.slug}`}
        className="group flex w-full items-center justify-between border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-[3rem] transition-colors duration-200 hover:bg-[var(--color-bg-tertiary)] sm:px-8 md:px-12"
      >
        <div className="flex flex-col gap-1">
          <span className="text-[var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">
            Next Project →
          </span>
          <span className="text-[var(--text-3xl)] font-[700] text-[var(--color-brand)]">
            {nextProject.name}
          </span>
        </div>
        <ArrowRight
          size={40}
          className="text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-2"
        />
      </Link>
    </div>
  );
}
