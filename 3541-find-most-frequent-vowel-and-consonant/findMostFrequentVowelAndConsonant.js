// Method 1:
const maxFreqSum = (s) => {
  const vowelCount = new Map();
  const consonantCount = new Map();
  const vowels = "aeiou";

  for (const char of s) {
    if (vowels.includes(char)) {
      vowelCount.set(char, (vowelCount.get(char) || 0) + 1);
    } else {
      consonantCount.set(char, (consonantCount.get(char) || 0) + 1);
    }
  }

  const vowelMax = Math.max(0, ...vowelCount.values());
  const consonantMax = Math.max(0, ...consonantCount.values());

  return vowelMax + consonantMax;
};