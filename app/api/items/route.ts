import { NextResponse } from 'next/server';
import { getItems } from '../../../lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') ?? undefined;
  const condition = searchParams.get('condition') ?? undefined;
  const query = searchParams.get('q') ?? undefined;

  const items = await getItems({ category, condition, query });
  return NextResponse.json({ items });
}
