/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Store the total length of the two arrays combined
    const totalLength = nums1.length + nums2.length;

    // Store the middle point (rounding down for even lengths)
    const halfWayPoint = Math.floor(totalLength / 2);

    // Counters to track progress through each array
    let nums1Pos = 0;
    let nums2Pos = 0;
    let lastNum, secondToLastNum;

    // Loop until we reach the half-way point
    for (let i = 0; i <= halfWayPoint; i++) {
        // Store the previous number
        secondToLastNum = lastNum;

        // If we've run out of numbers in array 2, or if the next number in array 1 comes before (is lower than) the next number in array 2
        if (
            nums2[nums2Pos] == undefined ||
            (nums1[nums1Pos] != undefined && nums1[nums1Pos] <= nums2[nums2Pos])
        ) {
            // Store the next number in array 1	and increment its counter
            lastNum = nums1[nums1Pos];
            nums1Pos++;
        } else {
            // Store the next number in array 2 and increment its counter
            lastNum = nums2[nums2Pos];
            nums2Pos++;
        }
    }

    // Return either the last number, or an average of the last 2 numbers, depending on whether the array was odd or even (had 1 or 2 middle number(s))
    return totalLength % 2 ? lastNum : (lastNum + secondToLastNum) / 2;
    
};