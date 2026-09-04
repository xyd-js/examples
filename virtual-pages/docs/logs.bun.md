---
title: Logs (Bun)
---

# Logs — Bun

This page is served at `/docs/bun/logs` but lives at `docs/logs.bun.md`.

```ts
import { logger } from "@app/logs";

Bun.serve({
  fetch(req) {
    logger.info("hello from Bun");
    return new Response("ok");
  },
});
```
