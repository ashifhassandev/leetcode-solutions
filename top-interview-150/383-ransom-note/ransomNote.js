// Method 1:
const generateHashMap = (str) => {
  const freqMap = new Map();

  for (const char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  return freqMap;
};

const canConstruct = (ransomNote, magazine) => {
  const ransomNoteMap = generateHashMap(ransomNote);
  const magazineMap = generateHashMap(magazine);

  for (const [char, freq] of ransomNoteMap) {
    if (!magazineMap.has(char) || magazineMap.get(char) < freq) return false;
  }

  return true;
};