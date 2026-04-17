import * as React from 'react';

const STATEMENTS = [
  'Client portals that let customers serve themselves 24/7',
  'Automated systems that save owners 40+ hours a month',
  'High-speed business platforms that turn visitors into leads',
  '23 live systems operating across South Florida and remotely',
  'Custom engineering — built from scratch, no generic templates',
  'We build the tools that keep local businesses running smoothly',
];

export function OutcomeTicker() {
  // Join statements with a dot and non-breaking spaces for visual separation
  const content = STATEMENTS.join(' \u00A0·\u00A0 ') + ' \u00A0·\u00A0 ';

  return (
    <div className="mt-[60px] flex h-[36px] items-center overflow-hidden border-b border-[var(--layer-authority-border)] bg-[var(--layer-authority-bg)]">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        <span className="whitespace-nowrap px-[12px] text-[11px] font-medium uppercase tracking-[var(--tracking-wider)] text-[var(--layer-authority-text)]">
          {content}
        </span>
        <span className="whitespace-nowrap px-[12px] text-[11px] font-medium uppercase tracking-[var(--tracking-wider)] text-[var(--layer-authority-text)]">
          {content}
        </span>
      </div>
    </div>
  );
}
