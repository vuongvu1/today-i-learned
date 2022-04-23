---
path: strip-html-tags-from-markup-and-memoize-it-with-weak-map
date: 2022-04-23T21:35:17.946Z
title: Strip HTML tags from markup and memoize it with weakMap()
---
## Strip HTML tags from markup snippet

We can use the \`renderToStaticMarkup\` from React to get a static markup from a React Element. 

Before using this snippet, we need to check the \`document\` object to see if it exists.

```jsx
import { renderToStaticMarkup } from 'react-dom/server';

const staticMarkup = renderToStaticMarkup(markup);
const div = document.createElement('div');
div.innerHTML = staticMarkup;
textFromMarkup = div.textContent || div.innerText || '';
```

## WeakMap()

> A **`WeakMap`** is a collection of key/value pairs whose keys must be objects, with values of any arbitrary [JavaScript type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#javascript_types), and which does not create strong references to its keys. That is, an object's presence as a key in a `WeakMap` does not prevent the object from being garbage collected.

## Memoize the function

\`weakMap()\` is a good candidate to memoize the result from our snippet cause we can use the markup as key directly.

```jsx
export const stripHTMLTagFromMarkup = (() => {
    const cachedMap = new WeakMap();

    return (markup: ReactElement) => {
        if (cachedMap.has(markup)) {
            return cachedMap.get(markup);
        }

        let textFromMarkup = '';

        if (document) {
            const staticMarkup = renderToStaticMarkup(markup);
            const div = document.createElement('div');
            div.innerHTML = staticMarkup;
            textFromMarkup = div.textContent || div.innerText || '';
        }
        cachedMap.set(markup, textFromMarkup);

        return textFromMarkup;
    };
})();
```



## Reference

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap