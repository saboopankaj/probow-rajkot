# Next.js Architecture

## Runtime and route structure

This is a Next.js App Router application. The root layout owns document metadata defaults, shared header/footer and globally loaded font/style tokens. Individual App Router pages stay Server Components unless they need browser state. `/` composes the homepage sections. Existing URL paths remain `/menu`, `/contact_us`, and `/healthy-food-rajkot`; the `.html` redirects stay in `next.config.ts`.

## Planned source tree

```text
src/
  app/
    layout.tsx                 Root document, shared site shell, metadata
    page.tsx                   Home page composition
    menu/page.tsx              Future menu route
    contact_us/page.tsx        Future contact route
    healthy-food-rajkot/page.tsx Future SEO route
  assets/style/
    site.css                   Tokens, reset, shared header/footer and primitives
    home.css                   Homepage section and responsive styles
  components/
    layout/
      site-header.tsx          Shared desktop/mobile navigation
      site-footer.tsx          Shared footer and partner links
    home/
      home-hero.tsx
      hero-carousel.tsx
      home-sections.tsx        Small presentational sections grouped by responsibility
      home-menu.tsx            API menu, categories, featured picks and product selection
      product-card.tsx
      product-image-carousel.tsx
      product-modal.tsx        Variants, quantity, related items and order summary
      offer-popup.tsx          API-backed, schedule/page/frequency-gated offer
  lib/
    probow-api.ts              Same-origin GET service client and response types
    menu-fallback.json         Source-derived fallback catalogue data only
```

Only files required by the current home-first implementation should be created; future route components need not be scaffolded prematurely.

## Component and rendering boundaries

- `app/layout.tsx`, page composition, header/footer, editorial sections, category introductions, delivery/story/FAQ copy and metadata are Server Components.
- The mobile hamburger is a small Client Component because it needs open/close state, Escape handling and close-on-navigation behavior.
- A focused home menu Client Component fetches the same-origin menu API, presents loading/error/fallback state, renders categories/products/Today’s Pick, and owns the selected product and modal state. Product cards and carousel controls receive serializable product data and event callbacks within this client subtree.
- The offer popup is a small Client Component because its source behavior reads browser storage and time/page state.
- Do not introduce global state/context unless cart behavior needs to span routes. The source checkout is a WhatsApp message builder, not a server-side cart/order API.

## API and state

`src/lib/probow-api.ts` wraps read-only same-origin requests: `GET /api/menu` and `GET /api/site/offer-popup`. Menu responses are normalized into typed categories/products without dropping API-provided variants or related product IDs. On menu request failure, the source-derived 5-category/34-product data is used. Do not call D1 or change/add Worker API behavior. UI state is local to the menu, modal, carousel, navigation or offer component.

## Styling and assets

The requested stylesheet location is `src/assets/style/`. Import stylesheets through the root layout, as required by App Router. `site.css` contains tokens, base typography/reset and styles shared by header/footer; `home.css` contains page-section and mobile/desktop rules. Keep styles authored for React components and do not reattach the old source CSS files.

Use the existing local logo, six hero WebPs, two hero videos and favicons. API/remote product image URLs remain data-driven; configure/handle remote images based on the actual API hosts rather than substituting unrelated local dishes. Preserve image alt text and dimensions. Use `next/font` for the source typefaces where available; keep font loading self-hosted by Next.js.

## SEO and verification

Use App Router `Metadata` for page title, description, canonical, robots, Open Graph and Twitter metadata. Add structured data from the same authoritative menu data where it can be rendered safely. Keep `robots.txt`, sitemap and redirect behavior in the Next.js route/config layer. After significant work, run `npx tsc --noEmit` and `npm run build`; also lint and perform local route/API/UI interaction checks before claiming verification. No deployment, commit or push is automatic.
