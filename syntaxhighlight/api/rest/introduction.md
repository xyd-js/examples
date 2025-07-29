---
title: Introduction
---

# REST Syntax Highlight
:::subtitle
Learn how to syntax highlight on specific page
:::

## Example

```bash [descHead="Tip" desc="Check out <code>.docs/theme/rest.css</code>"]
curl -X POST https://api.example.com/access-scopes/revoke \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "scopes": ["read:users", "write:posts"]
  }'
```