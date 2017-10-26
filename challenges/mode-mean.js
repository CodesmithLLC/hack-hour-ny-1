/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
    let modeCounter = {};
    let modeValueMax = 0;
    let modeKeyMax = 0;
    let mean = 0;
    array.forEach(function(currentVal) {
        mean += currentVal;
        //if (currentVal.toString() in modeCounter)
        if (modeCounter.hasOwnProperty(currentVal))
            modeCounter[currentVal] ++;
        else
            modeCounter[currentVal] = 1;
        if (modeCounter[currentVal] > modeValueMax)
            modeValueMax = modeCounter[currentVal];
    }, this);
    mean = Math.floor(mean / array.length + 0.5);
    let modeCandidates = Object.keys(modeCounter).reduce((currentResult, currentKey)=>{
        if (modeCounter[currentKey] === modeValueMax) {
            // update currentResult
            currentResult[currentKey] = modeValueMax;
            if (Number.parseInt(currentKey) > modeKeyMax)
                modeKeyMax = Number.parseInt(currentKey);
        }
        return currentResult;
    }, {});
    console.log ("modemean(" + JSON.stringify(array) + ") >> modeKeyMax === " + modeKeyMax + "   mean === " + mean);
    return modeKeyMax === mean;
}
console.log ("modemean([1,2,2,3]) === " + modemean([1,2,2,3]));
console.log ("modemean([1,2,3,3]) === " + modemean([1,2,3,3]));
console.log ("modemean([1,2,2,3]) === " + modemean([1,2,1,3]));
module.exports = modemean;

