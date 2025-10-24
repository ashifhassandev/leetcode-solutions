# 1929. Concatenation of Array

<br>

You are given an integer array `nums` of length `n`.
Your task is to create a new array `ans` of length **2n**, where:

* `ans[i] = nums[i]`
* `ans[i + n] = nums[i]` for `0 <= i < n`

In other words, `ans` is simply the **concatenation** of `nums` with itself.

Return the array `ans`.

<br>

### Example 1:

**Input:**

```
nums = [1,2,1]
```

**Output:**

```
[1,2,1,1,2,1]
```

**Explanation:**
The array `ans` is:

```
[nums[0], nums[1], nums[2], nums[0], nums[1], nums[2]]
```

<br>

### Example 2:

**Input:**

```
nums = [1,3,2,1]
```

**Output:**

```
[1,3,2,1,1,3,2,1]
```

<br>

### Constraints:

* `n == nums.length`
* `1 <= n <= 1000`
* `1 <= nums[i] <= 1000`