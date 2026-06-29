# OpenCLI example — nested commands

A second `api.cli` example showing **nested subcommands**. The `orbit` CLI has
`auth` and `secrets` command groups, and xyd generates a page for every command
and subcommand from `orbit.opencli.json` — no hand-written command pages.

```bash
xyd dev     # preview
xyd build   # → .xyd/build/client
```
