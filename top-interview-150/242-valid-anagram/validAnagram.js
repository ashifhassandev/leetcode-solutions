// Method 1:
const generateMap = (str) => {
  const freqMap = new Map();

  for (const char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  return freqMap;
};

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sMap = generateMap(s);
  const tMap = generateMap(t);

  for (const [char, freq] of sMap) {
    if (!tMap.has(char) || tMap.get(char) !== freq) return false;
  }

  return true;
};