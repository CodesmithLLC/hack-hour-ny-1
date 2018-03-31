/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {

	//define variable
	let begindx = 0;
	let endindx = arr.length-1 ;

	//select the middle part of the array
	let middleindx = ( arr.length-1 )/2 ;
	//exit the loop when the begining is greater than than the end
	while( begindx < endindx ){
		let beg= arr[begindx];
		let end = arr[endindx];
		let middle =arr[ middleindx ];
	// check if that is the targer number
	// if so return the number
	if(  middle === target  )return true

		
	// if it is more than the target number 
	if( middle > target ){
	//  consider the range from the begining of the range to the current middle
	// 	and produce a new middle 
	//  then do this whole process again
		beg = arr[begindx];
		end = arr[middleindx];
		middle = arr[ middleindx/2 ];

		begindx = begindx;
		endindx = middleindx;
		middleindx = middleindx/2 ;
	}else{
	// if it is less than the target number than 
	// 	consider the range from the middle as the new beging and the end of the array as the new range
	//  and produce a new middle in between
	// then do this whole process again
	// 	
		beg = arr[middleindx];
		end = arr[endindx];
		middle = arr[ (middleindx/2)+middleindx ];

		begindx = middleindx;
		endindx = endindx;
		middleindx = (middleindx/2)+middleindx;
		}
	

	}	

  ///change
	return false;
}


module.exports = findInOrderedSet;
