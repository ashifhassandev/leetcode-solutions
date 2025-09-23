# 205. Isomorphic Strings

<br>  

Given two strings `s` and `t`, determine if they are **isomorphic**.

Two strings `s` and `t` are isomorphic if the characters in `s` can be **replaced** to get `t`.

All occurrences of a character must be replaced with **another character** while preserving the **order of characters**.
No two characters may map to the **same character**, but a character may map to **itself**.

<br>  

Example 1:

Input: s = `"egg"`, t = `"add"` <br>
Output: `true` <br>
Explanation:
The strings `s` and `t` can be made identical by:

* Mapping `'e'` to `'a'`.
* Mapping `'g'` to `'d'`.

Example 2:

Input: s = `"foo"`, t = `"bar"` <br>
Output: `false` <br>
Explanation:
The strings `s` and `t` cannot be made identical as `'o'` would need to map to both `'a'` and `'r'`.

Example 3:

Input: s = `"paper"`, t = `"title"` <br>
Output: `true`

<br>  

Constraints:

* 1 <= s.length <= 5 × 10⁴
* t.length == s.length
* `s` and `t` consist of any valid ASCII character.