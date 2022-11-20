---
path: sample-usereducer
date: 2022-11-20T18:38:12.242Z
title: Sample useReducer
---
```jsx
import { useReducer } from 'react';

function countReducer(state, action) {
  const { type, step } = action;
  switch (type) {
    case "increment": {
      return {
        ...state,
        count: state.count + step,
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => dispatch({ type: "increment", step });
  return <button onClick={increment}>{count}</button>;
}

```