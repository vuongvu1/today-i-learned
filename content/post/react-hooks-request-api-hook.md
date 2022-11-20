---
path: request-api-hook
date: 2022-03-26T13:16:33.569Z
title: "[Example] Request API hook"
---
This sample hook will send a request to an API:
* Use Fetch API
* Able to abort the request
* Handle result and error data

```jsx
// Hook
import { useState, useEffect } from 'react'

const useUsers = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch('/api/users', { signal })
      .then((response) => response.json())
      .then((usersFromApi) => setUsers(userFromApi))
      .catch((apiError) => setError(apiError))
    return () => controller.abort();
  }, []);
  return [error, users];
}

// Usage
const Users = () => {
  const [error, users] = useUsers();
  if (!users) {
    return <p>Starting request ...</p>;
  }
  if (error) {
    return <p>There has been an error: {error.message}</p>;
  }
  return <p>Received {users.length} users</p>;
}
```