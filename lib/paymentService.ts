import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

let stripeClient: Stripe | null = null;

function getStripe(): Stripe | null {
  if (!stripeSecretKey) {
    return null;
  }

  if (!stripeClient) {
    stripeClient = new Stripe(stripeSecretKey, {
      apiVersion: '2023-08-16'
    });
  }

  return stripeClient;
}

export async function createCheckoutSession({
  itemId,
  name,
  amount,
  successUrl,
  cancelUrl
}: {
  itemId: string;
  name: string;
  amount: number;
  successUrl: string;
  cancelUrl: string;
}) {
  const stripe = getStripe();

  if (!stripe) {
    return {
      mode: 'test',
      checkoutUrl: `${successUrl}?mockPayment=true&item=${itemId}`
    };
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name
          },
          unit_amount: Math.round(amount * 100)
        },
        quantity: 1
      }
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      itemId
    }
  });

  return { checkoutUrl: session.url };
}
