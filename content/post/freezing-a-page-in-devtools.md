---
path: freezing-a-page-in-devtools
date: 2024-08-26T16:08:55.431Z
title: Freezing a page in DevTools
---
In DevTools, open the Console tool, enter `setTimeout(() => {debugger}, 3000)`, and press Enter.     

After the timeout, JavaScript execution will pause, and the element that appears on focus should stay visible.

This is useful for debugging components like Tooltip, Dropdown... which only visible via `:hover` or `:focus`.

Ref: https://patrickbrosset.com/articles/2023-11-22-freezing-a-page-in-devtools/