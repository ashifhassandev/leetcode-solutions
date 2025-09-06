// Method 1:
const reverseList = (head) => {
  let current = head;
  let prev = null;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
};