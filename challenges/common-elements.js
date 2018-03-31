// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
	//merge all arrays in one
	let allArrays = []

	allArrays.push(array1);
	allArrays.push(array2);
	allArrays.push(array3);
	allArrays.push(array4);
    
    //declare an empty array
	let newArray = [];

	//go through element and check element from one array againts each element from another array
	
	let endResult = allArrays.reduce(function(newAccArry, eachArry, index , allArrays ){
		
	  for (let i = 0; i < allArrays.length; i++) {
	  	//if i matches the the index will avoid searching in this scenario. and continue to the next array
  		if( i === index ){ 
  		  continue
  		}
		 		
		//go through eveysub array and check for a match
  		for (let j = 0; j < allArrays[i].length; j++) {
	    //if they have a match then push it into a new array
  			if( eachArry[i]  ===  allArrays[i][j] )
	  		 newArray[i]=[eachArry[i]];
	    //if they don't match continue to the next element
  		}
 
	  }

	});

	
	//if the new array has a length bigger than 1 return the newarray
	if(  endResult.lengt > 1 ) return endResult;

    // otherwise return nothing in commin as a defautlt result
	return "Nothing in Common!";
}

  var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  var array4 = ['ferret',12,12,45,9,66,77,78,2000];
console.log(commonElements(array1, array2, array3, array4  ) )

module.exports = commonElements;
