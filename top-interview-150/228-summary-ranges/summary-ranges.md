# 228. Summary Ranges

<br>

You are given a **sorted unique integer array** `nums`.

A **range [a, b]** represents all integers from `a` to `b` (inclusive).

Return the **smallest sorted list of ranges** that cover all the numbers in the array exactly.
Each element of `nums` should be covered by **exactly one range**, and there should be **no gaps** or **extra integers**.

Each range `[a, b]` should be output as:

* `"a->b"` if `a != b`
* `"a"` if `a == b`

<br>

### Example 1:

**Input:**

```
nums = [0,1,2,4,5,7]
```

**Output:**

```
["0->2","4->5","7"]
```

**Explanation:**
The ranges are:

* [0,2] → `"0->2"`
* [4,5] → `"4->5"`
* [7,7] → `"7"`

<br>

### Example 2:

**Input:**

```
nums = [0,2,3,4,6,8,9]
```

**Output:**

```
["0","2->4","6","8->9"]
```

**Explanation:**
The ranges are:

* [0,0] → `"0"`
* [2,4] → `"2->4"`
* [6,6] → `"6"`
* [8,9] → `"8->9"`

<br>

### Constraints:

* 0 <= `nums.length` <= 20
* -2³¹ <= `nums[i]` <= 2³¹ - 1
* All values of `nums` are **unique**.
* `nums` is **sorted in ascending order**.