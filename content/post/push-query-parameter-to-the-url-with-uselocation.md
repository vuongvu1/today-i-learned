---
path: push-query-parameter-to-the-url-with-uselocation
date: 2021-03-30T07:23:04.533Z
title: Push query parameter to the URL with `useLocation`
description: A useful react-router hook
---
![](../assets/react-router.png)

A simple way to push query parameter to the URL, check the example below:

## Imports

```jsx
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
```

## Child

```jsx
const Child = () => {
  const { search, pathname } = useLocation();
  const { push } = useHistory();

  // assume you want to add `lang` to query param
  useEffect(() => {
    const query = queryString.parse(search);
    query.lang = "en";

    push({ pathname, search: queryString.stringify(query) });
  }, [search]);

  return <div>Child</div>;
};
```

## Parent

```jsx
const Parent = () => {
  const { search, pathname } = useLocation();

  useEffect(() => {
    const query = queryString.parse(search);
    console.log(query.lang);
  }, [search]);

  return (
    <div>
      <Child />
    </div>
  );
};
```