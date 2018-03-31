/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    let next;
    
    while (curr) {
      //point the next var to the node your curr is linked to
      next = curr.next;
      //point the .next property on the curr node to the node with the prev pointer
      curr.next = prev;
      //now point prev to the same node curr is pointing to (this node will now have two pointers)
      prev = curr;
      //point the curr var to the node with next pointer(this node will now have two pointers)
      curr = next;
    }
    
    head = prev;
    return head;
  }

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
