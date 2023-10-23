---
path: simple-theming-approach
date: 2023-10-23T22:17:36.747Z
title: Simple theming approach with CSS variables
---
```css
:root {
  --color-text: black;
  --color-background: white;
  
  [data-theme="dark"] {
    --color-text: white;
    --color-background: black;
  }
}


body {
  color: var(--color-text);
  background-color: var(--color-background);
}
```

```html
<body data-theme="dark">
  Hello traveller.
</body>
```

## R﻿esult

![](../assets/screenshot-2023-10-24-at-12.20.33-am.png)

![](../assets/screenshot-2023-10-24-at-12.20.20-am.png)