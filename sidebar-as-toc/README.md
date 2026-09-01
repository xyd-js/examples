# Sidebar as ToC

A sidebar group with `asToc: true` turns its pages into **sections of one
composed page** instead of standalone routes:

- the group's markdown files are stitched into the enclosing route's index
  page, in sidebar order;
- clicking a sidebar item scrolls to its section (the URL only gains a hash);
- scrolling the page marks the section you are reading as active in the
  sidebar (scroll-spy);
- the right-hand table of contents is hidden on that page — the sidebar has
  taken its job;
- direct visits to a section's old path return 404 (they are not pages).

Groups without `asToc` behave exactly as before, so a sidebar can mix both —
here **Operating Systems** and **Programming Languages** compose the overview
page while **Resources** navigates normally.

```json
{
    "group": "Operating Systems",
    "asToc": true,
    "pages": [
        "operating-systems/linux",
        "operating-systems/windows",
        "operating-systems/macos"
    ]
}
```

Run it:

```bash
xyd
```
