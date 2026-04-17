import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export function SectionSkeleton({ label }: { label: string }) {
  return (
    <SectionWrapper layer="none" className="py-24">
      <div className="mb-12 max-w-[520px]">
        <div className="mb-3 h-4 w-24 rounded bg-[var(--color-bg-tertiary)] animate-pulse" />
        <div className="mb-4 h-10 w-3/4 rounded bg-[var(--color-bg-tertiary)] animate-pulse" />
        <div className="h-6 w-full rounded bg-[var(--color-bg-tertiary)] animate-pulse" />
      </div>
      <div className="h-64 w-full rounded-[var(--radius-lg)] bg-[var(--color-bg-tertiary)] animate-pulse" />
    </SectionWrapper>
  );
}
