---
path: typescript-get-return-type-of-any-function
date: 2022-02-01T22:49:25.441Z
title: "[TypeScript] Get return type of any function"
---
Sometimes it's quite tricky to assign a type to a variable, for example in the case below: the \`interval\` variable have different types based on the environment the app's running (Node or browser) so there's no correct type for this \`interval\` variable.

Using \`ReturnType<typeof ...>\` can resolve it:

```typescript
let interval: ReturnType<typeof setInterval>;

interval = setInterval(...);
```