---
path: "async-vs-defer-attributes "
date: 2023-10-13T10:27:59.744Z
title: "async vs defer attributes "
---
![](../assets/async-vs-defer-twitter.png)

# Plain script

The HTML file will be parsed until the script file is hit, at that point parsing will stop and a request will be made to fetch the file. The script will then be executed before parsing is resumed.

# Async

`async` downloads the file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading.

# Defer

`defer` downloads the file during HTML parsing and will only execute it after the parser has completed. `defer` scripts are also guaranteed to execute in the order that they appear in the document.

### Reference

https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html