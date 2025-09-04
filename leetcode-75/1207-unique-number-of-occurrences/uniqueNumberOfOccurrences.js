// Method 1:
const uniqueOccurrences = (arr) => {
  const freqMap = new Map();

  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const values = [...freqMap.values()];

  return new Set(values).size === values.length;
};

// Method 2:
const findUniqueOccurrences = (arr) => {
  const freqMap = new Map();

  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const seen = new Set();

  for (const freq of freqMap.values()) {
    if (seen.has(freq)) return false;
    seen.add(freq);
  }

  return true;
};