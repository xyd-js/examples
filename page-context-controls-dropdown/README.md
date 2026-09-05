# Page context controls — dropdown grouping

Combining is EXPLICIT: a `dropdown` control merges the actions you choose
into one menu; anything not grouped renders as its own button. Mix both on
one page, at any slot:

```yaml
contextControls:
  - type: dropdown
    appearance: header
    label: Ask AI
    options: { controls: [chatgpt, claude] }
  - copy                       # separate button, same header slot
  - type: view-markdown
    appearance: toc-bottom     # separate, different slot
```

Run: `xyd`
