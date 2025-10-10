# 3. Longest Substring Without Repeating Characters

<br>

Given a string `s`, find the length of the **longest substring** without repeating characters.

<br>

### Example 1:

**Input:**

```
s = "abcabcbb"
```

**Output:**

```
3
```

**Explanation:**
The answer is `"abc"`, with the length of **3**.
Note that `"bca"` and `"cab"` are also valid answers.

<br>

### Example 2:

**Input:**

```
s = "bbbbb"
```

**Output:**

```
1
```

**Explanation:**
The answer is `"b"`, with the length of **1**.

<br>

### Example 3:

**Input:**

```
s = "pwwkew"
```

**Output:**

```
3
```

**Explanation:**
The answer is `"wke"`, with the length of **3**.
Note that `"pwke"` is a subsequence, not a substring.

<br>

### Constraints:

* 0 <= `s.length` <= 5 × 10⁴
* `s` consists of English letters, digits, symbols, and spaces.