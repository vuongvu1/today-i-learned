---
path: one-function-for-all-javascript-package-managers
date: 2023-10-01T21:18:56.220Z
title: One function for all JavaScript package managers
---
```shell
p() {
  if [[ -f bun.lockb ]]; then
    command bun "$@"
  elif [[ -f pnpm-lock.yaml ]]; then
    command pnpm "$@"
  elif [[ -f yarn.lock ]]; then
    command yarn "$@"
  elif [[ -f package-lock.json ]]; then
    command npm "$@"
  else
    command pnpm "$@"
  fi
}

alias ps="p start"
alias pt="p test"
alias pb="p build"
alias pd="p dev"
alias pi="p install"
```