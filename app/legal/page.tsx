import * as React from 'react';
import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { HexSigil } from '@/components/ui/Logo';
import { Scale, MapPin, Building2, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Operational Framework | TEKGUYZ',
  description: 'The legal foundation and operational boundaries of our South Florida engineering firm.',
};

export default function LegalPage() {
  return (
    <div className="relative min-h-screen pt-[60px]">
      {/* Blueprint Background */}
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" />
      
      {/* Hero Section */}
      <SectionWrapper layer="authority" className="relative py-24 text-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05]">
          <HexSigil size={400} className="grayscale" />
        </div>
        
        <Eyebrow layer="authority">Institutional Foundation</Eyebrow>
        <h1 className="mx-auto max-w-[800px] text-[var(--text-5xl)] font-[800] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--layer-authority-text)]">
          Operational Framework
        </h1>
        <p className="mx-auto mt-6 max-w-[600px] text-[var(--text-lg)] text-[var(--color-text-secondary)]">
          TEKGUYZ is an established engineering and consulting firm based in South Florida. We operate under strict professional standards.
        </p>
      </SectionWrapper>

      {/* Content Grid */}
      <SectionWrapper className="pb-32 pt-12">
        <div className="mx-auto max-w-[880px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 p-6 text-center backdrop-blur-md">
              <MapPin className="mb-3 text-[var(--layer-authority-text)]" size={24} />
              <span className="text-[var(--text-xs)] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Location</span>
              <span className="mt-1 text-[var(--text-sm)] font-medium text-[var(--color-text-primary)]">Pompano Beach, FL</span>
            </div>
            <div className="flex flex-col items-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 p-6 text-center backdrop-blur-md">
              <Building2 className="mb-3 text-[var(--layer-authority-text)]" size={24} />
              <span className="text-[var(--text-xs)] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Entity</span>
              <span className="mt-1 text-[var(--text-sm)] font-medium text-[var(--color-text-primary)]">TEKGUYZ LLC</span>
            </div>
            <div className="flex flex-col items-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 p-6 text-center backdrop-blur-md">
              <Scale className="mb-3 text-[var(--layer-authority-text)]" size={24} />
              <span className="text-[var(--text-xs)] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Jurisdiction</span>
              <span className="mt-1 text-[var(--text-sm)] font-medium text-[var(--color-text-primary)]">Florida, USA</span>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30 p-10 backdrop-blur-sm">
              <h3 className="mb-4 text-[var(--text-2xl)] font-bold text-[var(--layer-authority-text)]">1. Professional Services</h3>
              <p className="text-[var(--text-base)] leading-[var(--leading-loose)] text-[var(--color-text-secondary)]">
                TEKGUYZ provides engineering, software development, and technical consulting services. All engagements are governed by a Master Services Agreement (MSA) or specific Statement of Work (SOW) executed between TEKGUYZ and the client.
              </p>
            </section>

            <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30 p-10 backdrop-blur-sm">
              <h3 className="mb-4 text-[var(--text-2xl)] font-bold text-[var(--layer-authority-text)]">2. Intellectual Property</h3>
              <p className="text-[var(--text-base)] leading-[var(--leading-loose)] text-[var(--color-text-secondary)]">
                Unless otherwise specified in writing, all custom code, architectures, and systems engineered for a client become the property of the client upon final payment. TEKGUYZ retains ownership of its proprietary &quot;Institutional Knowledge&quot; and pre-existing library components used across deployments.
              </p>
            </section>

            <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30 p-10 backdrop-blur-sm">
              <h3 className="mb-4 text-[var(--text-2xl)] font-bold text-[var(--layer-authority-text)]">3. Liability & Performance</h3>
              <p className="text-[var(--text-base)] leading-[var(--leading-loose)] text-[var(--color-text-secondary)]">
                We build for high-stakes environments. While we engineer for maximum uptime and security, TEKGUYZ is not liable for indirect, incidental, or consequential damages resulting from operational failures outside of our direct control or maintenance scope.
              </p>
            </section>

            <section className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8">
              <div className="flex items-start gap-4">
                <FileText className="mt-1 shrink-0 text-[var(--color-text-muted)]" size={20} />
                <div>
                  <h3 className="mb-1 text-[var(--text-base)] font-bold text-[var(--color-text-primary)]">Compliance Notice</h3>
                  <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">
                    This site and its contents are for informational purposes. Accessing this site does not constitute an engineer-client relationship. For formal inquiries, please contact our legal department at hello@tekguyz.com.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
