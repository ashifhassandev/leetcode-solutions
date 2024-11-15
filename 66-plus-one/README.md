# 66. Plus One

<br>

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

<br> 

Example 1:

Input: digits = [1,2,3] <br>
Output: [1,2,4] <br>
Explanation: The array represents the integer 123. <br>
Incrementing by one gives 123 + 1 = 124. <br>
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1] <br>
Output: [4,3,2,2] <br>
Explanation: The array represents the integer 4321. <br>
Incrementing by one gives 4321 + 1 = 4322. <br>
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9] <br>
Output: [1,0] <br>
Explanation: The array represents the integer 9. <br>
Incrementing by one gives 9 + 1 = 10. <br>
Thus, the result should be [1,0].

<br>

Constraints:

- 1 <= digits.length <= 100
- 0 <= digits[i] <= 9
- digits does not contain any leading 0's.