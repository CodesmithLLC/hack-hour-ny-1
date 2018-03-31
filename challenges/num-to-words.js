// Write a function that takes a number as an argument and returns its 
/*english word representation as a string. Answers should be in 
upper camel case (a.k.a. Pascal case). Don't worry about spaces.
*/// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
	//console.log(num);
	
    let ones= ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    let tens= ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    let sep= ['', ' thousand ', ' million ', ' billion ', ' trillion ', ' quadrillion ', ' quintillion ', ' sextillion ']

    let str='';
    let i=0;
    let newArry=[];


    while(num){
      newArry.push(num % 1000);
      num=parseInt(num/1000, 10);

    }

    while(arr.length){
	  str+=( ()=>{

	  	let a=Math

	  }




	  	)( arr.shift() )+ sep[i++]+str;   
    }

	//return num.toString();	
	return str; 
}

console.log(numToWords(2) ); //-> 'Zero'
console.log(numToWords(92120000000000000) );// -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
module.exports = numToWords;
