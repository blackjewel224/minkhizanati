'use client';

import { useState } from 'react';
import { MarketplaceItem } from '../data/items';

export function CheckoutPanel({ item }: { item: MarketplaceItem }) {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(item.size);
  const [shipping, setShipping] = useState('standard');
  const [error, setError] = useState<string | null>(null);

  const shippingCost = shipping === 'express' ? 18 : 9;
  const total = item.price + shippingCost;

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: item.id })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? 'Unable to initiate checkout');
      }
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-sand-500">Size</label>
        <div className="flex gap-2">
          {[item.size, 'XS', 'S', 'M', 'L', 'XL'].map((option) => (
            <button
              key={option}
              onClick={() => setSize(option)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                size === option ? 'bg-sand-800 text-white' : 'bg-sand-100 text-sand-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-sand-500">Shipping</label>
        <div className="space-y-2">
          {[
            { id: 'standard', name: 'Standard (3-5 days)', price: 9 },
            { id: 'express', name: 'Express (1-2 days)', price: 18 }
          ].map((option) => (
            <label key={option.id} className="flex items-center justify-between rounded-2xl bg-sand-100 px-4 py-3">
              <span className="text-sm text-sand-700">{option.name}</span>
              <input
                type="radio"
                name="shipping"
                value={option.id}
                checked={shipping === option.id}
                onChange={() => setShipping(option.id)}
              />
              <span className="text-sm font-semibold text-sand-800">${option.price}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-sand-100 p-4 text-sm text-sand-700">
        <div className="flex items-center justify-between">
          <span>Item</span>
          <span>${item.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping ({shipping})</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-sand-200 pt-2 text-base font-semibold text-sand-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full rounded-full bg-sand-500 px-6 py-3 text-center text-sm font-semibold text-white shadow hover:bg-sand-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Redirecting…' : 'Checkout with Stripe'}
      </button>
    </div>
  );
}
