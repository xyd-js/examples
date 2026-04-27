p# Access Control — Edge Server Example

Demonstrates xyd access control with a **Node.js edge server** and **external auth provider**. Runs 100% locally.

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
# 1. Install deps
pnpm install

# 2. Build the static site (generates server.mjs automatically)
xyd build

# 3. Start the auth server (external auth provider)
AUTH_SECRET=playground-test-secret-key-at-least-32-chars node auth-server.mjs &

# 4. Start the edge server (serves docs + enforces access)
AUTH_SECRET=playground-test-secret-key-at-least-32-chars node .xyd/build/client/server.mjs

# 5. Open http://localhost:3000
```

## Auth Flow

1. User visits `/protected/api-reference`
2. Edge server checks cookie → no token → **302** redirect to `http://localhost:4000/login`
3. Auth server shows login form
4. User enters `user@test.com` / `password`
5. Auth server signs a JWT with HS256 and redirects to `http://localhost:3000/auth/jwt-callback?token=SIGNED_JWT&redirect=/protected/api-reference`
6. Edge server validates JWT signature → sets cookie → **302** to the protected page
7. User sees the content

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

## Verify with curl

```bash
# Public page → 200
curl -o /dev/null -w "%{http_code}" http://localhost:3000/guides/welcome

# Protected page → 302 redirect
curl -o /dev/null -w "%{http_code}" http://localhost:3000/protected/api-reference

# Admin page → 302 redirect
curl -o /dev/null -w "%{http_code}" http://localhost:3000/admin/dashboard
```

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
    "edge": {
      "platform": "node"
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

In production, replace `auth-server.mjs` with your real auth provider (Auth0, Supabase, etc.) and set `loginUrl` to its URL. The generated `server.mjs` is ready for deployment.