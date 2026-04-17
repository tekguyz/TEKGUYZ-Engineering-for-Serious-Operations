import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  helpText?: string;
}

export function FormRadioGroup({ label, options, value, onChange, required, helpText }: Props) {
  const id = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <label className="text-[var(--text-xs)] font-[600] uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-secondary)]">
          {label}
        </label>
        {helpText && <span className="text-[10px] text-[var(--color-text-muted)]">{helpText}</span>}
      </div>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby={`${id}-label`}>
        <span id={`${id}-label`} className="sr-only">{label}</span>
        {options.map((option) => (
          <label
            key={option}
            className={cn(
              'group relative cursor-pointer rounded-[var(--radius-full)] border px-3.5 py-2 text-center text-[var(--text-xs)] font-[500] transition-all focus-within:ring-2 focus-within:ring-[var(--color-brand)] focus-within:ring-offset-2',
              value === option
                ? 'border-[var(--layer-conversion)] bg-[var(--layer-conversion)] text-white'
                : 'border-[var(--color-border)] bg-transparent text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)]'
            )}
          >
            <input
              type="radio"
              name={id.replace(/-/g, '_')}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
              required={required}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
