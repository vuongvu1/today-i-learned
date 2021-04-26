---
path: regex-named-capture-groups
date: 2021-04-26T15:38:19.754Z
title: RegEx Named Capture Groups
description: A useful RegEx technique the get grouped values
---
![](https://aws1.discourse-cdn.com/business6/uploads/dynamobim/original/3X/b/3/b3387b3185e237b8f7dea85d750f33d91b697772.jpeg)

### Without named capture groups

```javascript
const re = /(\d{4})-(\d{2})-(\d{2})/;
const match = re.exec('2021-04-26');

console.log(match[1]); // -> 2021
console.log(match[2]); // -> 04
console.log(match[3]); // -> 26

```

### With named capture groups

```javascript
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = re.exec('2021-04-26');

console.log(match.groups.year);  // -> 2021
console.log(match.groups.month); // -> 04
console.log(match.groups.day);   // -> 26

// with destructuring assignment
const [match, year, month, day] = re.exec('2021-04-26');
```

### Reference

https://2ality.com/2017/05/regexp-named-capture-groups.html#named-capture-groups