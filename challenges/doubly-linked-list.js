/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
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
	let h = this;
	if(this.length !== 0 ){

	
	
	//loop through the list
	while(h.next ){ 
		h = h.next;
	}
	//stop at the node that points to null
	//get that node to point the new node
	let newNode = new Node(val)
	// get the new node to point its prev property to the current node
	h.next = newNode;
	newNode.prev = h;
	this.tail = newNode;

	}else{
		let newNode = new Node(val)
	// get the new node to point its prev property to the current node
	h.head = newNode;
	newNode.prev = h;
	h.tail = newNode
	}	
  this.length++;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
	let h = this;
	//get the head of the linked list
	while(h.next ){

		h = h.next;
		//if h.
	}
	//loop through the list until you have reached the target node
	// reassign the previous node to the next node
	//
	//
  this.length--;
};

let linkl = new LinkedList();
let a = new Node(2); 
let b = new Node(4);
let c = new Node(5);
let d = new Node(7);

linkl.add(a)
linkl.add(b)
linkl.add(c)
linkl.add(d)

console.log(linkl);

module.exports = LinkedList;
