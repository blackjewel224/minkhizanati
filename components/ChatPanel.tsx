'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface ChatPanelProps {
  conversationId: string;
  seller: {
    name: string;
    avatar: string;
  };
}

interface ChatMessage {
  id: string;
  conversationId: string;
  author: 'buyer' | 'seller';
  content: string;
  createdAt: string;
}

export function ChatPanel({ conversationId, seller }: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch(`/api/chat?conversationId=${conversationId}`);
      const data = await res.json();
      setMessages(data.messages);
      setLoading(false);
    }

    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [conversationId]);

  async function handleSend() {
    if (!draft.trim()) return;
    setSending(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationId, content: draft.trim() })
      });
      const data = await res.json();
      if (res.ok) {
        setMessages((prev) => [...prev, data.message]);
        setDraft('');
      }
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm">
      <header className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-sand-200">
          <img src={seller.avatar} alt={seller.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-sand-900">Chat with {seller.name}</p>
          <p className="text-xs text-sand-600">Typical response time: under 2 hours</p>
        </div>
      </header>

      <div className="scrollbar-thin flex-1 space-y-3 overflow-y-auto rounded-2xl bg-sand-50 p-3">
        {loading ? (
          <p className="text-center text-xs text-sand-500">Loading messages…</p>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={clsx('max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm', {
                'ml-auto bg-sand-500 text-white': message.author === 'buyer',
                'bg-white text-sand-800': message.author === 'seller'
              })}
            >
              <p>{message.content}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-sand-200">
                {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="flex items-center gap-2 rounded-full border border-sand-200 bg-sand-50 px-3 py-2">
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask about fit, fabric, or make an offer…"
          className="flex-1 border-none bg-transparent text-sm outline-none placeholder:text-sand-400"
        />
        <button
          onClick={handleSend}
          disabled={sending}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-500 text-white shadow disabled:opacity-60"
        >
          <PaperAirplaneIcon className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </section>
  );
}
