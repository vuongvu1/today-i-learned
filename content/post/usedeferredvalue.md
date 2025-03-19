---
path: use-deferred-value
date: 2025-03-19T07:02:36.458Z
title: useDeferredValue
---
> `useDeferredValue` is a React Hook that helps improve UI responsiveness by deferring the update of a value until after higher-priority updates are completed.

```jsx
import { useState, useDeferredValue } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  // ...
}
```

## How It Works

* If `value` updates frequently (e.g., from user input), `useDeferredValue` returns a slightly delayed version of `value`, allowing React to prioritize more urgent updates first.
* It’s useful when rendering a computationally expensive UI based on an updating value.

## Ref

https://react.dev/reference/react/useDeferredValue