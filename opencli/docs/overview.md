---
title: spice
---

# spice
:::subtitle
A package manager whose CLI reference is generated from an OpenCLI spec
:::

This site documents the **spice** package manager. The entire **CLI Reference**
tab is generated automatically from a single [OpenCLI](https://opencli.org) spec
(`spice.opencli.json`) — there are no hand-written command pages.

## How it works

Point `api.cli` at the spec in `docs.json`:

```json
{
  "api": {
    "cli": [
      { "source": "./spice.opencli.json", "route": "docs/cli" }
    ]
  }
}
```

xyd walks the command tree and emits one reference page per command (with its
arguments and options) under `route`, and adds them to the sidebar — the same
way `api.openapi` and `api.graphql` generate pages from their specs. When the
spec changes, the pages update automatically.

Open the **CLI Reference** tab to browse the generated `install`, `remove`,
`run`, and `list` commands.
