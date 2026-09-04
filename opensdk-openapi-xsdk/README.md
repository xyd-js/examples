# OpenAPI + SDK docs via `x-sdk` (spec-carried)

The sibling `opensdk-openapi` example lets xyd RUN the OpenSDK generator at
docs-build time (`"sdk": true`). This example shows the other way around: the
**OpenAPI spec itself carries the SDK docs** as `x-sdk` extensions, embedded
once in your CI/CD pipeline — the docs build only reads them.

Why? When your OpenAPI and SDKs are produced by your own pipeline, letting the
docs framework regenerate SDKs is redundant (and can drift from what you
actually shipped). With `x-sdk` the pipeline is the single source of truth —
same idea as `x-docs` carrying routes/sidebar in the spec.

## 1. Embed in CI/CD

```bash
# via the xyd CLI (component):
xyd opensdk xsdk --spec sessions-api.yaml --output sessions-api.xsdk.yaml

# restrict languages:
xyd opensdk xsdk --spec sessions-api.yaml --langs typescript,python --output sessions-api.xsdk.yaml
```

This computes, per operation and per language, the method **signature**, the
**Parameters/Returns type reference**, and an idiomatic **usage sample**, and
writes them into the spec:

```yaml
x-sdk:
  languages: [go, python, typescript, ruby, java, csharp]
paths:
  /sessions:
    get:
      x-sdk:
        go:
          signature: client.Sessions.List(ctx) ([]Session, error)
          usage: |
            client := sessions.NewClient(...)
            ...
          types:
            request: { fields: [...] }
            response: { typeName: Session, fields: [...] }
```

## 2. Point the docs at the enriched spec

```json
{
    "api": {
        "openapi": [
            { "source": "./sessions-api.xsdk.yaml", "route": "docs/api" }
        ]
    }
}
```

No `sdk` flag — `x-sdk` in the spec is the opt-in. (A `sdk: { "languages" }`
config, when present, only narrows the spec's language list.) The rendered
docs are identical to the generated mode: raw **HTTP/cURL** is the default
view, SDK languages are one switch away, and the choice persists per reader.

Run it:

```bash
xyd
```
