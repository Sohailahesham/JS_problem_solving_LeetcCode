1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function (height) {
6  //& (i2 - i1) * min(h2,h1);
7  let maxArea = 0;
8  let left = 0,
9    right = height.length - 1;
10  while (left < right) {
11    let area = (right - left) * Math.min(height[right], height[left]);
12    maxArea = Math.max(area, maxArea);
13    if (height[left] < height[right]) left++;
14    else right--;
15  }
16  return maxArea;
17};