# 2. Add Two Numbers

<br>

You are given **two non-empty linked lists** representing two **non-negative integers**.
The digits are stored in **reverse order**, and **each node contains a single digit**.

Your task is to **add the two numbers** and return the **sum** as a linked list.

You may assume that **neither number contains leading zeros**, except for the number `0` itself.

<br>

### Example 1:

**Input:**

```
l1 = [2,4,3]
l2 = [5,6,4]
```

**Output:**

```
[7,0,8]
```

**Explanation:**
The numbers represent `342` and `465`, and
`342 + 465 = 807`, which becomes `[7,0,8]` in reverse order.

<br>

### Example 2:

**Input:**

```
l1 = [0]
l2 = [0]
```

**Output:**

```
[0]
```

<br>

### Example 3:

**Input:**

```
l1 = [9,9,9,9,9,9,9]
l2 = [9,9,9,9]
```

**Output:**

```
[8,9,9,9,0,0,0,1]
```

<br>

### Constraints:

* The number of nodes in **each** linked list is in the range **[1, 100]**
* `0 <= Node.val <= 9`
* The input lists **do not contain leading zeros**