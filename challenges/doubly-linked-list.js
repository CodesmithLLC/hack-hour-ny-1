/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    let curr = new Node(val);
    this.tail.next = curr;
    curr.prev = this.tail;
    this.tail = curr;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.value === val) {
    this.head.next.prev = null;
    this.head.next = this.head;
  } 

  for (let curr = this.head.next; curr; curr = curr.next) {
    if (curr.value === val) {
      if (curr !== this.tail) {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
      } else { // it is a tail
        curr.prev.next = null;
      }
    }
  }
};

module.exports = LinkedList;
