# 141. Linked List Cycle

<br>

Given the head of a linked list, determine if the linked list **contains a cycle**.

A **cycle** occurs if there exists a node in the list that can be reached again by continuously following the `next` pointer.
Internally, `pos` is used to indicate the index of the node where the tail connects.
Note that `pos` is **not passed as a parameter**.

Return **true** if there is a cycle in the linked list, and **false** otherwise.

<br>

### Example 1:

**Input:**

```
head = [3,2,0,-4], pos = 1
```

**Output:**

```
true
```

**Explanation:**
There is a cycle in the linked list where the tail connects to the **1st node** (0-indexed).

<br>

### Example 2:

**Input:**

```
head = [1,2], pos = 0
```

**Output:**

```
true
```

**Explanation:**
There is a cycle in the linked list where the tail connects to the **0th node**.

<br>

### Example 3:

**Input:**

```
head = [1], pos = -1
```

**Output:**

```
false
```

**Explanation:**
There is **no cycle** in the linked list.

<br>

### Constraints:

* The number of nodes in the list is in the range **[0, 10⁴]**
* -10⁵ <= `Node.val` <= 10⁵
* `pos` is **-1** or a **valid index** in the linked list

<br>

### Follow-up:

Can you solve it using **O(1)** (constant) memory?