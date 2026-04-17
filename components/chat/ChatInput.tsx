import React, { useRef } from 'react';
import { Send } from 'lucide-react';
import { useChatStore } from '@/store/useChatStore';

const SUGGESTIONS = [
  "What does TEKGUYZ build?",
  "Tell me about Crispy Bacon",
  "Can you build AI features?",
  "How long does a project take?",
  "What's a typical project cost?"
];

interface Props {
  input: string;
  setInput: (val: string) => void;
  isLoading: boolean;
  messageCount: number;
  submitMessage: (textOverride?: string) => void;
  showSuggestions: boolean;
}

export function ChatInput({ input, setInput, isLoading, messageCount, submitMessage, showSuggestions }: Props) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { closeChat } = useChatStore();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitMessage();
    }
  };

  const handleScrollToContact = () => {
    closeChat();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {showSuggestions && (
        <div className="flex gap-2 overflow-x-auto border-t border-[var(--color-border)] p-3 scrollbar-hide">
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => submitMessage(suggestion)}
              className="whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 text-[var(--text-xs)] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--layer-conversion)] hover:text-[var(--layer-conversion)]"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <div className="border-t border-[var(--color-border)] p-3">
        {messageCount >= 30 ? (
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-[var(--text-xs)] text-[var(--color-text-secondary)]">
              Chat limit reached. The contact form is the best next step.
            </span>
            <button
              onClick={handleScrollToContact}
              className="text-[var(--text-sm)] font-semibold text-[var(--layer-conversion)] hover:underline"
            >
              Go to Contact Form
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); submitMessage(); }}
            className="flex items-end gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] p-1 focus-within:border-[var(--layer-conversion)]"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              className="max-h-[120px] min-h-[38px] w-full resize-none bg-transparent px-3 py-2 text-[var(--text-sm)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none"
              rows={1}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--layer-conversion)] text-white transition-opacity disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </>
  );
}
