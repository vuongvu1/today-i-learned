---
path: detect-pointing-device-with-media-queries
date: 2023-10-15T10:53:52.465Z
title: Detect pointing device with media queries
---
# pointer

The **`pointer`** CSS media feature tests whether the user has a pointing device (such as a mouse), and if so, how accurate the *primary* pointing device is.

```css
  @media (pointer: coarse) {
    min-height: 48px;
  }
```



# Syntax

The `pointer` feature is specified as a keyword value chosen from the list below.

* `none`

  The primary input mechanism does not include a pointing device.
* `coarse`

  The primary input mechanism includes a pointing device of limited accuracy, such as a finger on a touchscreen.
* `fine`

  The primary input mechanism includes an accurate pointing device, such as a mouse.



### Reference

https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer