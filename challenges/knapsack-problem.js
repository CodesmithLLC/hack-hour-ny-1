/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
	
	// intialize variable that tract the current value count and weight count
	let currentValue = 0;
	let currentWeightCount = 0;
	let betterValue = 0;
	let betterWeightCOunt = 0;
	// go through array of objects
	for(var i = 0; i < items.length; i++) {
	  items[i]
	// for every object in the array verify if the wieght as exceeded 
	  if( items[i].weight + currentWeightCount <= weightAvailable  ){ 
	    currentWeightCount = items[i].weight + currentWeightCount;
	    currentValue = currentValue + items[i].value;	
	   }else{
		// 	if not then return the value count
	   	 currentValue;
	   	 continue;
	   }

	// 	if the weight has exceeded then return the current value count
	}
	//if there is a better wheight count then update the betterWeightCOunt anb bette value

	// after the loop is done return the value count		
	return currentValue;


};

let items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
  console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
