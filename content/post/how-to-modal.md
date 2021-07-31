---
path: how-to-modal
date: 2021-07-31T15:04:10.754Z
title: How to Modal
description: This is a guide I picked up recently
---
![](../assets/modal-1.png)

This guide will help you build a modal properly.

This was shared in WeBuild - a popular dev community in Vietnam.

## Focus trap

![](../assets/modal-2.png)

The focus trap should follow the figure's order.

## Accessible dismissal

![](../assets/modal-3.png)

Clicking on the modal background (which should usually cover the whole page) or pressing Escape should close the modal.

### Guard against accidental dismissal

![](../assets/modal-4.png)

When the form is filled, require explicit cancelation or submission to prevent users losing progress or forgetting to submit.

## Sticky header & footer

![](../assets/modal-5.png)

In long modal, make the header and the footer sticky so that users can see the control buttons without scrolling.

## Filterable lists

![](../assets/modal-6.png)

* Make long lists filterable
* Should have a button to clear the filter
* Set min-height to prevent layout shift when filtering