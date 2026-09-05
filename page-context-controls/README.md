# Page context controls — slots & forms

Contextual page actions, Mintlify-style but multi-slot and per-page.

- Simplest form: `"contextControls": ["copy"]` (global, header slot).
- Typed form with overrides: `{ "type": "copy", "appearance": "toc-top", "label": "..." }`.
- Slots: `header`, `toc-top`, `toc-bottom`.
- Per-page frontmatter REPLACES the global set; `contextControls: []` opts out.

Built-in actions: `copy`, `view-markdown`, `chatgpt`, `claude`,
`mcp` (needs `options.url`).

Sibling examples: `page-context-controls-dropdown` (grouping),
`page-context-controls-content-version-page-metadata` /
`page-context-controls-content-version-page-sidebar` (variant switchers),
`page-context-controls-custom` (custom components).

Run: `xyd`
