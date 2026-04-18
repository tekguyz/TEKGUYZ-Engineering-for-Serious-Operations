import { useState } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  suggestions?: string[];
}

export interface ChatAPIResponse {
  message: string;
  error?: string;
}

export function useChatEngine(initialMessages: Message[] = []) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const parseMessage = (text: string): { content: string; suggestions: string[] } => {
    const suggestionRegex = /\[([^\]]+)\]/g;
    const suggestions: string[] = [];
    let content = text.replace(suggestionRegex, (_, p1) => {
      suggestions.push(p1.trim());
      return '';
    }).trim();
    
    return { content, suggestions };
  };

  const submitMessage = async (textOverride?: string) => {
    const text = textOverride || input;
    if (!text.trim() || isLoading || messageCount >= 30) return;

    const newMessages = [...messages, { role: 'user' as const, content: text.trim() }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    setMessageCount((prev) => prev + 1);

    try {
      const pageContext = typeof window !== 'undefined' ? window.location.href : 'Unknown';
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            messages: newMessages.map(m => ({ role: m.role, content: m.content })),
            context: pageContext
        })
      });
      
      if (!res.ok) {
        throw new Error('Failed to fetch chat response');
      }

      const data: ChatAPIResponse = await res.json();
      const { content, suggestions } = parseMessage(data.message);
      setMessages([...newMessages, { role: 'assistant', content, suggestions }]);
    } catch (error) {
      console.error('[CHAT_ENGINE_ERROR]', error);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Our AI is temporarily unavailable. The contact form reaches us directly — we respond within 24 hours.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    setMessages,
    input,
    setInput,
    isLoading,
    messageCount,
    submitMessage
  };
}
