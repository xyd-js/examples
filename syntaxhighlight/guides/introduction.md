---
title: Introduction
---

# Syntax Highlight Introduction
:::subtitle
Learn how to syntax highlight on specific page
:::

## Installation

::::steps
1. Install the <code>xyd</code> CLI:
:::code-group{title="xyd installation"}
```bash bun
bun add -g xyd-js
```

```bash pnpm
pnpm add -g xyd-js
```

```bash npm
npm i -g xyd-js
```
:::

2. Clone GitHub repo:
```bash [lines]
git clone https://github.com/xyd-js/examples
cd examples/syntaxhighlight
``` 

3. Run dev server:
```bash [descHead="Info" desc="Above command runs a dev server"]
xyd
```

3. Enjoy!
::::

:::grid{cols=2}
- 
  - 
    :::guide-card{title="REST Syntax Highlight" href="/api/rest"}
    Check how to apply syntax highlight.
    :::

  - 
    :::guide-card{title="GraphQL Syntax Highlight" href="/api/graphql"}
    Check how to apply syntax highlgith on another page.
    :::
:::