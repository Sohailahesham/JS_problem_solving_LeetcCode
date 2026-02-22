1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function (s) {
6  s = s.toLowerCase().split("");
7  for (let i = 0; i < s.length; i++) {
8    if (!((s[i] >= "a") & (s[i] <= "z") || (s[i] >= "0") & (s[i] <= "9"))) {
9      s[i] = "";
10    }
11  }
12  let str = s.join("");
13  let reversed = s.reverse().join("");
14  return str == reversed;
15};