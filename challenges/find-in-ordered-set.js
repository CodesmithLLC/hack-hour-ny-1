/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  
  //declare our helper binSearch
  function binSearch(start,end){
    //find middle index
    const mid = Math.floor((start + end)/2);
    //check if value at middle index is === target ? return true
    if(arr[mid] === target) return true;
    //check if the start index === end ? return false
    else if(start === end) return false;
    //recursive call to helper function
      //check value of the arr[middle] and target, to determine params to pass in
    else return arr[mid] > target ? binSearch(start, mid - 1) : binSearch(mid + 1, end)
  }
  //return binSearch()
  return binSearch(0, arr.length - 1);
}


module.exports = findInOrderedSet;
