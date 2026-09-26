# ProBow Migration Inventory

Audit date: 2026-09-26

Source: `D:\Projects\Probow\Deployment\Staging` (read-only)
Target: `D:\Projects\Probow\probow-next`

## Audit summary

The source contains 41 files: 4 HTML pages, 12 JavaScript files, 7 CSS files, 2 CSS backups, 9 image files, 2 videos, 3 root PNG favicons, `robots.txt`, and `sitemap.xml`. There are no source package manifests or separate JSON data files. JSON-LD is embedded in the HTML. A static marker scan of source text files found no common credential assignments; no secret values were read or copied.

The source homepage contains 20 major sections. The menu is populated from `GET /api/menu`; the source has a five-category, 34-product fallback catalogue. The offer popup reads `GET /api/site/offer-popup`. No Worker or D1 changes are part of this migration.

At audit start the target's App Router, copied public CSS and copied public JS had been removed at the user's direction. The Cloudflare and Git configuration remain present. The root route and shared React shell are now being rebuilt; unimplemented items remain Pending below.

## Complete Staging file inventory

### HTML pages

- `index.html` - home page, 20 sections, product/menu modal, category/product data, API-driven menu, offer popup.
- `menu.html` - menu catalogue, search/category controls, product cards, modal and order flow.
- `contact_us.html` - contact, kitchen/map, telephone and WhatsApp links.
- `healthy-food-rajkot.html` - SEO landing page and eight FAQ disclosures.

### JavaScript

- `assets/js/hamburger.js` - mobile navigation open/close, link close, Escape handling.
- `assets/js/menu.js` - fetch and normalize API menu, local fallback, category/product rendering, Today's Pick carousel, client JSON-LD, sticky controls, modal handoff.
- `assets/js/menu-static.js` - alternate static menu renderer; not linked by the current HTML pages.
- `assets/js/offer-popup1.js` - API-backed offer popup with route, schedule and display-frequency checks.
- `assets/js/offer-popup - Copy.js` - alternate popup implementation; not linked by current HTML.
- `assets/js/offer-popup-hardcoded.js` - hardcoded popup variant; not linked by current HTML.
- `assets/js/probow-loader.js` - menu loading state.
- `assets/js/product-card.js` - product-card delegated read-more click behavior.
- `assets/js/product-carousel.js` - product-card image carousel and dots.
- `assets/js/product-modal.js` - product modal, variants, quantity, related items, total and WhatsApp order message.
- `assets/js/quantity.js` - discount-aware price/quantity helpers.
- `assets/js/search.js` - menu search, suggestions, keyboard controls, empty state and result display.

### CSS

- `assets/css/header-footer.css` - shared header/navigation/footer, global tokens and responsive shell.
- `assets/css/index.css` - homepage sections, dialogs and responsive styles.
- `assets/css/menu-page.css` - menu page and responsive controls.
- `assets/css/probow-page-css.css` - contact page styles.
- `assets/css/probow-rajkot-page-css.css` - healthy-food page styles; byte-identical to `probow-page-css.css` at audit.
- `assets/css/product-components.css` - product cards, image carousels and product modal.
- `assets/css/todays-pick.css` - Today's Pick carousel.
- `assets/css/index.css.bak` and `assets/css/product-components.css.bak` - backup files not linked by source HTML.

`contact_us.html` references `/assets/css/style.css`, which is absent from Staging. This missing reference is recorded as a source issue; it is not copied.

### Local assets

- `assets/images/brand-logo/logo-black.png`
- `assets/images/brand-logo/logo-green.png`
- `assets/images/brand-logo/logo-round.png`
- `assets/images/hero-carousel/brocco-crunch-salad.webp`
- `assets/images/hero-carousel/fiest-pizza-rice.webp`
- `assets/images/hero-carousel/lemon-brocoli-rice.webp`
- `assets/images/hero-carousel/meditarian-hammus-bowl.webp`
- `assets/images/hero-carousel/onepot-rice-bowl.webp`
- `assets/images/hero-carousel/waktak-salad-bowl.webp`
- `assets/videos/probow-hero.webm`
- `assets/videos/probow-hero1.webm`
- `probow-16x16.png`, `probow-32x32.png`, `probow-48x48.png`
- `robots.txt`, `sitemap.xml`

The home and healthy pages also use remote Unsplash and `assets.probow.in` images. Menu categories/products and offer images may be supplied dynamically by the API. These remote assets are not in the local Staging file tree. The target currently retains the local logo, six hero WebPs, two videos and three favicons.

## Routes, navigation and URL behavior

| Existing URL | Next.js route | Source | Status | Notes |
|---|---|---|---|---|
| `/` and `/index.html` | `/` | `index.html` | In progress | Home shell and sections are being rebuilt. |
| `/menu` and `/menu.html` | `/menu` | `menu.html` | Pending | Keep existing extensionless route and `.html` redirect. |
| `/contact_us` and `/contact_us.html` | `/contact_us` | `contact_us.html` | Pending | Preserve phone, WhatsApp, map and delivery links. |
| `/healthy-food-rajkot` and `.html` | `/healthy-food-rajkot` | `healthy-food-rajkot.html` | Pending | Preserve all content and FAQ disclosures. |

The shared navigation includes Menu, How it's made (`#process`), Delivery (`#delivery`), Packaging (`#packaging`), Story (`#story`), FAQ (`#faq`), Contact Us, and WhatsApp. Source links include Zomato, Swiggy, Instagram, Google Maps directions, telephone, and WhatsApp prefilled messages. One homepage source anchor, `#nutrition`, has no matching source element and is a source defect.

## Homepage section and component map

| Source section / id | Content responsibility | Planned React target | Status |
|---|---|---|---|
| hero / hero-hybrid | H1, copy, CTAs, video/photo hero carousel, trust indicators, partners | `HomeHero`, `HeroCarousel` | Pending |
| `#todaysPickSection` | API-featured Today’s Pick carousel | `TodaysPicks` | Pending |
| `#food-categories` | All Items, Salads, Rice Bowls, Maggie Mania, Drinks | `FoodCategories` | Pending |
| `#ingredients` | ingredient story and image | `IngredientsSection` | Pending |
| `#menu` | API product/category renderer and product cards | `HomeMenu`, `ProductCard` | Pending |
| `#healthy-food-rajkot` | SEO editorial copy and links | `HealthyFoodIntro` | Pending |
| `#why-probow` | vegetarian/fresh/balanced/no-preservative value cards | `WhyProBow` | Pending |
| `#reviews` | 4.4/5 rating, 213 delivery ratings, review and Zomato link | `Reviews` | Pending |
| `#process` | four preparation/delivery steps | `PreparationSteps` | Pending |
| `#delivery` | ₹249 threshold, 3 km radius, up to ₹50 delivery credit, partner terms | `DeliverySection` | Pending |
| `#packaging` | packaging copy/images | `PackagingSection` | Pending |
| `#audience` | office, fitness, everyday audience cards | `AudienceSection` | Pending |
| `#story` | origin story | `StorySection` | Pending |
| second `#story` / probow-origin | founder/Bengaluru story | `OriginSection` | Pending |
| `#faq` | homepage FAQs | `HomeFaq` | Pending |
| `#rajkot-delivery` | local delivery copy | `RajkotDelivery` | Pending |
| `#healthy-meals` | fitness, office lunch and everyday meals | `HealthyMeals` | Pending |
| `#zones` | delivery area/call-to-action | `DeliveryZones` | Pending |
| `#office-meals` | corporate meals and WhatsApp enquiry | `OfficeMeals` | Pending |
| `#homepage-order-cta` | final menu and order CTA | `HomeOrderCta` | Pending |

The source HTML also contains a product customization modal (`#variantModal`) with product image/tags/description, standard and available API variants, quantity controls, related products, computed total and WhatsApp checkout. It will be React state, not copied DOM manipulation.

## API and dynamic data inventory

| Method | Path | Source behavior | Planned target | Status |
|---|---|---|---|---|
| GET | `/api/menu` | `menu.js` reads `{ categories, products }`, normalizes available products/images/variants/related products, and falls back to the 5-category/34-product local dataset if unavailable. Featured `featured.todayPick` products populate the carousel. | `src/lib/probow-api.ts` typed service + `src/lib/menu-fallback.json`; client menu components | Pending |
| GET | `/api/site/offer-popup` | `offer-popup1.js` obtains an enabled offer and applies page/schedule/frequency checks before displaying it. | home-only `OfferPopup` client component and typed service | Pending |

The source sends GET requests only. It does not call D1 directly. No local Next.js API route is present in the current target. API connectivity is not verified locally; the browser same-origin API must remain the existing integration.

## Interaction, responsive, accessibility and third parties

- Header: mobile hamburger opens/closes, closes after navigation and on Escape; sticky mobile Menu CTA is supported.
- Menu: category controls, search suggestions/results/empty state, featured carousel, product image carousel, modal, variants, quantity, related-product quantities, calculated price and WhatsApp checkout.
- Popup: enabled/date/schedule/page/frequency behavior; local/session storage is used. Source scripts reference `localStorage` and `sessionStorage`; no cookie use was found. No app-specific URLSearchParams parsing was found.
- Forms/auth: no sign-in UI or form submission workflow exists in the four pages. Menu search and portion inputs are interactive controls.
- Responsive: source CSS includes 1024px, 768px, 480px, 420px, 390px and 380px breakpoints; reduced-motion rules are present. Mobile navigation and compact card/modal layouts must be checked at 390px and desktop widths.
- Fonts: Google Fonts families Fraunces, Work Sans, Space Mono and Caveat. Font Awesome 6.4 CSS is loaded from cdnjs.
- Analytics: Google Tag Manager `gtag.js` and `ezygodigi.in/analytic/analytics.js` are linked on source pages.
- Other third parties: Unsplash images, `assets.probow.in` image CDN, WhatsApp, Zomato, Swiggy, Instagram, Google Maps.
- SEO: page title, description, canonical/robots and Open Graph image references occur in source; JSON-LD occurs on all four pages (healthy page has two blocks). `robots.txt` and `sitemap.xml` are present.

No browser-level visual or interaction verification has been done for the current rebuild. A read-only static scan found no missing local asset references other than the absent `assets/css/style.css` (external URLs and URL/hash links were excluded from local-file checks).

## Target inventory and gaps at rebuild start

Preserved project/build files include `package.json`, `package-lock.json`, `next.config.ts`, `open-next.config.ts`, `wrangler.jsonc`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `.gitignore`, `src/lib/probow-api.ts`, `public/assets/images`, `public/assets/videos` and root favicons. Wrangler remains named `probow-next`; `WORKER_SELF_REFERENCE` remains `probow-next`; Git remote remains `origin`.

At rebuild start, the user had removed all of `src/app`, `src/components`, `src/legacy/pages.json`, `public/assets/css`, and `public/assets/js`. Therefore all App Router routes, shared site shell, page styling and client interactions were Pending. Those source deletions are uncommitted user-directed changes and are not to be reverted as part of this home-first work.

## Deliberately not copied

- Original HTML, imperative JS and full source CSS are references only; functionality is rebuilt in React/TypeScript and new CSS.
- Unlinked JS variants (`menu-static.js`, popup Copy/hardcoded) and CSS backups are excluded because current HTML does not link them; they remain documented here.
- No secrets, environment files, Cloudflare account settings, Worker source, D1 schema/data, DNS or deployment resources are copied or modified.
