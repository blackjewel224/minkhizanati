import { NextResponse } from 'next/server';
import { getDeliveryStatus } from '../../../lib/deliveryService';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const conversationId = searchParams.get('conversationId');

  if (!conversationId) {
    return NextResponse.json({ error: 'conversationId is required' }, { status: 400 });
  }

  const checkpoints = await getDeliveryStatus(conversationId);
  return NextResponse.json({ checkpoints });
}
