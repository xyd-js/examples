# xyd-js custom Vite configuration example

Customize the underlying Vite configuration via `advanced.vite`. The user config is merged with xyd's internal config using Vite's `mergeConfig`.

## Use case

This is useful for remote development environments (e.g., code-server, Gitpod) where you need to allow access from custom hostnames, or when you need custom resolve aliases, define constants, etc.

## Configuration

```json
{
  "advanced": {
    "vite": {
      "server": {
        "allowedHosts": ["my-remote-env.example.com"]
      }
    }
  }
}
```

## Available options

Any valid [Vite configuration](https://vitejs.dev/config/) can be passed. Common options:

- `server.allowedHosts` — allow access from specific hostnames
- `server.port` — override the default dev server port
- `resolve.alias` — add custom import aliases
- `define` — inject compile-time constants
