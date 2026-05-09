# i18n-catalog-overrides example

All per-locale customization (translated strings + locale-specific settings paths) lives in one catalog file. No `overrides` block in `docs.json`.

## What this demonstrates

Catalog keys prefixed with `$` are **settings override paths**, not translation keys. At boot xyd extracts `$`-keys from each catalog and merges them into the matching `navigation.languages[].overrides`. At request time `applyOverrides` deep-merges them into the effective settings.

For each locale you get:
- Translation strings (regular keys, used by `"i18n: <key>"` references in settings).
- Settings overrides (`$`-prefixed keys, used to swap `components`, `theme`, etc. per locale).

When translated link text and the link's URL naturally live next to each other, this is cleaner than splitting them across catalog + `overrides` field.

## File layout

```
i18n-catalog-overrides/
├── docs.json              # default footer footnote, no per-locale overrides block
├── i18n/
│   ├── en.json            # translation keys only
│   ├── pl.json            # translation keys + $-prefixed override paths
│   └── de.json            # ditto
├── introduction.md
├── pl/introduction.md
└── de/introduction.md
```

`i18n/pl.json`:

```json
{
  "sidebar.getstarted": "Zaczynamy",
  "$components.footer.footnote.props.children": "Wspierane przez LiveSession",
  "$components.footer.footnote.props.href": "https://pl.livesession.io"
}
```

## URLs

| Locale  | Path                | Footer footnote                | Footer href                    |
|---------|---------------------|--------------------------------|--------------------------------|
| English | `/introduction`     | Powered by LiveSession         | https://livesession.io         |
| Polish  | `/pl/introduction`  | Wspierane przez LiveSession    | https://pl.livesession.io      |
| German  | `/de/introduction`  | Unterstützt von LiveSession    | https://de.livesession.io      |

## Run

```bash
xyd
```

Visit each locale and inspect the footer link — both the text and the `href` change per locale.

## See also

- [`../i18n-overrides`](../i18n-overrides) — same effect via `navigation.languages[].overrides` (nested form).
- [`../i18n-overrides-flat`](../i18n-overrides-flat) — same overrides in flat dot-key form.
- [`../i18n-catalogs`](../i18n-catalogs) — catalog-only navigation without `$`-key overrides.
