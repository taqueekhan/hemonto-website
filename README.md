# Hemonto website
Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion, Lucide.

## Run
    npm install && cp .env.example .env.local && npm run dev

## Enable email delivery (Resend)
1. Create a free account at resend.com using **taqueekhaniu@gmail.com** (the default test sender can only deliver to the account email).
2. Create an API key and put it in `.env.local` as `RESEND_API_KEY` (on Vercel: Project Settings, Environment Variables).
3. For production, verify your own domain in Resend and set `RESEND_FROM="Hemonto <hello@yourdomain.com>"`.
Until the key exists, the API returns 503 and the form shows an honest error with a mailto fallback.

## Content
Edit `data/projects.ts` (real projects: `demo:false`, add `image` in `/public`), `data/services.ts`. Testimonials stay hidden while the array is empty.
