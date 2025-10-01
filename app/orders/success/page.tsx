import Link from 'next/link';

export default function OrderSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 pb-20 pt-16 text-center sm:px-6 lg:px-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sand-200 text-3xl">✨</div>
      <h1 className="font-display text-3xl font-semibold text-sand-900">Payment confirmed</h1>
      <p className="text-sm text-sand-600">
        Thank you for shopping responsibly. We&apos;ve notified the seller and shared delivery tracking inside your inbox.
      </p>
      <Link href="/browse" className="inline-flex rounded-full bg-sand-500 px-6 py-3 text-sm font-semibold text-white shadow">
        Keep browsing
      </Link>
    </div>
  );
}
