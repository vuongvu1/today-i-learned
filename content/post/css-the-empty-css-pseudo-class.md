---
path: css_the_empty_css_pseudo_class
date: 2022-04-30T15:18:00.101Z
title: "[CSS] The :empty CSS pseudo-class"
---
## :empty

The *:empty* CSS pseudo-class represents any element that has no children.

## Usage

This pseudo-class is useful in some cases such as when there's no data is passed to a list:

```jsx
export default function App() {
  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

```css
// style.css

ul:empty::after {
  content: 'No data to show';
  color: red;
}
```

1. When 'data' list is available

![](../assets/screenshot-2022-04-30-at-6.01.39-pm.png)

2. When there's no data

![](../assets/screenshot-2022-04-30-at-6.17.06-pm.png)

## Get no result text from a prop

```jsx
<ul noResultText="blablalblabl bla bal">
  ...
</ul>
```

```css
// style.css

ul:empty::after {
  content: attr(noResultText);
  color: red;
}
```

![](../assets/screenshot-2022-04-30-at-10.37.59-pm.png)

## Reference

https://developer.mozilla.org/en-US/docs/Web/CSS/:empty