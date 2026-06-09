# MCP example

Demonstrates xyd's MCP (Model Context Protocol) server docs feature.
Each tool from the MCP source becomes its own API reference page with the
tool's `inputSchema` rendered as a typed property tree; each resource
becomes its own page.

This example uses a **local manifest** (`mcp.json`) so the build is
deterministic and offline. The same `api.mcp` config also accepts a
remote MCP server URL — see `docs/overview.md`.

## Run

```bash
xyd build
```

No env vars required.
