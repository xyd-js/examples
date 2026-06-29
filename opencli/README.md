# OpenCLI example

Generates a CLI reference site from an [OpenCLI](https://opencli.org) spec using
xyd's **`api.cli`** source — the same way `api.openapi` / `api.graphql` generate
pages from their specs. There are **no hand-written command pages**.

- `spice.opencli.json` — the OpenCLI spec for the example `spice` CLI.
- `docs.json` — wires the spec up via `api.cli` (one page per command is
  generated under the `docs/cli` route).
- `docs/overview.md`, `docs/cli/overview.md` — the only authored pages.

```bash
xyd dev     # preview
xyd build   # → .xyd/build/client
```
