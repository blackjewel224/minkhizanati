import Link from 'next/link';
import Image from 'next/image';
import { FeaturedGrid } from '../components/FeaturedGrid';
import { getFeaturedItems } from '../lib/data';

export default async function HomePage() {
  const featured = await getFeaturedItems();

  return (
    <div className="space-y-10 px-4 pb-16 pt-8 sm:px-6 lg:px-12">
      <section className="rounded-3xl bg-sand-100 p-6 shadow-sm sm:p-10">
        <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-start">
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-sand-900 sm:text-4xl">
              Curated second-hand treasures, handpicked by the Min Khizanati community.
            </h1>
            <p className="text-base text-sand-700 sm:text-lg">
              Discover authenticated pieces from beloved closets across MENA. Sell what you no longer wear and shop
              distinctive finds sustainably.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/browse"
                className="rounded-full bg-sand-500 px-6 py-3 text-center font-semibold text-white shadow transition hover:bg-sand-600"
              >
                Browse marketplace
              </Link>
              <Link
                href="/sell"
                className="rounded-full border border-sand-500 px-6 py-3 text-center font-semibold text-sand-700 transition hover:bg-sand-200"
              >
                Start selling
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-sand-200 sm:max-w-sm">
            <Image src="/hero-lookbook.svg" alt="Sustainable fashion collage" fill sizes="(min-width: 640px) 320px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-2xl font-semibold text-sand-900">Fresh drops</h2>
          <Link href="/browse" className="text-sm font-semibold text-sand-600 hover:text-sand-800">
            View all
          </Link>
        </div>
        <FeaturedGrid items={featured} />
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {[
          {
            title: 'Seamless chat & offers',
            body: 'Message sellers instantly, send offers, and secure the perfect price without leaving the listing.',
            icon: '💬'
          },
          {
            title: 'Protected payments',
            body: 'Stripe-powered checkout keeps transactions secure with buyer protection and automated payouts.',
            icon: '💳'
          },
          {
            title: 'Tracked deliveries',
            body: 'Integrated courier tracking keeps buyers and sellers in sync until the package arrives.',
            icon: '🚚'
          }
        ].map((feature) => (
          <div key={feature.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">{feature.icon}</div>
            <h3 className="mt-3 font-display text-xl font-semibold text-sand-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-sand-700">{feature.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
