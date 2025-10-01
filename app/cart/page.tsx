export default function CartPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 pb-20 pt-10 sm:px-6 lg:px-12">
      <h1 className="font-display text-3xl font-semibold text-sand-900">Your cart</h1>
      <p className="text-sm text-sand-600">Items you add from the marketplace will appear here.</p>
      <div className="rounded-3xl bg-white p-6 text-sm text-sand-600 shadow-sm">
        Your cart is empty. Continue browsing to add your next pre-loved treasure.
      </div>
    </div>
  );
}
