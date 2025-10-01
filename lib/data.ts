import { ITEMS, MarketplaceItem } from '../data/items';

interface ItemFilters {
  category?: string;
  condition?: string;
  query?: string;
}

export async function getFeaturedItems(): Promise<MarketplaceItem[]> {
  return ITEMS.slice(0, 3);
}

export async function getItems(filters: ItemFilters = {}): Promise<MarketplaceItem[]> {
  let results = [...ITEMS];

  if (filters.category) {
    results = results.filter((item) => item.category.toLowerCase() === filters.category?.toLowerCase());
  }

  if (filters.condition) {
    results = results.filter((item) => item.condition.toLowerCase() === filters.condition?.toLowerCase());
  }

  if (filters.query) {
    const query = filters.query.toLowerCase();
    results = results.filter((item) =>
      [item.name, item.brand, item.description].some((field) => field.toLowerCase().includes(query))
    );
  }

  return results;
}

export async function getItemById(id: string): Promise<MarketplaceItem | undefined> {
  return ITEMS.find((item) => item.id === id);
}
