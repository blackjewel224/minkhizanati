import Link from 'next/link';
import Image from 'next/image';
import { MarketplaceItem } from '../data/items';

export function ItemCard({ item }: { item: MarketplaceItem }) {
  return (
    <Link
      href={`/items/${item.id}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image src={item.coverImage} alt={item.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-sand-700">
          {item.condition}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-sand-500">{item.category}</p>
          <h3 className="font-display text-lg font-semibold text-sand-900">{item.name}</h3>
          <p className="text-sm text-sand-600">{item.brand}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-base font-semibold text-sand-800">${item.price}</p>
          <p className="text-xs text-sand-500">Listed {new Date(item.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
}
