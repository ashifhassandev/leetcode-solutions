# 1920. Build Array from Permutation

<br>

You are given a **zero-based permutation** array `nums` (0-indexed).
Your task is to build an array `ans` of the **same length**, where:

```
ans[i] = nums[nums[i]]
```

for every `0 <= i < nums.length`.

A zero-based permutation means `nums` contains **all distinct integers** from `0` to `nums.length - 1`.

Return the array `ans`.

<br>

### Example 1:

**Input:**

```
nums = [0,2,1,5,3,4]
```

**Output:**

```
[0,1,2,4,5,3]
```

**Explanation:**
The array `ans` becomes:

```
[
  nums[nums[0]],  // nums[0] → 0
  nums[nums[1]],  // nums[2] → 1
  nums[nums[2]],  // nums[1] → 2
  nums[nums[3]],  // nums[5] → 4
  nums[nums[4]],  // nums[3] → 5
  nums[nums[5]]   // nums[4] → 3
]
```

<br>

### Example 2:

**Input:**

```
nums = [5,0,1,2,3,4]
```

**Output:**

```
[4,5,0,1,2,3]
```

<br>

### Constraints:

* `1 <= nums.length <= 1000`
* `0 <= nums[i] < nums.length`
* All values of `nums` are **distinct**

<br>

---

Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?