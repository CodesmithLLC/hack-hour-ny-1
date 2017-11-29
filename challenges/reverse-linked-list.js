/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  if (head === null) {
    return head;
  }
  let prev = null;
  let curr = head;
  let temp;
  while (curr != null) {
    temp = curr.next; 
    curr.next = prev;
    prev = curr;
    curr = temp; 
  }
  return prev;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
