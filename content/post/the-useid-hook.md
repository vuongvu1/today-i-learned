---
path: the-useid-hook
date: 2023-12-10T22:51:42.532Z
title: The `useId` hook
---
React promotes component reusability, but some web platform features, like globally unique **id** attributes, make it harder. To address this, developers can use the **useId** hook provided by the React team. Instead of manually assigning unique ids, this hook automatically generates them for each component instance. For example:

```javascript
function LoginForm() {
  const id = React.useId();
  
  const usernameId = `${id}-username`;
  const passwordId = `${id}-password`;
  
  return (
    <form className="login-form">
      <div>
        {/* Apply these IDs to the label and input */}
        <label htmlFor={usernameId}>
          Username:
        </label>
        <input
          type="text"
          id={usernameId}
        />
      </div>
      <div>
        <label htmlFor={passwordId}>
          Password:
        </label>
        <input
          type="password"
          id={passwordId}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
```

This ensures that each instance of the component receives a distinct id, promoting reusability without the risk of violating the unique id requirement.

### Reference

https://courses.joshwcomeau.com/joy-of-react/03-hooks/01-use-id