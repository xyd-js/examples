---
title: Introduction
description: Catalog-only navigation with explicit catalog file paths.
icon: rocket
---

# Welcome

Same setup as `../i18n-catalogs` — catalog-only navigation with `"i18n: <key>"` references — but each locale's catalog lives at a **custom path** declared in `i18n.catalogs`:

```json
"i18n": {
  "catalogs": {
    "en": "./locales/english.json",
    "pl": "./tlumaczenia/polski.json",
    "de": "./uebersetzungen/deutsch.json"
  }
}
```

Use this when you don't want to follow the `i18n/<locale>.json` convention — for example, when reusing existing translation files or organizing catalogs under a different directory.
