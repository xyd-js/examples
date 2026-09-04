---
title: Logs (Angular)
---

# Logs — Angular

This page is served at `/docs/angular/logs` but lives at
`docs/logs.angular.md`.

```ts
import { Logger } from "@app/logs";

@Component({ selector: "app-root" })
export class AppComponent {
  constructor(private logger: Logger) {
    this.logger.info("hello from Angular");
  }
}
```
