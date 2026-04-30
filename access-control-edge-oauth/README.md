# Access Control — Edge OAuth Example

Demonstrates xyd access control with a **Node.js edge server** and **OAuth provider**. Runs 100% locally.

## Architecture

```
Browser ──→ Edge Server (port 3000) ──→ Static Files
               │                          (.xyd/build/client/)
               │ JWT verify + access map
               │
               └──→ OAuth Server (port 4000)
                      │ Authorization + token endpoints
                      │ Issues access tokens
                      └──→ Redirect back with code
```

## Quick Start

```bash
# 1. Install xyd CLI
bun add -g xyd-js

# 2. Build the static site (generates server.mjs automatically)
xyd build

# 3. Start the mock OAuth server
node auth-server.mjs &

# 4. Start the edge server (serves docs + enforces access)
AUTH_SECRET=playground-test-secret-key-at-least-32-chars xyd serve

# 5. Open http://localhost:3000
```

## Auth Flow

1. User visits `/protected/api-reference`
2. Edge server checks cookie → no token → **302** redirect to `/login`
3. Login page redirects to OAuth authorization URL
4. User authorizes the app
5. OAuth server redirects to `/auth/callback?code=CODE&state=/protected/api-reference`
6. Client exchanges code for token, stores in cookie
7. User sees the content

## Test Accounts

| Email | Password | Groups | Access |
|-------|----------|--------|--------|
| `user@test.com` | `password` | — | `/protected/**` |
| `admin@test.com` | `password` | `admin` | Everything |

## Security

- Edge server **verifies JWT signatures** on every request
- Protected pages return **302 redirect** — content is never served to unauthorized users
- `/auth/test-login` is disabled in production (`NODE_ENV=production`)

## Configuration

### `docs.json`

```json
{
  "accessControl": {
    "provider": {
      "type": "oauth",
      "authorizationUrl": "http://localhost:4000/authorize",
      "tokenUrl": "http://localhost:4000/token",
      "clientId": "mock-client-id",
      "callbackPath": "/auth/callback"
    },
    "deploy": {
      "platform": "node-edge"
    }
  }
}
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `AUTH_SECRET` | Yes | JWT signing secret (≥32 chars) |
| `PORT` | No | Edge server port (default: 3000) |
| `NODE_ENV` | No | Set to `production` to disable `/auth/test-login` |

## Production

In production, replace `auth-server.mjs` with your real OAuth provider (Auth0, Okta, etc.) and update `authorizationUrl`, `tokenUrl`, and `clientId`. The generated `server.mjs` is ready for deployment.
