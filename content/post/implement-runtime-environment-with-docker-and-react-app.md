---
path: implement-runtime-environment-with-docker-and-react-app
date: 2021-03-25T16:07:40.896Z
title: Implement runtime environment variables with Docker and React app
description: There is a way to inject environment variables at runtime for React app
---
![](../assets/docker.png)

# Goal

We want to be able to run our React application as a Docker container that is built once, it runs everywhere by being configurable during runtime.

# Problem

React is a traditional client-side framework, they run in the browser, and there is no such thing as environment variables inside the browser environment.

In a React application, there's a `.env` file that contains environment variables that are used as `process.env` just like we use environment variables inside Node.js. The object `process` does not exist inside the browser environment, it’s Node-specific. During transpiling, the Webpack process replaces all occurrences of `process.env` with a string value that was given. This means it can only be configured during build time.

# Solution

The specific moment when it is still possible to inject environment variables happens when we start our container. Then we can read environment variables from inside the container.

We can write them into a file and it's imported into our application using `<script>` tag inside the head section of `index.html`. So at that moment, we run a bash script which creates JavaScript file with environment variables assigned as properties of the global `window` object. Injected to be globally available within our application the browser way.

# Implement

The `env.sh` is a small bash script that will read `.env` files (production, staging, dev or test) and write them into a file. If you set an environment variable inside the container, its value will be used, otherwise, it will fall back to the default value from `.env` file. It will create a JavaScript file that puts environment variable values as an object which is assigned as a property of `window` object.

```tcsh
#!/bin/bash

# Recreate config file
rm -rf ./env-config.js
touch ./env-config.js

ENV_FILE=".env"

# Add assignment
echo "window._env_ = {" >> ./env-config.js

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '=';
  then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # skip if it's a comment line (#)
  if [ ${varname:0:1} == '#' ]
  then break
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}

  # Append configuration property to JS file
  echo "  $varname: '$value'," >> ./env-config.js
done < $ENV_FILE

echo "};" >> ./env-config.js
```

We need to add the following line to `<head>` element inside `index.html` which then imports the file created by our bash script.

```jsx
<script src="%PUBLIC_URL%/env-config.js"></script>
```

Create a simple helper to get global values, get default from `window._env_` and if value is not presented it will fallback to `process.env`:

```jsx
const getGlobal = (key: string): string => {
  return window._env_?.[key] || process.env[key];
};
```

And use environment variable in our app:

```jsx
<p>{getGlobal("REACT_APP_ENV")}</p>
```

Update build scripts to run `[env.sh](<http://env.sh>)` before start building:

```json
"scripts": {
  "start": "npm run build:env && react-scripts start",
  "build:env": "chmod +x ./env.sh && ./env.sh && cp env-config.js ./public/",
}
```

Update `Dockerfile`:

```dockerfile
FROM node:10 as uiBuilder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install && npm run compile && npm run build:prd

# Handle Nginx
FROM nginx:1.16.0-alpine

# Static build
COPY --from=uiBuilder /app/build /usr/share/nginx/html

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .env

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
```

All the setup is now complete, now we can run our docker image with either production or staging environment:

```dockerfile
# run with Production environment
docker run -p 3000:80 -t --name [your_container_name] [docker_image_id]

# run with Staging environment
docker run -p 3000:80 -t --env-file .env.staging --name [your_container_name] [docker_image_id]
```

## Reference

https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/