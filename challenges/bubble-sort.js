// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  // swapped
  let swapped = true;
  // last ind 
  let lastInd = array.length-1;
  // while loop check swapped and last ind
  while (swapped && lastInd > 0) {
    // reset swapped val
    swapped = false;
    // iterate through our sub array
    for (let i = 0; i < lastInd; i += 1) {
      // compare our values
      if (array[i] > array[i + 1]) {
        // swapp our values
        [array[i], array[i+1]] = [array[i+1], array[i]];
        // set swapped to true
        swapped = true;
      }
    }
    // decrement last ind
    lastInd--;
  }
  // return 
  return array;
}

module.exports = bubbleSort;
