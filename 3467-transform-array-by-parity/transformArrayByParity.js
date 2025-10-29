// Method 1:
function transformArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? (nums[i] = 0) : (nums[i] = 1);
  }

  return nums.sort((a, b) => a - b);
}


// Method 2:
const transformArray = (nums) => {
  return nums.map((num) => (num % 2 ? 1 : 0)).sort((a, b) => a - b);
};