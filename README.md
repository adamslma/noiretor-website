# Noir & Or

Concept website of a parisian luxury restaurant, build with Next.js, React, TypeScript et
Tailwind CSS.

## Requierements

- Node.js 20.9 or superior
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

## Architecture

- `src/app` contains routes, their metadata and components specific to each page.
- `src/components/layout` contains root components.
- `public` contains social ressources and website videos.

No data is transited through the forms, this website is a UI showcase only

## Deployed application

Website is available at [https://noiretor-website.vercel.app]
