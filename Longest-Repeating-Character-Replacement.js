1/**
2 * @param {string} s
3 * @param {number} k
4 * @return {number}
5 */
6var characterReplacement = function (s, k) {
7  let maxFreq = 0;
8  let ans = 0;
9  let left = 0;
10  let obj = {};
11  for (let i = 0; i < s.length; i++) {
12    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
13    maxFreq = Math.max(maxFreq, obj[s[i]]);
14    let windowLength = i - left + 1;
15    if (windowLength - maxFreq > k) {
16      obj[s[left]]--;
17      left++;
18    }
19    ans = Math.max(ans, i - left + 1);
20  }
21  return ans;
22};