# i18n-catalogs example

Multi-language docs using **catalog-only navigation** plus the `"i18n: <key>"` resolver. The sidebar tree is defined once at the top level; per-locale strings come from translation catalogs.

## What this demonstrates

- `navigation.languages[]` declares only locales — no per-locale `sidebar` blocks. Each entry inherits the top-level `navigation.sidebar`.
- Group titles use `"i18n: <key>"` references resolved against per-locale catalog files.
- Catalogs are auto-discovered via the convention `i18n/<locale>.json` at the project root — no `i18n.catalogs` config needed.

Compare with [`../i18n`](../i18n) which writes the sidebar tree per locale. Same UX, ~⅓ the config.

## File layout

```
i18n-catalogs/
├── docs.json
├── i18n/
│   ├── en.json          # { "sidebar.getstarted": "Get Started" }
│   ├── pl.json          # { "sidebar.getstarted": "Zaczynamy" }
│   └── de.json          # { "sidebar.getstarted": "Erste Schritte" }
├── introduction.md      # English (default)
├── quickstart.md
├── pl/
│   ├── introduction.md
│   └── quickstart.md
└── de/
    ├── introduction.md
    └── quickstart.md
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

Visit each locale and watch the sidebar group title change while the structure stays the same.

## See also

- [`../i18n`](../i18n) — same site, but each locale declares its own sidebar.
- [`../i18n-overrides`](../i18n-overrides) — per-locale settings overrides via `navigation.languages[].overrides`.
- [`../i18n-overrides-flat`](../i18n-overrides-flat) — same overrides example using flat dot-key syntax.
- [`../i18n-catalog-overrides`](../i18n-catalog-overrides) — combine catalog translations with `$`-prefixed override keys.
