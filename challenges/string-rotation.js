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
  if(s1[0]!==s2[0]){
    for(var i = 0; i<s1.length; i++){
      if(s2[i]===s1[0]){
        //shift the letter to the front until that letter matches the start of the first letter in the string
      }
    }
  }else if(s1[0] === s2[0]&&s1[s1.length-1] === s2[s2.length-1]){
    return isSubstring(s1,s2);
  }
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
