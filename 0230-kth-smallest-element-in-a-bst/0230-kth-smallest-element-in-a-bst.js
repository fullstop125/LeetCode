/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    const array=[];
    
    isOrdered(root,array);
    
    return kthElement(array , k );
    
};

const isOrdered = (root, array) =>{
    if(!root) return;
    
    isOrdered(root.left , array);
    
    array.push(root.val);
    
    isOrdered(root.right , array);
    
}

const kthElement = (array, k) => {
    for(i = 0 ; i < array.length; i ++){
        if (i === k-1) return array[i];
    }
}