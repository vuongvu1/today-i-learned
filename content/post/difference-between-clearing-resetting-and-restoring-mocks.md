---
path: difference-between-clearing-resetting-and-restoring-mocks
date: 2024-10-26T16:13:15.584Z
title: Difference Between Clearing, Resetting, and Restoring Mocks
---
## Clearing

`.mockClear()` clears the recorded calls to the mock functions.

![](https://res.cloudinary.com/epic-web/image/upload/v1729792893/articles/mock-clear.jpg)

```javascript
const fn = vi.fn()

fn('one')
expect(fn).toHaveBeenCalledTimes(1) // ✅

// Makes the mock function forget about
// any calls that happened before this point.
fn.mockClear()

fn('two')
expect(fn).toHaveBeenCalledTimes(1) // ✅

```

## Resetting

`.mockReset()` clears the recorded calls and removes any mock implementation.

![](https://res.cloudinary.com/epic-web/image/upload/v1729792928/articles/mock-reset.png)

```javascript
// Let's spy on console!
// Calling `vi.spyOn` wraps the global `console.log` function
// in a mock function. Let's also provide a mock implementation
// so console calls in test don't actually print anything.
const spy = vi.spyOn(console, 'log').mockImplementation(() => {})

console.log('you will not see this') // nothing is printed!
expect(console.log).toHaveBeenCalledTimes(1) // ✅

// Makes the mock forget about any calls to it
// and also removes any mock implementation it may have.
spy.mockReset()

console.log('you will see this!') // prints "you will see this"
expect(console.log).toHaveBeenCalledTimes(1) // ✅

```

## Restoring

`.mockRestore()` removes the mock, undoing it altogether.

![](https://res.cloudinary.com/epic-web/image/upload/v1729792978/articles/mock-restore.jpg)

```javascript
const spy = vi.spyOn(console, 'log')

console.log(1)
expect(console.log).toHaveBeenCalledTimes(1) // ✅

// Revert this mock, restoring the original implementation
// of the spied function (console.log).
spy.mockRestore()

expect(console.log).toHaveBeenCalledTimes(0)
// ❌ TypeError: [Function log] is not a spy or a call to a spy!

```

## Reference

https://www.epicweb.dev/the-difference-between-clearing-resetting-and-restoring-mocks?ck_subscriber_id=2932013653