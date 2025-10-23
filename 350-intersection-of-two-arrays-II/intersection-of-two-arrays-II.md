# 350. Intersection of Two Arrays II

<br>

You are given two integer arrays, `nums1` and `nums2`.
Return an array containing their **intersection**, where **each element appears as many times as it occurs in both arrays**.
You may return the result in **any order**.

<br>

### Example 1:

**Input:**

```
nums1 = [1,2,2,1]
nums2 = [2,2]
```

**Output:**

```
[2,2]
```

<br>

### Example 2:

**Input:**

```
nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
```

**Output:**

```
[4,9]
```

**Explanation:**
The array `[9,4]` is also considered a valid answer.

<br>

### Constraints:

* `1 <= nums1.length, nums2.length <= 1000`
* `0 <= nums1[i], nums2[i] <= 1000`

<br>

### Follow-up:

* What if the given arrays are already **sorted**? How would you optimize your algorithm?
* What if **nums1 is smaller** than nums2? Which approach would be better?
* What if **nums2 is stored on disk** and you cannot load all elements into memory at once due to limited memory?