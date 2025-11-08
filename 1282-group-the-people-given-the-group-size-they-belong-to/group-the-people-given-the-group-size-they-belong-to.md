# 1282. Group the People Given the Group Size They Belong To

<br>

There are `n` people, each labeled with a unique ID from `0` to `n - 1`.
They are split into some unknown number of groups.

You are given an integer array `groupSizes`, where `groupSizes[i]` represents the **size of the group** that person `i` belongs to.

Return a list of groups such that each person `i` is in a group of size `groupSizes[i]`.

Each person should appear **in exactly one group**, and every person must be included in some group.
If there are multiple valid answers, return any of them.
It is guaranteed that at least one valid solution exists.

<br>

### Example 1:

**Input:**

```
groupSizes = [3,3,3,3,3,1,3]
```

**Output:**

```
[[5],[0,1,2],[3,4,6]]
```

**Explanation:**

* The first group is `[5]`, and `groupSizes[5] = 1`.
* The second group is `[0,1,2]`, and all have `groupSizes[i] = 3`.
* The third group is `[3,4,6]`, and all have `groupSizes[i] = 3`.

Other possible valid outputs include:
`[[2,1,6],[5],[0,4,3]]` and `[[5],[0,6,2],[4,3,1]]`.

<br>

### Example 2:

**Input:**

```
groupSizes = [2,1,3,3,3,2]
```

**Output:**

```
[[1],[0,5],[2,3,4]]
```

<br>

### Constraints:

* `groupSizes.length == n`
* `1 <= n <= 500`
* `1 <= groupSizes[i] <= n`