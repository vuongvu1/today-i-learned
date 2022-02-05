---
path: css-convert-hex-notation-to-color-with-opacity-rgba-&-rrggbbaa
date: 2022-01-30T10:08:05.466Z
title: "[CSS] Convert #hex notation to color with opacity (#rgba & #rrggbbaa)"
---
## Switching from hex notation to `rgba()`

Most developers like to write their colors in a #hex notation and we can switch from a `#hex` notation to an `rgba()` notation for adding opacity to a color.

Snippet:

```typescript
export const hexToRGB = (hex: string, opacity?: number): string => {
  const h = "0123456789ABCDEF";
  const hexUpperCase = hex.toUpperCase();

  const r = h.indexOf(hexUpperCase[1]) * 16 + h.indexOf(hexUpperCase[2]);
  const g = h.indexOf(hexUpperCase[3]) * 16 + h.indexOf(hexUpperCase[4]);
  const b = h.indexOf(hexUpperCase[5]) * 16 + h.indexOf(hexUpperCase[6]);

  return opacity
    ? `rgba(${r}, ${g}, ${b}, ${opacity})`
    : `rgb(${r}, ${g}, ${b})`;
};
```

## Switching from hex notation to #rrggbbaa

The added **aa** in the hex notation is the *alpha* value which defines the *opacity* of the color. This means that now you will be able to use colors with opacity without switching from hex notation to `rgba()`.

Snippet:

```typescript
const withOpacity = (colorHex: string, opacity: number) => {
  const opacityHex = (opacity + 0x10000).toString(16).slice(-2).toUpperCase();
  return `${colorHex}${opacityHex}`;
};
```

## Reference:

https://hashnode.com/post/understanding-rrggbbaa-color-notation-cisvdr52x088fwt53h1drf6m2