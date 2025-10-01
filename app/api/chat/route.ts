import { NextResponse } from 'next/server';
import { addMessage, getMessages } from '../../../lib/chatStore';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const conversationId = searchParams.get('conversationId');

  if (!conversationId) {
    return NextResponse.json({ error: 'conversationId is required' }, { status: 400 });
  }

  const messages = getMessages(conversationId);
  return NextResponse.json({ messages });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { conversationId, content } = body;

  if (!conversationId || !content) {
    return NextResponse.json({ error: 'conversationId and content are required' }, { status: 400 });
  }

  const message = addMessage(conversationId, content, 'buyer');
  return NextResponse.json({ message }, { status: 201 });
}
