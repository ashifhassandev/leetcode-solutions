# 2667. Create Hello World Function

<br>  

Write a function `createHelloWorld`.
It should return a **new function** that always returns `"Hello World"`.

The returned function may be called with **any arguments**, but it must **always** return `"Hello World"`.

<br>  

Example 1:

Input: `args = []` <br>
Output: `"Hello World"` <br>
Explanation:

```javascript
const f = createHelloWorld();
f(); // "Hello World"
```

Example 2:

Input: `args = [{}, null, 42]` <br>
Output: `"Hello World"` <br>
Explanation:

```javascript
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
```

Any arguments could be passed to the function but it should still always return `"Hello World"`.

<br>  

Constraints:

* 0 <= args.length <= 10