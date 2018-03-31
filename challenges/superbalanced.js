/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function superbalanced(tree) {

	//create a counter right
	let counterRight = 0;
	//create a counter left
	let counterLeft = 0;
	//recurse all the way left

	//each time you dive into a another height increment  counter by one
	//return the counter value for the left side
	//recurse all the way right
	counterLeft=this.recurseLeft(counterLeft, this.left);
	//each time you dive into a another height increment  counter by one
	//return the counter value for the right side
	counterRight=this.recurseRight(counterRight, this.right);
	//subtract both counters
	//if the difference is  greater than 1 then return false
	if( Math.abs( counterRight - counterLeft  ) > 1)return false;
	//otherwise return true.
	//superbalanced(  )

	return true;
}

BinaryTree.prototype.add=function (value)  {
		// body...

	//check if the value is less than this.value
	//25 < 40
	if( value < this.value ){
			//if so then check if this.left === null
			// 30 === null?
			//console.log("this", this, "value: ", value)
			if( this.left === null ){
				//console.log("-->> value: ",value," < this.value -->> this.left === null: ", this.left)
				//console.log("value ",value)
				this.left = new BinaryTree(value);
				//console.log("-->> value < this.value -->> this.left === null: ", this.left)
				return;
			}
				//if so then add new bst( value ) to this.left 
				//return
			
	//if not then check if this.right ==== null
	}else{
			if( this.right === null ){
				this.right = new BinaryTree(value);
				return;
			}
			//if so then add new bst( value ) to this.right
			//return
		
		}	


			if(value < this.value ){
				//console.log( "inside value < this.left ", this.left )
		 return this.recurseLeft(value, this.left);
		}
		else{
		return 	this.recurseRight(value, this.right);
		}
		//if so the recurse to the left
		//if not recurse to the right
	//in any of the both cases we should reach a point that finds this.left === null or 
	  // this.right==== null. then we can add value to this.left or this.right


}

BinaryTree.prototype.recurseRight = function(value, rightNode ) {

	
	if( value > rightNode.value ){
	if( rightNode.right == null ){rightNode.right=new BinaryTree(value) ;return rightNode.right;}
	this.recurseRight( value, rightNode.right );
	}else{
	return this.recurseLeft( value, rightNode);
	}


};

BinaryTree.prototype.recurseLeft = function(value, leftNode) {
	
	if( value < leftNode.value ){
	if( leftNode.left == null ){leftNode.left=new BinaryTree(value) ;return leftNode.left;}
	this.recurseLeft( value, leftNode.left);
	}else{
	return this.recurseRight( value, leftNode );
	}

}



BinaryTree.prototype.findRight = function(counterRight, rightNode ) {

	
	if( value > rightNode.value ){
	if( rightNode.right == null ){return counterRight++;}
	this.findRight( value, rightNode.right );
	}else{
	return this.findLeft( value, rightNode);
	}


};

BinaryTree.prototype.findLeft = function(counterLeft, leftNode) {
	
	if( value < leftNode.value ){
	if( leftNode.left == null ){return counterLeft++;}
	this.findLeft( value, leftNode.left);
	}else{
	return this.findRight( value, leftNode );
	}

}
let bt = new BinaryTree(10);
bt.add(9);
bt.add(12);
bt.add(7);
bt.add(13);
bt.add(6);
bt.add(14);
bt.add(5);
bt.add(8);
bt.add(11);
bt.add(15);

console.log(bt);

//module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
