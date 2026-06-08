---
title: MCP Server Docs
---

# MCP Server Docs

:::subtitle
Generate browsable API reference for any MCP (Model Context Protocol) server — directly from its `tools/list` and `resources/list`.
:::

This example renders MCP docs from a **local manifest** (`mcp.json`)
shaped like the combined output of `tools/list` + `resources/list`. The
exact same config also accepts a remote MCP server URL.

## Two source modes

### 1. Local manifest (this example)

```jsonc
{
  "api": {
    "mcp": {
      "source": "./mcp.json",
      "route": "docs/api/mcp"
    }
  }
}
```

`mcp.json`:

```jsonc
{
  "serverUrl": "https://demo.xyd.dev/mcp",
  "tools": [ /* ... tools/list result ... */ ],
  "resources": [ /* ... resources/list result ... */ ]
}
```

Use this when you want deterministic, static docs — e.g. you want to ship
the docs even when the server is offline.

### 2. Remote URL

```jsonc
{
  "api": {
    "mcp": {
      "source": "https://my-mcp-server.example.com/mcp",
      "route": "docs/api/mcp",
      "info": { "token": "$MCP_TOKEN" }
    }
  }
}
```

xyd calls `tools/list` and `resources/list` over JSON-RPC at build time.
`$MCP_TOKEN` is sent as `Authorization: Bearer …`.

## What gets generated

Each MCP tool becomes its own page with the tool's `inputSchema` (JSON
Schema) expanded into a typed property tree — required fields, nested
objects, arrays, enums, defaults, all rendered with the same Atlas
components used by the OpenAPI and GraphQL converters.

Each resource becomes its own page showing the `uri` and `mimeType`.

Browse the **MCP Reference** tab above to see this example's three tools
(`search_docs`, `create_issue`, `ping`) and two resources (`README`,
`CHANGELOG`).
