---
title: orbit
---

# orbit
:::subtitle
A devops CLI with nested commands — documented from one OpenCLI spec
:::

**orbit** ships and operates apps from the command line. Its whole **CLI
Reference** is generated from a single [OpenCLI](https://opencli.org) spec
(`orbit.opencli.json`) via `api.cli` — including the nested `auth` and
`secrets` command groups.

```json
{
  "api": {
    "cli": [
      { "source": "./orbit.opencli.json", "route": "docs/cli" }
    ]
  }
}
```

xyd walks the command tree recursively, so `orbit secrets set` and
`orbit auth login` each get their own page under `docs/cli/...`, with their
arguments and options — exactly like `api.openapi` generates a page per
endpoint. No command pages are written by hand.
