---
path: caching-with-closures
date: 2023-11-07T14:22:34.188Z
title: Caching with closures
---
Caching with closures can be useful for storing and retrieving values efficiently. Here's an example of a simple caching mechanism using closures in JavaScript:

```javascript
function createCache() {
  const cache = {}; // The cache object to store key-value pairs

  return {
    setValue: function(key, value) {
      cache[key] = value; // Setting the value in the cache
    },
    getValue: function(key) {
      if (cache.hasOwnProperty(key)) {
        return cache[key]; // Retrieving the value from the cache
      }
      return "Value not found in the cache";
    },
    displayCache: function() {
      console.log(cache); // Displaying the entire cache
    }
  };
}

const cache = createCache(); // Create an instance of the cache

cache.setValue('name', 'John'); // Set a value in the cache
cache.setValue('age', 30);

console.log(cache.getValue('name')); // Retrieve a value from the cache
console.log(cache.getValue('age'));
console.log(cache.getValue('city')); // Value not found in the cache

cache.displayCache(); // Display all cached values

```