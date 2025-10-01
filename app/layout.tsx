import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Providers } from '../components/Providers';

export const metadata: Metadata = {
  title: 'Min Khizanati Marketplace',
  description:
    'Mobile-first social marketplace for curated second-hand fashion with secure payments and delivery tracking.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-sand-50 text-sand-900">
      <body className="min-h-screen font-body">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-sand-50">{children}</main>
            <footer className="bg-sand-200 p-6 text-center text-sm text-sand-700">
              © {new Date().getFullYear()} Min Khizanati. Crafted with care for circular fashion.
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
