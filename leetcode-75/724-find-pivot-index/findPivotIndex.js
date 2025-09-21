// Method 1:
const pivotIndex = (nums) => {
  let sum = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];

    if (sum === leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
};