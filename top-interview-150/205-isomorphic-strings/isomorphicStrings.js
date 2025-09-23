// Method 1:
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  sFreqMap = new Map();
  tFreqMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (
      (sFreqMap.has(sChar) && sFreqMap.get(sChar) !== tChar) ||
      (tFreqMap.has(tChar) && tFreqMap.get(tChar) !== sChar)
    ) {
      return false;
    }

    sFreqMap.set(sChar, tChar);
    tFreqMap.set(tChar, sChar);
  }

  return true;
};