---
title: Welcome
description: Edge middleware access control example
---

# Edge Middleware Access Control

This example uses a **local edge server** that verifies JWT signatures. Tampered tokens are rejected.

## Setup

```bash
# 1. Build (generates server.mjs automatically)
xyd build

# 2. Run the generated server
AUTH_SECRET=your-secret-here node .xyd/build/client/server.mjs

# 3. Open http://localhost:3000
```

## Login / Logout

Click a protected page link in the sidebar — you'll be redirected to the external auth server at `localhost:4000` to sign in.

- **Logout**: [/auth/logout](/auth/logout)

Test accounts: `user@test.com` / `password` (user) or `admin@test.com` / `password` (admin).

## Security

- JWT tokens are signed with HS256 using `AUTH_SECRET` from `.env`
- The edge server verifies the signature on every request
- Tampered or forged tokens → `302` redirect to login
- Protected content chunks also require valid auth

## Test with curl

```bash
# Public → 200
curl -o /dev/null -w "%{http_code}" http://localhost:3000/guides/welcome

# Protected → 302 redirect
curl -o /dev/null -w "%{http_code}" http://localhost:3000/protected/api-reference
```

## Access Levels

| Section | Access | Without auth |
|---------|--------|-------------|
| `/guides/**` | Public | 200 |
| `/protected/**` | Authenticated | 302 → /login |
| `/admin/**` | Admin group | 302 → /login |
