---
path: use-form-controls-in-search
date: 2023-11-12T19:19:05.682Z
title: Use form controls in search
---
![](../assets/search-form.png)

When building a search form, we should wrap our form controls in a `<form>` tag. This way, instead of listening for clicks and keys, we can listen for the *form submit event*.

The form submit event will be called automatically when the user clicks the button, or presses "Enter" whenever the input or button is focused. When that event fires, we'll run our search.

```jsx
<form
  onSubmit={event => {
    event.preventDefault();
    ...
  }}
>
  <input type="text" value={...} onChange={...} />
  <button>Search</button>
</form>
```