import { Suspense } from 'react';
import { ItemFilters } from '../../components/ItemFilters';
import { ItemGrid } from '../../components/ItemGrid';
import { ItemsSkeleton } from '../../components/ItemsSkeleton';
import { getItems } from '../../lib/data';

export const revalidate = 0;

export default async function BrowsePage({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const itemsPromise = getItems({
    category: searchParams.category,
    condition: searchParams.condition,
    query: searchParams.q
  });

  return (
    <div className="space-y-6 px-4 pb-16 pt-6 sm:px-6 lg:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-sand-900">Browse curated wardrobes</h1>
          <p className="text-sm text-sand-700">
            Filter by category, condition, and discover pieces aligned with your style.
          </p>
        </div>
      </div>

      <ItemFilters />

      <Suspense fallback={<ItemsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <ItemGrid itemsPromise={itemsPromise} />
      </Suspense>
    </div>
  );
}
