---
title: Custom Vite Configuration
icon: settings
---

# Custom Vite Configuration {subtitle="Customize the underlying Vite dev server and build pipeline"}

Learn how to pass custom [Vite configuration](https://vitejs.dev/config/) to xyd via `advanced.vite`.
This is useful for remote development environments (e.g., code-server, Gitpod) where you need to allow access from custom hostnames.

## Installation [toc]
```bash [descHead="CLI" desc="Command line tool to build and run your docs."]
npm i -g xyd-js
```

## Setup docs.json [toc]

```json docs.json [descHead="Tip" desc="Any valid Vite config option can be passed under <code>advanced.vite</code>."]
{
    "advanced": {
        // !diff
        "vite": {
            // !diff
            "server": {
                // !diff
                "allowedHosts": ["my-remote-env.example.com"]
                // !diff
            }
            // !diff
        }
    }
}
```

## Common Options [toc]

### Allow remote hosts
When using a remote IDE like code-server or Gitpod, the dev server blocks requests from unknown hostnames.
Add your domain to `allowedHosts`:

```json
{
    "advanced": {
        "vite": {
            "server": {
                // !diff
                "allowedHosts": ["my-workspace.gitpod.io"]
            }
        }
    }
}
```

### Custom resolve aliases
Add import aliases for cleaner paths:

```json
{
    "advanced": {
        "vite": {
            // !diff
            "resolve": {
                // !diff
                "alias": {
                    // !diff
                    "@components": "./src/components"
                    // !diff
                }
                // !diff
            }
        }
    }
}
```

### Compile-time constants
Inject values at build time with `define`:

```json
{
    "advanced": {
        "vite": {
            // !diff
            "define": {
                // !diff
                "__APP_VERSION__": "\"1.0.0\""
                // !diff
            }
        }
    }
}
```

## Dev Server [toc]
&nbsp;
```bash [descHead="Dev Server" desc="Runs dev server with your custom Vite config applied."]
xyd
```

## Build [toc]
&nbsp;
```bash [descHead="Build" desc="Custom Vite config is also applied during production builds."]
xyd build
```

## Next Steps
:::grid{cols=2}
-
  -
    :::guide-card{title="Vite Configuration" href="https://vitejs.dev/config/"}
    Full Vite configuration reference.
    :::

  -
    :::guide-card{title="Settings Reference" href="https://xyd.dev/docs/guides/settings"}
    All available xyd settings.
    :::
:::
