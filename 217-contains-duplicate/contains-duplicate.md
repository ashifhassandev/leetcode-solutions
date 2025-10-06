# 217. Contains Duplicate

<br>  

Given an integer array `nums`, return **true** if any value appears **at least twice** in the array,
and return **false** if every element is **distinct**.

<br>  

Example 1:

Input:

```
nums = [1,2,3,1]
```

Output:

```
true
```

Explanation:
The element `1` occurs at the indices `0` and `3`.

<br>  

Example 2:

Input:

```
nums = [1,2,3,4]
```

Output:

```
false
```

Explanation:
All elements are distinct.

<br>  

Example 3:

Input:

```
nums = [1,1,1,3,3,4,3,2,4,2]
```

Output:

```
true
```

<br>  

Constraints:

* 1 <= `nums.length` <= 10⁵
* -10⁹ <= `nums[i]` <= 10⁹