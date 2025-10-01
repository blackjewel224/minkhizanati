'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function handleGuestSignIn(event: React.FormEvent) {
    event.preventDefault();
    try {
      await signIn('credentials', {
        email,
        callbackUrl: '/'
      });
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-6 rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-center font-display text-2xl font-semibold text-sand-900">Access your wardrobe</h1>
        <p className="text-center text-sm text-sand-600">
          Sign in with Google, Facebook, or continue as a guest to chat with sellers and track deliveries.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full rounded-full border border-sand-200 px-6 py-3 text-sm font-semibold text-sand-800 shadow-sm"
          >
            Continue with Google
          </button>
          <button
            onClick={() => signIn('facebook', { callbackUrl: '/' })}
            className="w-full rounded-full border border-sand-200 px-6 py-3 text-sm font-semibold text-sand-800 shadow-sm"
          >
            Continue with Facebook
          </button>
        </div>

        <form onSubmit={handleGuestSignIn} className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wide text-sand-500">Or enter email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-full border border-sand-200 px-4 py-3 text-sm text-sand-800"
            placeholder="guest@example.com"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-sand-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-sand-600"
          >
            Continue as guest
          </button>
        </form>

        {error && <p className="text-center text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}
