# Project rules

- Never create a commit automatically.
- Never push automatically.
- Never deploy automatically.
- Run the build and TypeScript checks after significant changes.
- Before any commit, show the user `git status` and `git diff`.
- Ask for the user's explicit approval before any commit, push, or deployment.
- Keep environment variables, API keys, Cloudflare credentials, database credentials, and authentication secrets out of version control.

# Next.js guidance

This project uses a current Next.js version whose APIs and conventions may differ from older versions. Before changing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` and follow its current guidance.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

# ProBow Project Rules

## Source and Target

The existing ProBow website is the source of truth for migration:

Source:
D:\Projects\Probow\Deployment\Staging

Next.js target:
D:\Projects\Probow\probow-next

The Staging website must be treated as the authoritative reference for:

- Existing content
- Pages and routes
- User journeys
- Functionality
- Navigation
- Responsive behavior
- Visual design
- Images and assets
- API integrations
- SEO metadata
- Structured data

Do not assume the existing Next.js implementation is complete.

---

## Migration Architecture

This is a PROPER Next.js/React migration.

Do NOT simply copy the existing HTML, JavaScript and CSS into the Next.js project.

The objective is:

Existing HTML + JS + CSS
→ Analyse
→ Re-architect
→ Modular Next.js + React + TypeScript

### HTML

Do not use the existing HTML files as the final implementation.

Convert pages into proper Next.js App Router routes and reusable React components.

### JavaScript

Do not simply copy existing JavaScript files into the Next.js application.

Analyse their functionality and rebuild it using appropriate:

- React state
- React event handlers
- hooks
- TypeScript
- reusable components
- services
- utilities

Do not mechanically translate DOM manipulation into React.

### CSS

Do not simply copy the complete existing CSS files into the Next.js application.

Analyse the styles and rebuild them using an appropriate maintainable styling architecture.

Use:

- CSS Modules where appropriate
- global CSS only for genuinely global styles
- shared CSS variables/design tokens where appropriate

Preserve the existing visual design and responsive behavior.

Do not redesign the website merely because the implementation is being migrated.

---

## Modular Architecture

Use Next.js App Router and create reusable components where there is a genuine shared responsibility.

Use appropriate structures such as:

app/
components/
lib/
hooks/
types/
public/

Potential component areas include:

- layout
- navigation
- common UI
- forms
- modals
- menus
- products
- cards
- sections

Do not create one giant page component.

Do not duplicate the same UI implementation across multiple pages when a genuine reusable component is appropriate.

Do not create unnecessary abstractions.

---

## Assets

Preserve all required existing assets from Staging, including:

- images
- SVGs
- icons
- fonts
- logos
- favicons
- background images

Do not replace existing assets with placeholders.

Do not copy secrets or credentials.

---

## API Architecture

Identify all existing API calls before migrating functionality.

Create an appropriate API/service layer, for example:

lib/api/

Use the existing APIs rather than replacing backend functionality.

The existing:

- `menu-api` Worker
- `probo-db` D1 database

must remain unchanged.

Do NOT connect the Next.js frontend directly to D1 if the existing application uses `menu-api`.

---

## Cloudflare Safety

Never modify:

- `menu-api`
- `probo-db`
- DNS
- domains
- routes
- production Cloudflare resources
- production bindings
- Cloudflare infrastructure

Do not deploy automatically.

The intended frontend Worker is:

`probow-next`

Do not rename it to `probow-rajkot`.

---

## Source Audit Before Migration

Before implementing a migration or making large structural changes, inspect:

D:\Projects\Probow\Deployment\Staging

completely.

Inventory:

- HTML
- JS
- CSS
- images
- SVGs
- icons
- fonts
- JSON/data
- configuration
- routes
- internal links
- API calls
- dynamic content
- forms
- popups
- navigation
- responsive behavior
- third-party dependencies
- SEO metadata
- structured data

Do not selectively migrate files without first understanding the complete source.

---

## Migration Documentation

Maintain:

`MIGRATION-INVENTORY.md`

and:

`MIGRATION-CHECKLIST.md`

The checklist should use:

SOURCE FILE/PAGE | TARGET ROUTE/FILE | STATUS | NOTES

Do not mark functionality as migrated merely because a corresponding file exists.

---

## Verification

After significant migration work, run:

```bash
npm run build
npx tsc --noEmit

<!-- END:nextjs-agent-rules -->
