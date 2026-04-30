#!/usr/bin/env node

/**
 * Password auth server for the edge password example.
 * Shows a password form and issues a signed JWT on correct password.
 */

import { createServer } from "node:http";
import { createHmac } from "node:crypto";
import { URL } from "node:url";

const PORT = 4000;
const DOCS_ORIGIN = process.env.DOCS_ORIGIN || "http://localhost:3000";
const JWT_SECRET = process.env.AUTH_SECRET || "playground-test-secret-key-at-least-32-chars";
const DOCS_PASSWORD = process.env.DOCS_PASSWORD || "secret123";

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

  if (req.method === "GET" && url.pathname === "/login") {
    const redirect = url.searchParams.get("redirect") || "/";
    const error = url.searchParams.get("error") || "";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
<html><head><title>Password Protected Docs</title>
<style>
  body { font-family: system-ui; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f5f5f5; }
  .card { background: #fff; padding: 32px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.1); max-width: 360px; width: 100%; }
  h2 { margin: 0 0 4px; }
  .hint { color: #666; font-size: 13px; margin: 0 0 20px; }
  input { width: 100%; padding: 8px 10px; font-size: 14px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 12px; box-sizing: border-box; }
  button { width: 100%; padding: 10px; font-size: 14px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer; }
  .error { color: #ef4444; font-size: 13px; margin-bottom: 12px; }
</style></head>
<body><div class="card">
  <h2>Enter Password</h2>
  <p class="hint">This documentation is password-protected.</p>
  ${error ? '<p class="error">' + error + '</p>' : ""}
  <form method="POST" action="/login?redirect=${encodeURIComponent(redirect)}">
    <input name="password" type="password" placeholder="Enter password" required autofocus />
    <button type="submit">Continue</button>
  </form>
  <p class="hint" style="margin-top:12px">Test password: <code>secret123</code></p>
</div></body></html>`);
    return;
  }

  if (req.method === "POST" && url.pathname === "/login") {
    let body = "";
    req.on("data", (c) => body += c);
    req.on("end", () => {
      const params = new URLSearchParams(body);
      const password = params.get("password");
      const redirect = url.searchParams.get("redirect") || "/";

      if (password !== DOCS_PASSWORD) {
        res.writeHead(302, { Location: `/login?redirect=${encodeURIComponent(redirect)}&error=Invalid+password` });
        res.end();
        return;
      }

      const token = signJWT({ sub: "password-user", groups: [] });
      const callbackUrl = `${DOCS_ORIGIN}/auth/jwt-callback?token=${encodeURIComponent(token)}&redirect=${encodeURIComponent(redirect)}`;
      console.log(`[auth] Password accepted, redirecting`);
      res.writeHead(302, { Location: callbackUrl });
      res.end();
    });
    return;
  }

  res.writeHead(404); res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`\n  Password auth server at http://localhost:${PORT}`);
  console.log(`  Password: ${DOCS_PASSWORD}\n`);
});
