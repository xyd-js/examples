# i18n-overrides-flat example

Same setup as [`../i18n-overrides`](../i18n-overrides), but per-locale overrides use **flat dot-key syntax** instead of nested objects.

## What this demonstrates

`navigation.languages[].overrides` accepts both shapes:

- **Nested objects** — `Partial<Settings>` form, e.g.
  ```json
  { "components": { "footer": { "footnote": { "props": { "children": "..." } } } } }
  ```
- **Flat dot-keys** — single-key path form (this example), e.g.
  ```json
  { "components.footer.footnote.props.children": "..." }
  ```

Both end up in the same merged settings at request time. Flat dot-keys are recommended when you're changing one deep property; nested form is cleaner when you're changing multiple fields at once.

## URLs

| Locale  | Path                | Footer footnote                  |
|---------|---------------------|----------------------------------|
| English | `/introduction`     | Powered by LiveSession           |
| Polish  | `/pl/introduction`  | Wspierane przez LiveSession      |
| German  | `/de/introduction`  | Unterstützt von LiveSession      |

## Run

```bash
xyd
```

## See also

- [`../i18n-overrides`](../i18n-overrides) — same example using the nested form.
- [`../i18n-catalog-overrides`](../i18n-catalog-overrides) — same effect, but the dot-key paths live in the catalog file (with `$` prefix) instead of `docs.json`.
- [`../i18n-catalogs`](../i18n-catalogs) — catalog-only navigation with convention-based catalogs.
- [`../i18n-catalogs-custom-paths`](../i18n-catalogs-custom-paths) — catalog-only navigation with explicit `i18n.catalogs` file paths.
