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
  console.log("IN kthToLastNode(" + k + ", " + head.constructor.name + ")");
  let sizeLinkedList = 1;
  let currentNode = head;
  
  let blnMoreLL = (currentNode.next !== null);
  while (blnMoreLL) {
    currentNode = currentNode.next;
    sizeLinkedList++;
    // console.log("sizeLinkedList === " + sizeLinkedList);
    if (currentNode.next === null)
      blnMoreLL = false;
  }
  
  currentNode = head;
  blnMoreLL = (currentNode.next !== null);
  let currentIdx = 0;
  let kthValue;
  while (kthValue === undefined && blnMoreLL) {
    currentNode = currentNode.next;
    currentIdx++;
    // console.log("currentIdx === " + currentIdx);
    if (sizeLinkedList - currentIdx === k) {
      kthValue = currentNode.value;
    }
    if (currentNode.next === null)
      blnMoreLL = false;
  }
  return kthValue;
}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// console.log("________________________________________");

// a.next = b;
// console.log("kthToLastNode(2, a) === " + kthToLastNode(2, a));

// console.log("________________________________________");

// b.next = c;
// console.log("kthToLastNode(2, a) === " + kthToLastNode(2, a));

// console.log("________________________________________");

// c.next = d;
// console.log("kthToLastNode(2, a) === " + kthToLastNode(2, a));

// console.log("________________________________________");

// d.next = e;
// console.log("kthToLastNode(2, a) === " + kthToLastNode(2, a));

// console.log("________________________________________");
// console.log("________________________________________");

// console.log("kthToLastNode(3, a) === " + kthToLastNode(3, a));
// console.log("kthToLastNode(4, a) === " + kthToLastNode(4, a));
// console.log("kthToLastNode(5, a) === " + kthToLastNode(5, a));
// console.log("________________________________________");






module.exports = {Node: Node, kthToLastNode: kthToLastNode};
