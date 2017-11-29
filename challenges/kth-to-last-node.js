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
  let length = 0;
  for (let i = head; i; i = i.next) {
    length += 1;
  }
  const stopInd = length - k;
  let count = 0;
  let kthNode;
  for (let j = head; j && count !== stopInd+1; j = j.next) {
    if (count++ === stopInd) {
      kthNode = j;
    }
  }
  return kthNode ? kthNode.value : undefined;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

// CAN USE STACK

// ****** Hack Hour Solution 1 ****** // - worst case: n + n
// function kthToLastNode(k, head) {
//   let len = 0;
//   let currNode = head;
//   for (; currNode; currNode = currNode.next) {
//     len++;
//   }
//   currNode = head;
//   for (let i = 0; i < len - k; i++) {
//     currNode = currNode.next
//   }
//   return currNode.value;
// }


// ****** Hack Hour Solution 2 ****** // - worst case: n 
// tortoise and hair aproach - distance between the two is k

// my code w/ their idea
// function kthToLastNode(k, head) {
//   let slow = head;
//   let fast = head;
//   let i = 0;
//   for (; fast;  fast = fast.next) {
//     if (i++ >= k) {
//       slow = slow.next;
//     }
//   }
//   return slow.value;
// }

// their code
// function kthToLastNode(k, head) {
//   let slowNode = head;
//   let fastNode = head;

//   for (let i = 0; i < k; i++) {
//     fastNode = fastNode.next;
//   }

//   while (fastNode) {
//     fastNode = fastNode.next;
//     slowNode = slowNode.next;
//   }

//   return slowNode.next;
// }

