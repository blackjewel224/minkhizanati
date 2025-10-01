export default function SellPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 pb-20 pt-10 sm:px-6 lg:px-12">
      <h1 className="font-display text-3xl font-semibold text-sand-900">List an item</h1>
      <p className="text-sm text-sand-600">
        Complete your wardrobe story by listing items with high-quality images and provenance details. Payments are held in
        escrow until delivery is confirmed.
      </p>
      <form className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-sand-700">
            Item name
            <input className="w-full rounded-2xl border border-sand-200 px-4 py-3" placeholder="Vintage silk blouse" />
          </label>
          <label className="space-y-2 text-sm text-sand-700">
            Brand
            <input className="w-full rounded-2xl border border-sand-200 px-4 py-3" placeholder="Local designer" />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-sand-700">
            Category
            <select className="w-full rounded-2xl border border-sand-200 px-4 py-3">
              <option>Dresses</option>
              <option>Sets</option>
              <option>Accessories</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-sand-700">
            Condition
            <select className="w-full rounded-2xl border border-sand-200 px-4 py-3">
              <option>New with tags</option>
              <option>Like new</option>
              <option>Gently used</option>
            </select>
          </label>
        </div>
        <label className="space-y-2 text-sm text-sand-700">
          Description
          <textarea className="w-full rounded-2xl border border-sand-200 px-4 py-3" rows={4} />
        </label>
        <button type="submit" className="w-full rounded-full bg-sand-500 px-6 py-3 text-sm font-semibold text-white shadow">
          Submit listing
        </button>
      </form>
    </div>
  );
}
