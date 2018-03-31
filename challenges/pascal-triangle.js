/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1], // Math.pow(2, 0)
    [1,1],// Math.pow(2, 1)
    [1,2,1], 
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows ) {
// using math pow, defaulting base to 2, and exponents to use a check

var triangle = [
  [1]
],
tier;

for (var j = 0; j < numRows-1; j++) {
  tier = [1];
  for (var k = 1; k < triangle[j].length; k++) {
    tier[k] = triangle[j][k] + triangle[j][k-1];
  }
  tier.push(1);
  triangle.push(tier);
}
console.log(triangle)
return triangle;
}

pascalTriangle(12);


//Mark's solution

function pasquale(n){
  //create outer array
  const outer = [];
  //outer loop
  for(let i = 0; i < n; i++){
    //create a new array
    let thisRow = [];
    //inner loop
    for(let j = 0; j <= i; j++){
      //if j is at 0 or i push 1
      if(j === 0 || j === i) thisRow.push(1);
      //else push sum of outerloop[i-1][j-1] and outerloop[i-1][j]
      else thisRow.push(outer[i-1][j] + outer[i-1][j-1]);
    };
    //push new row
    outer.push(thisRow);
    console.log(thisRow)
  };
  //return outer
  return outer;
};

module.exports = pascalTriangle;
