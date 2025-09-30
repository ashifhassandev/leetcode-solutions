# 219. Contains Duplicate II

<br>  

Given an integer array `nums` and an integer `k`,
return **true** if there are two distinct indices `i` and `j` in the array such that:

* `nums[i] == nums[j]`, and
* `abs(i - j) <= k`.

<br>  

Example 1:

Input:

```
nums = [1,2,3,1], k = 3
```

Output:

```
true
```

<br>  

Example 2:

Input:

```
nums = [1,0,1,1], k = 1
```

Output:

```
true
```

<br>  

Example 3:

Input:

```
nums = [1,2,3,1,2,3], k = 2
```

Output:

```
false
```

<br>  

Constraints:

* 1 <= `nums.length` <= 10⁵
* -10⁹ <= `nums[i]` <= 10⁹
* 0 <= `k` <= 10⁵