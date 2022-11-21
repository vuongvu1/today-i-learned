---
path: usesafedispatch-custom-hook
date: 2022-11-21T23:11:35.205Z
title: useSafeDispatch custom hook
---


T﻿o dispatch a function only when the component is mounted and will be cancelled when unmounted.

```javascript
import * as React from 'react'

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false)

  React.useLayoutEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : undefined),
    [dispatch],
  )
}
```