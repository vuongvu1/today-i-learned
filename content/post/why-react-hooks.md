---
path: why-react-hooks
date: 2021-04-11T15:20:49.712Z
title: Why React Hooks?
description: Learn the reason React made Hooks under the hood
---
Hooks are a new addition in **React 16.8**. They let you use state and other React features in a function component.

![](../assets/hooks.png)

## Reuse stateful logic between components

Before v16.8, React doesn't have a way to attach reusable behavior to a component.
You may be familiar with patterns like `render-props` and `higher-order components` that try to solve this, but they require you to restructure your components when using them, which makes it more complicated and harder to follow.

You may hear about a `wrapper hell` of components surrounded by layers of providers, consumers, higher-order components, render props… 

\=> React needs a better strategy for sharing stateful logic.

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among components.

## Reduce component complexity

When using class components, each lifecycle method often contains a mix of unrelated logic. For example, I usually put some data fetching in `componentDidMount`, however, because there is only one method like `componentDidMount`, it may contain other logics that have nothing to do with the fetched data.

\=> Hooks let you split one component into smaller functions based on what pieces are related.

Rather than forcing a split based on lifecycle methods. You may also manage the component’s local state with a reducer to make it more predictable.

## Classes are confusing

In JavaScript classes, `this` keyword works differently with most other languages. You have to remember to bind the event handlers, or using arrow functions.


The distinction between function and class components in React and when to use them is usually argued by developers.


Classes don’t minify very well, compiled class components are usually larger than function ones.


\=> Hooks let you use more of React’s features without classes.

## Reference

https://reactjs.org/docs/hooks-intro.html#motivation