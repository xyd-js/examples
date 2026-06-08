---
title: Einführung
description: i18n mit Sprachüberschreibungen — flache Punkt-Schlüssel-Form.
icon: rocket
---

# Sprachüberschreibungen (flache Punkt-Schlüssel)

Dieselbe Konfiguration wie `../i18n-overrides`, aber jeder `overrides`-Block verwendet **flache Punkt-Schlüssel-Syntax** statt verschachtelter Objekte:

```json
"overrides": {
  "components.banner.content": "**xyd 0.1.0-beta** — Bald verfügbar"
}
```

`applyOverrides` akzeptiert beide Formen. Diesen Stil verwenden Sie, wenn Sie eine einzelne tiefe Eigenschaft ändern; die verschachtelte Form ist praktischer, wenn Sie mehrere Felder gleichzeitig ändern.

Schauen Sie auf das Banner oben auf der Seite — der Inhalt wechselt zwischen Englisch, Polnisch und Deutsch, genau wie im Beispiel mit verschachtelter Form.
