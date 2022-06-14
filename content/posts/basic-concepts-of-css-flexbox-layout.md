---
title: "Basic Concepts of CSS Flexbox Layout"
description: "Basic concepts of CSS Flexbox Layout"
date: 2019-12-16T12:16:09+06:00
author: "Shafikur Rahman Shaon"
tags: [
"css",
]
draft: false
---

The Flex Box Module usually referred to as flexbox, was designed as an one-dimensional layout model.
It make easier to design flexible responsive layout structure without using float or positioning.

> Here is a demo to play around about CSS Flex Box Module: https://shafikshaon.github.io/css-flexbox/

The flex container properties are:

* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content

## flex-direction

The main axis defined by the `flex-direction` property. It defines in which direction the container want to stack the
flex items.

The `flex-direction` has four possible values:

- row
- row-reverse
- column
- column-reverse

**row**: The row value stacks the flex item horizontally but from left to right.

**row-reverse**: The row value stacks the flex item horizontally but from right to left.

**column**: The column value stacks the flex item vertically but from top to bottom.

**column-reverse**: The column value stacks the flex item vertically but from bottom to top.

## flex-wrap

Flex box is one dimensional model. So, it is possible to cause our flex items wrap into multiple lines. We should
consider each line as new flex container.

`flex-wrap` property specifies whether items should wrap or not.
Wrap means cover or enclose (someone or something) in paper or soft material.

**wrap**: The `wrap` value specifies that the flex items will wrap if necessary.

**nowrap**: The `wrap` value specifies that the flex items will not wrap.

**wrap-reverse**: The `wrap` value specifies that the flex items will wrap if necessary but in reverse order.

## flex-flow

`flex-flow` is shortland for both the `flex-direction` and `flex-wrap` properties

for example

```css
.class {
    flex-flow: row wrap;
}
```

## justify-content

The `justify-content` property is used to align the items on the main axis where direction determine by `flex-direction`
.

**flex-start**: `flex-start` value align flex items at the start of the container.

**flex-end**:  `flex-end` value align flex items at the end of the container.

**center**:  `center` value align flex items at the center of the container.

**space-around**:  `space-around` value align flex items with space before, between and after the lines. It causes equal
amount of space on the right and left of each item.

**space-between**: `space-between` value align flex items with space between the lines.

**space-evenly**: `space-evenly`  value align flex items with full-size space on either end.

## align-items

The `align-items` property used for align flex items vertically.

**stretch**: `stretch` value stretch the flex items to fill the container. This is why flex items stretch to the height
of the tallest one by default.

**baseline**: `baseline` value align the flex items by their flex container baselines.

**center**: `center` value align the flex items to center of the container.

**flex-start**: `flex-start` value align the flex items to top of the container.

**flex-end**: `flex-end` value align the flex items to bottom of the container.

## align-content

The `align-content` property used for align flex lines. To demonstrate the `align-content` property set `flex-wrap`
property set to `wrap`.

**stretch**: `stretch` value stretches the flex lines to take up the remaining space.

**center**: `center` value show the flex lines in the center of the container.

**flex-start**: `flex-start` value show the flex lines in the start of the container.

**flex-end**: `flex-end` value show the flex lines in the end of the container.

**space-around**: `space-around` value show flex lines with space before, between and after the lines. It causes equal
amount of space on the right and left of each lines.

**space-between**: `space-between` value align flex lines with equal space between the lines.

Now we know about flex item properties:

**order**: `order` property specify the order of the flex items. The order value must be a number, default value is `0`.

```css
<
div class

=
"flex-container"
>
< div style

=
"order: 3"
>

1
<
/
div >
< div style

=
"order: 2"
>

2
<
/
div >
< div style

=
"order: 4"
>

3
<
/
div >
< div style

=
"order: 1"
>

4
<
/
div >
<

/
div
```

**flex-grow**: `flex-grow` property specifies how much flex item glow (increasing in size) relative to other flex items.
The value must be a number, default value is `0`.
The flex-grow property can be used to distribute space in proportion.

```css
<
div class

=
"flex-container"
>
< div style

=
"flex-grow: 1"
>

1
<
/
div >
< div style

=
"flex-grow: 1"
>

2
<
/
div >
< div style

=
"flex-grow: 8"
>

3
<
/
div >
<

/
div >
```

**flex-shrink**: `flex-shrink` property specifies how much a flex item will shrink relative to other flex items. The
value must be a number, default value is `1`.
Do not let the second flex item shrink as much as the other flex items:

```css
<
div class

=
"flex-container"
>
< div >

1
<
/
div >
< div style

=
"flex-shrink: 0"
>

2
<
/
div >
< div >

3
<
/
div >
<

/
div >
```

**flex-basis**: `flex-basis` values specifies the size of item in terms of space it leaves as available space.
Set the initial length of the second flex item to 20 pixels:

```css
<
div class

=
"flex-container"
>
< div >

1
<
/
div >
< div style

=
"flex-basis: 20px"
>

2
<
/
div >
< div >

3
<
/
div >
<

/
div >
```

**flex**: `flex` property is a shorthand property for the `flex-grow`, `flex-shrink`, and `flex-basis` properties.
Make the first flex item growable (1), shrinkable (1), and with an initial length of 20 pixels:

```css
<
div class

=
"flex-container"
>
< div style

=
"flex: 1 1 20px"
>

1
<
/
div >
< div >

2
<
/
div >
<

/
div >
```

**align-self**: `align-self` property specifies the alignment for selected item inside flex container.
Align the third flex item in the middle of the container:

```css
<
div class

=
"flex-container"
>
< div >

1
<
/
div >
< div >

2
<
/
div >
< div style

=
"align-self: center"
>

3
<
/
div >
< div >

4
<
/
div >
<

/
div >
```

> Here is a demo to play around about CSS Flex Box Module: https://shafikshaon.github.io/css-flexbox/

