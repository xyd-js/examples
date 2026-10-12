# xyd-js atlas-only example

The API reference alone — no docs content — built straight from an OpenAPI
document and mounted under a URL prefix.

```
xyd build ./openapi.yaml
```

`xyd dev ./openapi.yaml` serves the same site locally.

## What it shows

- **The positional document.** `xyd build <openapi.yaml>` (also `.yml`/`.json`,
  and `.graphql` for GraphQL) renders one page per operation and one per schema,
  with no `navigation` or markdown pages. The sidebar comes from the document's
  tags and schemas.
- **The landing page.** There is no `index.md` here, so xyd synthesizes one from
  the document's `info.title` and `info.description`. Add an `index.md` next to
  the document to write your own.
- **`advanced.basename`.** The `docs.json` beside the document is optional and is
  merged over the defaults; here it mounts the reference at `/docs`. Every
  link, raw file (`llms.txt`, the `.md` twins) and asset URL carries the prefix,
  and the build writes the whole site under `.xyd/build/client/docs/`:

  ```
  .xyd/build/client/docs/
  ├── index.html              the landing page
  ├── getBookByTitle.html     one per operation, with a .data and a .md twin
  ├── objects/Book.html       one per schema
  ├── llms.txt
  ├── assets/                 referenced as /docs/assets/*
  └── __spa-fallback.html
  ```

  That directory is self-contained: serve it at the prefix with any static file
  server that resolves clean URLs, or copy it into a larger site at that path.

## Configuration

```json
{
    "advanced": {
        "basename": "/docs"
    }
}
```

## Requirements

Needs an `@xyd-js/cli` build that carries the self-contained basename output
(the fix for the raw routes, the basename index page and the asset base under
`advanced.basename`): `0.0.0-build-<sha7>-<timestamp>` published from xyd master
after that change merged — `npm view @xyd-js/cli dist-tags` shows the current
`latest`. Older builds leave `assets/` at the client root and fail the prerender
of `llms.txt` under a basename.
