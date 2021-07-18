---
path: nullish-coalescing-operator
date: 2021-07-18T15:11:16.460Z
title: Nullish coalescing operator (??)
description: A logical operator that returns its right-hand side operand when
  its left-hand side operand is null or undefined, and otherwise returns its
  left-hand side operand
---
![](https://www.computerhope.com/jargon/j/javascript.png)

The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is *null* or *undefined*, and otherwise returns its left-hand side operand.

This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only *null* or *undefined*.

In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0).

## Examples

```javascript
const nullValue = null;
const undefinedValue = undefined;
const emptyText = "";
const numberZero = 0;

nullValue || "default"; // "default"
undefinedValue || "default"; // "default"
emptyText || "default"; // "default"
numberZero || 99; // 99

nullValue ?? "default"; // "default"
undefinedValue ?? "default"; // "default"
emptyText ?? "default"; // "" (as the empty string is not null or undefined)
numberZero ?? 99; // 0
```

## Reference

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator