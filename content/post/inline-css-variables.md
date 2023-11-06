---
path: inline-css-variables
date: 2023-11-06T20:12:33.186Z
title: Inline CSS Variables
---
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), commonly known as CSS variables, offer a way to create custom properties within CSS for more flexible styling.

Suppose we wish to set a custom color for a button. This CSS code can be employed:

```css
// css
.custom-button {
  /* Other styles omitted... */
  --background-color: #bfdbfe;
  background: var(--background-color);
}

// html
<button class='custom-button'>Click Me!</button>
```

This setup generates the default button appearance.

To modify the custom property using [inline styles](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style), you can adjust it like this:

```html
<button class='custom-button' style="--background-color: lightgreen">Click Me!</button>
```

This feature proves immensely useful in various scenarios. For instance, a grid component may require defining the number of columns and rows using CSS variables:

```html
<div class="grid" style="--columns: 4; --rows: 8">...</div>
```

By applying these inline CSS variables, the styling and layout can be dynamically adjusted as needed.