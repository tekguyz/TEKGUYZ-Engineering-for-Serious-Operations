import { create } from 'zustand';

interface ChatState {
  isOpen: boolean;
  isMinimized: boolean;
  showProactiveTip: boolean;
  hasOpened: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsMinimized: (isMinimized: boolean) => void;
  setShowProactiveTip: (show: boolean) => void;
  setHasOpened: (hasOpened: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
  toggleMinimized: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  isMinimized: false,
  showProactiveTip: false,
  hasOpened: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  setIsMinimized: (isMinimized) => set({ isMinimized }),
  setShowProactiveTip: (showProactiveTip) => set({ showProactiveTip }),
  setHasOpened: (hasOpened) => set({ hasOpened }),
  openChat: () => set({ isOpen: true, isMinimized: false, showProactiveTip: false }),
  closeChat: () => set({ isOpen: false }),
  toggleMinimized: () => set((state) => ({ isMinimized: !state.isMinimized })),
}));
