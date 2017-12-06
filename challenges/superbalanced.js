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

function height(tree) {
  //basecase - we've reach the bottom of a branch
  if (tree === null) return 0;
  //compares the height of left branch and the right, returns longer of the two
  return 1 + Math.max(height(tree.left), height(tree.right));
}

function superbalanced(tree) {
  //basecase - we've reached the bottom of a branch
  if (tree === null) return true;
  //essentially works to check the heights at every node on our tree. If at any point, the difference between the left and the right are greater than 1, a false will return, and will make the statement below return false, no matter how many true values are returned from the recursive functions. thicc af.
  return Math.abs(height(tree.left) - height(tree.right)) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
}
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
