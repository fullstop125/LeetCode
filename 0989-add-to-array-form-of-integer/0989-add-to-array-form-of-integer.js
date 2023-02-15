/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    
    // Convert k to an array-form integer
  const kArray = k.toString().split('').map(Number);

  // Initialize carry and result array
  let carry = 0;
  const result = [];

  // Loop through the digits of both numbers, starting from the right
  let i = num.length - 1;
  let j = kArray.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (i >= 0 ? num[i] : 0) + (j >= 0 ? kArray[j] : 0) + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return result;
    
};