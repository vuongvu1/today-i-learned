---
path: client-side-rendering-vs-server-side-rendering-vs-static-site-generation
date: 2021-04-05T15:27:17.789Z
title: Client-Side Rendering vs Server-Side Rendering vs Static Site Generation
description: Pros and cons of 3 ways a website can be rendered onto the browser
---
## Client-side Rendering (CSR)

The concept of CSR is the browser (client) renders the page dynamically using JavaScript, each route and page content is created and rendered by the browser.

The server takes care of receiving the page requests and sending back the basic HTML and JavaScript, then, the browser will execute the JS to render the content.

### Pros

* It's good for websites that support a lot of user interactions because pages are rendered fast after the initial load.
* It ensures a great user experience because the site doesn’t have to reload every time the user clicks on a new page.

### Cons

* It's not good for SEO because the page content is only loaded on the browser, most search engines (except Google) will not able to crawl and index the site.

## Server-side Rendering (SSR)

The initial request of an SSR application will load the HTML pages, CSS, JavaScript all with their contents fully ready to be rendered. 

All pages in SSR are static, so each page will have its own `html` and not depend on JavaScript to render it.
Next.js is a popular React framework that supports SSR.

### Pros

* Perfect for static sites because the page content is preload from the server, thus, loading time is improved significantly
* Best for SEO, search engines can easily crawl and index SSR sites.

### Cons

* It's not suitable for sites with lots of requests, because, for each request, the server needs to work to respond a new content.
* Reduce the user experience because the full page has to reload with almost every interaction.

## Static Site Generation (SSG)

SSG sites are using templates to create HTML pages to be ready to view at anytime a client requests. Unlike SSR, it creates these pages ahead of time, not on-demand, which speeds up page loading time.

### Pros

* It’s suitable for sites that do not have a lot of frequent content changes like a social media site, a personal site or a blog is the perfect fit for SSG.
* It is very secure since it serves static pages, it doesn’t have a database or a server to be attacked.
* It can be deployed in many platforms like Netlify, Github, and Firebase.

### Cons

* It's not suitable for sites that have frequent content updates because it will have to rebuild the static page every time.
* Build time is generally longer in general, so it’s not good for sites that have many static pages.

## Reference

https://lo-victoria.com/comparing-3-ways-websites-render-onto-browser