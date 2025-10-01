import { NextResponse } from 'next/server';
import { createCheckoutSession } from '../../../lib/paymentService';
import { getItemById } from '../../../lib/data';

export async function POST(request: Request) {
  const body = await request.json();
  const { itemId } = body;

  if (!itemId) {
    return NextResponse.json({ error: 'itemId is required' }, { status: 400 });
  }

  const item = await getItemById(itemId);

  if (!item) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
  }

  const checkout = await createCheckoutSession({
    itemId: item.id,
    name: item.name,
    amount: item.price,
    successUrl: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/orders/success`,
    cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/items/${item.id}`
  });

  return NextResponse.json(checkout, { status: 201 });
}
