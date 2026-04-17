import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useNetlifyForm } from '@/hooks/useNetlifyForm';
import { FormRadioGroup } from './FormRadioGroup';
import { fadeIn } from '@/lib/motion';

const REQUEST_TYPES = ['Website or Platform', 'Client Portal / System', 'AI or Automation', 'Not sure yet'];

export function ContactForm() {
  const { isSubmitting, isSuccess, error, setError, submitForm } = useNetlifyForm();
  const [requestType, setRequestType] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!requestType) {
      setError('Please tell us what you need.');
      setTimeout(() => setError(null), 5000);
      return;
    }
    const formData = new FormData(e.currentTarget);
    submitForm(formData);
  };

  if (isSuccess) {
    return (
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex h-full flex-col items-center justify-center py-12 text-center"
      >
        <svg className="mb-6 h-16 w-16 text-[var(--color-success)]" viewBox="0 0 50 50">
          <motion.circle
            cx="25"
            cy="25"
            r="23"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 25l7 7 13-13"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          />
        </svg>
        <h3 className="mb-2 text-[var(--text-2xl)] font-bold text-[var(--color-text-primary)]">
          Message received.
        </h3>
        <p className="text-[var(--color-text-muted)]">
          We&apos;ll respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/forms.html"
      encType="multipart/form-data"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="absolute opacity-0 -z-10" aria-hidden="true">
        <input type="text" name="bot-field" tabIndex={-1} />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[var(--text-xs)] font-[600] uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-secondary)]">
            Who is this?
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2.5 text-[var(--text-sm)] text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-brand)] focus:shadow-[0_0_0_3px_var(--color-brand-glow)] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-[var(--text-xs)] font-[600] uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-secondary)]">
            What is your business called?
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            placeholder="Company name"
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2.5 text-[var(--text-sm)] text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-brand)] focus:shadow-[0_0_0_3px_var(--color-brand-glow)] focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-[var(--text-xs)] font-[600] uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-secondary)]">
          Where should we reply?
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2.5 text-[var(--text-sm)] text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-brand)] focus:shadow-[0_0_0_3px_var(--color-brand-glow)] focus:outline-none"
        />
      </div>

      <FormRadioGroup
        label="What is the scale of this project?"
        options={REQUEST_TYPES}
        value={requestType}
        onChange={setRequestType}
        required
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[var(--text-xs)] font-[600] uppercase tracking-[var(--tracking-wider)] text-[var(--color-text-secondary)]">
          What are we building together?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Describe the system or problem you need us to solve."
          className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2.5 text-[var(--text-sm)] text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-brand)] focus:shadow-[0_0_0_3px_var(--color-brand-glow)] focus:outline-none"
        />
      </div>

      <MagneticButton>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group mt-2 flex w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-brand)] px-5 py-3 text-[var(--text-sm)] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[var(--color-brand-hover)] hover:shadow-[var(--shadow-sm)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] disabled:pointer-events-none disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </MagneticButton>
    </form>
  );
}
