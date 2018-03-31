/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

	for (let i = 0; i < arr.length; i++) {
		arr[i]
		for (let j = i; j < arr.length; j++) {
			if(arr[i]+arr[j] === n )return true;
		}
	}
	return false;
}

///console.log( twoSum([1,2,3, 5, 6, 7, 8, 9],   )   ); 	



/*"dataEmpId":"", 
  "company":"",
  "dataId":"",
  "title":"",
  "link":"",
  "userApplication":[{}]*/

/*

const userSchema = new Schema({
    nameFirst: ,
    nameLast: ,
    handle: ,
    email: ,
    password: ,
    userApplications :[{type: Schema.Type.ObjectId, ref: 'userApplications'}]
})
*/



module.exports = twoSum;
