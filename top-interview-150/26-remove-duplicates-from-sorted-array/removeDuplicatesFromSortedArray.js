// Method 1:
const removeDuplicates = (nums) => {
  let i;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      let j = i;

      while (j < nums.length - 1) {
        nums[j] = nums[j + 1];
        j++;
      }

      nums.length--;
      i--;
    }
  }

  return i;
};


// Method 2:
const removeDuplicateValues = (nums) => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};


// Method 3;
const removeDuplicateElements = (nums) => {
  const unique = [...new Set(nums)];

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }

  return unique.length;
};