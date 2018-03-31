/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time,
  which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, 
 so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the 
 best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
let s=stock_prices_yesterday;
//console.log(stock_prices_yesterday);

	let lowestPriceIndex=0;
	let lowestPrice=s[0];
	let highestSale=0;

for (var i = 0; i < s.length; i++) {
	
	if(s[i] <lowestPrice){lowestPrice=s[i] ; lowestPriceIndex= i;}
}
//console.log(lowestPriceIndex)
for (var i = lowestPriceIndex+1; i < s.length; i++) {
	
	if( s[i] >  highestSale){ lowestPrice=s[i]; highestSale= s[i]; }
}

//console.log(highestSale);
 return highestSale;
}
let ary=[25,  1,  2,  3,  4,  5,  6,  7,  8,  9,  24,  11, 12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  26];




//console.log(bestProfit(ary));
module.exports = bestProfit;
