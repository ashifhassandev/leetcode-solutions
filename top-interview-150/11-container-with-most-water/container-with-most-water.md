# 11. Container With Most Water

<br>  

You are given an integer array `height` of length `n`.
There are `n` vertical lines drawn such that the two endpoints of the `iᵗʰ` line are `(i, 0)` and `(i, height[i])`.

Find **two lines** that together with the x-axis form a container, such that the container contains the **most water**.

Return the **maximum amount of water** a container can store.

⚠️ Note: You may **not slant** the container.

<br>  

Example 1:

Input:

```
height = [1,8,6,2,5,4,8,3,7]
```

Output:

```
49
```

Explanation:
The vertical lines are represented by `[1,8,6,2,5,4,8,3,7]`.
The max area of water (blue section) the container can contain is **49**.

<br>  

Example 2:

Input:

```
height = [1,1]
```

Output:

```
1
```

<br>  

Constraints:

* `n == height.length`
* 2 <= `n` <= 10⁵
* 0 <= `height[i]` <= 10⁴