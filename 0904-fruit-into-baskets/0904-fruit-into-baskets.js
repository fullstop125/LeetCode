/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let start = 0;
    let end = 0; 
    let basket = new Map();
    let maxFruits = 0;
    
    while (end < fruits.length) {
        if (basket.size <= 2) {
            basket.set(fruits[end], basket.get(fruits[end]) + 1 || 1);
            end++;
        }
        if (basket.size > 2) {
            basket.set(fruits[start], basket.get(fruits[start]) - 1);
            if (basket.get(fruits[start]) === 0) {
                basket.delete(fruits[start]);
            }
            start++;
        }
        maxFruits = Math.max(maxFruits, end - start);
    }
    return maxFruits;
};





// [1,2,2,3,2,2]