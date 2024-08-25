---
path: browser-storage
date: 2024-07-31T22:33:07.408Z
title: Types of Browser Storage
---
## Using Browser Storage

* **Cookies**: Store small amounts of data, like session identifiers or small pieces of state. Avoid storing sensitive information unless the cookie is HttpOnly and Secure.
* **Local Storage**: Use for storing non-sensitive data that needs to persist between sessions. Avoid storing sensitive information.
* **Session Storage**: Use for temporary data that only needs to persist for a single session/tab.
* **IndexedDB**: Use for larger and more complex data structures, such as for offline-first applications, large datasets, or when you need to query data efficiently.

## Security Considerations

* Avoid storing sensitive data like passwords or payment information in client-side storage (use secure, server-side storage for that).
* Always consider the impact of data breaches; encrypt data if necessary before storing it in the browser.