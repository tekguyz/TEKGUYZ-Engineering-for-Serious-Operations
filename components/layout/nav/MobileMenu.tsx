import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { stagger, weightedEntry, fadeIn } from '@/lib/motion';
import { Logo } from '@/components/ui/Logo';

interface LinkItem {
  name: string;
  href: string;
  id: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  links: LinkItem[];
  scrollToTop: (e: React.MouseEvent) => void;
}

export function MobileMenu({ isOpen, onClose, links, scrollToTop }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-[100] flex flex-col bg-[var(--color-bg)] px-6 py-8"
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={scrollToTop}
              className="group transition-opacity hover:opacity-80"
              aria-label="TEKGUYZ Home"
            >
              <Logo size={28} />
            </Link>
            <button
              onClick={onClose}
              className="flex h-9 w-9 cursor-pointer items-center justify-center text-[var(--color-text-primary)]"
              aria-label="Close navigation"
            >
              <X size={24} />
            </button>
          </div>

          <motion.nav
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="mt-24 flex flex-col gap-8"
          >
            {links.map((link) => (
              <motion.div key={link.id} variants={weightedEntry}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-[var(--text-4xl)] font-bold text-[var(--color-text-primary)]"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={weightedEntry}>
              <Link
                href="/#contact"
                onClick={onClose}
                className="mt-8 inline-flex w-max items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-brand)] px-[24px] py-[12px] text-[var(--text-lg)] font-semibold text-white"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
