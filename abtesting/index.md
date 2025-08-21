---
title: Introduction
layout: reader
---

# A/B Testing Introduction

:::subtitle
Learn how to use a/b testing
:::

## Installation [toc !content]
@include "@snippets/installation.md"

## Demo
Try to open in incognito mode and check a new a/b version.

:::callout
If you still see same version, clear local storage or open new browser instance again.
:::

:::feature{flag="demo-tutorial" match="v1"}
<div class="demo-tutorial-container">

@include "./tutorial1.mdx"

</div>
:::

:::feature{flag="demo-tutorial" match="v2"}
<div class="demo-tutorial-container">

@include "./tutorial2.mdx"

</div>
:::

<!-- <Feature flag="demo-tutorial" match="v1">
<div class="demo-tutorial-container">

@include "./tutorial1.mdx"

</div>
</Feature>

<Feature flag="demo-tutorial" match="v2">
<div class="demo-tutorial-container">

@include "./tutorial2.mdx"

</div>
</Feature> -->

## Setup docs.json
```json docs.json [descHead="Tip" desc="Check out how to setup different [A/B testing providers](https://xyd.dev/docs/guides/integrations/abtesting/abtesting-integrations)."]
{
    "abtesting": {
        "providers": {
            "growthbook": {
                "clientKey": "YOUR_CLIENT_KEY"
            }
        }
    }
}
```