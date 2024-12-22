---
path: javascript-??=-operator
date: 2024-12-22T11:49:45.885Z
title: JavaScript's ??= Operator
---
### Definition
> The nullish coalescing assignment operator `??=` is relatively new to JavaScript. It was officially added in [ECMAScript 2021 (ES12)](https://262.ecma-international.org/12.0/index.html) as part of the “Logical Assignment Operators” proposal.

The `??=` operator only assigns a new value if the current one is `null` or `undefined`.

```javascript
// Old way (pre-2021)
if (user.name === null || user.name === undefined) {
  user.name = 'Anonymous';
}

// Or using the nullish coalescing operator (??)
user.name = user.name ?? 'Anonymous';

// New way (ES2021 and later)
user.name ??= 'Anonymous';
```

### Edge cases
```javascript
let score = 0;
score ??= 100;    // Keeps 0


let tag = '';
tag ??= 'default'; // Keeps empty string


let active = false;
active ??= true;   // Keeps false
```

### Ref
https://www.trevorlasn.com/blog/javascript-nullish-coalescing-assignment-operator