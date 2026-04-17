// lib/motion.ts
// TEKGUYZ Motion Vocabulary — import from here, never write inline animation objects.

export const weightedEntry = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 280,
      damping: 22,
      mass: 0.8,
      delay,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const, delay },
  }),
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.06 } }
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
  }
}

export const slideRight = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 }
  }
}

// Headlines only. Use custom={index} on each word span.
export const wordReveal = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 280, damping: 22, delay: i * 0.04 }
  })
}

// Hover state for primary CTAs
export const pressLift = {
  rest:  { y: 0 },
  hover: { y: -4,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
  }
}

// Standard viewport config — use on every whileInView element
export const viewport = { once: true, margin: '-80px' }
