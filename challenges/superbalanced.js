/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

 // Recursive Approach
 // Superbalanced: The difference between the depths of any two leaf nodes is no greater than one
 // Purpose: Binary search is used to search element in sorted array
function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Check if a tree is height-balanced, get the height of left and right subtrees

function height(tree) {
  //  basecase - we've reach the bottom of a branch
  if (tree === null) return 0;
  //compares the height of left branch and the right, returns longer of the two (finding the longest path)
  return 1 + Math.max(height(tree.left), height(tree.right));
}

function superbalanced(tree) {
  //  basecase - we've reached the bottom of a branch
  if (tree === null) return true;
  /** essentially works to check the heights at every node on our tree. If at any point, the difference between the left and the right are greater than 1, a false will return, and will make the statement below return false, no matter how many true values are returned from the recursive functions. thicc af.
  At first, it gets the height of the entire tree if it's <= 1 starting from node A
   we check the left subtree to check if it's balanced starting on Node B
   if the left subtree is balanced, we check the right subtree on Node C 
   **/
  return Math.abs(height(tree.left) - height(tree.right)) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};

















//  Iterative Approach

function isBalanced(treeRoot) {

  // a tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
      return true;
  }

  var depths = [];  // we short-circuit as soon as we find more than 2

  // nodes will store pairs of a node and the node's depth
  var nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {

      // pop a node and its depth from the top of our stack
      var nodePair = nodes.pop();
      var node  = nodePair[0],
          depth = nodePair[1];

      // case: we found a leaf
      if (!node.left && !node.right) {

          // we only care if it's a new depth
          if (depths.indexOf(depth) < 0) {
              depths.push(depth);

              // two ways we might now have an unbalanced tree:
              //   1) more than 2 different leaf depths
              //   2) 2 leaf depths that are more than 1 apart
              if ((depths.length > 2) ||
                      (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
                  return false;
              }
          }

      // case: this isn't a leaf - keep stepping down
      } else {
          if (node.left) {
              nodes.push([node.left, depth + 1]);
          }
          if (node.right) {
              nodes.push([node.right, depth + 1]);
          }
      }
  }

  return true;
}
