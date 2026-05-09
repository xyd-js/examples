# i18n-overrides example

Multi-language docs with **per-locale settings overrides**. Each locale ships a translated footer footnote via `navigation.languages[].overrides`.

## What this demonstrates

`navigation.languages[].overrides` is a `Partial<Settings>` that's deep-merged on top of root settings when serving that locale. You can override `components.*`, `theme.*`, `seo.*`, or any other settings field per locale.

The default footer footnote here says **"Powered by LiveSession"**. The Polish locale overrides it to **"Wspierane przez LiveSession"**, the German locale to **"Unterstützt von LiveSession"**.

This example uses the **nested object** form:

```json
"overrides": {
  "components": {
    "footer": {
      "footnote": {
        "props": {
          "children": "Wspierane przez LiveSession"
        }
      }
    }
  }
}
```

For the equivalent **flat dot-key** form, see [`../i18n-overrides-flat`](../i18n-overrides-flat).

## URLs

| Locale  | Path                | Footer footnote                  |
|---------|---------------------|----------------------------------|
| English | `/introduction`     | Powered by LiveSession           |
| Polish  | `/pl/introduction`  | Wspierane przez LiveSession      |
| German  | `/de/introduction`  | Unterstützt von LiveSession      |

## Run

```bash
xyd
```

Visit each locale and check the footer at the bottom of the page — the footnote text changes.

## When to use overrides vs. translation keys

- **Translate strings only** — use `"i18n: <key>"` references in settings, with per-locale catalogs. See [`../i18n-catalogs`](../i18n-catalogs).
- **Change structure or behavior** (different component, different href, different surface) — use `navigation.languages[].overrides` as shown here.
- **Both at once** — combine: an override block can itself contain `"i18n: <key>"` references resolved against the catalogs.

## See also

- [`../i18n-overrides-flat`](../i18n-overrides-flat) — same example using flat dot-key overrides.
- [`../i18n-catalog-overrides`](../i18n-catalog-overrides) — same effect, with `$`-prefixed paths in the catalog file (no `overrides` block in `docs.json`).
- [`../i18n-catalogs`](../i18n-catalogs) — catalog-only navigation with `"i18n: <key>"` references.
- [`../i18n`](../i18n) — basic three-locale setup with per-locale sidebars.
