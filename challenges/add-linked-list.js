/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let a = l1;
  let b = l2;
  let sum;
  let carry = 0;
  while (a || b) {
    if (!a) {
      if (sum) sum.next = new Node(b.value);
      else sum = new Node(b.value);
      b = b.next;
    }
    if (!b) {
      if (sum) sum.next = new Node(a.value);
      else sum = new Node(a.value);
      a = a.next;
    }
    if (a && b) {
      const plainSum = a.value + b.value + carry;
      carry = 0;
      if (plainSum > 9) carry = Math.floor(plainSum / 10 % 10);
      else {
        if (sum) sum.next = new Node(plainSum);
        else sum = new Node(plainSum);
      }
      a = a.next;
      b = b.next;
    }
  }
  if (carry) sum.next = new Node(carry);
  return sum;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
