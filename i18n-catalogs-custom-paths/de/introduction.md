---
title: Einführung
description: Katalogbasierte Navigation mit benutzerdefinierten Katalogdateipfaden.
icon: rocket
---

# Willkommen

Dieselbe Konfiguration wie in `../i18n-catalogs` — katalogbasierte Navigation mit `"i18n: <key>"`-Verweisen — aber jeder Sprachkatalog liegt unter einem **benutzerdefinierten Pfad**, deklariert in `i18n.catalogs`:

```json
"i18n": {
  "catalogs": {
    "en": "./locales/english.json",
    "pl": "./tlumaczenia/polski.json",
    "de": "./uebersetzungen/deutsch.json"
  }
}
```

Verwenden Sie dies, wenn Sie der Konvention `i18n/<locale>.json` nicht folgen möchten — z. B. wenn Sie bestehende Übersetzungsdateien wiederverwenden oder Kataloge unter einem anderen Verzeichnis organisieren.
