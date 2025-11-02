// Method 1:
const shuffle = (nums, n) => {
  const shuffled = [];
  let left = 0;
  let right = n;

  while (left < n && right < nums.length) {
    shuffled.push(nums[left++]);
    shuffled.push(nums[right++]);
  }

  return shuffled;
};