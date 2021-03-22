---
path: testing-library-for-hooks
date: 2021-03-22T15:56:43.842Z
title: Testing library for Hooks
description: There's a library which can test your custom React Hooks
---
https://github.com/testing-library/react-hooks-testing-library

Example:

```jsx
// useCounter.js

import { useState, useCallback } from 'react'

function useCounter() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => setCount((x) => x + 1), [])

  return { count, increment }
}

export default useCounter
```

```jsx
// useCounter.test.js

import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from './useCounter'

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})
```