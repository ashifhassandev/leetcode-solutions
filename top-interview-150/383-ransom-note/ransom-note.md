# 383. Ransom Note

<br>  

Given two strings `ransomNote` and `magazine`, return **true** if `ransomNote` can be constructed by using the letters from `magazine` and **false** otherwise.

Each letter in `magazine` can only be used **once** in `ransomNote`.

<br>  

Example 1:

Input: ransomNote = `"a"`, magazine = `"b"` <br>
Output: `false`

Example 2:

Input: ransomNote = `"aa"`, magazine = `"ab"` <br>
Output: `false`

Example 3:

Input: ransomNote = `"aa"`, magazine = `"aab"` <br>
Output: `true`

<br>  

Constraints:

* 1 <= ransomNote.length, magazine.length <= 10⁵
* `ransomNote` and `magazine` consist of lowercase English letters.