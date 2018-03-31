/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
	let newString="";
	if(  s1.length != s2.length) return false;
	for (let i = 0; i < s1.length; i++) {
		s1[i]
		for (let j = 0; j < s2.length; j++) {
			s2[j]
			if( s1[i]=== s2[j] ){
				let count=0;
				let tracker=j;
				while( count < s1.length ){
					
					if( tracker >j )tracker=tracker-j;

					if( s1[i] === s2[tracker] ) newString.concat( s1[i] );	
					count ++;
				}
			}
		}
	}

	return isSubstring(newString, s2 );
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
