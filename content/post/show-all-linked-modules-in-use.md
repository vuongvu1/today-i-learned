---
path: show-all-linked-modules-in-use
date: 2022-10-22T20:20:49.990Z
title: Show all linked modules in use
---


```
find node_modules node_modules/\@* -depth 1 -type l -print | while read MODULE ; do
    echo "Linked module in use: $MODULE"
done
```

ref: https://github.com/yarnpkg/yarn/issues/1722#issuecomment-349003538