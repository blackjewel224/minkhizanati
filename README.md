# Min Khizanati Marketplace

Mobile-first Next.js marketplace prototype focused on the initial shopping journey: home, browse, and item details with integrated chat, payments, and delivery tracking scaffolding. All source files now live directly in the repository so you can clone and run without extracting any archives.

## Getting started

1. Install dependencies

```bash
npm install
```

2. Copy environment variables and provide OAuth + Stripe keys

```bash
cp .env.example .env.local
# fill GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET, STRIPE_SECRET_KEY
```

3. Run the development server

```bash
npm run dev
```

The app is available at `http://localhost:3000`.

## OAuth and payments

- Google and Facebook login are provided through NextAuth. Add your API keys to the environment file for production-ready auth. Without keys, the interface falls back to email-based guest login.
- Stripe checkout integration is ready for activation by supplying `STRIPE_SECRET_KEY`. Without it, the API returns a mock success URL for demo purposes.

## Structure

- `app/` — App Router routes including main pages and API handlers.
- `components/` — Reusable UI like header, chat, checkout, delivery timeline.
- `data/` — Mock marketplace inventory.
- `lib/` — Utilities for data access, authentication, chat, payments, delivery.
- `public/` — Brand assets and placeholders.

## Project status

This repository is self-contained with connected routes for the initial experience. When you're ready to create a distributable archive you can run your preferred packaging command (for example `zip -r`).
