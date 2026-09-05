# Page context controls — content version (page metadata)

A `content-version` control renders a switcher between variants of the
current page; the row matching the current URL is checked, picking another
navigates to it:

```yaml
contextControls:
  - type: content-version
    appearance: toc-top
    options:
      versions:
        - { title: Angular, description: Logs in Angular apps., page: docs/angular/logs }
        - { title: Bun, description: Logs in Bun apps., page: docs/bun/logs }
```

This example declares the control in each page's FRONTMATTER (page
metadata) in NAVIGATE mode — every variant has its own URL. See
`page-context-controls-content-version-page-sidebar` for the SIDEBAR-declared, same-URL swap
variant. Pairs naturally with `{ page, source }` virtual pages — variant files side
by side, one URL scheme.

Run: `xyd`
