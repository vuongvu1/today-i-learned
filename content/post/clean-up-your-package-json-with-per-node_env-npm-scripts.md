---
path: cleanupyourpackage.jsonwith`per-node-env`npmscripts.
date: 2024-11-25T23:26:16.783Z
title: Clean up your package.json with `per-NODE_ENV` npm scripts.
---
1. Package: [per-env](https://www.npmjs.com/package/per-env)
2. Features

* Defaults `NODE_ENV` to `development`.
* Customize process.env per-environment.
* Clearer, concise scripts.
* No more Bash-scripting in package.json.
* Simplify your workflow.

3. Example

```json
  "scripts": {
    // If NODE_ENV is missing, defaults to "development".
    "build": "per-env",
 
    "build:development": "webpack -d --watch",
    "build:staging": "webpack -p",
    "build:production": "webpack -p",
  }
```