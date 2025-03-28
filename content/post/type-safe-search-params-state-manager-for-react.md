---
path: type-safe-search-params-state-manager-for-react
date: 2025-03-28T14:27:19.596Z
title: Type-safe search params state manager for React
---
## The tool

**[nuqs](https://nuqs.47ng.com/)** is a query string parser and editor for URLs:

* Analyze URL query parameters – Paste a URL, and it will break down the query string into key-value pairs.
* Edit query parameters – Modify or add parameters without manually editing the URL.
* Generate clean URLs – Remove unnecessary parameters or encode/decode values properly.

## Example

```jsx
"use client";

import { parseAsInteger, useQueryState } from "nuqs";

export function Demo() {
  const [hello, setHello] = useQueryState("hello", { defaultValue: "" });
  const [count, setCount] = useQueryState(
    "count",
    parseAsInteger.withDefault(0),
  );
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
      <input
        value={hello}
        placeholder="Enter your name"
        onChange={(e) => setHello(e.target.value || null)}
      />
      <p>Hello, {hello || "anonymous visitor"}!</p>
    </>
  );
}
```