---
path: java-script:-the-call-bind-and-apply-methods
date: 2023-10-16T13:53:30.092Z
title: 'JavaScript: the ".call", ".bind", and ".apply" methods'
---
In JavaScript, `.call`, `.bind`, and `.apply` are methods that are used to manipulate how functions are invoked, especially with respect to the value of the `this` keyword and passing arguments. They are often used to change the context in which a function is executed or to pass arguments to a function in a specific way.

1. Call

```javascript
function greet(name) {
  console.log(`Hello, ${name}! I am ${this.job}.`);
}

const person = {
  job: "developer",
};

greet.call(person, "Alice");
// Hello, Alice! I am developer.
```

2. Apply

The `.apply()` method is similar to `.call`, but it allows you to pass an array-like or array of arguments as the second argument. It takes two arguments:

```javascript
function greet(name, age) {
  console.log(`Hello, ${name}! I am ${age} years old and I am ${this.job}.`);
}

const person = {
  job: "developer",
};

greet.apply(person, ["Alice", 18]);
// Hello, Alice! I am 18 years old and I am developer.
```

3. Bind

The `.bind()` method is used to create a new function with a specific `this` value, without invoking the function immediately.

```javascript
function greet(name) {
  console.log(`Hello, ${name}! I am ${this.job}.`);
}

const person = {
  job: "developer",
};

const boundGreet = greet.bind(person, "Alice");
boundGreet(); // This will log "Hello, Alice! I am developer."

```