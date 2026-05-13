---
title: Wprowadzenie
description: i18n z nadpisaniami dla każdego języka — forma płaska z kluczami z kropkami.
icon: rocket
---

# Nadpisania dla języków (płaskie klucze z kropkami)

Taka sama konfiguracja jak w `../i18n-overrides`, ale każdy blok `overrides` używa **płaskiej składni z kluczami z kropkami** zamiast zagnieżdżonych obiektów:

```json
"overrides": {
  "components.banner.content": "**xyd 0.1.0-beta** — już wkrótce"
}
```

`applyOverrides` akceptuje obie formy. Tej składni używaj, gdy zmieniasz pojedynczą głęboką właściwość; forma zagnieżdżona jest wygodniejsza, gdy zmieniasz kilka pól naraz.

Sprawdź baner na górze strony — treść zmienia się między angielskim, polskim i niemieckim, dokładnie jak w przykładzie z formą zagnieżdżoną.
