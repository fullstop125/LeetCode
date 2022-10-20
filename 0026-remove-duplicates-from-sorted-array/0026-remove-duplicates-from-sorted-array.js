/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length ===0 )
        return 0;
    let currentNum =0;
    
    for(let i =0; i<nums.length; i ++){
        if (nums[i] !== nums[currentNum]){
            currentNum ++;
            nums[currentNum] = nums[i];
        }
    }
    
    return currentNum +1
    
   
};

