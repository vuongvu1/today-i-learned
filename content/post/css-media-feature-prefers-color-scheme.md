---
path: prefers-color-scheme
date: 2023-12-03T16:28:52.424Z
title: "CSS media feature: prefers-color-scheme"
---
> The **`prefers-color-scheme`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) is used to detect if a user has requested light or dark color themes. A user indicates their preference through an operating system setting (e.g. light or dark mode) or a user agent setting.

```css
:root {
  --background-color-light: #ffffff;
  --background-color-dark: #2d2d2d;
  --text-color-light: #333333;
  --text-color-dark: #ffffff;
}

/* Light mode styles */
body {
  background-color: var(--background-color-light);
  color: var(--text-color-light);
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  body {
    background-color: var(--background-color-dark);
    color: var(--text-color-dark);
  }
}
```

### Reference

https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme