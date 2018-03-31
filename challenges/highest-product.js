/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	//
	//create a temp value to hold the current highest value
	//
	//loop through the array
	//loop through each subarray

	//
	let maxVar=0;
	let newArray=[];
	if(array.length<3)return false;

	maxVar= array[0]*array[1]*array[2];
	newArray.push(array[0]);newArray.push(array[1]);newArray.push(array[2]);

	for (let i = 0; i < array.length-2; i++) {
		let v1=i+1;
		let v2=i+2;
		if(array[i] * array[v1] * array[v2] > maxVar ){
			newArray[0]=array[i];
			maxVar= array[i] * array[i+1] * array[i+2];
			console.log(maxVar);

		}
		for (let j = i+1; j < array.length-1; j++) {
			let val1=j+1;
		    let val2=j+2;
			if(array[j-1] * array[j] * array[val2] > maxVar ){
				newArray[1]=array[j];
				maxVar= array[j-1] * array[j] * array[j+1] ;
				//console.log(maxVar);

			}
			for (let k = i+2; k < array.length; k++) {
				if(array[k-2] * array[k-1] * array[k]   >  maxVar  ){
					newArray[2]=array[k];
					maxVar= array[k-2] * array[k-1] * array[k];
					//console.log(maxVar);

				}
			}
		}
	}





return newArray;
}

console.log( highestProduct([1,2,3,4,5,6,7]) );

//module.exports = highestProduct;
