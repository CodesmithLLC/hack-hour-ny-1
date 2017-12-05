/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const node = new Node(val);

  if(!this.head) {
    this.head = node;
    this.tail = node;
  }
  else {
    //Adding to the end;
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(this.head.val === val) {
    this.head.next.prev = null;
    this.head = this.head.next;
    return this.head;
  }
  else {
    let currNode = this.head;
    let nodeExist = true;
    while(nodeExist) {
      if(currNode.val === val) {
          if(!currNode.next) {
            currNode.prev.next = null;
            this.tail = currNode.prev;
            nodeExist = false;
            return this.head
          }
          else {
          currNode.prev.next = currNode.next;
          currNode.next.prev = currNode.prev;
          nodeExist = false;
          return this.head;
          }
      }
      else {
      currNode = currNode.next;
      }
    }
  }
};

module.exports = LinkedList;
