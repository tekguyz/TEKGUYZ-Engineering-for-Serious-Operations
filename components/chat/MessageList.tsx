import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Message } from '@/hooks/useChatEngine';
import { useAutoScroll } from '@/hooks/useAutoScroll';
import { useChatStore } from '@/store/useChatStore';
import { motion } from 'motion/react';

interface Props {
  messages: Message[];
  isLoading: boolean;
  onSuggestionClick: (suggestion: string) => void;
}

function Typewriter({ text, speed = 20, onComplete }: { text: string, speed?: number, onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return <span>{displayedText}</span>;
}

export function MessageList({ messages, isLoading, onSuggestionClick }: Props) {
  const messagesEndRef = useAutoScroll<HTMLDivElement>([messages, isLoading]);
  const { closeChat } = useChatStore();

  return (
    <div className="flex-1 overflow-y-auto p-4" role="log" aria-live="polite">
      <div className="flex flex-col gap-4">
        {messages.map((msg, idx) => {
          const isLast = idx === messages.length - 1;
          const isAssistant = msg.role === 'assistant';

          return (
            <div key={idx} className="flex flex-col gap-2">
              <div
                className={cn(
                  'max-w-[85%] px-4 py-2.5 text-[var(--text-sm)]',
                  msg.role === 'user'
                    ? 'self-end rounded-[18px_18px_4px_18px] bg-[var(--layer-conversion)] text-white'
                    : 'self-start rounded-[18px_18px_18px_4px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]'
                )}
              >
                {isAssistant && isLast ? (
                  <Typewriter text={msg.content} />
                ) : (
                  msg.content
                )}
              </div>

              {isAssistant && isLast && msg.suggestions && msg.suggestions.length > 0 && (
                <div className="flex flex-wrap gap-2 self-start pl-2">
                  {msg.suggestions.map((suggestion, sIdx) => (
                    <motion.button
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + sIdx * 0.1 }}
                      key={sIdx}
                      onClick={() => onSuggestionClick(suggestion)}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-[var(--text-xs)] font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--layer-conversion)] hover:text-[var(--layer-conversion)]"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <>
            <span className="ml-2 text-[10px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
              Strategist is thinking...
            </span>
            <div className="rounded-[18px_18px_18px_4px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3">
              <div className="flex gap-1.5">
                <div 
                  className="h-2 w-2 animate-bounce rounded-full bg-[var(--layer-conversion)]" 
                  style={{ animationDelay: '0ms' }} 
                />
                <div 
                  className="h-2 w-2 animate-bounce rounded-full bg-[var(--layer-conversion)]" 
                  style={{ animationDelay: '150ms' }} 
                />
                <div 
                  className="h-2 w-2 animate-bounce rounded-full bg-[var(--layer-conversion)]" 
                  style={{ animationDelay: '300ms' }} 
                />
              </div>
            </div>
          </>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
