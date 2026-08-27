# Navigation dropdown menu

Nested navigation on **header anchors** and **tabs** using `dropdownMenu`, opened
on `hover` (default) or `click`. Menus can nest to multiple levels (submenus).

> Requires the Rust + bun engine (`xyd` native binary, or `XYD_BUN=1`).

## Run

```bash
xyd
```

Open the site and try:

- **Products** (header anchor) — opens on **hover**, with a multi-level submenu
  (`Browser SDK → Install / Methods / Events`).
- **Company** (header anchor) — opens on **click**.
- **API Reference** (tab) — opens on **hover**.

The **left sidebar changes per section** (route-scoped): the `Browser SDK`,
`REST API`, and `GraphQL` tabs each navigate to a route (`navigation.sidebar[].route`)
with its own sidebar — see `docs.json`.

This example also applies **edge-to-edge hovered items** via the
`theme.appearance.navigationDropdown` flag (see [Styling](#styling)):

```json
"appearance": {
  "navigationDropdown": {
    "items": "flush",       // hovered item background touches all four edges
    "chevron": "rotate"     // trigger chevron flips when open ("static" = no rotation)
  }
}
```

## Configure

Add `dropdownMenu` to any header anchor or tab, and optionally `trigger`:

```jsonc
{
  "navigation": {
    "anchors": {
      "header": [
        {
          "title": "Products",
          "trigger": "hover",              // "hover" (default) | "click"
          "dropdownMenu": [
            {
              "title": "Browser SDK",       // a group → nested submenu
              "dropdownMenu": [
                { "title": "Install", "page": "docs/browser/install" },
                { "title": "Methods", "page": "docs/browser/methods" }
              ]
            },
            { "title": "REST API", "page": "docs/rest" },
            { "title": "GraphQL", "page": "docs/graphql" }
          ]
        }
      ]
    },
    "tabs": [
      { "title": "Overview", "page": "overview" },
      {
        "title": "API Reference",
        "trigger": "hover",
        "dropdownMenu": [
          { "title": "Browser SDK", "page": "docs/browser" },
          { "title": "REST API", "page": "docs/rest" }
        ]
      }
    ]
  }
}
```

- Each `dropdownMenu` entry is a normal navigation item (`title`, `page`/`href`,
  `icon`, `description`).
- An entry that itself declares `dropdownMenu` becomes a **submenu** (nesting is
  unlimited).

## Styling

The dropdown renders as design-system custom elements, so you can restyle every
part directly (in `theme.appearance.cssTokens`, a custom stylesheet, or a theme):

| Element / hook | What it is |
|---|---|
| `xyd-nav-dropdown` | the dropdown host (wraps trigger + menu) |
| `[part="dropdown-trigger"]` | the trigger (the anchor/tab label) |
| `xyd-nav-dropdown-menu` | the menu panel (the popover content + each submenu) |
| `xyd-nav-dropdown-item` | a menu item / submenu trigger |
| `[part="dropdown-icon"]` · `[part="dropdown-label"]` · `[part="dropdown-description"]` · `[part="dropdown-submenu-indicator"]` | item internals |

CSS variables (with sensible fallbacks):

```css
xyd-nav-dropdown-menu {
  --xyd-nav-dropdown-bgcolor: #fff;
  --xyd-nav-dropdown-border-color: rgba(0, 0, 0, 0.08);
  --xyd-nav-dropdown-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  --xyd-nav-dropdown-item-bgcolor--hover: rgba(0, 0, 0, 0.05);
}

/* or target the elements directly */
xyd-nav-dropdown-menu { border-radius: 12px; padding: 8px; }
xyd-nav-dropdown-item { font-size: 14px; }
```
