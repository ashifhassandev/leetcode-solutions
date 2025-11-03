# 3701. Compute Alternating Sum

<br>

You are given an integer array `nums`.

The **alternating sum** of `nums` is calculated by **adding elements at even indices** and **subtracting elements at odd indices**.
In other words:

```
nums[0] - nums[1] + nums[2] - nums[3] + ...
```

Return an integer representing the alternating sum of `nums`.

<br>

### Example 1:

**Input:**

```
nums = [1,3,5,7]
```

**Output:**

```
-4
```

**Explanation:**

* Even indices → `nums[0] = 1`, `nums[2] = 5`
* Odd indices → `nums[1] = 3`, `nums[3] = 7`

Alternating sum = `1 - 3 + 5 - 7 = -4`

<br>

### Example 2:

**Input:**

```
nums = [100]
```

**Output:**

```
100
```

**Explanation:**

* Even index → `nums[0] = 100`
* No odd indices present.

Alternating sum = `100`

<br>

### Constraints:

* `1 <= nums.length <= 100`
* `1 <= nums[i] <= 100`