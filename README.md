# Noir & Or

Concept website for a Parisian luxury restaurant, built with Next.js, React, TypeScript and
Tailwind CSS.

## Requirements

- Node.js 20.9 or later
- npm

## Dev

```bash
npm install
npm run dev
```

The app is then available at [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run check
npx tsc --noEmit
npm run build
```

## Technical SEO

The site automatically generates:

- canonical URLs and Open Graph / Twitter metadata;
- `/robots.txt`, `/sitemap.xml` and `/manifest.webmanifest`;
- `WebSite` and `WebPage` JSON-LD structured data;
- `/llms.txt` for agents that support this convention.

Copy `.env.example` into your deployment configuration and set `SITE_URL` to the final public
domain. `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` are optional and can be added after
the corresponding search properties have been created.

## Architecture

- `src/app` contains routes, their metadata and page-specific components.
- `src/components/layout` contains root layout components.
- `public` contains social resources and website videos.

No data is transmitted through the forms; this website is a UI showcase only.

## Deployed Application

Website is available at [https://noiretor-website.vercel.app](https://noiretor-website.vercel.app).
