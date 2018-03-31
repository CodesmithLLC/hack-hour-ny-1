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

	/*//create a counter
	let count=0;
	//create a tempNode to not change the original node
	 let tempNode = head;
	//C(tempNode);
	//loop through the array and count each element using i
	while( tempNode.next){
		tempNode=tempNode.next;
		count++;
	}
	//once you have reach null exit the loop
	//subtract the intger from the count and store as diff
	//C(count);
	//C(tempNode)
	let diff = count-k;
	//loop through the nodes again and from 0 to  diff
	tempNode = head;
	let j=0;
	while(j < diff){
		tempNode = tempNode.next;
		j++;
	}
	//make the nn = the node at when i has reached < the diff 
	return tempNode.value;
	//return the value of  the nn which is atthe kth to last node
	*/
	
	let dis = 1;
	let fastN = head;
	let slowN = head;
	while( dis < k ){
		fastN = fastN.next;
		dis++; 
	}
	//console.log(fastN);
	//console.log(slowN);
	while( fastN.next ){
	fastN = fastN.next;
	slowN = slowN.next;
	} 
	return slowN.value;

}

  const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
 
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
 
  console.log(kthToLastNode(5, a)); //-> returns 'D' (the value on the second to last node)
 


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
