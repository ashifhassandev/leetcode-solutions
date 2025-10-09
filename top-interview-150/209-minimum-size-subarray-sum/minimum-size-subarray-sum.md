# 209. Minimum Size Subarray Sum

<br>  

Given an array of **positive integers** `nums` and a **positive integer** `target`,
return the **minimal length** of a subarray whose **sum is greater than or equal to** `target`.
If there is **no such subarray**, return `0` instead.

<br>  

Example 1:

Input:

```
target = 7
nums = [2,3,1,2,4,3]
```

Output:

```
2
```

Explanation:
The subarray `[4,3]` has the minimal length under the problem constraint.

<br>  

Example 2:

Input:

```
target = 4
nums = [1,4,4]
```

Output:

```
1
```

<br>  

Example 3:

Input:

```
target = 11
nums = [1,1,1,1,1,1,1,1]
```

Output:

```
0
```

<br>  

Constraints:

* 1 <= `target` <= 10⁹
* 1 <= `nums.length` <= 10⁵
* 1 <= `nums[i]` <= 10⁴

<br>  

Follow-up:
If you have figured out the **O(n)** solution, try coding another solution with **O(n log n)** time complexity.