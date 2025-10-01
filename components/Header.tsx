'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Bars3Icon, ShoppingBagIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Browse' },
  { href: '/sell', label: 'Sell' },
  { href: '/stories', label: 'Stories' }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { status, data: session } = useSession();

  return (
    <header className="sticky top-0 z-40 bg-sand-50/95 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-sand-700 shadow-sm"
            aria-label="Open navigation menu"
          >
            {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-sand-700 shadow-sm">
            <span className="sr-only">Search</span>
            🔍
          </button>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Min Khizanati logo" width={120} height={36} priority />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-sand-700 shadow-sm"
          >
            <ShoppingBagIcon className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Link>
          <button
            onClick={() => (status === 'authenticated' ? signOut() : signIn())}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-sand-700 shadow-sm"
          >
            <UserCircleIcon className="h-5 w-5" />
            <span className="sr-only">{status === 'authenticated' ? 'Log out' : 'Log in'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-sand-200 bg-white px-4 py-4 sm:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-2xl border border-transparent bg-sand-100 px-4 py-3 text-center text-base font-semibold text-sand-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="rounded-2xl bg-sand-900 px-4 py-3 text-center text-sm font-semibold text-white">
              {status === 'authenticated'
                ? `Logged in as ${session?.user?.name ?? session?.user?.email ?? 'member'}`
                : 'Log in to access offers'}
            </li>
          </ul>
        </nav>
      )}

      <nav className="hidden items-center justify-center gap-6 border-t border-sand-200 bg-white py-3 sm:flex">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm font-semibold text-sand-700 hover:text-sand-900">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
