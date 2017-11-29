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
  if (l2 === null) {
    return l1;
  }
  if (l1 === null) {
    return l2;
  }

  currNodel1 = l1;
  currNodel2 = l2;
  tempNode;
  while (currNodel2.next !== null) {
    // store the rest of list
    tempNode = currNodel1.next;
    // set the next val to list 2's node
    currNodel1.next = currNodel2;
    // add rest of list to newly appended node
    currNodel2.next = tempNode;

    currNodel1 = currNodel1.next.next;
    currNodel2 = currNodel2.next;
  }
  return l1;
};

module.exports = {Node: Node, zip: zip};
