---
path: leveraging-keys
date: 2024-06-10T21:47:40.405Z
title: Leveraging Keys
---
In React, you usually see a `key` used as a string or a number that uniquely identifies an item among other items in an array.

> Keys tell React which array item each component corresponds to, so it can match them up later. This becomes important if your array items can move (e.g., due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened and make the correct updates to the DOM tree.

However, keys can also be used to **trigger a rerender of a component on purpose.**

Recently, I built a music player with beautiful dynamic backgrounds: [Late Night Vibes](https://late-night-vibes.vuongvu.xyz/).

There are several backgrounds, and I intend to change the background every time users switch to a new radio station. The `Background` component already has an inner function to choose a random background, but whenever a new station is chosen, there should be a signal to tell the `Background` to rerender. I could add a state and try to update it whenever a new `activeChannel` prop is passed down with a `useEffect`. However, this approach creates a lot of boilerplate code. Instead, I can leverage the default `key` prop to achieve the same result.

```jsx
<Background key={activeChannel} />
```

This way, we tell the `Background` to rerender whenever the `activeChannel` state changes.

![](../assets/late-night-vibes.gif)

### R﻿eferences

* https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
* https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/01-leveraging-keys