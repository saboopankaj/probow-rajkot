# ProBow staging migration checklist

## Completed

- [x] Create the Next.js App Router implementation in this new project.
- [x] Add the four source pages and extensionless routes.
- [x] Add `.html` to extensionless permanent redirects.
- [x] Carry over metadata, canonical URLs, JSON-LD, sitemap/robots behavior, favicon, styles, and referenced image/video assets.
- [x] Preserve existing GET API call shapes in a typed client wrapper.
- [x] Keep staging source read-only.
- [x] TypeScript check.
- [x] ESLint check (zero errors; eight legacy-code warnings).
- [x] Production build.
- [x] Start local development server and verify HTTP responses for all page and SEO routes.
- [x] Confirm aliases respond with HTTP 308.
- [x] Leave the repository uncommitted and unpushed.

## Follow-up verification

- [ ] Browser visual review against staging at desktop and mobile sizes.
- [ ] Exercise navigation, menu search/selection, popup, product modal, quantity controls, and other client interactions.
- [ ] Verify API behavior with mocked GET responses and the menu fallback; no backend was added locally.
- [ ] Follow `.html` redirects and verify their final destinations in a browser.
- [ ] Convert the retained HTML body data and imperative interactions into reusable React components in a later migration pass.
- [ ] Resolve or explicitly accept the eight lint warnings in copied legacy JavaScript.
- [ ] Review source's missing `assets/css/style.css` dependency if an authoritative replacement is available.

## Safety

- [x] No production website or staging source files modified.
- [x] No Cloudflare Worker, D1 database, route, or DNS changes.
- [x] No deployment.
- [x] No commit.
- [x] No push.
