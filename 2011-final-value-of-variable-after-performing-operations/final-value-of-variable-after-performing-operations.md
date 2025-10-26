# 2011. Final Value of Variable After Performing Operations

<br>

You are given an array of strings `operations`, where each string represents one of the four possible actions on a variable `X`:

* `"++X"` → increment `X` by `1`
* `"X++"` → increment `X` by `1`
* `"--X"` → decrement `X` by `1`
* `"X--"` → decrement `X` by `1`

Initially, the value of `X` is **`0`**.
Your task is to return the **final value of `X`** after performing all operations in order.

<br>

### Example 1:

**Input:**

```
operations = ["--X","X++","X++"]
```

**Output:**

```
1
```

<br>

### Example 2:

**Input:**

```
operations = ["++X","++X","X++"]
```

**Output:**

```
3
```

<br>

### Example 3:

**Input:**

```
operations = ["X++","++X","--X","X--"]
```

**Output:**

```
0
```

<br>

### Constraints:

* `1 <= operations.length <= 100`
* `operations[i]` is one of: `"++X"`, `"X++"`, `"--X"`, `"X--"`