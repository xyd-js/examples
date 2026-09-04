# Virtual pages — URL decoupled from the file path

Sometimes the file layout shouldn't dictate the URL — e.g. per-framework
variants of the same doc kept side by side:

```
docs/
├── logs.angular.md   → served at /docs/angular/logs
└── logs.bun.md       → served at /docs/bun/logs
```

Declare it with a `{ page, source }` sidebar entry:

```json
{
    "navigation": {
        "sidebar": [
            {
                "route": "docs",
                "pages": [
                    { "page": "docs/angular/logs", "source": "docs/logs.angular" },
                    { "page": "docs/bun/logs", "source": "docs/logs.bun" }
                ]
            }
        ]
    }
}
```

- `page` — the URL the page serves at.
- `source` — the markdown file path, **extension-less** (like a string page
  entry: `docs/logs.angular` resolves `docs/logs.angular.md` / `.mdx`).
- Sidebar labels come from the file's frontmatter; prev/next links, search,
  sitemap and `llms.txt` all follow the URL.
- The lower-level `{ "virtual": "<file>", "page": "<url>" }` form (used by
  generated API docs) works too — `source` is sugar for it.

Run it:

```bash
xyd
```
