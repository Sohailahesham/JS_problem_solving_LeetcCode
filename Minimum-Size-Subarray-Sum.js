1/**
2 * @param {number} target
3 * @param {number[]} nums
4 * @return {number}
5 */
6var minSubArrayLen = function (target, nums) {
7  let left = 0;
8  let sum = 0;
9  let minLength = Infinity;
10
11  for (let right = 0; right < nums.length; right++) {
12    sum += nums[right];
13
14    while (sum >= target) {
15      minLength = Math.min(minLength, right - left + 1);
16      sum -= nums[left];
17      left++;
18    }
19  }
20
21  return minLength === Infinity ? 0 : minLength;
22};