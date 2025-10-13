# 71. Simplify Path

<br>

You are given an **absolute path** for a **Unix-style file system**, which always begins with a slash `'/'`.
Your task is to transform this absolute path into its **simplified canonical path**.

<br>

### Rules of a Unix-style file system:

* A single period `'.'` represents the **current directory**.
* A double period `'..'` represents the **previous (parent) directory**.
* Multiple consecutive slashes such as `'//'` or `'///'` are treated as a **single slash '/'**.
* Any sequence of periods that does **not** match the above rules (like `'...'` or `'....'`) is treated as a **valid directory or file name**.

<br>

### The simplified canonical path should follow these rules:

1. The path must start with a **single slash '/'**.
2. Directories must be separated by **exactly one slash '/'**.
3. The path must **not end** with a slash `'/'`, unless it is the root directory.
4. The path must **not contain** `'.'` or `'..'` to denote current or parent directories.

Return the **simplified canonical path**.

<br>

### Example 1:

**Input:**

```
path = "/home/"
```

**Output:**

```
"/home"
```

**Explanation:**
The trailing slash should be removed.

<br>

### Example 2:

**Input:**

```
path = "/home//foo/"
```

**Output:**

```
"/home/foo"
```

**Explanation:**
Multiple consecutive slashes are replaced by a single one.

<br>

### Example 3:

**Input:**

```
path = "/home/user/Documents/../Pictures"
```

**Output:**

```
"/home/user/Pictures"
```

**Explanation:**
A double period `'..'` refers to the parent directory.

<br>

### Example 4:

**Input:**

```
path = "/../"
```

**Output:**

```
"/"
```

**Explanation:**
Going one level up from the root directory is not possible.

<br>

### Example 5:

**Input:**

```
path = "/.../a/../b/c/../d/./"
```

**Output:**

```
"/.../b/d"
```

**Explanation:**
`"..."` is a valid directory name in this problem.

<br>

### Constraints:

* 1 <= `path.length` <= 3000
* `path` consists of English letters, digits, period `'.'`, slash `'/'`, or underscore `'_'`.
* `path` is a **valid absolute Unix path**.