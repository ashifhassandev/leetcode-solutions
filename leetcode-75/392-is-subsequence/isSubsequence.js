// Method 1:
const isSubsequence = (s, t) => {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j++]) i++;
  }

  return i === s.length;
};