---
title: Einführung
description: i18n mit Sprachüberschreibungen — flache Punkt-Schlüssel-Form.
icon: rocket
---

# Sprachüberschreibungen (flache Punkt-Schlüssel)

Dieselbe Konfiguration wie `../i18n-overrides`, aber jeder `overrides`-Block verwendet **flache Punkt-Schlüssel-Syntax** statt verschachtelter Objekte:

```json
"overrides": {
  "components.footer.footnote.props.children": "Unterstützt von LiveSession"
}
```

`applyOverrides` akzeptiert beide Formen. Diesen Stil verwenden Sie, wenn Sie eine einzelne tiefe Eigenschaft ändern; die verschachtelte Form ist praktischer, wenn Sie mehrere Felder gleichzeitig ändern.

Scrollen Sie an das Ende der Seite — der Fußnotentext wechselt zwischen Englisch, Polnisch und Deutsch, genau wie im Beispiel mit verschachtelter Form.
