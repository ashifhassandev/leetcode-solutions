// Method 1:
const buildArray = (nums) => {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
};


// Method 2:
const makeArray = (nums) => nums.map((_, index) => nums[nums[index]]);