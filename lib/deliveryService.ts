import { ITEMS } from '../data/items';

export async function getDeliveryStatus(conversationId: string) {
  return ITEMS.find((item) => item.conversationId === conversationId)?.deliveryCheckpoints ?? [];
}
