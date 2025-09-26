# 20. Valid Parentheses

<br>

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is **valid**.

An input string is valid if:

* Open brackets must be closed by the **same type** of brackets.
* Open brackets must be closed in the **correct order**.
* Every close bracket has a corresponding open bracket of the same type.

<br>

Example 1:

Input: `s = "()"` <br>
Output: `true`

Example 2:

Input: `s = "()[]{}"` <br>
Output: `true`

Example 3:

Input: `s = "(]"` <br>
Output: `false`

Example 4:

Input: `s = "([])"` <br>
Output: `true`

Example 5:

Input: `s = "([)]"` <br>
Output: `false`

<br>

Constraints:

* 1 <= s.length <= 10⁴
* `s` consists of parentheses only `'()[]{}'`.