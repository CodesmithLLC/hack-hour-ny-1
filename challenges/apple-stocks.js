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

//  Per Mark...  no short selling

class Option {
  constructor (time, price) {
    this.time = time;
    this.price = price;
  }
  profit (curVal) {
    return this.price - curVal;
  }
}


const stock_prices_yesterday = [495.7,496.35,497.07,494.17,493.11,493.66,500.75,499.18,500,502.42,503.69,504.67,498.93,501.09,503.46,505.21,504.56,501.47,501.11,500.82,503.39,503.59,502.88,503.47,505.08,506.52,506.96,507.61,507.66,505.69,505.52,504.87,502.24,505.11,504.47,503.26,501.89,503.49,502.28,502.34,499.68,497,495.5,494.16,492.34,496.75,497.84,496.89,497.73,497.42,498.09,497.09,499,498.91,499.45,499.51,500.16,499.61,500.6,503.49,504.08,503.37,499.59,499.86,499.78,500.71,500.66];


function bestProfit(stock_prices_yesterday) {
  let sPY = stock_prices_yesterday;
  
  let bestMins = [500];
  let bestSO = new Option(1, sPY[1]);

  for (i = 1; i < sPY.length; i++) {
    bestMins.push( ( sPY[i] < bestMins[i-1] ) ? sPY[i] : bestMins[i-1] );
    if ( (sPY[i] - bestMins[i]) > bestSO.profit( bestMins[i] )) {
      bestSO.time = i;
      bestSO.price = sPY[i];
    }
  }
  console.log("bestMins === ", bestMins);
  console.log("bestSO === ", bestSO);
  return ( bestSO.profit( bestMins[bestMins.length - 1]) > 0 ) ? bestSO.profit( bestMins[bestSO.time]) : 0;
}

console.log("bestProfit(stock_prices_yesterday) === ", bestProfit(stock_prices_yesterday));



module.exports = bestProfit;
