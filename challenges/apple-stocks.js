/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */
// [1,2,10,4]

function bestProfit(stocks) {

//set a var to keep track of lowest price (index)
let lowI = 0;
//set a var to keep track of highest profit(sum)
let maxProfit = 0;
//set a var to hold our potential profit
let potentialProfit;

//iterate through
for(let i = 0; i < stocks.length; i += 1) {
    //check to see if price at i is lower than our lowest price
    //if it is, set that to lowest price
    lowI = stocks[lowI] < stocks[i] ? lowI : i;
    //subtract our price at i from our lowest price
    potentialProfit = stocks[i] - stocks[lowI];
    //if its greater than our highest profit, set our profit to that diff
    maxProfit = potentialProfit > maxProfit ? potentialProfit: maxProfit;
    }
    return maxProfit
};

module.exports = bestProfit;
