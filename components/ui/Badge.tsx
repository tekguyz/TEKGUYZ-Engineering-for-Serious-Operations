import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'authority' | 'evidence' | 'conversion' | 'success' | 'warning';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-full)] px-[10px] py-[3px] text-[10px] font-semibold uppercase tracking-[var(--tracking-wider)]',
        {
          'bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)]': variant === 'default',
          'border border-[var(--layer-authority-border)] bg-[var(--layer-authority-bg)] text-[var(--layer-authority-text)]':
            variant === 'authority',
          'border border-[var(--layer-evidence-border)] bg-[var(--layer-evidence-bg)] text-[var(--layer-evidence-text)]':
            variant === 'evidence',
          'border border-[var(--layer-conversion-border)] bg-[var(--layer-conversion-bg)] text-[var(--layer-conversion-text)]':
            variant === 'conversion',
          'bg-[var(--color-success)] text-white': variant === 'success',
          'bg-[var(--color-warning)] text-white': variant === 'warning',
        },
        className
      )}
      {...props}
    />
  );
}
