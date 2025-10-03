# 189. Rotate Array

<br>  

Given an integer array `nums`, **rotate the array to the right by `k` steps**, where `k` is non-negative.

<br>  

Example 1:

Input:

```
nums = [1,2,3,4,5,6,7], k = 3
```

Output:

```
[5,6,7,1,2,3,4]
```

Explanation:

* Rotate 1 step to the right: `[7,1,2,3,4,5,6]`
* Rotate 2 steps to the right: `[6,7,1,2,3,4,5]`
* Rotate 3 steps to the right: `[5,6,7,1,2,3,4]`

<br>  

Example 2:

Input:

```
nums = [-1,-100,3,99], k = 2
```

Output:

```
[3,99,-1,-100]
```

Explanation:

* Rotate 1 step to the right: `[99,-1,-100,3]`
* Rotate 2 steps to the right: `[3,99,-1,-100]`

<br>  

Constraints:

* 1 <= `nums.length` <= 10⁵
* -2³¹ <= `nums[i]` <= 2³¹ - 1
* 0 <= `k` <= 10⁵

<br>  

Follow-up:

* Try to come up with as many solutions as you can.
* There are at least **three different ways** to solve this problem.
* Can you do it **in-place with O(1) extra space**?