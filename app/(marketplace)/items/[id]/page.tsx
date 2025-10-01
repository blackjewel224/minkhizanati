import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ChatPanel } from '../../../../components/ChatPanel';
import { CheckoutPanel } from '../../../../components/CheckoutPanel';
import { DeliveryTimeline } from '../../../../components/DeliveryTimeline';
import { getItemById } from '../../../../lib/data';

interface ItemPageProps {
  params: { id: string };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const item = await getItemById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <div className="space-y-8 px-4 pb-20 pt-6 sm:px-6 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-sand-200">
            <Image src={item.coverImage} alt={item.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src={item.seller.avatar}
                alt={item.seller.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-sand-900">{item.seller.name}</p>
                <p className="text-xs text-sand-600">{item.seller.rating} ★ • {item.seller.totalSales} sales</p>
              </div>
            </div>
            <p className="text-sm text-sand-700">{item.description}</p>
            <ul className="grid gap-2 text-sm text-sand-700 sm:grid-cols-2">
              <li>
                <span className="font-semibold text-sand-900">Category:</span> {item.category}
              </li>
              <li>
                <span className="font-semibold text-sand-900">Condition:</span> {item.condition}
              </li>
              <li>
                <span className="font-semibold text-sand-900">Size:</span> {item.size}
              </li>
              <li>
                <span className="font-semibold text-sand-900">Material:</span> {item.material}
              </li>
            </ul>
          </div>
          <DeliveryTimeline checkpoints={item.deliveryCheckpoints} />
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-display text-2xl font-semibold text-sand-900">{item.name}</h1>
                <p className="mt-1 text-sm text-sand-600">{item.brand}</p>
              </div>
              <p className="rounded-full bg-sand-100 px-4 py-2 text-right font-semibold text-sand-800">${item.price}</p>
            </div>
            <CheckoutPanel item={item} />
          </div>

          <ChatPanel conversationId={item.conversationId} seller={item.seller} />
        </aside>
      </div>
    </div>
  );
}
