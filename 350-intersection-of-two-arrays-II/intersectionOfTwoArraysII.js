// Method 1:
const generateMap = (nums) => {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  return freqMap;
};

const intersect = (nums1, nums2) => {
  const [smallest, longest] =
    nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];

  const smallestMap = generateMap(smallest);
  const result = [];

  for (const num of longest) {
    if (smallestMap.has(num) && smallestMap.get(num) > 0) {
      result.push(num);
      smallestMap.set(num, smallestMap.get(num) - 1);
    }
  }

  return result;
};