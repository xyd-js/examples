# Page context controls — custom components

The `custom` control renders a project-local React component — the same
`{ import, props }` pattern as sidebar `component` entries — at any slot:

```json
{ "type": "custom", "appearance": "toc-bottom",
  "component": { "import": "./components/Feedback", "props": { "label": "Was this helpful?" } } }
```

Declare it globally (`components.contextControls`) or on a sidebar page
entry (`{ "page": "...", "contextControls": [...] }`). Components declared in
docs.json are bundled at build time; frontmatter can only reference paths
already registered that way.

Run: `xyd`
