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


function mergeRanges(array) {
  return array.sort((a, b) => a[0] - b[0]).reduce((accm, curr) => {
    // if new timeslot is completely after accm's last timeslot
    if (!accm.length || curr[0] > accm[accm.length - 1][1]) return [...accm, curr];
    // if new timeslot is completely inside accm's last timeslot
    if (curr[1] < accm[accm.length - 1][1]) return accm;
    // else new timeslot must be overlapping
    return [...accm.slice(0, -1), [accm[accm.length - 1][0], curr[1]]];
  }, []);
}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

// console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]
module.exports = mergeRanges;
