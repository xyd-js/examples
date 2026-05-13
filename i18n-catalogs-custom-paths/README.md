# i18n-catalogs-custom-paths example

Catalog-only navigation with **explicit catalog file paths** declared in `i18n.catalogs`. Same UX as `../i18n-catalogs` — only the catalog source differs.

## What this demonstrates

By default, xyd auto-discovers catalogs at `i18n/<locale>.json`. When you want a different layout — for example, reusing existing translation files in localized directory names — declare the paths explicitly:

```json
"i18n": {
  "catalogs": {
    "en": "./locales/english.json",
    "pl": "./tlumaczenia/polski.json",
    "de": "./uebersetzungen/deutsch.json"
  }
}
```

Paths are resolved relative to the project root (or absolute). The convention fallback (`i18n/<locale>.json`) still kicks in for any locale not listed in `i18n.catalogs`.

## File layout

```
i18n-catalogs-custom-paths/
├── docs.json
├── locales/
│   └── english.json
├── tlumaczenia/
│   └── polski.json
├── uebersetzungen/
│   └── deutsch.json
├── introduction.md
├── pl/introduction.md
└── de/introduction.md
```

## URLs

| Locale  | Path                | Sidebar group title  |
|---------|---------------------|----------------------|
| English | `/introduction`     | Get Started          |
| Polish  | `/pl/introduction`  | Zaczynamy            |
| German  | `/de/introduction`  | Erste Schritte       |

## Run

```bash
xyd
```

## See also

- [`../i18n-catalogs`](../i18n-catalogs) — same setup with convention-based catalog discovery (`i18n/<locale>.json`).
- [`../i18n-catalog-overrides`](../i18n-catalog-overrides) — catalogs that also carry `$`-prefixed settings overrides.
