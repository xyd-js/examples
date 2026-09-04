# OpenAPI + SDK docs

Enable SDK-native reference docs for an OpenAPI source with one flag:

```json
{
    "api": {
        "openapi": [
            { "source": "./sessions-api.yaml", "route": "docs/api", "sdk": true }
        ]
    }
}
```

At build time xyd runs the OpenSDK toolchain over the spec and enriches every
operation with:

- a **method signature** header per language (`client.Sessions.List(ctx)`, …),
- SDK-native **Parameters / Returns** types,
- idiomatic **usage samples** for Go, Python, TypeScript, Ruby, Java and C#,
- and the raw **HTTP/cURL** view as the `Shell` entry of the same switcher —
  the DEFAULT view; readers opt into an SDK language.

The language choice is page-wide and persists across operations. Restrict the
languages with the object form (see the `opensdk-openapi-languages` example):

```json
{ "source": "./sessions-api.yaml", "route": "docs/api", "sdk": { "languages": ["typescript", "python"] } }
```

Run it:

```bash
xyd
```
