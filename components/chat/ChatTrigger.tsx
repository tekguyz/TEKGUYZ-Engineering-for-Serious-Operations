import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeIn } from '@/lib/motion';
import { useChatStore } from '@/store/useChatStore';

export function ChatTrigger() {
  const { isOpen, showProactiveTip, openChat, setShowProactiveTip } = useChatStore();

  if (isOpen) return null;

  return (
    <>
      <AnimatePresence>
        {showProactiveTip && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="rounded-[var(--radius-md)] bg-[var(--color-bg)] px-4 py-2 text-[var(--text-sm)] font-medium text-[var(--color-text-primary)] shadow-[var(--shadow-md)] border border-[var(--color-border)]"
          >
            👋 Got questions about a project?
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={openChat}
        aria-label="Toggle Gemini Intelligence Chat"
        className="group flex h-12 w-12 items-center justify-center rounded-[var(--radius-full)] bg-[var(--layer-conversion)] text-white shadow-[var(--shadow-lg)] transition-transform hover:-translate-y-[2px] md:h-auto md:w-auto md:px-5 md:py-3 md:gap-3"
      >
        <div className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
        </div>
        <span className="hidden font-semibold md:block">AI Strategist</span>
      </button>
    </>
  );
}
