/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    for (let i = 0; i <=strs[0].length; i++){
        for (let k =1; k<strs.length; k++){
            if (strs[0][i] !== strs[k][i]){
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};