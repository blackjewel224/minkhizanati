'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const categories = ['All', 'Dresses', 'Sets', 'Accessories'];
const conditions = ['All', 'New with tags', 'Like new', 'Gently used'];

export function ItemFilters() {
  const router = useRouter();
  const params = useSearchParams();

  const updateParam = useCallback(
    (key: string, value: string | null) => {
      const newParams = new URLSearchParams(params?.toString());
      if (value === null || value === 'All') {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
      router.push(`/browse?${newParams.toString()}`);
    },
    [router, params]
  );

  return (
    <div className="space-y-3 rounded-3xl bg-white p-4 shadow-sm sm:flex sm:items-center sm:justify-between sm:space-y-0">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const active = params?.get('category') === category || (category === 'All' && !params?.get('category'));
          return (
            <button
              key={category}
              onClick={() => updateParam('category', category === 'All' ? null : category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active ? 'bg-sand-500 text-white shadow' : 'bg-sand-100 text-sand-700 hover:bg-sand-200'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2">
        {conditions.map((condition) => {
          const active = params?.get('condition') === condition || (condition === 'All' && !params?.get('condition'));
          return (
            <button
              key={condition}
              onClick={() => updateParam('condition', condition === 'All' ? null : condition)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active ? 'bg-sand-800 text-white shadow' : 'bg-sand-100 text-sand-700 hover:bg-sand-200'
              }`}
            >
              {condition}
            </button>
          );
        })}
      </div>
    </div>
  );
}
