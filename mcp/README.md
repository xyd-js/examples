# MCP example

Demonstrates xyd's MCP (Model Context Protocol) server docs feature: point
`api.mcp.source` at any remote MCP server URL and xyd will render one page
per tool and per resource, sourced live from the server's `tools/list` and
`resources/list` endpoints.

## Run

```bash
export MCP_URL="https://your-mcp-server.example.com/mcp"
export MCP_TOKEN="…"   # optional bearer token
xyd build
```

`MCP_URL` is read by `$MCP_URL` substitution in `docs.json`. If unset the
MCP-backed pages will fail to populate but the rest of the site still
builds.

See `docs/overview.md` for the configuration reference.
