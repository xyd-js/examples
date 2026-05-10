---
title: Wprowadzenie
description: Nawigacja oparta tylko na katalogach z odwołaniami do kluczy tłumaczeń.
icon: rocket
---

# Witamy

Ten przykład używa **nawigacji opartej tylko na katalogach**. Struktura paska bocznego jest zdefiniowana raz w `navigation.sidebar` w `docs.json`. Każdy wpis językowy deklaruje tylko język — bez duplikacji paska bocznego dla każdego języka.

Tytuł grupy `"i18n: sidebar.getstarted"` jest rozwiązywany na podstawie katalogu pasującego do języka (`i18n/en.json`, `i18n/pl.json`, `i18n/de.json`) w czasie żądania.
