---
title: Introduction
description: Catalog-only navigation with translation key references.
icon: rocket
---

# Welcome

This example uses **catalog-only navigation**. The sidebar tree is defined once at `navigation.sidebar` in `docs.json`. Each language entry only declares the locale — no per-locale sidebar duplication.

The group title `"i18n: sidebar.getstarted"` is resolved against the matching locale's catalog (`i18n/en.json`, `i18n/pl.json`, `i18n/de.json`) at request time.
