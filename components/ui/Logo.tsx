'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export function HexSigil({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Adaptive Glow: High-intensity in dark mode, zero-glow in light mode to prevent smudging.
      className={cn(
        "text-[var(--color-brand)] dark:drop-shadow-[0_0_12px_var(--color-brand)] drop-shadow-none shrink-0", 
        className
      )}
    >
      {/* Pointed-Top Hexagon - Standard Brand Geometry */}
      <polygon 
        points="12 2, 21 7, 21 17, 12 22, 3 17, 3 7" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />
      
      {/* Tactical Eyes: < > */}
      <polyline 
        points="9 10, 6 12, 9 14" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <polyline 
        points="15 10, 18 12, 15 14" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Blinking Underscore Mouth */}
      <line 
        x1="10" 
        y1="17" 
        x2="14" 
        y2="17" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        className="animate-logo-blink"
      />
    </svg>
  );
}

export function Logo({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <HexSigil size={size} />
      
      <div className="flex items-center font-sans font-black uppercase tracking-[0.2em] leading-none text-[var(--color-text-primary)]">
        <span className="text-[1.1rem]">TEKGUY</span>
        
        {/* Z-SLICE REFACTOR: 
            Using nested overflow-hidden spans instead of clip-path. 
            This avoids the "ghost box" compositing artifact on low-DPI displays.
        */}
        <span className="relative inline-flex text-[1.1rem] ml-[1.5px] h-[1.1rem] w-[0.8em]">
          <span className="invisible">Z</span>
          
          {/* Top 45% Portion - Hardware-safe Rectangular Clip */}
          <span className="absolute inset-x-0 top-0 h-[45%] overflow-hidden">
            <span className="absolute top-0 text-[var(--color-text-primary)]">
              Z
            </span>
          </span>
          
          {/* Bottom 55% Portion - The Glitch Slice */}
          <span 
            className={cn(
              "absolute inset-x-0 bottom-0 h-[55%] overflow-hidden",
              "translate-x-[2px] translate-y-[2px]",
              "text-[#00E5FF] dark:drop-shadow-[0_0_8px_#00E5FF] drop-shadow-none"
            )}
          >
            {/* We position the Z at the bottom of this container. 
                Because the container is only 55% high and overflow is hidden, 
                only the bottom half of the character renders.
            */}
            <span className="absolute bottom-0">
              Z
            </span>
          </span>
        </span>
      </div>

      <style jsx global>{`
        @keyframes logo-blink {
          0%, 95% { opacity: 1; }
          96%, 100% { opacity: 0; }
        }
        .animate-logo-blink {
          animation: logo-blink 4s infinite;
        }
      `}</style>
    </div>
  );
}