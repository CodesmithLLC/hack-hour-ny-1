/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
// let len = 0;
// let currNode = head;
//if currNode is truthy, under the condition of the code block, assign currNode to currNode.next
//Objects evaluate to truthy
//First loop is for checking the length of the of the Linked List
// for(; currNode;currNode = currNode.next) {
//   len += 1;
// }
// console.log('The list has', len, 'nodes');


// currNode = head;
// for(let i = 0; i < len -k; i++) {
//   currNode = currNode.next;
// }

// return currNode.value;

let slowNode = head;
let fastNode = head;
// if k is more than len, it becomes null, but if it's e.g 2, it's just 2 ahead of the slowNode that starts at 0;
for(let i = 0; i < k; i += 1) {
  fastNode = fastNode.next;
}
//If fastNode is not null (exceeding the length), it both nodes will start at their respective positons,
//fastNode being k ahead of slowNode;
while(fastNode) {
  fastNode = fastNode.next;
  slowNode = slowNode.next;
}
return slowNode.value;
};





module.exports = {Node: Node, kthToLastNode: kthToLastNode};
