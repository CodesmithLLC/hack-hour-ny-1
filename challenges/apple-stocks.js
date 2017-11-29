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

function bestProfit(stock_prices_yesterday) {
  /**** first approach, but is very slow ****/

  // let profit = 0;
  // for (let i = 0; i < stock_prices_yesterday.length-1; i += 1) {
  //   let bought = stock_prices_yesterday[i];
  //   for (let j = i + 1; j < stock_prices_yesterday.length; j += 1) {
  //     let sold = stock_prices_yesterday[j];
  //     let diff = sold - bought;
  //     if (bought < sold && diff > profit) {
  //       profit = diff;
  //     }
  //   }
  // }
  // return profit;

  let profit = 0;
  for (let i = 0; i < stock_prices_yesterday.length-1; i += 1) {
    let bought = stock_prices_yesterday[i];
    let maxSold = Math.max(...stock_prices_yesterday.slice(i, stock_prices_yesterday.length));
    let diff = maxSold - bought;
    
    if (diff > profit) {
      profit = diff;
    }
  }
  return profit;

}

module.exports = bestProfit;
