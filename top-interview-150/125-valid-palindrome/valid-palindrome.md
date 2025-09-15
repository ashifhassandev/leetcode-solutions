# 125. Valid Palindrome

<br>  

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

<br>  

Example 1:

Input: s = "A man, a plan, a canal: Panama" <br>
Output: true <br>
Explanation: `"amanaplanacanalpanama"` is a palindrome.

Example 2:

Input: s = "race a car" <br>
Output: false <br>
Explanation: `"raceacar"` is not a palindrome.

Example 3:

Input: s = " " <br>
Output: true <br>
Explanation: `s` is an empty string `""` after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

<br>  

Constraints:

* 1 <= s.length <= 2 \* 10⁵
* `s` consists only of printable ASCII characters.