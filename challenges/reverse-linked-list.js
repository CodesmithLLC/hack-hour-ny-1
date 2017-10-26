//  CS-HackHours-reverseLinkedList

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
  return (head.next) ? reverseLinkedList(head.next).next = head : head;
}


function reverseLinkedList(head, prev) {
  // end condition === last node, flip it with previous and return
  if (head.next == undefined) {
    head.next = prev;
    return head;
  }

  // otherwise, we lazily flip on recursion
  var ret = reverseLinkedList(head.next, head);
  head.next = prev;
  return ret;
}


let aNode = new Node(1);
let bNode = new Node(2);
let cNode = new Node(3);
let dNode = new Node(4);
let eNode = new Node(5);
aNode.next = bNode;
bNode.next = cNode;
cNode.next = dNode;
dNode.next = eNode;


//  verifying falsy
if (eNode.next) {
    console.log("eNode.next === true");
}
else {
    console.log("eNode.next === false");
}

console.log("____________________________________");
console.log("____________________________________");
console.log("____________________________________");

function listAllNodes (head) {
  for (let currentNode = head; currentNode; currentNode = currentNode.next) {
    console.log("lAN currentNode.value === " + currentNode.value);
  }
}

console.log("listAllNodes (aNode) >>>> ");
listAllNodes (aNode)
console.log("listAllNodes (aNode) ]]]] ");

aNode = reverseLinkedList(aNode);

console.log("listAllNodes (aNode) >>>> ");
listAllNodes (aNode)
console.log("listAllNodes (aNode) ]]]] ");



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
