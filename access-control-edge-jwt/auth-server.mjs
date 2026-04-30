#!/usr/bin/env node

/**
 * Example auth server that issues signed JWTs.
 * Simulates a real authentication provider for the edge example.
 *
 * In production, this would be your app's auth endpoint (Auth0, Supabase, etc.).
 *
 * Flow:
 *   1. xyd docs redirect to http://localhost:4000/login?redirect=/protected/api-reference
 *   2. User enters credentials here
 *   3. This server signs a JWT and redirects to the docs callback:
 *      http://localhost:3000/auth/jwt-callback?token=SIGNED_JWT&redirect=/protected/api-reference
 */

import { createServer } from "node:http";
import { createHmac } from "node:crypto";
import { URL } from "node:url";

const PORT = 4000;
const DOCS_ORIGIN = process.env.DOCS_ORIGIN || "http://localhost:3000";
const JWT_SECRET = process.env.AUTH_SECRET || "playground-test-secret-key-at-least-32-chars";

const USERS = {
  "user@test.com":  { password: "password", sub: "user-1",  groups: [] },
  "admin@test.com": { password: "password", sub: "admin-1", groups: ["admin"] },
};

function signJWT(payload) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const body = Buffer.from(JSON.stringify({
    ...payload,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 86400,
  })).toString("base64url");
  const sig = createHmac("sha256", JWT_SECRET).update(`${header}.${body}`).digest("base64url");
  return `${header}.${body}.${sig}`;
}

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // GET /login — show login form
  if (req.method === "GET" && url.pathname === "/login") {
    const redirect = url.searchParams.get("redirect") || "/";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
<html><head><title>Auth Server — Login</title>
<style>
  body { font-family: system-ui; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f5f5f5; }
  .card { background: #fff; padding: 32px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.1); max-width: 360px; width: 100%; }
  h2 { margin: 0 0 4px; }
  .hint { color: #666; font-size: 13px; margin: 0 0 20px; }
  label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 4px; }
  input { width: 100%; padding: 8px 10px; font-size: 14px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 12px; box-sizing: border-box; }
  button { width: 100%; padding: 10px; font-size: 14px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer; }
  button:hover { background: #1d4ed8; }
  .accounts { background: #f8f9fa; border-radius: 6px; padding: 12px; margin-bottom: 16px; font-size: 12px; }
  code { background: #e9ecef; padding: 1px 4px; border-radius: 3px; }
</style></head>
<body><div class="card">
  <h2>Auth Server</h2>
  <p class="hint">External authentication provider for xyd docs</p>
  <div class="accounts">
    <strong>Test accounts:</strong><br>
    <code>user@test.com</code> / <code>password</code> — regular user<br>
    <code>admin@test.com</code> / <code>password</code> — admin
  </div>
  <form method="POST" action="/login?redirect=${encodeURIComponent(redirect)}">
    <label>Email</label>
    <input name="email" type="email" value="user@test.com" required />
    <label>Password</label>
    <input name="password" type="password" value="password" required />
    <button type="submit">Sign in</button>
  </form>
</div></body></html>`);
    return;
  }

  // POST /login — validate and issue JWT
  if (req.method === "POST" && url.pathname === "/login") {
    let body = "";
    req.on("data", (c) => body += c);
    req.on("end", () => {
      const params = new URLSearchParams(body);
      const email = params.get("email");
      const password = params.get("password");
      const redirect = url.searchParams.get("redirect") || "/";

      const user = USERS[email];
      if (!user || user.password !== password) {
        res.writeHead(401, { "Content-Type": "text/plain" });
        res.end("Invalid credentials");
        return;
      }

      const token = signJWT({ sub: user.sub, groups: user.groups });

      // Redirect back to the xyd docs server with the signed token
      const callbackUrl = `${DOCS_ORIGIN}/auth/jwt-callback?token=${encodeURIComponent(token)}&redirect=${encodeURIComponent(redirect)}`;

      console.log(`[auth] ${email} → JWT issued, redirecting to ${callbackUrl}`);

      res.writeHead(302, { Location: callbackUrl });
      res.end();
    });
    return;
  }

  res.writeHead(404); res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`\n  Auth server running at http://localhost:${PORT}`);
  console.log(`  Docs origin: ${DOCS_ORIGIN}`);
  console.log(`  JWT secret:  ${JWT_SECRET.slice(0, 8)}...`);
  console.log(`\n  Test accounts:`);
  console.log(`    user@test.com  / password → regular user`);
  console.log(`    admin@test.com / password → admin\n`);
});