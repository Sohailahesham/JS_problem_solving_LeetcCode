1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function (s) {
6  let current = "";
7  let maxLength = 0;
8  for (let i = 0; i < s.length; i++) {
9    if (!current.includes(s[i])) {
10      current += s[i];
11    } else {
12      let j = current.indexOf(s[i]);
13      current = current.slice(j + 1) + s[i];
14    }
15    maxLength = Math.max(current.length, maxLength);
16  }
17  return maxLength;
18};