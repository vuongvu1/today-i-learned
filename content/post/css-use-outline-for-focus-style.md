---
path: use-outline-for-focus-style
date: 2023-10-03T20:23:49.494Z
title: "[CSS] Use outline for focus style"
---
T﻿he \`outline\` property is fit for the focus style:

* It always goes around all the sides
* It's not part of the box modal, so it won't affect the position of the element 

It is often used for accessibility reasons, to emphasize a link when tabbed to without affecting positioning and in a different way than hover.

```css
a:focus {
  outline-width: 1px;
  outline-style: dashed;
  outline-color: red;
}
```

### R﻿eference

https://css-tricks.com/almanac/properties/o/outline/