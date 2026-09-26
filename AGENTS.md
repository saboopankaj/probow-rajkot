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

<!-- END:nextjs-agent-rules -->
