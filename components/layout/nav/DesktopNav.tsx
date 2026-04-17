import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { fadeIn } from '@/lib/motion';
import { SectionId } from '@/hooks/useActiveSection';

interface LinkItem {
  name: string;
  href: string;
  id: string;
}

interface Props {
  links: LinkItem[];
  activeSection: SectionId;
}

export function DesktopNav({ links, activeSection }: Props) {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <Link
            key={link.id}
            href={link.href}
            className={cn(
              'link-underline relative py-2 text-[var(--text-sm)] font-medium transition-colors',
              isActive
                ? 'text-[var(--layer-authority-text)]'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            )}
          >
            {link.name}
            {isActive && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[var(--layer-authority-text)]"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
