---
title: Introduction
---

# Sidebar-declared controls + same-URL swap

Open **Logs** and switch the version above the TOC: the URL **pathname never
changes** — a configurable query param (`?runtime=bun`) selects which
markdown source renders, so sharing the link opens that variant directly.

The control lives on the SIDEBAR page entry (not frontmatter), which also
makes it the single place to maintain the variant list.
