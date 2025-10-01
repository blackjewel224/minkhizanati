export default function StoriesPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 pb-20 pt-10 sm:px-6 lg:px-12">
      <h1 className="font-display text-3xl font-semibold text-sand-900">Circular fashion stories</h1>
      <div className="space-y-4 text-sm text-sand-700">
        <p>
          Follow the journeys of garments as they move between closets. Each story highlights the environmental impact
          saved and the cultural heritage preserved.
        </p>
        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-sand-900">From Beirut to Amman</h2>
          <p className="mt-2 text-sm text-sand-600">
            Lina&apos;s embroidered dress found a new life with Amira, who styled it for a family engagement party. Delivery
            tracking ensured it arrived on time and in perfect condition.
          </p>
        </article>
      </div>
    </div>
  );
}
