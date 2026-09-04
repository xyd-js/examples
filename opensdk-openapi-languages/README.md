# OpenSDK + OpenAPI — chosen languages

The object form of `sdk` restricts which SDK languages the reference offers:

```json
{
    "api": {
        "openapi": [
            { "source": "./sessions-api.yaml", "route": "docs/api", "sdk": { "languages": ["typescript", "python"] } }
        ]
    }
}
```

The switcher then lists **TypeScript**, **Python**, and the raw **Shell**
(HTTP/cURL) view — which is the default. Unknown language ids are ignored;
the rendered order always follows the canonical SDK order (go, python,
typescript, ruby, java, csharp).

See the sibling `opensdk-openapi` example for the all-languages `sdk: true`
form.

Run it:

```bash
xyd
```
