/**
 * Single Number
 *
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Your algorithm should have a linear runtime complexity.
 *
 */

var singleNumber = function(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
    }
    for (var i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === 1) {
            return nums[i];
        }
    }
};
