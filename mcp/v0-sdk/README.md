# v0 Platform API MCP Server

MCP server providing access to the v0 Platform API for AI assistants.

## Features

- 🤖 **Chat Management** - Create, manage, and interact with v0 chats
- 🚀 **Project & Deployments** - Deploy and monitor v0 projects  
- 🔧 **Environment Variables** - Manage project configuration
- 🔗 **Webhooks & Integrations** - Connect external services
- 👤 **Account Management** - Access user profile and billing

## Quick Start

1. **Install and configure:**
   ```bash
   bun install
   export V0_API_KEY="your-v0-api-key"
   ```

2. **Start the server:**
   ```bash
   bun run xyd:mcp
   ```

3. **Test (optional):**
   ```bash
   bun run mcp:inspector
   ```

## Usage

### Create a Chat
```javascript
{
  "method": "chats.create",
  "params": {
    "message": "Create a React todo component"
  }
}
```

### Deploy Project
```javascript
{
  "method": "deployments.create", 
  "params": {
    "projectId": "proj_123"
  }
}
```

## Key Endpoints

**Chats:** `create`, `find`, `sendMessage`, `fork`, `delete`  
**Projects:** `create`, `find`, `update`, `delete`, `assign`  
**Deployments:** `create`, `find`, `findLogs`, `findErrors`  
**Environment:** `createEnvVars`, `updateEnvVars`, `deleteEnvVars`  
**User:** `get`, `getBilling`, `getPlan`, `getScopes`

See `openapi.json` for complete API specification (47 total endpoints).

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `V0_API_KEY` | Yes | Your v0 Platform API key |
| `PORT` | No | Server port (default: 3000) |
