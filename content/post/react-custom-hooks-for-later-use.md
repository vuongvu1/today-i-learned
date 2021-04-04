---
path: react-custom-hooks-for-later-use
date: 2021-04-02T11:06:05.698Z
title: React custom hooks for later use
description: A place to keep all my custom hooks
---
![](../assets/hooks.png)

# Table

- [useScroll.tsx](#useScroll.tsx)
- [useWindowSize.tsx](#useWindowSize.tsx)
- [useScreen.tsx](#useScreen.tsx)
- [useStateWithSessionStorage.tsx](#useStateWithSessionStorage.tsx)



## useScroll.tsx

Return current user's scroll position and direction 

```tsx
import { useState, useEffect } from "react";

type StateType = {
  lastScrollTop: number;
  bodyOffset: DOMRect;
  scrollY: number;
  scrollX: number;
  scrollDirection: "down" | "up" | "";
};

export const useScroll = () => {
  const [state, setState] = useState<StateType>({
    lastScrollTop: 0,
    bodyOffset: document.body.getBoundingClientRect(),
    scrollY: document.body.getBoundingClientRect().top,
    scrollX: document.body.getBoundingClientRect().left,
    scrollDirection: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setState((prevState) => {
        const prevLastScrollTop = prevState.lastScrollTop;
        const bodyOffset = document.body.getBoundingClientRect();

        return {
          bodyOffset,
          scrollY: -bodyOffset.top,
          scrollX: bodyOffset.left,
          scrollDirection: prevLastScrollTop > -bodyOffset.top ? "up" : "down",
          lastScrollTop: -bodyOffset.top,
        };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
  };
};

export default useScroll;
```

## useWindowSize.tsx

Return current user's browser window size.

```tsx
import { useState, useEffect } from "react";

type WindowSizeType = {
  width: number;
  height: number;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
```

## useScreen.tsx

An extension of \`useWindowSize()\` hook, this one returns which screen size user is in.

```tsx
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import useWindowSize from "./useWindowSize";

type ScreenType = {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
};

const parseSize = (breakpoint: string): number => {
  return parseInt(breakpoint.replace("px", ""));
};

const useScreen = () => {
  const theme = useTheme();
  const { width } = useWindowSize();
  const [screen, setScreen] = useState<ScreenType>({
    isSmall: false,
    isMedium: false,
    isLarge: false,
  });

  useEffect(() => {
    if (width < parseSize(theme.breakpoint.sm)) {
      setScreen({
        isSmall: true,
        isMedium: false,
        isLarge: false,
      });
    } else if (width < parseSize(theme.breakpoint.md)) {
      setScreen({
        isSmall: false,
        isMedium: true,
        isLarge: false,
      });
    } else {
      setScreen({
        isSmall: false,
        isMedium: false,
        isLarge: true,
      });
    }
  }, [width, theme]);

  return screen;
};

export default useScreen;
```

## useStateWithSessionStorage.tsx

Use state to get and set Session Storage values. 

```tsx
const useStateWithSessionStorage = (sessionStorageKey: string) => {
  const [value, setValue] = useState<string>(
    sessionStorage.getItem(sessionStorageKey) || ""
  );

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, value);
  }, [value, sessionStorageKey]);

  return [value, setValue] as const;
};

export default useStateWithSessionStorage;
```

## ...Continue