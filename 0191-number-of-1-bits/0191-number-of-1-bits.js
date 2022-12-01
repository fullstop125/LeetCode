/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    let counter = 0;
    
    while(n!==0 ){
        
        
        let isOne = n & 1 ;
        
        if( isOne === 1) counter ++;
        
        n = n >>> 1;
    }
    
    return counter;
};