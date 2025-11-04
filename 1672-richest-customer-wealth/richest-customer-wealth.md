# 1672. Richest Customer Wealth

<br>

You are given an `m x n` integer grid `accounts` where `accounts[i][j]` represents the amount of money the `iᵗʰ` customer has in the `jᵗʰ` bank.

Return the **wealth** that the **richest customer** has.

A customer's wealth is the total money they have in all their bank accounts.
The richest customer is the one with the **maximum wealth**.

<br>

### Example 1:

**Input:**

```
accounts = [[1,2,3],[3,2,1]]
```

**Output:**

```
6
```

**Explanation:**

* 1st customer → `1 + 2 + 3 = 6`
* 2nd customer → `3 + 2 + 1 = 6`

Both customers have a wealth of 6, so the richest wealth is `6`.

<br>

### Example 2:

**Input:**

```
accounts = [[1,5],[7,3],[3,5]]
```

**Output:**

```
10
```

**Explanation:**

* 1st customer → `1 + 5 = 6`
* 2nd customer → `7 + 3 = 10`
* 3rd customer → `3 + 5 = 8`

The 2nd customer is the richest with a wealth of `10`.

<br>

### Example 3:

**Input:**

```
accounts = [[2,8,7],[7,1,3],[1,9,5]]
```

**Output:**

```
17
```

**Explanation:**

* 1st customer → `2 + 8 + 7 = 17`
* 2nd customer → `7 + 1 + 3 = 11`
* 3rd customer → `1 + 9 + 5 = 15`

The 1st customer is the richest with a wealth of `17`.

<br>

### Constraints:

* `m == accounts.length`
* `n == accounts[i].length`
* `1 <= m, n <= 50`
* `1 <= accounts[i][j] <= 100`