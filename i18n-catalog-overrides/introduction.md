---
title: Introduction
description: All per-locale customization in one catalog file.
icon: rocket
---

# Welcome

This example colocates **translations** and **per-locale settings overrides** in the same catalog file. Keys prefixed with `$` are not translation keys — they're settings override paths applied to the matching language entry's `overrides`.

Scroll to the footer and switch locales — both the link text and the URL change per locale, with no `overrides` block declared in `docs.json`.
