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
