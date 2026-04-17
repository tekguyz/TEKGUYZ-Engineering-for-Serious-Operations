import React from 'react';
import { Minus, X } from 'lucide-react';
import { useChatStore } from '@/store/useChatStore';

export function ChatHeader() {
  const { isMinimized, toggleMinimized, closeChat } = useChatStore();

  return (
    <div className="flex items-center justify-between bg-[var(--layer-conversion)] px-4 py-3 text-white">
      <div className="flex items-center gap-3">
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-[var(--text-sm)] font-[500]">TEKGUYZ Assistant</span>
          <span className="text-[10px] text-white/70">Powered by Gemini AI</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleMinimized}
          className="rounded-full p-1 hover:bg-white/20"
          aria-label="Minimize chat"
        >
          <Minus size={16} />
        </button>
        <button
          onClick={closeChat}
          className="rounded-full p-1 hover:bg-white/20"
          aria-label="Close chat"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
