---
title: "Python: Generators and Iterators"
description: "Python: Generators and Iterators"
date: 2019-12-16T00:16:09+06:00
author: "Shafikur Rahman Shaon"
tags: [
"python",
]
draft: false
---

# Iterators

Iterator is an object that can iterate (in loop) through object like lists, tuples, dicts, and sets.

Iterate over an object means traverse through the values of these object.   
In python, iterator object implements in iterator protocol, which have `__iter__()` and `__next__()` (`next` in Python
2).

If you want any object to be an iterator. Then you must implement following method.

* `__iter__`: `__iter__` method is called the initializer of an iterator object. It return object that has   
  `__next__` (`next`in Python 2) method.

* `__next__`: `__next__` method return the next value for iterable. For loop implicitly call `next` on iterator
  object.  
  This method should raise a `StopIteration` to signal the end of the iteration.

**iterable** is an object which one iterate over. It generates an iterator when passed to `iter()` method.
**iterator** is an object, which is used to iterate over iterable object using `next` method.

Iterator have `__next__` which return the next value of the iterable object.

```
name_tuple = ('John', 'Doe', 'Marry')
name_iterator = iter(name_tuple)

print(next(name_iterator))
print(next(name_iterator))
print(next(name_iterator))
```

**Output**

```python
John
Doe
Marry
```

We create aiterator type that iterates from `0` to limit. For example, if we set limit 5 then it prints 1, 2, 3, 4, 5.

```python
class CustomIterator:  
    def __init__(self, limit):  
        self.limit = limit  
  
      # called when iteration is initialized  
    def __iter__(self):  
        self.x = 0  
        return self  
  
      # move next value  
    def __next__(self):  
        x = self.x  
        if x > self.limit:  
            raise StopIteration  
        self.x = x + 1  
        return x  
  
  
for i in CustomIterator(5):  
    print(i)
```

**Output**

```
0
1
2
3
4
5
```

```python
myclass = CustomIterator(5)
myitr = iter(myclass)

print(next(myitr))
print(next(myitr))
print(next(myitr))
print(next(myitr))
print(next(myitr))
```

**Output**

```python
0
1
2
3
4
```

Some of built-in iterations: lists, sets, dicts, and tuples.

# Generators

Generator is a simpler way to create iterators. Iterators methods automatically handled by generators in python.

Generator returns an object(iterator) which we can iterate over (one value at a time).

We can create generator by defining a normal function with `yield` statement instead of `return` statement.

`return` statement terminate function entirely, `yeild` statement pause the functional and saving all states and later
continues from there successive calls.

```python
def infinite_seq():
    num  = 0
    while True:
        yield num
        num += 1

x = infinite_seq()
print(x.__next__())
print(x.__next__())
print(x.__next__())
print(x.__next__())
print(x.__next__())
```

**Output**

```
0
1
2
3
4
```

`yeild` statement iterates where a value is sent back to the caller, but unlike `return`, you don't exit function
afterward.

The state of generator function is remembered. When `__next__` object called for generator object, the previously
yielded variable `num` is incremented and then yielded again.

Generator expressions creates an anonymous generator function.

Generator expression as follows

```python
my_list = [1, 2, 3]
>>> (x**2 for x in my_list)
<generator object <genexpr> at 0x03DE6488>
>>>  sum((x**2 for x in my_list))
14
```

### Generator Performance

```python
>>> import sys
>>> num_list = [i**2 for i in range(100000)]
>>> sys.getsizeof(num_list)
412228
>>> num_list = (i**2 for i in range(100000))
>>> print(sys.getsizeof(num_list))
56
```

Generator is useful for reading large files. It's memory efficient.







