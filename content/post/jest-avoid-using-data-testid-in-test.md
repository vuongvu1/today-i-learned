---
path: avoid-using-data-testid-in-test
date: 2022-03-30T18:28:13.289Z
title: "[Jest] Avoid using data-testid in test"
---
### Why?

When writing tests using Jest, your test should resemble how users interact with your code (component, page, etc.) as much as possible.

With that in mind, using `data-testid` and `getByTestId` opposes the idea because user cannot see or hear the interaction, so this is always the last resource.

Some recommendation: `getByRole`, `getByText`, `getByLabelText` and `getByPlaceholderText`.

### Reference

https://testing-library.com/docs/queries/about/#priority