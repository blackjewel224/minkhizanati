import { format, subDays } from 'date-fns';

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  totalSales: number;
}

export interface DeliveryCheckpoint {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  completed: boolean;
}

export interface MarketplaceItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  condition: 'New with tags' | 'Like new' | 'Gently used';
  description: string;
  size: string;
  material: string;
  coverImage: string;
  gallery: string[];
  seller: Seller;
  createdAt: string;
  conversationId: string;
  deliveryCheckpoints: DeliveryCheckpoint[];
}

const sellerA: Seller = {
  id: 'seller-a',
  name: 'Lina K.',
  avatar: '/avatars/lina.svg',
  rating: 4.9,
  totalSales: 132
};

const sellerB: Seller = {
  id: 'seller-b',
  name: 'Hana B.',
  avatar: '/avatars/hana.svg',
  rating: 4.8,
  totalSales: 98
};

const now = new Date();

export const ITEMS: MarketplaceItem[] = [
  {
    id: 'linen-set-001',
    name: 'Handwoven Linen Co-ord Set',
    brand: 'Ayla Atelier',
    price: 120,
    category: 'Sets',
    condition: 'Like new',
    description:
      'Two-piece linen co-ord sourced from a local artisan collective. Lightweight, breathable and ideal for summer evenings.',
    size: 'M',
    material: '100% linen',
    coverImage: '/items/linen-set.svg',
    gallery: ['/items/linen-set-2.svg', '/items/linen-set-detail.svg'],
    seller: sellerA,
    createdAt: subDays(now, 2).toISOString(),
    conversationId: 'conv-linen-set-001',
    deliveryCheckpoints: [
      {
        id: 'dp1',
        title: 'Order confirmed',
        description: 'Seller accepted your purchase.',
        timestamp: format(subDays(now, 1), 'PPpp'),
        completed: true
      },
      {
        id: 'dp2',
        title: 'Item dispatched',
        description: 'Package picked up by courier.',
        timestamp: format(now, 'PPpp'),
        completed: true
      },
      {
        id: 'dp3',
        title: 'Out for delivery',
        description: 'Courier is on the way.',
        timestamp: '',
        completed: false
      },
      {
        id: 'dp4',
        title: 'Delivered',
        description: 'Package successfully delivered.',
        timestamp: '',
        completed: false
      }
    ]
  },
  {
    id: 'beaded-bag-014',
    name: 'Vintage Beaded Shoulder Bag',
    brand: 'Unknown designer',
    price: 85,
    category: 'Accessories',
    condition: 'Gently used',
    description: 'Statement beaded bag from the early 2000s with intact lining and a sturdy zipper.',
    size: 'One size',
    material: 'Glass beads, cotton lining',
    coverImage: '/items/beaded-bag.svg',
    gallery: ['/items/beaded-bag-side.svg', '/items/beaded-bag-detail.svg'],
    seller: sellerB,
    createdAt: subDays(now, 5).toISOString(),
    conversationId: 'conv-beaded-bag-014',
    deliveryCheckpoints: [
      {
        id: 'db1',
        title: 'Order confirmed',
        description: 'Seller accepted your purchase.',
        timestamp: format(subDays(now, 3), 'PPpp'),
        completed: true
      },
      {
        id: 'db2',
        title: 'Item dispatched',
        description: 'Package picked up by courier.',
        timestamp: format(subDays(now, 2), 'PPpp'),
        completed: true
      },
      {
        id: 'db3',
        title: 'Out for delivery',
        description: 'Courier is on the way.',
        timestamp: '',
        completed: false
      },
      {
        id: 'db4',
        title: 'Delivered',
        description: 'Package successfully delivered.',
        timestamp: '',
        completed: false
      }
    ]
  },
  {
    id: 'silk-dress-007',
    name: 'Embroidered Silk Maxi Dress',
    brand: 'Zeinab Couture',
    price: 210,
    category: 'Dresses',
    condition: 'New with tags',
    description:
      'Silk maxi dress with intricate hand embroidery sourced from a Beirut designer. Comes with original tags.',
    size: 'S',
    material: '100% silk',
    coverImage: '/items/silk-dress.svg',
    gallery: ['/items/silk-dress-back.svg', '/items/silk-dress-detail.svg'],
    seller: sellerA,
    createdAt: subDays(now, 1).toISOString(),
    conversationId: 'conv-silk-dress-007',
    deliveryCheckpoints: [
      {
        id: 'ds1',
        title: 'Order confirmed',
        description: 'Seller accepted your purchase.',
        timestamp: format(subDays(now, 1), 'PPpp'),
        completed: true
      },
      {
        id: 'ds2',
        title: 'Item dispatched',
        description: 'Package picked up by courier.',
        timestamp: '',
        completed: false
      },
      {
        id: 'ds3',
        title: 'Out for delivery',
        description: 'Courier is on the way.',
        timestamp: '',
        completed: false
      },
      {
        id: 'ds4',
        title: 'Delivered',
        description: 'Package successfully delivered.',
        timestamp: '',
        completed: false
      }
    ]
  }
];
