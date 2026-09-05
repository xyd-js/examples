---
title: Header (global)
---

# Header slot — the global default

The **Copy page** button above comes from the simplest possible config:

```json
{ "components": { "contextControls": ["copy"] } }
```

## How it works

A bare string is shorthand for an option-less action; `appearance` defaults
to `header`. Every page inherits it — unless the page declares its own
`contextControls` (see the other pages here).
