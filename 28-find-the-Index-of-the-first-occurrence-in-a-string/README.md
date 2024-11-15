# 28. Find the Index of the First Occurrence in a String

<br>

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

<br>

Example 1:

Input: haystack = "sadbutsad", needle = "sad" <br>
Output: 0 <br>
Explanation: "sad" occurs at index 0 and 6. <br>
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto" <br>
Output: -1 <br>
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
<br>

Constraints:

- 1 <= haystack.length, needle.length <= 104
- haystack and needle consist of only lowercase English characters.