---
path: random-number-generator-with-web-crypto-api
date: 2022-02-19T12:02:55.170Z
title: Random number generator with Web Crypto API
---
The **`Crypto`** interface allows access to a cryptographically strong random number generator and to cryptographic primitives.

The [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) is accessed through the global [`crypto`](https://developer.mozilla.org/en-US/docs/Web/API/crypto_property "crypto") property, which is a `Crypto` object.

## Crypto.randomUUID()

Return a containing a randomly generated, 36 character long v4 UUID.

```javascript
/* Assuming that self.crypto.randomUUID() is available */

let uuid = self.crypto.randomUUID();
console.log(uuid); // for example "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

### Reference

https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID