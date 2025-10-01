import Link from 'next/link';
import Image from 'next/image';
import { MarketplaceItem } from '../data/items';

interface FeaturedGridProps {
  items: MarketplaceItem[];
}

export function FeaturedGrid({ items }: FeaturedGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/items/${item.id}`}
          className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image src={item.coverImage} alt={item.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="space-y-1 p-5">
            <p className="text-xs uppercase tracking-wide text-sand-500">{item.category}</p>
            <h3 className="font-display text-lg font-semibold text-sand-900">{item.name}</h3>
            <p className="text-sm text-sand-600">{item.brand}</p>
            <p className="text-sm font-semibold text-sand-700">${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
