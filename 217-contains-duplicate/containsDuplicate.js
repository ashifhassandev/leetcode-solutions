// Method 1:
const containsDuplicate = (nums) => {
  const freqMap = new Map();

  for (const num of nums) {
    if (freqMap.has(num)) {
      return true;
    } else {
      freqMap.set(num, true);
    }
  }

  return false;
};


// Method 2:
const checkContainsDuplicate = (nums) => {
  return new Set(nums).size !== nums.length;
};