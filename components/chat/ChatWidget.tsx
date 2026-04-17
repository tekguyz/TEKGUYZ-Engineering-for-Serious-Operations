'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useChatStore } from '@/store/useChatStore';
import { useChatEngine } from '@/hooks/useChatEngine';
import { weightedEntry } from '@/lib/motion';

import { ChatTrigger } from './ChatTrigger';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';

export default function ChatWidget() {
  const { isOpen, isMinimized, hasOpened, setHasOpened, setShowProactiveTip } = useChatStore();
  const { messages, setMessages, input, setInput, isLoading, messageCount, submitMessage } = useChatEngine();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setShowProactiveTip(true);
        setTimeout(() => setShowProactiveTip(false), 5000);
      }
    }, 20000);
    return () => clearTimeout(timer);
  }, [hasOpened, setShowProactiveTip]);

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      setMessages([
        {
          role: 'assistant',
          content: 'Hey. Are you looking to build a new platform, or automate an existing system? Ask me anything about how we work.',
          suggestions: ['How we work', 'See our systems', 'Start a project']
        }
      ]);
    }
  }, [isOpen, hasOpened, setHasOpened, setMessages]);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4 md:bottom-6 md:right-6">
        <ChatTrigger />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={weightedEntry}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ y: isMinimized ? 'calc(100% - 60px)' : 0 }}
            className={cn(
              "fixed z-50 flex flex-col overflow-hidden bg-[var(--color-bg)] shadow-[var(--shadow-lg)] transition-all duration-300",
              // Mobile: Full screen drawer below nav
              "bottom-0 left-0 right-0 top-[var(--nav-height)] w-full h-[calc(100vh-var(--nav-height))] rounded-none border-t border-[var(--color-border)]",
              // Desktop: Floating bottom-right with spacing, slightly wider
              "md:bottom-6 md:right-6 md:top-auto md:left-auto md:h-[80vh] md:w-[500px] md:max-h-[800px] md:rounded-[var(--radius-lg)] md:border md:border-[var(--color-border)]"
            )}
            role="dialog"
            aria-label="Chat with TEKGUYZ AI Strategist"
            aria-modal="true"
          >
            <ChatHeader />
            <MessageList 
              messages={messages} 
              isLoading={isLoading} 
              onSuggestionClick={(suggestion) => submitMessage(suggestion)}
            />
            <ChatInput 
              input={input} 
              setInput={setInput} 
              isLoading={isLoading} 
              messageCount={messageCount} 
              submitMessage={submitMessage} 
              showSuggestions={!isLoading && messageCount < 30}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

