'use client';

import * as React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { usePathname } from 'next/navigation';

export function ScrollProgress() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!pathname?.startsWith('/projects/')) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100]"
      style={{
        scaleX,
        transformOrigin: '0%',
        background: 'linear-gradient(90deg, var(--layer-evidence), var(--color-accent))'
      }}
    />
  );
}
