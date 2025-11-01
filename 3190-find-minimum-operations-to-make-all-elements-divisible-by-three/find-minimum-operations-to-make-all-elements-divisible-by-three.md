# 3190. Find Minimum Operations to Make All Elements Divisible by Three

<br>

You are given an integer array `nums`.
In one operation, you can **add or subtract 1** from any element of `nums`.

Your task is to return the **minimum number of operations** required to make **all elements divisible by 3**.

<br>

### Example 1:

**Input:**

```
nums = [1,2,3,4]
```

**Output:**

```
3
```

**Explanation:**
All elements can be made divisible by 3 using 3 operations:

* Subtract 1 from `1` → becomes `0`
* Add 1 to `2` → becomes `3`
* Subtract 1 from `4` → becomes `3`

<br>

### Example 2:

**Input:**

```
nums = [3,6,9]
```

**Output:**

```
0
```

**Explanation:**
All elements are already divisible by 3, so no operations are needed.

<br>

### Constraints:

* `1 <= nums.length <= 50`
* `1 <= nums[i] <= 50`