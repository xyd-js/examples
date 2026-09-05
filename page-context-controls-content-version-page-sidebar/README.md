# Page context controls — sidebar + same-URL content swap

The second declaration method (vs frontmatter): controls live on the
SIDEBAR page entry. And the second content-version mode: **same-URL swap** —
one page, one URL, a configurable query param picks which markdown source
renders:

```json
{
    "page": "docs/logs",
    "contextControls": [
        {
            "type": "content-version",
            "appearance": "toc-top",
            "options": {
                "queryParam": "runtime",
                "versions": [
                    { "title": "Angular", "description": "Logs in Angular apps." },
                    { "title": "Bun", "source": "docs/logs.bun", "value": "bun" }
                ]
            }
        }
    ]
}
```

- A version WITHOUT `source` is the page's own content (the default — its
  selection keeps the URL clean).
- A version WITH `source` swaps that markdown file in — same pathname,
  `?runtime=bun` in the URL, so browsers/deep links select it immediately.
- `queryParam` is configurable (default `version`).
- The variant is compiled server-side (dev/SSR); static builds emit each
  variant's payload so the swap works on static hosting too.

See `page-context-controls-content-version-page-metadata` for the
frontmatter-declared, navigate-mode variant (each version = its own URL).

Run: `xyd`
