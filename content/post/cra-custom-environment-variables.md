---
path: cra-custom-environment-variables
date: 2023-04-23T11:38:19.617Z
title: CRA custom environment variables
---
# Adding Custom Environment Variables

**The environment variables are embedded during the build time**. Since Create React App produces a static HTML/CSS/JS bundle, it can’t possibly read them at runtime. To read them at runtime, you would need to load HTML into memory on the server and replace placeholders in runtime. Alternatively, you can rebuild the app on the server anytime you change them.

You must create custom environment variables beginning with `REACT_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid accidentally exposing a private key on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running.

## Usage

```jsx
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
    </div>
  );
}
```

### Reference

https://create-react-app.dev/docs/adding-custom-environment-variables/