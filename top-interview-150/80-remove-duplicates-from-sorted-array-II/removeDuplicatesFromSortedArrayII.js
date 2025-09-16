// Method 1:
const remove = (nums, index) => {
  for (let i = index; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1];
  }

  nums.length--;
  return nums;
};

const removeDuplicates = (nums) => {
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;

      if (count > 2) {
        nums = remove(nums, i);
        i--;
      }
    } else {
      count = 1;
    }
  }

  return nums.length;
};


// Method 2:
const removeArrayDuplicates = (nums) => {
  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};