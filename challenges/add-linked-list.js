/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;

}

class ll {
	constructor(vale){
	this.next = null;
	this.head = null;
	this.length = 0;
	}

add(value) {
	if(this.head){
     
	  let currentNode = this.head;
	  for (let i = 1; i < this.length; i += 1) {
	    currentNode = currentNode.next;
	  }
	  
	  //   Either way, after getting the currentNode === the "tail", we then add the new Node
	  currentNode.next = new Node(value);
	  console.log( currentNode );
	}
	else {
	  this.head = new Node(value);
	  console.log( this.head );
	}
	//this.head= "javi";
	this.length += 1;
 }
}


function addLinkedList(l1, l2) {


	if(this.head){
     
	  let currentNode = this.head;
	  for (let i = 1; i < this.length; i += 1) {
	    currentNode = currentNode.next;
	  }
	  
	  //   Either way, after getting the currentNode === the "tail", we then add the new Node
	  currentNode.next = new Node(value);
	  console.log( currentNode );
	}
	else {
	  this.head = new Node(value);
	  console.log( this.head );
	}
	//this.head= "javi";
	this.length += 1;


}




let l1 = new ll();
l1.add(2);
l1.add(1);
l1.add(5);


let l2 = new ll();
l2.add(5);
l2.add(9);
l2.add(2);


 // Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
console.log(  l1, l2 );

module.exports = {Node: Node, addLinkedList: addLinkedList};
