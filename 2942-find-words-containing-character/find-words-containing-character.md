# 2942. Find Words Containing Character

<br>

You are given a **0-indexed array of strings** `words` and a **character** `x`.

Your task is to return an **array of indices** representing the words that **contain** the character `x`.

The returned array can be in **any order**.

<br>

### Example 1:

**Input:**

```
words = ["leet","code"], x = "e"
```

**Output:**

```
[0,1]
```

**Explanation:**
The character `"e"` appears in both `"leet"` and `"code"`,
so the indices `[0, 1]` are returned.

<br>

### Example 2:

**Input:**

```
words = ["abc","bcd","aaaa","cbc"], x = "a"
```

**Output:**

```
[0,2]
```

**Explanation:**
The character `"a"` occurs in `"abc"` and `"aaaa"`,
so the indices `[0, 2]` are returned.

<br>

### Example 3:

**Input:**

```
words = ["abc","bcd","aaaa","cbc"], x = "z"
```

**Output:**

```
[]
```

**Explanation:**
The character `"z"` does not appear in any of the words,
so an empty array is returned.

<br>

### Constraints:

* `1 <= words.length <= 50`
* `1 <= words[i].length <= 50`
* `x` is a lowercase English letter.
* Each `words[i]` consists only of lowercase English letters.