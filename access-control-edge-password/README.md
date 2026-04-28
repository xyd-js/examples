# Access Control — Edge Password Example

Demonstrates xyd access control with a **Node.js edge server** and **password-based authentication**. All pages are protected by default. Runs 100% locally.

## Architecture

```
Browser ──→ Edge Server (port 3000) ──→ Static Files
               │                          (.xyd/build/client/)
               │ JWT verify + access map
               │
               └──→ Auth Server (port 4000)
                      │ Password form
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

## Auth Flow

1. User visits any protected page
2. Edge server checks cookie → no token → **302** redirect to `/login`
3. Login page shows "Enter password" form
4. User enters credentials
5. Auth server signs a JWT and redirects back with token
6. Edge server validates JWT signature → sets cookie → **302** to the page
7. User sees the content

## Key Difference

Unlike the JWT example, this example uses `"defaultAccess": "protected"` — **all pages are locked by default**, and only `/guides/**` is explicitly made public via rules.

## Test Accounts

| Email | Password | Groups | Access |
|-------|----------|--------|--------|
| `user@test.com` | `password` | — | `/protected/**` |
| `admin@test.com` | `password` | `admin` | Everything |

## Security

- JWTs are signed with **HMAC-SHA256** using `AUTH_SECRET`
- Edge server **verifies the signature** on every request — tampered tokens are rejected
- Protected pages return **302 redirect** (even for `curl`) — content is never served to unauthorized users
- `/auth/test-login` is disabled in production (`NODE_ENV=production`)

## Configuration

### `docs.json`

```json
{
  "accessControl": {
    "provider": {
      "type": "jwt",
      "loginUrl": "http://localhost:4000/login",
      "algorithm": "HS256",
      "secret": "$AUTH_SECRET"
    },
    "defaultAccess": "protected",
    "rules": [
      { "match": "/guides/**", "access": "public" }
    ],
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
