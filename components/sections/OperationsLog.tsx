'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { scaleIn } from '@/lib/motion';
import { Globe, Github } from 'lucide-react';
import { ClientProject, Industry } from '@/lib/clients';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { cn } from '@/lib/utils';

interface Props {
  clients: ClientProject[];
}

const INDUSTRY_COLORS: Record<Industry, { bg: string; text: string }> = {
  'HVAC': { bg: 'var(--color-industry-hvac-bg)', text: 'var(--color-industry-hvac-text)' },
  'Marine': { bg: 'var(--color-industry-marine-bg)', text: 'var(--color-industry-marine-text)' },
  'Cleaning': { bg: 'var(--color-industry-cleaning-bg)', text: 'var(--color-industry-cleaning-text)' },
  'Food & Beverage': { bg: 'var(--color-industry-food-bg)', text: 'var(--color-industry-food-text)' },
  'Pool & Spa': { bg: 'var(--color-industry-pool-bg)', text: 'var(--color-industry-pool-text)' },
  'Landscaping': { bg: 'var(--color-industry-landscaping-bg)', text: 'var(--color-industry-landscaping-text)' },
  'Plumbing': { bg: 'var(--color-industry-plumbing-bg)', text: 'var(--color-industry-plumbing-text)' },
  'Screen & Enclosure': { bg: 'var(--color-industry-screen-bg)', text: 'var(--color-industry-screen-text)' },
  'Pressure Washing': { bg: 'var(--color-industry-pressure-bg)', text: 'var(--color-industry-pressure-text)' },
  'Towing': { bg: 'var(--color-industry-towing-bg)', text: 'var(--color-industry-towing-text)' },
  'Stone & Tile': { bg: 'var(--color-industry-stone-bg)', text: 'var(--color-industry-stone-text)' },
  'Yacht': { bg: 'var(--color-industry-yacht-bg)', text: 'var(--color-industry-yacht-text)' },
  'Corporate': { bg: 'var(--color-industry-corporate-bg)', text: 'var(--color-industry-corporate-text)' },
  'Automation': { bg: 'var(--color-industry-automation-bg)', text: 'var(--color-industry-automation-text)' },
};

function relativeTime(iso: string) {
  const date = new Date(iso);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) return `${diffInWeeks}w ago`;
  
  const diffInMonths = Math.floor(diffInDays / 30);
  return `${diffInMonths}mo ago`;
}

export function OperationsLog({ clients }: Props) {
  const [activeFilter, setActiveFilter] = useState<Industry | 'All'>('All');

  const industries = useMemo(() => {
    const unique = Array.from(new Set(clients.map(c => c.industry))).sort();
    return unique;
  }, [clients]);

  const filteredClients = useMemo(() => {
    if (activeFilter === 'All') return clients;
    return clients.filter(c => c.industry === activeFilter);
  }, [clients, activeFilter]);

  return (
    <SectionWrapper id="clients" layer="evidence" className="py-24">
      <div className="mb-12 max-w-[560px]">
        <Eyebrow layer="evidence">Systems Ledger</Eyebrow>
        <h2 className="mb-4 text-[var(--text-4xl)] font-[800] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
          23 live builds. Proven results. Still running.
        </h2>
        <p className="text-[var(--text-base)] text-[var(--color-text-secondary)]">
          Every entry here is a functional, live build. These are operational blueprints that demonstrate our ability to handle complex service logic and real-time data.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2" role="radiogroup" aria-label="Filter by industry">
        <button
          role="radio"
          aria-checked={activeFilter === 'All'}
          onClick={() => setActiveFilter('All')}
          className={cn(
            'shrink-0 rounded-full px-[14px] py-[6px] text-[var(--text-xs)] font-[500] transition-all duration-200',
            activeFilter === 'All'
              ? 'bg-[var(--layer-evidence)] text-white'
              : 'border border-[var(--color-border)] bg-transparent text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)]'
          )}
        >
          All ({clients.length})
        </button>
        {industries.map(industry => (
          <button
            key={industry}
            role="radio"
            aria-checked={activeFilter === industry}
            onClick={() => setActiveFilter(industry)}
            className={cn(
              'shrink-0 rounded-full px-[14px] py-[6px] text-[var(--text-xs)] font-[500] transition-all duration-200',
              activeFilter === industry
                ? 'bg-[var(--layer-evidence)] text-white'
                : 'border border-[var(--color-border)] bg-transparent text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)]'
            )}
          >
            {industry} ({clients.filter(c => c.industry === industry).length})
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)]">
        <div className="min-w-[800px]">
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1.2fr_1.5fr_100px_80px] items-center border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3">
            <span className="text-[10px] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">What we built</span>
            <span className="text-[10px] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">Industry</span>
            <span className="text-[10px] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">Tech Stack</span>
            <span className="text-[10px] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">Verification</span>
            <span className="text-[10px] font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-muted)]">Links</span>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            <AnimatePresence mode="popLayout">
              {filteredClients.map(client => (
                <motion.div
                  layout
                  key={client.name}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="group grid grid-cols-[2fr_1.2fr_1.5fr_100px_80px] items-center border-b border-[var(--color-border)] px-4 py-3.5 last:border-0 hover:bg-[var(--color-bg-secondary)] transition-colors duration-150"
                >
                  <div className="flex flex-col">
                    <span className="text-[var(--text-sm)] font-semibold text-[var(--color-text-primary)]">{client.name}</span>
                    <span className="line-clamp-1 text-[var(--text-xs)] text-[var(--color-text-muted)]">{client.description}</span>
                  </div>

                  <div>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: INDUSTRY_COLORS[client.industry].bg,
                        color: INDUSTRY_COLORS[client.industry].text,
                      }}
                    >
                      {client.industry}
                    </span>
                  </div>

                  <div className="text-[10px] text-[var(--color-text-muted)]">
                    {client.stack.join(' · ')}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative flex h-1.5 w-1.5">
                      <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75"></div>
                      <div className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-success)]"></div>
                    </div>
                    <span className="text-[10px] text-[var(--color-text-muted)]">
                      {client.lastDeployed ? `Updated ${relativeTime(client.lastDeployed)}` : 'Live'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live site for ${client.name}`}
                      className="flex h-[26px] w-[26px] items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                    >
                      <Globe size={14} />
                    </a>
                    <a
                      href={client.github.startsWith('http') ? client.github : `https://github.com/${client.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub repository for ${client.name}`}
                      className="flex h-[26px] w-[26px] items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </SectionWrapper>
  );
}
