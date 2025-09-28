# 2620. Counter

<br>  

Given an integer `n`, return a **counter function**.
This counter function initially returns `n` and then returns **1 more than the previous value** every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

<br>  

Example 1:

Input:

```
n = 10  
["call","call","call"]
```

Output: `[10,11,12]` <br>
Explanation:

* `counter()` → 10 // The first time `counter()` is called, it returns `n`.
* `counter()` → 11 // Returns 1 more than the previous time.
* `counter()` → 12 // Returns 1 more than the previous time.

<br>  

Example 2:

Input:

```
n = -2  
["call","call","call","call","call"]
```

Output: `[-2,-1,0,1,2]` <br>
Explanation:

* `counter()` initially returns `-2`.
* Then increases by 1 after each subsequent call.

<br>  

Constraints:

* -1000 <= `n` <= 1000
* 0 <= `calls.length` <= 1000
* `calls[i] === "call"`