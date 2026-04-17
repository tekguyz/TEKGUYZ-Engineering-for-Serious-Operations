import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? (props.children as React.ReactElement).type : 'button';
    const childProps = asChild ? ((props.children as React.ReactElement).props as Record<string, unknown>) : {};

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-[var(--radius-sm)] transition-all duration-150 ease-in-out focus-visible:outline-2 focus-visible:outline-[var(--color-brand)] focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
          {
            'bg-[var(--color-brand)] text-white hover:-translate-y-[1px] hover:bg-[var(--color-brand-hover)] hover:shadow-[var(--shadow-sm)]':
              variant === 'primary',
            'border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:border-[var(--color-brand)]':
              variant === 'secondary',
            'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]':
              variant === 'ghost',
            'border border-[var(--color-border-strong)] bg-transparent text-[var(--color-text-primary)]':
              variant === 'outline',
            'px-[14px] py-[8px] text-[14px]': size === 'sm',
            'px-[16px] py-[10px] text-[16px]': size === 'md',
            'px-[20px] py-[12px] text-[20px]': size === 'lg',
          },
          className
        )}
        {...props}
        {...childProps}
      >
        {asChild ? childProps.children : props.children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';
