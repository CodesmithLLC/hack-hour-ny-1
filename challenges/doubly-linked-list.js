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
        //The value is the tail
          if(!currNode.next) {
            currNode.prev.next = null;
            this.tail = currNode.prev;
            nodeExist = false;
            return this.head
          }
          else {
          //Somewhere in between
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

//Mark's version 
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
  //create new node
  const node = new Node(val);
  
  //check if theres no head
  if(!this.head){
    //if so set head and tail to new node
    this.head = this.tail = node;
  } else{
    //set tail.next to our node, set node.prev to tail, set to our node
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  };
};
/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  //check if the val === head.val 
  if(this.head.val === val){
    //set head to head.next
    this.head = this.head.next;
    //set head.prev to null
    this.head.prev = null;
  } else {
  //use a while to iterate through ll
    let currNode = this.head;
    while(currNode){
      //if we have a match
      if(currNode.val === val){
      //check to see if currNode === tail
          if(currNode === this.tail){
          //if so tail to tail.prev
            this.tail = this.tail.prev;
          //tail.next to null
            this.tail.next = null
          } else {
            //else currNode.prev.next = currNode.next
            currNode.prev.next = currNode.next;
            //currNode.next.prev = currNode.prev
            currNode.next.prev = currNode.prev;
        };
      };
      currNode = currNode.next;
    };
  };
};

module.exports = LinkedList;
