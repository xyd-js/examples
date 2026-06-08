---
title: Introduction
description: All per-locale customization in one catalog file.
icon: rocket
---

# Welcome

This example colocates **translations** and **per-locale settings overrides** in the same catalog file. Keys prefixed with `$` are not translation keys — they're settings override paths applied to the matching language entry's `overrides`.

Switch locales and check the banner at the top — both the content text and (for Polish) the icon change per locale, with no `overrides` block declared in `docs.json`.
