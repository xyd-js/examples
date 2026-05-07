# i18n-overrides example

Multi-language docs with **per-locale theme overrides**. Each locale ships a translated footer footnote.

## What this demonstrates

`navigation.languages[].overrides` lets a locale shallow-merge any top-level `Settings` keys (`components.*`, `theme.head`, `seo`, …) on top of the root settings when serving that locale.

The default footer footnote here says **"Powered by LiveSession"**. The Polish locale overrides it to **"Wspierane przez LiveSession"**, and the German locale to **"Unterstützt von LiveSession"**.

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

## When to use overrides vs. labels

- **Labels only** (e.g. `header: "Resources"` → `header: "Zasoby"`) — keep one root `components.footer` and let users translate strings in place. (Translation-key references via `"i18n: <key>"` are coming in a follow-up slice; for now, use overrides.)
- **Different structure or behavior** (different number of links, different component, different surface) — use `navigation.languages[].overrides` as shown here.

`overrides` is **shallow-merged**: if you override `components.footer`, you replace the whole footer config for that locale.
