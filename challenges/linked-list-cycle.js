/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  for (let i = list, j = list.next; true; i = i.next, j = j.next.next) {
    if (!j.next) return false;
    if (i === j) return true;
  }
}

// function cycle(list) {
//   //the tortoise/turtle
//   let i = list;
//   //the hare
//   let j = list.next;
//   //as long as j.next exists, there's the possibility of a self-referencing linkedList
//   while (j.next) {
//     //if i is equal to j, we have a self-ref ll, so return true
//     if (i === j) return true;
//     //else set i to it's next value, and j to the next next value
//     i = i.next;
//     j = j.next.next;
//   };
//   //if j.next ever points to a null, we break out of our loop. this indicates a reg ll
//   return false;
// }

module.exports = {Node: Node, hasCycle: hasCycle}
