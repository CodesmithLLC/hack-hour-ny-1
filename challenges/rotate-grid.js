/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

// O(n ^ 2) time, O(n) space
function rotateGrid(grid, n) {
  // n is the subarray length and the number of subarrays given
  var newGrid = [];
  
  // outer loop is looping in the subarray indices, starting at index zero
  for (var i = 0; i < n; i ++) {
    var inner = [];
  // inner looper is looping the subarrays starting from the end based on n (number of subarrays)
    for (var j = n - 1; j >= 0; j--) {
      //start by pushing the last subarray with the index of 0;
      inner.push(grid[j][i]);
    }
    //push the inner arrays to the container arrays
    newGrid.push(inner);
  }
  
  return newGrid;
}

// O(n ^ 2) time, O(1) space
function rotateGrid(grid, n) {
  
  for (var i = 0; i < Math.floor(n / 2); i ++) {
    var first = i;
    var last = n - 1 - i;
    
    for (var j = first; j < last; j ++) {
      var adjust = j - first;
      var top = grid[first][j];
      
      // left -> top
      grid[first][j] = grid[last-adjust][first];
      
      // bottom -> left
      grid[last-adjust][first] = grid[last][last-adjust];
      
      // right -> bottom
      grid[last][last-adjust] = grid[j][last];
      
      // top -> right
      grid[j][last] = top;
    }
  }
  return grid;

module.exports = rotateGrid;
