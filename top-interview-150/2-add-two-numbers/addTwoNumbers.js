// Method 1:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const reverseList = (list) => {
  let numStr = "";
  let current = list;

  while (current) {
    numStr = current.val + numStr;
    current = current.next;
  }

  return numStr;
};

const addTwoNumbers = (l1, l2) => {
  const list1 = BigInt(reverseList(l1));
  const list2 = BigInt(reverseList(l2));
  const total = list1 + list2;

  const digits = String(total).split("").reverse();
  const list = new ListNode(0);
  let current = list;

  for (let digit of digits) {
    current.next = new ListNode(Number(digit));
    current = current.next;
  }

  return list.next;
};