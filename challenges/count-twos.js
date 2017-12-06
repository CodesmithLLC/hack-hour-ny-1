// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  var str = '0' + String(num);
  var count = 0;

  for (var i = str.length - 1; i > 0; i--) {
    var slice = str.slice(0, i);
    if (str[i] > 2) {
      // add by one but leave it as the string with the leading 0
      slice = addOne(slice);
    }
    // add trailing zeroes until length matches
    slice = padNum(slice, str.length - 1);
    count += parseInt(slice);
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '2') {
      count += parseInt(str.slice(i + 1) || 0) + 1;
    }
  }

  return count;
}

function addOne(str) {
  return str.slice(0, -1) + (parseInt(str.slice(-1)) + 1);
}

function padNum(str, length) {
  while (str.length < length) {
    str += '0';
  }
  return str;
}

module.exports = countTwos;