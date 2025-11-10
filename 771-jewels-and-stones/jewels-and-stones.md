# 771. Jewels and Stones

<br>

You are given two strings — `jewels` and `stones`.

* `jewels` represents the types of stones that are **jewels**.
* `stones` represents the stones you **have**.

Each character in `stones` is a type of stone you possess.
You need to determine **how many of your stones are also jewels**.

> Letters are **case-sensitive**, so `"a"` is different from `"A"`.

<br>

### Example 1:

**Input:**

```
jewels = "aA"
stones = "aAAbbbb"
```

**Output:**

```
3
```

**Explanation:**

You have three stones that are jewels: `'a'`, `'A'`, and `'A'`.

<br>

### Example 2:

**Input:**

```
jewels = "z"
stones = "ZZ"
```

**Output:**

```
0
```

**Explanation:**

None of the stones match the jewel type `'z'`.

<br>

### Constraints:

* `1 <= jewels.length, stones.length <= 50`
* `jewels` and `stones` consist of only English letters.
* All characters in `jewels` are **unique**.