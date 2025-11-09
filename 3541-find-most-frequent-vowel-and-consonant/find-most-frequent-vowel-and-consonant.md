# 3541. Find Most Frequent Vowel and Consonant

<br>

You are given a string `s` consisting of lowercase English letters (`'a'` to `'z'`).

Your task is to:

1. Find the **vowel** (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`) with the **maximum frequency**.
2. Find the **consonant** (all other letters except vowels) with the **maximum frequency**.
3. Return the **sum** of these two frequencies.

If there are multiple vowels or consonants with the same maximum frequency, choose **any one**.
If there are **no vowels** or **no consonants**, consider their frequency as `0`.

<br>

### Example 1:

**Input:**

```
s = "successes"
```

**Output:**

```
6
```

**Explanation:**

* **Vowels:** `'u'` → 1, `'e'` → 2 → max = 2
* **Consonants:** `'s'` → 4, `'c'` → 2 → max = 4
* Sum = `2 + 4 = 6`

<br>

### Example 2:

**Input:**

```
s = "aeiaeia"
```

**Output:**

```
3
```

**Explanation:**

* **Vowels:** `'a'` → 3, `'e'` → 2, `'i'` → 2 → max = 3
* **Consonants:** none → max = 0
* Sum = `3 + 0 = 3`

<br>

### Constraints:

* `1 <= s.length <= 100`
* `s` consists only of lowercase English letters