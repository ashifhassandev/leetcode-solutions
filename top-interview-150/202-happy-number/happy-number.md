# 202. Happy Number

<br>

Write an algorithm to determine if a number `n` is **happy**.

A **happy number** is defined by the following process:

* Start with any positive integer.
* Replace the number by the **sum of the squares of its digits**.
* Repeat the process until the number equals **1** (where it will stay), or it **loops endlessly** in a cycle that does not include 1.
* Numbers for which this process ends in **1** are called **happy numbers**.

Return **true** if `n` is a happy number, and **false** otherwise.

<br>

### Example 1:

**Input:**

```
n = 19
```

**Output:**

```
true
```

**Explanation:**

```
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
```

<br>

### Example 2:

**Input:**

```
n = 2
```

**Output:**

```
false
```

<br>

### Constraints:

* 1 <= `n` <= 2³¹ - 1