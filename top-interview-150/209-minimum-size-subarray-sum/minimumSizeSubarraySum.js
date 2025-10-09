// Method 1:
const minSubArrayLen = (target, nums) => {
  let minLength = 100001;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength < 100001 ? minLength : 0;
};