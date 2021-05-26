---
path: implement-useismounted-hook
date: 2021-05-26T10:27:23.696Z
title: Implement useIsMounted hook
description: A React hook that tells if a component is mounted
---
![](../assets/hooks.png)

We can use this custom hook to detect if a component is mounted or unmounted so that we will know when to stop asynchronous action calls.

### Implement

```tsx
import { useEffect, useRef } from 'react';

export const useIsMounted = (): (() => boolean) => {
  const isMounted = useRef(false);
  
  useEffect(() => {
    isMounted.current = true;
    return function cleanup(): void {
      isMounted.current = false;
    }
  }, []);

  return isMounted;
};

export default useIsMounted;
```

### Usage
We will get the `isMounted` value from the hook, this is a ref so we don't need to put it into the `useEffect` dependency list:
```tsx
export default function App() {
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted.current) {
      // do something
    }
  }, []);

  return (
    <div>Hello</div>
  );
}
```