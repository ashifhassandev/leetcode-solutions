// Method 1:
const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;
  let longestSubstring = "";

  for (const char of s) {
    const index = longestSubstring.indexOf(char);

    if (index !== -1) {
      longestSubstring = longestSubstring.slice(index + 1);
    }

    longestSubstring += char;
    maxLength = Math.max(maxLength, longestSubstring.length);
  }

  return maxLength;
};


// Method 2:
const getLengthOfLongestSubstring = (s) => {
  const indexMap = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (indexMap.has(char) && indexMap.get(char) >= left) {
      left = indexMap.get(char) + 1;
    }

    indexMap.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};