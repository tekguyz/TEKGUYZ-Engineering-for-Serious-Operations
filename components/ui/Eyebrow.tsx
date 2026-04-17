import * as React from 'react';
import { cn } from '@/lib/utils';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  layer: 'authority' | 'evidence' | 'conversion';
}

export function Eyebrow({ className, layer, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        'mb-3 block text-[var(--text-xs)] font-semibold uppercase tracking-[var(--tracking-wider)]',
        {
          'text-[var(--layer-authority-text)]': layer === 'authority',
          'text-[var(--layer-evidence-text)]': layer === 'evidence',
          'text-[var(--layer-conversion-text)]': layer === 'conversion',
        },
        className
      )}
      {...props}
    />
  );
}
