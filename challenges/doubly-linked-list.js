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
  let node = new Node(val);
  if(!this.head){
    this.head = node;
    this.tail = node;
  }else{
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(v) {
  if(this.head.val === v){
    this.head.next.prev = null;
    this.head = this.head.next
    return 'it is removed';
  }else{
    currNode = this.head.next
    while(currNode){
      if(currNode.val === v && currNode.next === null){
        currNode.prev.next = null;
        this.tail = currNode.prev;
        return 'you are at the end';
      }else if(currNode.val === v){
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        return true;
      }
      currNode = currNode.next;
    }
  }
};

module.exports = LinkedList;
