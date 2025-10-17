// Method 1:
const mergeTwoLists = (list1, list2) => {
  const merged = new ListNode(0);
  let current = merged;

  let first = list1;
  let second = list2;

  while (first && second) {
    if (first.val < second.val) {
      current.next = first;
      first = first.next;
    } else {
      current.next = second;
      second = second.next;
    }

    current = current.next;
  }

  current.next = first || second;
  return merged.next;
};