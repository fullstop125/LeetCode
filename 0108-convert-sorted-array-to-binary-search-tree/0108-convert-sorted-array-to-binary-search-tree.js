/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    if (!nums || nums.length ===0 ) return null;
    
    return constructTree(nums, 0, nums.length -1);
};

function constructTree(nums, left , right){
    
    if (left > right) return null;
    
    let midPoint = Math.floor((left + right )/ 2);
    
    let node = new TreeNode(nums[midPoint]);
    
    node.left = constructTree(nums, left, midPoint -1 );
    
    node.right = constructTree(nums, midPoint +1 , right);
    
    return node;
}

