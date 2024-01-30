---
path: render-different-html-tags-based-on-its-semantic-meaning
date: 2024-01-30T22:20:09.021Z
title: Render different HTML tags based on its semantic meaning
---
In order to build usable, accessible interfaces, it's important that we understand the semantics of different HTML tags. If an element can be clicked to perform an action in JS, it should be a button, unless that action changes the URL, in which case, it should be an anchor (`<a>`).

> When choosing an HTML tag, it's much more important to focus on the *semantics* than the *looks*. You should use a `<button>` even if you don't want it to *look* like a button. With CSS, we can strip away all of those built-in button styles. It's much easier to remove a handful of CSS rules than it is to recreate all of the usability benefits built into the `<button>` tag.

F﻿or example: We're going to build a `LinkButton` component. It's always going to look like a link, but it's going to be flexible in its implementation: it can either render an `<a>` tag, or a `<button>` tag, depending on whether an `href` is supplied:

```jsx
function LinkButton({
  href,
  children,
  ...restProps
}) {
  const Tag = typeof href === 'string'
    ? 'a'
    : 'button';

  return (
    <Tag
      href={href}
      className={styles.button}
      {...restProps}
    >
      {children}
    </Tag>
  );
  // Or:
  // React.createElement(href ? 'a' : 'button', {
  //    className: styles.button,
  // }, children);
}
```

### R﻿eference

https://courses.joshwcomeau.com/joy-of-react/04-component-design/05-polymorphism