/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
	// for
return ()=>{ ;
			let everything=args.map(( item )=>{ return item });
			console.log(everything);
			everything.forEach((item)=> {func.call(item) })
	return func.call(this, everything)};


}	

 var jae = function(name, age, location) {
      return name + " is " + age + " and he lives in " + location;
    };
 
    var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
    //jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 
  //Another Example:
    var jasmine = function(name, age) {
      if(!age){
        return "We don't know how old " + name + " is!";
      }
 
      else{
        return name + " is " + age + " years old!";
      }
    };
 
    var jmoney = applyIt(jasmine, ["Jasmine"]);
    //jmoney(); //Returns "We don't know how old Jasmine is!"
 

	console.log( jmoney() );
	console.log( jaero() );



module.exports = applyIt;
