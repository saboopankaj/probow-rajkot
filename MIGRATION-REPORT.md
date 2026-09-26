# ProBow staging migration report

## Scope

The staging website at `D:\Projects\Probow\Deployment\Staging` was used as a read-only source. This migration creates the local Next.js App Router application in this repository. No production website, Cloudflare Worker, D1 database, route, DNS record, or staging file was modified. Nothing was deployed, committed, or pushed.

## Migrated

- Four page routes: `/`, `/menu`, `/contact_us`, and `/healthy-food-rajkot`.
- Permanent 308 aliases from the corresponding `.html` URLs to the extensionless routes.
- Page-specific title, description, canonical/social metadata, and original JSON-LD structured data.
- `robots.txt`, sitemap generation, PNG favicons, image/video assets, and active page CSS.
- The linked legacy browser scripts are retained as local compatibility scripts. Shared page rendering is in `src/components/legacy/legacy-page.tsx` and scripts are loaded through `src/components/legacy/legacy-scripts.tsx`.
- A typed client wrapper in `src/lib/probow-api.ts` preserves the site's two existing read-only API calls: `GET /api/menu` and `GET /api/site/offer-popup`. No API route or backend was created in this migration.

## Migration limits and review items

This is a compatibility migration, not a complete rewrite of page markup and interactive behavior into React components. The original page bodies remain HTML data in `src/legacy/pages.json`, rendered through a shared wrapper; legacy imperative JavaScript continues to handle much of the DOM interaction. This preserves the content and current behavior while leaving page sections and complex interactions for a later component-by-component conversion.

The source contact page referenced `/assets/css/style.css`, which was absent from the staging assets. That missing stylesheet reference was omitted; the remaining shared page styles are used. The duplicated page CSS was carried once. Unlinked JavaScript variants were not included.

The public page source contained no submission form or account-authentication UI to migrate. Contact actions remain the source's phone, map, and WhatsApp links. The API client preserves only GET requests; no write requests were introduced. Local browser automation could not initialize because the Windows sandbox helper failed with an access-denied error, so visual, interaction, responsive, and mocked API behavior checks remain outstanding.

## Verification performed

- `npx tsc --noEmit`: passed.
- `npm run lint`: passed with zero errors; eight unused-code warnings remain in preserved legacy JavaScript.
- `npm run build`: passed. Next.js generated `/`, `/menu`, `/contact_us`, `/healthy-food-rajkot`, `/robots.txt`, and `/sitemap.xml`.
- Development server started successfully at `http://localhost:3000`; `/` returned HTTP 200.
- Local HTTP checks returned HTTP 200 for the four pages, `robots.txt`, and `sitemap.xml`.
- Each `.html` alias returned HTTP 308 as configured. PowerShell treats these redirects as errors when its request helper follows them, so the final destination was not verified by that request.
- Browser visual/responsive testing, navigation clicks, client-side interaction checks, and API mocking were not completed due to the sandbox helper failure.

## Cloudflare and release state

No Cloudflare account commands were run for this migration. No Workers, D1 databases, routes, or DNS were changed. There was no deployment, commit, or push.
