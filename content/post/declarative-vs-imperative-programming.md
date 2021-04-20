---
path: declarative-vs-imperative-programming
date: 2021-04-18T16:05:05.148Z
title: Declarative vs Imperative Programming
description: Differentiate 2 programming concepts in React
---
![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUb6FCtv2uqBS2JPhGBcZM985KtYQN-Bccw&usqp=CAU)

## What are they?

According to Wikipedia:

> **[Declarative programming](<* https://en.wikipedia.org/wiki/Declarative_programming>)** is a programming paradigm … that expresses the logic of a computation without describing its control flow.
>
> **[Imperative programming](<* https://en.wikipedia.org/wiki/Imperative_programming>)** is a programming paradigm that uses statements that change a program’s state.

In an easier-to-understand way:

Declarative Programming is like asking a food store owner to make you a cup of noodles. You don’t care how he does it, that’s up to him.

Imperative Programming is like asking the owner to make you a cup of noodles with the flavor you desired. You give him instructions to make a perfect cup for you.

## Example

Here we just have a button that changes its color on click.

1. Imperative 

   ```javascript
   const container = document.getElementById("container");
   const btn = document.createElement("button");
   btn.className = "btn red";
   btn.onclick = function (event) {
     if (this.classList.contains("red")) {
       this.classList.remove("red");
       this.classList.add("blue");
     } else {
       this.classList.remove("blue");
       this.classList.add("red");
     }
   };
   container.appendChild(btn);
   ```
2. Declarative

   ```jsx
   class Button extends React.Component {
     this.state = { color: 'red' }

     handleChange = () => {
       const color = this.state.color === 'red' ? 'blue' : 'red';
       this.setState({ color });
     }

     render() {
       return (
         <div>
           <button
             className={`btn ${this.state.color}`}
             onClick={this.handleChange}
           ></button>
         </div>
       );
     }
   }
   ```

In both code snippets above, there's the same logic that says if red then blue, but the React example never touches an element, it tells the element should be rendered with the current state and doesn't actually manipulate the DOM.

**When writing React, it’s often good not to think of how you want to accomplish a result, but instead what the component should look like in its new state.** This sets us up for a good control flow where the state goes through a series of predictable and replicable mutations.

## Notes

* Avoid using Refs, sometimes it's necessary, but React team does not [recommend it](https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs).
* Don't manipulate the DOM directly.
* Communicating between siblings through props and use pure functional components (stateless) when possible.

## Reference

https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2