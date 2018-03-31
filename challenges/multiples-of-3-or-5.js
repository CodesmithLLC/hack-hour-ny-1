'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;

  //loop through number 0->1000
  for (let i = 0; i < 100; i++) {
  	
  //check if n are mod 3 === 0 &&  mod 5 ===0 or then add that number
  if( i % 3 === 0 && i % 5 === 0  ){
   //console.log("both  ",sum)
    sum = sum+ i;
     //if any of the nubmers is n%3===0 then add that number
   } else if(i  % 3 === 0 ){
   	//console.log("3===0  ",sum)
  	  sum = sum+ i;
       //if not check the same for the number 5 n%5===0 then add that number
    } else if(i  % 5 === 0 ){
    //console.log("5===0  ",sum)	
  	  sum = sum+ i;
  	}
  }
  
  console.log(sum)
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;


  for (let i = 0; i < 100; i++) {
  	
  //check if n are mod 3 === 0 &&  mod 5 ===0 or then add that number
  if( i % x === 0 && i % y === 0 &&  i % z=== 0 ){
   //console.log("both  ",sum)
    sum = sum+ i;
     //if any of the nubmers is n%3===0 then add that number
   } else if(i  % x === 0 ){
   	//console.log("3===0  ",sum)
  	  sum = sum+ i;
       //if not check the same for the number 5 n%5===0 then add that number
    } else if(i  % y === 0 ){
    //console.log("5===0  ",sum)	
  	  sum = sum+ i;
  	} else if(i  % z === 0 ){
    //console.log("5===0  ",sum)	
  	  sum = sum+ i;
  	}
  }
  console.log(sum)
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

//sumMultiples3Or5Below1000();
//sumMultiplesXOrYBelowZ(0,3,5);

module.exports = objectToExport;
