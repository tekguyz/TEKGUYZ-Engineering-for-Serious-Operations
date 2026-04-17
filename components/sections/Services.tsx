'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Brain, Globe, Settings2, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { scaleIn, stagger, viewport, fadeIn } from '@/lib/motion';

const SERVICES = [
  {
    title: 'Smart Operations',
    accent: 'var(--color-accent)', // Innovation Teal
    icon: Brain,
    body: 'Your business generates data and tasks every hour. We build the smart systems that handle the heavy lifting for you—organizing files, answering customer questions, and moving data while you focus on the big picture.',
    capabilities: [
      'Custom AI Assistants',
      'Automated Data Sorting',
      'Task & Workflow Automation',
      'Smart Lead Management',
      '24/7 Operational Monitoring'
    ],
    cta: 'Explore automation options →',
    href: '#contact'
  },
  {
    title: 'Digital Platforms',
    accent: 'var(--layer-authority)', // Authority Purple
    icon: Globe,
    body: 'A static site isn\'t enough. We engineer high-speed, professional platforms that act as your digital flagship. Whether it’s a high-converting storefront or a complex web-based tool, we build it to be fast, secure, and easy to use.',
    capabilities: [
      'High-Speed Mobile Performance',
      'Professional Search Setup (SEO)',
      'Secure Cloud Hosting',
      'Custom Brand Design',
      'Built-in Lead Generation'
    ],
    cta: 'Start your platform →',
    href: '#clients'
  },
  {
    title: 'Business Systems',
    accent: 'var(--layer-conversion)', // Conversion Amber
    icon: Settings2,
    body: 'Move your business out of messy spreadsheets and email threads. We build private, secure systems where your clients and team can log in, share documents, and track projects in one organized place.',
    capabilities: [
      'Secure Client & Team Logins',
      'Private Document Portals',
      'Automated Invoicing Tools',
      'Real-Time Project Tracking',
      'Systems That Connect Your Tools'
    ],
    cta: 'Streamline your systems →',
    href: '#contact'
  }
];

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    body: 'We listen first to understand the specific problem you have.'
  },
  {
    number: '02',
    title: 'The Plan',
    body: 'You get a clear price, an honest timeline, and zero surprises.'
  },
  {
    number: '03',
    title: 'The Build',
    body: 'We build in stages, giving you a private link to watch the progress.'
  },
  {
    number: '04',
    title: 'The Launch',
    body: 'We handle the setup and hand over a system that’s ready to work.'
  }
];

export function Services() {
  return (
    <SectionWrapper id="services" layer="conversion" className="py-24">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-[640px] text-center">
        <Eyebrow layer="conversion">Services</Eyebrow>
        <h2 className="mb-4 text-[var(--text-4xl)] font-[800] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
          Practical tools for <br /> local businesses.
        </h2>
        <p className="text-[var(--text-base)] text-[var(--color-text-secondary)]">
          We don’t use generic templates. We build custom software that solves the specific problems slowing your business down.
        </p>
      </div>

      {/* Service Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            variants={scaleIn}
            className="group relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-8 transition-all duration-200 hover:-translate-y-[3px] hover:border-[var(--layer-conversion-border)] hover:shadow-[var(--shadow-sm)]"
          >
            {/* Top Accent Line */}
            <motion.div
              variants={fadeIn}
              style={{ 
                transformOrigin: 'left',
                backgroundColor: service.accent
              }}
              className="absolute inset-x-0 top-0 h-[3px]"
            />

            <service.icon 
              size={28} 
              style={{ color: service.accent }} 
              strokeWidth={1.5} 
              aria-hidden="true" 
            />
            
            <h3 className="mt-4 text-[var(--text-lg)] font-[700] text-[var(--color-text-primary)]">
              {service.title}
            </h3>
            
            <p className="mt-3 text-[var(--text-sm)] leading-[var(--leading-loose)] text-[var(--color-text-secondary)]">
              {service.body}
            </p>

            <div className="mt-6 flex flex-col gap-[6px]">
              {service.capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-2 text-[var(--text-xs)] text-[var(--color-text-secondary)]">
                  <span style={{ color: service.accent }} className="font-bold">✓</span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <a
                href={service.href}
                className="group/link inline-flex items-center gap-2 text-[var(--text-sm)] font-semibold transition-colors"
                style={{ color: service.accent }}
              >
                {service.cta}
                <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Process Strip */}
      <div className="mt-16 w-full border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 md:flex md:items-start md:justify-between md:gap-4">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col md:max-w-[240px]">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--text-xs)] font-[700] uppercase tracking-[var(--tracking-wider)] text-[var(--layer-conversion-text)]">
                    {step.number}
                  </span>
                  <span className="text-[var(--text-xs)] font-[700] uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-primary)]">
                    {step.title}
                  </span>
                </div>
                <p className="mt-2 text-[var(--text-sm)] leading-[1.6] text-[var(--color-text-secondary)]">
                  {step.body}
                </p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="hidden flex-1 self-center md:block">
                  <div className="h-[1px] w-full bg-[var(--color-border)]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}