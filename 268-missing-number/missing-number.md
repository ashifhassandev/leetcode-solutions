# 268. Missing Number

<br>

You are given an array `nums` containing **n distinct numbers** in the range **[0, n]**.
Your task is to **return the one number missing** from this range.

<br>

### Example 1:

**Input:**

```
nums = [3,0,1]
```

**Output:**

```
2
```

**Explanation:**
Since `n = 3`, the full range should be `[0,3]`.
The number `2` is missing from the array.

<br>

### Example 2:

**Input:**

```
nums = [0,1]
```

**Output:**

```
2
```

**Explanation:**
Since `n = 2`, the full range should be `[0,2]`.
The number `2` is missing.

<br>

### Example 3:

**Input:**

```
nums = [9,6,4,2,3,5,7,0,1]
```

**Output:**

```
8
```

**Explanation:**
Since `n = 9`, the expected range is `[0,9]`.
The number `8` does not appear in the array.

<br>

### Constraints:

* `n == nums.length`
* `1 <= n <= 10⁴`
* `0 <= nums[i] <= n`
* All numbers in `nums` are **unique**

<br>

### Follow-up:

Can you solve it in **O(n)** time and **O(1)** extra space?