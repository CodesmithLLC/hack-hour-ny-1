//  CS-HackHours-stringRotation

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
  if (s1.length !== s2.length) return false;
  else {
    let foundIdx;
    let shiftedTail = [];
    for (iSearch = 0; iSearch <= s2.length; iSearch += 1) {
      if (s1[0] === s2[iSearch]){
        console.log("Found Possible Match at " + iSearch);
        foundIdx = iSearch
        for (let iVerify = foundIdx; iVerify < s2.length + shiftedTail.length - 1; iVerify += 1) {
          console.log("iSearch === " + iSearch + "    iVerify ==" + iVerify + "    shiftedTail.length ==" + shiftedTail.length);
          if (iVerify < s2.length) {
            console.log("iVerify < s2.length  " + s1[iVerify-shiftedTail.length] + "!==" + s2[iVerify]);
            if (s1[iVerify-shiftedTail.length] !== s2[iVerify])
              return false;
          } else {
            console.log("else                 " + s1[iVerify-shiftedTail.length] + "!==" + s2[iVerify-s2.length]);
            if (s1[iVerify-shiftedTail.length] !== s2[iVerify-s2.length])
              return false;
          }
        }
      } else {
        shiftedTail.push(s2[iSearch]);
      }
    }
    return true;
  }
}


// console.log("All valid possibilities:");  // -> true
// console.log("*** result === " + stringRotation("hello", "hello"));  // -> true
// console.log("*** result === " + stringRotation("hello", "ohell"));  // -> true
// console.log("*** result === " + stringRotation("hello", "lohel"));  // -> true
// console.log("*** result === " + stringRotation("hello", "llohe"));  // -> true
// console.log("*** result === " + stringRotation("hello", "elloh"));  // -> true
// console.log("_______________________");  // -> true
// console.log("Testing invalid possibilities:");  // -> false
// console.log("*** result === " + stringRotation("hello", "he"   ));  // -> false
// console.log("*** result === " + stringRotation("hello", "ollhe"));  // -> false (not a rotation, just an anagram)

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};