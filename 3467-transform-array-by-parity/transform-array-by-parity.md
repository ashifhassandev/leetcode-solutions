# 3467. Transform Array by Parity

<br>

You are given an integer array `nums`.
You must **transform** `nums` by performing the following operations **in order**:

1. Replace each **even number** with `0`.
2. Replace each **odd number** with `1`.
3. **Sort** the modified array in **non-decreasing order**.

Return the resulting array after these transformations.

<br>

### Example 1:

**Input:**

```
nums = [4,3,2,1]
```

**Output:**

```
[0,0,1,1]
```

**Explanation:**

* Replace even numbers (4, 2) with 0 and odd numbers (3, 1) with 1 → `[0, 1, 0, 1]`.
* After sorting → `[0, 0, 1, 1]`.

<br>

### Example 2:

**Input:**

```
nums = [1,5,1,4,2]
```

**Output:**

```
[0,0,1,1,1]
```

**Explanation:**

* Replace even numbers (4, 2) with 0 and odd numbers (1, 5, 1) with 1 → `[1, 1, 1, 0, 0]`.
* After sorting → `[0, 0, 1, 1, 1]`.

<br>

### Constraints:

* `1 <= nums.length <= 100`
* `1 <= nums[i] <= 1000`