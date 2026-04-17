import React from 'react';
import { Zap, MapPin, Users } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { useChatStore } from '@/store/useChatStore';

export function ContactInfo() {
  const { openChat } = useChatStore();

  return (
    <div className="flex flex-col">
      <Eyebrow layer="conversion">Get In Touch</Eyebrow>
      <h2 className="mb-6 text-[var(--text-4xl)] font-[800] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
        Tell us what <br /> you need to build.
      </h2>
      <p className="mb-10 text-[var(--text-base)] leading-[1.6] text-[var(--color-text-secondary)]">
        Whether you have a full plan or just a problem that needs solving—we want to hear about it. Tell us what you’re working on and we’ll tell you if we can help.
      </p>

      <div className="mb-12 flex flex-col gap-4">
        <div className="flex items-center gap-3 text-[var(--text-sm)] text-[var(--color-text-secondary)]">
          <Zap size={18} className="text-[var(--layer-conversion)]" />
          <span>Usually responds within 24 hours</span>
        </div>
        <div className="flex items-center gap-3 text-[var(--text-sm)] text-[var(--color-text-secondary)]">
          <MapPin size={18} className="text-[var(--layer-conversion)]" />
          <span>Based in South Florida — available remotely</span>
        </div>
        <div className="flex items-center gap-3 text-[var(--text-sm)] text-[var(--color-text-secondary)]">
          <Users size={18} className="text-[var(--layer-conversion)]" />
          <span>Open to projects and full-time engineering roles</span>
        </div>
      </div>

      <div
        onClick={openChat}
        className="group mt-auto flex cursor-pointer items-center gap-4 rounded-[var(--radius-md)] border border-[var(--layer-conversion-border)] bg-[var(--layer-conversion-bg)] p-4 transition-colors hover:bg-[var(--layer-conversion-bg)]/80"
      >
        <div className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--layer-conversion)] opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--layer-conversion)]"></span>
        </div>
        <div className="flex flex-col">
          <span className="font-[600] text-[var(--layer-conversion-text)] group-hover:underline">
            Or chat with our AI Strategist →
          </span>
          <span className="text-[var(--text-xs)] text-[var(--color-text-muted)]">
            Ask about our work, timeline, or anything else.
          </span>
        </div>
      </div>
    </div>
  );
}
