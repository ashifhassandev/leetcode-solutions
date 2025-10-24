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


// Method 2:
const getIntersection = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const result = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};