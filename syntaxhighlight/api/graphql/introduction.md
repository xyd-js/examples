---
title: GraphQL Highlight
---

# GraphQL Syntax Highlight
:::subtitle
Learn how to syntax highlight on specific page
:::

## Example

```gql [lines descHead="Tip" desc="Check out <code>.docs/theme/graphql.css</code>"]
mutation appRevokeAccessScopes($scopes: [String!]!) {
  appRevokeAccessScopes(scopes: $scopes) {
    revoked {
      # AccessScope fields
    }
    userErrors {
      field
      message
    }
  }
}
```