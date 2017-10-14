/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
let sorted = array.sort(function(a,b) {
    return a - b
})
let mode = sorted.length / 2;

let sum = 0;
    for (var i = 0; i < sorted.length; i += 1) {
        sum += sorted[i];
    } 
let mean = Math.floor(sum/ sorted.length);

if(mean === mode) {
    return true
} else {
    return false;
}

}

module.exports = modemean;
