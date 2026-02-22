1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var threeSum = function (nums) {
6  nums.sort((a, b) => a - b);
7  if (nums[0] > 0) return [];
8  let ans = [];
9  for (let i = 0; i < nums.length - 2; i++) {
10    if (i > 0 && nums[i] === nums[i - 1]) continue;
11    let left = i + 1,
12      right = nums.length - 1;
13    while (left < right) {
14      let sum = nums[i] + nums[left] + nums[right];
15      if (sum === 0) {
16        ans.push([nums[i], nums[left], nums[right]]);
17
18        while (left < right && nums[left] === nums[left + 1]) left++;
19        while (left < right && nums[right] === nums[right - 1]) right--;
20
21        left++;
22        right--;
23      } else if (sum < 0) left++;
24      else right--;
25    }
26  }
27  return ans;
28};