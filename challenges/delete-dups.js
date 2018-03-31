/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 * //buffer is the intermediate object to assist your solution
 */

 //Asks sorted 
//always ask if it's a singly linked list or doubly linked list
//
//saves time complex for cache (looped once) and nested looped saves space complex
function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  //Nexted for loops are n factorial
for(let i = head; i ; i = i.next) {
  for(let j = i.next; j; j = j.next) {
    if(i.value === j.value) {
      jLast.next = j.next;
      return head;
      }
    jLast = j;
    };
  };

}


//Brandon's version

function Node (val) {
  this.value = val;
  this.next = null;
}

const myLL = new Node (5);
myLL.next = new Node (3);
myLL.next.next = new Node (6);
myLL.next.next.next = new Node (3);
myLL.next.next.next.next = new Node (5);
myLL.next.next.next.next.next = new Node (2);

function printListVals (head) {
  for (let currNode = head; currNode; currNode = currNode.next) {
    console.log('value:', currNode.value);
  }
}
console.log('This list is -->', printListVals(myLL));

function deleteDups1 (head) {
  // let firstNode = head;
  // let preSecondNode = head.next;

  for (let firstNode = head; firstNode.next; firstNode = firstNode.next) {
    for (let preSecondNode = firstNode; preSecondNode.next; preSecondNode = preSecondNode.next) {
      if (firstNode.value === preSecondNode.next.value) {
        preSecondNode.next = preSecondNode.next.next;
      }
    }
  }

  return head;
}

function deleteDups2 (head) {
  const cache = {}
  cache[head.value] = true;
  
  for (let preNode = head; preNode.next; /* nothing here */) {
    if (cache[preNode.next.value]) {
      preNode.next = preNode.next.next;
    } else {
      cache[preNode.next.value] = true;
      preNode = preNode.next;
    }
  }
  
  return head;
}

// console.log('deleted -->', printListVals(deleteDups1(myLL)));
console.log('deleted -->', printListVals(deleteDups2(myLL)));



module.exports = deleteDups;
