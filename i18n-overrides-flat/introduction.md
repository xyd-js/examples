---
title: Introduction
description: i18n with per-locale overrides — flat dot-key form.
icon: rocket
---

# Per-locale overrides (flat dot-keys)

Same configuration as `../i18n-overrides`, but each `overrides` block uses **flat dot-key syntax** instead of nested objects:

```json
"overrides": {
  "components.banner.content": "**xyd 0.1.0-beta** — już wkrótce"
}
```

`applyOverrides` accepts either form. Use this style when you're changing a single deep property; the nested form is more convenient when you're changing several fields at once.

Check the banner at the top of the page — the content changes between English, Polish, and German, exactly like the nested-form example.
