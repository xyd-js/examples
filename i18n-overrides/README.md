# i18n-overrides example

Multi-language docs with **per-locale settings overrides**. Each locale ships a translated banner via `navigation.languages[].overrides`.

## What this demonstrates

`navigation.languages[].overrides` is a `Partial<Settings>` that's deep-merged on top of root settings when serving that locale. You can override `components.*`, `theme.*`, `seo.*`, or any other settings field per locale.

The default banner here says **"xyd 0.1.0-beta — Coming Soon"** with a `sparkles` icon. The Polish locale overrides it to **"xyd 0.1.0-beta — już wkrótce"** with a `rocket` icon, and the German locale to **"xyd 0.1.0-beta — Bald verfügbar"**.

This example uses the **nested object** form:

```json
"overrides": {
  "components": {
    "banner": {
      "content": "**xyd 0.1.0-beta** — już wkrótce",
      "icon": "rocket"
    }
  }
}
```

For the equivalent **flat dot-key** form, see [`../i18n-overrides-flat`](../i18n-overrides-flat).

## URLs

| Locale  | Path                | Banner content                          | Icon       |
|---------|---------------------|-----------------------------------------|------------|
| English | `/introduction`     | xyd 0.1.0-beta — Coming Soon            | `sparkles` |
| Polish  | `/pl/introduction`  | xyd 0.1.0-beta — już wkrótce            | `rocket`   |
| German  | `/de/introduction`  | xyd 0.1.0-beta — Bald verfügbar         | `sparkles` |

## Run

```bash
xyd
```

Visit each locale and check the banner at the top of the page — the content (and Polish icon) change.

## When to use overrides vs. translation keys

- **Translate strings only** — use `"i18n: <key>"` references in settings, with per-locale catalogs. See [`../i18n-catalogs`](../i18n-catalogs).
- **Change structure or behavior** (different component, different icon, different surface) — use `navigation.languages[].overrides` as shown here.
- **Both at once** — combine: an override block can itself contain `"i18n: <key>"` references resolved against the catalogs.

## See also

- [`../i18n-overrides-flat`](../i18n-overrides-flat) — same example using flat dot-key overrides.
- [`../i18n-catalog-overrides`](../i18n-catalog-overrides) — same effect, with `$`-prefixed paths in the catalog file (no `overrides` block in `docs.json`).
- [`../i18n-catalogs`](../i18n-catalogs) — catalog-only navigation with `"i18n: <key>"` references.
- [`../i18n-catalogs-custom-paths`](../i18n-catalogs-custom-paths) — catalog-only navigation with explicit `i18n.catalogs` file paths.
- [`../i18n`](../i18n) — basic three-locale setup with per-locale sidebars.
