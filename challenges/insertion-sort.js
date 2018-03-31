// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(arr) {
  
  //outer loop will iterate through each value in Array
  for(let i = 0; i < arr.length; i++){
    //set a var equal to i from outer array
    let j = i;
    //while loop to check if it's neighbor is < itself
    while(j > 0 && arr[j-1] > arr[j]){
      //create a temp var to hold arr[j]
      let temp = arr[j];
      //set arr[j] = arr[j-1]
      arr[j] = arr[j-1];
      //arr[j-1] to temp
      arr[--j] = temp;
    }
  }
  return arr

}

module.exports = insertionSort;