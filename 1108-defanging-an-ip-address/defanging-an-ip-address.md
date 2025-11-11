# 1108. Defanging an IP Address

<br>

You are given a valid **IPv4 address** `address`.

Your task is to return a **defanged version** of the IP address.

A **defanged IP address** replaces every period `"."` with `"[.]"`.

<br>

### Example 1:

**Input:**

```
address = "1.1.1.1"
```

**Output:**

```
"1[.]1[.]1[.]1"
```

<br>

### Example 2:

**Input:**

```
address = "255.100.50.0"
```

**Output:**

```
"255[.]100[.]50[.]0"
```

<br>

### Constraints:

* The given `address` is a valid **IPv4 address**.