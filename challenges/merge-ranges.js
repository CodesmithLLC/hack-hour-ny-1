/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */
function merge(arr1, arr2) {
  return [arr1[0], arr2[1]];
}

function mergeRanges(array) {
  let mergedRanges = []
  for(let i = 0; i < array.length; i += 1) {
    for(let j = 0; j < array.length; j += 1) {
      if (array[i] != array[j]) {
        if (array[i][1] >= array[j][0]) mergedRanges.push([array[i][0], array[j][1]]);
        if (array[j][1] >= array[i][0]) mergedRanges.push([array[j][0], array[i][1]]);
      }
    }
  }
  return mergedRanges;
}

module.exports = mergeRanges;
