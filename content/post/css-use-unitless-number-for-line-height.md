---
path: use-unitless-number-for-line-height
date: 2022-12-18T22:08:15.475Z
title: "[CSS] Use unitless number for line-height"
---
By default, browsers come with a surprisingly small amount of line height. In Chrome, the default value is `1.15`. In Firefox, it's `1.2`.

These default values produce densely-packed lines of text which can be hard to read for people who are dyslexic or have poor vision. **To comply with accessibility guidelines, our body text should have a minimum line-height of 1.5.** This is according to [Text Spacing guidelines](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html).

It's possible to pass other unit types (eg. pixels, rems), but  always using the unitless number so that the line-height always scales with the element's font-size.

R﻿ef: [CSS for JS Developer](https://css-for-js.dev/)