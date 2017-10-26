//  CS-HackHours-highestProduct

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function sortByNumber(a,b) {
    return a - b;
}

function highestProduct(array, numOperands = 3) {
  // console.log("___________________________________>>>");
  // console.log("subsetSum(" + array + " , numOperands = " + numOperands + ")");
  array.sort(sortByNumber);
  // console.log("array[" + array.length + "] === " + array);
  let productResult;
  if (array.length >= numOperands) {
    for (let iOp = 1; iOp <= numOperands; iOp += 1) {
      (productResult) ? productResult *= array.pop() : productResult = array.pop();
    }
  }
  
  return productResult;
}

console.log(highestProduct([3, 7])					  );  //  -> 
console.log(highestProduct([3, 7, 2])					  );  //  -> 
console.log(highestProduct([3, 34, 4, 12, 5, 12]) 	);  //  -> 
console.log(highestProduct([8, 2, 4, 12])			      );  //  -> 



(()=>{  // an 'aside' exploration of handling the problem with negative numbers
  
  function highestProductIfNegOperands(array, numOperands = 3) {
    let productINOResult = highestProduct(array, numOperands);
    if (productINOResult <= 0) {
      
      // ToDo...
      
    }
    return productINOResult;
  }
  //  Note:  adding the ability to have negative numbers really messes with the logic needed to return the "highestProduct"
  //         if (number of negitive numbers is even < numOperands) then you would wa
  //         if (number of positive numbers < numOperands) then you would wa
  console.log(highestProduct([8, 2, 4, 12])			      );  //  -> 
  console.log(highestProductIfNegOperands([8, -2, 1, -3])		    	);  //  -> 
  
})();

// console.log(highestProduct([8, -2, 1, -3])		    	);  //  -> 

module.exports = highestProduct;