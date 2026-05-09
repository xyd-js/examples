---
title: Einführung
description: Katalogbasierte Navigation mit Verweisen auf Übersetzungsschlüssel.
icon: rocket
---

# Willkommen

Dieses Beispiel verwendet **katalogbasierte Navigation**. Der Seitenleistenbaum wird einmal unter `navigation.sidebar` in `docs.json` definiert. Jeder Spracheintrag deklariert nur die Sprache — keine Duplizierung der Seitenleiste pro Sprache.

Der Gruppentitel `"i18n: sidebar.getstarted"` wird zur Anforderungszeit über den Katalog der passenden Sprache (`i18n/en.json`, `i18n/pl.json`, `i18n/de.json`) aufgelöst.
