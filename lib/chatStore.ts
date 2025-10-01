import { randomUUID } from 'crypto';

export interface ChatMessage {
  id: string;
  conversationId: string;
  author: 'buyer' | 'seller';
  content: string;
  createdAt: string;
}

const chatStore = new Map<string, ChatMessage[]>();

export function seedConversation(conversationId: string) {
  if (!chatStore.has(conversationId)) {
    chatStore.set(conversationId, [
      {
        id: randomUUID(),
        conversationId,
        author: 'seller',
        content: 'Hi! Thanks for your interest. Let me know if you have any questions about the fit.',
        createdAt: new Date().toISOString()
      }
    ]);
  }
}

export function getMessages(conversationId: string): ChatMessage[] {
  seedConversation(conversationId);
  return chatStore.get(conversationId) ?? [];
}

export function addMessage(conversationId: string, content: string, author: 'buyer' | 'seller' = 'buyer'): ChatMessage {
  const message: ChatMessage = {
    id: randomUUID(),
    conversationId,
    author,
    content,
    createdAt: new Date().toISOString()
  };
  const existing = getMessages(conversationId);
  chatStore.set(conversationId, [...existing, message]);
  return message;
}
