---
title: Introduction
layout: reader
---

# Icons Introduction

:::subtitle
Learn how to use custom icons in your docs
:::

## Installation [toc !content]
@include "@snippets/installation.md"

## Example Custom Icons
@include "~/.docs/components/IconsGrid.mdx"

## Setup docs.json
```json docs.json
{
    "theme": {
        ...
        "icons": {
            "library": [
                "./icons.json"
            ]
        }
    }
}
```

## Iconify Setup
As `xyd` use [iconify](https://iconify.design), to make [custom icons](https://docs.xyd.dev/docs/guides/icons) usage like `:icons{name="icon"}` or `<Icon name="icon"/>` we need to convert this into [iconify json](https://iconify.design/docs/types/iconify-json.html):


@importCode[lines descHead="TL;DR" desc="Above code loads icons from directory and converts to iconify json as single file icons.json output."] "~/.docs/snippets/icons.ts"
