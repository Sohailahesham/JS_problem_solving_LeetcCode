1/**
2 * @param {string} s1
3 * @param {string} s2
4 * @return {boolean}
5 */
6var checkInclusion = function(s1, s2) {
7    if (s1.length > s2.length) return false;
8
9    let s1Count = {};
10    let windowCount = {};
11
12    for (let char of s1) {
13        s1Count[char] = (s1Count[char] || 0) + 1;
14    }
15
16    let windowSize = s1.length;
17    for (let i = 0; i < windowSize; i++) {
18        let char = s2[i];
19        windowCount[char] = (windowCount[char] || 0) + 1;
20    }
21
22    const isMatch = () => {
23        for (let key in s1Count) {
24            if (windowCount[key] !== s1Count[key]) return false;
25        }
26        return true;
27    }
28
29    if (isMatch()) return true;
30
31    for (let i = windowSize; i < s2.length; i++) {
32        let newChar = s2[i]; 
33        let oldChar = s2[i - windowSize];
34
35        windowCount[newChar] = (windowCount[newChar] || 0) + 1;
36        windowCount[oldChar]--;
37        if (windowCount[oldChar] === 0) delete windowCount[oldChar];
38
39        if (isMatch()) return true;
40    }
41
42    return false;
43};