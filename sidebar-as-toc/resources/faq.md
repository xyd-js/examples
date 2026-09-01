---
title: FAQ
---

# FAQ

## How do I make a sidebar group act as a table of contents?

Add `"asToc": true` to the group in `docs.json`. Its pages stop being routes —
their content is injected into the enclosing route's index page and the
sidebar items scroll to the matching section.

## Can I mix asToc and normal groups?

Yes — this example does exactly that: two `asToc` groups compose the overview
page, while Resources keeps normal navigation.
