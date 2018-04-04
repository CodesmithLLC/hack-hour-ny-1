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
 * a.next = b;// we are creating the link
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */
 /*
 find the length of the node and then length-k

 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode1(k, head) {
 let len = 0//length can be 1

 // let currNode = ; LET is block scope so we can't use currNode inside for loop. 
 //Block scope means you can't use it outside of the loop.
 let currNode = head;
 //as long as currNode exists because it is an object and that's truthy
 for(; currNode; currNode = currNode.next){//gets to end of the list to get the length
 	len++;
 }
 console.log('The list has',len,'nodes');
 //2nd loop is to loop through the nodesreusing currNode and reset it to the head
 currNode = head;
 for(let i = 0; i<len-k; i++){
 	currNode = currNode.next;
 }
 return currNode.value;
}
//console.log(kthToLastNode1(1,a))//E
//console.log(kthToLastNode1(2,a))//D

	//need to get to the end of the list
	//strategy is to use two pointers: fastNode( finds length) slowNode(identifies value of node you want to return)
	//offset = k-1 . offset fastNode by K *offset is how far they are from each other
	//When k = 1 they aren't offset but when k=2 fastnode is(B)
//THIS ONE WILL HAVE CONSTANT RUN TIME but the FIRST ONE will be slower:
function kthToLastNode2(k, head){
 let slowNode = head;
 let fastNode = head;
 //offset
 for(let i = 0; i<k; i++){
 	fastNode = fastNode.next;
 	//this breaks the offset
 }
 //while fastNode exists
 while(fastNode){
 	fastNode = fastNode.next;
 	slowNode = slowNode.next;
 }
 return slowNode.value;
}
//if k is 5
//console.log(kthToLastNode2(1,a))//E


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
