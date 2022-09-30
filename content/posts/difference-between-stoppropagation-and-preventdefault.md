---
title: "Difference Between stopPropagation and preventDefault?"
description: "stopPropagation prevents further propagation of the current event in the capturing and bubbling phases.
preventDefault prevents the default action the browser makes on that event."
date: 2021-03-23T09:29:09+06:00
author: "Shafikur Rahman Shaon"
tags: [
"javascript",
]
draft: false
---

To know the difference between stopPropagation and preventDefault, we need to know about `Event`.

What is an `event`?


> The Event interface represents an event that takes place in the DOM tree to arrives at its target.



Event propagation has two phases:

**Capturing:** The browser checks to see if the element's outer-most ancestor `<html>` has an onclick event handler
registered on it in the capturing phase, and runs it if so.

Then it moves on to the next element inside `<html>` and does the same thing, then the next one, and so on until it
reaches the element that was actually clicked on.

> The event starts from the `window` object down until it reaches the `event.target`.




**Bubling:** It's the opposite of the *capturing* phase. The browser checks to see if the element that was actually
clicked on has an `onclick` event handler registered on it in the bubbling phase, and runs it if so.

Then it moves on to the next immediate ancestor element and does the same thing, then the next one, and so on until it
reaches the <html> element.

> The event bubbles up from the `event.target` element up until it reaches the `window` object.



![event capturing and bubling](https://raw.githubusercontent.com/shafikshaon/learning-stack/master/images/event-propagation-illustration.png)

## preventDefault

The Event interface's **`preventDefault()`** method tells the `user agent`  that if the event does not get explicitly
handled, its default action should not be taken as it normally would be.

The `event.preventDefault()` method prevents the default behavior of an element. For example, it
prevents `<a href="/some-link/">Some link</a>` elelment navigating.

### Blocking default click handling

Toggling a checkbox is the default action of clicking on a checkbox. This example demonstrates how to prevent that from
happening:

```js
document.querySelector("#id-checkbox").addEventListener("click", function (event) {
    document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
}, false);
```

```html
<p>Please click on the checkbox control.</p>

<form>
    <label for="id-checkbox">Checkbox:</label>
    <input type="checkbox" id="id-checkbox"/>
</form>

<div id="output-box"></div>
```

If you click on the checkbox, then you will show something like this

```
Sorry!  preventDefault()  won't let you check this!
```

## stopPropagation

The **`stopPropagation()`** method of the `Event` interface prevents further propagation of the current event in the
capturing and bubbling phases.

By default, all event handlers are registered in the bubbling phase. So if you click on an HTML element, the click event
bubbles from the clicked element outwards to the `<html>` element.

So, we need to use `stopPropagation` which makes it so that the first handler is run but the event doesn't bubble any
further up the chain, so no more handlers will be run.

```js
$("#but").click(function (event) {
    event.stopPropagation()
})
// since propagation was stopped by the #but id element's click, this alert will never be seen!
$("#foo").click(function () {
    alert("parent click event fired!")
})
```

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="foo">
    <button id="but">button</button>
</div>
```

For IE9 and FF you can just use preventDefault & stopPropagation.

To support IE8 and lower replace  `stopPropagation`  with  `cancelBubble`  and replace  `preventDefault`
with  `returnValue`


> Keep learning!


References:

1. [https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
2. [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
3. [https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault](https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault)
