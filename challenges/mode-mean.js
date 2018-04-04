/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean MEAN = AVERAGE
 * 	- If there are multiple modes, use the max of the modes 
 MODE = most repeating number but if there is no repeats then there is no mode
 *
 * Return true or false
 *
 */


function modemean(array) {
	var avg = array.reduce(function(a,b){
		return a+b
	})/array.length;
	avg = Math.floor(avg);

	var modeObj = array.reduce(function(obj,el){
		if(obj[el]===undefined){
			obj[el] = 1;
		}else{
			obj[el]++;
		}
		return obj;
	},{})

	var keys = [];
	var max = 1;
	//find the max modeObj value:
	//loop through values in mode and if it's greater than 1 update max
	for(var occurence in modeOBj){
		if(modeObj[occurence]>max){
			max = modeObj[occurence];
		}
	}
	// find the key with the greatest mode value 
	//if there are multiple numbers set, the largest number as the mode
	for(var key in modeObj){
		if(modeObj[key] === max){
			keys.push(key);
		}
	}
	// compare to see if the mode and mean are the same
	if(keys.length === 1){
		return avg === keys[0];
	}else{
		var largestNum = Math.max(...keys);
		return avg === largestNum;
	}
}

module.exports = modemean;






















