# 14. Longest Common Prefix

<br>  

Write a function to find the **longest common prefix** string amongst an array of strings.

If there is **no common prefix**, return an empty string `""`.

<br>  

Example 1:

Input: strs = \["flower","flow","flight"] <br>
Output: `"fl"`

Example 2:

Input: strs = \["dog","racecar","car"] <br>
Output: `""` <br>
Explanation: There is no common prefix among the input strings.

<br>  

Constraints:

* 1 <= strs.length <= 200
* 0 <= strs\[i].length <= 200
* strs\[i] consists of only lowercase English letters if it is non-empty.