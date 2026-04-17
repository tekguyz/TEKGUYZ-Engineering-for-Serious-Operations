'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { useNetlifyForm } from '@/hooks/useNetlifyForm';
import { ContactInfo } from './contact/ContactInfo';
import { ContactForm } from './contact/ContactForm';
import { weightedEntry } from '@/lib/motion';

export function Contact() {
  const { error } = useNetlifyForm();

  return (
    <SectionWrapper id="contact" layer="conversion" className="py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <ContactInfo />
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-8 shadow-[var(--shadow-md)]">
          <ContactForm />
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            variants={weightedEntry}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed bottom-6 right-6 z-50 rounded-[var(--radius-md)] border border-[var(--color-danger)] bg-[var(--color-danger)]/10 px-4 py-3 text-[var(--text-sm)] font-medium text-[var(--color-danger)] shadow-[var(--shadow-md)] backdrop-blur-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
