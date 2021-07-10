---
path: javascript-string-prototype-split-with-limit-parameter
date: 2021-07-10T03:50:28.314Z
title: 'JavaScript String.prototype.split() with "limit" parameter '
description: Specify a limit on the number of substrings
---
## Definition

A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

* The array may contain fewer entries than `limit` if the end of the string is reached before the limit is reached.
* If `limit` is 0, \[] is returned.

## Syntax

```javascript
split(separator)
split(separator, limit)
```

## Example

```javascript
const str = "today is a good day right?";

str.split(" "); // ["today", "is", "a", "good", "day", "right?"]
str.split(" ", 4); // ["today", "is", "a", "good"]
```

## Reference

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split