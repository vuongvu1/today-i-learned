---
path: upgrade-dependencies-with-yarn-upgrade-interactive
date: 2021-05-12T16:23:10.311Z
title: Upgrade dependencies with "yarn upgrade-interactive"
description: An easy way to update outdated packages
---
![](data:image/png;base64,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)

This command will display the outdated packages before performing any upgrade, allowing the user to select which packages to upgrade. Yarn will respect the version ranges in `package.json` when determining the version to upgrade to.

`--latest` : This flag tells yarn to ignore the specified version ranges in `package.json` and instead, use the version tagged `latest` in the registry.

![](../assets/upgrade-interactive.png)

### Reference

https://classic.yarnpkg.com/en/docs/cli/upgrade-interactive/