---
title: "Interesting facts in JavaScript"
description: "Interesting facts in JavaScript"
date: 2019-07-19T01:56:09+06:00
author: "Shafikur Rahman Shaon"
tags: [
"javascript",
]
draft: false
---
There is a great deal of amusing to be had when working in JavaScript. Notwithstanding for engineers that associate with
it day by day, a few pieces of the language stay unexplored. I'm going to feature few things you may not think about
JavaScript.

### NaN is a number

`NaN` (Not a number) is being a number. Also, `NaN` is not equal to itself. Actually `NaN` not equal to anything. The
only way to verify anything is `NaN` or not by `isNaN()`.

```javascript
>
typeof (NaN)
"number"

> NaN === NaN
false
```

### null is an object

`null` is an object. Sound odd! Right? But this is fact.

```javascript
>
typeof (null)
"object"
```

In case, `null` has no value. So, `null` should not instance of `Object`.

```javascript
>
null instanceof Object
false
```

### undefined can be defined

`undefined` is not a reserved keyword in JavaScript. You can assign value to it. It doesn't through any syntax error.
But, you can't assign value anywhere, it return undefined.

```javascript
>
var some_var;
undefined
> some_var == undefined
true
> undefined = 'i am undefined'
```

### 0.1 + 0.2 is not equal to 0.3

In JavaScript , `0.1 +0.2 == 0.3` return false. The fact is, how javascript store float number as binary.

```javascript
>
0.1 + 0.2
0.30000000000000004
> 0.1 + 0.2 == 0.3
false
```

### Math.max() smaller than Math.min()

The fact that `Math.max() > Math.min()` returns `false` sounds wrong, but it actually makes a lot of sense.

```javascript
>
Math.max() > Math.min()
false
```

If no argument pass via `min()` or `max()` then it return follwoing values.

```javascript
>
Math.max()
- Infinity
> Math.min()
Infinity
```

### 018 minus 045 equal to 3

In JavaScript, the prefix  `0`  will convert any number to octal. However,  `8`  is not used in octal, and any number
containing an  `8`  will be silently converted to a regular decimal number.

```javascript
>
01
8 - 045
- 19
```

Therefore,  `018 — 017`  is in fact equivalent to the decimal expression  `18 — 37`, because  `045`  is octal but  `018`
is decimal.

### Functions can  execute itself

Just create a function and immediately call it as we call other functions, with `()` syntax

```javascript
>
(function () {
    console.log('I am self executing');
})();
I
am
self
executing
```

### Parenthesis position matter

The return statement “does not see” that it has something to return so it returns nothing. Actually, JavaScript put `;`
after return.

```javascript
>

function foo() {
    return
    {
        foo: 'bar'
    }
}

>
foo();
undefined

> function foo() {
    return {
        foo: 'bar'
    }
}
> foo();
{
    foo: "bar"
}
```

### Missing parameter default value

In JavaScript, you can set parameter defaul value in the following way.

```javascript
>

function missingParamerCheck(name, age) {
    var name = name || 'John Doe'
    var age = age
    console.log(name)
    console.log(age)
}

>
missingParamerCheck('', 23)
John
Doe
23
> missingParamerCheck('Mike', 18)
Mike
18
```

### Doesn't have integer data type

In JavaScript, there is not `int`(integer) data type. All numbers are `Number` type. Actually it store float value
for `int` number in memory level.

### sort() function automatic type conversion

The `sort()` function automatic convert value to string, that why something weired being happened.

```javascript
>
[1, 5, 20, 10].sort()
(4) [1, 10, 20, 5]
```

But, it can be fix by comparing.

```javascript
>
[1, 5, 20, 10].sort(function (a, b) {
    return a - b
});
(4) [1, 10, 20, 5]
```

### Sum of Arrays and Objects

```javascript
>
!+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![] + !![]
9
> {} + []
0
> [] + {}
"[object Object]"
> [] + []
""
> {} + {}
"[object Object][object Object]"
> {} + [] == [] + {}
true
```

Ideally, you discovered some new information or possibly showed signs of improvement comprehension of what is new with
these JavaScript pearls.
