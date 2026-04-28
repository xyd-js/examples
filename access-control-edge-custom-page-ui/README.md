# Access Control — Custom Login Page Example

Demonstrates xyd access control with a **custom login page UI**. Instead of using the built-in login page, this example provides a fully custom React component with its own CSS. Runs 100% locally.

## Architecture

```
Browser ──→ Edge Server (port 3000) ──→ Static Files
               │                          (.xyd/build/client/)
               │ JWT verify + access map
               │
               └──→ Auth Server (port 4000)
                      │ Sign in form
                      │ Issues signed JWT
                      └──→ Redirect back with token
```

## Quick Start

```bash
# 1. Install xyd CLI
bun add -g xyd-js

# 2. Build the static site (generates server.mjs automatically)
xyd build

# 3. Start the auth server (external auth provider)
AUTH_SECRET=playground-test-secret-key-at-least-32-chars node auth-server.mjs &

# 4. Start the edge server (serves docs + enforces access)
AUTH_SECRET=playground-test-secret-key-at-least-32-chars node .xyd/build/client/server.mjs

# 5. Open http://localhost:3000
```

## Key Difference

This example uses a **custom login component** instead of the built-in login page:

```json
{
  "accessControl": {
    "login": "./custom-login.tsx"
  }
}
```

The custom component (`custom-login.tsx`) uses `useAccessControl()` from `@xyd-js/client-api` and has its own CSS (`custom-login.css`).

## Test Accounts

| Email | Password | Groups | Access |
|-------|----------|--------|--------|
| `user@test.com` | `password` | — | `/protected/**` |
| `admin@test.com` | `password` | `admin` | Everything |

## Security

- JWTs are signed with **HMAC-SHA256** using `AUTH_SECRET`
- Edge server **verifies the signature** on every request — tampered tokens are rejected
- Protected pages return **302 redirect** (even for `curl`) — content is never served to unauthorized users

## Configuration

### `docs.json`

```json
{
  "accessControl": {
    "provider": {
      "type": "jwt",
      "loginUrl": "/login",
      "algorithm": "HS256",
      "secret": "$AUTH_SECRET"
    },
    "login": "./custom-login.tsx",
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
| `DOCS_ORIGIN` | No | Docs server URL for auth server redirects (default: http://localhost:3000) |
| `NODE_ENV` | No | Set to `production` to disable `/auth/test-login` |

## Production

In production, replace `auth-server.mjs` with your real auth provider and set `loginUrl` to its URL. The generated `server.mjs` is ready for deployment.
