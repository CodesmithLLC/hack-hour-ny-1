/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  //check our base cases (l1 and l2 are null?)
  if(!l1) return l2;
  if(!l2) return l1;
  //create a new node with the value at l1
  const node = new Node(l1.value);
  //set the next value of that node to a recursive call to zip
  node.next = zip(l2,l1.next);
  
  return node;
};

module.exports = {Node: Node, zip: zip};
