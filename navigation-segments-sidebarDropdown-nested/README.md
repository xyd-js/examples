# Nested sidebar dropdown

A `sidebarDropdown` segment entry can declare `pages: [...]` instead of a
single `page` — it becomes an inline-expandable **group** inside the sidebar's
section switcher: clicking the row expands another level of items (indented,
with their own icons); clicking a child navigates to its section. The group
containing the section you are on auto-expands when the dropdown opens.

```json
{
    "title": "SDKs",
    "icon": "package",
    "description": "Client libraries",
    "pages": [
        { "title": "JavaScript SDK", "page": "platform/sdk/js", "href": "platform/sdk/js/quickstart" },
        { "title": "Python SDK", "page": "platform/sdk/py", "href": "platform/sdk/py/quickstart" }
    ]
}
```

Leaf entries mix freely with groups, and the same nesting works for the
global `navigation.sidebarDropdown`.

Run it:

```bash
xyd
```
