// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	let newArray = array;
	//let temp = array[0];
	for (let i = 0; i < newArray.length; i++) {
		//array[i];
		for (let j = 1; j < newArray.length; j++) {

			if(newArray[j-1] > newArray[j] ){
			temp = newArray[j-1];
			newArray[j-1] = newArray[j];
			newArray[j] = temp;
			
			console.log( "newArray[]",newArray[j-1] )
			
			}else{		
			 
			newArray[j-1] = newArray[j-1];
			}
			
		}
	}
	console.log(newArray)
	return newArray;
}

bubbleSort([1,2,3,4,5,6,7,8,9]);

bubbleSort([9,8,7,6,5,4,3,2,1]);

module.exports = bubbleSort;
