---
path: swr-react-hooks-for-data-fetching
date: 2024-01-23T14:22:02.685Z
title: SWR - React Hooks for Data Fetching
---
> The name “SWR” is derived from `stale-while-revalidate`, a HTTP cache invalidation strategy popularized by [HTTP RFC 5861(opens in a new tab)](https://tools.ietf.org/html/rfc5861). SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
>
> With SWR, components will get a stream of data updates **constantly** and **automatically**.\
> And the UI will be always **fast** and **reactive**.


## E﻿xample

```jsx
import useSWR from 'swr'
 
async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  
  return json;
}

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

## R﻿eference

https://swr.vercel.app/