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


// Method 2:
const shuffleArray = (nums, n) => {
  const shuffled = [];

  for (let i = 0; i < n; i++) {
    shuffled.push(nums[i]);
    shuffled.push(nums[i + n]);
  }

  return shuffled;
};