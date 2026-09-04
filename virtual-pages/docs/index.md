---
title: Introduction
---

# Virtual pages

The **Logs** pages in the sidebar are per-runtime variants of the same doc.
On disk they live side by side as `docs/logs.angular.md` and
`docs/logs.bun.md` — but they're served under a clean URL scheme:
`/docs/angular/logs` and `/docs/bun/logs`.

That's the `{ page, source }` sidebar entry: `page` is the URL, `source` is
the markdown file path (extension-less). Everything else — sidebar labels,
prev/next links, search, sitemap, `llms.txt` — follows the URL.
