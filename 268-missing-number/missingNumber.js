// Method 1:
const missingNumber = (nums) => {
  const numsSet = new Set(nums);

  let i = 0;
  while (i <= numsSet.size) {
    if (!numsSet.has(i)) return i;
    i++;
  }
};


// Method 2:
const getMissingNumber = (nums) => {
  const n = nums.length;

  const totalSum = (n * (n + 1)) / 2;
  const arraySum = nums.reduce((sum, num) => sum + num, 0);

  return totalSum - arraySum;
};