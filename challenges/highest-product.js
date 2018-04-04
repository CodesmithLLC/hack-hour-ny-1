/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(!Array.isArray(array)){
        return 0;
    }else if(arrray.length<3){
        return 0;
    }else{
        arr = array.sort(function(a,b){
            return b-a    });
        tot = 1;
        for(var i = 0; i < 3; i++){
            tot*=arr[i];
        }
        return tot;
    }
   
}


module.exports = highestProduct;
