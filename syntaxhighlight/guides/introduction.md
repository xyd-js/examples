---
title: Guides Highlight
---

# Syntax Highlight Introduction
:::subtitle
Learn how to syntax highlight on specific page
:::

:::callout
You can use the [Theme Editor](https://themes.codehike.org/editor) to customize any of the built-in themes or any theme from the [VS Code marketplace](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes).
:::


## Installation [toc !content]
@include "@snippets/installation.md"

## Setup docs.json
```json docs.json [descHead="Tip" desc="You can pass a your own custom path too."] 
{
    "theme": {
        ...
        "coder": {
            "syntaxHighlight": "./.docs/syntax.json"
        }
    }
}
```

## Setup navigation
```json
{
   "navigation": {
      "sidebar": [
        {
          "pages": [
            {
                "group": false,
                // !diff
                "route": "guides",
                // !diff
                "id": "guides",
                "pages": [
                    "guides/introduction"
                ]
            },
            {
                "group": false,
                // !diff
                "route": "api/rest",
                // !diff
                "id": "rest",
                "pages": [
                    "api/rest/introduction"
                ]
            },
            {
                "group": false,
                // !diff
                "route": "api/graphql",
                "id": "graphql",
                // !diff
                "pages": [
                    "api/graphql/introduction"
                ]
            }
          ]
        }
      ]
   }
}
```

If your docs need more advanced [navigation](https://docs.xyd.dev/docs/guides/navigation):

```json
{
   "navigation": {
      "sidebarDropdown": [
          {
              "title": "Guides",
              // !diff
              "page": "guides"
          },
          {
              "title": "REST",
              // !diff
              "page": "api/rest"
          },
          {
              "title": "GraphQL",
              // !diff
              "page": "api/graphql"
          }
      ],
      "sidebar": [
          {
              // !diff
              "route": "guides",
              // !diff
              "id": "guides",
              "pages": [
                  "guides/introduction"
              ]
          },
          {
              // !diff
              "route": "api/rest",
              // !diff
              "id": "rest",
              "pages": [
                  "api/rest/introduction"
              ]
          },
          {
              // !diff
              "route": "api/graphql",
              // !diff
              "id": "graphql",
              "pages": [
                  "api/graphql/introduction"
              ]
          }
      ]
   }
}
```


## Setup CSS
Thanks to `"type": "from-css"`(syntax.json) you can use css variables. 

```json .docs/theme/index.css
@import "./graphql.css";
@import "./rest.css";

:root {
    --syntax1: #00f4b9;
    --syntax2: #000;
}
```

## Next Steps
:::grid{cols=2}
- 
  - 
    :::guide-card{title="REST Syntax Highlight" href="/api/rest/introduction"}
    Check how to apply syntax highlight.
    :::

  - 
    :::guide-card{title="GraphQL Syntax Highlight" href="/api/graphql/introduction"}
    Check how to apply syntax highlgith on another page.
    :::
:::