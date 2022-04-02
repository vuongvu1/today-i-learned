---
path: memoization-with-react-memo
date: 2022-04-02T09:52:47.184Z
title: Memoization with React.memo
---
`Memoization` is a technique that let expensive function return a cached value if all arguments of the function are unchanged.

React users can wrap their components inside a `React.memo` to apply memoization to its render result, passing the same props will not cause the component to be re-rendered.

Let take a look at this component: We create a sample App with a Header component that always takes the same string as title, with a counter and update button:

```jsx
const Header = ({ title }) => {
  return <div>{title}</div>;
};

const App = () => {
  const [count, setCount] = React.useState(0);

  const update = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <Header title="title unchanged" />
      <button onClick={update}>{count}</button>
    </div>
  );
};
```

Every time user click on the button, the Header always re-renders even if the title string is never change.

To keep the Header component memoized, we can use `React.memo`.

```jsx
const MemoizedHeader = React.memo(Header);
```
Now even when the `count` state's updated, the `MemoizedHeader` will not re-render.
By default, `React.memo` only do a shallow comparison on the props, this means, if one of your props is an object, the memoization will not working.

```jsx
const Header = ({ data: { title } }) => {
  return <div>{title}</div>;
};

const MemoizedHeader = React.memo(Header);

const App = () => {
  const [count, setCount] = React.useState(0);

  const update = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <MemoizedHeader data={{ title: 'title unchanged' }} />
      <button onClick={update}>{count}</button>
    </div>
  );
};
```
Clicking the count button will always result in a re-render. In this case, we can provide `React.memo` a custom comparison function.

```jsx
const compare = (prevProps, currentProps) => {
  return prevProps.data.title === currentProps.data.title;
};

const MemoizedHeader = React.memo(Header, compare);
```

Now, memoization will work again.

It’s a best practice to only use `React.memo` on complex components or components that do not require an update when props change.