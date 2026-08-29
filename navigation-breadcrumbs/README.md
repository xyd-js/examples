# Navigation breadcrumbs — resolved, clickable

Breadcrumbs that show the **full path** from the top-level tab/route down to the
current page, where each crumb is a **link only when it resolves to a real route** —
exactly what a user can click in the primary nav.

Open `/guides/customization/appearance` and the breadcrumb reads:

```
Guides  /  Customization  /  Appearance
  │            │                │
 link      plain text      current page
(tab route)  (no route)     (never a link)
```

- **`Guides`** — the top-level tab/route → a link to `/guides`.
- **`Customization`** — a plain group (no route) → plain text.
- **`Appearance`** — the current page → plain text (breadcrumbs never link the page you're on).

Open `/guides/integrations/analytics` and **`Integrations`** *is* a link — because
that group declares a `page` (a clickable group). The rule is generic: a crumb is a
link the moment it resolves to a real route.

## Run

```bash
xyd
```

## Configure

Enable + tune breadcrumbs via `theme.appearance.content.breadcrumbs` — a boolean, or
an object (both flags default `true`):

```jsonc
{
  "theme": {
    "appearance": {
      "content": {
        "breadcrumbs": {
          "links": true,      // false → every crumb is plain text
          "rootLevel": true   // false → hide the top "Guides" crumb
        }
      }
    }
  }
}
```

A group becomes a clickable crumb by declaring a `page` (the "Group Page" idea):

```jsonc
{ "group": "Integrations", "page": "guides/integrations/overview", "pages": [ /* … */ ] }
```

## Styling

Breadcrumbs render into the `xyd-breadcrumbs` custom element:

- `xyd-breadcrumbs` — the host
- `[part="item"]` — each crumb (`[data-active="true"]` on the current page)
- `[part="item"] a` — a clickable crumb
- `[part="icon"]` — the `/` separator
