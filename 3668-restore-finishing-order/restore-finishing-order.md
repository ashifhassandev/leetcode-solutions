# 3668. Restore Finishing Order

<br>

You are given two integer arrays — `order` and `friends`.

* `order` contains every integer from **1 to n** exactly once, representing the **finishing order** of all participants in a race.
* `friends` contains the **IDs of your friends** in **strictly increasing order**, and each friend’s ID is guaranteed to appear in `order`.

Your task is to **return an array containing your friends' IDs in their finishing order**.

<br>

### Example 1:

**Input:**

```
order = [3,1,2,5,4]
friends = [1,3,4]
```

**Output:**

```
[3,1,4]
```

**Explanation:**
The finishing order of all participants is `[3, 1, 2, 5, 4]`.
Among your friends `[1, 3, 4]`, the order they finish in is `[3, 1, 4]`.

<br>

### Example 2:

**Input:**

```
order = [1,4,5,3,2]
friends = [2,5]
```

**Output:**

```
[5,2]
```

**Explanation:**
The overall finishing order is `[1, 4, 5, 3, 2]`.
Among your friends `[2, 5]`, the order they finish in is `[5, 2]`.

<br>

### Constraints:

* `1 <= n == order.length <= 100`
* `order` contains every integer from `1` to `n` exactly once.
* `1 <= friends.length <= min(8, n)`
* `1 <= friends[i] <= n`
* `friends` is **strictly increasing**.