/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {

	console.log(jazbook[0][0])
	// loop through the array
	for (let i = 0; i < jazbook.length; i++) {
	// for each element check for the name to match at element i[j][0]
		//for (let j = 0; j < jazbook.length; j++) {
			console.log(jazbook[i])
	// if so return the number(value) of that matched name 
			//if( name === "") return true;		
		//}
	}
	// 	if not then simple return false after looping through
	return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
	let hashtable = {};
	// loop through the array of arrays
	for (let i = 0; i < jazbook.length; i++) {
	// get the first name and the phone number into a hashtable
		hashtable[jazbook[i]] = jazbook[i];
	}
	// return the hashtable
	return hashtable;
	

}

   jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505']
     ['jasmine','1800-974-4539'],
   ];
console.log(jazbook[0]); // 1
//console.log(findName(jazbook, "jasmine") );
//console.log(makePhoneBookObject(jazbook) );

const objectToExport = {
  findName,
  makePhoneBookObject,
};



module.exports = objectToExport;
