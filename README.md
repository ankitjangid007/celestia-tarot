# Celestia Tarot (placeholder brand)

Next.js (App Router) · TypeScript (strict) · Tailwind CSS v4 · Lucide React. No image assets: all visuals are SVG/CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Replace before production

All business details live in **`src/config/business.ts`** (name, tagline, description, email, phone, WhatsApp, address, social URLs, copyright year, legal "last updated", site URL). Set `NEXT_PUBLIC_SITE_URL` in the environment for canonical URLs, sitemap and Open Graph.

Also review: legal text in `src/app/{terms,privacy,disclaimer}/page.tsx`, service copy in `src/data/services.ts`, FAQ in `src/data/faq.ts`.

## Contact form

UI-only by default: it validates, then offers "Send by email" / "Send on WhatsApp" links and never claims a message was sent. To connect a backend, set `NEXT_PUBLIC_CONTACT_ENDPOINT` to a URL accepting a JSON POST (`name, email, phone, service, message`); see `src/components/contact/ContactForm.tsx`.

## Fonts

Cormorant Garamond and Inter (latin subset) are bundled in `src/fonts` via `next/font/local`, so builds work offline. To switch to `next/font/google`, edit `src/app/layout.tsx`.
