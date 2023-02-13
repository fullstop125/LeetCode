/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
     let map = new Map();
     for (let i = 0; i < nums.length; i++) {
     let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
//    let l = 0;
//     let r = nums.length -1;
//     while (l < r){
        
//         let sum = nums[l] + nums[r];
        
//         if (sum === target){
//             return [l, r];
//         }
//         else if (sum < target){
//             l++;
//         }
//         else{
//             r--;
//         }
//     }

    return [l, r];
};