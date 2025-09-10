// Method 1:
const majorityElement = (nums) => {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};


// Method 2:
const getMajorityElement = (nums) => {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (const [num, freq] of freqMap) {
    if (freq > nums.length / 2) return num;
  }
};


// Method 3:
const findMajorityElement = (nums) => {
  let majority = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      majority = num;
    }

    count += (num === majority) ? 1 : -1;
  }

  return majority;
};