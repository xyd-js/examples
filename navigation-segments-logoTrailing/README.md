# Navigation segments — logo-trailing product switcher

A `navigation.segments` entry with `appearance: "logoTrailing"` renders a **product
switcher right after the logo**. The trigger shows the active product (falling back
to the segment `title`); the menu switches between the segment `pages`, with a check
on the active one. It opens on `hover` (default) or `click`.

Because it is placed through a **surface**, it works wherever a theme puts its logo —
the header (like `cosmo`, used here) or the sidebar (like `picasso`).

## Run

```bash
xyd
```

Next to the logo you'll see a **Session Replay ▾ / Web Analytics ▾** switcher:

- **hover** it to open the menu; the active product is checked.
- pick the other product to jump to its section — the **left sidebar changes per
  product** (each product is a route-scoped `navigation.sidebar[].route` with its
  own sidebar), and the switcher label updates to the new product.

## Configure

Add a segment with `appearance: "logoTrailing"`. Its `title` is the fallback label,
`pages` are the switch targets, and `trigger` chooses hover vs click:

```jsonc
{
  "navigation": {
    "segments": [
      {
        "route": "products",
        "title": "Products",
        "appearance": "logoTrailing",   // render after the logo
        "trigger": "hover",             // "hover" (default) | "click"
        "pages": [
          { "title": "Session Replay", "page": "products/session-replay", "icon": "eye" },
          { "title": "Web Analytics",  "page": "products/web-analytics",  "icon": "chart-line" }
        ]
      }
    ],
    "sidebar": [
      "overview",
      { "route": "products/session-replay", "pages": [ /* … */ ] },
      { "route": "products/web-analytics",  "pages": [ /* … */ ] }
    ]
  }
}
```

Each `page` points at a route-scoped sidebar section, so the switcher stays visible
across every page of that product. A page may itself carry a nested `dropdownMenu`
to add submenus.

> The logo must be configured (`theme.logo`) for the switcher to appear — it is
> hosted right after the logo.

## Styling

The switcher reuses the nav-dropdown custom elements, so the same CSS hooks apply:

- `xyd-nav-dropdown[data-fw-nav-dropdown]` — the switcher host
- `[part="dropdown-trigger"]` / `[part="dropdown-trigger-label"]` — the trigger
- `[part="dropdown-list"]` — the open menu
- `[part="dropdown-item"]` (with `[part="dropdown-check"]` on the active one)
