# i18n example

Multi-language documentation site with three locales — English (default), Polish, and German.

## URLs

| Locale  | Path                |
|---------|---------------------|
| English | `/introduction`     |
| Polish  | `/pl/introduction`  |
| German  | `/de/introduction`  |

The default locale (English) is unprefixed; non-default locales are served under `/<language>/`.

## File layout

```
i18n/
├── docs.json              # navigation.languages[] declares all three locales
├── introduction.md        # English (default)
├── quickstart.md
├── pl/
│   ├── introduction.md    # Polish
│   └── quickstart.md
└── de/
    ├── introduction.md    # German
    └── quickstart.md
```

The default locale's content lives at the project root. Each non-default locale mirrors that tree under `<language>/`.

## Run

```bash
xyd
```

Then visit:
- http://localhost:5175/introduction (English)
- http://localhost:5175/pl/introduction (Polish)
- http://localhost:5175/de/introduction (German)

Missing translations 404 — there is no fallback to the default locale.

## See also

- [`../i18n-catalogs`](../i18n-catalogs) — same site with the sidebar declared once at top level and `"i18n: <key>"` references resolved against per-locale catalogs (~⅓ the config of this example).
- [`../i18n-overrides`](../i18n-overrides) — per-locale settings overrides (footer, theme, etc.) via `navigation.languages[].overrides`.
- [`../i18n-overrides-flat`](../i18n-overrides-flat) — same overrides example using flat dot-key syntax.
- [`../i18n-catalog-overrides`](../i18n-catalog-overrides) — colocate translations and per-locale settings paths in one catalog file via `$`-prefixed keys.
