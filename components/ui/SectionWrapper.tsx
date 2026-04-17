import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  layer?: 'authority' | 'evidence' | 'conversion' | 'none';
  fullBleed?: boolean;
}

export function SectionWrapper({
  id,
  layer = 'none',
  className,
  children,
  fullBleed,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full',
        {
          'bg-[var(--layer-authority-bg)]': layer === 'authority',
          'bg-[var(--layer-evidence-bg)]': layer === 'evidence',
          'bg-[var(--layer-conversion-bg)]': layer === 'conversion',
          'scroll-mt-[var(--nav-height,80px)]': !!id,
        },
        'pt-[env(safe-area-inset-top,0px)]',
        className
      )}
      {...props}
    >
      <div className={cn('mx-auto w-full', fullBleed ? '' : 'max-w-[1200px] px-4 sm:px-6')}>
        {children}
      </div>
    </section>
  );
}
