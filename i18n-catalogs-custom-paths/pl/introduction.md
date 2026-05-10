---
title: Wprowadzenie
description: Nawigacja oparta tylko na katalogach z niestandardowymi ścieżkami plików.
icon: rocket
---

# Witamy

Taka sama konfiguracja jak w `../i18n-catalogs` — nawigacja oparta tylko na katalogach z odwołaniami `"i18n: <key>"` — ale katalog każdego języka znajduje się pod **niestandardową ścieżką** zadeklarowaną w `i18n.catalogs`:

```json
"i18n": {
  "catalogs": {
    "en": "./locales/english.json",
    "pl": "./tlumaczenia/polski.json",
    "de": "./uebersetzungen/deutsch.json"
  }
}
```

Użyj tego rozwiązania, gdy nie chcesz stosować konwencji `i18n/<locale>.json` — na przykład gdy ponownie wykorzystujesz istniejące pliki tłumaczeń lub organizujesz katalogi w innym folderze.
