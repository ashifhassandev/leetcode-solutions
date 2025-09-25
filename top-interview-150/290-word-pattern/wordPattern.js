// Method 1:
const wordPattern = (pattern, s) => {
  const sArray = s.split(" ");

  if (pattern.length !== sArray.length) return false;

  const patternMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const patternChar = pattern[i];
    const sChar = sArray[i];

    if (
      (patternMap.has(patternChar) && patternMap.get(patternChar) !== sChar) ||
      (sMap.has(sChar) && sMap.get(sChar) !== patternChar)
    ) {
      return false;
    }

    patternMap.set(patternChar, sChar);
    sMap.set(sChar, patternChar);
  }

  return true;
};