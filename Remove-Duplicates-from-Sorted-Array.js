1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function (nums) {
6  let i = 0;
7  for (let j = 1; j < nums.length; j++) {
8    if (nums[j] !== nums[i]) {
9      i++;
10      nums[i] = nums[j];
11    }
12  }
13  return i + 1;
14};