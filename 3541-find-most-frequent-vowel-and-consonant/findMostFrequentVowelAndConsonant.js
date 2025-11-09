// Method 1:
const maxFreqSum = (s) => {
  const vowelCount = new Map();
  const consonantMap = new Map();
  const vowels = "aeiou";

  for (const char of s) {
    if (vowels.includes(char)) {
      vowelCount.set(char, (vowelCount.get(char) || 0) + 1);
    } else {
      consonantMap.set(char, (consonantMap.get(char) || 0) + 1);
    }
  }

  const vowelMax = Math.max(0, ...vowelCount.values());
  const consonantMax = Math.max(0, ...consonantMap.values());

  return vowelMax + consonantMax;
};