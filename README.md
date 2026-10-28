# Vyoma Astrology — Next.js project

This project wraps the supplied astrology website in a Next.js App Router application while preserving the original interactions and visual design.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm run start
```

## Important setup
1. Open `public/vyoma-astrology.html` and replace the placeholder WhatsApp number (`919999999999`) with the consultant's real country-code + phone number.
2. The existing page loads Google Fonts and PixiJS from third-party CDNs, so those services must be reachable in the visitor's browser.
3. The supplied HTML is retained as a standalone page at `/vyoma-astrology.html`; the Next.js home page displays it full-screen to preserve the existing scripts and interactive experience. This is a migration scaffold, not yet a component-by-component React rewrite.
