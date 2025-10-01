import { MarketplaceItem } from '../data/items';
import { ItemCard } from './ItemCard';

export async function ItemGrid({
  itemsPromise
}: {
  itemsPromise: Promise<MarketplaceItem[]>;
}) {
  const items = await itemsPromise;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
