---
path: implement-memoization-in-javascript
date: 2021-06-19T16:31:52.680Z
title: Implement Memoization in JavaScript
description: Programs often waste time calling functions which recalculate the
  same results over and over again. Memoization helps to resolve this problem.
---
![](https://www.interviewcake.com/images/svgs/fibonacci__binary_tree_memoized.svg?bust=209)

## Problem

Programs often waste time calling functions that recalculate the same results over and over again.
Let's see an example with this recursive Fibonacci number generator:

```javascript
function fibonacci(n) {
  if (n === 0 || n === 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

This function will work well when the value "n" is small, but soon the performance will decrease because the two recursive calls repeat the same work over and over.

## Resolve

To fix this, we will implement a higher-order function that returns a function. When the function is returned, its closure allows it to continue to access the “memo” object, which stores all of its previous results.

```javascript
const cachedFibonacci = (function() {
  const memo = {};

  return function func(n) {
    if (n in memo) {
      return memo[n];
    }
    if (n === 0 || n === 1)
      return n;
    else {
      memo[n] = func(n - 1) + func(n - 2);
      return memo[n];
    }
  }
})();

cachedFibonacci(50)
```

## Implement memoize function

This is a higher-order function that has a function as an argument and returns a memoized function.

```javascript
function memoize(func) {
  const memo = {};

  return function(n) {
    if (n in memo)
      return memo[n];
    else {
      memo[n] = func(n);
      return memo[n];
    }

  }
}

const heavyFunc = () => { ... }; // function with heavy calculation

const memoized = memoize(heavyFunc);
```

## Memoize function with more than one arguments

With more than one args, we just need to create a unique key in our memo table with all of the args, one way to do this is using `join` function.

```javascript
function memoize(func) {
  const memo = {};

  return function(...args) {
    const key = args.join('_');

    if (key in memo)
      return memo[key];
    else {
      memo[key] = func(...args);
      return memo[key];
    }
  }
}
```

## Memoize function with object arguments

Similar to the previous example, this time we will create a unique key with all of the arguments, for object argument we will stringify the object.

```javascript
function memoize(func) {
  const memo = {};

  return function(...args) {
    const key = args
      .map(e => typeof e === 'object' ? JSON.stringify(e) : e)
      .join('_');

    if (key in memo)
      return memo[key];
    else {
      memo[key] = func(...args);
      return memo[key];
    }
  }
}
```

## Reference

https://www.sitepoint.com/implementing-memoization-in-javascript/