1/**
2 * @param {string} s1
3 * @param {string} s2
4 * @return {boolean}
5 */
6var checkInclusion = function (s1, s2) {
7  if (s1.length > s2.length) return false;
8
9  let s1Obj = {};
10  
11  for (let char of s1) {
12    s1Obj[char] = (s1Obj[char] || 0) + 1;
13  }
14
15  for (let i = 0; i <= s2.length - s1.length; i++) {
16    let txt = s2.slice(i, i + s1.length);
17    let txtObj = {};
18
19    for (let char of txt) {
20      txtObj[char] = (txtObj[char] || 0) + 1;
21    }
22
23    let isMatch = true;
24
25    for (let key in s1Obj) {
26      if (txtObj[key] !== s1Obj[key]) {
27        isMatch = false;
28        break;
29      }
30    }
31
32    if (isMatch) return true;
33  }
34
35  return false;
36};