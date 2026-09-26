# ProBow migration checklist

Each row maps a read-only Staging source to its Next.js target. Statuses reflect the current worktree; file presence alone is not counted as behavioral verification.

| SOURCE FILE/PAGE | TARGET ROUTE/FILE | STATUS | NOTES |
|---|---|---|---|
| `index.html` | `src/app/page.tsx`, `src/components/home/**` | Implemented | Homepage rebuilt as React sections with source-derived content, responsive hero, Today's Pick, API-backed menu, product modal, FAQ, delivery, packaging, story and order sections. Build/typecheck pass. |
| `menu.html` | `src/app/menu/page.tsx` | Pending | Dedicated menu route is still a placeholder; the complete interactive menu currently appears on the homepage. |
| `contact_us.html` | `src/app/contact_us/page.tsx` | Pending | Dedicated route remains a placeholder for a later migration step. |
| `healthy-food-rajkot.html` | `src/app/healthy-food-rajkot/page.tsx` | Pending | Dedicated route remains a placeholder for a later migration step. |
| `assets/js/hamburger.js` | `src/components/layout/site-header.tsx` | Implemented | React mobile nav supports toggle, Escape, close-on-link and hidden closed state. |
| `assets/js/menu.js` | `src/components/home/home-menu.tsx`, `src/lib/probow-api.ts` | Implemented | GET API, typed normalization, source-data fallback, categories, search, Today's Pick and product cards. Runtime API response still needs validation. |
| `assets/js/menu-static.js` | None | Excluded | Alternate renderer not linked by current source HTML. |
| `assets/js/product-card.js` | `src/components/home/product-card.tsx` | Implemented | Native React product cards. |
| `assets/js/product-carousel.js` | `src/components/home/product-card.tsx` | Implemented | Per-card image controls/dots are part of the product-card component. |
| `assets/js/product-modal.js` | `src/components/home/product-modal.tsx` | Implemented | Variants, quantity, related items and WhatsApp total are component state. |
| `assets/js/quantity.js` | `src/components/home/product-modal.tsx` | Implemented | Discount-aware pricing and item quantities. |
| `assets/js/search.js` | `src/components/home/home-menu.tsx` | Partial | Search and empty-state behavior implemented; source suggestion interactions remain to compare. |
| `assets/js/offer-popup1.js` | `src/components/home/offer-popup.tsx` | Implemented | GET offer endpoint, enablement, page/schedule and frequency gating. Runtime offer payload still needs validation. |
| `assets/js/offer-popup - Copy.js` | None | Excluded | Alternate, unlinked variant. |
| `assets/js/offer-popup-hardcoded.js` | None | Excluded | Alternate, unlinked variant. |
| `assets/js/probow-loader.js` | Home menu loading state | Implemented | React loading state and local fallback on request failure. |
| `assets/css/header-footer.css` | `src/assets/style/site.css` | Implemented | New authored design tokens, shared header/footer and breakpoints. |
| `assets/css/index.css` | `src/assets/style/home/hero.css`, `editorial-sections.css`, `menu.css`, `todays-pick.css` | Implemented | Homepage styles are split into focused responsive files. |
| `assets/css/product-components.css` | `src/assets/style/home/menu.css`, `product-modal.css` | Implemented | Product cards and modal have isolated stylesheets. |
| `assets/css/todays-pick.css` | `src/assets/style/home/todays-pick.css` | Implemented | Chef special is isolated and responsive. |
| `assets/css/menu-page.css` | Future menu styles | Pending | Do not load copied legacy CSS. |
| `assets/css/probow-page-css.css` | Future contact styles | Pending | Duplicated with healthy-page stylesheet at audit. |
| `assets/css/probow-rajkot-page-css.css` | Future healthy-page styles | Pending | Future route. |
| `assets/css/style.css` | None | Missing in source | Referenced by contact HTML but does not exist in source. |
| Source logo and six hero WebPs | `public/assets/images/**` | Used | Logo and local hero carousel images are referenced by React components. |
| Source hero videos | `public/assets/videos/**` | Used | Local hero video is referenced by the React hero carousel. |
| Source favicon PNGs | `public/probow-*.png` | Present | Wire to root metadata. |
| Source `robots.txt` and `sitemap.xml` | `src/app/robots.ts`, `src/app/sitemap.ts` | Implemented | App Router metadata routes build successfully. |
| Source JSON-LD in all pages | App Router metadata/structured data | Pending | Healthy-food page has two source JSON-LD blocks. |
| `GET /api/menu` | `src/lib/probow-api.ts` | Implemented | Same-origin read-only fetch; typed normalization and fallback. Validate against live response when endpoint is available. |
| `GET /api/site/offer-popup` | `src/lib/probow-api.ts` | Implemented | Same-origin read-only fetch; response behavior implemented, runtime payload not yet validated. |
| `next.config.ts` `.html` redirects | Existing `next.config.ts` | Present; verify | Redirect targets need routes rebuilt. |
| `wrangler.jsonc` | Existing config | Preserved | Worker and self-reference remain `probow-next`; do not change. |
| Git remote | Existing repository config | Preserved | Do not change remote, commit or push. |

## Verification status

The home route and shared React shell are recreated. `npm run build` and `npx tsc --noEmit` pass. The menu, contact and healthy-food routes are still placeholders; source/API runtime payloads, SEO structured data, browser interactions and visual parity still need review. No Cloudflare resources were changed.
